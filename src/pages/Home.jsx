import i18next from "i18next";
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Phone, Mail, MapPin, Users, Shield, Heart, Award, BookOpen, GraduationCap, Star, CheckCircle, Calendar, FileText, Home as HomeIcon, Sparkles, Target, Lightbulb, Zap, Trophy, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroSection from '@/components/home/HeroSection';
import QuickHighlights from '@/components/home/QuickHighlights';
import FeaturesSection from '@/components/home/FeaturesSection';
import NoticeAndEvents from '@/components/home/NoticeAndEvents';
import { r2Url } from '@/lib/r2Assets';
const Home = () => {
  const {
    t
  } = useTranslation();
  const distinguishedVisitors = [{
    name: i18next.t("auto.shri_abhishek_bachchan_ziuxrk"),
    image: 'AbhishekBachhan.jpg'
  }, {
    name: i18next.t("auto.smt_dr_sharda_sinha_13bfvyh"),
    image: 'Dr.ShardaSinha.jpg'
  }, {
    name: i18next.t("auto.shri_gupteshwar_pandey_ef7wsg"),
    image: 'G.-P-andry.jpg'
  }, {
    name: i18next.t("auto.shri_gurmeet_choudhary_8pt091"),
    image: 'Gurmeet-choudhary.jpg'
  }, {
    name: i18next.t("auto.smt_mridula_sinha_fj34mu"),
    image: 'Mridula-sinha.jpg'
  }, {
    name: i18next.t("auto.shri_nitish_kumar_1e1pmui"),
    image: 'Nitish-Kumar.jpg'
  }, {
    name: i18next.t("auto.ms_ratan_rajput_l9o54l"),
    image: 'Ratan-Rajput.jpg'
  }, {
    name: i18next.t("auto.shri_k_g_balakrishanan_q27an6"),
    image: 'ShriK.G-Balakrishanan.jpg'
  }, {
    name: i18next.t("auto.shri_shatrughan_sinha_13jzv7j"),
    image: 'ShriShatrughanSinha.jpg'
  }, {
    name: i18next.t("auto.shri_satya_pal_malik_u5k1je"),
    image: 'Sri-Satya-Pal-Malik.jpg'
  }];
  const visitorCards = [...distinguishedVisitors, ...distinguishedVisitors];
  return <>
      <Helmet>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.metaDescription')} />
      </Helmet>

      <div className="pt-0 bg-white text-gray-900 antialiased">

        {/* HERO */}
        <HeroSection />

        {/* WELCOME MESSAGE */}
        <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
          {/* Animated Background */}
          <motion.div className="absolute inset-0 opacity-10" animate={{
          background: ['radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)', 'radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.3) 0%, transparent 50%)', 'radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)', 'radial-gradient(circle at 60% 30%, rgba(139, 69, 19, 0.3) 0%, transparent 50%)']
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />

          {/* Floating Icons */}
          {[{
          Icon: Trophy,
          color: 'text-yellow-500',
          delay: 0
        }, {
          Icon: Globe,
          color: 'text-blue-500',
          delay: 1
        }, {
          Icon: Rocket,
          color: 'text-red-500',
          delay: 2
        }, {
          Icon: Zap,
          color: 'text-purple-500',
          delay: 3
        }].map(({
          Icon,
          color,
          delay
        }, i) => <motion.div key={i} className={`absolute ${color} opacity-20`} style={{
          left: `${15 + i * 20}%`,
          top: `${20 + i % 2 * 40}%`
        }} animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
          scale: [0.8, 1.2, 0.8]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay
        }}>
              <Icon size={40} />
            </motion.div>)}

          <div className="px-4 relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="text-center mb-12">
              <motion.h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 flex items-center justify-center gap-3" whileHover={{
              scale: 1.02
            }} transition={{
              type: 'spring',
              stiffness: 300
            }}>
                <motion.div animate={{
                rotate: [0, 10, -10, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
                  <HomeIcon className="w-8 h-8" />
                </motion.div>
                {t('home.welcome.title')}
              </motion.h2>
              <motion.p className="text-gray-600 dark:text-gray-300 text-lg max-w-4xl mx-auto" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 1,
              delay: 0.3
            }}>
                {t('home.welcome.description')}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.a
                href="https://governor.bih.nic.in/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                opacity: 0,
                x: -30
              }} whileInView={{
                opacity: 1,
                x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 relative overflow-hidden" whileHover={{
              scale: 1.02
            }}>
                <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-maroon-500" initial={{
                scaleX: 0
              }} whileInView={{
                scaleX: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 1,
                delay: 0.5
              }} />
                <motion.div className="min-h-[200px] flex flex-col items-center justify-center" initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }}>
                  <img src="https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/images/Lt%20Gen%20Shri%20Syed%20Ata%20Hasnain%20(Retd.).jpeg" alt="Hon'ble Lt Gen Shri Syed Ata Hasnain (Retd.)" loading="lazy" className="w-32 h-32 rounded-full mx-auto mb-6 object-contain shadow-lg" />
                  <div className="text-center space-y-1">
                    <motion.h3 className="text-lg font-semibold text-primary dark:text-white leading-tight" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                    
                    </motion.h3>
                    <motion.p className="text-xl font-bold text-primary dark:text-white leading-snug" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                      Lt Gen Shri Syed Ata Hasnain (Retd.)
                    </motion.p>
                    <motion.p className="text-xl font-bold text-primary dark:text-white leading-tight" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                       Hon'ble Chancellor
                    </motion.p>
                  </div>
                </motion.div>
                <div className="space-y-3">
                </div>

              </motion.a>

              <motion.a
                href="https://pup.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 relative overflow-hidden" whileHover={{
              scale: 1.02
            }}>
                <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maroon-500 to-blue-500" initial={{
                scaleX: 0
              }} whileInView={{
                scaleX: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 1,
                delay: 0.5
              }} />
                <motion.div className="min-h-[200px] flex flex-col items-center justify-center" initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }}>
                  <motion.img loading="lazy" src={r2Url('images/vc_profile.jpg')} alt={i18next.t("auto.officiating_vice_chancellor_patna_university_1nsffvc")} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg" whileHover={{
                  scale: 1.05
                }} transition={{
                  type: 'spring',
                  stiffness: 300
                }} />
                  <div className="text-center space-y-1">
                    <motion.h3 className="text-lg font-semibold text-primary dark:text-white leading-tight" whileHover={{
                  x: 5
                }} transition={{
                  type: 'spring',
                  stiffness: 400
                }}>{`
                    ${i18next.t("auto.prof_namita_singh_1wa186d")}
                  `}</motion.h3>
                    <motion.p className="text-xl font-bold text-primary dark:text-white leading-tight" whileHover={{
                  x: 5
                }} transition={{
                  type: 'spring',
                  stiffness: 400
                }}>{`
                    ${i18next.t("auto.officiating_vice_chancellor_patna_university_1nsffvc")}
                  `}</motion.p>
                  </div>
                </motion.div>
                <div className="space-y-3">
                </div>

              </motion.a>

              {/* SEPARATE CARD: Principal */}
              <Link to="/about/principal" className="block">
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.1
            }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 relative overflow-hidden" whileHover={{
              scale: 1.02
            }}>
                <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-maroon-500" initial={{
                scaleX: 0
              }} whileInView={{
                scaleX: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 1,
                delay: 0.5
              }} />
                <motion.div className="min-h-[200px] flex flex-col items-center justify-center" initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }}>
                  <motion.img loading="lazy" src={r2Url('images/principal.jpg')} alt={i18next.t("auto.principal_11qfhbr")} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg" whileHover={{
                  scale: 1.05
                }} transition={{
                  type: 'spring',
                  stiffness: 300
                }} />
                  <div className="text-center space-y-1">
                    <motion.h3 className="text-lg font-semibold text-primary dark:text-white leading-tight" whileHover={{
                  x: 5
                }} transition={{
                  type: 'spring',
                  stiffness: 400
                }}>{`
                    ${i18next.t("auto.prof_dr_nagendra_prasad_verma_gf7mxh")}
                  `}</motion.h3>
                    <motion.p className="text-xl font-bold text-primary dark:text-white leading-tight" whileHover={{
                  x: 5
                }} transition={{
                  type: 'spring',
                  stiffness: 400
                }}>{`
                    ${i18next.t("auto.principal_magadh_mahila_college_17k5nw6")}
                  `}</motion.p>
                  </div>
                </motion.div>
                <div className="space-y-3">
                </div>

              </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* ANTI RAGGING SECTION */}
        <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
          <div className="px-4 text-center relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="mb-8">
              <p className="text-gray-600 max-w-2xl mx-auto">{`
                ${i18next.t("auto.important_anti_ragging_resources_and_information_for_68wd4q")}
              `}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <motion.a href="https://antiragging.in/affidavit_registration_disclaimer.html" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 block" whileHover={{
              scale: 1.02,
              y: -5
            }} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">{`
                    ${i18next.t("auto.student_s_undertaking_1c54k8e")}
                  `}</h3>
                  <p className="text-gray-600 text-sm">{`
                    ${i18next.t("auto.anti_ragging_affidavit_registration_uqdjry")}
                  `}</p>
                </div>
              </motion.a>

              <motion.a href="/anti-ragging" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 block" whileHover={{
              scale: 1.02,
              y: -5
            }} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <div className="text-center">
                  <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">{`
                    ${i18next.t("auto.anti_ragging_committee_2025_26_1jfe37x")}
                  `}</h3>
                  <p className="text-gray-600 text-sm">{`
                    ${i18next.t("auto.committee_details_and_contact_information_pzo3fp")}
                  `}</p>
                </div>
              </motion.a>

              <motion.a href="/sexual-harassment" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 block" whileHover={{
              scale: 1.02,
              y: -5
            }} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">{`
                    ${i18next.t("auto.anti_sexual_harassment_committee_2025_26_19dieu8")}
                  `}</h3>
                  <p className="text-gray-600 text-sm">{`
                    ${i18next.t("auto.committee_details_prevention_policy_and_support_contacts_kco8xr")}
                  `}</p>
                </div>
              </motion.a>

              <motion.a href="/grievance" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 block" whileHover={{
              scale: 1.02,
              y: -5
            }} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
                <div className="text-center">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">{`
                    ${i18next.t("auto.grievance_redressal_cell_2025_26_m5tl4w")}
                  `}</h3>
                  <p className="text-gray-600 text-sm">{`
                    ${i18next.t("auto.student_and_staff_grievance_redressal_details_m6c1yk")}
                  `}</p>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* QUICK HIGHLIGHTS */}
        <section className="py-0 bg-gray-50">
          <div className="px-4">
            <QuickHighlights />
          </div>
        </section>

        {/* NOTICE & EVENTS (SCROLLING) */}
        <section className="py-0 bg-white relative">
          <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-maroon-50/20" animate={{
          background: ['linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.8), rgba(139, 69, 19, 0.1))', 'linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(255, 255, 255, 0.8), rgba(59, 130, 246, 0.1))', 'linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.8), rgba(139, 69, 19, 0.1))', 'linear-gradient(315deg, rgba(139, 69, 19, 0.1), rgba(255, 255, 255, 0.8), rgba(59, 130, 246, 0.1))']
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear'
        }} />
          <div className="px-4 relative z-10">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <NoticeAndEvents />
            </motion.div>
          </div>
        </section>

        {/* VISITORS SECTION */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-white to-maroon-50/10" animate={{
          background: ['linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(255, 255, 255, 0.9), rgba(139, 69, 19, 0.05))', 'linear-gradient(135deg, rgba(139, 69, 19, 0.05), rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.05))', 'linear-gradient(225deg, rgba(59, 130, 246, 0.05), rgba(255, 255, 255, 0.9), rgba(139, 69, 19, 0.05))', 'linear-gradient(315deg, rgba(139, 69, 19, 0.05), rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.05))']
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }} />
          <div className="px-4 relative z-10">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-center mb-8">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3" whileHover={{
              scale: 1.02
            }} transition={{
              type: 'spring',
              stiffness: 300
            }}>
                <motion.div animate={{
                rotate: [0, 5, -5, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
                  <Users className="w-8 h-8" />
                </motion.div>
                {t('home.visitors.title', 'Distinguished Visitors')}
              </motion.h2>
              <motion.p className="text-gray-600 text-lg max-w-2xl mx-auto" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 1,
              delay: 0.3
            }}>
                {t('home.visitors.subtitle', 'Honored guests who have graced our institution')}
              </motion.p>
            </motion.div>

            <div className="relative overflow-hidden">
              <motion.div className="flex w-max gap-6 py-2" animate={{
              x: ['0%', '-50%']
            }} transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 38,
                ease: 'linear'
              }
            }}>
                {visitorCards.map((visitor, i) => <article key={`${visitor.image}-${i}`} className="group w-64 sm:w-72 flex-shrink-0 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 overflow-hidden">
                    <motion.div className="relative h-52 sm:h-56 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100" whileHover={{
                  scale: 1.02
                }} transition={{
                  duration: 0.25
                }}>
                      <img src={r2Url(`images/visitor-notes/${visitor.image}`)} alt={visitor.name} loading="lazy" className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105" onError={e => {
                    e.target.src = r2Url('images/placeholder.jpg');
                  }} />
                    </motion.div>
                    <div className="p-4 text-center">
                      <h3 className="text-base sm:text-lg font-semibold text-primary leading-tight">
                        {visitor.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">{`
                        ${i18next.t("auto.distinguished_visitor_11vl9d1")}
                      `}</p>
                    </div>
                  </article>)}
              </motion.div>
            </div>
          </div>
        </section>

        {/* WOMEN EMPOWERMENT SECTION */}
        <section className="relative py-12 md:py-16 bg-white overflow-hidden border-t border-gray-100">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 flex items-center justify-center gap-3">
              <Users className="w-8 h-8" />
              {t('home.hero.title').split('. ')[0]}. <span className="text-primary">{t('home.hero.title').split('. ')[1]}</span>
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-12 font-sans">
              {t('home.hero.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[{
              title: t('home.features.safeCampus.title'),
              desc: t('home.features.safeCampus.desc')
            }, {
              title: t('home.features.leadership.title'),
              desc: t('home.features.leadership.desc')
            }, {
              title: t('home.features.careerFocused.title'),
              desc: t('home.features.careerFocused.desc')
            }].map((item, i) => <motion.div key={i} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: i * 0.2
            }} viewport={{
              once: true
            }} whileHover={{
              scale: 1.02
            }} className="p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-transform transform hover:-translate-y-2 bg-white">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-sans">{item.desc}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </section>



        {/* FEATURES */}
        <section className="py-0 bg-white relative overflow-hidden">
          {/* Animated Background Pattern */}
          <motion.div className="absolute inset-0 opacity-5" animate={{
          backgroundPosition: ['0% 0%', '50% 50%', '100% 100%', '0% 0%']
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }} style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.2) 0%, transparent 50%)',
          backgroundSize: '200% 200%'
        }} />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-primary/20 rounded-full" style={{
          left: `${20 + i * 15}%`,
          top: `${10 + i % 2 * 60}%`
        }} animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [0.5, 1.2, 0.5]
        }} transition={{
          duration: 4 + i * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.3
        }} />)}

          <div className="px-4 relative z-10">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <FeaturesSection />
            </motion.div>
          </div>
        </section>

        {/* WELCOME MESSAGE (moved above) */}

        {/* ANTI RAGGING SECTION (moved above) */}

        {/* DOWNLOAD HANDBOOK */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-100 relative overflow-hidden">
          {/* Animated Background */}
          <motion.div className="absolute inset-0 opacity-5" animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }} transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }} style={{
          backgroundImage: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 69, 19, 0.1), rgba(59, 130, 246, 0.1))',
          backgroundSize: '400% 400%'
        }} />

          {/* Floating Download Icons */}
          {[...Array(4)].map((_, i) => <motion.div key={i} className="absolute opacity-10" style={{
          left: `${20 + i * 20}%`,
          top: `${30 + i % 2 * 30}%`
        }} animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
          scale: [0.8, 1.1, 0.8]
        }} transition={{
          duration: 5 + i,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.5
        }}>
              <Download className="w-8 h-8 text-primary" />
            </motion.div>)}

          <div className="px-4 text-center relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 30,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="bg-white border border-gray-100 rounded-xl p-6 inline-block shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 relative overflow-hidden" whileHover={{
            scale: 1.05
          }}>
              {/* Animated Border */}
              <motion.div className="absolute inset-0 rounded-xl" style={{
              background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 69, 19, 0.1), rgba(59, 130, 246, 0.1))',
              backgroundSize: '400% 400%'
            }} animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }} transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }} />

              <motion.h4 className="text-xl font-serif font-bold text-primary mb-2 relative z-10" whileHover={{
              scale: 1.05
            }} transition={{
              type: 'spring',
              stiffness: 400
            }}>
                {t('home.handbook.title')}
              </motion.h4>
              <motion.p className="text-gray-700 mb-4 font-sans relative z-10" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}>
                {t('home.handbook.subtitle')}
              </motion.p>
              <motion.a href={r2Url('documents/Handbook-2025-26 (MMC, Patna).pdf')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors relative z-10" whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }} whileTap={{
              scale: 0.95
            }} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.5
            }}>
                <motion.div animate={{
                x: [0, 3, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }}>
                  <Download className="w-5 h-5" />
                </motion.div>
                <span className="font-sans">{t('home.handbook.download')}</span>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* CLOSING MESSAGE */}
        <section className="py-12 md:py-16 bg-navbar text-navbar-foreground text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navbar-foreground mb-6">
              {t('home.closing.title')}
            </h2>
            <p className="text-navbar-foreground/80 text-lg">
              {t('home.closing.message')}
            </p>
          </motion.div>
        </section>

      </div>
    </>;
};
export default Home;
