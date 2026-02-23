import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBilingual } from '../../contexts/BilingualContext';
import { motion, useAnimation } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';

const BriefProfile = () => {
  const { t, i18n } = useTranslation();
  const tEn = i18n.getFixedT('en');
  const tHi = i18n.getFixedT('hi');
  const { isBilingual } = useBilingual();
  const [visibleSections, setVisibleSections] = useState(new Set());
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.dataset.section;
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-maroon-50 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-xl shadow-xl p-8 md:p-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t('pages.about.sections.briefProfile.title')}
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-maroon-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* College Image */}
          <motion.div
            data-section="image"
            className="animate-section mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={visibleSections.has('image') ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={r2Url('ChatGPT Image Dec 27, 2025, 09_25_51 PM.png')}
                alt="College Brief Profile"
                className="w-full h-auto max-h-96 object-cover"
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections.has('image') ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <p className="text-white text-lg font-semibold">Magadh Mahila College</p>
                <p className="text-white/80 text-sm">Excellence in Education</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Introduction */}
            <motion.div
              data-section="intro"
              className="animate-section"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                About Our Institution
              </motion.h2>
              <motion.div
                variants={textVariants}
                className="prose prose-gray max-w-none"
              >
                <p className="text-gray-700 leading-relaxed text-lg">
                  Magadh Mahila College, a pioneer institution of higher education for young women in Bihar was established in 1946. Prof. (Dr.) Ramola Nandi was the founder Principal of the College. A constituent unit of Patna University, possessing a permanent affiliation under section 2 (f) and 12 (B) of UGC Act-1956 and reaccredited with B+ grade (2.54 CGPA) by NAAC in January 2019, it is imparting education to more than 3500 students in various disciplines.
                </p>
              </motion.div>
            </motion.div>

            {/* Academic Programs */}
            <motion.div
              data-section="academics"
              className="animate-section"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-2 h-8 bg-maroon-500 rounded-full mr-3"></span>
                Academic Excellence
              </motion.h2>
              <motion.div
                variants={textVariants}
                className="prose prose-gray max-w-none"
              >
                <p className="text-gray-700 leading-relaxed">
                  College offers both Under-Graduate and Post- Graduate Programmes. Choice Based Credit System (CBCS) has been introduced for Under-Graduate students from the academic session 2022-25. In Post-Graduation, CBCS has been introduced from the academic session 2018- 2020. New batch of NEP based new curriculum programs of four years in UG started from 2023 (session2023-27).
                </p>
              </motion.div>
            </motion.div>

            {/* Campus */}
            <motion.div
              data-section="campus"
              className="animate-section"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                Our Beautiful Campus
              </motion.h2>
              <motion.div
                variants={textVariants}
                className="prose prose-gray max-w-none"
              >
                <p className="text-gray-700 leading-relaxed">
                  The College is situated besides the holy river Ganga. The college campus is lush green and spread over an area of 09 acres of land in the heart of Patna, Bihar. It has 9144 Sqm. of built-up area with academic blocks, smart class rooms, laboratories, faculty rooms, open auditorium, seminar halls, computer labs, with latest computing facilities, well-equipped library, modern cafeteria with full hygiene facilities, sports ground, indoor sports complex, well-equipped GYM, day care center, banking facility, botanical garden and recreation facilities. The campus is equipped with latest teaching aids and is Wi-Fi enabled.
                </p>
              </motion.div>
            </motion.div>

            {/* Quality Assurance */}
            <motion.div
              data-section="quality"
              className="animate-section"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
                Quality & Activities
              </motion.h2>
              <motion.div
                variants={textVariants}
                className="prose prose-gray max-w-none"
              >
                <p className="text-gray-700 leading-relaxed">
                  College has an active Internal Quality assurance Cell (IQAC), as a mechanism to build and ensure a quality culture at the college level. Quality teaching, Computer education, facility for extracurricular activities including Sports, Music, NSS, NCC, Science and IT Society, Students' Counselling Cell, Grievance Redressal Cell, Anti-Ragging Cell, Gender Knowledge Centre, Green Earth Brigade, Red Ribbon Club, Language Lab and Hostel accommodation are inside the campus with modern facilities. Thousands of motivated and dedicated women have passed from the college and have successively entered in various fields of life making us proud.
                </p>
              </motion.div>
            </motion.div>

            {/* Sustainability */}
            <motion.div
              data-section="sustainability"
              className="animate-section"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-2 h-8 bg-teal-500 rounded-full mr-3"></span>
                Sustainable Development
              </motion.h2>
              <motion.div
                variants={textVariants}
                className="prose prose-gray max-w-none"
              >
                <p className="text-gray-700 leading-relaxed">
                  The College is strongly committed to sustainable development through its mechanisms of environmental management in accordance with many of the schemes employed at college campus. The College further develops social, environmental and ecological sustainability. College has its own functional 'Environment Policy' to guide its ongoing improvements in the environmental concerns of the institution. In collaboration with Central Govt. Scheme under (SECI) Solar Energy Corporation of India, a 100 KWp Solar Power Plant has been installed on the top roof of Main Administrative Building to generate electricity from renewable energy source which saves the 50% monthly electricity expenses of the Institution and reduces environmental pollution.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The College has developed a Solid-Liquid Waste Management System on its campus at the entrance and a MOU was also signed with Sunai Consultancy (P) Ltd. It serves beneficial to entire campus. Rain Water Harvesting (RWH) is a unique feature of the college as a valuable alternative or supplementary water resource, along with more conventional water supply technologies. Water shortages can be relieved if rainwater harvesting is practiced more widely.
                </p>
              </motion.div>
            </motion.div>

            {/* Student Development */}
            <motion.div
              data-section="development"
              className="animate-section"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-2 h-8 bg-pink-500 rounded-full mr-3"></span>
                Holistic Development
              </motion.h2>
              <motion.div
                variants={textVariants}
                className="prose prose-gray max-w-none"
              >
                <p className="text-gray-700 leading-relaxed">
                  The activities outside of the classroom give opportunities to student to participate in the areas of their interest. Beyond the classroom life outdoor learning is facilitated and is a regular feature for the students of professional courses. When it comes to academic and professionalism, the student of MMC are excellent. From bagging internship with reputed brands; to achieving noteworthy feats in their careers, students have proved their acumen in all fields. We strive to build a talent pool of excellent human capital.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-maroon-500 rounded-xl p-8 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-2xl font-bold mb-4">Join Our Legacy</h3>
              <p className="text-lg opacity-90 mb-6">
                Be part of Magadh Mahila College's journey of excellence and empowerment
              </p>
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Admissions
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BriefProfile;
