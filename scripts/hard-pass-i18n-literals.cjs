/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const SRC_DIR = path.resolve(__dirname, '..', 'src');
const EN_PATH = path.resolve(SRC_DIR, 'locales', 'en.json');
const HI_PATH = path.resolve(SRC_DIR, 'locales', 'hi.json');

const PARSE_PLUGINS = [
  'jsx',
  'classProperties',
  'classPrivateProperties',
  'classPrivateMethods',
  'objectRestSpread',
  'optionalChaining',
  'nullishCoalescingOperator',
  'topLevelAwait',
];

const KEY_PREFIX = 'auto';

const TEXT_KEYS = new Set([
  'title',
  'subtitle',
  'description',
  'content',
  'label',
  'name',
  'text',
  'message',
  'note',
  'heading',
  'subheading',
  'program',
  'details',
  'intro',
  'metaTitle',
  'metaDescription',
  'question',
  'answer',
  'value',
  'caption',
  'alt',
  'placeholder',
]);

const NON_TEXT_KEYS = new Set([
  'to',
  'path',
  'href',
  'src',
  'id',
  'slug',
  'file',
  'files',
  'folder',
  'icon',
  'className',
  'variant',
  'color',
  'image',
  'video',
  'url',
  'type',
  'year',
  'date',
  'value',
  'key',
]);

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const writeJson = (filePath, data) =>
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');

const normalizeText = (value) => String(value || '').replace(/\s+/g, ' ').trim();
const hasHindiChars = (value) => /[\u0900-\u097F]/.test(value);
const hasLatinChars = (value) => /[A-Za-z]/.test(value);

const shouldTranslate = (value) => {
  const normalized = normalizeText(value);
  if (!normalized || normalized.length < 2) return false;
  if (hasHindiChars(normalized)) return false;
  if (!hasLatinChars(normalized)) return false;
  if (/^[\d\s\W_]+$/.test(normalized)) return false;
  return true;
};

const looksLikeAsset = (value) => {
  const text = String(value || '').trim();
  if (!text) return true;
  if (/^(https?:\/\/|\/|#|data:|mailto:|tel:)/i.test(text)) return true;
  if (/\.(pdf|jpg|jpeg|png|webp|svg|gif|mp4|webm|doc|docx|xls|xlsx|ppt|pptx|zip|rar)$/i.test(text)) {
    return true;
  }
  if (/^[A-Za-z0-9/_-]+\.[A-Za-z0-9]+$/.test(text)) return true;
  return false;
};

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim()
    .split(/\s+/)
    .slice(0, 7)
    .join('_')
    .replace(/_+/g, '_') || 'text';

const textHash = (value) => {
  let hash = 5381;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 33) ^ value.charCodeAt(i);
  }
  return (hash >>> 0).toString(36);
};

const makeKey = (text) => `${toSlug(text)}_${textHash(text)}`;

const walkFiles = (dir, files = []) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach((entry) => {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(absolute, files);
      return;
    }
    if (entry.isFile() && absolute.endsWith('.jsx')) {
      files.push(absolute);
    }
  });
  return files;
};

const parseFile = (code, filePath) => {
  try {
    return parser.parse(code, {
      sourceType: 'module',
      plugins: PARSE_PLUGINS,
    });
  } catch (error) {
    console.warn(`Skipping parse error in ${filePath}: ${error.message}`);
    return null;
  }
};

const ensureI18nextImport = (ast) => {
  let localName = null;
  let hasDefaultImport = false;

  ast.program.body.forEach((node) => {
    if (!t.isImportDeclaration(node) || node.source.value !== 'i18next') return;

    node.specifiers.forEach((specifier) => {
      if (t.isImportDefaultSpecifier(specifier)) {
        localName = specifier.local.name;
        hasDefaultImport = true;
      }
      if (t.isImportNamespaceSpecifier(specifier) && !localName) {
        localName = specifier.local.name;
      }
    });
  });

  if (!localName) {
    localName = 'i18next';
    ast.program.body.unshift(
      t.importDeclaration(
        [t.importDefaultSpecifier(t.identifier(localName))],
        t.stringLiteral('i18next')
      )
    );
    return localName;
  }

  if (!hasDefaultImport && localName === 'i18next') return localName;
  return localName;
};

const isInsideTranslationCall = (pathRef) =>
  Boolean(
    pathRef.findParent((p) => {
      if (!p.isCallExpression()) return false;
      const callee = p.node.callee;
      if (t.isMemberExpression(callee) && t.isIdentifier(callee.property, { name: 't' })) {
        return true;
      }
      return false;
    })
  );

const getPropertyName = (propertyNode) => {
  if (!propertyNode) return null;
  if (t.isIdentifier(propertyNode.key)) return propertyNode.key.name;
  if (t.isStringLiteral(propertyNode.key)) return propertyNode.key.value;
  return null;
};

const shouldConvertLiteral = (pathRef) => {
  const node = pathRef.node;
  const text = normalizeText(node.value);
  if (!shouldTranslate(text)) return false;
  if (looksLikeAsset(text)) return false;
  if (isInsideTranslationCall(pathRef)) return false;

  const parent = pathRef.parentPath;
  if (!parent) return false;

  if (parent.isJSXAttribute()) {
    const name = parent.node.name?.name;
    return ['placeholder', 'title', 'aria-label', 'alt'].includes(name);
  }

  if (parent.isObjectProperty()) {
    const keyName = getPropertyName(parent.node);
    if (!keyName) return false;
    if (NON_TEXT_KEYS.has(keyName)) return false;
    if (TEXT_KEYS.has(keyName)) return true;
    return false;
  }

  if (parent.isArrayExpression()) {
    const gp = parent.parentPath;
    if (!gp) return false;
    if (gp.isVariableDeclarator() && t.isIdentifier(gp.node.id)) {
      const varName = gp.node.id.name.toLowerCase();
      return /(list|items|points|content|messages|sections|features|objectives|highlights|members)/.test(
        varName
      );
    }
    if (gp.isObjectProperty()) {
      const keyName = getPropertyName(gp.node) || '';
      return /(list|items|points|content|messages|sections|features|objectives|highlights|members)/i.test(
        keyName
      );
    }
  }

  return false;
};

const createTranslateCall = (identifierName, key) =>
  t.callExpression(t.memberExpression(t.identifier(identifierName), t.identifier('t')), [
    t.stringLiteral(`${KEY_PREFIX}.${key}`),
  ]);

const translateViaGoogle = async (text, sourceLang = 'en', targetLang = 'hi') => {
  const url =
    'https://translate.googleapis.com/translate_a/single' +
    `?client=gtx&sl=${encodeURIComponent(sourceLang)}` +
    `&tl=${encodeURIComponent(targetLang)}&dt=t&q=${encodeURIComponent(text)}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  if (!Array.isArray(data) || !Array.isArray(data[0])) return text;
  const translated = data[0]
    .map((chunk) => (Array.isArray(chunk) ? chunk[0] : ''))
    .filter(Boolean)
    .join('');
  return translated || text;
};

const fillHindiTranslations = async (hiAuto, enAuto, keys) => {
  const queue = keys.filter((key) => {
    const value = hiAuto[key];
    if (!value) return true;
    return value === enAuto[key];
  });

  const concurrency = 5;
  let cursor = 0;

  const worker = async () => {
    while (cursor < queue.length) {
      const index = cursor;
      cursor += 1;
      const key = queue[index];
      const english = enAuto[key];
      if (!english) continue;

      try {
        hiAuto[key] = await translateViaGoogle(english, 'en', 'hi');
      } catch {
        hiAuto[key] = english;
      }
    }
  };

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
};

const run = async () => {
  const en = readJson(EN_PATH);
  const hi = readJson(HI_PATH);
  en.auto = en.auto || {};
  hi.auto = hi.auto || {};

  const files = walkFiles(SRC_DIR);
  const newKeys = new Set();
  let transformedFiles = 0;
  let transformedLiterals = 0;

  files.forEach((filePath) => {
    const code = fs.readFileSync(filePath, 'utf8');
    const ast = parseFile(code, filePath);
    if (!ast) return;

    let importName = null;
    let changed = false;

    traverse(ast, {
      StringLiteral(pathRef) {
        if (!shouldConvertLiteral(pathRef)) return;

        const normalized = normalizeText(pathRef.node.value);
        const key = makeKey(normalized);
        en.auto[key] = normalized;
        newKeys.add(key);

        if (!importName) {
          importName = ensureI18nextImport(ast);
        }

        const translateExpr = createTranslateCall(importName, key);
        const parent = pathRef.parentPath;

        if (parent.isJSXAttribute()) {
          pathRef.replaceWith(t.jsxExpressionContainer(translateExpr));
        } else {
          pathRef.replaceWith(translateExpr);
        }

        changed = true;
        transformedLiterals += 1;
      },
    });

    if (!changed) return;

    const output = generate(
      ast,
      {
        retainLines: false,
        jsescOption: { minimal: true },
      },
      code
    );
    fs.writeFileSync(filePath, `${output.code}\n`, 'utf8');
    transformedFiles += 1;
  });

  await fillHindiTranslations(hi.auto, en.auto, Array.from(newKeys));
  writeJson(EN_PATH, en);
  writeJson(HI_PATH, hi);

  console.log(`Transformed files: ${transformedFiles}`);
  console.log(`Transformed string literals: ${transformedLiterals}`);
  console.log(`New/updated auto keys: ${newKeys.size}`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
