import i18next from "i18next";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';
const MIS = () => {
  const {
    t
  } = useTranslation();
  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {t('pages.about.sections.mis.title')}
            </h1>

            {/* PDF Viewer */}
            <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <FileText className="w-8 h-8 text-primary" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{i18next.t("auto.mmc_mis_pdf_pvc42o")}</h2>
                    <p className="text-gray-500">{i18next.t("auto.management_information_system_1laytxb")}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <iframe src={r2Url('documents/about/MMC- MIS.pdf')} className="w-full h-[600px] border-0 rounded-lg" title={i18next.t("auto.mmc_mis_11w6knl")} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default MIS;
