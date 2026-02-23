import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const NIRF = () => {
  return (
    <>
      <Helmet>
        <title>NIRF 2026 - National Institutional Ranking Framework | Magadh Mahila College</title>
        <meta name="description" content="View the NIRF 2026 report for Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">NIRF 2026</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                National Institutional Ranking Framework - 2026 Report
              </p>
            </motion.div>

            {/* PDF Viewer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <h2 className="text-xl font-bold text-foreground">NIRF 2026.pdf</h2>
                        <p className="text-muted-foreground">National Institutional Ranking Framework Report</p>
                      </div>
                    </div>
                    <motion.a
                      href={r2Url('documents/NIRF 2026.pdf')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-5 h-5" />
                      <span>Download PDF</span>
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <iframe
                    src={r2Url('documents/NIRF 2026.pdf')}
                    className="w-full h-[600px] border-0 rounded-lg"
                    title="NIRF 2026 Report"
                  />
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-primary/10 to-highlight/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">About NIRF</h3>
                <p className="text-muted-foreground mb-6">
                  The National Institutional Ranking Framework (NIRF) is a methodology adopted by the Ministry of Education, Government of India, to rank institutions of higher education in India.
                </p>
                <motion.a
                  href="https://www.nirfindia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Visit NIRF Official Website</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NIRF;
