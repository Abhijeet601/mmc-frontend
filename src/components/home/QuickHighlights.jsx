import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, Building2, Trophy } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

const QuickHighlights = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: BookOpen,
      title: t('quickHighlights.academicPrograms'),
      description: t('quickHighlights.academicProgramsDesc'),
      to: '/academics',
      color: 'from-primary to-primary',
      image: r2Url('academic-excellence.webp'),
    },
    {
      icon: Building2,
      title: t('quickHighlights.modernCampus'),
      description: t('quickHighlights.modernCampusDesc'),
      to: '/campus-life',
      color: 'from-primary to-primary',
      image: r2Url('modern-campus.webp'),
    },
    {
      icon: Trophy,
      title: t('quickHighlights.achievements'),
      description: t('quickHighlights.achievementsDesc'),
      to: '/about/institutions-pride',
      color: 'from-primary to-highlight',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">
            {t('quickHighlights.whyChooseUs')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sans">
            {t('quickHighlights.whyChooseUsDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.to}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Link to={highlight.to} className="block h-full">
                <div className="relative h-full p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg"
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 font-sans">
                    {highlight.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;
