import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
const GeneralInformation = () => {
  return <>
      <Helmet>
        <title>{i18next.t("auto.general_information_admissions_magadh_mahila_college_1o560ih")}</title>
        <meta name="description" content="General admission information, reservation policy, and important notes for applicants." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{i18next.t("auto.general_information_n82m3j")}</h1>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{`
                ${i18next.t("auto.magadh_mahila_college_offers_education_from_the_ei5xxt")}
              `}</p>
              <p>{`
                ${i18next.t("auto.all_applicants_seeking_admission_to_the_college_jpjfqg")}
              `}</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-2">{i18next.t("auto.general_information_n82m3j")}</h2>
              <p>{`
                ${i18next.t("auto.every_candidate_are_seeking_admission_to_magadh_rv5e7j")}
              `}</p>
              <p>{`
                ${i18next.t("auto.admission_shall_be_made_on_the_basis_fe9i1v")}
              `}</p>
              <p>{`
                ${i18next.t("auto.the_first_and_subsequent_admission_lists_and_192zgx")}
              `}</p>
              <p>{`
                ${i18next.t("auto.the_selected_candidates_are_required_to_pay_krg3be")}
              `}</p>
              <p>{`
                ${i18next.t("auto.no_individual_intimation_regarding_admission_is_sent_1btbomz")}
              `}</p>
              <p>{`
                ${i18next.t("auto.once_the_admissions_committee_has_taken_a_8llmfg")}
              `}</p>
              <p>{i18next.t("auto.the_college_reserves_the_right_to_refuse_11n0zrf")}</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-2">{i18next.t("auto.reserved_categories_jiug4t")}</h2>
              <p>{`
                ${i18next.t("auto.seats_for_different_caste_categories_i_e_6ozcsx")}
              `}</p>
              <p>{`
                ${i18next.t("auto.seats_are_reserved_for_children_wives_widows_16hs5ro")}
              `}</p>
              <p>{`
                ${i18next.t("auto.3_of_the_total_seats_are_reserved_1hxtupn")}
              `}</p>
              <p>{`
                ${i18next.t("auto.5_of_the_total_seats_in_any_lpiio2")}
              `}</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-2">{i18next.t("auto.admission_on_the_basis_of_proficiency_in_l88ihc")}</h2>
              <p>{`
                ${i18next.t("auto.students_wishing_to_apply_for_admission_through_171cg5e")}
              `}</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-2">{i18next.t("auto.admission_on_basis_of_proficiency_in_fine_15d01l3")}</h2>
              <p>{`
                ${i18next.t("auto.students_wishing_to_apply_on_the_basis_1u2rf29")}
              `}</p>
              <p>{`
                ${i18next.t("auto.the_names_of_the_selected_candidates_will_4u8m4t")}
              `}</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-2">{i18next.t("auto.hostel_admission_f57bz9")}</h2>
              <p>{`
                ${i18next.t("auto.limited_seats_are_available_in_the_campus_7wd3rw")}
              `}</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-2">{i18next.t("auto.note_3khlrj")}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{i18next.t("auto.forms_incomplete_in_any_respect_will_be_1uztuv4")}</li>
                <li>{`
                  ${i18next.t("auto.seeking_admission_on_the_basis_of_false_fdhyot")}
                `}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default GeneralInformation;
