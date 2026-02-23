import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';

const CommerceAdmission = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Commerce Admission</h1>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(0)} isOpen={openItems[0]}>
            Department at a Glance
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[0]}>
            <p>The Department of Commerce started in the year 2002 on self – financing basis. Presently there are approximately 550 students enrolled in the said course. Faculty members are outsourced on contract basis. The course is duly approved by the Department of HRD, Chancellor of Universities, Bihar & the U.G.C.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(1)} isOpen={openItems[1]}>
            Courses Offered – (3 Years Degree Courses)
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[1]}>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Sl. No.</th>
                  <th className="border border-gray-300 px-4 py-2">Course</th>
                  <th className="border border-gray-300 px-4 py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">B.Com (Bachelor in Commerce) (Hons.)</td>
                  <td className="border border-gray-300 px-4 py-2">3 Years Degree Course</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">B.B.A (Bachelor in Business Administration) (Hons.)</td>
                  <td className="border border-gray-300 px-4 py-2">3 Years Degree Course</td>
                </tr>
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(2)} isOpen={openItems[2]}>
            Application Forms
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[2]}>
            <p>Application Forms in .pdf format is only for reference purpose and not for the purpose of admission. Original Admission forms may be obtained from College Counter in any working day during college hours.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(3)} isOpen={openItems[3]}>
            Computer Applications Courses
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[3]}>
            <p>Courses offered related to Computer Applications include:</p>
            <ul className="list-disc list-inside">
              <li>B.A. / B.Sc. in Computer Applications (BCA)</li>
              <li>PGDCA (Post Graduate Vocational in Computer Applications)</li>
              <li>CIC (Certificate Course in Computer Applications)</li>
            </ul>
            <p>For full details on eligibility, duration, fees and selection procedure, see the Computer Application Course page.</p>
            <p><a className="text-blue-600 underline" href="/admissions/computer-application-course">View Computer Application Course details</a></p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CommerceAdmission;
