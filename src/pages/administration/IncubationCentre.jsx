import i18next from "i18next";
import React from 'react';
const IncubationCentre = () => {
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{i18next.t("auto.magadh_mahila_college_incubation_centre_mmcic_1xsc85h")}</h1>
      <p className="text-gray-600 mb-8">{i18next.t("auto.fostering_entrepreneurship_and_innovation_among_students_5o7aqz")}</p>

      <section className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{i18next.t("auto.inception_and_establishment_9723gu")}</h2>
        <p className="text-justify text-gray-800">{`
          ${i18next.t("auto.the_incubation_centre_was_established_in_magadh_11r7pv7")}
        `}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{i18next.t("auto.about_mmcic_1uzhext")}</h2>
        <p className="text-justify text-gray-800 mb-4">{`
          ${i18next.t("auto.the_mmc_incubation_centre_mmcic_is_a_1ond966")}
        `}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{i18next.t("auto.our_vision_and_mission_19fg0xa")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-3">{i18next.t("auto.vision_1g3zf4x")}</h3>
            <p>{`
              ${i18next.t("auto.create_an_environment_that_promotes_and_stimulates_aduje3")}
            `}</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-3">{i18next.t("auto.mission_gthcll")}</h3>
            <p>{`
              ${i18next.t("auto.support_student_initiated_business_ideas_with_sound_1fmojuw")}
            `}</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{i18next.t("auto.key_features_and_support_1i5qbxt")}</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">{i18next.t("auto.mentoring_and_guidance_zsmeev")}</h3>
            <p className="text-gray-700">{i18next.t("auto.expert_mentorship_from_professors_industry_leaders_and_cbl92d")}</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">{i18next.t("auto.financial_support_1b99g0z")}</h3>
            <p className="text-gray-700">{i18next.t("auto.fundraising_assistance_and_developing_networks_with_angel_zrnwcr")}</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">{i18next.t("auto.operational_support_xf0gmq")}</h3>
            <p className="text-gray-700">{i18next.t("auto.market_research_idea_validation_and_overall_business_jf5bnx")}</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">{i18next.t("auto.professional_services_1mz71wg")}</h3>
            <p className="text-gray-700">{i18next.t("auto.financial_and_legal_advisory_marketing_services_and_16s3qm7")}</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">{i18next.t("auto.alumnae_network_8smd8k")}</h3>
            <p className="text-gray-700">{i18next.t("auto.comprehensive_network_of_mmc_alumnae_angel_investors_h3votv")}</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{i18next.t("auto.comprehensive_support_ecosystem_rp7c22")}</h2>
        <p className="text-justify text-gray-800">{`
          ${i18next.t("auto.mmcic_has_established_a_comprehensive_network_of_1cw9ywd")}
        `}</p>
      </section>
    </div>;
};
export default IncubationCentre;
