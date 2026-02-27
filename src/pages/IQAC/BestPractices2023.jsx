import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const BestPractices2023 = () => {
  useTranslation();
  return <>
      <Helmet>
        <title>{i18next.t("auto.best_practices_2023_24_iqac_magadh_mahila_1yr1poj")}</title>
        <meta name="description" content="Explore best practices and innovative initiatives implemented in 2023-24 at Magadh Mahila College." />
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
                <span className="text-primary">{i18next.t("auto.best_practices_2023_24_bwl3ad")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.innovative_practices_and_successful_initiatives_implemented_during_10uar7e")}
              `}</p>
            </motion.div>

            {/* Best Practices Content */}
            <div className="space-y-16">
              {/* Promotion of Research */}
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
            }} className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                <h2 className="text-3xl font-bold mb-6 text-primary">{i18next.t("auto.promotion_of_research_r8t5ra")}</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{i18next.t("auto.the_context_oisz4z")}</h3>
                    <p className="text-muted-foreground">{`
                      ${i18next.t("auto.mmc_is_solemnly_dedicated_to_foster_research_ld1um9")}
                    `}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">{i18next.t("auto.the_objectives_14jiktc")}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{i18next.t("auto.to_stimulate_research_culture_among_students_sq4m7l")}</li>
                      <li>{i18next.t("auto.to_promote_interdisciplinary_studies_1nxebs")}</li>
                      <li>{i18next.t("auto.to_identify_areas_of_problems_and_their_17t8i8")}</li>
                      <li>{i18next.t("auto.to_gather_and_enhance_knowledge_in_the_k12xyn")}</li>
                      <li>{i18next.t("auto.to_develop_analytical_skills_and_rational_thinking_e3xj58")}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">{i18next.t("auto.the_practices_1tkb2lw")}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{i18next.t("auto.to_encourage_hands_on_learning_undergraduate_and_3lz05s")}</li>
                      <li>{i18next.t("auto.these_projects_culminate_in_a_yearly_powerpoint_1c6zqg4")}</li>
                      <li>{i18next.t("auto.every_department_has_an_offline_subscription_annual_oeim2a")}</li>
                      <li>{i18next.t("auto.the_college_has_signed_an_mou_with_1vkup8e")}</li>
                      <li>{i18next.t("auto.mmc_subscribes_to_the_n_list_national_kq8xbl")}</li>
                      <li>{i18next.t("auto.the_college_adheres_strictly_to_plagiarism_guidelines_8bgjei")}</li>
                      <li>{i18next.t("auto.international_and_national_conferences_workshops_seminars_and_xt29hn")}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">{i18next.t("auto.recognition_to_efforts_kgd2zq")}</h3>
                    <p className="text-muted-foreground">{`
                      ${i18next.t("auto.prof_dr_namita_kumari_principal_of_college_x4xu77")}
                    `}</p>
                  </div>
                </div>
              </motion.div>

              {/* Sustainability Initiatives */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                <h2 className="text-3xl font-bold mb-6 text-primary">{i18next.t("auto.sustainability_initiatives_ehjccv")}</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{i18next.t("auto.the_context_oisz4z")}</h3>
                    <p className="text-muted-foreground">{`
                      ${i18next.t("auto.sustainable_development_is_an_approach_to_growth_1j0spwd")}
                    `}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">{i18next.t("auto.the_objectives_14jiktc")}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{i18next.t("auto.to_promote_environmental_sustainable_practices_among_students_h6rnx2")}</li>
                      <li>{i18next.t("auto.to_promote_social_responsibility_in_the_community_17a1ogq")}</li>
                      <li>{i18next.t("auto.to_achieve_ecological_balance_through_efficient_utilization_18iw4kf")}</li>
                      <li>{i18next.t("auto.to_spread_awareness_among_students_and_faculties_uwxnvy")}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">{i18next.t("auto.the_practices_1tkb2lw")}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{i18next.t("auto.the_college_has_conducted_one_international_conference_rtkzx")}</li>
                      <li>{i18next.t("auto.a_national_seminar_on_trends_in_green_6jt3d6")}</li>
                      <li>{i18next.t("auto.the_department_of_botany_has_taken_a_18qle90")}</li>
                      <li>{i18next.t("auto.to_further_advance_sustainability_mmc_has_installed_12hhvzi")}</li>
                      <li>{i18next.t("auto.the_college_has_replaced_traditional_lighting_systems_12nq20r")}</li>
                      <li>{i18next.t("auto.the_ncc_nss_unit_sehat_kendra_intent_1bp8ng5")}</li>
                      <li>{i18next.t("auto.the_college_has_signed_an_mou_with_19pyunx")}</li>
                      <li>{i18next.t("auto.the_faculties_of_colleges_show_their_sensitisation_1b3ew3p")}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">{i18next.t("auto.evidence_of_success_u7kk3g")}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{i18next.t("auto.in_2023_24_approximately_20_kg_of_tb2ejl")}</li>
                      <li>{i18next.t("auto.this_installation_of_solar_power_plant_in_1rnniw1")}</li>
                      <li>{i18next.t("auto.the_installation_of_led_lamps_in_college_aikxvs")}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">{i18next.t("auto.recognition_to_efforts_kgd2zq")}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{i18next.t("auto.magadh_mahila_college_received_award_certificate_of_qzby63")}</li>
                      <li>{i18next.t("auto.dr_amrita_prasad_department_of_chemistry_received_p7rxr5")}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default BestPractices2023;
