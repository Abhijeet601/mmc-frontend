# Faculty update report

The college-supplied information was applied as the latest user instructions. It was not independently verified against an official current roster.

## Result

- All 15 supplied faculty records are represented with the supplied names.
- The original 58 regular entries, including the Principal, and all 13 guest entries remain in their original categories and ordering.
- Four missing faculty members appear in an Additional Faculty section. Their regular/guest employment category remains unconfirmed.
- All 23 department cards and all six category filters remain.
- Staff Council, department modals, NEP Humanities faculty cards, and relevant undated Anti-Ragging names use shared faculty records.
- The 18 non-teaching staff records remain available.

## Existing records updated

| Supplied name | Department | Academic designation | Responsibility |
| --- | --- | --- | --- |
| Prof. Pushpalata | Political Science | Professor, retained from existing metadata | HOD |
| Dr. Preeti Kumari | Hindi | Assistant Professor, retained | HOD |
| Dr. Mita Malkhandi | Economics | Assistant Professor, retained | HOD |
| Dr. Md. Rizwan | Urdu | Assistant Professor, retained | HOD |
| Dr. Kavita Kumari | Home Science | Not specified; no rank inferred | HOD |
| Prof. Archana Jaiswal | English | Professor | HOD |
| Prof. Poonam Kumari | Mathematics | Professor | HOD |
| Prof. Puspanjali Khare | Botany | Professor | HOD |
| Prof. Surendra Prasad | Botany | Professor | — |
| Prof. Binay Kumar Bimal | Sociology | Professor | HOD |
| Prof. Shyam Deo Yadav | Chemistry | Professor | HOD |

The superseded HOD duties were removed from Dr. Shipra Prabha in Hindi, Dr. Sweta Sharan in Economics, Dr. Md. Sohail Anwer in Urdu, and Dr. Rishu Raj in Political Science. Their faculty records remain. Existing academic ranks were preserved when supported; an HOD responsibility alone did not establish a rank.

## New records

| Name | Department | Designation and appointment |
| --- | --- | --- |
| Dr. Shilpi Kumari | Botany | Assistant Professor, Environmental Science; deputed to Botany |
| Dr. Maa Amrit Disha | Music | Assistant Professor |
| Dr. Sangeeta Roy | Sanskrit | Assistant Professor |
| Dr. Neena Kumari | Political Science | Assistant Professor |

These four records have stable IDs, unconfirmed employment categories, and photographs supplied in `data files/Faculty Images`. No qualifications, biographies, contacts, or photographs were invented. Newly supplied names have no generated Hindi transliterations; existing approved Hindi spellings remain for unchanged names.

## Supplied faculty photographs

Fifty-six original JPEG assets from `data files/Faculty Images` are included in `src/assets/faculty` and bundled by Vite. Independent file-hash checks confirm that every copied asset is byte-identical to its supplied original. An explicit filename registry adds the four newly supplied portraits and selects `Prof. Archana Jaiswal, Professor, Head, Department of English.jpeg` for the current English HOD. Existing source portrait references remain in the shared faculty data for provenance; their older filename designations do not override current academic ranks or HOD duties.

The local resolver supplies photographs for 58 of the 79 retained source records, including 54 Staff Council entries. Some department source records intentionally share a pre-existing portrait; these associations do not resolve the pending identity or assignment reviews. Bundled image elements bypass the global R2 URL rewrite so local portraits can load from the production assets.

Twenty-one source records have no confidently matched supplied photograph and retain initials: the Principal, council Rajeev Kumar Singh, Shahida Khanam, Rishu Raj, council Priyardarshni, Kavita Kumari, Archana Sinha, Namita Kumari, and all 13 guest faculty. Images belonging to unresolved Rajiv/Priyadarshini source records are not borrowed for their council counterparts.

Three unmatched files remain unused: `Atishaya_Photo.jpg.jpeg` has no established identity; `Dr. Ratna ,Assistant Professor,Department of Political Science.jpeg` has no corresponding roster record; and `Dr. Sohail Anwer, Assistant Professor, Urdu.pdf` is not an image, while an existing Sohail JPEG is available. No faculty records were added or merged from these filenames.

## Matching and duplicate handling

Seven supported name variants were updated in place: Pushplata Kumari → Prof. Pushpalata; Archana Jaiswal → Prof. Archana Jaiswal; Poonam Kumari → Prof. Poonam Kumari; Pushpanjali Khare → Prof. Puspanjali Khare; Surendra Kumar Prasad → Prof. Surendra Prasad; Binay Kumar Bimal → Prof. Binay Kumar Bimal; Shyam Deo Yadav → Prof. Shyam Deo Yadav.

The existing department, unique matching role, explicit candidate mapping, and available portrait metadata support these matches. Their source IDs, portrait filenames, and previous names remain in the shared data with matching evidence. No uncertain identities were merged or deleted. No new duplicate was added for these seven updates.

## Manual review still required

1. **Rajeev / Rajiv Kumar Singh:** Separate source identities remain. The original English department presentation is retained without adding a second potential duplicate card.
2. **Asha / Aasha Kumari:** The existing shared portrait supports a single record; the alternate spelling remains recorded for confirmation.
3. **Priyardarshni / Priyadarshini:** Separate source identities remain, with original department presentation preserved.
4. **Statistics assignment:** Dr. Madhu Kumari Gupta has a Statistics record using a Chemistry portrait; historical prose refers to Sonu Rani as head. No identity or departmental reassignment was inferred.
5. **B.Com coordinator:** The separate Surendra Prasad coordinator record remains pending confirmation. The new Botany Professor rank was not automatically applied to it.
6. **Sanskrit HOD:** The existing Dr. Shipra Prabha assignment remains pending confirmation. Dr. Sangeeta Roy was added as Assistant Professor, not HOD.
7. **Dr. Reena Kumari:** Chemistry and Sociology retain distinct records, IDs, and photographs.
8. **New employment categories:** The college must confirm regular/guest status for the four new faculty members.

Structured review issues and matching evidence are exported from `src/data/faculty.js`. Review-note line references describe the original pre-refactor arrays; their roster contents are retained in the baseline test fixture.

## Files changed for this task

- `src/data/faculty.js` — shared records, assignments, selectors, review issues, update audit.
- `src/data/facultyPhotoFiles.js` — explicit supplied portrait overrides and source filename extraction.
- `src/lib/facultyPresentation.js` — localized display helpers.
- `src/lib/facultyPhotos.js` — Vite-bundled local portrait resolver.
- `src/assets/faculty/` — 56 supplied JPEG assets, copied without alteration.
- `.gitignore` — permits tracking these faculty JPEG assets while preserving the existing image exclusions.
- `src/components/FacultyCard.jsx` — shared faculty cards and photo/initials fallback.
- `src/components/faculty.css` — scoped card, focus, and reduced-motion styles.
- `src/pages/administration/StaffCouncil.jsx` — department grouping, separate categories, search, filters, cards, preserved employees.
- `src/pages/Departments.jsx` — shared faculty, live HOD summary, retained department content, bilingual filters, accessible Radix dialogs.
- `src/pages/nep2020/Humanities.jsx` — shared faculty, language updates, keyboard/focus handling, reduced-motion support.
- `src/pages/AntiRagging.jsx` — six relevant current names from shared records; committee responsibilities retained.
- `src/locales/en.json` — faculty directory UI labels.
- `src/locales/hi.json` — matching Hindi UI labels.
- `tests/faculty-baseline.json` — original roster and preservation baseline.
- `tests/faculty.test.mjs` — semantic data and scope regression checks.
- `scripts/test-faculty-browser.mjs` — reusable browser regression checks.
- `FACULTY_UPDATE_REPORT.md` — this report.

The existing `.env.example` change predates this task and was left untouched. The faculty and portrait work preserves the leaders, navigation structure, admissions, accreditation pages, archives, hostel ERP, mess portal, authentication, and payment workflows. The separately requested homepage hero payment-button update remains in place.

## Verification

- `node --test tests/faculty.test.mjs`: **12/12 passed**. Covers all 15 updates, source roster preservation, original department memberships/photos, HOD replacement, category safety, distinct Reena records, review flags, 23 cards, protected unrelated files, supplied portrait assignments/asset existence, and preservation of unresolved identity and assignment-specific photo references.
- `node node_modules/eslint/bin/eslint.js src`: **0 errors, 1 existing warning** in unchanged `src/lib/r2Assets.js:52` (`no-script-url`). Changed faculty and test files passed targeted lint.
- `npm run build`: **passed**, including all 56 emitted production JPEG assets. Independent file-hash checks confirmed every copied portrait matches its supplied original byte for byte. Existing tooling reports stale Browserslist data and the application bundle size warning.
- The earlier local Chrome functional regression **passed**. It checked first-visit language selection, all department filters, faculty/HOD/deputation display, keyboard opening/focus trapping, X/Escape/backdrop closing, focus restoration, search/filtering, English/Hindi switching, blue/maroon themes, reduced motion, and 3/2/1 columns at desktop/tablet/mobile widths. No page JavaScript errors were observed.
- Production portrait verification **passed**: all 56 distinct bundled JPEGs decoded for 58 matched source records. The browser loaded 54 portrait instances in Staff Council and 62 across all 23 department modals. Every emitted image matched the exact supplied source file by SHA256. The four new portraits and updated Professor Archana Jaiswal portrait loaded correctly; unmatched records retained initials. Mobile portraits fit without overflow, and a forced failed image correctly fell back to initials. There were no faculty image requests to R2 and no page JavaScript errors. The owned preview server and browser sessions were closed.

There were no existing npm `test` or `lint` scripts. Checks use the installed ESLint executable and Node's test runner; no project dependencies or package manifests were changed.

To repeat browser checks, start the existing Vite server and run `node scripts/test-faculty-browser.mjs`. Playwright can live outside this project; configure `MMC_PLAYWRIGHT_MODULE` to its `index.mjs` if needed. Optional `MMC_QA_BROWSER` and `MMC_QA_URL` select a browser executable and server URL.
