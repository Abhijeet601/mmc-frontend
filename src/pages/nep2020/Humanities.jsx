import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { BookOpen, Languages, Brain, ScrollText, Globe, PenTool, Music, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FacultyCard from '@/components/FacultyCard';
import { getDepartmentFaculty } from '@/data/faculty';
const Humanities = () => {
  const { t } = useTranslation();
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const dialogRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const subjects = [{
    id: 'hindi',
    name: t("auto.hindi_3oid1j"),
    icon: BookOpen,
    description: t("auto.study_of_hindi_language_literature_and_cultural_2plnnw"),
    color: 'from-primary to-primary',
    highlights: 'मगध महिला महाविद्यालय में हिंदी विभाग की स्थापना सन 1946 में हुई । प्रारंभ में स्नातक एवं इंटरमीडिएट कक्षाओं तक ही हिंदी विषय का पठन-पाठन समिति रहा । सन 1960 से स्नातक सम्मान का अध्यापन कार्य प्रारंभ किया गया। यह विभाग संपूर्ण महाविद्यालय की छात्राओं की भाषायी रचना कौशल के प्रति सजग भूमिका का निर्वहन करता है। इस कार्य हेतु विभिन्न स्तरीय रचनात्मक प्रतियोगिताएं आयोजित की जाती है तथा छात्राओं का उत्साहवर्धन करने के लिए पुरस्कार एवं प्रमाण पत्र भी प्रदान किए जाते हैं । राष्ट्रीय एवं अंतर्राष्ट्रीय स्तर पर आयोजित होने वाले साहित्यिक एवं प्रतियोगी आयोजनों में सहभागिता हेतु विभाग द्वारा छात्राओं को प्रोत्साहित एवं प्रशिक्षित किया जाता है।',
    faculty: getDepartmentFaculty('hindi')
  }, {
    id: 'english',
    name: t("auto.english_1yvlwev"),
    icon: PenTool,
    description: t("auto.english_language_proficiency_and_literary_studies_1eovf82"),
    color: 'from-primary to-highlight',
    highlights: 'The English department focuses on developing strong communication skills, literary analysis, and cultural understanding through comprehensive language and literature courses.',
    faculty: getDepartmentFaculty('english')
  }, {
    id: 'maithili',
    name: t("auto.maithili_1vyrzn4"),
    icon: ScrollText,
    description: t("auto.regional_language_and_literature_of_mithila_region_2pu4tx"),
    color: 'from-primary to-highlight',
    highlights: 'The Maithili department preserves and promotes the rich literary tradition of the Mithila region through language instruction and cultural studies.',
    faculty: getDepartmentFaculty('maithili')
  }, {
    id: 'persian',
    name: t("auto.persian_1ppjnh3"),
    icon: Globe,
    description: t("auto.classical_persian_language_and_islamic_studies_8jjo2m"),
    color: 'from-primary to-highlight',
    highlights: 'The Persian department offers courses in classical Persian literature, Islamic studies, and cultural heritage of Persian-speaking regions.',
    faculty: getDepartmentFaculty('persian')
  }, {
    id: 'philosophy',
    name: t("auto.philosophy_jfu3pm"),
    icon: Brain,
    description: t("auto.critical_thinking_ethics_and_philosophical_inquiry_w51dnp"),
    color: 'from-primary to-highlight',
    highlights: 'The Philosophy department encourages critical thinking and ethical reasoning through the study of various philosophical traditions and contemporary issues.',
    faculty: getDepartmentFaculty('philosophy')
  }, {
    id: 'sanskrit',
    name: t("auto.sanskrit_v4cxqm"),
    icon: Languages,
    description: t("auto.ancient_sanskrit_language_and_vedic_literature_1m6z7vl"),
    color: 'from-primary to-highlight',
    highlights: 'The Sanskrit department provides instruction in ancient Sanskrit language, Vedic literature, and classical Indian philosophy.',
    faculty: getDepartmentFaculty('sanskrit')
  }, {
    id: 'urdu',
    name: t("auto.urdu_yjrjtf"),
    icon: Music,
    description: t("auto.urdu_language_poetry_and_cultural_studies_z4f5mq"),
    color: 'from-primary to-highlight',
    highlights: 'The Urdu department offers comprehensive study of Urdu language, poetry, literature, and cultural traditions.',
    faculty: getDepartmentFaculty('urdu')
  }];
  const selectedSubject = subjects.find(subject => subject.id === selectedSubjectId);
  const setSelectedSubject = subject => setSelectedSubjectId(subject?.id || null);

  useEffect(() => {
    if (!selectedSubjectId) return undefined;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('button')?.focus();
    const onKeyDown = event => {
      if (event.key === 'Escape') setSelectedSubjectId(null);
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const controls = Array.from(dialogRef.current.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')).filter(control => !control.disabled);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [selectedSubjectId]);
  return <>
      <Helmet>
        <title>{t("auto.humanities_nep_2020_magadh_mahila_college_11yq1ce")}</title>
        <meta name="description" content="Humanities programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="faculty-departments min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">{`
              ${t("auto.humanities_1ffbfy0")}
            `}</h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">{`
                ${t("auto.the_humanities_department_at_magadh_mahila_college_vp6w11")}
              `}</p>

              <h2 className="text-2xl font-semibold text-primary mb-4">{t("auto.programs_offered_3hxcrf")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{t("auto.bachelor_of_arts_ba_4_year_program_1ujunr8")}</li>
                <li>{t("auto.master_of_arts_ma_in_various_disciplines_5us34i")}</li>
                <li>{t("auto.certificate_and_vocational_courses_nct7un")}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">{t("auto.key_features_g9ba0l")}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>{t("auto.interdisciplinary_curriculum_n1mx2x")}</li>
                <li>{t("auto.focus_on_skill_development_1dpeesq")}</li>
                <li>{t("auto.research_oriented_learning_1czrodr")}</li>
                <li>{t("auto.cultural_and_ethical_studies_1n0innh")}</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>{t("auto.note_3khlrj")}</strong>{` ${t("auto.detailed_curriculum_and_course_information_will_be_1pqj3kr")}
                `}</p>
              </div>
            </div>
          </div>




          <motion.div initial={reduceMotion ? false : {
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
                ${t("auto.subjects_offered_1k2bwnn")}
              `}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => <motion.div key={subject.id} initial={reduceMotion ? false : {
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
            }} whileHover={reduceMotion ? undefined : {
              y: -4,
              scale: 1.01
            }} role="button" tabIndex={0} aria-haspopup="dialog" aria-label={`${t('facultyDirectory.viewDetails', { defaultValue: 'View Details' })}: ${subject.name}`} className="group relative cursor-pointer h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4" onClick={() => setSelectedSubject(subject)} onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setSelectedSubject(subject);
              }
            }}>
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden relative">

                    {/* Animated background blob */}
                    <motion.div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100" animate={reduceMotion ? undefined : {
                  scale: [1, 1.3, 1]
                }} transition={{
                  duration: 3,
                  repeat: Infinity
                }} />

                    {/* Shine effect */}
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20" animate={reduceMotion ? undefined : {
                  x: ['-100%', '100%']
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }} />

                    <div className="relative z-10">
                      <motion.div whileHover={reduceMotion ? undefined : {
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
                      <p className="text-primary font-semibold text-sm mt-4">
                        {t('facultyDirectory.viewDetails', { defaultValue: 'View Details' })}
                      </p>
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
      }} onClick={() => setSelectedSubject(null)} className="faculty-departments fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer">
            <motion.div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="humanities-subject-title" tabIndex={-1} initial={reduceMotion ? false : {
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={reduceMotion ? { opacity: 0 } : {
          scale: 0.8,
          opacity: 0
        }} onClick={e => e.stopPropagation()} className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl cursor-default">
              <button type="button" aria-label={t('facultyDirectory.close', { defaultValue: 'Close' })} onClick={() => setSelectedSubject(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary z-10">
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div whileHover={reduceMotion ? undefined : {
                rotate: 360,
                scale: 1.1
              }} transition={{
                duration: 0.8
              }} className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedSubject.color} flex items-center justify-center shadow-lg`}>
                    <selectedSubject.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h2 id="humanities-subject-title" className="text-3xl font-bold text-foreground pr-10">{`${t("auto.department_of_814hrc")} `}{selectedSubject.name}</h2>
                    <p className="text-muted-foreground text-lg">{selectedSubject.description}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-3">{t("auto.highlights_of_the_department_tukjpu")}</h3>
                    <p className="text-sm text-foreground">{selectedSubject.highlights}</p>
                  </div>

                  {selectedSubject.faculty.length > 0 && <div className="bg-section p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary mb-3">{t('facultyDirectory.members', { defaultValue: 'Faculty Members' })}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedSubject.faculty.map(member => <FacultyCard key={member.id} faculty={member} headingLevel={4} />)}
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
