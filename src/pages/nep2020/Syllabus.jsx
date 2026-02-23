import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ChevronDown, BookOpen, GraduationCap } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';

// Subject-wise syllabus data organized by category
const syllabusData = [
  // Professional Courses - at top as requested
  {
    subject: 'BBA',
    files: [
      { name: 'BBA CBCS Syllabus', url: r2Url('data files/CBCS Syllabus/BBA-cbcs-syllabus-.pdf') }
    ]
  },
  {
    subject: 'BCA',
    files: [
      { name: 'BCA Syllabus', url: r2Url('data files/CBCS Syllabus/Syllabus-BCA.pdf') }
    ]
  },
  {
    subject: 'BSW',
    files: [
      { name: 'BSW', url: r2Url('data files/CBCS Syllabus/BSW.pdf') }
    ]
  },
  // Commerce
  {
    subject: 'Commerce',
    files: [
      { name: 'Commerce', url: r2Url('data files/CBCS Syllabus/Commerce.pdf') }
    ]
  },
  // Science Subjects
  {
    subject: 'Botany',
    files: [
      { name: 'Botany', url: r2Url('data files/CBCS Syllabus/Botany.pdf') }
    ]
  },
  {
    subject: 'Chemistry',
    files: [
      { name: 'Chemistry', url: r2Url('data files/CBCS Syllabus/chemistry.pdf') }
    ]
  },
  {
    subject: 'Physics',
    files: [
      { name: 'Physics', url: r2Url('data files/CBCS Syllabus/Physics.pdf') }
    ]
  },
  {
    subject: 'Zoology',
    files: [
      { name: 'Zoology', url: r2Url('data files/CBCS Syllabus/Zoology.pdf') }
    ]
  },
  // Arts & Humanities Subjects
  {
    subject: 'Arabic',
    files: [
      { name: 'Arabic', url: r2Url('data files/CBCS Syllabus/arabic.pdf') }
    ]
  },
  {
    subject: 'Economics',
    files: [
      { name: 'Economics', url: r2Url('data files/CBCS Syllabus/Economics.pdf') }
    ]
  },
  {
    subject: 'English',
    files: [
      { name: 'English', url: r2Url('data files/CBCS Syllabus/english.pdf') }
    ]
  },
  {
    subject: 'Geography',
    files: [
      { name: 'Geography', url: r2Url('data files/CBCS Syllabus/Geography.pdf') }
    ]
  },
  {
    subject: 'Hindi',
    files: [
      { name: 'Hindi', url: r2Url('data files/CBCS Syllabus/Hindi.pdf') }
    ]
  },
  {
    subject: 'History',
    files: [
      { name: 'History', url: r2Url('data files/CBCS Syllabus/History.pdf') }
    ]
  },
  {
    subject: 'Home Science',
    files: [
      { name: 'Home Science', url: r2Url('data files/CBCS Syllabus/home science.pdf') }
    ]
  },
  {
    subject: 'Maithili',
    files: [
      { name: 'Maithili', url: r2Url('data files/CBCS Syllabus/Maithili.pdf') }
    ]
  },
  {
    subject: 'Music',
    files: [
      { name: 'Music', url: r2Url('data files/CBCS Syllabus/music.pdf') }
    ]
  },
  {
    subject: 'Persian',
    files: [
      { name: 'Persian', url: r2Url('data files/CBCS Syllabus/Persian.pdf') }
    ]
  },
  {
    subject: 'Philosophy',
    files: [
      { name: 'Philosophy', url: r2Url('data files/CBCS Syllabus/philosophy.pdf') }
    ]
  },
  {
    subject: 'Political Science',
    files: [
      { name: 'Political Science', url: r2Url('data files/CBCS Syllabus/political science.pdf') }
    ]
  },
  {
    subject: 'Psychology',
    files: [
      { name: 'Psychology', url: r2Url('data files/CBCS Syllabus/Psychology.pdf') }
    ]
  },
  {
    subject: 'Sanskrit',
    files: [
      { name: 'Sanskrit', url: r2Url('data files/CBCS Syllabus/sanskrit.pdf') }
    ]
  },
  {
    subject: 'Sociology',
    files: [
      { name: 'Sociology', url: r2Url('data files/CBCS Syllabus/Sociology.pdf') }
    ]
  },
  {
    subject: 'Urdu',
    files: [
      { name: 'Urdu', url: r2Url('data files/CBCS Syllabus/Urdu.pdf') }
    ]
  }
];

const Syllabus = () => {
  const [openSubjects, setOpenSubjects] = useState({});

  const toggleSubject = (index) => {
    setOpenSubjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Helmet>
        <title>CBCS Syllabus - Magadh Mahila College</title>
        <meta name="description" content="CBCS Syllabus for all subjects at Magadh Mahila College, Patna University." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              CBCS Syllabus
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download the comprehensive syllabus documents for all undergraduate and postgraduate programs under Choice Based Credit System (CBCS).
            </p>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">About CBCS Syllabus</h3>
                <p className="text-gray-600">
                  The Choice Based Credit System (CBCS) provides a flexible approach to learning, allowing students to choose courses from a wide range of options. 
                  The syllabus documents provided here cover semester-wise curriculum for all undergraduate programs, 
                  including core courses, elective courses, ability enhancement courses, and skill enhancement courses.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Subject Accordion */}
          <div className="space-y-4">
            {syllabusData.map((subject, index) => (
              <motion.div
                key={subject.subject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleSubject(index)}
                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-gray-800">
                        {subject.subject}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {subject.files.length} document{subject.files.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openSubjects[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openSubjects[index] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {subject.files.map((file, fileIndex) => (
                              <motion.a
                                key={file.name}
                                href={file.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: fileIndex * 0.1 }}
                              >
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                  <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-gray-800 truncate">{file.name}</p>
                                  <p className="text-sm text-gray-500">PDF Document</p>
                                </div>
                                <Download className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg"
          >
            <p className="text-amber-800">
              <strong>Note:</strong> For any queries regarding the syllabus or academic curriculum, 
              please contact the college administration or respective department heads.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Syllabus;
