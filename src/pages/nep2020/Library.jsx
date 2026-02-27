import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
const Library = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.library_nep_2020_magadh_mahila_college_1n3qa98")}</title>
        <meta name="description" content="Library services under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">{`
              ${i18next.t("auto.library_g842sa")}
            `}</h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">{`
                ${i18next.t("auto.the_central_library_at_magadh_mahila_college_70n9wo")}
              `}</p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.library_resources_199pc1v")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.extensive_collection_of_books_and_reference_materials_yjsykz")}</li>
                <li>{i18next.t("auto.digital_library_with_e_books_and_journals_rjp7u1")}</li>
                <li>{i18next.t("auto.inflibnet_and_ndl_access_1q4nz85")}</li>
                <li>{i18next.t("auto.multimedia_resources_and_audio_visual_materials_brq8zx")}</li>
                <li>{i18next.t("auto.previous_years_question_papers_1bxx2w4")}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.services_offered_1bfoq5u")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.barcode_based_circulation_system_m3npb")}</li>
                <li>{i18next.t("auto.online_public_access_catalogue_opac_14frro0")}</li>
                <li>{i18next.t("auto.photocopying_and_printing_facilities_r1vvxx")}</li>
                <li>{i18next.t("auto.research_assistance_and_guidance_6fnwzr")}</li>
                <li>{i18next.t("auto.special_services_for_differently_abled_students_12rzcvs")}</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>{i18next.t("auto.note_3khlrj")}</strong>{` ${i18next.t("auto.library_timings_and_access_policies_are_available_1ry8cja")}
                `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Library;
