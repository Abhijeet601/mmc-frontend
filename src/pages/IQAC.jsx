import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const IQAC = () => {
  const {
    t
  } = useTranslation();
  const objectives = [i18next.t("auto.the_primary_objective_of_the_iqac_is_p8l47u"), i18next.t("auto.the_iqac_will_provide_greater_clarity_and_v8f8vq"), i18next.t("auto.the_iqac_will_contribute_towards_enhancement_and_1q0pf2n"), i18next.t("auto.to_develop_and_progress_a_heightened_level_1hs6iib"), i18next.t("auto.to_facilitate_the_integration_of_the_various_dv5slw"), i18next.t("auto.to_provide_a_sound_basis_for_decision_8a74i"), i18next.t("auto.to_act_as_a_change_agent_in_xvi5pc"), i18next.t("auto.to_coordinate_and_improve_internal_communication_to_1c4u5i7")];
  return <>
      <Helmet>
        <title>{t('iqac.title', 'IQAC - Magadh Mahila College | Internal Quality Assurance Cell')}</title>
        <meta name="description" content={t('iqac.metaDescription', 'Learn about the Internal Quality Assurance Cell (IQAC) at Magadh Mahila College. Discover our commitment to quality education, continuous improvement, and institutional excellence.')} />
      </Helmet>

      <div className="pt-0">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">{i18next.t("auto.internal_quality_assurance_cell_1dmux0m")}</span>
              </h1>
              <p className="text-foreground/70 max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.driving_excellence_in_education_through_systematic_quality_1eu4ve4")}
              `}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{
                opacity: 0,
                x: -30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }}>
                  <h2 className="text-3xl font-bold text-foreground mb-6">{i18next.t("auto.about_iqac_1qao2lu")}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{`
                    ${i18next.t("auto.the_internal_quality_assurance_cell_iqac_was_fcr5hm")}
                  `}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{`
                    ${i18next.t("auto.iqac_works_towards_ensuring_quality_enhancement_and_eivdkp")}
                  `}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium">{i18next.t("auto.naac_accredited_geniva")}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium">{i18next.t("auto.iso_certified_10e5g53")}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                x: 30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }} className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-blue-100/10 rounded-3xl p-8">
                    <div className="text-center">
                      <Shield className="w-24 h-24 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-foreground mb-4">{i18next.t("auto.quality_assurance_15b05ev")}</h3>
                      <p className="text-muted-foreground">{`
                        ${i18next.t("auto.committed_to_maintaining_the_highest_standards_of_l33q71")}
                      `}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
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
          }} className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">{`
                ${i18next.t("auto.objectives_of_1ynuu1c")} `}<span className="text-primary">{i18next.t("auto.iqac_yjpx0f")}</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">{`
                ${i18next.t("auto.the_iqac_of_mmc_is_constituted_to_wa72ha")}
              `}</p>

              <ul className="space-y-4">
                {objectives.map(objective => <li key={objective} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>)}
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default IQAC;
