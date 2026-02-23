import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, ExternalLink, ArrowDownRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AnnualReports = () => {
  const { t } = useTranslation();
  const reports = [
    {
      year: '2022-23',
      title: 'Annual Report 2022-2023',
      description: 'Comprehensive report covering academic achievements, student activities, and institutional development',
      downloadLink: '#',
      fileSize: '2.5 MB'
    },
    {
      year: '2021-22',
      title: 'Annual Report 2021-2022',
      description: 'Annual report highlighting academic excellence, research activities, and campus initiatives',
      downloadLink: '#',
      fileSize: '2.1 MB'
    },
    {
      year: '2020-21',
      title: 'Annual Report 2020-2021',
      description: 'Report covering the academic year with focus on online learning and student achievements',
      downloadLink: '#',
      fileSize: '1.8 MB'
    },
    {
      year: '2019-20',
      title: 'Annual Report 2019-2020',
      description: 'Annual report documenting institutional growth and academic accomplishments',
      downloadLink: '#',
      fileSize: '2.3 MB'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('annualReports.title', 'Annual Reports - Magadh Mahila College')}</title>
        <meta name="description" content={t('annualReports.metaDescription', 'Access annual reports of Magadh Mahila College showcasing academic achievements, institutional development, and student activities.')} />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                className="mb-4 flex justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Annual Reports
                </span>
              </h1>
              <p className="text-xl text-foreground max-w-3xl mx-auto">
                Comprehensive documentation of our academic achievements, institutional development, and student activities year by year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reports.map((report, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -12, scale: 1.03, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                    className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden relative"
                  >
                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="p-8 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-200/20 flex items-center justify-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <FileText className="w-6 h-6 text-primary" />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.1 }}
                          >
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                              {report.year}
                            </span>
                          </motion.div>
                        </div>
                        <motion.span
                          className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-lg"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.15 }}
                        >
                          {report.fileSize}
                        </motion.span>
                      </div>

                      <motion.h3
                        className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.05 }}
                      >
                        {report.title}
                      </motion.h3>

                      <motion.p
                        className="text-muted-foreground mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        {report.description}
                      </motion.p>

                      <motion.div
                        className="flex items-center justify-between pt-4 border-t border-blue-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.15 }}
                      >
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Academic Year {report.year}</span>
                        </div>

                        <div className="flex space-x-3">
                          <motion.a
                            href={report.downloadLink}
                            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                            whileHover={{ scale: 1.05, x: 3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </motion.a>
                          <motion.a
                            href="/about/mou"
                            className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                            whileHover={{ scale: 1.05, x: 3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FileText className="w-4 h-4" />
                            <span>MOU</span>
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-primary/10 via-blue-100/50 to-indigo-100/50 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden border-2 border-primary/20"
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 text-primary mx-auto mb-6 relative z-10"
              >
                <FileText className="w-full h-full" />
              </motion.div>

              <motion.h2
                className="text-3xl font-bold text-foreground mb-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Need Older Reports?
              </motion.h2>

              <motion.p
                className="text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                For annual reports from previous years or specific documentation, please contact our administration office.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-200 font-medium group"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Administration</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnnualReports;
