import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Info, Users, Award, Star, BookOpen, Target, Heart, CheckCircle, Calendar, FileText, Home as HomeIcon, Sparkles, Shield, Building, GraduationCap, ArrowRight, TrendingUp } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const aboutSections = [
    { path: '/about/brief-profile', title: t('pages.about.sections.briefProfile.title'), description: t('pages.about.sections.briefProfile.description'), icon: Building },
    { path: '/about/principal', title: t('nav.aboutSub.principalProfile'), description: t('pages.about.sections.principalProfile.description'), icon: Users },
    { path: '/about/previous-principals', title: t('nav.aboutSub.previousPrincipals'), description: t('pages.about.sections.previousPrincipals.description'), icon: Award },
    { path: '/about/emblem', title: t('nav.aboutSub.collegeEmblem'), description: t('pages.about.sections.collegeEmblem.description'), icon: Star },
    { path: '/about/roll-of-honor', title: t('nav.aboutSub.studentsRollOfHonor'), description: t('pages.about.sections.studentsRollOfHonor.description'), icon: GraduationCap },
    { path: '/about/code-of-ethics', title: t('nav.aboutSub.codeOfEthics'), description: t('pages.about.sections.codeOfEthics.description'), icon: Shield },
    { path: '/about/code-of-conduct', title: t('nav.aboutSub.codeOfConduct'), description: t('pages.about.sections.codeOfConduct.description'), icon: CheckCircle },
    { path: '/about/melc', title: t('nav.aboutSub.modelElectoralLiteracyClub'), description: t('pages.about.sections.melc.description'), icon: BookOpen },
    { path: '/about/institutions-pride', title: t('nav.aboutSub.institutionsPride'), description: t('pages.about.sections.institutionsPride.description'), icon: TrendingUp },
    { path: '/about/vision-mission', title: t('nav.aboutSub.visionMissionCoreValues'), description: t('pages.about.sections.visionMission.description'), icon: Target },
    { path: '/about/best-practices', title: t('nav.aboutSub.bestPractices'), description: t('pages.about.sections.bestPractices.description'), icon: Heart },
    { path: '/about/feedback-forms', title: t('nav.aboutSub.feedback'), description: t('pages.about.sections.feedbackForms.description'), icon: Info },
    { path: '/about/environment-policy', title: t('nav.aboutSub.environmentalPolicy'), description: t('pages.about.sections.environmentalPolicy.description'), icon: HomeIcon },
    { path: '/about/mou', title: t('nav.aboutSub.mou'), description: t('pages.about.sections.mou.description'), icon: FileText },
    { path: '/about/future-plans', title: t('nav.aboutSub.futurePlans'), description: t('pages.about.sections.futurePlans.description'), icon: Sparkles },
    { path: '/about/milestones', title: t('nav.aboutSub.milestones'), description: t('pages.about.sections.milestones.description'), icon: Calendar },
    { path: '/about/visitors-note', title: t('nav.aboutSub.visitorsNote'), description: t('pages.about.sections.visitorsNote.description'), icon: Users },
    { path: '/about/management-administration', title: t('nav.aboutSub.managementAdministration'), description: t('pages.about.sections.managementAdministration.description'), icon: Building },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Helmet>
        <title>{t('pages.about.title')}</title>
        <meta name="description" content={t('pages.about.metaDescription')} />
      </Helmet>

      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-blue-50/20 via-white to-maroon-50/20 -z-10"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.9), rgba(139, 69, 19, 0.1))',
            'linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.1))',
            'linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.9), rgba(139, 69, 19, 0.1))',
            'linear-gradient(315deg, rgba(139, 69, 19, 0.1), rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.1))',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-primary/10 rounded-full -z-10"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="min-h-screen bg-transparent py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <BookOpen className="w-10 h-10 text-primary" />
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-primary"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {t('pages.about.mainTitle')}
              </motion.h1>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <Sparkles className="w-10 h-10 text-maroon-500" />
              </motion.div>
            </motion.div>
            <motion.p
              className="text-gray-600 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('pages.about.subtitle')}
            </motion.p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: Building, label: 'Est. 1946', color: 'blue' },
              { icon: GraduationCap, label: 'Educating Women', color: 'purple' },
              { icon: Award, label: 'Excellence', color: 'green' },
              { icon: Target, label: 'Our Mission', color: 'red' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`bg-white rounded-xl p-6 shadow-lg border-l-4 border-${stat.color}-500 hover:shadow-2xl`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    <Icon className={`w-8 h-8 text-${stat.color}-500 mb-2`} />
                  </motion.div>
                  <p className="font-semibold text-gray-800">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Sections Container */}
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-3xl font-semibold text-primary mb-8 pb-4 border-b-2 border-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('pages.about.exploreSectionsTitle')}
            </motion.h2>

            {/* Sections Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {aboutSections.map((section, sectionIndex) => {
                const Icon = section.icon;
                const isOpen = openSections.includes(sectionIndex);

                return (
                  <motion.div
                    key={sectionIndex}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.button
                      onClick={() => toggleSection(sectionIndex)}
                      className={`w-full text-left p-5 rounded-xl transition-all duration-300 border-2 ${
                        isOpen
                          ? 'bg-gradient-to-r from-primary/10 to-maroon-500/10 border-primary'
                          : 'bg-gray-50 border-gray-200 hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start gap-3">
                        <motion.div
                          animate={isOpen ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className="mt-1"
                        >
                          <Icon className={`w-6 h-6 ${isOpen ? 'text-primary' : 'text-gray-500'}`} />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-semibold ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                            {section.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {section.description}
                          </p>
                        </div>
                        <motion.div
                          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
                        </motion.div>
                      </div>
                    </motion.button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="mt-4 p-4 bg-white rounded-lg border-l-4 border-primary"
                          >
                            <p className="text-gray-700 mb-4">
                              {section.description}
                            </p>
                            <Link
                              to={section.path}
                              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
                            >
                              {t('pages.about.learnMore')}
                              <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ArrowRight className="w-4 h-4" />
                              </motion.span>
                            </Link>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Commitment Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-primary/5 to-maroon-500/5 rounded-2xl shadow-xl p-8 border-2 border-primary/20"
          >
            <motion.div
              className="flex items-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex-shrink-0"
              >
                <Heart className="w-12 h-12 text-maroon-500" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Our Commitment to Excellence
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Magadh Mahila College stands as a beacon of women's empowerment and academic excellence.
                  Established in 1946, we have been nurturing young minds and shaping futures for generations.
                  Our institution is committed to providing quality education, fostering holistic development,
                  and creating an environment where every student can thrive and achieve their full potential.
                </p>

                {/* Features List */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    'Quality Education',
                    'Holistic Development',
                    'Women Empowerment',
                    'Academic Excellence',
                    'Inclusive Environment',
                    'Future Ready Skills',
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
