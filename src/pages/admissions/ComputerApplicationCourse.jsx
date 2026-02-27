import i18next from "i18next";
import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';
const ComputerApplicationCourse = () => {
  const [openItems, setOpenItems] = useState({});
  const toggleItem = index => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{i18next.t("auto.computer_application_course_1r4jrl1")}</h1>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(0)} isOpen={openItems[0]}>{`
            ${i18next.t("auto.introduction_igb8it")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[0]}>
            <p>{i18next.t("auto.computers_have_now_been_integrated_with_all_1lnufpw")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(1)} isOpen={openItems[1]}>{`
            ${i18next.t("auto.eligibility_g6u7ew")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[1]}>
            <h3>{i18next.t("auto.for_b_a_b_sc_in_computer_dbv64b")}</h3>
            <p>{i18next.t("auto.the_minimum_academic_qualification_for_the_applicants_czjle8")}</p>
            <p>{i18next.t("auto.candidates_appearing_in_the_final_examination_may_nhx22e")}</p>
            <p>{i18next.t("auto.candidates_having_passed_with_mathematics_at_intermediate_1m1ywnj")}</p>
            <h3>{i18next.t("auto.for_post_graduate_vocational_in_computer_applications_1axh8qo")}</h3>
            <p>{i18next.t("auto.the_minimum_academic_qualification_for_the_applicants_192ssnq")}</p>
            <p>{i18next.t("auto.candidates_appearing_in_the_final_examination_may_nhx22e")}</p>
            <p>{i18next.t("auto.candidates_having_science_background_will_be_given_9vpvvb")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(2)} isOpen={openItems[2]}>{`
            ${i18next.t("auto.course_duration_3v0ism")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[2]}>
            <p>{i18next.t("auto.the_bachelor_of_arts_science_b_a_11lpdy9")}</p>
            <p>{i18next.t("auto.the_post_graduate_diploma_in_computer_applications_1lvlaj2")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(3)} isOpen={openItems[3]}>{`
            ${i18next.t("auto.course_fee_b6iogu")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[3]}>
            <h3>{i18next.t("auto.1_for_b_a_b_sc_in_ea436s")}</h3>
            <p>{i18next.t("auto.the_tuition_fee_for_the_entire_course_1lcibyh")}</p>
            <p>{i18next.t("auto.the_course_fee_for_one_year_plus_1bth3oo")}</p>
            <p>{i18next.t("auto.the_laboratory_and_library_caution_money_will_ns7r6e")}</p>

            <h3 className="mt-4">{i18next.t("auto.2_for_post_graduate_diploma_in_computer_mj4gpw")}</h3>
            <p>{i18next.t("auto.the_tuition_fee_of_pgdca_1_year_10pc78")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(4)} isOpen={openItems[4]}>{`
            ${i18next.t("auto.selection_procedure_6g3fns")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[4]}>
            <p>{i18next.t("auto.selection_will_be_made_on_the_basis_u0ynor")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(5)} isOpen={openItems[5]}>{`
            ${i18next.t("auto.entrance_test_v6km6v")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[5]}>
            <p>{i18next.t("auto.entrance_test_for_admission_to_bca_and_12bvu6d")}</p>
            <p>{i18next.t("auto.candidates_will_be_required_to_answer_all_1t3ks2")}</p>
            <p>{i18next.t("auto.there_will_be_one_essay_type_question_1sz4f3i")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(6)} isOpen={openItems[6]}>{`
            ${i18next.t("auto.admissions_1fe72rj")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[6]}>
            <p>{i18next.t("auto.graduate_in_any_stream_b_a_b_1bfi7a4")}</p>
            <p>{i18next.t("auto.any_student_teacher_or_staff_of_the_ob7ia3")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(7)} isOpen={openItems[7]}>{`
            ${i18next.t("auto.nri_quota_1qeod2m")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[7]}>
            <p>{i18next.t("auto.children_of_foreign_nationals_and_or_n_aqwjw4")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(8)} isOpen={openItems[8]}>{`
            ${i18next.t("auto.courses_1oy5re3")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[8]}>
            <p>{i18next.t("auto.1_b_a_b_sc_in_computer_d6ymzx")}</p>
            <p>{i18next.t("auto.2_post_graduate_diploma_in_computer_applications_c1mamn")}</p>
            <p>{i18next.t("auto.3_certificate_course_in_computer_applications_cic_qynvyp")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(9)} isOpen={openItems[9]}>{`
            ${i18next.t("auto.documents_required_1ia9kb4")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[9]}>
            <ul className="list-disc list-inside">
              <li>{i18next.t("auto.mark_sheet_of_qualifying_examination_1ak8s9u")}</li>
              <li>{i18next.t("auto.school_leaving_certificate_slc_college_leaving_certificate_1am7479")}</li>
              <li>{i18next.t("auto.migration_certificate_1h5zmn0")}</li>
              <li>{i18next.t("auto.stamp_size_photograph_3_copies_oychq0")}</li>
              <li>{i18next.t("auto.caste_certificate_in_original_issued_by_the_1c5bou")}</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(10)} isOpen={openItems[10]}>{`
            ${i18next.t("auto.eligibility_for_different_courses_1yuqvfc")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[10]}>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">{i18next.t("auto.courses_1oy5re3")}</th>
                  <th className="border border-gray-300 px-4 py-2">{i18next.t("auto.duration_u8n97f")}</th>
                  <th className="border border-gray-300 px-4 py-2">{i18next.t("auto.level_3ly4fn")}</th>
                  <th className="border border-gray-300 px-4 py-2">{i18next.t("auto.eligibility_g6u7ew")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.b_a_b_sc_hons_1ghp5hq")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.3_years_1lmeibu")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.hons_degree_1ws20cl")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.i_a_i_sc_i_com_2_rmz87f")}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.p_g_376mvw")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.2_years_11k6k23")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.post_graduate_degree_1bfpi58")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.b_a_b_sc_b_com_bca_omkihz")}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.cic_376b2k")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.45_days_16lremj")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.certificate_1r02h9s")}</td>
                  <td className="border border-gray-300 px-4 py-2">+2</td>
                </tr>
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(11)} isOpen={openItems[11]}>{`
            ${i18next.t("auto.general_information_n82m3j")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[11]}>
            <p>{i18next.t("auto.magadh_mahila_college_offers_education_from_the_ei5xxt")}</p>
            <p>{i18next.t("auto.all_applicants_seeking_admission_to_the_college_jpjfqg")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(12)} isOpen={openItems[12]}>{`
            ${i18next.t("auto.admission_procedure_notes_481a90")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[12]}>
            <p>{i18next.t("auto.every_candidate_will_apply_to_the_college_msacok")}</p>
            <p>{i18next.t("auto.a_candidate_who_wishes_to_be_considered_ut2j4w")}</p>
            <p>{i18next.t("auto.on_getting_her_candidature_confirmed_the_candidate_1tof46q")}</p>
            <p>{i18next.t("auto.seeking_admission_on_the_basis_of_false_s1ahwz")}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>;
};
export default ComputerApplicationCourse;
