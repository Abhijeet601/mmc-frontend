import i18next from "i18next";
import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';
const BBAAdmission = () => {
  const [openItems, setOpenItems] = useState({});
  const toggleItem = index => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{i18next.t("auto.bba_admission_2vbu7h")}</h1>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(0)} isOpen={openItems[0]}>{`
            ${i18next.t("auto.bachelor_of_business_administration_b_b_a_eohcxi")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[0]}>
            <p>{i18next.t("auto.the_bachelor_of_business_administration_b_b_qmtcwn")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(1)} isOpen={openItems[1]}>{`
            ${i18next.t("auto.three_years_degree_course_b9kdku")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[1]}>
            <p>{i18next.t("auto.this_is_a_three_year_undergraduate_degree_5eg5ew")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(2)} isOpen={openItems[2]}>{`
            ${i18next.t("auto.duration_of_the_course_1wdp8pi")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[2]}>
            <p>{i18next.t("auto.the_bachelor_of_business_administration_b_b_18uq1in")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(3)} isOpen={openItems[3]}>{`
            ${i18next.t("auto.eligibility_for_admission_3dvoka")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[3]}>
            <p>{i18next.t("auto.candidates_seeking_admission_to_the_first_year_3p6tbp")}</p>
            <p>{i18next.t("auto.admission_in_the_b_b_a_course_m6937i")}</p>
            <p>{i18next.t("auto.the_reservation_of_seats_for_the_course_121xywo")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(4)} isOpen={openItems[4]}>{`
            ${i18next.t("auto.entrance_test_m1myzb")}
          `}</AccordionTrigger>
          <AccordionContent isOpen={openItems[4]}>
            <p>{i18next.t("auto.1_the_duration_of_the_entrance_test_6g72kz")}</p>
            <p>{i18next.t("auto.the_test_will_consist_of_sjvbmg")}</p>
            <ul className="list-disc list-inside">
              <li>{i18next.t("auto.general_awareness_1v9ndo8")}</li>
              <li>{i18next.t("auto.english_language_13k8fqd")}</li>
              <li>{i18next.t("auto.mathematical_aptitude_fdz0sj")}</li>
            </ul>
            <p>{i18next.t("auto.2_provisional_admission_is_granted_for_a_vn09z2")}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>;
};
export default BBAAdmission;
