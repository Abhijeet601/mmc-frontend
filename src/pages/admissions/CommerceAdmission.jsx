import i18next from "i18next";
import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';
const CommerceAdmission = () => {
  const [openItems, setOpenItems] = useState({});
  const toggleItem = index => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{i18next.t("auto.commerce_admission_lhexgx")}</h1>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(0)} isOpen={openItems[0]}>{`
            ${i18next.t("auto.department_at_a_glance_1y5xfjr")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[0]}>
            <p>{i18next.t("auto.the_department_of_commerce_started_in_the_wxwxna")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(1)} isOpen={openItems[1]}>{`
            ${i18next.t("auto.courses_offered_3_years_degree_courses_b6z5h")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[1]}>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">{i18next.t("auto.sl_no_1e4pi2j")}</th>
                  <th className="border border-gray-300 px-4 py-2">{i18next.t("auto.course_18w96e0")}</th>
                  <th className="border border-gray-300 px-4 py-2">{i18next.t("auto.duration_u8n97f")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.b_com_bachelor_in_commerce_hons_1x3nqvu")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.3_years_degree_course_hapa3n")}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.b_b_a_bachelor_in_business_administration_767cub")}</td>
                  <td className="border border-gray-300 px-4 py-2">{i18next.t("auto.3_years_degree_course_hapa3n")}</td>
                </tr>
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(2)} isOpen={openItems[2]}>{`
            ${i18next.t("auto.application_forms_q75ql6")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[2]}>
            <p>{i18next.t("auto.application_forms_in_pdf_format_is_only_1bmqlnr")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(3)} isOpen={openItems[3]}>{`
            ${i18next.t("auto.computer_applications_courses_4dhe6d")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[3]}>
            <p>{i18next.t("auto.courses_offered_related_to_computer_applications_include_1m274y6")}</p>
            <ul className="list-disc list-inside">
              <li>{i18next.t("auto.b_a_b_sc_in_computer_applications_1stz2kz")}</li>
              <li>{i18next.t("auto.pgdca_post_graduate_vocational_in_computer_applications_1b5bha3")}</li>
              <li>{i18next.t("auto.cic_certificate_course_in_computer_applications_o28rw")}</li>
            </ul>
            <p>{i18next.t("auto.for_full_details_on_eligibility_duration_fees_1qvwlud")}</p>
            <p><a className="text-blue-600 underline" href="/admissions/computer-application-course">{i18next.t("auto.view_computer_application_course_details_1bmepm2")}</a></p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>;
};
export default CommerceAdmission;
