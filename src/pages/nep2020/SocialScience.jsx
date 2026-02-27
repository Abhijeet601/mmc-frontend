import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
const SocialScience = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.social_science_nep_2020_magadh_mahila_college_zdx9do")}</title>
        <meta name="description" content="Social Science programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">{`
              ${i18next.t("auto.social_science_132pi6i")}
            `}</h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">{`
                ${i18next.t("auto.the_social_science_department_fosters_critical_understanding_14sw83e")}
              `}</p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.programs_offered_3hxcrf")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.bachelor_of_arts_in_social_sciences_moi2bj")}</li>
                <li>{i18next.t("auto.master_of_arts_in_sociology_political_science_1qtrjfq")}</li>
                <li>{i18next.t("auto.interdisciplinary_social_science_courses_1yg0bol")}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.key_features_g9ba0l")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.field_research_and_surveys_g28ptk")}</li>
                <li>{i18next.t("auto.community_engagement_programs_1fbshak")}</li>
                <li>{i18next.t("auto.policy_analysis_and_advocacy_o5ntlk")}</li>
                <li>{i18next.t("auto.interdisciplinary_approach_x89fbm")}</li>
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
export default SocialScience;
