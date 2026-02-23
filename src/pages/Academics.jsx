import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Users, ExternalLink, Download, Sparkles, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Academics = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    { name: 'Bachelor of Arts (B.A.)', category: 'ug', duration: '4 Years', icon: '🎓' },
    { name: 'Bachelor of Science (B.Sc.)', category: 'ug', duration: '4Years', icon: '🔬' },
    { name: 'Bachelor of Commerce (B.Com)', category: 'ug', duration: '4 Years', icon: '💼' },
    { name: 'Bachelor of Business Administration (B.B.A.)', category: 'ug', duration: '3 Years', icon: '📊' },
    { name: 'Bachelor of Computer Applications (B.C.A.)', category: 'ug', duration: '3 Years', icon: '💻' },
    { name: 'Bachelor of Social Work (B.S.W.)', category: 'ug', duration: '3 Years', icon: '🤝' },
    { name: 'Master of Arts (M.A.)', category: 'pg', duration: '2 Years', icon: '📚' },
    { name: 'Master of Science (M.Sc.)', category: 'pg', duration: '2 Years', icon: '🔭' },  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab);

  const tabs = [
    { id: 'all', label: t('academics.allPrograms'), icon: BookOpen },
    { id: 'ug', label: t('academics.undergraduate'), icon: GraduationCap },
    { id: 'pg', label: t('academics.postgraduate'), icon: Award },  ];

  return (
    <>
      <Helmet>
        <title>{t('academics.title')}</title>
        <meta name="description" content={t('academics.metaDescription')} />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Animated Background Elements */}
          <motion.div
            className="fixed inset-0 -z-10"
            animate={{
              background: [
                'radial-gradient(600px at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 80%)',
                'radial-gradient(600px at 90% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 80%)',
                'radial-gradient(600px at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 80%)',
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">
                  {t('academics.programsTitle')}
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                {t('academics.programsSubtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {tabs.map((tab, idx) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card text-foreground hover:bg-section shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                >
                  <motion.div
                    animate={activeTab === tab.id ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <tab.icon className="w-5 h-5" />
                  </motion.div>
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ y: -15, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative cursor-pointer h-full"
                  >
                    <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden">
                      {/* Animated background blob */}
                      <motion.div
                        className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div
                          className="text-5xl mb-4"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {program.icon}
                        </motion.div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {program.name}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <motion.div
                            className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 text-white text-sm font-medium"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          >
                            {program.duration}
                          </motion.div>
                          <motion.div
                            className="px-3 py-1 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 text-sm font-medium capitalize"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          >
                            {program.category === 'ug' ? 'UG' : program.category === 'pg' ? 'PG' : 'Vocational'}
                          </motion.div>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-4">
                          {t('academics.programDescription')}
                        </p>
                        
                        <motion.div
                          className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="mt-20 text-center"
            >
              <Link
                to="/departments"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Users className="w-6 h-6" />
                Explore Departments
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary to-blue-600 text-primary-foreground relative overflow-hidden"
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute w-96 h-96 -top-48 -right-48 bg-white rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0 }}
                >
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      50+
                    </motion.span>
                  </motion.div>
                  <motion.p
                    className="text-white/90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Academic Programs
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      100+
                    </motion.span>
                  </motion.div>
                  <motion.p
                    className="text-white/90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Experienced Faculty
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      95%
                    </motion.span>
                  </motion.div>
                  <motion.p
                    className="text-white/90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Success Rate
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Academics;