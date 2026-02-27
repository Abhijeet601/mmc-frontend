import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
import { useTranslation } from 'react-i18next';
const galleryImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
const BestPracticesPhotoGallery = () => {
  useTranslation();
  return <>
      <Helmet>
        <title>{i18next.t("auto.best_practices_photo_gallery_iqac_magadh_mahila_a9c9n3")}</title>
        <meta name="description" content="Photo gallery of IQAC Best Practices activities at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/iqac" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8">
            <ChevronRight className="w-4 h-4 rotate-180" />{`
            ${i18next.t("auto.back_to_iqac_1o3axbj")}
          `}</Link>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">{i18next.t("auto.best_practices_photo_gallery_10uky5l")}</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((imageName, index) => <motion.div key={imageName} initial={{
            opacity: 0,
            scale: 0.98
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.35,
            delay: index * 0.03
          }} className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <img src={r2Url(`images/iqac/best-practices/${imageName}`)} alt={`Best Practices Gallery ${index + 1}`} className="w-full h-72 object-cover" loading="lazy" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </>;
};
export default BestPracticesPhotoGallery;
