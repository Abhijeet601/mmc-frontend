import i18next from "i18next";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ChevronDown, BookOpen, GraduationCap } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

// Subject-wise syllabus data organized by category
const ugSyllabusData = [
// Professional Courses - at top as requested
{
  subject: 'BBA',
  files: [{
    name: i18next.t("auto.bba_cbcs_syllabus_1mfvh0a"),
    url: r2Url('data files/CBCS Syllabus/BBA-cbcs-syllabus-.pdf')
  }]
}, {
  subject: 'BCA',
  files: [{
    name: i18next.t("auto.bca_syllabus_cbidfu"),
    url: r2Url('data files/CBCS Syllabus/Syllabus-BCA.pdf')
  }]
}, {
  subject: 'BSW',
  files: [{
    name: i18next.t("auto.bsw_3768ub"),
    url: r2Url('data files/CBCS Syllabus/BSW.pdf')
  }]
},
// Commerce
{
  subject: 'Commerce',
  files: [{
    name: i18next.t("auto.commerce_7bgnjs"),
    url: r2Url('data files/CBCS Syllabus/Commerce.pdf')
  }]
},
// Science Subjects
{
  subject: 'Botany',
  files: [{
    name: i18next.t("auto.botany_18bn1be"),
    url: r2Url('data files/CBCS Syllabus/Botany.pdf')
  }]
}, {
  subject: 'Chemistry',
  files: [{
    name: i18next.t("auto.chemistry_2ukyw3"),
    url: r2Url('data files/CBCS Syllabus/chemistry.pdf')
  }]
}, {
  subject: 'Physics',
  files: [{
    name: i18next.t("auto.physics_2lt2ge"),
    url: r2Url('data files/CBCS Syllabus/Physics.pdf')
  }]
}, {
  subject: 'Zoology',
  files: [{
    name: i18next.t("auto.zoology_1b0n882"),
    url: r2Url('data files/CBCS Syllabus/Zoology.pdf')
  }]
},
// Arts & Humanities Subjects
{
  subject: 'Arabic',
  files: [{
    name: i18next.t("auto.arabic_15ev19b"),
    url: r2Url('data files/CBCS Syllabus/arabic.pdf')
  }]
}, {
  subject: 'Economics',
  files: [{
    name: i18next.t("auto.economics_16itqah"),
    url: r2Url('data files/CBCS Syllabus/Economics.pdf')
  }]
}, {
  subject: 'English',
  files: [{
    name: i18next.t("auto.english_1yvlwev"),
    url: r2Url('data files/CBCS Syllabus/english.pdf')
  }]
}, {
  subject: 'Geography',
  files: [{
    name: i18next.t("auto.geography_14u909p"),
    url: r2Url('data files/CBCS Syllabus/Geography.pdf')
  }]
}, {
  subject: 'Hindi',
  files: [{
    name: i18next.t("auto.hindi_3oid1j"),
    url: r2Url('data files/CBCS Syllabus/Hindi.pdf')
  }]
}, {
  subject: 'History',
  files: [{
    name: i18next.t("auto.history_uwgklj"),
    url: r2Url('data files/CBCS Syllabus/History.pdf')
  }]
}, {
  subject: 'Home Science',
  files: [{
    name: i18next.t("auto.home_science_1q9b7xa"),
    url: r2Url('data files/CBCS Syllabus/home science.pdf')
  }]
}, {
  subject: 'Maithili',
  files: [{
    name: i18next.t("auto.maithili_1vyrzn4"),
    url: r2Url('data files/CBCS Syllabus/Maithili.pdf')
  }]
}, {
  subject: 'Music',
  files: [{
    name: i18next.t("auto.music_3hl2jo"),
    url: r2Url('data files/CBCS Syllabus/music.pdf')
  }]
}, {
  subject: 'Persian',
  files: [{
    name: i18next.t("auto.persian_1ppjnh3"),
    url: r2Url('data files/CBCS Syllabus/Persian.pdf')
  }]
}, {
  subject: 'Philosophy',
  files: [{
    name: i18next.t("auto.philosophy_jfu3pm"),
    url: r2Url('data files/CBCS Syllabus/philosophy.pdf')
  }]
}, {
  subject: 'Political Science',
  files: [{
    name: i18next.t("auto.political_science_1bf24oo"),
    url: r2Url('data files/CBCS Syllabus/political science.pdf')
  }]
}, {
  subject: 'Psychology',
  files: [{
    name: i18next.t("auto.psychology_lbv4va"),
    url: r2Url('data files/CBCS Syllabus/Psychology.pdf')
  }]
}, {
  subject: 'Sanskrit',
  files: [{
    name: i18next.t("auto.sanskrit_v4cxqm"),
    url: r2Url('data files/CBCS Syllabus/sanskrit.pdf')
  }]
}, {
  subject: 'Sociology',
  files: [{
    name: i18next.t("auto.sociology_exvqo1"),
    url: r2Url('data files/CBCS Syllabus/Sociology.pdf')
  }]
}, {
  subject: 'Urdu',
  files: [{
    name: i18next.t("auto.urdu_yjrjtf"),
    url: r2Url('data files/CBCS Syllabus/Urdu.pdf')
  }]
}];

const pgSyllabusData = [{
  subject: 'Chemistry',
  files: [{
    name: 'Chemistry PG CBCS Syllabus',
    url: 'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/PG%20CBCS%20Syllabus/Chemistry-cbcs.pdf'
  }]
}, {
  subject: 'Economics',
  files: [{
    name: 'MA Economics Syllabus',
    url: 'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/PG%20CBCS%20Syllabus/MA%20(Economics)%20Syllabus%2C%20Patna%20University%20.pdf'
  }]
}, {
  subject: 'Psychology',
  files: [{
    name: 'MA Psychology Syllabus',
    url: 'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/PG%20CBCS%20Syllabus/MA%20Psy%20Syllabus-1_240907_123519.pdf'
  }]
}];

const syllabusCategories = [{
  id: 'ug',
  label: 'UG',
  title: 'UG CBCS Syllabus',
  data: ugSyllabusData
}, {
  id: 'pg',
  label: 'PG',
  title: 'PG CBCS Syllabus',
  data: pgSyllabusData
}];

const Syllabus = () => {
  const [activeCategory, setActiveCategory] = useState('ug');
  const [openSubjects, setOpenSubjects] = useState({});
  const selectedCategory = syllabusCategories.find(category => category.id === activeCategory) || syllabusCategories[0];
  const toggleSubject = key => {
    setOpenSubjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  return <>
      <Helmet>
        <title>{i18next.t("auto.cbcs_syllabus_magadh_mahila_college_k42k6z")}</title>
        <meta name="description" content="CBCS Syllabus for all subjects at Magadh Mahila College, Patna University." />
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
              ${i18next.t("auto.cbcs_syllabus_pyp0mz")}
            `}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{`
              ${i18next.t("auto.download_the_comprehensive_syllabus_documents_for_all_1pov2j9")}
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{i18next.t("auto.about_cbcs_syllabus_1a8jbw6")}</h3>
                <p className="text-gray-600">{`
                  ${i18next.t("auto.the_choice_based_credit_system_cbcs_provides_1x2syd9")}
                `}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {syllabusCategories.map(category => <button key={category.id} type="button" onClick={() => setActiveCategory(category.id)} className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${activeCategory === category.id ? 'bg-primary text-white shadow-md' : 'bg-white text-primary border border-primary/20 hover:bg-primary/5'}`}>
                <GraduationCap className="w-4 h-4" />
                {category.label}
              </button>)}
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.35
        }} className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">{selectedCategory.title}</h2>
          </motion.div>

          {/* Subject Accordion */}
          {selectedCategory.data.length > 0 ? <div className="space-y-4">
            {selectedCategory.data.map((subject, index) => {
              const subjectKey = `${selectedCategory.id}-${index}`;
              return <motion.div key={`${selectedCategory.id}-${subject.subject}`} initial={{
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
                  <button onClick={() => toggleSubject(subjectKey)} className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors duration-200">
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
                  rotate: openSubjects[subjectKey] ? 180 : 0
                }} transition={{
                  duration: 0.3
                }}>
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openSubjects[subjectKey] && <motion.div initial={{
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
              </motion.div>;
            })}
          </div> : <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center text-amber-800 shadow-sm">
            PG CBCS syllabus PDFs were not found in this workspace. Add the PDF filenames to <span className="font-semibold">pgSyllabusData</span> after placing them in <span className="font-semibold">frontend/public/PG CBCS Syllabus</span>.
          </motion.div>}

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
export default Syllabus;
