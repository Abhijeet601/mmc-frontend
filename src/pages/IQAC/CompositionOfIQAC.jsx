import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
import { useTranslation } from 'react-i18next';
const CompositionOfIQAC = () => {
  useTranslation();
  const compositionImages = [{
    title: i18next.t("auto.iqac_composition_2024_25_owryix"),
    src: r2Url('images/iqac/composition-of-iqac/iqac-2024-25.jpeg')
  }, {
    title: i18next.t("auto.iqac_composition_2023_24_owu35b"),
    src: r2Url('images/iqac/composition-of-iqac/iqac-2023-24.jpg')
  }, {
    title: i18next.t("auto.iqac_composition_2022_23_owtbd5"),
    src: r2Url('images/iqac/composition-of-iqac/iqac-2022-23.jpeg')
  }, {
    title: i18next.t("auto.iqac_composition_2021_22_owvmi3"),
    src: r2Url('images/iqac/composition-of-iqac/iqac-2021-22.jpg')
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.composition_of_iqac_magadh_mahila_college_1gm8r9q")}</title>
        <meta name="description" content="Composition of the Internal Quality Assurance Cell (IQAC) at Magadh Mahila College." />
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
          duration: 0.6
        }} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{`
              ${i18next.t("auto.composition_of_c3hvn8")} `}<span className="text-primary">{i18next.t("auto.iqac_yjpx0f")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{`
              ${i18next.t("auto.composition_records_for_recent_academic_sessions_are_e7pnqr")}
            `}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {compositionImages.map((image, index) => <motion.figure key={image.src} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: index * 0.08
          }} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <img src={image.src} alt={image.title} loading="lazy" className="w-full h-auto object-contain" />
                <figcaption className="px-4 py-3 text-sm font-medium text-foreground">
                  {image.title}
                </figcaption>
              </motion.figure>)}
          </div>
        </div>
      </div>
    </>;
};
export default CompositionOfIQAC;
