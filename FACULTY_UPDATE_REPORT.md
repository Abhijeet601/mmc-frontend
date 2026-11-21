# Faculty update report — 21 November 2026

These changes apply the latest user-supplied instructions to the existing college website. They do not independently verify the official roster.

## Current result

- Prof. (Dr.) Namita Kumari's Botany record and Dr. Shahida Khanam's Persian record are inactive in current directories. Both source records, IDs, original employment metadata, and legacy associations remain available for historical reference.
- Shahida Khanam's current Persian HOD responsibility is removed. No replacement HOD is assigned, and the Persian department card remains.
- Current Staff Council totals are **56 regular, 13 guest, and 6 additional faculty: 75 entries**, including the unchanged Principal. The registry retains **81 source IDs**, including the two inactive records and separate unresolved department records; these counts must not be treated as verified unique people.
- Current department listings contain **Botany 3, Persian 0, Zoology 4, and Political Science 5** faculty entries.
- All **23 department cards**, category filters, HOD-first ordering, existing verified faculty information, and 18 non-teaching staff records are preserved.
- Staff Council, Departments, and NEP Humanities use the shared current-faculty selectors. Persian HOD prose is corrected, and empty faculty lists show the existing localized neutral message.
- Historical documents, dated committees, previous-principal records, unrelated roles, and other website modules remain intact.

## New faculty

| Name | Current listing | Academic designation and appointment | Employment category | HOD |
| --- | --- | --- | --- | --- |
| Atishaya Kumar Saksham | Zoology | Assistant Professor, Environmental Science; deputed to Zoology | Awaiting confirmation | No |
| Dr. Ratna | Political Science | Assistant Professor | Awaiting confirmation | No |

Both records have stable IDs and appear in Staff Council's Additional Faculty category. Existing Zoology and Political Science faculty are retained. No qualification, surname, biography, contact detail, employment category, or HOD responsibility was invented.

## Photograph handling

- Dr. Ratna's production asset is `src/assets/faculty/dr-ratna.jpeg`.
- It is a byte-identical copy of `data files/Faculty Images/Dr. Ratna ,Assistant Professor,Department of Political Science.jpeg`; the original is unchanged.
- The existing local image resolver bundles the clean filename without a Windows filesystem path. A failed image retains the shared initials fallback.
- Atishaya Kumar Saksham has no verified portrait association and uses initials. No unrelated or uncertain portrait was assigned.
- The production build emits **57 JPEG assets**, including `dr-ratna-DBYCKNvC.jpeg`.

## Earlier updates and unresolved records

The original 15 supplied faculty updates remain represented in `facultyUpdateAudit` in `src/data/faculty.js`. Supported title/name updates preserve their existing source IDs and photograph associations. This task adds two records and excludes two inactive records from current selectors; it does not merge uncertain identities.

The existing review issues remain open:

1. Rajeev / Rajiv Kumar Singh.
2. Asha / Aasha Kumari.
3. Priyardarshni / Priyadarshini.
4. Statistics faculty assignment and its Chemistry portrait association.
5. The separate B.Com coordinator identity.
6. The existing Sanskrit HOD assignment; Dr. Sangeeta Roy remains Assistant Professor.
7. The separate Chemistry and Sociology records named Dr. Reena Kumari.
8. Regular/guest employment categories for all six Additional Faculty records.

Matching evidence and structured review notes remain in the shared data source. Historical name mentions do not establish a current department appointment.

## Files changed for this update

1. `src/data/faculty.js` — current-directory exclusions, Persian HOD removal, and two new faculty records.
2. `src/pages/Departments.jsx` — removes the obsolete current Persian HOD statement while preserving department history.
3. `src/pages/nep2020/Humanities.jsx` — localized neutral state for an empty faculty list.
4. `tests/faculty.test.mjs` — semantic regression checks for the latest roster and portrait requirements.
5. `scripts/test-faculty-browser.mjs` — browser expectations for the updated current listings.
6. `src/assets/faculty/dr-ratna.jpeg` — the supplied, unmodified portrait copy.
7. `FACULTY_UPDATE_REPORT.md` — this report.

The obsolete whole-file hash expectation for `ThemeContext.jsx` was replaced with focused faculty behavior checks. Existing user changes to the theme context were not reverted merely to satisfy an outdated baseline.

## Verification

- **Production build: passed.** All 57 JPEGs are emitted, including Dr. Ratna's portrait.
- **Full-source lint: 0 errors, 1 pre-existing warning** in `src/lib/r2Assets.js` (`no-script-url`).
- **Regression tests: 15/15 passed** with `node --test tests/faculty.test.mjs`. Checks cover the latest current-list exclusions, retained historical records, preserved prior updates, new faculty assignments, category safety, duplicate protection, source portraits, and relevant page behavior.
- **QA-file lint: passed** for `tests/faculty.test.mjs` and `scripts/test-faculty-browser.mjs`.
- **Local production browser QA: passed all 13 scenario groups.** All 23 department modals show current HOD-first rosters; Namita and Shahida are absent from current cards and search. Persian remains without an invented HOD in Departments and NEP Humanities. Atishaya's exact name, Environmental Science appointment, Zoology deputation, and initials are correct. Ratna's loaded portrait matches the supplied image bytes, with a working failure fallback. Current category counts, both new-name searches, English/Hindi, both themes, keyboard/modals, and desktop/tablet/mobile layouts pass. All 57 bundled image URLs decoded, with zero page JavaScript errors. Owned local preview and browser sessions were closed.

The project has no npm `test` or `lint` scripts; checks use Node's test runner and the installed ESLint executable. No dependencies or package manifests are changed by this update.

## Repository and deployment handoff

The verified existing repository is `Abhijeet601/mmc-frontend`, branch `main`.

Commit hash, GitHub push status, and Vercel Production deployment status will be reported in the final handoff after review and verification. A successful local build alone does not establish that the update is live.
