import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const SelfStudyReport = () => {
  return (
    <>
      <Helmet>
        <title>Self Study Report - NAAC | Magadh Mahila College</title>
        <meta name="description" content="Download the Self Study Report for NAAC accreditation at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Self Study Report</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Comprehensive self-evaluation document prepared for NAAC accreditation assessment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8 text-center"
            >
              <FileText className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Magadh Mahila College Summary</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Detailed self-study report outlining institutional strengths, achievements, and areas for improvement as per NAAC guidelines.
              </p>
              <a
                href={r2Url('documents/IQAC/MAGADH-MAHILA-COLLEGE-SUMMARY.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg"
              >
                <Download className="w-5 h-5" />
                Download Self Study Report
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SelfStudyReport;
