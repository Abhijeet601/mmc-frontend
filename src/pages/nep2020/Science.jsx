import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
const Science = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.science_nep_2020_magadh_mahila_college_1izx7yf")}</title>
        <meta name="description" content="Science programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">{`
              ${i18next.t("auto.science_18pp3o1")}
            `}</h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">{`
                ${i18next.t("auto.the_science_department_provides_comprehensive_education_in_lueglp")}
              `}</p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.programs_offered_3hxcrf")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.bachelor_of_science_bsc_4_year_program_fqnu9h")}</li>
                <li>{i18next.t("auto.master_of_science_msc_in_various_specializations_qbq7s6")}</li>
                <li>{i18next.t("auto.integrated_programs_and_research_courses_1wg9qtl")}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.key_features_g9ba0l")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.state_of_the_art_laboratories_r7t12l")}</li>
                <li>{i18next.t("auto.research_oriented_curriculum_i9oxl2")}</li>
                <li>{i18next.t("auto.industry_collaborations_1wvwgar")}</li>
                <li>{i18next.t("auto.practical_and_project_based_learning_ck8ytc")}</li>
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
export default Science;
