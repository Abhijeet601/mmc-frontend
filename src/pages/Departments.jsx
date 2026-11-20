import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import * as Dialog from '@radix-ui/react-dialog';
import { BookOpen, Palette, Microscope, Users, Briefcase, X, GraduationCap, Target, Music, Star, Award } from 'lucide-react';
import FacultyCard from '@/components/FacultyCard';
import { getDepartmentFaculty } from '@/data/faculty';
import { getFacultyName } from '@/lib/facultyPresentation';

const Departments = () => {
  const { t } = useTranslation();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const opener = useRef(null);
  const departments = [{
    name: t("auto.department_of_hindi_k5iwa2"),
    category: 'Humanities',
    icon: BookOpen,
    description: t("auto.comprehensive_study_of_hindi_language_literature_and_sk8gaz"),
    color: 'from-primary to-primary',
    highlights: `मगध महिला महाविद्यालय में हिंदी विभाग की स्थापना सन 1946 में हुई । प्रारंभ में स्नातक एवं इंटरमीडिएट कक्षाओं तक ही हिंदी विषय का पठन-पाठन समिति रहा । सन 1960 से स्नातक सम्मान का अध्यापन कार्य प्रारंभ किया गया।

यह विभाग संपूर्ण महाविद्यालय की छात्राओं की भाषायी रचना कौशल के प्रति सजग भूमिका का निर्वहन करता है। इस कार्य हेतु विभिन्न स्तरीय रचनात्मक प्रतियोगिताएं आयोजित की जाती है तथा छात्राओं का उत्साहवर्धन करने के लिए पुरस्कार एवं प्रमाण पत्र भी प्रदान किए जाते हैं । राष्ट्रीय एवं अंतर्राष्ट्रीय स्तर पर आयोजित होने वाले साहित्यिक एवं प्रतियोगी आयोजनों में सहभागिता हेतु विभाग द्वारा छात्राओं को प्रोत्साहित एवं प्रशिक्षित किया जाता है।`,
    id: 'hindi'
  }, {
    name: t("auto.department_of_english_88eeyi"),
    category: 'Humanities',
    icon: BookOpen,
    description: t("auto.english_language_literature_and_communication_skills_development_5ynr8u"),
    color: 'from-primary to-highlight',
    highlights: `The Department of English is one of prestigious Departments that came into being with the inception of the college itself in 1946. Since then, the department has been adorned by several gems like Prof Illa Mullick, Dr Farida Kalim, Dr Zaira Kalim, Dr Manju Rani Sinha, Dr Rashmi Zafar, Dr Rekha Jha. In 2009 the baton was passed on to Dr Kamlesh Kumari who headed the Department till July 2015. Since its inception the Department has been incessantly striving towards the all round development of the students with a missionary zeal. Recognising the global importance of English, the Deptt. aims at the enhancement of all the four skills L, S, R, W. To reach the target, not only the students but the teachers also try to improve and enrich themselves. They attend seminars and conferences regularly and present papers. They are engaged in publications and research works. For the inculcation and enhancement of language of the students, several activities are organized by the Deptt. The department runs Language Proficiency Course in two languages: German and English.

VISION: The Department aims at:
a) Enhancing the language ability of the students in the department and the feel for literature
b) Producing rankers in the university list
c) All round personality development of the students so that they can meet the challenging demands of life and be the successful responsible citizens of the nation.`,
    id: 'english'
  }, {
    name: t("auto.department_of_persian_b5ffy2"),
    category: 'Humanities',
    icon: BookOpen,
    description: t("auto.classical_persian_language_literature_and_cultural_studies_17161jv"),
    color: 'from-primary to-highlight',
    highlights: 'Department of Persian was established in 1957 by Late Prof. Bilquis Afaque, who was the founder teacher of this department followed by Prof. Khursheed Jahan. She joined the P.G. department in 1973. Dr. Shahida Khanam is the present head of the department.',
    id: 'persian'
  }, {
    name: t("auto.department_of_sanskrit_ndfog3"),
    category: 'Humanities',
    icon: BookOpen,
    description: t("auto.sanskrit_language_classical_texts_and_indian_philosophical_nullw2"),
    color: 'from-primary to-highlight',
    highlights: 'Department of Sanskrit started with the inception of the college in 1946. In 1985 Dr. Sudha Rani joined as the H.O.D of the Department. On 1st January 1999 she was elevated to the post of Head of the University Department of Sanskrit and Prof. (Dr.) Pramila Gupta succeeded as the Head in 1996. Current Head: Dr. Shipra Prabha.',
    id: 'sanskrit'
  }, {
    name: t("auto.department_of_mathematics_1w45hfg"),
    category: 'Science',
    icon: Target,
    description: t("auto.pure_and_applied_mathematics_with_emphasis_on_1ts8mj8"),
    color: 'from-primary to-highlight',
    highlights: `Highlights of the Department

The Department of Mathematics in Magadh Mahila College was established in 1948. The first head of the department of Mathematics was Professor Munna Rani. Professor Chandra Kala Rajgaria and Professor Shipra Biswas headed the department successively. Professor Dr. Rashmi Jaishwal took over headship from Professor Shipra Biswas in October 2003. She retired in September 2009. Department teaches Mathematics to the students of both Science and Arts faculty. Students of the department excel in university examination and many of them secure top ranks. Their performance is very good in future academic endeavor as well as the job market.`,
    id: 'mathematics'
  }, {
    name: t("auto.department_of_statistics_1p0o5pp"),
    category: 'Science',
    icon: Target,
    description: t("auto.statistical_methods_probability_and_data_analysis_199hs5y"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Statistics in Magadh Mahila College came into existence in July, 2014. The teaching of Statistics at undergraduate level was started in Magadh Mahila College from academic session 2014-2015 with the proper permission from the Government of Bihar. Statistics is a very important subject for science as well as social science students. Till now there is no regular teacher in the Department. Prof. (Dr.) Abha Sharan a faculty member of Physics Department, was the founder Head of the Statistics Department from July 2014 to 30 Nov. 2017. On 1 December 2017, after the retirement of Prof. (Dr.) Abha Sharan, Ms. Sonu Rani Assistant Professor, Department of Physics became the Head of the Statistics Department.`,
    id: 'statistics'
  }, {
    name: t("auto.department_of_physics_1y6iif7"),
    category: 'Science',
    icon: Microscope,
    description: t("auto.fundamental_and_applied_physics_with_modern_laboratory_7vnqhm"),
    color: 'from-primary to-highlight',
    highlights: `The department of Physics in Magadh Mahila College was established in the year 1948 with the introduction of Intermediate teaching in science. It has the distinction to be the first all women institution in Bihar, where teaching of science was introduced as early as in 1948. This department was awarded with 'STAR DEPARTMENT' by UGC, New Delhi under CPE Programme in November – 2011. The B.Sc. classes were started in 1966 and Honours teaching in the year 1980. Mrs Pratima Sanyal was the founder Head of the department. She was taught by the legendary Physicist Professor S.N. Bose of Bose Statistics fame as a M.Sc. student at Presidency College, Calcutta University. On her retirement in 1979, Professor Padmavathy Srinivasan, became the HOD (1979-2004). From the very beginning the department was well known for its high standard and discipline. Our results have been excellent and our students regularly obtain top ranks in the University. The department strives to inspire the students to develop a keen interest in the subject. Their experimental skills are carefully nurtured and supervised by the teachers. Many of our ex students are actively engaged in research in Pure and Applied Science in national institutes of repute viz IITs and IISc as well as abroad. The students passed out of this department are very well established and holding high positions in their respective organizations. The teachers published research papers in national and international journals of repute. The Department of Physics also worked as the mentor of Computer Applications Centre in the college. Dr Padmavathy Srinivasan along with Dr Dolly Sinha established the first Computer Laboratory in the college and introduced the teaching of Bachelor of Computer Applications (B.C.A.) course in the college in the year 2000 and of Post Graduate Diploma in Computer Applications (PGDCA) in 2004. Professor Srinivasan also served as the Coordinator of B.C.A. course from 2000-04. She also deserves the credit for rejuvenating the Science Society of the college. As President of the society, she used to deliver and conduct a number of popular science lectures and activities for the benefit of all students and teachers of the college. Known for its high efficiency, the department of Physics is an invariably consulted and assigned responsibility such as admission, examination etc. Two teachers of the department became the Principal of the college. Professor Dr Kiran Aryani Mitra holds the office of the Principal from 2004 – 05. Dr Kiran Aryani Mitra later elevated and joined as the Head of the P.G. Department of Physics, Patna University in Nov 2009. Professor Dolly Sinha joined as Principal of the college on 03 June 2009 and is continuing. Professor Abha Sharan, the present head of the department is fully dedicated to teaching. She shares many administrative responsibilities of the college too, including managing the PGDCA course as its Coordinator from July 2008 and managing the Vocational Courses examination (2004- 2011). Another teacher of the department Dr Mamta Deepak manages the BCA and CIC courses as its Coordinator. She is also the Controller of Examination of Vocational Courses examination. The department is actively engaged in extension activities to promote scientific temperament and science related issues. Teachers and staff of the department volunteer in organizing preliminary examination of "International Olympiad in Physics" conducted by IAPT since 2000. Now we have also started conducting preliminary examination of International Olympiads in Chemistry, Biology, Astronomy and Junior Science since 2004. National Standard Examinations are nationwide examinations conducted by IAPT. These examinations are the FIRST and the ONLY SCREENING TESTS towards International Olympiads in the respective subjects. Department also conducts National Graduate Physics Examination for undergraduate students of different colleges of Bihar since 2004. Department conducted Physics Olympiad Exposure Camp in association with Homi Bhaba Centre for Science Education (HBCSE), Mumbai on Sept 26-27, 2011 for undergraduate teachers.`,
    id: 'physics'
  }, {
    name: t("auto.department_of_chemistry_cggcem"),
    category: 'Science',
    icon: Microscope,
    description: t("auto.organic_inorganic_and_physical_chemistry_with_advanced_635wqy"),
    color: 'from-primary to-highlight',
    highlights: `Department Started in 1947. Honours teaching started from 1976. P.G Course started from 1984. The Department of Chemistry was started in 1948 with introduction of the Intermediate Education in Science. Dr. (Mrs.) Rani Chakrovarti (Nee Mishra) was the founder Head and contributed to the introduction of B.Sc. course in 1966. Subsequently Professor Dr Sarojini Srivastava (1973–1991), Dr. Gomati Venkatraman (1991-2001) headed the department. Dr Sarojini Srivastava elevated to the post of Principal of the college (1991-95). The B.Sc. honours teaching in chemistry was started in 1976. The M.Sc. course in chemistry started in 1984. The department has the distinction of being the first in the country to introduce a new course M.Sc. in Herbal Chemistry in 2008. The course was granted by U.G.C. under its Innovative Programme. The teachers of the department are actively engaged in research works as is evident from the list of publications in standard journals and production of PhD. Three minor research projects financed by UGC were completed successfully and one Major Research Project is going on under Prof. (Dr.) Rani Azad. Department also conducted a large number of National symposium/seminar and workshop financed by the UGC and DST.`,
    id: 'chemistry'
  }, {
    name: t("auto.department_of_botany_telz6v"),
    category: 'Science',
    icon: Microscope,
    description: t("auto.plant_sciences_biodiversity_and_environmental_studies_1tbq7z4"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Botany came into existence in 1947. B.Sc. (Hons) Classes started in 1976. The department of Botany was established along with Zoology as Department of Biology in 1948. The Department of Biology flourished under the headship of Ms. B. Joshua. This department was awarded with 'STAR DEPARTMENT' by UGC, New Delhi under CPE Programme in November – 2011. The teaching of B.Sc. course in Botany was started in 1966. B.Sc. (Hons) classes started only in 1976. Post graduate classes started in 1986 with Plant Pathology & Experimental Taxonomy as special papers. Post graduate course functioned smoothly till 1997.The department is selected as the star department under the CPE scheme of the UGC in Sept 2011. The results have been excellent and department has produced many toppers in Honours and P.G. level examinations. Many students of the Department have competed in medical entrance exams and now they are renowned doctors. Majority of the students opt for higher studies in Botany, Bio-technology, and Bio-Chemistry. As part of extension activities department encourages students to work towards environment awareness and protection under the banner of "Green Earth Brigade (GEB)". The GEB organizes special lectures, seminars and workshops regularly to promote awareness about environmental issues. A workshop on "Pollution and Public Health" was organized on November 29 – 30, 2011. Students of the department are also encouraged to participate in science seminars and conferences. Teachers of the department escort the students to various programmes on science and science related issues. Students attended the National Conference on 'Development of Agriculture in Bihar 2011' on the theme "A farmer's journey from field to industry" on 23rd & 24th September 2011.`,
    id: 'botany'
  }, {
    name: t("auto.department_of_zoology_en0bgv"),
    category: 'Science',
    icon: Microscope,
    description: t("auto.animal_biology_physiology_and_biodiversity_studies_ql35a"),
    color: 'from-primary to-highlight',
    highlights: `Department of Zoology started as part of Biology Department in 1948. The department was bifurcated from the Botany department and in 1966 established as an independent department of Zoology. Department offers teaching of B.Sc. (Hons) in Zoology course and Zoology subsidiary. Intermediate level classes were discontinued in 2008 under the policy decision of Govt. of Bihar. Along with quality teaching the department offers good facility of books through a seminar library and well equipped laboratory. The department organizes educational tours for the students as well. Students result in the final university examination are excellent. A good number of girls go for higher education to different branches like microbiology, biotechnology, biochemistry at national universities. Students actively participate in the extracurricular and cocurricular of the college and university.`,
    id: 'zoology'
  }, {
    name: t("auto.department_of_psychology_mttr6z"),
    category: 'Social Science',
    icon: Users,
    description: t("auto.human_behavior_mental_processes_and_psychological_research_cmybsr"),
    color: 'from-primary to-highlight',
    highlights: `The department was established with the inception of the college in the year 1946. Dr. Sharda Sinha was the founding head of the department. Currently,Dr. Namrata is heading the department. Department has two permanent faculties named Nidhi Singh and Dr. Namrata who are working since July 2017. It has five guest faculties. The department aims to enhance the growth of Psychology as a subject and profession. It introduces various Psychological techniques to understand human behavior in different settings and tries to adequately skill students in taking Psychology to the communities and fit market demands and enrich the personality using Psychology in everyday life. It also aims to improve the mental health of the students by training students to apply Psychology for self and other's benefit.

Department also organizes Guidance, Counselling, and Mental Health Services for college students. Invited Lectures & Workshops are also frequently organized. It offers Mental Health Check-ups, Personality assessments, and Interest Tests for college students. It observes important days like World Mental Health Day and World Suicide Prevention Day etc. Department offers UG and PG courses in Psychology.`,
    id: 'psychology'
  }, {
    name: t("auto.department_of_sociology_5dwsz0"),
    category: 'Social Science',
    icon: Users,
    description: t("auto.social_structures_institutions_and_cultural_studies_fa6whl"),
    color: 'from-primary to-highlight',
    highlights: `Department of Sociology was established in 1963. It serves maximum number of students in the college. It has a continued tradition of scholarship and research since its inception. Two teachers of the department became the Principal of the college. Three teachers were elevated as the heads of PG Department of Sociology, Patna University during different periods. Prof. Phullara Sinha was the founder Head of the Department. She later elevated to the University Department as the Head. She came back to college as the Principal in 1999. Prof. Archana Sinha, became the second Head of the Dept. in 1965 and subsequently elevated to the post of Principal of the College in 1995. In 1998 she joined the P G department of Patna University as the Head of the PG Dept. of Sociology. Dr Dharmshila Prasad of the department has been selected as the Head of the PG Dept. of Sociology, Patna University and will be joining soon. Department has started two post graduate diploma courses e.g. one year Post Graduate Diploma in Women & Child Welfare (PGDWCW) and Post Graduate Diploma in Population Education (PGDPE) in 2002. The three years Bachelor in Social Work (BSW) was started in 2007. The Postgraduate teaching started in the Department in 1984.`,
    id: 'sociology'
  }, {
    name: t("auto.department_of_economics_1aeg9mc"),
    category: 'Social Science',
    icon: Briefcase,
    description: t("auto.economic_theory_policy_analysis_and_financial_studies_1asjrla"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Economics was founded in 1946. Mrs. Ramola Nandi was the founder head of the department. She became the Principal of the college (1947 – 31 Dec 1972). Dr. (Mrs.) Asha Lata Bose took over charge as the Head of Department in 1951 and also served the college as the Principal (Jan 1972 – 31 Dec 1977). Subsequently Dr Maya Prasad (Oct 1973), Dr. Usha Devi (Feb 1989) and Mrs Bharati Bagchi (Dec 1994) were designated as heads of the department. Dr Asha Singh took over charge as Head in October, 2000. The Postgraduate teaching started in the Department in 1984. Department of Economics is the mentor of two self financing/vocational courses e.g. B. Com. and BBA which started in 2002 and 2004 respectively. The Department of Economics works in tune with the mission and objective of the college by providing quality instruction to students and helps them adopt critical, creative and research aptitudes along with profound social commitment and capability to contribute to socio-economic development of the nation.

This department was awarded with 'STAR DEPARTMENT' by UGC, New Delhi under CPE Programme in November – 2011`,
    id: 'economics'
  }, {
    name: t("auto.department_of_history_1y0j8ve"),
    category: 'Social Science',
    icon: BookOpen,
    description: t("auto.ancient_medieval_and_modern_history_with_research_vk3ow1"),
    color: 'from-primary to-highlight',
    highlights: `The Department of History was started in the year 1946 since the inception of this College, but three year Degree Honours course in History started on regular basis in the year 1968. Mrs. Jyotirmayee Basu was the founder Head of the Department. Subsequently, Dr Mala Ghosh and Dr Ruby Roy were designated as heads of the Department. Dr. Mala Ghosh later elevated as the Principal of this College in the year 1985.Dr (Prof.) Jayashri Mishra took over charge as Head of the Department in 1998. In 1984 Post-Graduate teaching was started, but it could not be continued further after 1986 due to paucity of teachers and apathy of the state government to create new posts. History has been a very popular subject and students opt this in large numbers.`,
    id: 'history'
  }, {
    name: t("auto.department_of_philosophy_1jqnhjb"),
    category: 'Humanities',
    icon: BookOpen,
    description: t("auto.philosophy_ethics_and_critical_thinking_development_8g4s09"),
    color: 'from-primary to-highlight',
    highlights: 'Department of Philosophy is one of the oldest departments of the college, which started with the establishment of the college in 1946. Dr. Anima Sengupta was the founder head of the department. The department offers B.A. (Hons) and Subsidiary Courses. There are three faculty members working in the department. Dr. Suchita Arpan, Asst. Professor working as HoD, Ms. Ranjana Yadav and Dr. Sanjay Kumar Priyadarshi as Asst. Professor. The department works towards quality teaching. The faculty members try their best to maintain the quality of education and make efforts to change the potentiality of students into their actuality. The aims and objectives of the department are to impart a quality education.',
    id: 'philosophy'
  }, {
    name: t("auto.department_of_urdu_1kl8r8e"),
    category: 'Humanities',
    icon: BookOpen,
    description: t("auto.urdu_language_literature_and_cultural_studies_avtmpi"),
    color: 'from-primary to-highlight',
    highlights: 'The department of Urdu started in 1946 with introduction of Intermediate Education in Arts. Mrs. Quraisha Hussain was the founder Head of the Department and she was also elevated as the Principal of the college. Subsequently Dr. Akhatar Jahan and Dr. Syeda Begum took charge as respective heads. ',
    id: 'urdu'
  }, {
    name: t("auto.department_of_home_science_kj3hoz"),
    category: 'Social Science',
    icon: Award,
    description: t("auto.home_management_nutrition_and_family_welfare_studies_at4s3v"),
    color: 'from-primary to-highlight',
    highlights: 'The Home Science Department focuses on family welfare, nutrition, child development, and home management for holistic development.',
    id: 'home-science'
  }, {
    name: t("auto.department_of_music_k7n32h"),
    category: 'Fine Arts',
    icon: Music,
    description: t("auto.vocal_and_instrumental_music_with_performance_oriented_ihcq9p"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Music was established in our college in the year 1949 with Smt Shanti Goverdhan as the founder Head. Subsequently Prof. Deepali Das and took charge as the Head of the Department. Prof Girija Pandey later elected as the Member of Parliament. Dr Arvind Kumar is the present Head. The department imparts Music teaching at BA Honours and Subsidiary as well as at Post Graduate levels. Post graduate teaching in music has started from session 2010-12. This is the only department that imparts teaching of music at UG & PG levels in the entire Patna University.`,
    id: 'music'
  }, {
    name: t("auto.department_of_political_science_1x2cnh1"),
    category: 'Social Science',
    icon: Users,
    description: t("auto.political_theory_governance_and_public_administration_152zp3v"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Political Science came into existence in the Year 1946 since the inception of this college. Honours teaching started in the year 1976. Mrs. Bhagwati Singh (1946-56) was the founder Head of the Department. Subsequently Dr Sarojini Sharan (1956-77), Mrs. Annapurna Devi (1977-94), Dr. Niroj Sinha (1994-99), and Dr. Lila Sinha (1999-2005) were designated as heads of the Department. Dr. Niroj Sinha was later elevated as the Principal of the College in the year 1999. Dr Shashi Sharma took over charge as Head of the Department in August, 2005.The Department started Postgraduate teaching from the Session 1984-1986 and continued till 1992.
The 'Remedial Coaching at Undergraduate level for SCs/ STs OBC, and Minority Communities' students under UGC scheme, has been started by the Department since December,2010 .The' Students' Counseling Centre' has been established in September 2011, which serves all students of the College. The Department has planed to publish a monthly News Bulletin 'Self Expression-Ek Abhivyakti'. All teachers of the Department are sincerely engaged in scholarly pursuit.
The Department has been maintaining its reputation of high standard and discipline since its inception. Academic as well as extracurricular performance of our students is consistently good and some of them have secured good ranks in the university examinations. The UGC also appreciated the achievements of the department and allocated substantial grant under XI plan.`,
    id: 'political-science'
  }, {
    name: t("auto.department_of_bba_tp2g95"),
    category: 'Vocational',
    icon: Briefcase,
    description: t("auto.business_administration_management_and_leadership_studies_1r8ynd1"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Bachelor of Business Administration (B.B.A.) is one of the most active and vibrant department of the college. With the sincere efforts of Prof. (Dr.) Asha Singh and support of the then Principal Prof. (Dr.) SukhadaKumari, this department was started under the parent department of Economics in 2006. This department began its first academic session after the approval of Human Recourse department, Government of Bihar and Syndicate, Patna University, Patna. The total number of seats approved is 60 only. The demand ratio 1:7 shows that the pressure for admission is very high for this course.

ELIGIBILITY FOR ADMISSION :
Candidates seeking admission to the first of the Degree of Bachelor of Business Administration will be required to have passed with a minimum of 45% marks, the Intermediate Examination in Arts I Science I Commerce of a Board / University established or incorporated by law or any other examination recognised by the University as equivalent thereto.

Admission to the B.B.A. course shall be made on the basis of Merit List prepared after the Entrance test, including written and viva-voce examinations, to be conducted by the College.

The reservation of seats for the course shall be as per rules of the State Government I Patna University for SC, ST and OBC.

All candidates seeking admission to the course shall pay full fees as prescribed in the regulations or modified from time to time under the provision of the regulations.

STRUCTURE OF THE COURSE :
A candidate for the B.B.A. examination shall be required to offer and be examined in 16 papers according to the following structure :

SUBSIDIARY PAPERS
YEAR
HONOURS PAPERS
SUBSIDIARY PAPERS
I Year
1. Principals of Management
2. Organisational Behaviour
3. Managerial Economics
4. Business Mathematics and Statistics
I. Business Organisation
II. Financial Accounting

II Year
5. Communication & Management Information System
6. Cost and Management Accounting
7. Legal Aspects of Business
8. Computer Applications in Business
I. Business Environment
II. Entrepreneurship Development Programme

III Year
9. Financial Management
10. Marketing Management
11. Personnel Management
12. Project Report (On-the-Job-Training)

After the second year annual examination, each student shall undergo a Practical Training of eight weeks duration in an approved business / industrial / service organization and submit at least two copies of the Summer Training Report to the Head of the Department at least 15 days before the date of commencement of the final year examinations. The Summer Training Report shall carry 100 marks and it shall be evaluated for 60 marks by two external examiners to be appointed by the University and 40 marks shall be awarded on the basis of their internal assessment.

The medium of instruction shall be English / Hindi.

COURSE OBJECTIVE :
Three year degree course in B.B.A. Hons. has been designed mainly to create a sound base for young women professionals with sufficient training in the the art of business management and entrepreneurship. This course aims at producing a competent and confident group of young women executive, under the fast-changing and rapidly expanding global economy, ready to accept challenges and responsibilities.

PRE – REQUISTE FOR ADMISSION :
10+2 in any discipline.

ENTRANCE TEST :
The duration of the entrance test will be 60 minutes. The test will, have both subjective and objective types of questions. It will be followed by an interview with the candidates. The test will consist of :
- General Awareness
- English language
- Aptitude Assessment

Provisional admission is granted for a period of 15 days only. Fees once paid will not be refunded . Those who wish to leave the course should do before the completion of one month of admission. Those who leave afterwards will have to pay the fees for the entire course (i.e. of 3 years). Only those who wish to complete the course are encouraged to apply.

DISCIPLINE :
- Student are expected to attend the lectures and tutorials regularly punctually.
- No visitors for students are allowed during lecture hours.
- No books, magazines, newspapers or notices for the notice board will be brought to the college without the approval of the Principal.
- Students will wear the College identity card around the neck in the college premises.
- Mobile phones are not allowed in the college premises.
- 75% attendance is compulsory. (60% attendance for those with medical reasons, a medical certificate to be submitted at the time of illness.)

LIBRARY :
There is a separate library and Reading Room for the B.B.A. Students. They must abide by the rules and regulations laid down by the college for the use of library :
- Strict silence will be observed at all time in the Library.
- Membership is obligatory for all students.
- Students will apply for books in the prescribed form by 2 P.M.
- Books from the General Library are loaned for a week.
- Students are requested to use books with care. They will held responsible for mishandling.
- Students who fail to return books at the prescribed time will pay a fine of Re. 10/- Per day.
- Library books are not to be lent by students to anyone in the College or outside the College.
- Students will use the catalogue to guide them in the choice of books.
- No magazines or papers of the Library will be lent for home use.
- All library Rules and Regulations must be strictly followed in the Library.`,
    id: 'bba'
  }, {
    name: t("auto.department_of_bca_tp2ga0"),
    category: 'Vocational',
    icon: Target,
    description: t("auto.computer_applications_programming_and_software_fundamentals_t9xhnm"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Computer Applications runs two programmes, Bachelor in Computer Applications (BCA) and Certificate Course in Computer Applications. Prof. Dr. Padmavathy Srinivasan, Head, Department of Physics was the founder coordinator of this programme. Dr. Manish Kumar Verma, Assistant Professor, Department of Physics is the present coordinator of the department.

The department runs on self financing basis. The department has 10 teachers. The students are doing extremely well in job market as software developer and analyst. The department has conducted UGC Refresher courses on Computers and e- Learning for university and college teachers for the Academic staff college, Patna University.

Academic Programmes / Courses :
1. Three Year Degree Honours (Vocational) Course (B.C.A.)
Seats - 60

2. Certificate Course in Computer Applications
A 45 days Short-Term College Level Certificate Course | Seats - 60`,
    id: 'bca'
  }, {
    name: t("auto.department_of_bsw_tp2goe"),
    category: 'Vocational',
    icon: Users,
    description: t("auto.social_work_education_community_engagement_and_welfare_kiyh6f"),
    color: 'from-primary to-highlight',
    highlights: `Bachelor of Social Work (BSW) is one of the most potential career course which have immense professional opportunities to flourish in future. Students after passing this BSW Course may get placement in NGOs, State & Central Government Welfare Departments and in Social Research Projects too. This course is very fruitful & impotent in the development of the society specifically the underprivileged masses.

Recognition of the Course : B.S.W. course was started in the year 2007 with the approval vide, Chanceller's office, Letter No. PU-44/2007-2442/GS(1), Dated : 20-07-2007.

Duration of the Course : The Bachelor of Social Work (Hons.) Course shall cover a period of three academic years and shall be known as B.S.W. (Hons.) Part-I, Part-II and Part-III respectively, during the three consecutive years of the course.`,
    id: 'bsw'
  }, {
    name: t("auto.department_of_bcom_1kks6p7"),
    category: 'Vocational',
    icon: Briefcase,
    description: t("auto.commerce_accounting_taxation_and_business_operations_1y9r69a"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Bachelor of Commerce (B.Com.) is one of the most active and vibrant department of the college. With the sincere efforts of Prof. (Dr.) Asha Singh and support of the then Principal Prof. (Dr.) Prof. Manju Rani Sinha this department was started under the parent department of Economics in 2002 (Dec.). This department began its first academic session after the approval of Human Recourse department, Government of Bihar and Syndicate, Patna University, Patna. The total number of seats approved was 250 only. The demand ratio 1:7 shows that the pressure for admission is very high for this course.

The Department of Commerce directs its efforts to support the missions of the college by providing quality instruction to students to prepare them for successful careers, help them adopt critical, creative and research aptitudes along with profound social commitment and capability to contribute to socio-economic development, prepare them to be actively engaged with policy issues in local, national, and global communities, engaging them in scholarly activities to maintain academic excellence and to advance knowledge in fields of specialization of departmental faculty.`,
    id: 'bcom'
  }];
  const categories = [
    { id: 'All', key: 'all', icon: GraduationCap },
    { id: 'Humanities', key: 'humanities', icon: BookOpen },
    { id: 'Science', key: 'science', icon: Microscope },
    { id: 'Social Science', key: 'socialScience', icon: Users },
    { id: 'Fine Arts', key: 'fineArts', icon: Palette },
    { id: 'Vocational', key: 'vocational', icon: Briefcase },
  ];
  const selectedDepartment = departments.find(department => department.id === selectedDepartmentId);
  const selectedFaculty = selectedDepartment ? getDepartmentFaculty(selectedDepartment.id) : [];
  const heads = selectedFaculty.filter(member => member.isHOD);
  const visibleDepartments = activeCategory === 'All' ? departments : departments.filter(department => department.category === activeCategory);
  const activeCategoryKey = categories.find(category => category.id === activeCategory).key;

  return (
    <Dialog.Root open={Boolean(selectedDepartment)} onOpenChange={open => { if (!open) setSelectedDepartmentId(null); }}>
      <Helmet>
        <title>{t('auto.departments_magadh_mahila_college_6mhj9u')}</title>
        <meta name="description" content="Explore the academic departments and faculty at Magadh Mahila College." />
      </Helmet>
      <main className="faculty-departments mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">{t('auto.departments_pn2w2a')}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">{t('auto.discover_our_comprehensive_academic_departments_offering_quality_16jogpe')}</p>
        </header>
        <div className="mb-5 flex flex-wrap justify-center gap-3" role="group" aria-label={t('facultyDirectory.filterDepartments')}>
          {categories.map(({ id, key, icon: Icon }) => (
            <button key={id} type="button" aria-pressed={activeCategory === id} onClick={() => setActiveCategory(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${activeCategory === id
                ? 'border-navbar bg-navbar text-navbar-foreground' : 'border-border bg-background text-foreground hover:bg-secondary'}`}>
              <Icon aria-hidden="true" className="h-4 w-4" />{t(`facultyDirectory.categories.${key}`)}
            </button>
          ))}
        </div>
        {activeCategory !== 'All' && <p className="mb-6 text-center text-base text-muted-foreground">{t(`facultyDirectory.categoryDescriptions.${activeCategoryKey}`)}</p>}
        <p role="status" aria-live="polite" className="mb-6 text-center text-sm text-muted-foreground">{t('facultyDirectory.departmentCount', { count: visibleDepartments.length })}</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleDepartments.map(department => {
            const Icon = department.icon;
            return (
              <button key={department.id} type="button" data-department-id={department.id} aria-haspopup="dialog"
                onClick={event => { opener.current = event.currentTarget; setSelectedDepartmentId(department.id); }}
                className="faculty-card h-full rounded-2xl border border-border bg-secondary/60 p-7 text-left shadow-sm">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navbar text-navbar-foreground"><Icon aria-hidden="true" className="h-7 w-7" /></span>
                <h2 className="text-xl font-bold text-foreground">{department.name}</h2>
                <p className="mt-3 text-base text-muted-foreground">{department.description}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-foreground underline decoration-primary underline-offset-4">{t('facultyDirectory.viewDetails')}</span>
              </button>
            );
          })}
        </div>
      </main>
      {selectedDepartment && <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="faculty-departments fixed left-1/2 top-1/2 z-[70] max-h-[90vh] w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl bg-background p-5 text-foreground shadow-2xl sm:p-8"
          onCloseAutoFocus={event => { event.preventDefault(); opener.current?.focus(); }}>
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="pr-3 text-2xl font-bold sm:text-3xl">{selectedDepartment.name}</Dialog.Title>
              <Dialog.Description className="mt-3 text-base text-muted-foreground">{selectedDepartment.description}</Dialog.Description>
            </div>
            <Dialog.Close asChild><button type="button" aria-label={t('facultyDirectory.close')}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-foreground hover:bg-muted">
              <X aria-hidden="true" className="h-5 w-5" />
            </button></Dialog.Close>
          </div>
          {heads.length > 0 && <p className="mb-6 rounded-xl border border-border bg-secondary p-4 text-base">
            <span className="font-semibold">{t('facultyDirectory.hod')}: </span>
            {heads.map(member => getFacultyName(member, t)).join(', ')}
          </p>}
          <section className="mb-8 rounded-xl border-l-4 border-primary bg-secondary/60 p-5">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Star aria-hidden="true" className="h-5 w-5" />{t('auto.highlights_of_the_department_tukjpu')}</h3>
            <div className="whitespace-pre-line text-base leading-relaxed">{selectedDepartment.highlights}</div>
          </section>
          <section aria-labelledby="department-faculty-title">
            <h3 id="department-faculty-title" className="mb-6 flex items-center gap-2 text-2xl font-bold"><Users aria-hidden="true" className="h-6 w-6" />{t('facultyDirectory.members')}</h3>
            {selectedFaculty.length ? <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {selectedFaculty.map(member => <FacultyCard key={member.id} faculty={member} headingLevel={4} />)}
            </div> : <p className="rounded-xl border border-dashed border-border p-6 text-center">{t('auto.faculty_details_will_be_updated_soon_1k9l960')}</p>}
          </section>
        </Dialog.Content>
      </Dialog.Portal>}
    </Dialog.Root>
  );
};
export default Departments;
