import i18next from "i18next";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Palette, Microscope, Users, Briefcase, X, GraduationCap, Award, Target, Music, Sparkles, Zap, Star } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
import { AnimatedCard, AnimatedIcon, FloatingElement, GradientText, StaggerContainer, FadeInUp, ScaleIn, HoverGlow, BlurFadeIn, SpotlightEffect } from '../components/animations/AnimatedCard';
const Departments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const departments = [{
    name: i18next.t("auto.department_of_hindi_k5iwa2"),
    category: 'Humanities',
    icon: BookOpen,
    description: i18next.t("auto.comprehensive_study_of_hindi_language_literature_and_sk8gaz"),
    color: 'from-primary to-primary',
    highlights: `मगध महिला महाविद्यालय में हिंदी विभाग की स्थापना सन 1946 में हुई । प्रारंभ में स्नातक एवं इंटरमीडिएट कक्षाओं तक ही हिंदी विषय का पठन-पाठन समिति रहा । सन 1960 से स्नातक सम्मान का अध्यापन कार्य प्रारंभ किया गया।

यह विभाग संपूर्ण महाविद्यालय की छात्राओं की भाषायी रचना कौशल के प्रति सजग भूमिका का निर्वहन करता है। इस कार्य हेतु विभिन्न स्तरीय रचनात्मक प्रतियोगिताएं आयोजित की जाती है तथा छात्राओं का उत्साहवर्धन करने के लिए पुरस्कार एवं प्रमाण पत्र भी प्रदान किए जाते हैं । राष्ट्रीय एवं अंतर्राष्ट्रीय स्तर पर आयोजित होने वाले साहित्यिक एवं प्रतियोगी आयोजनों में सहभागिता हेतु विभाग द्वारा छात्राओं को प्रोत्साहित एवं प्रशिक्षित किया जाता है।`,
    faculty: [{
      name: i18next.t("auto.dr_shipra_prabha_1eqwrhg"),
      designation: 'HOD, Hindi',
      image: 'Dr. Shipra Prabha, HOD, Hindi.jpeg'
    }, {
      name: i18next.t("auto.dr_asha_kumari_d2ej8v"),
      designation: 'Assistant Professor, Hindi',
      image: 'Dr. Aasha Kumari, Assistant Professor, Hindi.jpeg'
    }, {
      name: i18next.t("auto.dr_jyoti_dubey_1tqj3df"),
      designation: 'Assistant Professor, Hindi',
      image: 'Dr. Jyoti Dubey, Assistant Professor, Hindi.jpeg'
    }, {
      name: i18next.t("auto.dr_preeti_kumari_urbrsb"),
      designation: 'Assistant Professor, Hindi',
      image: 'Dr. Preeti Kumari, Assistant Professor, Hindi.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_english_88eeyi"),
    category: 'Humanities',
    icon: BookOpen,
    description: i18next.t("auto.english_language_literature_and_communication_skills_development_5ynr8u"),
    color: 'from-primary to-highlight',
    highlights: `The Department of English is one of prestigious Departments that came into being with the inception of the college itself in 1946. Since then, the department has been adorned by several gems like Prof Illa Mullick, Dr Farida Kalim, Dr Zaira Kalim, Dr Manju Rani Sinha, Dr Rashmi Zafar, Dr Rekha Jha. In 2009 the baton was passed on to Dr Kamlesh Kumari who headed the Department till July 2015. Dr Archana Jaiswal is the Head of Department at present. Since its inception the Department has been incessantly striving towards the all round development of the students with a missionary zeal. Recognising the global importance of English, the Deptt. aims at the enhancement of all the four skills L, S, R, W. To reach the target, not only the students but the teachers also try to improve and enrich themselves. They attend seminars and conferences regularly and present papers. They are engaged in publications and research works. For the inculcation and enhancement of language of the students, several activities are organized by the Deptt. The department runs Language Proficiency Course in two languages: German and English.

VISION: The Department aims at:
a) Enhancing the language ability of the students in the department and the feel for literature
b) Producing rankers in the university list
c) All round personality development of the students so that they can meet the challenging demands of life and be the successful responsible citizens of the nation.`,
    faculty: [{
      name: i18next.t("auto.dr_archana_jaiswal_16hzx8g"),
      designation: 'Associate Professor, HOD English',
      image: 'Dr. Archana Jaiswal, Associate Professor, HOD English.jpeg'
    }, {
      name: i18next.t("auto.dr_rajiv_kumar_singh_cnsc1s"),
      designation: 'Assistant Professor, English',
      image: 'Dr. Rajiv Kumar Singh, Assistant Professor, English.jpeg'
    }, {
      name: i18next.t("auto.dr_anamika_1plfpel"),
      designation: 'Guest Faculty, English'
    }]
  }, {
    name: i18next.t("auto.department_of_persian_b5ffy2"),
    category: 'Humanities',
    icon: BookOpen,
    description: i18next.t("auto.classical_persian_language_literature_and_cultural_studies_17161jv"),
    color: 'from-primary to-highlight',
    highlights: 'Department of Persian was established in 1957 by Late Prof. Bilquis Afaque, who was the founder teacher of this department followed by Prof. Khursheed Jahan. She joined the P.G. department in 1973. Dr. Shahida Khanam is the present head of the department.',
    faculty: [{
      name: i18next.t("auto.dr_shahida_khanam_133t7gj"),
      designation: 'HOD, Persian'
    }]
  }, {
    name: i18next.t("auto.department_of_sanskrit_ndfog3"),
    category: 'Humanities',
    icon: BookOpen,
    description: i18next.t("auto.sanskrit_language_classical_texts_and_indian_philosophical_nullw2"),
    color: 'from-primary to-highlight',
    highlights: 'Department of Sanskrit started with the inception of the college in 1946. In 1985 Dr. Sudha Rani joined as the H.O.D of the Department. On 1st January 1999 she was elevated to the post of Head of the University Department of Sanskrit and Prof. (Dr.) Pramila Gupta succeeded as the Head in 1996. Current Head: Dr. Shipra Prabha.',
    faculty: [{
      name: i18next.t("auto.dr_shipra_prabha_1eqwrhg"),
      designation: 'HOD, Sanskrit',
      image: 'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/faculty/Dr.%20Shipra%20Prabha%2C%20HOD%2C%20Hindi.jpeg'
    }, {
      name: i18next.t("auto.dr_bharti_kumari_34sh8w"),
      designation: 'Guest Faculty, Sanskrit'
    }]
  }, {
    name: i18next.t("auto.department_of_mathematics_1w45hfg"),
    category: 'Science',
    icon: Target,
    description: i18next.t("auto.pure_and_applied_mathematics_with_emphasis_on_1ts8mj8"),
    color: 'from-primary to-highlight',
    highlights: `Highlights of the Department

The Department of Mathematics in Magadh Mahila College was established in 1948. The first head of the department of Mathematics was Professor Munna Rani. Professor Chandra Kala Rajgaria and Professor Shipra Biswas headed the department successively. Professor Dr. Rashmi Jaishwal took over headship from Professor Shipra Biswas in October 2003. She retired in September 2009. Dr Poonam Kumari is the present Head of the department. Department teaches Mathematics to the students of both Science and Arts faculty. Students of the department excel in university examination and many of them secure top ranks. Their performance is very good in future academic endeavor as well as the job market.`,
    faculty: [{
      name: i18next.t("auto.dr_poonam_kumari_3gi7s6"),
      designation: 'Professor, HOD, Mathematics',
      image: 'Poonam Kumari, Professor, HOD,  Mathematics.jpeg'
    }, {
      name: i18next.t("auto.dr_binay_kumar_c00ops"),
      designation: 'Assistant Professor, Department of Mathematics',
      image: 'Dr. Binay Kumar, Assistant Professor, Department of Mathematics.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_statistics_1p0o5pp"),
    category: 'Science',
    icon: Target,
    description: i18next.t("auto.statistical_methods_probability_and_data_analysis_199hs5y"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Statistics in Magadh Mahila College came into existence in July, 2014. The teaching of Statistics at undergraduate level was started in Magadh Mahila College from academic session 2014-2015 with the proper permission from the Government of Bihar. Statistics is a very important subject for science as well as social science students. Till now there is no regular teacher in the Department. Prof. (Dr.) Abha Sharan a faculty member of Physics Department, was the founder Head of the Statistics Department from July 2014 to 30 Nov. 2017. On 1 December 2017, after the retirement of Prof. (Dr.) Abha Sharan, Ms. Sonu Rani Assistant Professor, Department of Physics became the Head of the Statistics Department.`,
    faculty: [{
      name: i18next.t("auto.dr_madhu_kumari_gupta_vqlz92"),
      designation: 'Assistant Professor, Statistics',
      image: 'Dr. Madhu Gupta, Assistant Professor, Chemistry.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_physics_1y6iif7"),
    category: 'Science',
    icon: Microscope,
    description: i18next.t("auto.fundamental_and_applied_physics_with_modern_laboratory_7vnqhm"),
    color: 'from-primary to-highlight',
    highlights: `The department of Physics in Magadh Mahila College was established in the year 1948 with the introduction of Intermediate teaching in science. It has the distinction to be the first all women institution in Bihar, where teaching of science was introduced as early as in 1948. This department was awarded with 'STAR DEPARTMENT' by UGC, New Delhi under CPE Programme in November – 2011. The B.Sc. classes were started in 1966 and Honours teaching in the year 1980. Mrs Pratima Sanyal was the founder Head of the department. She was taught by the legendary Physicist Professor S.N. Bose of Bose Statistics fame as a M.Sc. student at Presidency College, Calcutta University. On her retirement in 1979, Professor Padmavathy Srinivasan, became the HOD (1979-2004). From the very beginning the department was well known for its high standard and discipline. Our results have been excellent and our students regularly obtain top ranks in the University. The department strives to inspire the students to develop a keen interest in the subject. Their experimental skills are carefully nurtured and supervised by the teachers. Many of our ex students are actively engaged in research in Pure and Applied Science in national institutes of repute viz IITs and IISc as well as abroad. The students passed out of this department are very well established and holding high positions in their respective organizations. The teachers published research papers in national and international journals of repute. The Department of Physics also worked as the mentor of Computer Applications Centre in the college. Dr Padmavathy Srinivasan along with Dr Dolly Sinha established the first Computer Laboratory in the college and introduced the teaching of Bachelor of Computer Applications (B.C.A.) course in the college in the year 2000 and of Post Graduate Diploma in Computer Applications (PGDCA) in 2004. Professor Srinivasan also served as the Coordinator of B.C.A. course from 2000-04. She also deserves the credit for rejuvenating the Science Society of the college. As President of the society, she used to deliver and conduct a number of popular science lectures and activities for the benefit of all students and teachers of the college. Known for its high efficiency, the department of Physics is an invariably consulted and assigned responsibility such as admission, examination etc. Two teachers of the department became the Principal of the college. Professor Dr Kiran Aryani Mitra holds the office of the Principal from 2004 – 05. Dr Kiran Aryani Mitra later elevated and joined as the Head of the P.G. Department of Physics, Patna University in Nov 2009. Professor Dolly Sinha joined as Principal of the college on 03 June 2009 and is continuing. Professor Abha Sharan, the present head of the department is fully dedicated to teaching. She shares many administrative responsibilities of the college too, including managing the PGDCA course as its Coordinator from July 2008 and managing the Vocational Courses examination (2004- 2011). Another teacher of the department Dr Mamta Deepak manages the BCA and CIC courses as its Coordinator. She is also the Controller of Examination of Vocational Courses examination. The department is actively engaged in extension activities to promote scientific temperament and science related issues. Teachers and staff of the department volunteer in organizing preliminary examination of "International Olympiad in Physics" conducted by IAPT since 2000. Now we have also started conducting preliminary examination of International Olympiads in Chemistry, Biology, Astronomy and Junior Science since 2004. National Standard Examinations are nationwide examinations conducted by IAPT. These examinations are the FIRST and the ONLY SCREENING TESTS towards International Olympiads in the respective subjects. Department also conducts National Graduate Physics Examination for undergraduate students of different colleges of Bihar since 2004. Department conducted Physics Olympiad Exposure Camp in association with Homi Bhaba Centre for Science Education (HBCSE), Mumbai on Sept 26-27, 2011 for undergraduate teachers.`,
    faculty: [{
      name: i18next.t("auto.dr_sonu_rani_kgpk1a"),
      designation: 'HOD Physics',
      image: 'Dr. Sonu Rani, HOD Physics.jpeg'
    }, {
      name: i18next.t("auto.dr_manish_kumar_verma_jzs2rk"),
      designation: 'Assistant Professor, Physics',
      image: 'Dr. Manish Kumar Verma, Assistant Professor, Physics Coordinator, BCA.jpeg'
    }, {
      name: i18next.t("auto.dr_pankaj_kumar_baitha_1w2sks5"),
      designation: 'Assistant Professor, Physics',
      image: 'Dr. Pankaj Kumar Baitha, Assistant Professor, Physics.jpeg'
    }, {
      name: i18next.t("auto.dr_priti_mishra_f3ipev"),
      designation: 'Assistant Professor, Physics',
      image: 'Dr. Priti Mishra, Assistant Professor, Physics.jpeg'
    }, {
      name: i18next.t("auto.dr_kamad_nath_shandilya_1paxbi9"),
      designation: 'Guest Faculty, Physics'
    }]
  }, {
    name: i18next.t("auto.department_of_chemistry_cggcem"),
    category: 'Science',
    icon: Microscope,
    description: i18next.t("auto.organic_inorganic_and_physical_chemistry_with_advanced_635wqy"),
    color: 'from-primary to-highlight',
    highlights: `Department Started in 1947. Honours teaching started from 1976. P.G Course started from 1984. The Department of Chemistry was started in 1948 with introduction of the Intermediate Education in Science. Dr. (Mrs.) Rani Chakrovarti (Nee Mishra) was the founder Head and contributed to the introduction of B.Sc. course in 1966. Subsequently Professor Dr Sarojini Srivastava (1973–1991), Dr. Gomati Venkatraman (1991-2001) headed the department. Dr Sarojini Srivastava elevated to the post of Principal of the college (1991-95). The B.Sc. honours teaching in chemistry was started in 1976. The M.Sc. course in chemistry started in 1984. The present head is Dr. Shyam Deo Yadav. The department has the distinction of being the first in the country to introduce a new course M.Sc. in Herbal Chemistry in 2008. The course was granted by U.G.C. under its Innovative Programme. The teachers of the department are actively engaged in research works as is evident from the list of publications in standard journals and production of PhD. Three minor research projects financed by UGC were completed successfully and one Major Research Project is going on under Prof. (Dr.) Rani Azad. Department also conducted a large number of National symposium/seminar and workshop financed by the UGC and DST.`,
    faculty: [{
      name: i18next.t("auto.dr_shyam_deo_yadav_z16psm"),
      designation: 'HOD, Chemistry',
      image: 'Prof. Shyam Deo Yadav, HOD, Chemistry.jpeg'
    }, {
      name: i18next.t("auto.dr_usha_kumari_ipthiz"),
      designation: 'Associate Professor, Chemistry',
      image: 'Dr. Usha Kumari, Associate Professor, Chemistry.jpeg'
    }, {
      name: i18next.t("auto.dr_deepak_kumar_aiuezn"),
      designation: 'Assistant Professor, Chemistry',
      image: 'Dr Deepak Kumar, Assistant Professor, Chemistry.jpeg'
    }, {
      name: i18next.t("auto.dr_amrita_prasad_1m3y5je"),
      designation: 'Assistant Professor, Chemistry',
      image: 'Dr. Amrita Prasad, Assistant Professor, Chemistry.jpeg'
    }, {
      name: i18next.t("auto.dr_madhu_kumari_gupta_vqlz92"),
      designation: 'Assistant Professor, Chemistry',
      image: 'Dr. Madhu Gupta, Assistant Professor, Chemistry.jpeg'
    }, {
      name: i18next.t("auto.dr_reena_kumari_1owdvvt"),
      designation: 'Assistant Professor, Chemistry',
      image: 'Reena Kumari, Assistant Professor, Chemistry.jpeg'
    }, {
      name: i18next.t("auto.dr_archana_sinha_1mfbu1i"),
      designation: 'Assitant Professor, Chemistry',
      image: ''
    }, {
      name: i18next.t("auto.dr_priya_p6ftta"),
      designation: 'Guest Faculty, Chemistry'
    }, {
      name: i18next.t("auto.dr_sadhana_kumari_o6jb8"),
      designation: 'Guest Faculty, Chemistry'
    }]
  }, {
    name: i18next.t("auto.department_of_botany_telz6v"),
    category: 'Science',
    icon: Microscope,
    description: i18next.t("auto.plant_sciences_biodiversity_and_environmental_studies_1tbq7z4"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Botany came into existence in 1947. B.Sc. (Hons) Classes started in 1976. The department of Botany was established along with Zoology as Department of Biology in 1948. The Department of Biology flourished under the headship of Ms. B. Joshua. This department was awarded with 'STAR DEPARTMENT' by UGC, New Delhi under CPE Programme in November – 2011. The teaching of B.Sc. course in Botany was started in 1966. B.Sc. (Hons) classes started only in 1976. Post graduate classes started in 1986 with Plant Pathology & Experimental Taxonomy as special papers. Post graduate course functioned smoothly till 1997.Dr. Pushpanjali Khare is the present Head of the department. The department is selected as the star department under the CPE scheme of the UGC in Sept 2011. The results have been excellent and department has produced many toppers in Honours and P.G. level examinations. Many students of the Department have competed in medical entrance exams and now they are renowned doctors. Majority of the students opt for higher studies in Botany, Bio-technology, and Bio-Chemistry. As part of extension activities department encourages students to work towards environment awareness and protection under the banner of "Green Earth Brigade (GEB)". The GEB organizes special lectures, seminars and workshops regularly to promote awareness about environmental issues. A workshop on "Pollution and Public Health" was organized on November 29 – 30, 2011. Students of the department are also encouraged to participate in science seminars and conferences. Teachers of the department escort the students to various programmes on science and science related issues. Students attended the National Conference on 'Development of Agriculture in Bihar 2011' on the theme "A farmer's journey from field to industry" on 23rd & 24th September 2011.`,
    faculty: [{
      name: i18next.t("auto.dr_pushpanjali_khare_1x6i46f"),
      designation: 'Associate Professor, HOD Botany',
      image: 'Dr. Pushpanjali Khare, Associate Professor, HOD Botany.jpeg'
    }, {
      name: i18next.t("auto.dr_surendra_kumar_prasad_17ku7a8"),
      designation: 'Associate Professor, Botany',
      image: 'Surendra Prasad, Associate Prof, Botany Coordinator, B.Com..jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_zoology_en0bgv"),
    category: 'Science',
    icon: Microscope,
    description: i18next.t("auto.animal_biology_physiology_and_biodiversity_studies_ql35a"),
    color: 'from-primary to-highlight',
    highlights: `Department of Zoology started as part of Biology Department in 1948. The department was bifurcated from the Botany department and in 1966 established as an independent department of Zoology. Department offers teaching of B.Sc. (Hons) in Zoology course and Zoology subsidiary. Intermediate level classes were discontinued in 2008 under the policy decision of Govt. of Bihar. Along with quality teaching the department offers good facility of books through a seminar library and well equipped laboratory. The department organizes educational tours for the students as well. Students result in the final university examination are excellent. A good number of girls go for higher education to different branches like microbiology, biotechnology, biochemistry at national universities. Students actively participate in the extracurricular and cocurricular of the college and university.`,
    faculty: [{
      name: i18next.t("auto.dr_sujata_kumari_cy6mto"),
      designation: 'HOD Zoology',
      image: 'Dr. Sujata, HOD Zoology.jpeg'
    }, {
      name: i18next.t("auto.dr_maya_rani_1xnfb3x"),
      designation: 'Guest Faculty, Zoology'
    }, {
      name: i18next.t("auto.dr_arshi_rana_1g5f7pc"),
      designation: 'Guest Faculty, Zoology'
    }]
  }, {
    name: i18next.t("auto.department_of_psychology_mttr6z"),
    category: 'Social Science',
    icon: Users,
    description: i18next.t("auto.human_behavior_mental_processes_and_psychological_research_cmybsr"),
    color: 'from-primary to-highlight',
    highlights: `The department was established with the inception of the college in the year 1946. Dr. Sharda Sinha was the founding head of the department. Currently,Dr. Namrata is heading the department. Department has two permanent faculties named Nidhi Singh and Dr. Namrata who are working since July 2017. It has five guest faculties. The department aims to enhance the growth of Psychology as a subject and profession. It introduces various Psychological techniques to understand human behavior in different settings and tries to adequately skill students in taking Psychology to the communities and fit market demands and enrich the personality using Psychology in everyday life. It also aims to improve the mental health of the students by training students to apply Psychology for self and other's benefit.

Department also organizes Guidance, Counselling, and Mental Health Services for college students. Invited Lectures & Workshops are also frequently organized. It offers Mental Health Check-ups, Personality assessments, and Interest Tests for college students. It observes important days like World Mental Health Day and World Suicide Prevention Day etc. Department offers UG and PG courses in Psychology.`,
    faculty: [{
      name: i18next.t("auto.dr_namrata_y1tq7t"),
      designation: 'Assistant Professor, HOD, Psychology',
      image: 'Dr.Namrata, Assistant Professor, HOD,  Psychology.jpeg'
    }, {
      name: i18next.t("auto.ms_nidhi_singh_njcovg"),
      designation: 'Assistant Professor, Psychology',
      image: 'Ms. Nidhi Singh, Assistant Professor, Psychology.jpeg'
    }, {
      name: i18next.t("auto.dr_archana_kumari_1u97n4y"),
      designation: 'Assistant Professor, Psychology',
      image: 'Archana Kumari, Assistant Professor, Psychology.jpeg'
    }, {
      name: i18next.t("auto.dr_archana_bharti_4a5633"),
      designation: 'Assistant Professor, Psychology',
      image: 'Dr. Archana Bharti, Assistant Professor, Psychology.jpeg'
    }, {
      name: i18next.t("auto.dr_kavita_chowdhary_1h4cd60"),
      designation: 'Assistant Professor, Department of Psychology',
      image: 'Dr. Kavita Chowdhary, Assistant Professor, Department of Psychology.jpeg'
    }, {
      name: i18next.t("auto.dr_priyamvada_90l9ht"),
      designation: 'Assistant Professor, Psychology',
      image: 'Dr. Priyamvada, Assistant Professor, Psychology.jpeg'
    }, {
      name: i18next.t("auto.dr_ranjana_kumari_1kfe0z1"),
      designation: 'Assistant Professor, Psychology',
      image: 'Dr. Ranjana Kumari, Assistant Professor, Psychology.jpeg'
    }, {
      name: i18next.t("auto.dr_sonali_kumari_10hwkaq"),
      designation: 'Assistant Professor, Psychology',
      image: 'Dr. Sonali Kumari, Assistant Professor, Psychology.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_sociology_5dwsz0"),
    category: 'Social Science',
    icon: Users,
    description: i18next.t("auto.social_structures_institutions_and_cultural_studies_fa6whl"),
    color: 'from-primary to-highlight',
    highlights: `Department of Sociology was established in 1963. Dr. Binay Kumar Bimal is the present Head of the department. It serves maximum number of students in the college. It has a continued tradition of scholarship and research since its inception. Two teachers of the department became the Principal of the college. Three teachers were elevated as the heads of PG Department of Sociology, Patna University during different periods. Prof. Phullara Sinha was the founder Head of the Department. She later elevated to the University Department as the Head. She came back to college as the Principal in 1999. Prof. Archana Sinha, became the second Head of the Dept. in 1965 and subsequently elevated to the post of Principal of the College in 1995. In 1998 she joined the P G department of Patna University as the Head of the PG Dept. of Sociology. Dr Dharmshila Prasad of the department has been selected as the Head of the PG Dept. of Sociology, Patna University and will be joining soon. Department has started two post graduate diploma courses e.g. one year Post Graduate Diploma in Women & Child Welfare (PGDWCW) and Post Graduate Diploma in Population Education (PGDPE) in 2002. The three years Bachelor in Social Work (BSW) was started in 2007. The Postgraduate teaching started in the Department in 1984.`,
    faculty: [{
      name: i18next.t("auto.dr_binay_kumar_bimal_1uzsmiz"),
      designation: 'HOD,Professor, Department of Sociology,',
      image: 'Dr. Binay Kumar Bimal, Professor, Department of Sociology Bursar, MMC Coordinator, BSW.jpeg'
    }, {
      name: i18next.t("auto.dr_anju_kumari_1be98ec"),
      designation: 'Assistant Professor, Sociology',
      image: 'Anju Kumari, Assistant Professor, Sociology.jpeg'
    }, {
      name: i18next.t("auto.dr_archna_kumari_slgkoz"),
      designation: 'Assistant Professor, Sociology',
      image: 'Dr. Archna Kumari, Assistant Professor, Sociology.jpeg'
    }, {
      name: i18next.t("auto.dr_minu_minj_1ogfx1e"),
      designation: 'Assistant Professor, Sociology',
      image: 'Dr. Minu Minz, Assistant Professor, Sociology.jpeg'
    }, {
      name: i18next.t("auto.dr_reena_kumari_1owdvvt"),
      designation: 'Assistant Professor, Department of Sociology',
      image: 'Dr Reena kumari, Assistant Professor, Department of Sociology.jpeg'
    }, {
      name: i18next.t("auto.dr_rajendra_kumar_3inpbs"),
      designation: 'Assistant Professor, Sociology',
      image: 'Rajendra Kumar, Assistant Professor, Sociology.jpeg'
    }, {
      name: i18next.t("auto.dr_veena_kumari_1itoht9"),
      designation: 'Assistant Professor, Sociology',
      image: 'Dr. Veena Kumari, Assistant Professor, Sociology.jpeg'
    }, {
      name: i18next.t("auto.dr_madhavi_qut5pf"),
      designation: 'Guest Faculty, Sociology',
      image: ''
    }]
  }, {
    name: i18next.t("auto.department_of_economics_1aeg9mc"),
    category: 'Social Science',
    icon: Briefcase,
    description: i18next.t("auto.economic_theory_policy_analysis_and_financial_studies_1asjrla"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Economics was founded in 1946. Mrs. Ramola Nandi was the founder head of the department. She became the Principal of the college (1947 – 31 Dec 1972). Dr. (Mrs.) Asha Lata Bose took over charge as the Head of Department in 1951 and also served the college as the Principal (Jan 1972 – 31 Dec 1977). Subsequently Dr Maya Prasad (Oct 1973), Dr. Usha Devi (Feb 1989) and Mrs Bharati Bagchi (Dec 1994) were designated as heads of the department. Dr Asha Singh took over charge as Head in October, 2000,Dr. Sweta Sharan currently serves as the Head of the Department. The Postgraduate teaching started in the Department in 1984. Department of Economics is the mentor of two self financing/vocational courses e.g. B. Com. and BBA which started in 2002 and 2004 respectively. The Department of Economics works in tune with the mission and objective of the college by providing quality instruction to students and helps them adopt critical, creative and research aptitudes along with profound social commitment and capability to contribute to socio-economic development of the nation.

This department was awarded with 'STAR DEPARTMENT' by UGC, New Delhi under CPE Programme in November – 2011`,
    faculty: [{
      name: i18next.t("auto.dr_sweta_sharan_1ctiw6m"),
      designation: 'HOD, Economics',
      image: 'Sweta Sharan, HOD, Economics.jpeg'
    }, {
      name: i18next.t("auto.dr_ashish_kumar_1n4wtdh"),
      designation: 'Assistant Professor, Economics',
      image: 'Ashish Kumar, Assistant Professor, Economics.jpeg'
    }, {
      name: i18next.t("auto.dr_angur_kumari_1ep65x7"),
      designation: 'Assistant Professor, Economics',
      image: 'Dr Angur Kumari, Assistant Professor, Economics.jpeg'
    }, {
      name: i18next.t("auto.dr_chandan_chandra_chunna_1ul83jy"),
      designation: 'Assistant Professor, Economics',
      image: 'Dr. Chandan Chandra Chunna, Assistant Professor, Economics.jpeg'
    }, {
      name: i18next.t("auto.dr_mita_malkhandi_ye70tp"),
      designation: 'Assistant Professor, Economics',
      image: 'Dr. Mita Malkhandi, Assistant Professor, Economics.jpeg'
    }, {
      name: i18next.t("auto.dr_priyadarshini_44hdf0"),
      designation: 'Assistant Professor, Economics',
      image: 'Priyadarshini, Assistant Professor, Economics.jpeg'
    }, {
      name: i18next.t("auto.dr_deepali_kumari_13olsjo"),
      designation: 'Guest Faculty, Economics'
    }]
  }, {
    name: i18next.t("auto.department_of_history_1y0j8ve"),
    category: 'Social Science',
    icon: BookOpen,
    description: i18next.t("auto.ancient_medieval_and_modern_history_with_research_vk3ow1"),
    color: 'from-primary to-highlight',
    highlights: `The Department of History was started in the year 1946 since the inception of this College, but three year Degree Honours course in History started on regular basis in the year 1968. Mrs. Jyotirmayee Basu was the founder Head of the Department. Subsequently, Dr Mala Ghosh and Dr Ruby Roy were designated as heads of the Department. Dr. Mala Ghosh later elevated as the Principal of this College in the year 1985.Dr (Prof.) Jayashri Mishra took over charge as Head of the Department in 1998. In 1984 Post-Graduate teaching was started, but it could not be continued further after 1986 due to paucity of teachers and apathy of the state government to create new posts. History has been a very popular subject and students opt this in large numbers.`,
    faculty: [{
      name: i18next.t("auto.dr_rajesh_kumar_19g6hay"),
      designation: 'Guest Faculty, History'
    }, {
      name: i18next.t("auto.dr_deepika_singh_1hzwx9t"),
      designation: 'Guest Faculty, History'
    }, {
      name: i18next.t("auto.dr_sweta_kumari_xtec74"),
      designation: 'Guest Faculty, History'
    }]
  }, {
    name: i18next.t("auto.department_of_philosophy_1jqnhjb"),
    category: 'Humanities',
    icon: BookOpen,
    description: i18next.t("auto.philosophy_ethics_and_critical_thinking_development_8g4s09"),
    color: 'from-primary to-highlight',
    highlights: 'Department of Philosophy is one of the oldest departments of the college, which started with the establishment of the college in 1946. Dr. Anima Sengupta was the founder head of the department. The department offers B.A. (Hons) and Subsidiary Courses. There are three faculty members working in the department. Dr. Suchita Arpan, Asst. Professor working as HoD, Ms. Ranjana Yadav and Dr. Sanjay Kumar Priyadarshi as Asst. Professor. The department works towards quality teaching. The faculty members try their best to maintain the quality of education and make efforts to change the potentiality of students into their actuality. The aims and objectives of the department are to impart a quality education.',
    faculty: [{
      name: i18next.t("auto.dr_suchita_arpan_1hc1sv4"),
      designation: 'HOD, Philosophy',
      image: 'Dr. Suchita Arpan, HOD, Psychology.jpeg'
    }, {
      name: i18next.t("auto.dr_sanjay_kumar_priyadarshi_14x1tlx"),
      designation: 'Assistant Professor, Philosophy',
      image: 'Dr. Sanjay Kumar Priyadarshi, Assistant Professor, Philosophy.jpeg'
    }, {
      name: i18next.t("auto.ms_ranjana_yadav_1ced9gn"),
      designation: 'Assistant Professor, Philosophy',
      image: 'Ms. Ranjana Yadav, Assistant Professor, Philosophy.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_urdu_1kl8r8e"),
    category: 'Humanities',
    icon: BookOpen,
    description: i18next.t("auto.urdu_language_literature_and_cultural_studies_avtmpi"),
    color: 'from-primary to-highlight',
    highlights: 'The department of Urdu started in 1946 with introduction of Intermediate Education in Arts. Mrs. Quraisha Hussain was the founder Head of the Department and she was also elevated as the Principal of the college. Subsequently Dr. Akhatar Jahan and Dr. Syeda Begum took charge as respective heads. Dr. Md. Sohail Anwer is the present head of the Department.',
    faculty: [{
      name: i18next.t("auto.dr_md_sohail_anwer_1or3ao5"),
      designation: 'HOD, Urdu',
      image: 'Dr. Md. Sohail Anwer.jpeg'
    }, {
      name: i18next.t("auto.dr_md_rizwan_b00fkz"),
      designation: 'Assistant Professor, Urdu',
      image: 'Dr. Md. Rizwan, Assistant Professor, Urdu.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_home_science_kj3hoz"),
    category: 'Social Science',
    icon: Award,
    description: i18next.t("auto.home_management_nutrition_and_family_welfare_studies_at4s3v"),
    color: 'from-primary to-highlight',
    highlights: 'The Home Science Department focuses on family welfare, nutrition, child development, and home management for holistic development.',
    faculty: [{
      name: i18next.t("auto.dr_kavita_kumari_1a4cr6c"),
      designation: 'HOD, Home Science'
    }, {
      name: i18next.t("auto.dr_shruti_kumari_uak20l"),
      designation: 'Assistant Professor, Home Science',
      image: 'Dr. Shruti Kumari, Assistant Professor, Home Science.jpeg'
    }, {
      name: i18next.t("auto.dr_seema_prakash_uch4ts"),
      designation: 'Assistant Professor, Home Science',
      image: 'Dr. Seema Prakash, Assistant Professor, Home Science.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_music_k7n32h"),
    category: 'Fine Arts',
    icon: Music,
    description: i18next.t("auto.vocal_and_instrumental_music_with_performance_oriented_ihcq9p"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Music was established in our college in the year 1949 with Smt Shanti Goverdhan as the founder Head. Subsequently Prof. Deepali Das and took charge as the Head of the Department. Prof Girija Pandey later elected as the Member of Parliament. Dr Arvind Kumar is the present Head. The department imparts Music teaching at BA Honours and Subsidiary as well as at Post Graduate levels. Post graduate teaching in music has started from session 2010-12. This is the only department that imparts teaching of music at UG & PG levels in the entire Patna University.`,
    faculty: [{
      name: i18next.t("auto.dr_arvind_kumar_yeh61n"),
      designation: 'Professor, HOD, Department of Music',
      image: 'Dr. Arvind Kumar, Professor, HOD, Department of Music.jpeg'
    }, {
      name: i18next.t("auto.prof_dr_neera_choudhury_k149vr"),
      designation: 'Professor, Department of Music',
      image: 'Dr. Neera Chowdhary, Professor, Department of Music.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_political_science_1x2cnh1"),
    category: 'Social Science',
    icon: Users,
    description: i18next.t("auto.political_theory_governance_and_public_administration_152zp3v"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Political Science came into existence in the Year 1946 since the inception of this college. Honours teaching started in the year 1976. Mrs. Bhagwati Singh (1946-56) was the founder Head of the Department. Subsequently Dr Sarojini Sharan (1956-77), Mrs. Annapurna Devi (1977-94), Dr. Niroj Sinha (1994-99), and Dr. Lila Sinha (1999-2005) were designated as heads of the Department. Dr. Niroj Sinha was later elevated as the Principal of the College in the year 1999. Dr Shashi Sharma took over charge as Head of the Department in August, 2005.Currently, Dr. Rishu Raj serves as the Head of the Department. The Department started Postgraduate teaching from the Session 1984-1986 and continued till 1992.
The 'Remedial Coaching at Undergraduate level for SCs/ STs OBC, and Minority Communities' students under UGC scheme, has been started by the Department since December,2010 .The' Students' Counseling Centre' has been established in September 2011, which serves all students of the College. The Department has planed to publish a monthly News Bulletin 'Self Expression-Ek Abhivyakti'. All teachers of the Department are sincerely engaged in scholarly pursuit.
The Department has been maintaining its reputation of high standard and discipline since its inception. Academic as well as extracurricular performance of our students is consistently good and some of them have secured good ranks in the university examinations. The UGC also appreciated the achievements of the department and allocated substantial grant under XI plan.`,
    faculty: [{
      name: i18next.t("auto.dr_rishu_raj_xiys6p"),
      designation: 'HOD, Political Science'
    }, {
      name: i18next.t("auto.prof_dr_pushplata_kumari_p4ng6e"),
      designation: 'Professor, Political Science',
      image: 'Prof. Pushpalata Kumari, Professor, Political Science Coordinator, IQAC, MMC.jpeg'
    }, {
      name: i18next.t("auto.dr_varsha_shekhar_v3xxm4"),
      designation: 'Guest Faculty, Political Science'
    }]
  }, {
    name: i18next.t("auto.department_of_bba_tp2g95"),
    category: 'Vocational',
    icon: Briefcase,
    description: i18next.t("auto.business_administration_management_and_leadership_studies_1r8ynd1"),
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
    faculty: [{
      name: i18next.t("auto.dr_suchita_arpan_1hc1sv4"),
      designation: 'HOD, BBA',
      image: 'Dr. Suchita Arpan, HOD, Psychology.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_bca_tp2ga0"),
    category: 'Vocational',
    icon: Target,
    description: i18next.t("auto.computer_applications_programming_and_software_fundamentals_t9xhnm"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Computer Applications runs two programmes, Bachelor in Computer Applications (BCA) and Certificate Course in Computer Applications. Prof. Dr. Padmavathy Srinivasan, Head, Department of Physics was the founder coordinator of this programme. Dr. Manish Kumar Verma, Assistant Professor, Department of Physics is the present coordinator of the department.

The department runs on self financing basis. The department has 10 teachers. The students are doing extremely well in job market as software developer and analyst. The department has conducted UGC Refresher courses on Computers and e- Learning for university and college teachers for the Academic staff college, Patna University.

Academic Programmes / Courses :
1. Three Year Degree Honours (Vocational) Course (B.C.A.)
Seats - 60

2. Certificate Course in Computer Applications
A 45 days Short-Term College Level Certificate Course | Seats - 60`,
    faculty: [{
      name: i18next.t("auto.dr_manish_kumar_verma_jzs2rk"),
      designation: 'Coordinator, BCA',
      image: 'Dr. Manish Kumar Verma, Assistant Professor, Physics Coordinator, BCA.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_bsw_tp2goe"),
    category: 'Vocational',
    icon: Users,
    description: i18next.t("auto.social_work_education_community_engagement_and_welfare_kiyh6f"),
    color: 'from-primary to-highlight',
    highlights: `Bachelor of Social Work (BSW) is one of the most potential career course which have immense professional opportunities to flourish in future. Students after passing this BSW Course may get placement in NGOs, State & Central Government Welfare Departments and in Social Research Projects too. This course is very fruitful & impotent in the development of the society specifically the underprivileged masses.

Recognition of the Course : B.S.W. course was started in the year 2007 with the approval vide, Chanceller's office, Letter No. PU-44/2007-2442/GS(1), Dated : 20-07-2007.

Duration of the Course : The Bachelor of Social Work (Hons.) Course shall cover a period of three academic years and shall be known as B.S.W. (Hons.) Part-I, Part-II and Part-III respectively, during the three consecutive years of the course.`,
    faculty: [{
      name: i18next.t("auto.dr_binay_kumar_bimal_1uzsmiz"),
      designation: 'Coordinator, BSW',
      image: 'Dr. Binay Kumar Bimal, Professor, Department of Sociology Bursar, MMC Coordinator, BSW.jpeg'
    }]
  }, {
    name: i18next.t("auto.department_of_bcom_1kks6p7"),
    category: 'Vocational',
    icon: Briefcase,
    description: i18next.t("auto.commerce_accounting_taxation_and_business_operations_1y9r69a"),
    color: 'from-primary to-highlight',
    highlights: `The Department of Bachelor of Commerce (B.Com.) is one of the most active and vibrant department of the college. With the sincere efforts of Prof. (Dr.) Asha Singh and support of the then Principal Prof. (Dr.) Prof. Manju Rani Sinha this department was started under the parent department of Economics in 2002 (Dec.). This department began its first academic session after the approval of Human Recourse department, Government of Bihar and Syndicate, Patna University, Patna. The total number of seats approved was 250 only. The demand ratio 1:7 shows that the pressure for admission is very high for this course.

The Department of Commerce directs its efforts to support the missions of the college by providing quality instruction to students to prepare them for successful careers, help them adopt critical, creative and research aptitudes along with profound social commitment and capability to contribute to socio-economic development, prepare them to be actively engaged with policy issues in local, national, and global communities, engaging them in scholarly activities to maintain academic excellence and to advance knowledge in fields of specialization of departmental faculty.`,
    faculty: [{
      name: i18next.t("auto.surendra_prasad_sh7upk"),
      designation: 'Coordinator, B.Com',
      image: 'Surendra Prasad, Associate Prof, Botany Coordinator, B.Com..jpeg'
    }]
  }];

  // Get unique categories
  const categories = ['All', 'Humanities', 'Science', 'Social Science', 'Fine Arts', 'Vocational'];

  // Category descriptions
  const categoryDescriptions = {
    'Humanities': 'Explore languages, literature, philosophy, and cultural studies',
    'Science': 'Discover physics, chemistry, mathematics, and natural sciences',
    'Social Science': 'Study society, psychology, economics, and human behavior',
    'Fine Arts': 'Learn about creative arts, design, and applied arts',
    'Vocational': 'Explore professional and career-oriented programmes like BBA, BCA, BSW, and BCom'
  };
  const categoryIcons = {
    'All': GraduationCap,
    'Humanities': BookOpen,
    'Science': Microscope,
    'Social Science': Users,
    'Fine Arts': Palette,
    'Vocational': Briefcase
  };
  const getInitials = name => {
    const cleanName = name.replace(/[^A-Za-z\s]/g, '').trim();
    const parts = cleanName.split(/\s+/).filter(Boolean);
    return parts.slice(0, 2).map(part => part[0]).join('').toUpperCase();
  };

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  const facultyVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };
  return <>
      <Helmet>
        <title>{i18next.t("auto.departments_magadh_mahila_college_6mhj9u")}</title>
        <meta name="description" content="Explore the various academic departments at Magadh Mahila College under NEP 2020." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <FloatingElement delay={0}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <GradientText className="text-5xl md:text-6xl font-bold">{`
                    ${i18next.t("auto.departments_pn2w2a")}
                  `}</GradientText>
                  <motion.span className="inline-block ml-2" animate={{
                  rotate: [0, 20, -20, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}>
                    <Sparkles className="w-8 h-8 text-yellow-500" />
                  </motion.span>
                </h1>
              </FloatingElement>
              <BlurFadeIn delay={0.2}>
                <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                  ${i18next.t("auto.discover_our_comprehensive_academic_departments_offering_quality_16jogpe")}
                `}</p>
              </BlurFadeIn>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-10">
              <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
                {categories.map(category => {
                const Icon = categoryIcons[category];
                const isActive = activeCategory === category;
                return <FadeInUp key={category}>
                      <motion.button onClick={() => setActiveCategory(category)} whileHover={{
                    scale: 1.05,
                    y: -2
                  }} whileTap={{
                    scale: 0.95
                  }} className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${isActive ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : 'bg-white text-foreground border-gray-300 hover:border-primary hover:text-primary'}`}>
                        <motion.div animate={isActive ? {
                      rotate: 360
                    } : {
                      rotate: 0
                    }} transition={{
                      duration: 0.5
                    }}>
                          <Icon className="w-4 h-4" />
                        </motion.div>
                        {category}
                      </motion.button>
                    </FadeInUp>;
              })}
              </StaggerContainer>
              {activeCategory !== 'All' && <p className="mt-4 text-center text-muted-foreground">
                  {categoryDescriptions[activeCategory]}
                </p>}
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }} className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeCategory === 'All' ? departments : departments.filter(dept => dept.category === activeCategory)).map((dept, index) => <AnimatedCard key={dept.name} index={index} onClick={() => setSelectedDepartment(dept)} className="h-full">
                    <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden relative">
                      <div className="relative z-10">
                        <AnimatedIcon icon={dept.icon} color={dept.color} />
                        
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {dept.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {dept.description}
                        </p>

                        {/* Learn more indicator */}
                        <motion.div className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity" initial={{
                      x: -10,
                      opacity: 0
                    }} whileHover={{
                      x: 5
                    }}>{`
                          ${i18next.t("auto.explore_8ktigs")} 
                          `}<motion.span animate={{
                        x: [0, 5, 0]
                      }} transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}>
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </AnimatedCard>)}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedDepartment && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setSelectedDepartment(null)} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer">
            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" onClick={e => e.stopPropagation()} className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl cursor-default">
              <motion.button onClick={() => setSelectedDepartment(null)} whileHover={{
            scale: 1.1,
            rotate: 90
          }} whileTap={{
            scale: 0.9
          }} transition={{
            duration: 0.2
          }} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10">
                <X className="w-6 h-6 text-white" />
              </motion.button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div initial={{
                scale: 0,
                rotate: -180
              }} animate={{
                scale: 1,
                rotate: 0
              }} transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }} whileHover={{
                rotate: 360,
                scale: 1.1
              }} className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedDepartment.color} flex items-center justify-center shadow-lg`}>
                    <selectedDepartment.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <motion.h2 initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.2
                }} className="text-3xl font-bold text-foreground">
                      {selectedDepartment.name}
                    </motion.h2>
                    <motion.p initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.3
                }} className="text-muted-foreground text-lg">
                      {selectedDepartment.description}
                    </motion.p>
                  </div>
                </div>

                {/* Department Highlights */}
                <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8 border-l-4 border-primary">
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5" />{`
                    ${i18next.t("auto.highlights_of_the_department_tukjpu")}
                  `}</h3>
                  <div className="text-foreground whitespace-pre-line">
                    {selectedDepartment.highlights}
                  </div>
                </motion.div>

                {/* Faculty Section */}
                <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />{`
                    ${i18next.t("auto.faculty_members_1pjb3g6")}
                  `}</h3>
                  {selectedDepartment.faculty.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedDepartment.faculty.map((member, index) => <motion.div key={index} custom={index} variants={facultyVariants} initial="hidden" animate="visible" whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: {
                    duration: 0.2
                  }
                }} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                          <div className="text-center">
                            <motion.div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg overflow-hidden relative" whileHover={{
                      scale: 1.1
                    }} transition={{
                      duration: 0.3
                    }}>
                              {member.image ? (member.image.startsWith('http://') || member.image.startsWith('https://') ? <img src={member.image} alt={member.name} className="w-full h-full object-contain" /> : <img src={r2Url(`images/faculty/${member.image}`)} alt={member.name} className="w-full h-full object-contain" />) : <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 text-primary font-bold text-2xl">
                                  {getInitials(member.name)}
                                </div>}
                              <motion.div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                            <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                            <p className="text-primary text-sm">{member.designation}</p>
                          </div>
                        </motion.div>)}
                    </div> : <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.6
              }} className="rounded-lg border border-dashed border-gray-300 p-4 text-muted-foreground text-center">{`
                      ${i18next.t("auto.faculty_details_will_be_updated_soon_1k9l960")}
                    `}</motion.div>}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default Departments;
