import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const AUDIT_REPORT_PDF = r2Url('documents/mmcaudit.pdf');

const AuditReport = () => {
  return (
    <>
      <Helmet>
        <title>Audit Report - Magadh Mahila College</title>
        <meta
          name="description"
          content="View the official audit report document of Magadh Mahila College."
        />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">Audit Report</h1>
                    <p className="text-muted-foreground">Magadh Mahila College</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={AUDIT_REPORT_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open PDF
                  </a>
                  <a
                    href={AUDIT_REPORT_PDF}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src={AUDIT_REPORT_PDF}
                  title="MMC Audit Report"
                  className="w-full h-[80vh] border-0"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuditReport;
