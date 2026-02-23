import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, BookOpen, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';

const Workshop = () => {
  const { t } = useTranslation();

  const workshops = [
    {
      title: 'NAAC Awareness and Documentation',
      pdf: r2Url('documents/IQAC/workshop/NAAC-AWARENESS-AND-DOCUMENTATION.pdf'),
      description: 'Comprehensive guide on NAAC accreditation process and documentation requirements.'
    },
    {
      title: 'Report of IPR and Entrepreneurship',
      pdf: r2Url('documents/IQAC/workshop/Report-of-IPR-and-enterpneurship-4.pdf'),
      description: 'Detailed report on Intellectual Property Rights and entrepreneurship initiatives.'
    },
    {
      title: 'SWAYAM Programme',
      pdf: r2Url('documents/IQAC/workshop/swyam_prog.pdf'),
      description: 'Information on SWAYAM online learning platform and course offerings.'
    }
  ];



  return (
    <>
      <Helmet>
        <title>IQAC Workshops - Faculty Development | Magadh Mahila College</title>
        <meta name="description" content="Explore IQAC workshops and faculty development programs at Magadh Mahila College. Professional training sessions for quality enhancement." />
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
                <span className="text-primary">IQAC Workshops</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Professional development workshops designed to enhance teaching quality, research capabilities, and institutional excellence.
              </p>
            </motion.div>





            {/* Workshop List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Recent Workshops</span>
              </h2>
              <div className="space-y-8">
                {workshops.map((workshop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 mb-6 lg:mb-0">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {workshop.title}
                        </h3>
                        <p className="text-muted-foreground text-lg mb-4">
                          {workshop.description}
                        </p>
                        <a
                          href={workshop.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          View PDF
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Workshop Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Workshop Categories</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Teaching & Learning</h3>
                  <p className="text-blue-700 text-sm">
                    Workshops focused on pedagogy, curriculum development, and student engagement techniques.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <Target className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Research & Innovation</h3>
                  <p className="text-green-700 text-sm">
                    Training sessions on research methodologies, publication strategies, and innovation.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Quality Assurance</h3>
                  <p className="text-purple-700 text-sm">
                    Sessions on accreditation, quality standards, and institutional assessment processes.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
};

export default Workshop;
