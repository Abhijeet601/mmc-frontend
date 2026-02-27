import i18next from "i18next";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';
const VisitorsNote = () => {
  const {
    t
  } = useTranslation();
  const visitors = [{
    name: i18next.t("auto.shri_abhishek_bachchan_ziuxrk"),
    image: r2Url('images/visitor-notes/AbhishekBachhan.jpg')
  }, {
    name: i18next.t("auto.smt_dr_sharda_sinha_13bfvyh"),
    image: r2Url('images/visitor-notes/Dr.ShardaSinha.jpg')
  }, {
    name: i18next.t("auto.shri_gupteshwar_pandey_ef7wsg"),
    image: r2Url('images/visitor-notes/G.-P-andry.jpg')
  }, {
    name: i18next.t("auto.shri_gurmeet_choudhary_8pt091"),
    image: r2Url('images/visitor-notes/Gurmeet-choudhary.jpg')
  }, {
    name: i18next.t("auto.smt_mridula_sinha_fj34mu"),
    image: r2Url('images/visitor-notes/Mridula-sinha.jpg')
  }, {
    name: i18next.t("auto.shri_nitish_kumar_1e1pmui"),
    image: r2Url('images/visitor-notes/Nitish-Kumar.jpg')
  }, {
    name: i18next.t("auto.ms_ratan_rajput_l9o54l"),
    image: r2Url('images/visitor-notes/Ratan-Rajput.jpg')
  }, {
    name: i18next.t("auto.shri_k_g_balakrishnan_1td35nn"),
    image: r2Url('images/visitor-notes/ShriK.G-Balakrishanan.jpg')
  }, {
    name: i18next.t("auto.shri_shatrughan_sinha_13jzv7j"),
    image: r2Url('images/visitor-notes/ShriShatrughanSinha.jpg')
  }, {
    name: i18next.t("auto.shri_satya_pal_malik_u5k1je"),
    image: r2Url('images/visitor-notes/Sri-Satya-Pal-Malik.jpg')
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.5
      }
    }
  };
  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <motion.h1 className="text-3xl font-bold text-gray-900 mb-8 text-center" initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>{`
            ${i18next.t("auto.visitor_s_note_7ak00d")}
          `}</motion.h1>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" animate="visible">
            {visitors.map((visitor, index) => <motion.div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" variants={itemVariants} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                <motion.img src={visitor.image} alt={visitor.name} className="w-full h-48 object-cover" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {visitor.name}
                  </h3>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </div>;
};
export default VisitorsNote;
