/* eslint-env node */
// Optional browser regression check. Install Playwright outside the project or set
// MMC_PLAYWRIGHT_MODULE to its index.mjs. Uses an installed Chrome when available.
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const playwrightModule = process.env.MMC_PLAYWRIGHT_MODULE || join(tmpdir(), 'mmc-faculty-qa', 'node_modules', 'playwright', 'index.mjs');
const { chromium } = await import(pathToFileURL(playwrightModule).href);
const baseURL = process.env.MMC_QA_URL || 'http://localhost:3000';
const browserPath = process.env.MMC_QA_BROWSER || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(path => existsSync(path));
const en = JSON.parse(readFileSync(new URL('../src/locales/en.json', import.meta.url), 'utf8'));
const hi = JSON.parse(readFileSync(new URL('../src/locales/hi.json', import.meta.url), 'utf8'));
const messages = [];
const browser = await chromium.launch({ executablePath: browserPath, headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, locale: 'en-US', reducedMotion: 'reduce' });
// Media delivery is outside this faculty change. Blocking external media makes the
// test deterministic and also exercises the approved initials fallback.
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

  await openDepartment('botany');
  for (const name of ['Prof. Puspanjali Khare', 'Prof. Surendra Prasad', 'Dr. Shilpi Kumari']) {
    assert.ok((await dialog().innerText()).includes(name), name);
  }
  assert.ok((await member('botany-shilpi-kumari').innerText()).includes('Environmental Science'));
  assert.ok((await member('botany-shilpi-kumari').innerText()).includes('Botany'));
  assert.equal(await dialog().locator('[data-faculty-id]').count(), 4);
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
  assert.equal(await directory.locator('[data-faculty-id]').count(), 58);
  await directory.getByRole('button', { name: `${en.facultyDirectory.guest} (13)`, exact: true }).click();
  assert.equal(await directory.locator('[data-faculty-id]').count(), 13);
  await directory.getByRole('button', { name: `${en.facultyDirectory.additional} (4)`, exact: true }).click();
  assert.equal(await directory.locator('[data-faculty-id]').count(), 4);
  await directory.getByLabel(en.facultyDirectory.search, { exact: true }).fill('Shilpi');
  assert.equal(await directory.locator('[data-faculty-id]').count(), 1);
  assert.ok((await directory.innerText()).includes('Environmental Science'));
  await directory.getByLabel(en.facultyDirectory.search, { exact: true }).fill('Environmental Science');
  assert.equal(await directory.locator('[data-faculty-id]').count(), 1, 'appointment search finds Shilpi');
  assert.ok((await directory.innerText()).includes('Dr. Shilpi Kumari'));
  await directory.getByLabel(en.facultyDirectory.search, { exact: true }).fill('');
  await directory.getByRole('button', { name: `${en.facultyDirectory.regular} (58)`, exact: true }).click();
  await directory.getByLabel(en.facultyDirectory.department, { exact: true }).selectOption('botany');
  assert.equal(await directory.locator('[data-faculty-id]').count(), 3);
  messages.push('Staff Council regular58/guest13/unconfirmed4, name/Environmental Science search and department filter');

  await page.locator('.lang-button').filter({ hasText: en.common.hindi }).click();
  await directory.getByRole('heading', { name: hi.facultyDirectory.title, exact: true }).waitFor();
  assert.equal(await directory.locator('[data-faculty-id]').count(), 3, 'department filter survives language switch');
  assert.ok((await directory.innerText()).includes('विभागाध्यक्ष'));
  assert.ok((await directory.innerText()).includes('Prof. Puspanjali Khare'), 'newly supplied exact name is preserved in Hindi');
  assert.equal(await page.evaluate(() => localStorage.getItem('mmcPreferredLanguage')), 'hi');
  await directory.getByRole('button', { name: `${hi.facultyDirectory.additional} (4)`, exact: true }).click();
  await directory.getByLabel(hi.facultyDirectory.search, { exact: true }).fill(hi.facultyDirectory.environmentalScience);
  assert.equal(await directory.locator('[data-faculty-id]').count(), 1, 'Hindi appointment search finds Shilpi');
  assert.ok((await directory.innerText()).includes('Dr. Shilpi Kumari'));
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

  assert.deepEqual(errors, [], 'no browser JavaScript errors');
  console.log(JSON.stringify({ passed: messages, browserErrors: errors }, null, 2));
} finally {
  await browser.close();
}
