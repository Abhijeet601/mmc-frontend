import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, FileText, Users, Lightbulb, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Research = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>IQAC Research - Publications & Projects | Magadh Mahila College</title>
        <meta name="description" content="Explore research activities, publications, and academic projects at Magadh Mahila College through IQAC initiatives." />
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
                <span className="text-primary">Research & Publications</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Promoting research culture, academic publications, and innovative projects to advance knowledge and contribute to society.
              </p>
            </motion.div>

            {/* Research Sub-Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Research Initiatives</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <Link
                  to="/iqac/research-grants"
                  className="group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <Award className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Research Grants</h3>
                  <p className="text-blue-700 text-sm">
                    Funding opportunities and grant management for research projects.
                  </p>
                </Link>
                <Link
                  to="/iqac/research-publications"
                  className="group p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 hover:shadow-lg transition-all duration-300"
                >
                  <FileText className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Research Publications</h3>
                  <p className="text-green-700 text-sm">
                    Academic publications, journal articles, and research papers.
                  </p>
                </Link>
                <Link
                  to="/iqac/research-guides-phd-scholars"
                  className="group p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:shadow-lg transition-all duration-300"
                >
                  <Users className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Research Guides & PhD Scholars</h3>
                  <p className="text-purple-700 text-sm">
                    Meet our research supervisors and PhD research scholars.
                  </p>
                </Link>
                <Link
                  to="/iqac/research-development-cell"
                  className="group p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <Lightbulb className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-orange-900 mb-2">Research & Development Cell</h3>
                  <p className="text-orange-700 text-sm">
                    Innovation hub for research and development activities.
                  </p>
                </Link>
                <Link
                  to="/iqac/publication-in-books-other-journals"
                  className="group p-6 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  <BookOpen className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-red-900 mb-2">Publication in Books & Other Journals</h3>
                  <p className="text-red-700 text-sm">
                    Academic publications in books and other scholarly journals.
                  </p>
                </Link>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
};

export default Research;
