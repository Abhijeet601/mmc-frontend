import i18next from "i18next";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Languages, Brain, ScrollText, Globe, PenTool, Music, Users, X, Sparkles, Star, Zap } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
const Humanities = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const subjects = [{
    name: i18next.t("auto.hindi_3oid1j"),
    icon: BookOpen,
    description: i18next.t("auto.study_of_hindi_language_literature_and_cultural_2plnnw"),
    color: 'from-primary to-primary',
    highlights: 'मगध महिला महाविद्यालय में हिंदी विभाग की स्थापना सन 1946 में हुई । प्रारंभ में स्नातक एवं इंटरमीडिएट कक्षाओं तक ही हिंदी विषय का पठन-पाठन समिति रहा । सन 1960 से स्नातक सम्मान का अध्यापन कार्य प्रारंभ किया गया। यह विभाग संपूर्ण महाविद्यालय की छात्राओं की भाषायी रचना कौशल के प्रति सजग भूमिका का निर्वहन करता है। इस कार्य हेतु विभिन्न स्तरीय रचनात्मक प्रतियोगिताएं आयोजित की जाती है तथा छात्राओं का उत्साहवर्धन करने के लिए पुरस्कार एवं प्रमाण पत्र भी प्रदान किए जाते हैं । राष्ट्रीय एवं अंतर्राष्ट्रीय स्तर पर आयोजित होने वाले साहित्यिक एवं प्रतियोगी आयोजनों में सहभागिता हेतु विभाग द्वारा छात्राओं को प्रोत्साहित एवं प्रशिक्षित किया जाता है।',
    faculty: [{
      name: i18next.t("auto.dr_shipra_prabha_1eqwrhg"),
      designation: 'HOD, Hindi',
      image: 'Dr. Shipra Prabha, HOD, Hindi.jpeg'
    }, {
      name: i18next.t("auto.dr_aasha_kumari_1rcju8e"),
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
    name: i18next.t("auto.english_1yvlwev"),
    icon: PenTool,
    description: i18next.t("auto.english_language_proficiency_and_literary_studies_1eovf82"),
    color: 'from-primary to-highlight',
    highlights: 'The English department focuses on developing strong communication skills, literary analysis, and cultural understanding through comprehensive language and literature courses.',
    faculty: [{
      name: i18next.t("auto.dr_archana_jaiswal_16hzx8g"),
      designation: 'Associate Professor, HOD English',
      image: 'Dr. Archana Jaiswal, Associate Professor, HOD English.jpeg'
    }]
  }, {
    name: i18next.t("auto.maithili_1vyrzn4"),
    icon: ScrollText,
    description: i18next.t("auto.regional_language_and_literature_of_mithila_region_2pu4tx"),
    color: 'from-primary to-highlight',
    highlights: 'The Maithili department preserves and promotes the rich literary tradition of the Mithila region through language instruction and cultural studies.',
    faculty: []
  }, {
    name: i18next.t("auto.persian_1ppjnh3"),
    icon: Globe,
    description: i18next.t("auto.classical_persian_language_and_islamic_studies_8jjo2m"),
    color: 'from-primary to-highlight',
    highlights: 'The Persian department offers courses in classical Persian literature, Islamic studies, and cultural heritage of Persian-speaking regions.',
    faculty: []
  }, {
    name: i18next.t("auto.philosophy_jfu3pm"),
    icon: Brain,
    description: i18next.t("auto.critical_thinking_ethics_and_philosophical_inquiry_w51dnp"),
    color: 'from-primary to-highlight',
    highlights: 'The Philosophy department encourages critical thinking and ethical reasoning through the study of various philosophical traditions and contemporary issues.',
    faculty: [{
      name: i18next.t("auto.dr_sanjay_kumar_priyadarshi_14x1tlx"),
      designation: 'Assistant Professor, Philosophy',
      image: 'Dr. Sanjay Kumar Priyadarshi, Assistant Professor, Philosophy.jpeg'
    }, {
      name: i18next.t("auto.ms_ranjana_yadav_1ced9gn"),
      designation: 'Assistant Professor, Philosophy',
      image: 'Ms. Ranjana Yadav, Assistant Professor, Philosophy.jpeg'
    }]
  }, {
    name: i18next.t("auto.sanskrit_v4cxqm"),
    icon: Languages,
    description: i18next.t("auto.ancient_sanskrit_language_and_vedic_literature_1m6z7vl"),
    color: 'from-primary to-highlight',
    highlights: 'The Sanskrit department provides instruction in ancient Sanskrit language, Vedic literature, and classical Indian philosophy.',
    faculty: []
  }, {
    name: i18next.t("auto.urdu_yjrjtf"),
    icon: Music,
    description: i18next.t("auto.urdu_language_poetry_and_cultural_studies_z4f5mq"),
    color: 'from-primary to-highlight',
    highlights: 'The Urdu department offers comprehensive study of Urdu language, poetry, literature, and cultural traditions.',
    faculty: [{
      name: i18next.t("auto.dr_md_rizwan_b00fkz"),
      designation: 'Assistant Professor, Urdu',
      image: 'Dr. Md. Rizwan, Assistant Professor, Urdu.jpeg'
    }, {
      name: i18next.t("auto.dr_sohail_anwer_133vrnm"),
      designation: 'Assistant Professor, Urdu',
      image: 'Dr. Md. Sohail Anwer.jpeg'
    }]
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.humanities_nep_2020_magadh_mahila_college_11yq1ce")}</title>
        <meta name="description" content="Humanities programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">{`
              ${i18next.t("auto.humanities_1ffbfy0")}
            `}</h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">{`
                ${i18next.t("auto.the_humanities_department_at_magadh_mahila_college_vp6w11")}
              `}</p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.programs_offered_3hxcrf")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.bachelor_of_arts_ba_4_year_program_1ujunr8")}</li>
                <li>{i18next.t("auto.master_of_arts_ma_in_various_disciplines_5us34i")}</li>
                <li>{i18next.t("auto.certificate_and_vocational_courses_nct7un")}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">{i18next.t("auto.key_features_g9ba0l")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{i18next.t("auto.interdisciplinary_curriculum_n1mx2x")}</li>
                <li>{i18next.t("auto.focus_on_skill_development_1dpeesq")}</li>
                <li>{i18next.t("auto.research_oriented_learning_1czrodr")}</li>
                <li>{i18next.t("auto.cultural_and_ethical_studies_1n0innh")}</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>{i18next.t("auto.note_3khlrj")}</strong>{` ${i18next.t("auto.detailed_curriculum_and_course_information_will_be_1pqj3kr")}
                `}</p>
              </div>
            </div>
          </div>




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
        }} className="mb-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-primary">{`
                ${i18next.t("auto.subjects_offered_1k2bwnn")}
              `}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.12
            }} whileHover={{
              y: -15,
              scale: 1.05
            }} className="group relative cursor-pointer h-full" onClick={() => setSelectedSubject(subject)}>
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden relative">

                    {/* Animated background blob */}
                    <motion.div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100" animate={{
                  scale: [1, 1.3, 1]
                }} transition={{
                  duration: 3,
                  repeat: Infinity
                }} />

                    {/* Shine effect */}
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20" animate={{
                  x: ['-100%', '100%']
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }} />

                    <div className="relative z-10">
                      <motion.div whileHover={{
                    rotate: 360,
                    scale: 1.15
                  }} transition={{
                    duration: 0.8
                  }} className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-6 shadow-lg`}>
                        <subject.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {subject.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {subject.description}
                      </p>

                      {/* Learn more indicator */}
                      <motion.div className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity" initial={{
                    x: -10,
                    opacity: 0
                  }} whileHover={{
                    x: 5
                  }}>{`
                        ${i18next.t("auto.explore_8ktigs")} `}<motion.span animate={{
                      x: [0, 5, 0]
                    }} transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}>→</motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>


        </div>
      </div>

      <AnimatePresence>
        {selectedSubject && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setSelectedSubject(null)} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer">
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} onClick={e => e.stopPropagation()} className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl cursor-default">
              <button onClick={() => setSelectedSubject(null)} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10">
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div whileHover={{
                rotate: 360,
                scale: 1.1
              }} transition={{
                duration: 0.8
              }} className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedSubject.color} flex items-center justify-center shadow-lg`}>
                    <selectedSubject.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{`${i18next.t("auto.department_of_814hrc")} `}{selectedSubject.name}</h2>
                    <p className="text-muted-foreground text-lg">{selectedSubject.description}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-3">{i18next.t("auto.highlights_of_the_department_tukjpu")}</h3>
                    <p className="text-sm text-foreground">{selectedSubject.highlights}</p>
                  </div>

                  {selectedSubject.faculty.length > 0 && <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary mb-3">{i18next.t("auto.faculty_members_1pjb3g6")}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedSubject.faculty.map((member, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" alt={member.name} src={r2Url(`images/faculty/${encodeURIComponent(member.image)}`)} onError={e => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d';
                    }} />
                            <h4 className="text-sm font-semibold text-center text-foreground">{member.name}</h4>
                            <p className="text-xs text-center text-muted-foreground">{member.designation}</p>
                          </div>)}
                      </div>
                    </div>}
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>


    </>;
};
export default Humanities;
