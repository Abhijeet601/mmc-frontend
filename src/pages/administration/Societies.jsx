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
              <li>{i18next.t("auto.sports_secretary_1qkhg4i")}</li>
              <li>{i18next.t("auto.sanitation_secretary_1s9q5ev")}</li>
            </ul>
          </div>
          <div className="bg-blue-100 p-4 rounded">
            <ul className="space-y-2 text-gray-800">
              <li>{i18next.t("auto.science_and_it_secretary_1p3f5g9")}</li>
              <li>{i18next.t("auto.green_earth_brigade_secretary_nn9pec")}</li>
              <li>{i18next.t("auto.environment_secretary_a6rmku")}</li>
              <li>{i18next.t("auto.treasurer_drgcjq")}</li>
            </ul>
          </div>
        </div>
        
        <p className="text-justify text-gray-800">{`
          ${i18next.t("auto.elected_members_look_after_various_fields_such_1atlraa")}
        `}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{i18next.t("auto.sahodara_society_the_house_system_3cg7pp")}</h2>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white mb-4">
          <h3 className="text-xl font-bold mb-2">{i18next.t("auto.the_daughter_of_same_mother_10vvoca")}</h3>
          <p>{`
            ${i18next.t("auto.mmc_has_the_liberty_to_be_proud_1amrdcd")}
          `}</p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">{i18next.t("auto.the_four_houses_1pb98sl")}</h3>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded text-center">
            <h4 className="font-bold text-gray-800 mb-2">{i18next.t("auto.jagriti_1um1efj")}</h4>
            <p className="text-sm text-gray-700">{i18next.t("auto.awakening_awareness_v9uw4f")}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded text-center">
            <h4 className="font-bold text-gray-800 mb-2">{i18next.t("auto.maitri_17p57qn")}</h4>
            <p className="text-sm text-gray-700">{i18next.t("auto.friendship_unity_roetf0")}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded text-center">
            <h4 className="font-bold text-gray-800 mb-2">{i18next.t("auto.pragati_1lcg6hp")}</h4>
            <p className="text-sm text-gray-700">{i18next.t("auto.progress_development_1br1ux9")}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded text-center">
            <h4 className="font-bold text-gray-800 mb-2">{i18next.t("auto.samriddhi_wzv43k")}</h4>
            <p className="text-sm text-gray-700">{i18next.t("auto.prosperity_growth_1uwaogf")}</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">{i18next.t("auto.leadership_competition_1bpk34f")}</h3>
        <p className="text-justify text-gray-800 mb-4">{`
          ${i18next.t("auto.the_house_captains_vice_captains_coordinate_with_14w4lzu")}
        `}</p>

        <h3 className="text-xl font-bold text-gray-800 mb-3">{i18next.t("auto.objectives_of_sahodara_society_18wrsst")}</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-green-600 font-bold mr-3">✓</span>
            <p className="text-gray-800"><strong>{i18next.t("auto.platform_to_showcase_talent_9s0nv4")}</strong>{` ${i18next.t("auto.through_various_activities_a80mgg")}`}</p>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 font-bold mr-3">✓</span>
            <p className="text-gray-800"><strong>{i18next.t("auto.enhancing_administrative_qualities_x2vjjx")}</strong>{` ${i18next.t("auto.among_students_o79gid")}`}</p>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 font-bold mr-3">✓</span>
            <p className="text-gray-800"><strong>{i18next.t("auto.developing_sense_of_healthy_competitiveness_1if02bu")}</strong>{` ${i18next.t("auto.in_a_supportive_environment_1orkhkz")}`}</p>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 font-bold mr-3">✓</span>
            <p className="text-gray-800"><strong>{i18next.t("auto.enhancing_discipline_2y93i8")}</strong>{` ${i18next.t("auto.in_the_college_through_student_leadership_20oymz")}`}</p>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 font-bold mr-3">✓</span>
            <p className="text-gray-800"><strong>{i18next.t("auto.promoting_indian_culture_1fj24af")}</strong>{` ${i18next.t("auto.and_moral_values_among_students_gnifwb")}`}</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">{i18next.t("auto.values_promoted_ofpohz")}</h3>
        <p className="text-justify text-gray-800 mb-4">{`
          ${i18next.t("auto.the_house_system_provides_opportunities_for_college_1acicy0")}
        `}</p>
        <p className="text-justify text-gray-800">{`
          ${i18next.t("auto.participation_in_house_activities_contributes_to_dedication_102e3tn")}
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
