import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';

const BBAAdmission = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">BBA Admission</h1>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(0)} isOpen={openItems[0]}>
            Bachelor of Business Administration (B.B.A.)
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[0]}>
            <p>The Bachelor of Business Administration (B.B.A.) Honours course is designed to provide students with a comprehensive understanding of business principles and practices.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(1)} isOpen={openItems[1]}>
            Three Years Degree Course
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[1]}>
            <p>This is a three-year undergraduate degree program in Business Administration.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(2)} isOpen={openItems[2]}>
            DURATION OF THE COURSE
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[2]}>
            <p>The Bachelor of Business Administration(B.B.A.) Honours course shall over a period of three academic years. The duration of the session is from July to May.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(3)} isOpen={openItems[3]}>
            ELIGIBILITY FOR ADMISSION
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[3]}>
            <p>Candidates seeking admission to the first year of the Degree course of Bachelor of Business Administration will be required to have passed with a minimum of 45% marks, the Intermediate Examination in Arts/Science/Commerce of a Board/ University established or incorporated by law or any other examination recognised y the University as equivalent thereto.</p>
            <p>Admission in the B.B.A. course shall be made on the basis of Merit List prepared after the entrance test, including written and viva-voce examination, to be conducted by the College.</p>
            <p>The reservation of seats for the course shall be as per rule of the State Government/Patna University for SC, ST and OBC/EBC/Physically Challenged & Blind. Caste certificate must be issued by District Magistrate/ Sub Divisional Magistrate.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(4)} isOpen={openItems[4]}>
            ENTRANCE TEST
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[4]}>
            <p>1. The duration of the entrance test will be 60 minutes. The test will have both subjective and objective type of questions. It will be followed by an interview with the candidates.</p>
            <p>The test will consist of:</p>
            <ul className="list-disc list-inside">
              <li>General Awareness</li>
              <li>English Language</li>
              <li>Mathematical Aptitude</li>
            </ul>
            <p>2. Provisional admission is granted for a period of 15 days only. Fees once paid will not be refunded. Those who leave afterwards will have to pay the fees for the entire course (i.e. of 3 years). Only those who wish to complete the course are encouraged to apply.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default BBAAdmission;
