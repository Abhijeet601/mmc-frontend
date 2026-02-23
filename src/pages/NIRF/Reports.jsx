import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, Award, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Reports = () => {
  const { t } = useTranslation();

  const reports = [
    {
      title: 'NIRF 2023 Overall Report',
      description: 'Complete NIRF evaluation report for the year 2023 including all parameters and rankings.',
      year: '2023',
      size: '2.4 MB',
      format: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Parameter-wise Analysis Report',
      description: 'Detailed breakdown of scores across all five NIRF parameters with comparative analysis.',
      year: '2023',
      size: '1.8 MB',
      format: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Institutional Performance Summary',
      description: 'Executive summary of institutional performance, achievements, and improvement areas.',
      year: '2023',
      size: '956 KB',
      format: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'NIRF 2022 Report',
      description: 'Previous year NIRF evaluation report for comparison and trend analysis.',
      year: '2022',
      size: '2.1 MB',
      format: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Research Output Analysis',
      description: 'Comprehensive analysis of research publications, citations, and impact factors.',
      year: '2023',
      size: '1.2 MB',
      format: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Student Placement Report',
      description: 'Detailed report on student placements, salary packages, and career progression.',
      year: '2023',
      size: '887 KB',
      format: 'PDF',
      downloadUrl: '#'
    }
  ];

  const stats = [
    { label: 'Reports Available', value: '12', icon: FileText },
    { label: 'Total Downloads', value: '1,247', icon: Download },
    { label: 'Latest Update', value: 'Dec 2023', icon: Calendar },
    { label: 'Coverage Years', value: '2020-2023', icon: TrendingUp }
  ];

  return (
    <>
      <Helmet>
        <title>NIRF Reports - Performance Analysis | Magadh Mahila College</title>
        <meta name="description" content="Download comprehensive NIRF reports, analysis documents, and performance summaries for Magadh Mahila College." />
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
                <span className="text-primary">NIRF Reports & Analysis</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Comprehensive reports and analytical documents providing detailed insights into our NIRF performance and institutional metrics.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white shadow-lg border border-border"
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Reports List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Available Reports</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reports.map((report, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="p-6 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {report.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {report.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {report.year}
                          </span>
                          <span>{report.size}</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                            {report.format}
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <button className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </button>
                          <a
                            href="/about/mou"
                            className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-lg hover:bg-secondary/90 transition-colors"
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            DOWNLOAD MOU
                          </a>
                          <button className="inline-flex items-center px-4 py-2 border border-primary text-primary text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Report Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Report Categories</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <FileText className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Annual Reports</h3>
                  <p className="text-blue-700 text-sm">
                    Complete yearly NIRF evaluation reports with detailed analysis and rankings.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Performance Analysis</h3>
                  <p className="text-green-700 text-sm">
                    In-depth analysis of institutional performance across all NIRF parameters.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Comparative Studies</h3>
                  <p className="text-purple-700 text-sm">
                    Benchmarking reports comparing our performance with peer institutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Need Specific Reports?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Contact our NIRF coordination team for customized reports, detailed analysis, or specific data requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">Reports Coordinator</div>
                  <div className="text-white/80">Dr. Rajesh Kumar</div>
                  <div className="text-white/80">nirf.reports@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reports;
