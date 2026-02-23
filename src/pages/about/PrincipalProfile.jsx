import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBilingual } from '../../contexts/BilingualContext';
import { motion, useAnimation } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';

const PrincipalProfile = () => {
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
          const sectionId = entry.target.dataset.section;
          if (entry.isIntersecting) {
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
        staggerChildren: 0.2
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

  const principalMessage = {
    deskTitle: "From the Principal's Desk",
    content: `Dear Students!

It is my heartfelt pleasure to welcome all the newly admitted students of Magadh Mahila College, a pioneering institution of higher education for young women in Bihar. The college was established as a constituent unit of Patna University, Patna in 1946. Patna University has introduced the New Education Policy (NEP), 2020 and the four-year degree programme in the year 2023. Currently, we are in the third batch under NEP, 2020.

The college has several remarkable achievements to its credit. It has been conferred the "Best College Award" on Shiksha Diwas in 2014 by Shri Nitish Kumar, Hon'ble Chief Minister of Bihar. It has also been awarded the "Excellence Institution of Higher Education for Girls in Bihar" by His Excellency Shri Ram Nath Kovind, the then Governor-cum-Chancellor of the Universities of Bihar on the occasion of National Education Day Summit and Awards, 2016. More recently, in 2023, the college has been declared the Green School Award from the Bihar State Pollution Control Board, Department of Environment, Forest and Climate Change, Government of Bihar.

I assure you that the college will provide a congenial atmosphere for your holistic development. Our pedagogy focuses on delivering value-based education to all the colleges in committed to ensuring quality education through dedicated faculty members and a well-equipped academic infrastructure. The students will also gain an extra edge through participation in sports activities, cultural programmes, group discussions, seminars, symposia, workshops, research projects, certificate courses, add-on courses etc. These opportunities will help shape your personal and professional life in today's competitive environment.

I feel extremely proud to mention that students of our college have bagged highest number of gold medals and university examinations at graduation level. We believe in mental, intellectual and spiritual growth of the students. In addition, we endeavour to inculcate in them social and ethical values for the benefit of society through N.S.S. and N.C.C.

Our college always identifies and appreciates emerging talent of the students by awarding them certificates and cash rewards. I am confident that you will find these four years to be among the most promising and transformative years of your life.

All the best for your new academic journey!!!`,
    name: "Prof. (Dr.) Nagendra Pd. Verma",
    designation: "Principal",
    college: "Magadh Mahila College"
  };

  const achievements = [
    {
      year: "2014",
      title: "Best College Award",
      description: "Conferred on Shiksha Diwas by Shri Nitish Kumar, Hon'ble Chief Minister of Bihar"
    },
    {
      year: "2016",
      title: "Excellence Institution of Higher Education for Girls",
      description: "Awarded by His Excellency Shri Ram Nath Kovind, then Governor-cum-Chancellor of Bihar"
    },
    {
      year: "2023",
      title: "Green School Award",
      description: "Declared by Bihar State Pollution Control Board, Department of Environment, Forest and Climate Change"
    }
  ];

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
              {t('pages.principalProfile')}
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-maroon-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Principal Image and Message Section */}
          <motion.div
            data-section="principal"
            className="animate-section mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={visibleSections.has('principal') ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Principal Image Card */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-maroon-100 rounded-2xl p-4 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
                    <img
                      src={r2Url('images/principal.jpg')}
                      alt={principalMessage.name}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: '500px' }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={visibleSections.has('principal') ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <p className="text-white text-xl font-bold">{principalMessage.name}</p>
                      <p className="text-white/80">{principalMessage.designation}</p>
                      <p className="text-white/60 text-sm">{principalMessage.college}</p>
                    </motion.div>
                  </div>
                </div>
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-maroon-400 to-maroon-600 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>

              {/* Principal Message */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={visibleSections.has('principal') ? "visible" : "hidden"}
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <motion.h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                    {principalMessage.deskTitle}
                  </motion.h2>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-r from-blue-50 to-maroon-50 rounded-xl p-6 border-l-4 border-blue-500"
                >
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {principalMessage.content}
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-end"
                >
                  <div className="text-right">
                    <p className="text-gray-900 font-semibold text-lg">{principalMessage.name}</p>
                    <p className="text-gray-600">{principalMessage.designation}</p>
                    <p className="text-gray-500 text-sm">{principalMessage.college}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            data-section="achievements"
            className="animate-section mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={visibleSections.has('achievements') ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="w-2 h-8 bg-maroon-500 rounded-full mr-3"></span>
              College Achievements
              <span className="w-2 h-8 bg-maroon-500 rounded-full ml-3"></span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={visibleSections.has('achievements') ? { 
                    opacity: 1, 
                    y: 0 
                  } : { 
                    opacity: 0, 
                    y: 20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + (index * 0.2) 
                  }}
                >
                  <motion.div
                    className="inline-block bg-gradient-to-r from-blue-500 to-maroon-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {achievement.year}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Quote */}
          <motion.div
            data-section="quote"
            className="animate-section mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={visibleSections.has('quote') ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-maroon-500 rounded-2xl p-8 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.p
                className="text-xl md:text-2xl font-semibold italic"
                initial={{ opacity: 0 }}
                animate={visibleSections.has('quote') ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                "Education is the most powerful weapon which you can use to change the world."
              </motion.p>
              <motion.p
                className="mt-4 text-white/80"
                initial={{ opacity: 0 }}
                animate={visibleSections.has('quote') ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                - Nelson Mandela
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrincipalProfile;
