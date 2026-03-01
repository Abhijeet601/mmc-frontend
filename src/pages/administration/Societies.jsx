import i18next from "i18next";
import React from 'react';
const Societies = () => {
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{i18next.t("auto.college_societies_1h5s306")}</h1>
      <p className="text-gray-600 mb-8">{i18next.t("auto.promoting_holistic_development_through_co_curricular_activities_aetw5h")}</p>

      <section className="mb-12 bg-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">{i18next.t("auto.overview_1pi8jpi")}</h2>
        <p className="text-justify text-gray-800">{`
          ${i18next.t("auto.the_athletic_society_students_central_society_sahodara_osz58o")}
        `}</p>
        <p className="text-justify text-gray-800 mt-4">{`
          ${i18next.t("auto.extracurricular_activities_are_made_an_integral_part_14j6p3")}
        `}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{i18next.t("auto.students_central_society_1fsi8at")}</h2>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white mb-4">
          <h3 className="text-xl font-bold mb-2">{i18next.t("auto.the_student_cabinet_17d57r7")}</h3>
          <p>{`
            ${i18next.t("auto.an_elected_body_of_students_representatives_that_1tfvu2s")}
          `}</p>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3">{i18next.t("auto.election_process_1l4fqkd")}</h3>
        <p className="text-gray-800 mb-4">{`
          ${i18next.t("auto.election_for_different_posts_is_held_every_1ejsldu")}
        `}</p>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3">{i18next.t("auto.key_positions_7vnyjc")}</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-100 p-4 rounded">
            <ul className="space-y-2 text-gray-800">
              <li>{i18next.t("auto.general_secretary_mab5zh")}</li>
              <li>{i18next.t("auto.assistant_general_secretary_11e3kxl")}</li>
              <li>{i18next.t("auto.cultural_secretary_frnfxb")}</li>
              <li>{i18next.t("auto.assistant_cultural_secretary_xxx123")}</li>
              <li>{i18next.t("auto.sports_secretary_1qkhg4i")}</li>
              <li>{i18next.t("auto.assistant_sports_secretary_yyy456")}</li>
              <li>{i18next.t("auto.sanitation_secretary_1s9q5ev")}</li>
              <li>{i18next.t("auto.assistant_sanitation_secretary_zzz789")}</li>
            </ul>
          </div>
          <div className="bg-blue-100 p-4 rounded">
            <ul className="space-y-2 text-gray-800">
              <li>{i18next.t("auto.science_and_it_secretary_1p3f5g9")}</li>
              <li>{i18next.t("auto.assistant_science_and_it_secretary_aaa111")}</li>
              <li>{i18next.t("auto.green_earth_brigade_secretary_nn9pec")}</li>
              <li>{i18next.t("auto.assistant_green_earth_brigade_secretary_bbb222")}</li>
              <li>{i18next.t("auto.environment_secretary_a6rmku")}</li>
              <li>{i18next.t("auto.assistant_environment_secretary_ccc333")}</li>
              <li>{i18next.t("auto.treasurer_drgcjq")}</li>
            </ul>
          </div>
        </div>
        
        <p className="text-justify text-gray-800">{`
          ${i18next.t("auto.elected_members_look_after_various_fields_such_1atlraa")}
        `}</p>
      </section>



      <section className="mb-12 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">{i18next.t("auto.department_societies_1f7yyzd")}</h2>
        <p className="text-justify text-gray-800 mb-4">{`
          ${i18next.t("auto.each_department_organizes_its_own_society_to_dj5mx0")}
        `}</p>
        <p className="text-justify text-gray-800">{`
          ${i18next.t("auto.these_societies_work_in_coordination_with_the_1dlor64")}
        `}</p>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{i18next.t("auto.student_centric_approach_iliawj")}</h2>
        <p className="text-justify text-gray-800">{`
          ${i18next.t("auto.efforts_are_made_to_ensure_that_most_cewpmg")}
        `}</p>
      </section>
    </div>;
};
export default Societies;
