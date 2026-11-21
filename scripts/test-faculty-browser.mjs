/* eslint-env node */
// Optional browser regression check. Install Playwright outside the project or set
// MMC_PLAYWRIGHT_MODULE to its index.mjs. Uses an installed Chrome when available.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { getDepartmentFaculty } from '../src/data/faculty.js';
import { getFacultyPhotoFilename } from '../src/data/facultyPhotoFiles.js';

const playwrightModule = process.env.MMC_PLAYWRIGHT_MODULE || join(tmpdir(), 'mmc-faculty-qa', 'node_modules', 'playwright', 'index.mjs');
const { chromium } = await import(pathToFileURL(playwrightModule).href);
const baseURL = (process.env.MMC_QA_URL || 'http://localhost:3000').replace(/\/+$/, '');
const browserPath = process.env.MMC_QA_BROWSER || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(path => existsSync(path));
const en = JSON.parse(readFileSync(new URL('../src/locales/en.json', import.meta.url), 'utf8'));
const hi = JSON.parse(readFileSync(new URL('../src/locales/hi.json', import.meta.url), 'utf8'));
const messages = [];
const browser = await chromium.launch({ executablePath: browserPath, headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, locale: 'en-US', reducedMotion: 'reduce' });
// Leave same-origin bundled portraits available for real image decoding. Other
// external media is outside this faculty regression and may be blocked offline.
await context.route('**/*', route => {
  const request = route.request();
  if (!request.url().startsWith(baseURL) && ['image', 'media', 'font'].includes(request.resourceType())) return route.abort();
  return route.continue();
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const cards = () => page.locator('main [data-department-id]');
const dialog = () => page.getByRole('dialog');
const member = id => page.locator(`[data-faculty-id="${id}"]`);
const inactiveIds = ['botany-namita-kumari', 'persian-shahida-khanam'];
const decodedImages = new Set();
let ratnaPhotoUrl;
let brokenImageContext;
const checkImages = async scope => {
  const images = await scope.locator('[data-faculty-id] img').evaluateAll(async elements => {
    elements.forEach(element => { element.loading = 'eager'; });
    return Promise.all(elements.map(async element => {
      await element.decode();
      return { src: element.currentSrc || element.src, width: element.naturalWidth, height: element.naturalHeight,
        skipRewrite: element.getAttribute('data-skip-r2-rewrite') };
    }));
  });
  for (const image of images) {
    assert.ok(image.width > 0 && image.height > 0, 'faculty portrait decodes');
    assert.equal(new URL(image.src).origin, new URL(baseURL).origin, 'faculty portrait is served with this build');
    assert.equal(image.skipRewrite, 'true', 'bundled portrait avoids the R2 rewrite observer');
    decodedImages.add(image.src);
  }
};
const assertColumns = async (locator, expected) => {
  const count = await locator.first().evaluate(element => getComputedStyle(element.parentElement).gridTemplateColumns.split(' ').length);
  assert.equal(count, expected);
};
const openDepartment = async id => {
  await page.locator(`[data-department-id="${id}"]`).click();
  await dialog().waitFor({ state: 'visible' });
};
const closeDepartment = async label => {
  await dialog().getByRole('button', { name: label, exact: true }).click();
  await dialog().waitFor({ state: 'hidden' });
};

try {
  await page.goto(`${baseURL}/departments`, { waitUntil: 'domcontentloaded' });
  await page.getByRole('dialog', { name: 'Choose Language' }).getByRole('button', { name: 'English', exact: true }).click();
  await cards().first().waitFor({ state: 'visible' });
  assert.equal(await page.evaluate(() => localStorage.getItem('mmcPreferredLanguage')), 'en');
  assert.equal(await cards().count(), 23);
  messages.push('First-visit language chooser and 23 department cards');

  const filters = page.getByRole('group', { name: en.facultyDirectory.filterDepartments });
  for (const [key, count] of [['humanities', 6], ['science', 6], ['socialScience', 6], ['fineArts', 1], ['vocational', 4], ['all', 23]]) {
    await filters.getByRole('button', { name: en.facultyDirectory.categories[key], exact: true }).click();
    assert.equal(await cards().count(), count, key);
  }
  messages.push('All six department filters and expected counts');

  const departmentIds = await cards().evaluateAll(elements => elements.map(element => element.dataset.departmentId));
  for (const id of departmentIds) {
    await openDepartment(id);
    const records = getDepartmentFaculty(id);
    assert.deepEqual(await dialog().locator('[data-faculty-id]').evaluateAll(elements => elements.map(element => element.dataset.facultyId)),
      records.map(record => record.id), `${id}: current shared roster and HOD-first ordering`);
    for (const record of records) {
      assert.ok(!inactiveIds.includes(record.id), `${id}: inactive faculty omitted`);
      assert.equal(await member(record.id).locator('img').count(), getFacultyPhotoFilename(record) ? 1 : 0,
        `${id}: approved portrait or initials for ${record.id}`);
    }
    await checkImages(dialog());
    if (id === 'persian') {
      assert.equal(await dialog().locator('[data-faculty-id]').count(), 0);
      assert.equal(await dialog().getByText(`${en.facultyDirectory.hod}:`, { exact: true }).count(), 0, 'no unverified Persian HOD');
    }
    if (id === 'zoology') {
      const atishaya = member('zoology-atishaya-kumar-saksham');
      assert.ok((await atishaya.innerText()).includes('Atishaya Kumar Saksham'));
      assert.ok((await atishaya.innerText()).includes('Environmental Science'));
      assert.ok((await atishaya.innerText()).includes('Deputed to Zoology'));
      assert.equal(await atishaya.locator('img').count(), 0, 'no unverified Atishaya portrait');
      assert.ok((await atishaya.innerText()).includes('AK'));
    }
    if (id === 'political-science') {
      const ratna = member('political-science-ratna');
      assert.ok((await ratna.innerText()).includes('Dr. Ratna'));
      ratnaPhotoUrl = await ratna.locator('img').evaluate(image => image.currentSrc || image.src);
      const response = await page.request.get(ratnaPhotoUrl);
      assert.ok(response.ok());
      const expectedBytes = readFileSync(new URL('../src/assets/faculty/dr-ratna.jpeg', import.meta.url));
      const hash = value => createHash('sha256').update(value).digest('hex');
      assert.equal(hash(await response.body()), hash(expectedBytes), 'Ratna loads the supplied portrait bytes');
    }
    await closeDepartment(en.facultyDirectory.close);
  }
  messages.push('All23 department modals use current HOD-first rosters; archived members omitted; Persian retained without a replacement HOD');
  messages.push('Atishaya appointment/deputation and initials; Ratna supplied portrait; bundled images decode without R2 rewriting');

  await openDepartment('botany');
  for (const name of ['Prof. Puspanjali Khare', 'Prof. Surendra Prasad', 'Dr. Shilpi Kumari']) {
    assert.ok((await dialog().innerText()).includes(name), name);
  }
  assert.ok((await member('botany-shilpi-kumari').innerText()).includes('Environmental Science'));
  assert.ok((await member('botany-shilpi-kumari').innerText()).includes('Botany'));
  assert.equal(await dialog().locator('[data-faculty-id]').count(), 3);
  assert.equal(await member('botany-namita-kumari').count(), 0);
  await page.keyboard.press('Tab');
  assert.ok(await dialog().evaluate(element => element.contains(document.activeElement)), 'focus stays in dialog');
  await closeDepartment(en.facultyDirectory.close);
  assert.equal(await page.locator('[data-department-id="botany"]').evaluate(element => element === document.activeElement), true);
  await page.keyboard.press('Enter');
  await dialog().waitFor({ state: 'visible' });
  await page.keyboard.press('Escape');
  await dialog().waitFor({ state: 'hidden' });
  await openDepartment('botany');
  await page.mouse.click(4, 500);
  await dialog().waitFor({ state: 'hidden' });
  messages.push('Botany records, deputation, keyboard open/focus trap, X/Escape/backdrop close and focus return');

  await openDepartment('hindi');
  assert.ok((await member('hindi-preeti-kumari').innerText()).includes(en.facultyDirectory.hod));
  assert.ok(!(await member('hindi-shipra-prabha').innerText()).includes(en.facultyDirectory.hod));
  await closeDepartment(en.facultyDirectory.close);
  messages.push('Hindi HOD changed to Preeti and removed from Shipra');

  for (const [width, columns] of [[1440, 3], [900, 2], [390, 1]]) {
    await page.setViewportSize({ width, height: 1000 });
    await assertColumns(cards(), columns);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `no page overflow at ${width}px`);
    await openDepartment('botany');
    await assertColumns(dialog().locator('[data-faculty-id]'), columns);
    assert.ok(await dialog().evaluate(element => element.scrollWidth <= element.clientWidth + 1), `no modal overflow at ${width}px`);
    const transition = await member('botany-shilpi-kumari').evaluate(element => getComputedStyle(element).transitionDuration);
    assert.ok(transition.split(',').every(value => parseFloat(value) === 0), 'reduced-motion preference respected');
    await closeDepartment(en.facultyDirectory.close);
  }
  messages.push('Desktop/tablet/mobile card grids, overflow and reduced motion');

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.locator('.theme-button').filter({ hasText: en.nav.maroon }).click();
  assert.ok(await page.locator('html').evaluate(element => element.classList.contains('theme-maroon')));
  const maroon = await page.locator('html').evaluate(element => getComputedStyle(element).getPropertyValue('--primary').trim());
  await page.locator('.theme-button').filter({ hasText: en.nav.blue }).click();
  const blue = await page.locator('html').evaluate(element => getComputedStyle(element).getPropertyValue('--primary').trim());
  assert.notEqual(maroon, blue);
  messages.push('Existing blue and maroon theme controls');

  await page.goto(`${baseURL}/administration/staff-council`, { waitUntil: 'domcontentloaded' });
  const directory = page.locator('main.faculty-directory');
  await directory.getByRole('heading', { name: en.facultyDirectory.title, exact: true }).waitFor();
  assert.equal(await directory.locator('[data-faculty-id]').count(), 56);
  for (const id of inactiveIds) assert.equal(await member(id).count(), 0, 'inactive faculty absent from current Council');
  for (const name of ['Namita', 'Shahida']) {
    await directory.getByLabel(en.facultyDirectory.search, { exact: true }).fill(name);
    assert.equal(await directory.locator('[data-faculty-id]').count(), 0, `${name}: absent from current search results`);
  }
  await directory.getByLabel(en.facultyDirectory.search, { exact: true }).fill('');
  await directory.getByRole('button', { name: `${en.facultyDirectory.guest} (13)`, exact: true }).click();
  assert.equal(await directory.locator('[data-faculty-id]').count(), 13);
  await directory.getByRole('button', { name: `${en.facultyDirectory.additional} (6)`, exact: true }).click();
  assert.equal(await directory.locator('[data-faculty-id]').count(), 6);
  assert.equal(await member('political-science-ratna').count(), 1);
  assert.equal(await member('zoology-atishaya-kumar-saksham').count(), 1);
  await checkImages(directory);
  for (const [query, id] of [['Atishaya', 'zoology-atishaya-kumar-saksham'], ['Ratna', 'political-science-ratna']]) {
    await directory.getByLabel(en.facultyDirectory.search, { exact: true }).fill(query);
    assert.equal(await directory.locator('[data-faculty-id]').count(), 1, `${query}: current Council search`);
    assert.equal(await member(id).count(), 1);
  }
  await directory.getByLabel(en.facultyDirectory.search, { exact: true }).fill('Shilpi');
  assert.equal(await directory.locator('[data-faculty-id]').count(), 1);
  assert.ok((await directory.innerText()).includes('Environmental Science'));
  await directory.getByLabel(en.facultyDirectory.search, { exact: true }).fill('Environmental Science');
  assert.equal(await directory.locator('[data-faculty-id]').count(), 2, 'appointment search finds both Environmental Science faculty');
  assert.ok((await directory.innerText()).includes('Dr. Shilpi Kumari'));
  assert.ok((await directory.innerText()).includes('Atishaya Kumar Saksham'));
  await directory.getByLabel(en.facultyDirectory.search, { exact: true }).fill('');
  await directory.getByRole('button', { name: `${en.facultyDirectory.regular} (56)`, exact: true }).click();
  await directory.getByLabel(en.facultyDirectory.department, { exact: true }).selectOption('botany');
  assert.equal(await directory.locator('[data-faculty-id]').count(), 2);
  messages.push('Staff Council regular56/guest13/unconfirmed6, archived-name exclusion, appointment search and department filter');

  await page.locator('.lang-button').filter({ hasText: en.common.hindi }).click();
  await directory.getByRole('heading', { name: hi.facultyDirectory.title, exact: true }).waitFor();
  assert.equal(await directory.locator('[data-faculty-id]').count(), 2, 'department filter survives language switch');
  assert.ok((await directory.innerText()).includes('विभागाध्यक्ष'));
  assert.ok((await directory.innerText()).includes('Prof. Puspanjali Khare'), 'newly supplied exact name is preserved in Hindi');
  assert.equal(await page.evaluate(() => localStorage.getItem('mmcPreferredLanguage')), 'hi');
  await directory.getByRole('button', { name: `${hi.facultyDirectory.additional} (6)`, exact: true }).click();
  await directory.getByLabel(hi.facultyDirectory.search, { exact: true }).fill(hi.facultyDirectory.environmentalScience);
  assert.equal(await directory.locator('[data-faculty-id]').count(), 2, 'Hindi appointment search finds both Environmental Science faculty');
  assert.ok((await directory.innerText()).includes('Dr. Shilpi Kumari'));
  assert.ok((await directory.innerText()).includes('Atishaya Kumar Saksham'));
  assert.ok((await member('zoology-atishaya-kumar-saksham').innerText()).includes(hi.facultyDirectory.departments.zoology), 'Zoology deputation translates');
  await page.goto(`${baseURL}/departments`, { waitUntil: 'domcontentloaded' });
  await openDepartment('botany');
  assert.ok((await dialog().innerText()).includes('संकाय सदस्य'));
  assert.ok((await dialog().innerText()).includes('सहायक प्राध्यापक'));
  assert.ok((await dialog().innerText()).includes('विभागाध्यक्ष'));
  assert.ok(!(await dialog().innerText()).includes('facultyDirectory.'));
  await closeDepartment(hi.facultyDirectory.close);
  messages.push('Live English→Hindi switching, persistent choice, Hindi appointment search, translated roles and stable supplied names');

  await page.locator('.lang-button').filter({ hasText: hi.common.english }).click();
  await page.goto(`${baseURL}/nep2020/humanities`, { waitUntil: 'domcontentloaded' });
  await page.getByRole('button').filter({ has: page.getByRole('heading', { name: 'Hindi', exact: true }) }).click();
  await dialog().waitFor({ state: 'visible' });
  assert.ok((await dialog().innerText()).includes('Dr. Preeti Kumari'));
  assert.ok((await member('hindi-preeti-kumari').innerText()).includes(en.facultyDirectory.hod));
  await page.keyboard.press('Escape');
  await dialog().waitFor({ state: 'hidden' });
  messages.push('NEP Humanities shares current faculty and accessible modal behavior');
  await page.getByRole('button').filter({ has: page.getByRole('heading', { name: 'Persian', exact: true }) }).click();
  await dialog().waitFor({ state: 'visible' });
  assert.equal(await dialog().locator('[data-faculty-id]').count(), 0);
  assert.equal(await dialog().getByText(`${en.facultyDirectory.hod}:`, { exact: true }).count(), 0);
  assert.ok(!(await dialog().innerText()).includes('Dr. Shahida Khanam'));
  await page.keyboard.press('Escape');
  await dialog().waitFor({ state: 'hidden' });
  messages.push('Persian remains available with no current faculty or invented HOD in NEP Humanities');

  // A fresh context ensures that Ratna's already-decoded image is not reused from
  // memory. Only that image fails; the rest of the directory remains functional.
  brokenImageContext = await browser.newContext({ viewport: { width: 390, height: 1000 }, reducedMotion: 'reduce' });
  await brokenImageContext.addInitScript(() => {
    localStorage.setItem('mmcPreferredLanguage', 'en');
    localStorage.setItem('i18nextLng', 'en');
  });
  await brokenImageContext.route('**/*', route => {
    const request = route.request();
    if (request.url() === ratnaPhotoUrl) return route.abort('failed');
    if (!request.url().startsWith(baseURL) && ['image', 'media', 'font'].includes(request.resourceType())) return route.abort();
    return route.continue();
  });
  const brokenPage = await brokenImageContext.newPage();
  brokenPage.on('pageerror', error => errors.push(error.message));
  await brokenPage.goto(`${baseURL}/administration/staff-council`, { waitUntil: 'domcontentloaded' });
  await brokenPage.locator('main.faculty-directory').getByRole('button', { name: `${en.facultyDirectory.additional} (6)`, exact: true }).click();
  const ratnaFallback = brokenPage.locator('[data-faculty-id="political-science-ratna"]');
  await ratnaFallback.waitFor();
  const brokenImage = ratnaFallback.locator('img');
  if (await brokenImage.count()) await brokenImage.evaluate(image => { image.loading = 'eager'; });
  await brokenImage.waitFor({ state: 'detached' });
  assert.ok((await ratnaFallback.innerText()).includes('Dr. Ratna'));
  assert.equal(await ratnaFallback.locator('span[aria-hidden="true"]').innerText(), 'R');
  messages.push('Ratna failed-image initials fallback on mobile');

  assert.deepEqual(errors, [], 'no browser JavaScript errors');
  console.log(JSON.stringify({ passed: messages, uniqueBundledImagesDecoded: decodedImages.size, browserErrors: errors }, null, 2));
} finally {
  await brokenImageContext?.close();
  await browser.close();
}
