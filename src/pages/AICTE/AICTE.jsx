import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
const AICTE = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.aicte_letter_of_approval_report_2024_2025_1v9eiy9")}</title>
        <meta name="description" content="View the AICTE Letter of Approval Report for 2024-2025 at Magadh Mahila College." />
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
                <span className="text-primary">{i18next.t("auto.aicte_letter_of_approval_1wgadgi")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.all_india_council_for_technical_education_letter_12cffab")}
              `}</p>
            </motion.div>

            {/* PDF Viewer */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="mb-12">
              <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <h2 className="text-xl font-bold text-foreground">{i18next.t("auto.loa_report_2024_2025_pdf_1ifav21")}</h2>
                        <p className="text-muted-foreground">{i18next.t("auto.aicte_letter_of_approval_report_1tdkvtt")}</p>
                      </div>
                    </div>
                    <motion.a href={r2Url('documents/LoA-Report-2024-2025.pdf')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors" whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                      <Download className="w-5 h-5" />
                      <span>{i18next.t("auto.download_pdf_1f9pgar")}</span>
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <iframe src={r2Url('documents/LoA-Report-2024-2025.pdf')} className="w-full h-[600px] border-0 rounded-lg" title={i18next.t("auto.aicte_letter_of_approval_report_2024_2025_1ortdt9")} />
                </div>
              </div>
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
