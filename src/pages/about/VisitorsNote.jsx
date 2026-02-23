import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';

const VisitorsNote = () => {
  const { t } = useTranslation();

  const visitors = [
    { name: 'Abhishek Bachchan', image: r2Url('images/visitor-notes/AbhishekBachhan.jpg') },
    { name: 'Dr. Sharda Sinha', image: r2Url('images/visitor-notes/Dr.ShardaSinha.jpg') },
    { name: 'Gupteshwar Pandey', image: r2Url('images/visitor-notes/G.-P-andry.jpg') },
    { name: 'Gurmeet Choudhary', image: r2Url('images/visitor-notes/Gurmeet-choudhary.jpg') },
    { name: 'Mridula Sinha', image: r2Url('images/visitor-notes/Mridula-sinha.jpg') },
    { name: 'Nitish Kumar', image: r2Url('images/visitor-notes/Nitish-Kumar.jpg') },
    { name: 'Ratan Rajput', image: r2Url('images/visitor-notes/Ratan-Rajput.jpg') },
    { name: 'Shri K. G. Balakrishnan', image: r2Url('images/visitor-notes/ShriK.G-Balakrishanan.jpg') },
    { name: 'Shri Shatrughan Sinha', image: r2Url('images/visitor-notes/ShriShatrughanSinha.jpg') },
    { name: 'Sri Satya Pal Malik', image: r2Url('images/visitor-notes/Sri-Satya-Pal-Malik.jpg') },
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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <motion.h1
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Visitor's Note
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {visitors.map((visitor, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={visitor.image}
                  alt={visitor.name}
                  className="w-full h-48 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {visitor.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisitorsNote;
