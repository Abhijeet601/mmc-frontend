import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const ObjectivesOfIQAC = () => {
  useTranslation();
  const objectives = [i18next.t("auto.the_primary_objective_of_the_iqac_is_p8l47u"), i18next.t("auto.the_iqac_will_provide_greater_clarity_and_v8f8vq"), i18next.t("auto.the_iqac_will_contribute_towards_enhancement_and_1q0pf2n"), i18next.t("auto.to_develop_and_progress_a_heightened_level_1hs6iib"), i18next.t("auto.to_facilitate_the_integration_of_the_various_dv5slw"), i18next.t("auto.to_provide_a_sound_basis_for_decision_8a74i"), i18next.t("auto.to_actas_a_change_agent_in_the_40z2kg"), i18next.t("auto.to_coordinate_and_improve_internal_communication_to_1c4u5i7")];
  return <>
      <Helmet>
        <title>{i18next.t("auto.objectives_of_iqac_magadh_mahila_college_1yff1yi")}</title>
        <meta name="description" content="Objectives of the Internal Quality Assurance Cell (IQAC) at Magadh Mahila College." />
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
              ${i18next.t("auto.objectives_of_1ynuu1c")} `}<span className="text-primary">{i18next.t("auto.iqac_yjpx0f")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl">{`
              ${i18next.t("auto.the_iqac_of_mmc_is_constituted_to_1ywwicu")}
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
        }} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed">
              {objectives.map((objective, index) => <li key={index}>{objective}</li>)}
            </ol>
          </motion.div>
        </div>
      </div>
    </>;
};
export default ObjectivesOfIQAC;
