import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
const VocationalComputerApplication = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.vocational_computer_application_nep_2020_magadh_mahila_1oohuw5")}</title>
        <meta name="description" content="Vocational Computer Application programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">{`
              ${i18next.t("auto.vocational_computer_application_12jdvjn")}
            `}</h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">{`
                ${i18next.t("auto.the_vocational_computer_application_program_equips_students_zw5qz8")}
              `}</p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.programs_offered_3hxcrf")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.bachelor_of_computer_applications_bca_x6k5pb")}</li>
                <li>{i18next.t("auto.diploma_in_computer_applications_3cznwe")}</li>
                <li>{i18next.t("auto.certificate_courses_in_it_and_programming_1ldeek6")}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.key_features_g9ba0l")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.programming_languages_and_software_development_v0u57u")}</li>
                <li>{i18next.t("auto.database_management_and_web_technologies_ck5ors")}</li>
                <li>{i18next.t("auto.it_infrastructure_and_networking_c5qway")}</li>
                <li>{i18next.t("auto.industry_relevant_certifications_a3oozu")}</li>
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
export default VocationalComputerApplication;
