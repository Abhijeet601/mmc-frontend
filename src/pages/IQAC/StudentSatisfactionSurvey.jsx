import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, ExternalLink, Download } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const StudentSatisfactionSurvey = () => {
  const surveyFormLink =
    'https://docs.google.com/forms/d/1rWE_80w9hgKh6tlz3tiBtCkBiUc_8DYxo9ClJHHGRII/viewform?pli=1&pli=1&edit_requested=true';

  const pdfLinks = [
    {
      title: 'Student Satisfaction Survey Report',
      fileName: 'SSS-report.pdf',
      href: r2Url('documents/IQAC/Student%20Satisfaction%20Survey/SSS-report.pdf')
    },
    {
      title: 'Student Satisfaction Survey Document',
      fileName: 'mmc_student1.pdf',
      href: r2Url('documents/IQAC/Student%20Satisfaction%20Survey/mmc_student1.pdf')
    }
  ];

  return (
    <>
      <Helmet>
        <title>Student Satisfaction Survey - IQAC | Magadh Mahila College</title>
        <meta name="description" content="Participate in student satisfaction surveys to help improve academic quality at Magadh Mahila College." />
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
                <span className="text-primary">Student Satisfaction Survey</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Your feedback helps us improve the quality of education and campus facilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-12 bg-gray-50 rounded-2xl"
            >
              <MessageSquare className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Share Your Feedback</h2>
              <p className="text-muted-foreground mb-6">
                Help us understand your experience and improve our services.
              </p>
              <a
                href={surveyFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Take Survey
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground">Survey PDFs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pdfLinks.map((pdf) => (
                  <div key={pdf.href} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{pdf.title}</h3>
                        <p className="text-sm text-muted-foreground">{pdf.fileName}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={pdf.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open PDF
                      </a>
                      <a
                        href={pdf.href}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StudentSatisfactionSurvey;
