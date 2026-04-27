import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { r2Url } from '@/lib/r2Assets';

const nirfReports = [
  {
    year: '2026',
    title: i18next.t("auto.nirf_2026_pdf_1bm0td8"),
    description: i18next.t("auto.national_institutional_ranking_framework_report_10rr0xy"),
    url: r2Url('documents/NIRF 2026.pdf'),
  },
  {
    year: '2025',
    title: 'NIRF 2025',
    description: 'National Institutional Ranking Framework report.',
    url: 'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/NIRF%202025.pdf',
  },
  {
    year: '2024',
    title: 'NIRF 2024',
    description: 'National Institutional Ranking Framework report.',
    url: 'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/nirf%202024.pdf',
  },
];

const pdfViewerUrl = (fileUrl, title) =>
  `/pdf-viewer?file=${encodeURIComponent(fileUrl)}&title=${encodeURIComponent(
    title,
  )}&back=${encodeURIComponent('/nirf')}&kind=pdf`;

const NIRF = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.nirf_2026_national_institutional_ranking_framework_magadh_yp3zvl")}</title>
        <meta name="description" content="View the NIRF report for Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">{i18next.t("auto.nirf_2026_2r8mgg")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.national_institutional_ranking_framework_2026_report_n0d6lp")}
              `}</p>
            </motion.div>

            {/* Year Sections */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {nirfReports.map((report) => (
                <Link
                  key={report.year}
                  to={pdfViewerUrl(report.url, report.title)}
                  className="group rounded-2xl border border-border bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">NIRF</p>
                      <h2 className="mt-2 text-4xl font-bold text-primary">{report.year}</h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <FileText className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{report.title}</p>
                </Link>
              ))}
            </motion.div>

            {/* PDF Viewers */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="mb-12 space-y-8">
              {nirfReports.map((report) => (
                <div id={`nirf-${report.year}`} key={report.title} className="scroll-mt-24 bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <div>
                          <h2 className="text-xl font-bold text-foreground">{report.title}</h2>
                          <p className="text-muted-foreground">{report.description}</p>
                        </div>
                      </div>
                      <motion.div whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }}>
                        <Link to={pdfViewerUrl(report.url, report.title)} className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                          <FileText className="w-5 h-5" />
                          <span>Open PDF</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6">
                    <iframe src={report.url} className="w-full h-[600px] border-0 rounded-lg" title={`${report.title} Report`} />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center">
              <div className="bg-gradient-to-r from-primary/10 to-highlight/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{i18next.t("auto.about_nirf_1qarsjf")}</h3>
                <p className="text-muted-foreground mb-6">{`
                  ${i18next.t("auto.the_national_institutional_ranking_framework_nirf_is_1drc8k1")}
                `}</p>
                <motion.a href="https://www.nirfindia.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors" whileHover={{
                x: 5
              }}>
                  <span>{i18next.t("auto.visit_nirf_official_website_1kw18ot")}</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default NIRF;
