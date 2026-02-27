import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
const NIRF = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.nirf_2026_national_institutional_ranking_framework_magadh_yp3zvl")}</title>
        <meta name="description" content="View the NIRF 2026 report for Magadh Mahila College." />
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
                        <h2 className="text-xl font-bold text-foreground">{i18next.t("auto.nirf_2026_pdf_1bm0td8")}</h2>
                        <p className="text-muted-foreground">{i18next.t("auto.national_institutional_ranking_framework_report_10rr0xy")}</p>
                      </div>
                    </div>
                    <motion.a href={r2Url('documents/NIRF 2026.pdf')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors" whileHover={{
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
                  <iframe src={r2Url('documents/NIRF 2026.pdf')} className="w-full h-[600px] border-0 rounded-lg" title={i18next.t("auto.nirf_2026_report_c3ikhq")} />
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
