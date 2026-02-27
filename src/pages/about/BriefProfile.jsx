import i18next from "i18next";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBilingual } from '../../contexts/BilingualContext';
import { motion, useAnimation } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';
const BriefProfile = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const tEn = i18n.getFixedT('en');
  const tHi = i18n.getFixedT('hi');
  const {
    isBilingual
  } = useBilingual();
  const [visibleSections, setVisibleSections] = useState(new Set());
  const controls = useAnimation();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.dataset.section;
          setVisibleSections(prev => new Set([...prev, sectionId]));
        }
      });
    }, {
      threshold: 0.2
    });
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const textVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  };
  return <motion.div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-maroon-50 py-12" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="bg-white rounded-xl shadow-xl p-8 md:p-12" initial={{
        y: 50,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }}>
          {/* Header */}
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: -30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <motion.h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" whileHover={{
            scale: 1.02
          }} transition={{
            type: "spring",
            stiffness: 300
          }}>
              {t('pages.about.sections.briefProfile.title')}
            </motion.h1>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-maroon-500 mx-auto rounded-full" initial={{
            width: 0
          }} animate={{
            width: 96
          }} transition={{
            duration: 1,
            delay: 0.5
          }} />
          </motion.div>

          {/* College Image */}
          <motion.div data-section="image" className="animate-section mb-12" initial={{
          opacity: 0,
          scale: 0.95
        }} animate={visibleSections.has('image') ? {
          opacity: 1,
          scale: 1
        } : {
          opacity: 0,
          scale: 0.95
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <motion.div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-100" whileHover={{
            scale: 1.02
          }} transition={{
            type: "spring",
            stiffness: 200
          }}>
              <img src={r2Url('ChatGPT Image Dec 27, 2025, 09_25_51 PM.png')} alt={i18next.t("auto.college_brief_profile_1u76qjj")} className="w-full h-auto max-h-96 object-cover" />
              <motion.div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" initial={{
              opacity: 0,
              y: 20
            }} animate={visibleSections.has('image') ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              delay: 0.8,
              duration: 0.6
            }}>
                <p className="text-white text-lg font-semibold">{i18next.t("auto.magadh_mahila_college_t72y6g")}</p>
                <p className="text-white/80 text-sm">{i18next.t("auto.excellence_in_education_h148e6")}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Sections */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {/* Introduction */}
            <motion.div data-section="intro" className="animate-section" variants={itemVariants}>
              <motion.h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" whileHover={{
              x: 10
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>{`
                ${i18next.t("auto.about_our_institution_tcy8yc")}
              `}</motion.h2>
              <motion.div variants={textVariants} className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">{`
                  ${i18next.t("auto.magadh_mahila_college_a_pioneer_institution_of_6j7fal")}
                `}</p>
              </motion.div>
            </motion.div>

            {/* Academic Programs */}
            <motion.div data-section="academics" className="animate-section" variants={itemVariants}>
              <motion.h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" whileHover={{
              x: 10
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <span className="w-2 h-8 bg-maroon-500 rounded-full mr-3"></span>{`
                ${i18next.t("auto.academic_excellence_10b00vq")}
              `}</motion.h2>
              <motion.div variants={textVariants} className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">{`
                  ${i18next.t("auto.college_offers_both_under_graduate_and_post_1dypda9")}
                `}</p>
              </motion.div>
            </motion.div>

            {/* Campus */}
            <motion.div data-section="campus" className="animate-section" variants={itemVariants}>
              <motion.h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" whileHover={{
              x: 10
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>{`
                ${i18next.t("auto.our_beautiful_campus_q28oat")}
              `}</motion.h2>
              <motion.div variants={textVariants} className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">{`
                  ${i18next.t("auto.the_college_is_situated_besides_the_holy_1negbuk")}
                `}</p>
              </motion.div>
            </motion.div>

            {/* Quality Assurance */}
            <motion.div data-section="quality" className="animate-section" variants={itemVariants}>
              <motion.h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" whileHover={{
              x: 10
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>{`
                ${i18next.t("auto.quality_activities_wkgekl")}
              `}</motion.h2>
              <motion.div variants={textVariants} className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">{`
                  ${i18next.t("auto.college_has_an_active_internal_quality_assurance_ekxysl")}
                `}</p>
              </motion.div>
            </motion.div>

            {/* Sustainability */}
            <motion.div data-section="sustainability" className="animate-section" variants={itemVariants}>
              <motion.h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" whileHover={{
              x: 10
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <span className="w-2 h-8 bg-teal-500 rounded-full mr-3"></span>{`
                ${i18next.t("auto.sustainable_development_kak14r")}
              `}</motion.h2>
              <motion.div variants={textVariants} className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">{`
                  ${i18next.t("auto.the_college_is_strongly_committed_to_sustainable_1d5end2")}
                `}</p>
                <p className="text-gray-700 leading-relaxed mt-4">{`
                  ${i18next.t("auto.the_college_has_developed_a_solid_liquid_oxsb7c")}
                `}</p>
              </motion.div>
            </motion.div>

            {/* Student Development */}
            <motion.div data-section="development" className="animate-section" variants={itemVariants}>
              <motion.h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" whileHover={{
              x: 10
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                <span className="w-2 h-8 bg-pink-500 rounded-full mr-3"></span>{`
                ${i18next.t("auto.holistic_development_35hhp5")}
              `}</motion.h2>
              <motion.div variants={textVariants} className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">{`
                  ${i18next.t("auto.the_activities_outside_of_the_classroom_give_afi5xs")}
                `}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 2,
          duration: 0.8
        }} className="mt-16 text-center">
            <motion.div className="bg-gradient-to-r from-blue-500 to-maroon-500 rounded-xl p-8 text-white" whileHover={{
            scale: 1.02
          }} transition={{
            type: "spring",
            stiffness: 200
          }}>
              <h3 className="text-2xl font-bold mb-4">{i18next.t("auto.join_our_legacy_vkum9m")}</h3>
              <p className="text-lg opacity-90 mb-6">{`
                ${i18next.t("auto.be_part_of_magadh_mahila_college_s_1lsqyf8")}
              `}</p>
              <motion.button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>{`
                ${i18next.t("auto.explore_admissions_6hs76u")}
              `}</motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};
export default BriefProfile;
