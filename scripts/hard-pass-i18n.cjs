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

const splitWhitespace = (raw) => {
  const value = String(raw || '');
  const leadingMatch = value.match(/^\s*/);
  const trailingMatch = value.match(/\s*$/);
  const leading = leadingMatch ? leadingMatch[0] : '';
  const trailing = trailingMatch ? trailingMatch[0] : '';
  const core = value.slice(leading.length, value.length - trailing.length);
  return { leading, core, trailing };
};

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
    if (!t.isImportDeclaration(node) || node.source.value !== 'i18next') {
      return;
    }

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
    const importNode = t.importDeclaration(
      [t.importDefaultSpecifier(t.identifier(localName))],
      t.stringLiteral('i18next')
    );
    ast.program.body.unshift(importNode);
    return localName;
  }

  if (!hasDefaultImport && localName === 'i18next') {
    // Namespace import already works as i18next.t(...)
    return localName;
  }

  return localName;
};

const createTranslateExpression = (identifierName, key, leading, trailing) => {
  const callExpr = t.callExpression(
    t.memberExpression(t.identifier(identifierName), t.identifier('t')),
    [t.stringLiteral(`${KEY_PREFIX}.${key}`)]
  );

  if (!leading && !trailing) {
    return callExpr;
  }

  return t.templateLiteral(
    [
      t.templateElement({ raw: leading, cooked: leading }, false),
      t.templateElement({ raw: trailing, cooked: trailing }, true),
    ],
    [callExpr]
  );
};

const translateViaGoogle = async (text, sourceLang = 'en', targetLang = 'hi') => {
  const url =
    'https://translate.googleapis.com/translate_a/single' +
    `?client=gtx&sl=${encodeURIComponent(sourceLang)}` +
    `&tl=${encodeURIComponent(targetLang)}&dt=t&q=${encodeURIComponent(text)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  if (!Array.isArray(data) || !Array.isArray(data[0])) {
    return text;
  }

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
        const translated = await translateViaGoogle(english, 'en', 'hi');
        hiAuto[key] = translated || english;
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
  const textByKey = new Map();

  let transformedFiles = 0;
  let transformedNodes = 0;

  files.forEach((filePath) => {
    const code = fs.readFileSync(filePath, 'utf8');
    const ast = parseFile(code, filePath);
    if (!ast) return;

    let localImportName = null;
    let changed = false;

    traverse(ast, {
      JSXText(pathRef) {
        const raw = pathRef.node.value;
        const normalized = normalizeText(raw);
        if (!shouldTranslate(normalized)) return;

        const { leading, core, trailing } = splitWhitespace(raw);
        const normalizedCore = normalizeText(core);
        if (!shouldTranslate(normalizedCore)) return;

        const key = makeKey(normalizedCore);
        textByKey.set(key, normalizedCore);
        en.auto[key] = normalizedCore;

        if (!localImportName) {
          localImportName = ensureI18nextImport(ast);
        }

        const expression = createTranslateExpression(localImportName, key, leading, trailing);
        pathRef.replaceWith(t.jsxExpressionContainer(expression));
        changed = true;
        transformedNodes += 1;
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

  const keys = Array.from(textByKey.keys());
  await fillHindiTranslations(hi.auto, en.auto, keys);

  writeJson(EN_PATH, en);
  writeJson(HI_PATH, hi);

  console.log(`Transformed files: ${transformedFiles}`);
  console.log(`Transformed JSX text nodes: ${transformedNodes}`);
  console.log(`New/updated auto keys: ${keys.length}`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
