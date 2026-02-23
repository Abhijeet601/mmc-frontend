import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';

const ComputerApplicationCourse = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Computer Application Course</h1>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(0)} isOpen={openItems[0]}>
            Introduction
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[0]}>
            <p>Computers have now been integrated with all disciplines. Literacy in computer is vital in almost all walks of life. Industry has an ever-increasing demand for software professionals to take care of their policy making, accounts and wages, indents and invoices. Computer software courses are specially suited for young women all over the world as it provides a safe and attractive employment with good remuneration. Opportunities for self-employment are great as one can also work from home. The computer professionals form the most important part of the workforce of any organization. One can also establish one's own software company specializing in training, software development, marketing of computer hardware, processing etc. There is a great scope for higher studies too in Computer Science viz. Masters in Computer Application (MCA) & Masters in Information Technology (MIT) in our country and abroad as well.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(1)} isOpen={openItems[1]}>
            Eligibility
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[1]}>
            <h3>For B.A. / B.Sc. in Computer Application (BCA)</h3>
            <p>The minimum academic qualification for the applicants seeking admission to this programme is a pass in the final examination of I.A / I.Sc / I.Com or 10 + 2 (Class XII) or its equivalent qualifying examination conducted by any for general category students and 45% for SC/ST/OBC/EBC.</p>
            <p>Candidates appearing in the final examination may also apply. However they must submit the mark sheet of final examination at the time of admission.</p>
            <p>Candidates having passed with mathematics at Intermediate / +2 level will be given preference in admission.</p>
            <h3>For Post Graduate Vocational in Computer Applications (PGDCA)</h3>
            <p>The minimum academic qualification for the applicants seeking admission to this programme is a pass in the Bachelor Degree Examination conducted by any recognized University.</p>
            <p>Candidates appearing in the final examination may also apply. However they must submit the mark sheet of final examination at the time of admission.</p>
            <p>Candidates having science background will be given preference in admission.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(2)} isOpen={openItems[2]}>
            Course Duration
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[2]}>
            <p>The Bachelor of Arts / Science (B.A. / B.Sc.) in Computer Applications course is a full-time Under Graduate programme spread over three academic year. In the first year of study, the course is know as the B.A. / B.Sc. (Vocational) Hons. Part-I, in the second year of study, the course is known as the B.A./B.Sc. (Vocational) Hons. Part-II and in the third year of study, the course is known as the B.A./B.Sc. (Vocational) Hons. Part-III.</p>
            <p>The Post Graduate Diploma in Computer Applications course is a full-time Post Graduate programme spread over one academic year consisting of two semesters.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(3)} isOpen={openItems[3]}>
            Course Fee
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[3]}>
            <h3>1. For B.A. / B.Sc. in Computer Application (BCA)</h3>
            <p>The Tuition fee for the entire course is Rs. 54,000/- as per P.U. Letter No. SFC/05 dated 03.05.2012 and the Security money (Rs. 3500/-). Other charges including electricity charge, Internet charge, educational tour charge, laboratory development charge, college development charge and miscellaneous charges will be charged over and above the tuition fee.</p>
            <p>The course fee for one year plus security deposit for Laboratory and Library has to be paid at the time of admission through BANK DRAFT in favour of The Principal, Magadh Mahila College payable at Patna. Cheque / cash will not be accepted.</p>
            <p>The Laboratory and Library caution money will be charged only at the time of admission in first year for BCA and in the first semester for PGDCA.</p>

            <h3 className="mt-4">2. For Post Graduate Diploma in Computer Applications (PGDCA)</h3>
            <p>The Tuition fee of PGDCA (1 year Vocational Course) as per notification no. SFC/05 dated 03.05.2012 is Rs. 23,760/-. These revised fees are enforced from the academic year 2012-2013.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(4)} isOpen={openItems[4]}>
            Selection Procedure
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[4]}>
            <p>Selection will be made on the basis of performance in the entrance test comprising of a written test followed by interview conducted by Magadh Mahila College, Patna for both BCA and PGDCA programme.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(5)} isOpen={openItems[5]}>
            Entrance Test
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[5]}>
            <p>Entrance test for admission to BCA and PGDCA course comprises of one written test followed by interview. The written test will be of one and a half hours to two hours duration. There will be questions on Logical and Mathematical ability, General awareness, English and Fundamentals of Computer with multiple choices.</p>
            <p>Candidates will be required to answer all questions on a separate answer sheet attached with the question booklet. All objective type questions will carry equal marks. There is no negative marking for wrong answers. More than one answer indicated against a question will be deemed as incorrect answer. Answers are to be marked using HB pencil only.</p>
            <p>There will be one essay type question on current developments related to computers / IT. Answer may be presented either in English or Hindi.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(6)} isOpen={openItems[6]}>
            Admissions
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[6]}>
            <p>Graduate in any stream (B.A. / B.Sc. / B.Com) can join the course. Students having science background with Mathematics will be given preference in admission.</p>
            <p>Any student, teacher or staff of the College is eligible to take admission in this short-term course. Persons not associated with the college wishing to join the course, shall have to take special permission form the VC / Principal.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(7)} isOpen={openItems[7]}>
            NRI Quota
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[7]}>
            <p>Children of Foreign Nationals and / or N R I with proper documents are eligible for admission to the courses. The written entrance test may be waived for such candidates, however they must appear before the interview board. The course fee for seats under this quota is $ 1000 per annum for BCA and $ 1200 per annum for PGDCA course.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(8)} isOpen={openItems[8]}>
            Courses
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[8]}>
            <p>1. B.A. / B.Sc. in COMPUTER APPLICATIONS</p>
            <p>2. Post Graduate Diploma in COMPUTER APPLICATIONS</p>
            <p>3. Certificate Course in COMPUTER APPLICATIONS (CIC)</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(9)} isOpen={openItems[9]}>
            Documents Required
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[9]}>
            <ul className="list-disc list-inside">
              <li>Mark sheet of qualifying examination</li>
              <li>School Leaving Certificate (SLC) / College Leaving Certificate (CLC)</li>
              <li>Migration Certificate</li>
              <li>Stamp size photograph – 3 copies</li>
              <li>Caste Certificate in original (issued by the DM / SDO)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(10)} isOpen={openItems[10]}>
            Eligibility for Different Courses
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[10]}>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Courses</th>
                  <th className="border border-gray-300 px-4 py-2">Duration</th>
                  <th className="border border-gray-300 px-4 py-2">Level</th>
                  <th className="border border-gray-300 px-4 py-2">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">B.A / B.Sc (Hons.)</td>
                  <td className="border border-gray-300 px-4 py-2">3 Years</td>
                  <td className="border border-gray-300 px-4 py-2">Hons. Degree</td>
                  <td className="border border-gray-300 px-4 py-2">I.A / I.Sc / I.Com + 2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">P.G</td>
                  <td className="border border-gray-300 px-4 py-2">2 Years</td>
                  <td className="border border-gray-300 px-4 py-2">Post Graduate Degree</td>
                  <td className="border border-gray-300 px-4 py-2">B.A / B.Sc /B.Com/ BCA or equivalent</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">CIC</td>
                  <td className="border border-gray-300 px-4 py-2">45 days</td>
                  <td className="border border-gray-300 px-4 py-2">Certificate</td>
                  <td className="border border-gray-300 px-4 py-2">+2</td>
                </tr>
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(11)} isOpen={openItems[11]}>
            General Information
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[11]}>
            <p>Magadh Mahila College offers education from the Under-Graduate level to the Post-Graduate level for girl students in all streams viz. science, humanities, social science and fine arts from the regular courses. The college also offers vocational courses in computer applications, Commerce, Management and Sociology. Facility is also available for short-term courses in Computer Applications run by the Computer Department for the students, staff and ex-students of the college.</p>
            <p>All applicants seeking admission to the College should read the Bulletin of Information/Prospectus issued by the college. The minimum eligibility requirements for admission to various courses shall be specified in that bulletin.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger onClick={() => toggleItem(12)} isOpen={openItems[12]}>
            Admission Procedure & Notes
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[12]}>
            <p>Every candidate will apply to the college on a prescribed application form available from the college sales counter along with the prospectus. Completed forms should be submitted in the college office.</p>
            <p>A candidate who wishes to be considered for more than one course should submit a separate application for each course. Admission shall be made on the basis of Merit List prepared after the written entrance test to be conducted by the college according to the notification of Patna University.</p>
            <p>On getting her candidature confirmed, the candidate will deposit the fees by challan to the extension counter, Allahabad Bank in the college premises. Admission is finalised only on payment of the fees. No individual intimation regarding admission is sent. All notices regarding admission will be displayed on the College Notice Board from time to time.</p>
            <p>Seeking admission on the basis of false information & identity, misrepresentation or by submitting false certificates/ documents is unlawful and will cause cancellation of admission.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ComputerApplicationCourse;
