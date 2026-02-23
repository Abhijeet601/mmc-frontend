/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src');
const PUBLIC_DIR = path.join(ROOT, 'public');

const ASSET_REF_REGEX = /['"](\/[A-Za-z0-9_\-./% ()]+\.(?:pdf|jpg|jpeg|png|webp|mp4|doc|docx|gif|svg|ppt|pptx))['"]/gi;

const SOURCE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.json']);
const LFS_HEADER = 'version https://git-lfs.github.com/spec/v1';
const allowLFSPointers = ['1', 'true'].includes(String(process.env.ALLOW_LFS_POINTERS || '').toLowerCase());

const walkFiles = (dir) => {
  const output = [];
  if (!fs.existsSync(dir)) {
    return output;
  }

  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else {
        output.push(fullPath);
      }
    }
  }

  return output;
};

const normalizeSlash = (value) => value.replace(/\\/g, '/');

const isLFSPointerFile = (filePath) => {
  try {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(120);
    const bytesRead = fs.readSync(fd, buffer, 0, 120, 0);
    fs.closeSync(fd);
    const header = buffer.toString('utf8', 0, bytesRead);
    return header.startsWith(LFS_HEADER);
  } catch {
    return false;
  }
};

const sourceFiles = walkFiles(SRC_DIR).filter((file) => SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase()));
const publicFiles = walkFiles(PUBLIC_DIR);

const publicRelative = publicFiles.map((file) =>
  normalizeSlash(path.relative(PUBLIC_DIR, file))
);
const publicSet = new Set(publicRelative);

const missingRefs = [];

const resolvePublicRelativePath = (rawRef) => {
  let relativePath = rawRef.replace(/^\/+/, '');
  try {
    relativePath = decodeURIComponent(relativePath);
  } catch {
    // keep as-is if URL decoding fails
  }
  return relativePath;
};

const pushMissingIfAbsent = (source, ref) => {
  const relativePath = resolvePublicRelativePath(ref);
  if (!publicSet.has(relativePath)) {
    missingRefs.push({ source, ref });
  }
};

for (const sourceFile of sourceFiles) {
  const content = fs.readFileSync(sourceFile, 'utf8');
  const matches = content.matchAll(ASSET_REF_REGEX);

  for (const match of matches) {
    const raw = match[1];
    pushMissingIfAbsent(normalizeSlash(path.relative(ROOT, sourceFile)), raw);
  }
}

const readSource = (sourcePath) => fs.readFileSync(path.join(ROOT, sourcePath), 'utf8');

const extractMatches = (text, regex, pick = 1) => {
  const matches = [];
  for (const match of text.matchAll(regex)) {
    matches.push(match[pick]);
  }
  return matches;
};

const runDynamicChecks = () => {
  const facultyFiles = ['src/pages/Departments.jsx', 'src/pages/nep2020/Humanities.jsx'];
  for (const file of facultyFiles) {
    const content = readSource(file);
    const images = extractMatches(content, /image:\s*'([^']+\.(?:jpg|jpeg|png|webp|gif|svg))'/gi);
    for (const image of images) {
      pushMissingIfAbsent(file, `/images/faculty/${image}`);
    }
  }

  {
    const content = readSource('src/pages/Home.jsx');
    const visitorImages = extractMatches(content, /image:\s*'([^']+\.(?:jpg|jpeg|png|webp|gif|svg))'/gi);
    for (const image of visitorImages) {
      pushMissingIfAbsent('src/pages/Home.jsx', `/images/visitor-notes/${image}`);
    }
  }

  {
    const content = readSource('src/pages/IQAC/AQAR.jsx');
    const files = extractMatches(content, /file:\s*'([^']+\.pdf)'/gi);
    for (const file of files) {
      pushMissingIfAbsent('src/pages/IQAC/AQAR.jsx', `/documents/IQAC/NAAC/AQAR/${file}`);
    }
  }

  for (const file of ['src/pages/IQAC/BestPractices.jsx', 'src/pages/IQAC/BestPracticesPhotoGallery.jsx']) {
    const content = readSource(file);
    const block = content.match(/const\s+imageNames\s*=\s*\[([\s\S]*?)\]/);
    if (!block) {
      continue;
    }
    const imageNames = extractMatches(block[1], /'([^']+\.(?:jpg|jpeg|png|webp|gif|svg))'/gi);
    for (const imageName of imageNames) {
      pushMissingIfAbsent(file, `/images/iqac/best-practices/${imageName}`);
    }
  }

  {
    const content = readSource('src/pages/about/MOU.jsx');
    const docs = extractMatches(content, /name:\s*'([^']+\.(?:pdf|jpg|jpeg|png|webp|gif|svg))'/gi);
    for (const doc of docs) {
      pushMissingIfAbsent('src/pages/about/MOU.jsx', `/documents/about/mou/${doc}`);
    }
  }

  {
    const sourcePath = 'src/pages/about/StudentsRollOfHonor.jsx';
    const content = readSource(sourcePath);
    const pdfs = extractMatches(content, /'([^']+\.pdf)'/gi);
    for (const pdf of pdfs) {
      pushMissingIfAbsent(sourcePath, `/documents/about/students-roll-of-honor/${pdf}`);
    }

    const yearsBlock = content.match(/const\s+academicYears\s*=\s*\[([\s\S]*?)\]/);
    if (yearsBlock) {
      const years = extractMatches(yearsBlock[1], /'(\d{4}(?:-\d{2})?)'/g);
      for (const year of years) {
        pushMissingIfAbsent(sourcePath, `/images/about/students-roll-of-honor/preview-${year}.jpg`);
      }
    }
  }

  {
    const sourcePath = 'src/pages/nep2020/CourseMaterial.jsx';
    const content = readSource(sourcePath);
    const blockRegex = /path:\s*'([^']+)'[\s\S]*?pdfs:\s*\[([\s\S]*?)\]/g;
    for (const block of content.matchAll(blockRegex)) {
      const folder = block[1];
      const pdfs = extractMatches(block[2], /'([^']+\.pdf)'/gi);
      for (const pdf of pdfs) {
        pushMissingIfAbsent(sourcePath, `/documents/course-materials/${folder}/${pdf}`);
      }
    }
  }

  {
    const sourcePath = 'src/pages/CampusLife.jsx';
    const content = readSource(sourcePath);
    const imageRows = content.matchAll(/name:\s*'([^']+\.(?:jpg|jpeg|png|webp|gif|svg))'\s*,\s*path:\s*'([^']+)'/gi);
    for (const row of imageRows) {
      const fileName = row[1];
      const folder = row[2].replace(/\s+/g, '-');
      pushMissingIfAbsent(sourcePath, `/images/campus/${folder}/${fileName}`);
    }
  }

  {
    const sourcePath = 'src/pages/Admin.jsx';
    const content = readSource(sourcePath);
    const block = content.match(/const\s+NOTICE_FILES\s*=\s*\[([\s\S]*?)\]/);
    if (block) {
      const files = extractMatches(block[1], /'([^']+\.(?:pdf|jpg|jpeg|png|webp|gif|svg))'/gi);
      for (const file of files) {
        pushMissingIfAbsent(sourcePath, `/documents/notices/${file}`);
      }
    }
  }

  {
    const sourcePath = 'src/pages/about/MELC.jsx';
    const content = readSource(sourcePath);
    const block = content.match(/const\s+images\s*=\s*\[([\s\S]*?)\]/);
    if (block) {
      const images = extractMatches(block[1], /'([^']+\.(?:jpg|jpeg|png|webp|gif|svg))'/gi);
      for (const image of images) {
        pushMissingIfAbsent(sourcePath, `/images/about/melc/${image}`);
      }
    }
  }
};

runDynamicChecks();

const lfsPointers = publicFiles
  .filter((file) => /\.(pdf|mp4)$/i.test(file))
  .filter(isLFSPointerFile)
  .map((file) => normalizeSlash(path.relative(ROOT, file)));

const hasMissingRefs = missingRefs.length > 0;
const hasLFSPointers = lfsPointers.length > 0;

if (!hasMissingRefs && !hasLFSPointers) {
  console.log('Asset check passed. No missing asset references and no LFS pointer files in public/.');
  process.exit(0);
}

if (hasMissingRefs) {
  console.error(`Missing asset references: ${missingRefs.length}`);
  for (const item of missingRefs) {
    console.error(`- ${item.source} -> ${item.ref}`);
  }
}

if (hasLFSPointers) {
  if (allowLFSPointers) {
    console.warn(`LFS pointer files detected in public/: ${lfsPointers.length}`);
    const preview = lfsPointers.slice(0, 20);
    for (const pointer of preview) {
      console.warn(`- ${pointer}`);
    }
    if (lfsPointers.length > preview.length) {
      console.warn(`...and ${lfsPointers.length - preview.length} more.`);
    }
    console.warn('Continuing because ALLOW_LFS_POINTERS is enabled.');
  } else {
    console.error(`LFS pointer files detected in public/: ${lfsPointers.length}`);
    for (const pointer of lfsPointers) {
      console.error(`- ${pointer}`);
    }
    console.error('Run: git lfs pull && git lfs checkout');
  }
}

if (hasMissingRefs || (hasLFSPointers && !allowLFSPointers)) {
  process.exit(1);
}

process.exit(0);
