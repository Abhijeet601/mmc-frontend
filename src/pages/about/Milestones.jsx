import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { milestones } from '../../data/milestones';

const Milestones = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(new Set());
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-maroon-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating 75+ years of excellence in women's education
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-maroon-500 h-full hidden md:block">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="w-full bg-gradient-to-b from-blue-600 to-maroon-600"
            />
          </div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              data-index={index}
              variants={itemVariants}
              className={`timeline-item relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={visibleItems.has(index) ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                  index % 2 === 0 ? 'bg-blue-500' : 'bg-maroon-500'
                } hidden md:block`}
              />

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 ${
                  index % 2 === 0 ? 'border-blue-500 md:mr-8' : 'border-maroon-500 md:ml-8'
                }`}
              >
                {/* Year Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={visibleItems.has(index) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className={`inline-block px-4 py-2 rounded-full text-white font-bold text-lg mb-4 ${
                    index % 2 === 0 ? 'bg-blue-500' : 'bg-maroon-500'
                  }`}
                >
                  {milestone.year}
                </motion.div>

                {/* Icon and Title */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={visibleItems.has(index) ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-center mb-4"
                >
                  <span className="text-3xl mr-3">{milestone.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {milestone.title}
                  </h3>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={visibleItems.has(index) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-gray-700 leading-relaxed"
                >
                  {milestone.description}
                </motion.p>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={visibleItems.has(index) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  className={`absolute top-4 ${
                    index % 2 === 0 ? 'right-4' : 'left-4'
                  } w-8 h-8 rounded-full ${
                    index % 2 === 0 ? 'bg-blue-100' : 'bg-maroon-100'
                  } opacity-20`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-maroon-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continuing the Legacy</h3>
            <p className="text-lg opacity-90">
              Magadh Mahila College continues to evolve and adapt, maintaining its commitment to excellence in women's education while embracing innovation and progress.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Milestones;
