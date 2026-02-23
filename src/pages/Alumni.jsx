import React from 'react';
import { motion } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';

const Alumni = () => {

  const images = [
    r2Url('images/alumni_mmc_alumni_2023meet_7_768x511.jpg'),
    r2Url('images/alumni_mmc_alumni_2023meet_8_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_9_768x512.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_11_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_12_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_13_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_14_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_15_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_16_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_17_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_18_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_19_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_20_768x512.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_21_768x512.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_22_768x511.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_23_768x512.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_24_768x512.jpeg'),
    r2Url('images/alumni_mmc_alumni_2023meet_77_768x511.jpg'),
    r2Url('images/alumni_mmc_alumni2023_2_768x511.jpeg'),
    r2Url('images/alumni_mmc_med1.jpeg'),
    r2Url('images/alumni_mmc_med2.jpeg'),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alumni Meet 2023
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating our alumni community and the memories from the 2023 meet.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <img
                src={image}
                alt={`Alumni Meet 2023 - Image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Alumni;
