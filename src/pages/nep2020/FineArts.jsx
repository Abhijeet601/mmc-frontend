import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
const FineArts = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.fine_arts_nep_2020_magadh_mahila_college_1tqu2cj")}</title>
        <meta name="description" content="Fine Arts programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">{`
              ${i18next.t("auto.fine_arts_j72039")}
            `}</h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">{`
                ${i18next.t("auto.the_fine_arts_department_nurtures_creativity_and_1pzz5g6")}
              `}</p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.programs_offered_3hxcrf")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.bachelor_of_fine_arts_bfa_rzi210")}</li>
                <li>{i18next.t("auto.certificate_courses_in_various_art_forms_7rbqvy")}</li>
                <li>{i18next.t("auto.workshop_based_learning_programs_15jbntb")}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.art_disciplines_1qfa997")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.painting_and_visual_arts_1gl3j1o")}</li>
                <li>{i18next.t("auto.sculpture_and_three_dimensional_arts_10ogkgb")}</li>
                <li>{i18next.t("auto.applied_arts_and_crafts_1skwd5a")}</li>
                <li>{i18next.t("auto.digital_arts_and_multimedia_py1kp9")}</li>
                <li>{i18next.t("auto.traditional_and_folk_arts_1iivuof")}</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>{i18next.t("auto.note_3khlrj")}</strong>{` ${i18next.t("auto.fine_arts_programs_emphasize_practical_training_and_zxb09l")}
                `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default FineArts;
