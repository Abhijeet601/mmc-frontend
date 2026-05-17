import i18next from "i18next";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Info, Users, Award, Star, BookOpen, Target, Heart, CheckCircle, Calendar, FileText, Home as HomeIcon, Sparkles, Shield, Building, GraduationCap, ArrowRight, TrendingUp } from 'lucide-react';
const About = () => {
  const {
    t
  } = useTranslation();
  const [openSections, setOpenSections] = useState([]);
  const toggleSection = index => {
    setOpenSections(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };
  const aboutSections = [{
    path: '/about/brief-profile',
    title: t('pages.about.sections.briefProfile.title'),
    description: t('pages.about.sections.briefProfile.description'),
    icon: Building
  }, {
    path: '/about/principal',
    title: t('nav.aboutSub.principalProfile'),
    description: t('pages.about.sections.principalProfile.description'),
    icon: Users
  }, {
    path: '/about/previous-principals',
    title: t('nav.aboutSub.previousPrincipals'),
    description: t('pages.about.sections.previousPrincipals.description'),
    icon: Award
  }, {
    path: '/about/emblem',
    title: t('nav.aboutSub.collegeEmblem'),
    description: t('pages.about.sections.collegeEmblem.description'),
    icon: Star
  }, {
    path: '/about/roll-of-honor',
    title: t('nav.aboutSub.studentsRollOfHonor'),
    description: t('pages.about.sections.studentsRollOfHonor.description'),
    icon: GraduationCap
  }, {
    path: '/about/code-of-ethics',
    title: t('nav.aboutSub.codeOfEthics'),
    description: t('pages.about.sections.codeOfEthics.description'),
    icon: Shield
  }, {
    path: '/about/code-of-conduct',
    title: t('nav.aboutSub.codeOfConduct'),
    description: t('pages.about.sections.codeOfConduct.description'),
    icon: CheckCircle
  }, {
    path: '/about/melc',
    title: t('nav.aboutSub.modelElectoralLiteracyClub'),
    description: t('pages.about.sections.melc.description'),
    icon: BookOpen
  }, {
    path: '/about/institutions-pride',
    title: t('nav.aboutSub.institutionsPride'),
    description: t('pages.about.sections.institutionsPride.description'),
    icon: TrendingUp
  }, {
    path: '/about/vision-mission',
    title: t('nav.aboutSub.visionMissionCoreValues'),
    description: t('pages.about.sections.visionMission.description'),
    icon: Target
  }, {
    path: '/about/best-practices',
    title: t('nav.aboutSub.bestPractices'),
    description: t('pages.about.sections.bestPractices.description'),
    icon: Heart
  }, {
    path: '/about/feedback-forms',
    title: t('nav.aboutSub.feedback'),
    description: t('pages.about.sections.feedbackForms.description'),
    icon: Info
  }, {
    path: '/about/environment-policy',
    title: t('nav.aboutSub.environmentalPolicy'),
    description: t('pages.about.sections.environmentalPolicy.description'),
    icon: HomeIcon
  }, {
    path: '/about/mou',
    title: t('nav.aboutSub.mou'),
    description: t('pages.about.sections.mou.description'),
    icon: FileText
  }, {
    path: '/about/future-plans',
    title: t('nav.aboutSub.futurePlans'),
    description: t('pages.about.sections.futurePlans.description'),
    icon: Sparkles
  }, {
    path: '/about/milestones',
    title: t('nav.aboutSub.milestones'),
    description: t('pages.about.sections.milestones.description'),
    icon: Calendar
  }, {
    path: '/about/visitors-note',
    title: t('nav.aboutSub.visitorsNote'),
    description: t('pages.about.sections.visitorsNote.description'),
    icon: Users
  }, {
    path: '/about/management-administration',
    title: t('nav.aboutSub.managementAdministration'),
    description: t('pages.about.sections.managementAdministration.description'),
    icon: Building
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <>
      <Helmet>
        <title>{t('pages.about.title')}</title>
        <meta name="description" content={t('pages.about.metaDescription')} />
      </Helmet>

      {/* Animated Background */}
      <motion.div className="fixed inset-0 bg-gradient-to-br from-blue-50/20 via-white to-maroon-50/20 -z-10" animate={{
      background: ['linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.9), rgba(139, 69, 19, 0.1))', 'linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.1))', 'linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.9), rgba(139, 69, 19, 0.1))', 'linear-gradient(315deg, rgba(139, 69, 19, 0.1), rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.1))']
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }} />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => <motion.div key={i} className="fixed w-2 h-2 bg-primary/10 rounded-full -z-10" style={{
      left: `${15 + i * 15}%`,
      top: `${30 + i % 3 * 20}%`
    }} animate={{
      y: [0, -30, 0],
      opacity: [0.1, 0.3, 0.1],
      scale: [0.5, 1, 0.5]
    }} transition={{
      duration: 5 + i,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.4
    }} />)}

      <div className="min-h-screen bg-transparent py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Mission Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16 relative overflow-hidden rounded-3xl">
            <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-maroon-500/10 to-transparent opacity-0" animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
            
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl -z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-500/10 rounded-full blur-3xl -z-0" />
            
            <div className="relative z-10 bg-gradient-to-r from-primary/95 via-blue-700/90 to-maroon-600/90 px-8 py-16 md:py-28 text-center text-white shadow-2xl">
              {/* Badge Section */}
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center justify-center gap-2 mb-8">
                <motion.div animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                  <Sparkles className="w-8 h-8 text-yellow-300" />
                </motion.div>
                <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-yellow-200">{i18next.t("auto.est_1946_1x4mt0j")} | Excellence & Empowerment</p>
              </motion.div>

              {/* Main Heading with enhanced styling */}
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
                <span className="block text-white">{i18next.t("auto.educating_women_cb4kqh")}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 mt-3 drop-shadow-lg">Empowering Futures.</span>
              </motion.h1>

              {/* Divider */}
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-yellow-100 mx-auto mt-6 mb-8 rounded-full" />

              {/* Tagline */}
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium mb-6">
                A premier institution dedicated to fostering intellectual growth, leadership, and social responsibility among women across all disciplines.
              </motion.p>

              {/* Feature Pills with enhanced styling */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
                {[
                  { icon: BookOpen, text: 'Quality Education' },
                  { icon: Heart, text: 'Holistic Development' },
                  { icon: Star, text: 'Women Empowerment' }
                ].map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-full border-2 border-white/40 hover:bg-white/35 hover:border-yellow-300 transition-all shadow-lg"
                    >
                      <Icon className="w-5 h-5 text-yellow-300" />
                      <span className="font-semibold text-sm md:text-base">{pill.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/about/brief-profile">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-yellow-300 text-primary font-bold rounded-full hover:bg-yellow-200 transition-all shadow-lg flex items-center gap-2"
                  >
                    Learn More About Us
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/20 text-white font-bold rounded-full border-2 border-white hover:bg-white/30 transition-all backdrop-blur-sm flex items-center gap-2"
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Excellence Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-16 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-b from-white/98 to-slate-50/95 backdrop-blur border border-slate-200 shadow-2xl p-8 md:p-16 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-0" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon-500/5 rounded-full blur-3xl -z-0" />
              
              {/* Section Header */}
              <motion.div className="text-center mb-16 relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <motion.p 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }}
                  className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2"
                >
                  <Star className="w-5 h-5" />
                  Our Pillars
                  <Star className="w-5 h-5" />
                </motion.p>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">{i18next.t("auto.excellence_2ekw6r")}</h2>
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
                >
                  Experience the transformative power of education rooted in values, innovation, and inclusive excellence. Our commitment to your success defines our mission.
                </motion.p>
              </motion.div>

              {/* Three Pillars with Enhanced Design */}
              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10" variants={containerVariants} initial="hidden" animate="visible">
                {[
                  {
                    icon: BookOpen,
                    title: 'Academic Excellence',
                    desc: 'Rigorous curriculum designed by industry experts and dedicated faculty committed to your intellectual growth',
                    color: 'from-blue-500 to-blue-600'
                  }, 
                  {
                    icon: Heart,
                    title: 'Women Empowerment',
                    desc: 'Creating confident, capable leaders ready to challenge norms and shape tomorrow\'s world',
                    color: 'from-pink-500 to-rose-600'
                  }, 
                  {
                    icon: Award,
                    title: 'Holistic Growth',
                    desc: 'Beyond textbooks—developing character, critical thinking, and social responsibility for life success',
                    color: 'from-amber-500 to-orange-600'
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants} 
                      className="group relative rounded-2xl overflow-hidden transition-all duration-300" 
                      whileHover={{ y: -12, scale: 1.02 }}
                    >
                      {/* Card Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-white group-hover:to-slate-50 transition-all" />
                      <div className="absolute inset-0 border-2 border-slate-200 group-hover:border-primary/50 transition-all rounded-2xl" />
                      
                      {/* Content */}
                      <div className="relative p-8 h-full flex flex-col">
                        <motion.div 
                          animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }} 
                          transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }} 
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed flex-grow">{item.desc}</p>
                        <motion.div className="mt-6 pt-4 border-t border-slate-200 group-hover:border-primary/30 transition-all">
                          <motion.a 
                            href="#" 
                            whileHover={{ x: 4 }}
                            className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                          >
                            Learn more
                            <ArrowRight className="w-4 h-4" />
                          </motion.a>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Divider */}
              <motion.div 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 w-16 bg-gradient-to-r from-primary to-maroon-500 mx-auto mb-12 rounded-full" 
              />

              {/* Core Stats with Enhanced Design */}
              <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10" variants={containerVariants} initial="hidden" animate="visible">
                {[
                  {
                    number: '78+',
                    label: 'Years of Excellence',
                    icon: Award,
                    color: 'from-blue-500/10 to-blue-600/5 border-blue-200/50'
                  }, 
                  {
                    number: '5000+',
                    label: 'Empowered Women',
                    icon: Users,
                    color: 'from-pink-500/10 to-rose-600/5 border-pink-200/50'
                  }, 
                  {
                    number: '25+',
                    label: 'Academic Programs',
                    icon: BookOpen,
                    color: 'from-amber-500/10 to-orange-600/5 border-amber-200/50'
                  }, 
                  {
                    number: '95%',
                    label: 'Success Rate',
                    icon: TrendingUp,
                    color: 'from-green-500/10 to-emerald-600/5 border-green-200/50'
                  }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants} 
                      className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center border transition-all hover:shadow-xl`} 
                      whileHover={{ scale: 1.08, y: -4 }}
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }} 
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }} 
                        className="mb-4 flex justify-center"
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="text-3xl md:text-4xl font-black text-primary mb-2"
                      >
                        {stat.number}
                      </motion.p>
                      <p className="text-sm text-gray-700 font-semibold">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Sections Container */}
          <motion.div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20" initial={{
          opacity: 0,
          y: 50,
          scale: 0.95
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <motion.h2 className="text-3xl font-semibold text-primary mb-8 pb-4 border-b-2 border-primary" initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              {t('pages.about.exploreSectionsTitle')}
            </motion.h2>

            {/* Sections Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={containerVariants} initial="hidden" animate="visible">
              {aboutSections.map((section, sectionIndex) => {
              const Icon = section.icon;
              const isOpen = openSections.includes(sectionIndex);
              return <motion.div key={sectionIndex} variants={itemVariants} className="group">
                    <motion.button onClick={() => toggleSection(sectionIndex)} className={`w-full text-left p-5 rounded-xl transition-all duration-300 border-2 ${isOpen ? 'bg-gradient-to-r from-primary/10 to-maroon-500/10 border-primary' : 'bg-gray-50 border-gray-200 hover:border-primary/50'}`} whileHover={{
                  scale: 1.02,
                  y: -3
                }} whileTap={{
                  scale: 0.98
                }}>
                      <div className="flex items-start gap-3">
                        <motion.div animate={isOpen ? {
                      rotate: 360,
                      scale: 1.1
                    } : {
                      rotate: 0,
                      scale: 1
                    }} transition={{
                      duration: 0.4
                    }} className="mt-1">
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
                        <motion.div animate={isOpen ? {
                      rotate: 180
                    } : {
                      rotate: 0
                    }} transition={{
                      duration: 0.3
                    }}>
                          <ArrowRight className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
                        </motion.div>
                      </div>
                    </motion.button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isOpen && <motion.div initial={{
                    opacity: 0,
                    height: 0
                  }} animate={{
                    opacity: 1,
                    height: 'auto'
                  }} exit={{
                    opacity: 0,
                    height: 0
                  }} transition={{
                    duration: 0.3
                  }} className="overflow-hidden">
                          <motion.div initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      duration: 0.3,
                      delay: 0.1
                    }} className="mt-4 p-4 bg-white rounded-lg border-l-4 border-primary">
                            <p className="text-gray-700 mb-4">
                              {section.description}
                            </p>
                            <Link to={section.path} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group">
                              {t('pages.about.learnMore')}
                              <motion.span animate={{
                          x: [0, 4, 0]
                        }} transition={{
                          duration: 1.5,
                          repeat: Infinity
                        }}>
                                <ArrowRight className="w-4 h-4" />
                              </motion.span>
                            </Link>
                          </motion.div>
                        </motion.div>}
                    </AnimatePresence>
                  </motion.div>;
            })}
            </motion.div>
          </motion.div>

          {/* Commitment Section */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="mt-16 bg-gradient-to-r from-primary/5 to-maroon-500/5 rounded-2xl shadow-xl p-8 border-2 border-primary/20">
            <motion.div className="flex items-start gap-6" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }}>
              <motion.div animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }} className="flex-shrink-0">
                <Heart className="w-12 h-12 text-maroon-500" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{`
                  ${i18next.t("auto.our_commitment_to_excellence_1c1kfab")}
                `}</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{`
                  ${i18next.t("auto.magadh_mahila_college_stands_as_a_beacon_9czek")}
                `}</p>

                {/* Features List */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" variants={containerVariants} initial="hidden" animate="visible">
                  {['Quality Education', 'Holistic Development', 'Women Empowerment', 'Academic Excellence', 'Inclusive Environment', 'Future Ready Skills'].map((feature, idx) => <motion.div key={idx} variants={itemVariants} className="flex items-center gap-3">
                      <motion.div animate={{
                    scale: [1, 1.2, 1]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.1
                  }}>
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>)}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>;
};
export default About;