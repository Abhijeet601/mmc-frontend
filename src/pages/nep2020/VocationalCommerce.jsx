import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
const VocationalCommerce = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.vocational_commerce_nep_2020_magadh_mahila_college_1i330at")}</title>
        <meta name="description" content="Vocational Commerce programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">{`
              ${i18next.t("auto.vocational_commerce_1br4tzn")}
            `}</h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">{`
                ${i18next.t("auto.the_vocational_commerce_program_equips_students_with_1vfo73t")}
              `}</p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.programs_offered_3hxcrf")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.bachelor_of_commerce_bcom_with_vocational_specializations_7bkpln")}</li>
                <li>{i18next.t("auto.vocational_in_business_administration_1v3kmxs")}</li>
                <li>{i18next.t("auto.certificate_courses_in_commerce_4lkbes")}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.key_features_g9ba0l")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.industry_relevant_curriculum_16mqgak")}</li>
                <li>{i18next.t("auto.entrepreneurship_development_iqo4rb")}</li>
                <li>{i18next.t("auto.internship_and_apprenticeship_programs_hd2d34")}</li>
                <li>{i18next.t("auto.digital_commerce_skills_1856xgg")}</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>{i18next.t("auto.note_3khlrj")}</strong>{` ${i18next.t("auto.detailed_curriculum_and_course_information_will_be_1pqj3kr")}
                `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default VocationalCommerce;
