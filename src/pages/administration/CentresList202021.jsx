import i18next from "i18next";
import React from 'react';
const CentresList202021 = () => {
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{i18next.t("auto.centre_for_green_initiatives_c4gi_rml62h")}</h1>
      <p className="text-gray-600 mb-8">{i18next.t("auto.an_iso_certified_institution_committed_to_environmental_1i0lm5i")}</p>

      <section className="mb-12 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">{i18next.t("auto.about_c4gi_1qay4k1")}</h2>
        <p className="text-justify text-gray-800 mb-4">{`
          ${i18next.t("auto.an_iso_certified_proactive_institution_concerned_with_1ovhjqq")}
        `}</p>
        <p className="text-justify text-gray-800">{`
          ${i18next.t("auto.this_will_facilitate_them_to_focus_in_2cujjr")}
        `}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 mt-4 ml-4">
          <li><strong>{i18next.t("auto.reduce_lwzlzz")}</strong>{` ${i18next.t("auto.reduction_in_use_of_raw_materials_nt9zu5")}`}</li>
          <li><strong>{i18next.t("auto.reuse_1igrup7")}</strong>{` ${i18next.t("auto.reuse_of_waste_materials_hoyxck")}`}</li>
          <li><strong>{i18next.t("auto.recycle_b2rtjs")}</strong>{` ${i18next.t("auto.recycling_of_waste_materials_zcn9mq")}`}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-4">{i18next.t("auto.our_objectives_1ra71dd")}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 border-l-4 border-green-500">
            <p className="text-gray-800">{i18next.t("auto.understanding_several_environmental_issues_and_the_need_1w2eufc")}</p>
          </div>
          <div className="bg-white p-4 border-l-4 border-green-500">
            <p className="text-gray-800">{i18next.t("auto.sensitizing_students_faculty_members_staff_and_society_ux63l9")}</p>
          </div>
          <div className="bg-white p-4 border-l-4 border-green-500">
            <p className="text-gray-800">{i18next.t("auto.undertaking_technological_setup_aimed_to_have_an_1l0jtxi")}</p>
          </div>
          <div className="bg-white p-4 border-l-4 border-green-500">
            <p className="text-gray-800">{i18next.t("auto.creating_a_holistic_atmosphere_to_facilitate_the_1aheupw")}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-4">{i18next.t("auto.our_commitments_r4j10d")}</h2>
        <p className="text-justify text-gray-800 mb-4">{`
          ${i18next.t("auto.we_are_committed_to_protect_the_environment_gavpv3")}
        `}</p>
        <ul className="space-y-3 text-gray-800">
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span>{` ${i18next.t("auto.comply_with_national_state_and_local_environmental_2m6v1t")}`}</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span>{` ${i18next.t("auto.implement_and_maintain_environmental_management_system_ems_1kuxv8s")}`}</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span>{` ${i18next.t("auto.minimize_environmental_impact_through_regular_evaluation_and_auto80")}`}</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span>{` ${i18next.t("auto.implement_sustainable_practices_including_bio_based_and_15uj3cn")}`}</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span>{` ${i18next.t("auto.conduct_audits_to_measure_environmental_performance_mj0qrg")}`}</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span>{` ${i18next.t("auto.continuously_improve_environmental_performance_through_appropriate_policies_d8tuco")}`}</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span>{` ${i18next.t("auto.prepare_for_emergencies_to_minimize_environmental_impacts_botk3e")}`}</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span>{` ${i18next.t("auto.emphasize_pollution_prevention_and_sustainable_business_practices_k9o9u1")}`}</li>
        </ul>
      </section>
    </div>;
};
export default CentresList202021;
