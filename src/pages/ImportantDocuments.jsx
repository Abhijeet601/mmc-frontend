import React, { useDeferredValue, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Link2, Search } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
import { getWpContentUploadByUrl } from '@/data/wpContentUploads';

const normalizeHttps = (url) => url.replace(/^http:\/\//i, 'https://');

const pdfViewerUrl = (fileUrl, title) =>
  `/pdf-viewer?file=${encodeURIComponent(fileUrl)}&title=${encodeURIComponent(
    title,
  )}&back=${encodeURIComponent('/important-documents')}&kind=pdf`;

const internalPdf = (title, filePath, originalUrl) => {
  const fileUrl = r2Url(filePath);
  const legacyDocument = getWpContentUploadByUrl(originalUrl || fileUrl);
  const href = legacyDocument?.legacyPath || pdfViewerUrl(fileUrl, title);

  return {
    title,
    type: 'pdf',
    href,
    displayUrl: href,
    sourceUrl: originalUrl || fileUrl,
  };
};

const externalPdf = (title, url) => {
  const secureUrl = normalizeHttps(url);
  const legacyDocument = getWpContentUploadByUrl(secureUrl);
  const href = legacyDocument?.legacyPath || pdfViewerUrl(secureUrl, title);

  return {
    title,
    type: 'pdf',
    href,
    displayUrl: href,
    sourceUrl: secureUrl,
  };
};

const pageLink = (title, url, internalUrl = '') => ({
  title,
  type: 'page',
  href: internalUrl || normalizeHttps(url),
  displayUrl: internalUrl || normalizeHttps(url),
});

const documentSections = [
  {
    title: 'AQAR Reports',
    description: 'Annual Quality Assurance Reports for accreditation and institutional reference.',
    items: [
      internalPdf(
        'AQAR 2022-23',
        'documents/IQAC/NAAC/AQAR/AQAR-2022-23.pdf',
        'https://magadhmahilacollege.org/wp-content/uploads/2024/12/AQAR-2022-23.pdf',
      ),
      internalPdf(
        'AQAR 2021-22',
        'documents/IQAC/NAAC/AQAR/AQAR-2021-22.pdf',
        'https://magadhmahilacollege.org/wp-content/uploads/2023/06/AQAR-2021-22.pdf',
      ),
      internalPdf(
        'AQAR 2020-21',
        'documents/IQAC/NAAC/AQAR/AQAR-2020-21.pdf',
        'https://magadhmahilacollege.org/wp-content/uploads/2022/04/AQAR-2020-21.pdf',
      ),
      internalPdf(
        'AQAR 2019-20',
        'documents/IQAC/NAAC/AQAR/AQAR-2019-20-resubmitted-2.pdf',
        'https://magadhmahilacollege.org/wp-content/uploads/2022/01/AQAR-2019-20-resubmitted-2.pdf',
      ),
    ],
  },
  {
    title: 'Academic Calendars',
    description: 'Academic session planning, schedules, and calendar references.',
    items: [
      pageLink(
        'Academic Calendar 2023-24',
        'https://magadhmahilacollege.org/revised-academic-calendar/',
        '/iqac/academic-calendar',
      ),
      internalPdf(
        'Academic Calendar 2022-23',
        'data files/IQAC/Academic Calender/Academic-Calendar-Admission-2022-2023.pdf',
        'https://magadhmahilacollege.org/wp-content/uploads/2024/04/Academic-Calendar-Admission-2022-2023.pdf',
      ),
    ],
  },
  {
    title: 'Annual Reports',
    description: 'Institutional annual report resources for academic and administrative review.',
    items: [
      externalPdf(
        'Annual Report 2023-24',
        'https://magadhmahilacollege.org/wp-content/uploads/2024/12/Annual_Report_2023-24_MMC_Patna.pdf',
      ),
    ],
  },
  {
    title: 'Academics & Infrastructure',
    description: 'Core academic resources, research pages, and campus infrastructure information.',
    items: [
      pageLink('Feedback Forms', 'https://magadhmahilacollege.org/feedback-forms/', '/about/feedback-forms'),
      pageLink(
        'Project Internship & Field Work',
        'https://magadhmahilacollege.org/project%20internship-field-work/',
        '/iqac/project-internship-fieldwork',
      ),
      pageLink('Syllabus NEP', 'https://magadhmahilacollege.org/syllabus-nep/', '/nep2020/syllabus-nep'),
      pageLink('Research', 'https://magadhmahilacollege.org/research/', '/iqac/research'),
      pageLink('Infrastructure', 'https://magadhmahilacollege.org/infrastructure-and-facilities/', '/campus-life'),
      pageLink(
        'Academic Infrastructure',
        'https://magadhmahilacollege.org/academic-infrastructure-2/',
        '/nep2020/academic-infrastructure',
      ),
      pageLink('Sports Facilities', 'https://magadhmahilacollege.org/sports-facilities/', '/campus-life'),
      pageLink('Central Library', 'https://magadhmahilacollege.org/central-library/', '/nep2020/library'),
      pageLink(
        'Infrastructure Maintenance',
        'https://magadhmahilacollege.org/infrastructure-maintenance/',
        '/about/infrastructure-maintenance',
      ),
    ],
  },
  {
    title: 'Student Activities & Events',
    description: 'Student participation, extension work, and alumni event resources.',
    items: [
      pageLink(
        'Student Cabinet 2023-24',
        'https://magadhmahilacollege.org/student-cabinet-2023-2024/',
        '/administration/student-cabinet',
      ),
      pageLink(
        'Alumni Meet 2023',
        'https://magadhmahilacollege.org/alumni-meet-2023-on-30th-may-at-magadh-mahila-college/',
        '/alumni',
      ),
      pageLink(
        'NSS & NCC Activities',
        'https://magadhmahilacollege.org/extension-activities-nss-ncc/',
        '/iqac/extension-activities',
      ),
    ],
  },
  {
    title: 'Administration & Governance',
    description: 'Governance, management, grievance, audit, and quality assurance records.',
    items: [
      pageLink(
        'Grievance Redressal Cell',
        'https://magadhmahilacollege.org/internal-examination-grievances-redressal-cell/',
        '/grievance',
      ),
      pageLink('MIS', 'https://magadhmahilacollege.org/mis/', '/about/mis'),
      pageLink(
        'Organogram',
        'https://magadhmahilacollege.org/organisation-structure/',
        '/administration/organogram-of-institution',
      ),
      internalPdf(
        'Audit Report 2023-24',
        'documents/mmcaudit.pdf',
        'https://magadhmahilacollege.org/pdf/audit_report.pdf',
      ),
      pageLink('Minutes of IQAC', 'https://magadhmahilacollege.org/minutes-of-iqac/', '/iqac/minutes-of-iqac'),
    ],
  },
  {
    title: 'Other Resources',
    description: 'General institutional pages and supplementary policy or archive resources.',
    items: [
      pageLink('Academics', 'https://magadhmahilacollege.org/academics/', '/academics'),
      pageLink('Mission & Vision', 'https://magadhmahilacollege.org/vision-mission/', '/about/vision-mission'),
      pageLink('Tenders', 'https://magadhmahilacollege.org/category/tenders/', '/tenders'),
      pageLink('Annual Reports (All)', 'https://magadhmahilacollege.org/annual-reports/', '/annual-reports'),
      pageLink(
        'Gender Sensitization',
        'https://magadhmahilacollege.org/gender-sensitization/',
        '/sexual-harassment',
      ),
      externalPdf(
        'Programmes PDF',
        'https://magadhmahilacollege.org/wp-content/uploads/2025/01/7_1-9_programmes.pdf',
      ),
      pageLink(
        'Best Practices',
        'https://magadhmahilacollege.org/best-practices-2023-24/',
        '/iqac/best-practices-2023-24',
      ),
    ],
  },
];

const totalResources = documentSections.reduce((sum, section) => sum + section.items.length, 0);
const totalPdfs = documentSections.reduce(
  (sum, section) => sum + section.items.filter((item) => item.type === 'pdf').length,
  0,
);

function resourceMatches(item, section, query) {
  if (!query) return true;

  const normalizedSection = section.title.toLowerCase();
  return (
    item.title.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query) ||
    normalizedSection.includes(query)
  );
}

export default function ImportantDocuments() {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm.trim().toLowerCase());

  const visibleSections = documentSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => resourceMatches(item, section, deferredSearchTerm)),
    }))
    .filter((section) => section.items.length > 0);

  const visibleCount = visibleSections.reduce((sum, section) => sum + section.items.length, 0);

  return (
    <>
      <Helmet>
        <title>Important Documents &amp; Resources - Magadh Mahila College</title>
        <meta
          name="description"
          content="Browse important documents and resources for Magadh Mahila College including AQAR reports, academic calendars, annual reports, administration records, infrastructure pages, and student activity links."
        />
      </Helmet>

      <div className="min-h-screen bg-[linear-gradient(180deg,#f5f0e6_0%,#ffffff_24%,#edf5f6_100%)]">
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 shadow-[0_22px_60px_-28px_rgba(15,52,70,0.24)] backdrop-blur"
            >
              <div className="border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_right,rgba(13,91,120,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,123,71,0.12),transparent_30%)] px-6 py-8 sm:px-8 lg:px-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  <span className="h-2 w-2 rounded-full bg-amber-600" aria-hidden="true" />
                  Resource Directory
                </div>

                <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-end">
                  <div>
                    <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                      Important Documents &amp; Resources
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                      A single access point for key academic, administrative, governance, and
                      infrastructure documents. PDF resources open on a dedicated viewer page inside
                      the website, while page links stay within the same site flow.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-sm">
                      <p className="font-serif text-3xl font-bold text-slate-950">{totalResources}</p>
                      <p className="mt-2 text-sm font-medium text-slate-600">
                        Resources grouped into 7 categories
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-sm">
                      <p className="font-serif text-3xl font-bold text-slate-950">{totalPdfs}</p>
                      <p className="mt-2 text-sm font-medium text-slate-600">
                        Direct PDF links in the directory
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                  <div>
                    <label
                      htmlFor="important-documents-search"
                      className="mb-3 block text-sm font-semibold text-slate-800"
                    >
                      Search documents by title
                    </label>
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        id="important-documents-search"
                        type="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search AQAR, audit report, library, student cabinet..."
                        className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  <div
                    className="inline-flex min-h-[56px] items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600"
                    aria-live="polite"
                  >
                    <span className="text-slate-900">{visibleCount}</span>
                    <span>
                      resource{visibleCount === 1 ? '' : 's'} shown
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                {visibleSections.length === 0 ? (
                  <div className="rounded-[28px] border border-dashed border-primary/25 bg-primary/5 px-6 py-14 text-center">
                    <h2 className="font-serif text-3xl font-bold text-slate-950">
                      No matching resources
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                      Try a different keyword or clear the search box to view the full document
                      directory.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {visibleSections.map((section, sectionIndex) => (
                      <motion.section
                        key={section.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: sectionIndex * 0.04 }}
                        className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_46px_-30px_rgba(15,52,70,0.28)]"
                      >
                        <div className="flex flex-col gap-3 border-b border-slate-200 bg-[linear-gradient(90deg,rgba(13,91,120,0.08),rgba(13,91,120,0.02))] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-950">
                              {section.title}
                            </h2>
                            <p className="mt-1 text-sm text-slate-600">{section.description}</p>
                          </div>

                          <div className="inline-flex items-center rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                            {section.items.length} item{section.items.length === 1 ? '' : 's'}
                          </div>
                        </div>

                        <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-3">
                          {section.items.map((item) => {
                            const isPdf = item.type === 'pdf';
                            const ItemIcon = isPdf ? FileText : Link2;

                            return (
                              <article
                                key={`${section.title}-${item.title}`}
                                className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,249,0.92))] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_18px_34px_-24px_rgba(15,52,70,0.32)]"
                              >
                                <div className="flex items-start gap-4">
                                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <ItemIcon className="h-5 w-5" />
                                  </div>

                                  <div className="min-w-0">
                                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                      {isPdf ? 'PDF' : 'Page'}
                                    </span>
                                    <a
                                      href={item.href}
                                      className="mt-3 inline-block text-lg font-bold leading-7 text-slate-950 transition group-hover:text-primary hover:text-primary"
                                    >
                                      {item.title}
                                    </a>
                                    <p className="mt-2 text-sm text-slate-600">
                                      {isPdf
                                        ? 'Direct PDF document with an in-site viewer page.'
                                        : 'Website page opening on the same website.'}
                                    </p>
                                  </div>
                                </div>

                                <div className="mt-5 break-all rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-xs leading-6 text-slate-500">
                                  <a href={item.href} className="transition hover:text-primary hover:underline">
                                    {item.displayUrl}
                                  </a>
                                </div>

                                <div className="mt-5 pt-1">
                                  <a
                                    href={item.href}
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                  >
                                    {isPdf ? 'View PDF' : 'Open Page'}
                                    <ArrowUpRight className="h-4 w-4" />
                                  </a>
                                </div>
                              </article>
                            );
                          })}
                        </div>
                      </motion.section>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
