import i18next from "i18next";
import React from 'react';
const degreeProgrammeSections = [{
  title: i18next.t("auto.humanities_1ffbfy0"),
  rows: [{
    sl: '1',
    title: i18next.t("auto.b_a_hons_in_english_5ab7qe"),
    duration: '4',
    intake: '60'
  }, {
    sl: '2',
    title: i18next.t("auto.b_a_hons_in_hindi_1e2vrg6"),
    duration: '4',
    intake: '15'
  }, {
    sl: '3',
    title: i18next.t("auto.b_a_hons_in_maithili_5i9js1"),
    duration: '4',
    intake: '10'
  }, {
    sl: '4',
    title: i18next.t("auto.b_a_hons_in_persian_17wlqna"),
    duration: '4',
    intake: '10'
  }, {
    sl: '5',
    title: i18next.t("auto.b_a_hons_in_philosophy_1atjtqz"),
    duration: '4',
    intake: '15'
  }, {
    sl: '6',
    title: i18next.t("auto.b_a_hons_in_music_1dzcs2d"),
    duration: '4',
    intake: '10'
  }, {
    sl: '7',
    title: i18next.t("auto.b_a_hons_in_sanskrit_1yc53z3"),
    duration: '4',
    intake: '10'
  }, {
    sl: '8',
    title: i18next.t("auto.b_a_hons_in_urdu_16eazr6"),
    duration: '4',
    intake: '15'
  }]
}, {
  title: i18next.t("auto.social_sciences_axcohl"),
  rows: [{
    sl: '9',
    title: i18next.t("auto.b_a_hons_in_economics_1293hbc"),
    duration: '4',
    intake: '60'
  }, {
    sl: '10',
    title: i18next.t("auto.b_a_hons_in_history_1jyo67q"),
    duration: '4',
    intake: '60'
  }, {
    sl: '11',
    title: i18next.t("auto.b_a_hons_in_home_science_1cig49b"),
    duration: '4',
    intake: '20'
  }, {
    sl: '12',
    title: i18next.t("auto.b_a_hons_in_mathematics_x2plpc"),
    duration: '4',
    intake: '10'
  }, {
    sl: '13',
    title: i18next.t("auto.b_a_hons_in_political_science_sllond"),
    duration: '4',
    intake: '60'
  }, {
    sl: '14',
    title: i18next.t("auto.b_a_hons_in_psychology_195x2uv"),
    duration: '4',
    intake: '40'
  }, {
    sl: '15',
    title: i18next.t("auto.b_a_hons_in_sociology_1prro8g"),
    duration: '4',
    intake: '60'
  }]
}, {
  title: i18next.t("auto.science_18pp3o1"),
  rows: [{
    sl: '16',
    title: i18next.t("auto.b_sc_hons_in_botany_846vl6"),
    duration: '4',
    intake: '48'
  }, {
    sl: '',
    title: i18next.t("auto.b_sc_hons_in_chemistry_bio_group_13g2m3d"),
    duration: '4',
    intake: '32'
  }, {
    sl: '17',
    title: i18next.t("auto.b_sc_hons_in_chemistry_math_group_btec7h"),
    duration: '4',
    intake: '32'
  }, {
    sl: '18',
    title: i18next.t("auto.b_sc_hons_in_mathematics_1o8c041"),
    duration: '4',
    intake: '43'
  }, {
    sl: '19',
    title: i18next.t("auto.b_sc_hons_in_physics_fawqzy"),
    duration: '4',
    intake: '32'
  }, {
    sl: '20',
    title: i18next.t("auto.b_sc_hons_in_statistics_1kqks80"),
    duration: '4',
    intake: '16'
  }, {
    sl: '21',
    title: i18next.t("auto.b_sc_hons_in_zoology_1npqwrm"),
    duration: '4',
    intake: '48'
  }]
}, {
  title: i18next.t("auto.vocational_professional_courses_under_self_financing_programme_1hi2275"),
  rows: [{
    sl: '22',
    title: i18next.t("auto.bachelor_in_computer_applications_b_c_a_5glan3"),
    duration: '3',
    intake: '60'
  }]
}, {
  title: i18next.t("auto.under_graduate_degree_courses_under_self_financing_6lwwaz"),
  rows: [{
    sl: '23',
    title: i18next.t("auto.bachelor_hons_degree_in_commerce_b_com_1ahb1a9"),
    duration: '4',
    intake: '250'
  }, {
    sl: '24',
    title: i18next.t("auto.bachelor_of_business_administration_b_b_a_eohcxi"),
    duration: '3',
    intake: '60'
  }, {
    sl: '25',
    title: i18next.t("auto.bachelor_of_social_work_b_s_w_milgub"),
    duration: '3',
    intake: '60'
  }]
}, {
  title: i18next.t("auto.post_graduate_degree_courses_il2gdu"),
  rows: [{
    sl: '26',
    title: i18next.t("auto.m_a_in_economics_1s3zpiq"),
    duration: '2',
    intake: '60'
  }, {
    sl: '27',
    title: i18next.t("auto.m_a_in_psychology_g1o5il"),
    duration: '2',
    intake: '30'
  }, {
    sl: '29',
    title: i18next.t("auto.m_sc_in_chemistry_5n9enr"),
    duration: '2',
    intake: '20'
  }]
}];
const certificateCourses = [{
  sl: '34',
  title: i18next.t("auto.certificate_course_in_computer_applications_ccca_compulsory_1c672ee"),
  duration: '45',
  intake: '80'
}, {
  sl: '35',
  title: i18next.t("auto.certificate_course_in_basic_english_language_proficiency_179dndh"),
  duration: '90',
  intake: '50'
}, {
  sl: '36',
  title: i18next.t("auto.certificate_course_in_basic_hindi_language_proficiency_q9tbnp"),
  duration: '90',
  intake: '50'
}, {
  sl: '37',
  title: i18next.t("auto.certificate_course_in_german_language_proficiency_programme_19zy3hr"),
  duration: '180',
  intake: '50'
}, {
  sl: '38',
  title: i18next.t("auto.certificate_course_in_spss_origin_pro_software_1s6bel3"),
  duration: '90',
  intake: '50'
}, {
  sl: '39',
  title: i18next.t("auto.certificate_course_in_health_dietetics_1l901wk"),
  duration: '180',
  intake: '50'
}, {
  sl: '40',
  title: i18next.t("auto.certificate_course_in_health_beauty_care_1a0mijf"),
  duration: '180',
  intake: '50'
}, {
  sl: '41',
  title: i18next.t("auto.certificate_courses_under_fineart_stream_i_block_1akbdq0"),
  duration: '90 (Each)',
  intake: '50 (Each)'
}, {
  sl: '42',
  title: i18next.t("auto.certificate_course_in_japaness_language_proficiency_programme_1tzd7e4"),
  duration: '180',
  intake: '50'
}, {
  sl: '43',
  title: i18next.t("auto.certificate_course_in_it_skill_stream_computer_1w7x3zb"),
  duration: '180',
  intake: '50'
}, {
  sl: '44',
  title: i18next.t("auto.certificate_course_in_management_stream_office_management_11rj8uk"),
  duration: '180',
  intake: '50'
}];
const Courses = () => {
  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{i18next.t("auto.programmes_kzend6")}</h1>

          <div className="space-y-6">

            {degreeProgrammeSections.map(section => <div key={section.title} className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-3 py-2 text-left">{i18next.t("auto.sl_376nn8")}</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">{i18next.t("auto.title_of_programme_1t17980")}</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">{i18next.t("auto.duration_year_wmdg0l")}</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">{i18next.t("auto.intake_capacity_per_year_hygnyd")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map(row => <tr key={`${section.title}-${row.sl}-${row.title}`}>
                          <td className="border border-gray-300 px-3 py-2">{row.sl}</td>
                          <td className="border border-gray-300 px-3 py-2">{row.title}</td>
                          <td className="border border-gray-300 px-3 py-2">{row.duration}</td>
                          <td className="border border-gray-300 px-3 py-2">{row.intake}</td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>)}

            <p className="text-gray-700 font-medium">{i18next.t("auto.no_of_seats_in_b_a_hons_13uhlsg")}</p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">{i18next.t("auto.value_added_certificate_courses_only_for_college_bhw9aj")}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left">{i18next.t("auto.sl_376nn8")}</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">{i18next.t("auto.title_of_course_19z5369")}</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">{i18next.t("auto.duration_in_days_1r7clsi")}</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">{i18next.t("auto.intake_capacity_per_year_hygnyd")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificateCourses.map(course => <tr key={`cert-${course.sl}`}>
                        <td className="border border-gray-300 px-3 py-2">{course.sl}</td>
                        <td className="border border-gray-300 px-3 py-2">{course.title}</td>
                        <td className="border border-gray-300 px-3 py-2">{course.duration}</td>
                        <td className="border border-gray-300 px-3 py-2">{course.intake}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Courses;
