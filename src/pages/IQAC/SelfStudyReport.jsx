import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const SelfStudyReport = () => {
  useTranslation();
  return <>
      <Helmet>
        <title>{i18next.t("auto.self_study_report_naac_magadh_mahila_college_1e1os95")}</title>
        <meta name="description" content="Download the Self Study Report for NAAC accreditation at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
                <span className="text-primary">{i18next.t("auto.self_study_report_dc87zs")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.comprehensive_self_evaluation_document_prepared_for_naac_1rsvdw8")}
              `}</p>
            </motion.div>

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
          }} className="bg-white rounded-2xl shadow-lg border border-border p-8 text-center">
              <FileText className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">{i18next.t("auto.ssr_mmc_2018_1att7te")}</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{`
                ${i18next.t("auto.detailed_self_study_report_outlining_institutional_strengths_1tuskra")}
              `}</p>
              <a href="https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/data%20files/SSR-MMC%202018.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg">
                <Download className="w-5 h-5" />{`
                ${i18next.t("auto.download_self_study_report_3bl4zw")}
              `}</a>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default SelfStudyReport;
