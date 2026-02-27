import i18next from "i18next";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ChevronDown, BookOpen, GraduationCap } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

// Subject-wise syllabus data organized by category
const syllabusData = [
// Science Subjects
{
  subject: 'Botany',
  files: [{
    name: i18next.t("auto.botany_18bn1be"),
    url: r2Url('data files/NEP Syllabus/Botany (1).pdf')
  }, {
    name: i18next.t("auto.botany_sem_1_2_xi867o"),
    url: r2Url('data files/NEP Syllabus/Botany Sem 1&2 (1).pdf')
  }]
}, {
  subject: 'Chemistry',
  files: [{
    name: i18next.t("auto.chemistry_sem_1_2_nnwvi5"),
    url: r2Url('data files/NEP Syllabus/chemistry sem 1&2 (1).pdf')
  }, {
    name: i18next.t("auto.chemistry_sem_3_8_nnwwv2"),
    url: r2Url('data files/NEP Syllabus/Chemistry sem 3-8 (1).pdf')
  }]
}, {
  subject: 'Mathematics',
  files: [{
    name: i18next.t("auto.mathematics_sem_1_2_1j67q8f"),
    url: r2Url('data files/NEP Syllabus/Mathematics Sem 1&2 (1).pdf')
  }, {
    name: i18next.t("auto.mathematics_sem_3_8_1j67ofg"),
    url: r2Url('data files/NEP Syllabus/Mathematics Sem 3-8 (1).pdf')
  }]
}, {
  subject: 'Physics',
  files: [{
    name: i18next.t("auto.physics_sem_1_2_2v1els"),
    url: r2Url('documents/nep-syllabus/Physics Sem1 &2.pdf')
  }, {
    name: i18next.t("auto.physics_sem_3_8_2v1ger"),
    url: r2Url('documents/nep-syllabus/Physics Sem 3-8.pdf')
  }]
}, {
  subject: 'Zoology',
  files: [{
    name: i18next.t("auto.zoology_1b0n882"),
    url: r2Url('data files/NEP Syllabus/Zoology (1).pdf')
  }, {
    name: i18next.t("auto.zoology_sem_1_2_1edzeyk"),
    url: r2Url('data files/NEP Syllabus/Zoology Sem 1&2 (1).pdf')
  }]
},
// Arts & Humanities Subjects
{
  subject: 'Economics',
  files: [{
    name: i18next.t("auto.economics_sem_1_2_hu9scn"),
    url: r2Url('documents/nep-syllabus/Economics Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.economics_sem_3_8_hu9qxw"),
    url: r2Url('documents/nep-syllabus/Economics Sem 3-8.pdf')
  }]
}, {
  subject: 'English',
  files: [{
    name: i18next.t("auto.english_sem_1_2_oqe409"),
    url: r2Url('documents/nep-syllabus/English Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.english_sem_3_8_oqe5gq"),
    url: r2Url('documents/nep-syllabus/English Sem 3-8.pdf')
  }]
}, {
  subject: 'Hindi',
  files: [{
    name: i18next.t("auto.hindi_sem_1_2_1tfg1i1"),
    url: r2Url('documents/nep-syllabus/Hindi Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.hindi_sem_3_8_1tfg2yi"),
    url: r2Url('documents/nep-syllabus/Hindi Sem 3-8.pdf')
  }]
}, {
  subject: 'History',
  files: [{
    name: i18next.t("auto.history_sem_1_2_12yeeop"),
    url: r2Url('documents/nep-syllabus/History Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.history_sem_3_8_12yeg56"),
    url: r2Url('documents/nep-syllabus/History Sem 3-8.pdf')
  }]
}, {
  subject: 'Home Science',
  files: [{
    name: i18next.t("auto.home_science_sem_1_2_eg5cao"),
    url: r2Url('documents/nep-syllabus/Home Science Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.home_science_1q9b7xa"),
    url: r2Url('documents/nep-syllabus/Home Science.pdf')
  }]
}, {
  subject: 'Music',
  files: [{
    name: i18next.t("auto.music_sem_1_2_1rjqdoa"),
    url: r2Url('documents/nep-syllabus/Music Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.music_sem_3_8_1rjqbtl"),
    url: r2Url('documents/nep-syllabus/Music Sem 3-8.pdf')
  }]
}, {
  subject: 'Persian',
  files: [{
    name: i18next.t("auto.persian_sem_1_2_oe1fgp"),
    url: r2Url('documents/nep-syllabus/Persian Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.persian_sem_3_8_oe1gx6"),
    url: r2Url('documents/nep-syllabus/Persian Sem 3-8.pdf')
  }]
}, {
  subject: 'Philosophy',
  files: [{
    name: i18next.t("auto.philosophy_sem_1_2_1tidqtw"),
    url: r2Url('documents/nep-syllabus/Philosophy Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.philosophy_sem_3_8_1tidsqf"),
    url: r2Url('documents/nep-syllabus/Philosophy Sem 3-8.pdf')
  }]
}, {
  subject: 'Political Science',
  files: [{
    name: i18next.t("auto.political_science_sem_1_2_7sjx5y"),
    url: r2Url('documents/nep-syllabus/Political Science Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.political_science_sem_3_8_7sjvph"),
    url: r2Url('documents/nep-syllabus/Political Science Sem 3-8.pdf')
  }]
}, {
  subject: 'Psychology',
  files: [{
    name: i18next.t("auto.psychology_sem_1_2_1ex13lk"),
    url: r2Url('documents/nep-syllabus/Psychology Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.psychology_sem_3_8_1ex150b"),
    url: r2Url('documents/nep-syllabus/Psychology Sem 3-8.pdf')
  }]
}, {
  subject: 'Sanskrit',
  files: [{
    name: i18next.t("auto.sanskrit_sem_1_2_by7wcw"),
    url: r2Url('documents/nep-syllabus/Sanskrit Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.sanskrit_sem_3_8_by7y9f"),
    url: r2Url('documents/nep-syllabus/Sanskrit Sem 3-8.pdf')
  }]
}, {
  subject: 'Sociology',
  files: [{
    name: i18next.t("auto.sociology_sem_1_2_1bkrcdb"),
    url: r2Url('documents/nep-syllabus/Sociology Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.sociology_sem_3_8_1bkrakc"),
    url: r2Url('documents/nep-syllabus/Sociology Sem 3-8.pdf')
  }]
}, {
  subject: 'Statistics',
  files: [{
    name: i18next.t("auto.statistics_sem_1_2_18m1e66"),
    url: r2Url('documents/nep-syllabus/Statistics Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.statistics_sem_3_8_18m1cbh"),
    url: r2Url('documents/nep-syllabus/Statistics Sem 3-8.pdf')
  }]
}, {
  subject: 'Urdu',
  files: [{
    name: i18next.t("auto.urdu_sem_1_2_p586x9"),
    url: r2Url('documents/nep-syllabus/Urdu Sem 1&2.pdf')
  }, {
    name: i18next.t("auto.urdu_sem_3_8_p588dq"),
    url: r2Url('documents/nep-syllabus/Urdu Sem 3-8.pdf')
  }]
}];
const SyllabusNEP = () => {
  const [openSubjects, setOpenSubjects] = useState({});
  const toggleSubject = index => {
    setOpenSubjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  return <>
      <Helmet>
        <title>{i18next.t("auto.nep_syllabus_magadh_mahila_college_s9v3n5")}</title>
        <meta name="description" content="NEP 2020 Syllabus for all subjects at Magadh Mahila College, Patna University." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{`
              ${i18next.t("auto.nep_syllabus_kkgn01")}
            `}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{`
              ${i18next.t("auto.download_the_comprehensive_syllabus_documents_for_all_14qdyhv")}
            `}</p>
          </motion.div>

          {/* Info Card */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{i18next.t("auto.about_nep_2020_syllabus_z2jy58")}</h3>
                <p className="text-gray-600">{`
                  ${i18next.t("auto.the_national_education_policy_2020_introduces_a_1x31jel")}
                `}</p>
              </div>
            </div>
          </motion.div>

          {/* Subject Accordion */}
          <div className="space-y-4">
            {syllabusData.map((subject, index) => <motion.div key={subject.subject} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button onClick={() => toggleSubject(index)} className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-gray-800">
                        {subject.subject}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {subject.files.length}{` ${i18next.t("auto.document_49geve")}`}{subject.files.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <motion.div animate={{
                  rotate: openSubjects[index] ? 180 : 0
                }} transition={{
                  duration: 0.3
                }}>
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openSubjects[index] && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: 'auto',
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: 0.3
                }} className="overflow-hidden">
                        <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {subject.files.map((file, fileIndex) => <motion.a key={file.name} href={file.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group" initial={{
                        opacity: 0,
                        x: -10
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        delay: fileIndex * 0.1
                      }}>
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                  <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-gray-800 truncate">{file.name}</p>
                                  <p className="text-sm text-gray-500">{i18next.t("auto.pdf_document_80cgo")}</p>
                                </div>
                                <Download className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                              </motion.a>)}
                          </div>
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </div>
              </motion.div>)}
          </div>

          {/* Footer Note */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <p className="text-amber-800">
              <strong>{i18next.t("auto.note_3khlrj")}</strong>{` ${i18next.t("auto.for_any_queries_regarding_the_syllabus_or_1v0gmn2")}
            `}</p>
          </motion.div>
        </div>
      </div>
    </>;
};
export default SyllabusNEP;
