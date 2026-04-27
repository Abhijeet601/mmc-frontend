import i18next from "i18next";
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { r2Url } from '@/lib/r2Assets';
import { pdfViewerPath } from '@/lib/pdfViewer';
import useScreenSize from '@/hooks/useScreenSize';

const aicteReports = [
  {
    title: 'EOA Report 2026-2027',
    description: 'AICTE Extension of Approval Report 2026-2027',
    url: 'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/EOA%20Report%202026-2027.PDF',
  },
  {
    title: i18next.t("auto.aicte_letter_of_approval_report_1tdkvtt"),
    description: i18next.t("auto.aicte_letter_of_approval_report_1tdkvtt"),
    url: r2Url('documents/LoA-Report-2024-2025.pdf'),
  },
];

const getPreviewHeight = (screenSize) => {
  if (typeof window === 'undefined') return 600;

  const availableHeight = screenSize.height - 220;
  const minimumHeight = screenSize.isMobile ? 360 : 480;
  const maximumHeight = screenSize.isMobile ? 620 : 760;

  return Math.min(Math.max(availableHeight, minimumHeight), maximumHeight);
};

const AICTE = () => {
  const screenSize = useScreenSize();
  const [previewHeight, setPreviewHeight] = useState(getPreviewHeight(screenSize));

  useEffect(() => {
    setPreviewHeight(getPreviewHeight(screenSize));
  }, [screenSize]);

  return <>
      <Helmet>
        <title>{i18next.t("auto.aicte_letter_of_approval_report_2024_2025_1v9eiy9")}</title>
        <meta name="description" content="View the AICTE Letter of Approval Report at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-12 px-4 sm:px-6 lg:px-8 md:py-20">
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
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">{i18next.t("auto.aicte_letter_of_approval_1wgadgi")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.all_india_council_for_technical_education_letter_12cffab")}
              `}</p>
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
              {aicteReports.map((report) => (
                <div key={report.title} className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                  <div className="p-4 sm:p-6 border-b border-border">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3 sm:items-center">
                        <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="min-w-0">
                          <h2 className="text-xl font-bold text-foreground">{report.title}</h2>
                          <p className="text-muted-foreground">{report.description}</p>
                        </div>
                      </div>
                      <motion.div whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }}>
                        <Link to={pdfViewerPath({ fileUrl: report.url, title: report.title, back: '/aicte' })} className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                          <FileText className="w-5 h-5" />
                          <span>Open PDF</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-6">
                    <iframe
                      src={report.url}
                      className="w-full border-0 rounded-lg bg-slate-100"
                      style={{ height: `${previewHeight}px` }}
                      title={`${report.title} Preview`}
                    />
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
              <div className="bg-gradient-to-r from-primary/10 to-highlight/10 rounded-2xl p-5 sm:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{i18next.t("auto.about_aicte_1v21v2q")}</h3>
                <p className="text-muted-foreground mb-6">{`
                  ${i18next.t("auto.the_all_india_council_for_technical_education_cierra")}
                `}</p>
                <motion.a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors" whileHover={{
                x: 5
              }}>
                  <span>{i18next.t("auto.visit_aicte_official_website_1hbzsl0")}</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default AICTE;
