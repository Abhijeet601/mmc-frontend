import { r2Url } from '@/lib/r2Assets';

const LEGACY_HOST = 'https://magadhmahilacollege.org';

const createWpContentUpload = ({
  title,
  legacyPath,
  category,
  description,
  sourcePath = '',
  fallbackPath = '',
  fallbackLabel = '',
}) => {
  const segments = legacyPath.split('/').filter(Boolean);
  const year = segments[2] || '';
  const month = segments[3] || '';
  const fileName = segments[4] || '';

  return {
    title,
    legacyPath,
    category,
    description,
    sourcePath,
    fallbackPath,
    fallbackLabel,
    year,
    month,
    fileName,
    absoluteLegacyUrl: `${LEGACY_HOST}${legacyPath}`,
  };
};

export const wpContentUploads = [
  createWpContentUpload({
    title: 'AQAR 2022-23',
    legacyPath: '/wp-content/uploads/2024/12/AQAR-2022-23.pdf',
    category: 'AQAR Reports',
    description: 'Annual Quality Assurance Report for the 2022-23 session.',
    sourcePath: 'documents/IQAC/NAAC/AQAR/AQAR-2022-23.pdf',
  }),
  createWpContentUpload({
    title: 'Annual Report 2023-24',
    legacyPath: '/wp-content/uploads/2024/12/Annual_Report_2023-24_MMC_Patna.pdf',
    category: 'Annual Reports',
    description: 'Legacy upload route reserved for the 2023-24 annual report.',
    fallbackPath: '/annual-reports',
    fallbackLabel: 'Open Annual Reports',
  }),
  createWpContentUpload({
    title: 'Academic Calendar 2022-23',
    legacyPath: '/wp-content/uploads/2024/04/Academic-Calendar-Admission-2022-2023.pdf',
    category: 'Academic Calendars',
    description: 'Academic calendar upload preserved under the legacy WordPress path.',
    sourcePath: 'data files/IQAC/Academic Calender/Academic-Calendar-Admission-2022-2023.pdf',
  }),
  createWpContentUpload({
    title: 'AQAR 2021-22',
    legacyPath: '/wp-content/uploads/2023/06/AQAR-2021-22.pdf',
    category: 'AQAR Reports',
    description: 'Annual Quality Assurance Report for the 2021-22 session.',
    sourcePath: 'documents/IQAC/NAAC/AQAR/AQAR-2021-22.pdf',
  }),
  createWpContentUpload({
    title: 'AQAR 2020-21',
    legacyPath: '/wp-content/uploads/2022/04/AQAR-2020-21.pdf',
    category: 'AQAR Reports',
    description: 'Annual Quality Assurance Report for the 2020-21 session.',
    sourcePath: 'documents/IQAC/NAAC/AQAR/AQAR-2020-21.pdf',
  }),
  createWpContentUpload({
    title: 'AQAR 2019-20',
    legacyPath: '/wp-content/uploads/2022/01/AQAR-2019-20-resubmitted-2.pdf',
    category: 'AQAR Reports',
    description: 'Annual Quality Assurance Report for the 2019-20 session.',
    sourcePath: 'documents/IQAC/NAAC/AQAR/AQAR-2019-20-resubmitted-2.pdf',
  }),
  createWpContentUpload({
    title: 'SSS 2023-24',
    legacyPath: '/wp-content/uploads/2025/01/SSS_23-24_250104_131730.pdf',
    category: 'Student Satisfaction Survey',
    description: 'Student Satisfaction Survey report preserved under its legacy upload path.',
    sourcePath: 'documents/IQAC/Student Satisfaction Survey/SSS-report.pdf',
  }),
  createWpContentUpload({
    title: 'Programmes PDF',
    legacyPath: '/wp-content/uploads/2025/01/7_1-9_programmes.pdf',
    category: 'Programmes',
    description: 'Legacy upload route preserved for the programmes PDF reference document.',
    fallbackPath: '/iqac/criteria',
    fallbackLabel: 'Open IQAC Criteria',
  }),
];

const monthLabels = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

const normalizePath = (value) => {
  if (!value) return '';

  try {
    const parsed = new URL(value, LEGACY_HOST);
    return parsed.pathname.replace(/\/+$/, '') || '/';
  } catch {
    return '';
  }
};

export const wpContentUploadsByPath = Object.freeze(
  Object.fromEntries(wpContentUploads.map((documentItem) => [documentItem.legacyPath, documentItem])),
);

export const wpContentUploadGroups = Object.values(
  wpContentUploads.reduce((groups, documentItem) => {
    const groupKey = `${documentItem.year}-${documentItem.month}`;

    if (!groups[groupKey]) {
      groups[groupKey] = {
        key: groupKey,
        year: documentItem.year,
        month: documentItem.month,
        label: `${monthLabels[documentItem.month] || documentItem.month} ${documentItem.year}`,
        items: [],
      };
    }

    groups[groupKey].items.push(documentItem);
    return groups;
  }, {}),
).sort((left, right) => right.key.localeCompare(left.key));

export const getWpContentUploadByPath = (pathname) => {
  const normalizedPath = normalizePath(pathname);
  return wpContentUploadsByPath[normalizedPath] || null;
};

export const getWpContentUploadByUrl = (value) => getWpContentUploadByPath(value);

export const getWpContentPreviewUrl = (documentItem) => {
  if (!documentItem?.sourcePath) return '';
  return encodeURI(r2Url(documentItem.sourcePath));
};
