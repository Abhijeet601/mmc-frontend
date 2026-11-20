import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { parse } from '@babel/parser';
import { getFacultyPhotoFilename } from '../src/data/facultyPhotoFiles.js';
import {
  faculty,
  facultyReviewIssues,
  getDepartmentFaculty,
  getStaffCouncilFaculty,
} from '../src/data/faculty.js';

const projectRoot = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, projectRoot), 'utf8');
const baseline = JSON.parse(read('tests/faculty-baseline.json'));
const departmentId = value => ({
  'Pol. Science': 'political-science',
  'Political Sc.': 'political-science',
  'Home-Sc.': 'home-science',
}[value] || value.toLowerCase().replaceAll(' ', '-'));
const renamed = new Map([
  ['auto.prof_dr_pushplata_kumari_p4ng6e', 'Prof. Pushpalata'],
  ['auto.dr_archana_jaiswal_16hzx8g', 'Prof. Archana Jaiswal'],
  ['auto.dr_poonam_kumari_3gi7s6', 'Prof. Poonam Kumari'],
  ['auto.dr_pushpanjali_khare_1x6i46f', 'Prof. Puspanjali Khare'],
  ['auto.dr_surendra_kumar_prasad_17ku7a8', 'Prof. Surendra Prasad'],
  ['auto.dr_binay_kumar_bimal_1uzsmiz', 'Prof. Binay Kumar Bimal'],
  ['auto.dr_shyam_deo_yadav_z16psm', 'Prof. Shyam Deo Yadav'],
]);
const updates = [
  ['Dr. Shilpi Kumari', 'botany', false, 'Assistant Professor'],
  ['Prof. Pushpalata', 'political-science', true],
  ['Dr. Preeti Kumari', 'hindi', true],
  ['Dr. Mita Malkhandi', 'economics', true],
  ['Dr. Md. Rizwan', 'urdu', true],
  ['Dr. Kavita Kumari', 'home-science', true],
  ['Dr. Maa Amrit Disha', 'music', false, 'Assistant Professor'],
  ['Dr. Sangeeta Roy', 'sanskrit', false, 'Assistant Professor'],
  ['Prof. Archana Jaiswal', 'english', true, 'Professor'],
  ['Prof. Poonam Kumari', 'mathematics', true, 'Professor'],
  ['Prof. Puspanjali Khare', 'botany', true, 'Professor'],
  ['Prof. Surendra Prasad', 'botany', false, 'Professor'],
  ['Prof. Binay Kumar Bimal', 'sociology', true, 'Professor'],
  ['Prof. Shyam Deo Yadav', 'chemistry', true, 'Professor'],
  ['Dr. Neena Kumari', 'political-science', false, 'Assistant Professor'],
];

test('all 15 supplied updates have exact names and correct departmental responsibilities', () => {
  for (const [name, id, isHOD, rank] of updates) {
    const inDepartment = getDepartmentFaculty(id).filter(member => member.name === name);
    assert.equal(inDepartment.length, 1, `${name} occurs once in ${id}`);
    assert.equal(inDepartment[0].isHOD, isHOD, `${name}: HOD assignment`);
    if (rank) assert.equal(inDepartment[0].designation, rank, `${name}: academic rank`);
    assert.ok(getStaffCouncilFaculty(inDepartment[0].employmentCategory).some(member => member.id === inDepartment[0].id), `${name} appears consistently in Staff Council`);
  }
});

test('all original regular and guest records survive with their category and ordering', () => {
  for (const [category, original] of [['regular', baseline.regular], ['guest', baseline.guest]]) {
    const current = getStaffCouncilFaculty(category);
    assert.equal(current.length, original.length, `${category} roster count`);
    original.forEach((member, index) => {
      const next = current[index];
      assert.equal(next.legacyNameKey, member.name.key, `${category} original identity ${index + 1}`);
      assert.equal(next.departmentId, departmentId(member.department));
      assert.equal(next.name, renamed.get(member.name.key) || member.name.text);
      assert.equal(next.employmentCategory, category);
    });
  }
});

test('the principal and both departmental Reena Kumari records remain separate', () => {
  const principal = getStaffCouncilFaculty('regular')[0];
  assert.equal(principal.name, baseline.regular[0].name.text);
  assert.equal(principal.departmentId, 'principal');
  const reenas = getStaffCouncilFaculty('regular').filter(member => member.name === 'Dr. Reena Kumari');
  assert.equal(reenas.length, 2);
  assert.equal(new Set(reenas.map(member => member.id)).size, 2);
  assert.deepEqual(reenas.map(member => member.departmentId).sort(), ['chemistry', 'sociology']);
});

test('every original department faculty entry remains represented', () => {
  const ids = ['hindi', 'english', 'persian', 'sanskrit', 'mathematics', 'statistics',
    'physics', 'chemistry', 'botany', 'zoology', 'psychology', 'sociology', 'economics',
    'history', 'philosophy', 'urdu', 'home-science', 'music', 'political-science',
    'bba', 'bca', 'bsw', 'bcom'];
  baseline.departments.forEach((department, index) => {
    const current = getDepartmentFaculty(ids[index]);
    for (const old of department.faculty) {
      const expected = renamed.get(old.name?.key) || old.name?.text;
      assert.ok(current.some(member => member.legacyNameKey === old.name?.key || member.name === expected),
        `${ids[index]} retains ${old.name?.text}`);
    }
  });
});

test('new appointments retain unknown employment categories and receive no invented photos', () => {
  const newNames = ['Dr. Shilpi Kumari', 'Dr. Maa Amrit Disha', 'Dr. Sangeeta Roy', 'Dr. Neena Kumari'];
  const pending = getStaffCouncilFaculty('unconfirmed');
  assert.equal(pending.length, 4);
  for (const name of newNames) {
    const member = pending.find(item => item.name === name);
    assert.ok(member, name);
    assert.equal(member.employmentCategory, 'unconfirmed');
    assert.ok(!member.photo, `${name} has no invented photograph`);
    assert.ok(!member.nameKey, `${name} has no invented Hindi transliteration`);
  }
  const shilpi = pending.find(member => member.name === 'Dr. Shilpi Kumari');
  assert.equal(shilpi.specialization, 'Environmental Science');
  assert.equal(shilpi.deputationDepartment, 'Botany');
});

test('superseded HOD assignments do not leave two active heads in updated departments', () => {
  for (const [name, id, isHOD] of updates.filter(update => update[2])) {
    const heads = getDepartmentFaculty(id).filter(member => member.isHOD);
    assert.equal(heads.length, 1, id);
    assert.equal(heads[0].name, name);
    assert.equal(heads[0].isHOD, isHOD);
  }
  assert.ok(!getDepartmentFaculty('sanskrit').find(member => member.name === 'Dr. Sangeeta Roy').isHOD);
});

test('supported renames keep the original portraits and stable identity metadata', () => {
  for (const [key, newName] of renamed) {
    const members = faculty.filter(member => member.legacyNameKey === key);
    assert.equal(members.length, 1, `${newName} is updated rather than duplicated`);
    const member = members[0];
    assert.equal(member.name, newName);
    assert.ok(member.id);
    assert.ok(member.previousName);
    assert.ok(member.matchingEvidence);
    for (const department of baseline.departments) {
      const old = department.faculty.find(item => item.name?.key === key && item.image);
      if (old) assert.equal(member.photo, old.image, `${newName} portrait preserved`);
    }
  }
  assert.equal(new Set(faculty.map(member => member.id)).size, faculty.length);
});

test('pre-existing ambiguous records are flagged for human review', () => {
  assert.ok(Array.isArray(facultyReviewIssues));
  const notes = JSON.stringify(facultyReviewIssues).toLowerCase();
  for (const term of ['rajiv', 'aasha', 'priyadarshini', 'statistics', 'b.com', 'sanskrit']) {
    assert.ok(notes.includes(term), `review includes ${term}`);
  }
});

test('provided portraits cover the four new faculty and the current English HOD', () => {
  const supplied = {
    'botany-shilpi-kumari': 'Dr Shilpi Kumari.jpeg',
    'music-maa-amrit-disha': 'Dr. Maa Amrit Disha,Assistant Professor,Department of Music.jpeg',
    'sanskrit-sangeeta-roy': 'Dr. Sangeeta Roy,Assistant Professor,Department of Sanskrit.jpeg',
    'political-science-neena-kumari': 'Dr. Neena Kumari,Assistant Professor,Department of Political Science.jpeg',
    'english-archana-jaiswal': 'Prof. Archana Jaiswal, Professor, Head, Department of English.jpeg',
  };
  for (const [id, filename] of Object.entries(supplied)) {
    assert.equal(getFacultyPhotoFilename(faculty.find(member => member.id === id)), filename);
  }
  const filenames = new Set(faculty.map(getFacultyPhotoFilename).filter(Boolean));
  for (const filename of filenames) {
    assert.ok(readFileSync(new URL(`src/assets/faculty/${filename}`, projectRoot)).length > 0, `${filename} is included with the application`);
  }
});

test('local portraits preserve unresolved identities and assignment-specific source references', () => {
  for (const id of ['english-rajeev-kumar-singh', 'economics-priyardarshni']) {
    assert.equal(getFacultyPhotoFilename(faculty.find(member => member.id === id)), null, `${id} must not borrow its unresolved counterpart's portrait`);
  }
  assert.equal(getFacultyPhotoFilename(getDepartmentFaculty('sanskrit').find(member => member.id === 'hindi-shipra-prabha')),
    'Dr. Shipra Prabha, HOD, Hindi.jpeg');
  assert.ok(getStaffCouncilFaculty('guest').every(member => getFacultyPhotoFilename(member) === null));
});

test('department browsing retains 23 cards and all six category filters', () => {
  const source = read('src/pages/Departments.jsx');
  const ast = parse(source, { sourceType: 'module', plugins: ['jsx'] });
  let array;
  function visit(node) {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'VariableDeclarator' && node.id.name === 'departments') {
      let init = node.init;
      if (init.type === 'CallExpression' && init.callee.type === 'MemberExpression') init = init.callee.object;
      if (init.type === 'ArrayExpression') array = init;
    }
    Object.values(node).forEach(value => {
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === 'object') visit(value);
    });
  }
  visit(ast);
  assert.ok(array, 'department cards remain explicit data');
  assert.equal(array.elements.length, 23);
  const categories = array.elements.map(item => item.properties.find(prop => prop.key?.name === 'category')?.value.value);
  assert.deepEqual(categories.sort(), baseline.departments.map(item => item.category).sort());
  for (const category of ['All', 'Humanities', 'Science', 'Social Science', 'Fine Arts', 'Vocational']) {
    assert.ok(source.includes(`'${category}'`) || source.includes(`"${category}"`), category);
  }
});

test('unrelated homepage, navigation, admissions, documents and ERP files are unchanged', () => {
  for (const [path, expectedHash] of Object.entries(baseline.protectedFiles)) {
    const actualHash = createHash('sha256').update(read(path).replaceAll('\r\n', '\n')).digest('hex');
    assert.equal(actualHash, expectedHash, path);
  }
});
