import i18next from "i18next";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { r2Url } from '@/lib/r2Assets';
const InstitutionsPride = () => {
  const {
    t
  } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const prideImages = [{
    src: '9001-15.jpg',
    title: i18next.t("auto.iso_9001_2015_1ik9ric"),
    category: 'Quality Management'
  }, {
    src: '14001-15.jpg',
    title: i18next.t("auto.iso_14001_2015_1mpr9ug"),
    category: 'Environmental Management'
  }, {
    src: '21001-18-1.jpg',
    title: i18next.t("auto.iso_21001_2018_xk4r5f"),
    category: 'Educational Organizations'
  }, {
    src: '45001-18.jpg',
    title: i18next.t("auto.iso_45001_2018_1cnn3n5"),
    category: 'Occupational Health & Safety'
  }, {
    src: 'cert_01.jpg',
    title: i18next.t("auto.naac_accreditation_1rd5nbu"),
    category: 'Academic Excellence'
  }, {
    src: 'cert_1.jpg',
    title: i18next.t("auto.university_affiliation_1g9are9"),
    category: 'Recognition'
  }, {
    src: 'iso-1000-2018-1-scaled.jpg',
    title: i18next.t("auto.iso_standards_99ai1k"),
    category: 'Quality Assurance'
  }, {
    src: 'iso-9001-2012-scaled.jpg',
    title: i18next.t("auto.iso_9001_2012_1ik9rib"),
    category: 'Quality Management'
  }, {
    src: 'mmc_naac2013.jpg',
    title: i18next.t("auto.naac_2013_hl8u20"),
    category: 'Accreditation'
  }, {
    src: 'mmc_naac2020.jpg',
    title: i18next.t("auto.naac_2020_hl8txk"),
    category: 'Accreditation'
  }, {
    src: 'mmc-iso1.jpg',
    title: i18next.t("auto.iso_certification_tkqoi0"),
    category: 'Standards'
  }, {
    src: 'mmc-iso2.jpg',
    title: i18next.t("auto.quality_standards_1iea5ds"),
    category: 'Certification'
  }, {
    src: 'mmc-iso3.jpg',
    title: i18next.t("auto.management_systems_w0rj6o"),
    category: 'Quality'
  }, {
    src: 'mmc-red-ribbon.jpg',
    title: i18next.t("auto.red_ribbon_award_1e0i2r1"),
    category: 'Recognition'
  }, {
    src: 'mmc-vatavaran.jpg',
    title: i18next.t("auto.environmental_excellence_d9wbm3"),
    category: 'Sustainability'
  }, {
    src: 'mmc-yuva-sanchar.jpg',
    title: i18next.t("auto.youth_communication_e8tliy"),
    category: 'Achievement'
  }, {
    src: 'mou-environment_policy.jpg',
    title: i18next.t("auto.environmental_policy_mou_no36p6"),
    category: 'Partnership'
  }, {
    src: 'mou-fire (1).jpg',
    title: i18next.t("auto.fire_safety_mou_19u5sl2"),
    category: 'Safety Partnership'
  }, {
    src: 'mou-fire.jpg',
    title: i18next.t("auto.fire_safety_agreement_1s7hoh3"),
    category: 'Collaboration'
  }, {
    src: 'SES-REC-INST-CERTFICATE.jpg',
    title: i18next.t("auto.ses_rec_certificate_2xzdgh"),
    category: 'Social Entrepreneurship'
  }, {
    src: 'WhatsApp-Image-2021-02-11-at-3.04.42-PM.jpeg',
    title: i18next.t("auto.special_recognition_1ijgqn7"),
    category: 'Achievement'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    }
  };
  const handleImageLoad = index => {
    setLoadedImages(prev => new Set([...prev, index]));
  };
  const categories = [...new Set(prideImages.map(img => img.category))];
  return <>
      <Helmet>
        <title>{i18next.t("auto.institution_s_pride_certificates_awards_magadh_mahila_1ucvmn5")}</title>
        <meta name="description" content="Explore Magadh Mahila College's prestigious certifications, awards, and recognitions including ISO standards, NAAC accreditations, and partnerships." />
      </Helmet>

      <motion.div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.8
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
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
            <motion.div className="inline-block p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('nav.aboutSub.institutionsPride')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{`
              ${i18next.t("auto.celebrating_excellence_achievements_and_partnerships_that_define_1g79f3c")}
            `}</p>
          </motion.div>

          {/* Content Section */}
          <motion.div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8" variants={containerVariants} initial="hidden" animate="visible">
            <div className="p-8 md:p-12">
              <motion.div className="prose prose-lg prose-gray max-w-none mb-12" variants={itemVariants}>
                <div className="text-gray-700 leading-relaxed text-justify">
                  {t('nav.aboutSub.instituteDistinctiveness.content')}
                </div>
              </motion.div>

              {/* Statistics Section */}
              <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12" variants={itemVariants}>
                {[{
                number: '21+',
                label: i18next.t("auto.certifications_1onh70u")
              }, {
                number: '15+',
                label: i18next.t("auto.iso_standards_99ai1k")
              }, {
                number: '10+',
                label: i18next.t("auto.accreditations_hwzz1g")
              }, {
                number: '5+',
                label: i18next.t("auto.partnerships_1947a62")
              }].map((stat, index) => <motion.div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-100" whileHover={{
                scale: 1.05,
                y: -5
              }} transition={{
                type: "spring",
                stiffness: 300
              }}>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>)}
              </motion.div>

              {/* Certificates Section */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <h2 className="text-3xl font-bold text-gray-900">{i18next.t("auto.certificates_awards_cqg7jr")}</h2>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                  </div>
                </div>

                {/* Category Filter */}
                <motion.div className="flex flex-wrap justify-center gap-3 mb-8" variants={itemVariants}>
                  {categories.map((category, index) => <motion.button key={category} className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm font-medium transition-colors duration-200" whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }}>
                      {category}
                    </motion.button>)}
                </motion.div>

                {/* Image Grid */}
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" variants={containerVariants} initial="hidden" animate="visible">
                  {prideImages.map((image, index) => <motion.div key={index} className="group relative" variants={imageVariants} whileHover={{
                  y: -8
                }} transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}>
                      <div className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300">
                        {/* Loading Skeleton */}
                        {!loadedImages.has(index) && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>}

                        <motion.img src={r2Url(`images/about/institutions-pride/${image.src}`)} alt={image.title} className="w-full h-auto max-h-48 object-contain cursor-pointer" onClick={() => setSelectedImage(image)} onLoad={() => handleImageLoad(index)} onError={e => {
                      console.error('Image failed to load:', image.src);
                      e.target.style.display = 'none';
                    }} whileHover={{
                      scale: 1.05
                    }} transition={{
                      duration: 0.3
                    }} />

                        {/* Overlay */}
                        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={{
                      opacity: 0
                    }} whileHover={{
                      opacity: 1
                    }}>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                            <p className="text-white/80 text-xs">{image.category}</p>
                          </div>
                        </motion.div>

                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>)}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievement Timeline */}
          <motion.div className="bg-white rounded-2xl shadow-xl p-8 md:p-12" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">{i18next.t("auto.milestone_achievements_7jhpgf")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              year: '2013',
              achievement: 'NAAC Accreditation (Grade A)',
              icon: '🏆'
            }, {
              year: '2015',
              achievement: 'ISO 9001:2015 Certification',
              icon: '⭐'
            }, {
              year: '2018',
              achievement: 'ISO 14001:2015 & 45001:2018',
              icon: '🌱'
            }, {
              year: '2020',
              achievement: 'NAAC Re-accreditation (Grade B+)',
              icon: '🎓'
            }, {
              year: '2021',
              achievement: 'ISO 21001:2018 Certification',
              icon: '📚'
            }, {
              year: '2021',
              achievement: 'SES REC Certificate',
              icon: '🤝'
            }].map((milestone, index) => <motion.div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-100" whileHover={{
              scale: 1.02,
              x: 5
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                  <div className="text-2xl">{milestone.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{milestone.year}</div>
                    <div className="text-sm text-gray-600">{milestone.achievement}</div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>

        {/* Image Modal */}
        {selectedImage && <motion.div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setSelectedImage(null)}>
            <motion.div className="relative max-w-[95vw] max-h-[95vh] overflow-auto bg-white rounded-lg shadow-2xl" initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }} onClick={e => e.stopPropagation()}>
              <img src={r2Url(`images/about/institutions-pride/${selectedImage.src}`)} alt={selectedImage.title} className="w-auto h-auto max-w-full max-h-full rounded-lg" style={{
            display: 'block'
          }} />
              <button className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors" onClick={() => setSelectedImage(null)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 rounded-lg p-3">
                <h3 className="font-semibold">{selectedImage.title}</h3>
                <p className="text-sm opacity-90">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>}
      </motion.div>
    </>;
};
export default InstitutionsPride;
