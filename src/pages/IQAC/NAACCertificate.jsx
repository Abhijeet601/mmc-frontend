import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
import { useTranslation } from 'react-i18next';
const NAACCertificate = () => {
  useTranslation();
  const certificates = [{
    year: '2021',
    grade: 'Additional Certificate',
    image: r2Url('images/WhatsApp-Image-2021-02-11-at-3.04.42-PM.jpeg'),
    alt: i18next.t("auto.naac_accreditation_2021_11u91kr"),
    description: i18next.t("auto.additional_naac_certificate_from_2021_18mpksz")
  }, {
    year: '2020',
    grade: 'Grade B+',
    image: r2Url('images/mmc_naac2020.jpg'),
    alt: i18next.t("auto.naac_accreditation_2020_11u91kq"),
    description: i18next.t("auto.grade_b_accreditation_certificate_from_2020_6vn1mw")
  }, {
    year: '2013',
    grade: 'Grade A',
    image: r2Url('images/mmc_naac2013.jpg'),
    alt: i18next.t("auto.naac_accreditation_2013_11u91i2"),
    description: i18next.t("auto.grade_a_accreditation_certificate_from_2013_1n95xc")
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.naac_certificate_accreditation_magadh_mahila_college_1t3lir7")}</title>
        <meta name="description" content="View NAAC accreditation certificates and grades awarded to Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">{i18next.t("auto.naac_certificate_kd4l0d")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.official_naac_accreditation_certificates_and_grades_awarded_1akwpwo")}
              `}</p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={cert.image} alt={cert.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">{cert.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{`
                      ${i18next.t("auto.naac_accreditation_1rd5nbu")} `}{cert.year}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {cert.description}
                    </p>
                    <a href={cert.image} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      <ExternalLink className="w-4 h-4" />{`
                      ${i18next.t("auto.view_certificate_nw1nnh")}
                    `}</a>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default NAACCertificate;
