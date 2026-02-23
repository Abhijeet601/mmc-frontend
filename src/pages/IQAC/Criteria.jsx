import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';

const criteriaSections = [
  {
    id: 'I',
    title: 'Curricular Aspects',
    paragraphs: [
      'Magadh Mahila College strictly follows the academic calendar prescribed by Patna University regarding academic schedule. Under the guidance of IQAC the college is progressing towards its primary goal of holistic and sustainable development, a clean and green environment, and research excellence. In the beginning of each academic year, tentative departmental activity calendars are prepared, incorporating curricular, co-curricular, and extra-curricular events in alignment with the Patna University academic calendar. Faculty members of the department undertake various practices such as ICT-enabled teaching/presentations, internal assignments, quiz competitions, class tests, etc. They take utmost care to complete the syllabus in time. After the examination, an analysis of results is done by the departments every year to keep a record of student progress. The result analysis is further assessed by IQAC, and necessary steps are taken for further improvement.',
      'The semester system that is implemented in PG and UG programs consists of various courses related to gender sensitization, human values, and professional ethics. College also promotes the students to enrol as NCC / NSS volunteers. It aims at inculcating values, ethics, and socially responsible qualities. This also helps in the propagation and fostering of a clean and green environment for sustainability. The importance of group work and imbibing leadership is being taught. Our teachers put their best efforts into grooming students and making them responsible citizens.'
    ],
    resources: [
      'Curricular Planning and Implementation: Annual Reports',
      'Feedback System: Feedback forms'
    ]
  },
  {
    id: 'II',
    title: 'Teaching Learning and Evaluation',
    paragraphs: [
      "The structure of any academic institution depends upon its teaching, learning and evaluation process. Magadh Mahila College, Patna follows Patna University's admission process, welcoming students from diverse backgrounds. The college employs multi-level strategies to cater to different learning levels, assessing students through qualifying exams, entrance tests, and induction programs. Students are categorized as advanced or slow learners, with tailored support like remedial coaching, tutorials, and additional materials for improvement. Faculty guide advanced learners in preparing for national-level exams like NET, JRF, CSIR, and PSC. Student progress is monitored through the Mentor-Mentee system. The teaching and learning is monitored and strengthened by the feedback of different stakeholders.",
      'The college focuses on blended teaching methods, such as case studies, problem-solving, and ICT-based tools like smart classrooms, virtual learning platforms, and MOOCs to enhance student engagement. Seminars, conferences, workshops and various awareness programmes are also organized regularly to enhance teaching and learning. Blended and flipped classrooms foster dynamic learning environments. Students complete internships and work on projects to promote independent learning. The importance of NCC, NSS and sports is acknowledged in the college.',
      'Student performance is evaluated through continuous assessments, including class tests, assignments, and final exams. Our transparent internal assessment mechanism ensures fair evaluation and feedback. We follow an outcome-based education framework, clearly communicating program and course outcomes to students, teachers, and parents, and tracking progress through periodic assessments.'
    ],
    resources: [
      'Project/Internship/Field Work',
      'ICT Enabled Tools for effective teaching learning process',
      'Evaluation Process',
      'Internal Examination Grievances',
      'Programme and Course Outcome',
      'Attainment of Programme and Course outcome',
      'Student Satisfaction Survey',
      'Student Progression Form'
    ]
  },
  {
    id: 'III',
    title: 'Research Innovation and Extension',
    paragraphs: [
      'Magadh Mahila College recognizes the pivotal role of research, innovation, and community engagement in achieving its mission. The college is dedicated to cultivate a rich research culture. It is quite impressive that 95% of the teaching faculty hold Ph.D. degrees, positioning the college as a potential research hub in higher education. A number of research works are going on in the college. It has obtained grants for major and minor research projects, advancing its research endeavours. Currently, faculty members are working on seven research projects from SERB, ICPR, and from R&D Cell, Patna University itself. Students are also motivated to do minor research projects and innovation. The project works of students are published in the college peer reviewed research journal - JIGYASA.',
      "The institution fosters an innovative ecosystem for learning and research. Along with new infrastructural developments, existing classrooms and seminar halls have been upgraded with new technology, including ICT, LAN, LCDs, K-Yans, Smart Boards, CCTV cameras, and Wi-Fi facilities. The College Central Library, named 'Medha Knowledge Centre,' is automated with subsystems like LAN connectivity, Wi-Fi (100 Mbps internet connection), SPSS software and a library management system from INFLIBNET. The college has signed MOUs with a number of well-recognized national and international organizations for achieving academic excellence.",
      'Through its NSS and NCC units and Sehat Kendra, the college engages in extensive community welfare activities and sensitizes students towards their social responsibilities. These units organize various programs, which include blood donation camps, plantation drives, sanitation drives, health check-up camps, community services, environment sustainability programs, visits to industries and fieldwork surveys, etc.'
    ],
    resources: [
      'Innovation Ecosystem',
      'Research at MMC',
      'Extension Activities'
    ]
  },
  {
    id: 'IV',
    title: 'Infrastructure and Learning Resources',
    paragraphs: [
      'Magadh Mahila College offers robust infrastructure and extensive learning resources, prioritizing modern technology for students benefit. The institution has swiftly integrated smart classrooms, staying ahead in technological advancements. Many classrooms, seminar room and conference hall are ICT enabled which include LCD screens, Smart Boards, CCTV cameras, and Wi-Fi. We also provide comprehensive training to the students on the use of ICT devices and access to our digital library, ensuring that they can be well-prepared for the demands of the modern global world. This commitment to technology and resources gives our students a distinct advantage in terms of employability and opportunities for higher studies.',
      'MMC has well maintained laboratories for smooth functioning of practical classes. The College Central Library, or Medha Knowledge Centre, is fully automated with LAN and Wi-Fi connectivity. Library Management Software enables efficient services, with barcode-based circulation ensuring smooth operations. Facilities like INFLIBNET, KOHA software, OPAC, and National Digital Library access allow easy resource retrieval. The library is rich with books, journals, e-journals, and research materials.',
      'MMC also offers extensive sports facilities, including a spacious playground, an indoor stadium, a gym, and a yoga centre. A large open auditorium with projector and audio-visual equipment hosts cultural and extracurricular events. These facilities support holistic development of students in academics, sports, co-curricular and extra-curricular activities.'
    ],
    resources: [
      'Academic Infrastructure',
      'ICT enabled Classrooms / IT Infrastructure',
      'Library',
      'Other Infrastructure (Day Care Center, Canteen, Cafeteria, Bank, Stationary shop, Health Care Unit, Infirmary, Seminar and Conference room)',
      'Infrastructure Maintenance'
    ]
  },
  {
    id: 'V',
    title: 'Student Support and Progression',
    paragraphs: [
      "College is thoroughly committed for the welfare of students. The institution comprehensively prepares and plans various students' welfare programs specifically in areas like admission, administration, infrastructural facilities, curricular, co-curricular, extra-curricular and extension activities. Students' Central Society ensures democratic involvement of students in college administration and management. Further, college provides scholarship for economically backward students under Government Scholarship Scheme and cash rewards as Merit Scholarship to University Gold Medalists and Rank Holders through cheque.",
      'The institution aims at holistic development of students. Quality of education is shared among stakeholders in an appropriate way. It involves dedicated sincere teachers, meritorious students and vigilant parents. Apart from regular classes, remedial classes, tutorial classes, classes for slow learners and fast learners, counselling and guidance classes, group discussion, practical classes, seminar/workshop/interactive session, sports activities, cultural programmes, etc. are organized on a regular basis for overall development of students. Various cultural activities, sports activities, extension and community services are also organized on periodic basis.'
    ],
    resources: [
      'Capacity Building and Skills Enhancement Initiatives',
      'Awards/Medals for outstanding performance in Sports/Cultural Activities at University/State/National/International Level',
      'Alumni Engagement'
    ]
  },
  {
    id: 'VI',
    title: 'Governance Leadership and Management',
    paragraphs: [
      "The vision of the institution is to develop as a center of excellence for girls' education. The mission of the institution is to empower girls and society as a whole through value-based higher education and to bring more and more girls from all strata within the ambit of higher education. With this mission and vision, the institution has been working incessantly to provide a better platform and window to female students to flourish and attain their optimum potential.",
      'The institution has an organogram that describes the decentralized structure of administration and a participatory management approach. The administration of the college operates as per the rules and regulations laid down by Patna University, Patna, and the Department of Higher Education, Government of Bihar.',
      'The Principal is the administrative, financial, and academic head of the institution. Under the administration of the Principal, various committees are formed, including IQAC, the Advisory Committee, the Development-Cum-Finance Committee, the Building Committee, the Library Committee, the Committee for SC/ST, the Research Development Committee, the Magazine Committee, the Research Journal Committee, the Sports Committee, the Time-Table Committee, and the College Website Maintenance Committee, among others. The Internal Quality Assurance Cell is highly committed to carrying out academic and other co-curricular activities. The Principal, along with IQAC and the heads of different departments, regularly holds meetings as per requirements, and resolutions are taken to bring qualitative improvements in the overall performance of the institution.'
    ],
    resources: [
      'Institutional Vision and Mission',
      'Institutional Management',
      'Strategy Development and Deployment',
      'Organogram of the Institution',
      'Cells',
      'Faculty Empowerment',
      'Appraisal System for Teaching and Non Teaching Staff',
      'Financial audit',
      'Mobilization of Funds',
      'IQAC Meeting Minutes'
    ]
  },
  {
    id: 'VII',
    title: 'Institutional Values and Best Practices',
    paragraphs: [
      'Magadh Mahila College is committed to upholding ethical standards, social responsibility, and sustainability and contributing positively to society while fostering values that align with national priorities like Swachh Bharat Abhiyan. Transparent and accountable policies are framed to nurture values of integrity, inclusivity and ethical behavior among students. The college promotes gender-sensitization programs, safe campus environments, and leadership opportunities for ensuring gender equity. The college is committed to environmental protection through sustainable practices, such as rainwater harvesting, plastic-free campus, renewable energy adoption, and biodiversity conservation.',
      'The college ensures effective implementation of the Code of Conduct prescribed for students, faculty, and staff, outlining expected behaviors and ethical standards through awareness programs and disciplinary mechanisms. The institution also provides scholarships, support systems, and inclusive policies to promote equitable education. The college always tries to develop social responsibility, rights and obligations among students so that they can become responsible citizens.',
      'The best practices adopted by the college contribute significantly to academic excellence, social development, environmental sustainability, and national and global development. The best practices adopted by our college are: Promotion of research, sustainable initiative and development.'
    ],
    resources: [
      'Gender Sensitization',
      'Best Practices',
      'Institutional Distinctiveness'
    ]
  }
];

const Criteria = () => {
  return (
    <>
      <Helmet>
        <title>IQAC Criteria - Magadh Mahila College</title>
        <meta
          name="description"
          content="Detailed criteria-wise IQAC content covering curricular aspects, teaching-learning, research, infrastructure, student support, governance, and institutional values."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/iqac" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to IQAC
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Criteria <span className="text-primary">I - VII</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Detailed criteria-wise institutional profile prepared under IQAC for quality enhancement,
              academic development, research progression, and social responsibility.
            </p>
          </motion.div>

          <div className="space-y-8">
            {criteriaSections.map((section, index) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8"
              >
                <div className="mb-5">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    {`Criteria ${section.id}: ${section.title}`}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${section.id}-paragraph-${paragraphIndex}`} className="text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.resources.length > 0 && (
                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Related Sections</h3>
                    <ul className="space-y-2">
                      {section.resources.map((resource) => (
                        <li key={`${section.id}-${resource}`} className="flex items-start gap-2 text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Criteria;
