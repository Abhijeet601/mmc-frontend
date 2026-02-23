import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, BookOpen, Award, Download, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Data = () => {
  const { t } = useTranslation();

  const dataCategories = [
    {
      title: 'Teaching, Learning & Research (TLR)',
      score: '85.2',
      maxScore: '100',
      description: 'Student strength, faculty qualifications, research output, and graduation percentage',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Research and Professional Practices (RP)',
      score: '78.5',
      maxScore: '100',
      description: 'Research publications, patents, consultancy projects, and professional practices',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Graduation Outcomes (GO)',
      score: '82.1',
      maxScore: '100',
      description: 'Placement records, higher studies, and median salary of graduates',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Outreach and Inclusivity (OI)',
      score: '88.7',
      maxScore: '100',
      description: 'Regional diversity, inclusion of disadvantaged groups, and outreach activities',
      icon: Award,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Inclusion and Availability of Resources (RA)',
      score: '91.3',
      maxScore: '100',
      description: 'Library, laboratory, sports facilities, and financial resources',
      icon: BarChart3,
      color: 'from-red-500 to-red-600'
    }
  ];

  const metrics = [
    { label: 'Total Students', value: '2,450', change: '+5.2%' },
    { label: 'Faculty Count', value: '156', change: '+8.1%' },
    { label: 'Research Papers', value: '234', change: '+12.5%' },
    { label: 'Placement Rate', value: '87%', change: '+3.8%' },
    { label: 'Campus Area', value: '25 Acres', change: 'Stable' }
  ];

  return (
    <>
      <Helmet>
        <title>NIRF Data - Performance Metrics | Magadh Mahila College</title>
        <meta name="description" content="Explore detailed NIRF data and performance metrics for Magadh Mahila College including TLR, RP, GO, OI, and RA parameters." />
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
                <span className="text-primary">NIRF Data & Metrics</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Comprehensive data and performance indicators used for NIRF evaluation and ranking calculations.
              </p>
            </motion.div>

            {/* Overall Score */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center justify-center w-48 h-48 bg-gradient-to-r from-primary to-highlight rounded-full mb-8">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold">85.6</div>
                  <div className="text-xl">/100</div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Overall NIRF Score</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Calculated based on five key parameters with equal weightage, reflecting our institutional performance and quality metrics.
              </p>
            </motion.div>

            {/* Parameter Scores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Parameter-wise Scores</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {dataCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl font-bold text-primary">
                            {category.score}
                          </div>
                          <div className="text-muted-foreground">
                            /{category.maxScore}
                          </div>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                              style={{ width: `${(parseFloat(category.score) / parseFloat(category.maxScore)) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Key Performance Indicators</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="text-center p-6 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-foreground font-medium mb-1">{metric.label}</div>
                    <div className={`text-sm ${metric.change.startsWith('+') ? 'text-green-600' : metric.change === 'Stable' ? 'text-gray-600' : 'text-red-600'}`}>
                      {metric.change}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Data Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-section"
            >
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Download Complete Dataset</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Access the complete NIRF dataset including all parameters, sub-parameters, and supporting data used for ranking calculations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    <Download className="w-5 h-5 mr-2" />
                    Download Excel
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Eye className="w-5 h-5 mr-2" />
                    View Online
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Data;
