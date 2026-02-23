import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Award, Users, GraduationCap } from 'lucide-react';

const InstituteDistinctiveness = () => {
  const { t } = useTranslation();

  const content = t('nav.aboutSub.instituteDistinctiveness.content', { returnObjects: true });

  // Split content by double newlines to separate paragraphs
  const paragraphs = content.split('\n\n');

  return (
    <>
      <Helmet>
        <title>Institute Distinctiveness - Magadh Mahila College</title>
        <meta name="description" content={t('nav.aboutSub.instituteDistinctiveness.description')} />
      </Helmet>

      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('nav.aboutSub.instituteDistinctiveness.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('nav.aboutSub.instituteDistinctiveness.description')}
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: <BookOpen className="w-6 h-6" />, label: 'Holistic Education', color: 'from-blue-500 to-blue-600' },
              { icon: <Award className="w-6 h-6" />, label: 'Academic Excellence', color: 'from-purple-500 to-purple-600' },
              { icon: <Users className="w-6 h-6" />, label: 'Community Impact', color: 'from-pink-500 to-pink-600' },
              { icon: <GraduationCap className="w-6 h-6" />, label: 'Student Success', color: 'from-indigo-500 to-indigo-600' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.label}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="p-8 md:p-12">
              <div className="prose prose-lg prose-gray max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <div key={index} className="mb-6 text-gray-700 leading-relaxed text-justify">
                    {/* Handle line breaks within paragraphs */}
                    {paragraph.split('\n').map((line, lineIndex) => (
                      <p key={lineIndex} className="mb-2">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-blue-900 mb-3">Academic Excellence</h3>
              <p className="text-blue-800">
                19 students awarded gold medal in Patna University examination 2022 with merit scholarships for rank holders.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-green-900 mb-3">Inclusivity</h3>
              <p className="text-green-800">
                Spreading knowledge to all regardless of caste, creed, or economic background with a diverse student body.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-orange-900 mb-3">Hostel Facility</h3>
              <p className="text-orange-800">
                Mahima Chhatravas - G+7 Girls' Hostel with 504 students capacity, modern amenities and 24/7 facilities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default InstituteDistinctiveness;
