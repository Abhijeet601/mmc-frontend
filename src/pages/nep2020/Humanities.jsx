import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Languages, Brain, ScrollText, Globe, PenTool, Music, Users, X, Sparkles, Star, Zap } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';



const Humanities = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjects = [
    {
      name: 'Hindi',
      icon: BookOpen,
      description: 'Study of Hindi language, literature, and cultural heritage',
      color: 'from-primary to-primary',
      highlights: 'मगध महिला महाविद्यालय में हिंदी विभाग की स्थापना सन 1946 में हुई । प्रारंभ में स्नातक एवं इंटरमीडिएट कक्षाओं तक ही हिंदी विषय का पठन-पाठन समिति रहा । सन 1960 से स्नातक सम्मान का अध्यापन कार्य प्रारंभ किया गया। यह विभाग संपूर्ण महाविद्यालय की छात्राओं की भाषायी रचना कौशल के प्रति सजग भूमिका का निर्वहन करता है। इस कार्य हेतु विभिन्न स्तरीय रचनात्मक प्रतियोगिताएं आयोजित की जाती है तथा छात्राओं का उत्साहवर्धन करने के लिए पुरस्कार एवं प्रमाण पत्र भी प्रदान किए जाते हैं । राष्ट्रीय एवं अंतर्राष्ट्रीय स्तर पर आयोजित होने वाले साहित्यिक एवं प्रतियोगी आयोजनों में सहभागिता हेतु विभाग द्वारा छात्राओं को प्रोत्साहित एवं प्रशिक्षित किया जाता है।',
      faculty: [
        { name: 'Dr. Shipra Prabha', designation: 'HOD, Hindi', image: 'Dr. Shipra Prabha, HOD, Hindi.jpeg' },
        { name: 'Dr. Aasha Kumari', designation: 'Assistant Professor, Hindi', image: 'Dr. Aasha Kumari, Assistant Professor, Hindi.jpeg' },
        { name: 'Dr. Jyoti Dubey', designation: 'Assistant Professor, Hindi', image: 'Dr. Jyoti Dubey, Assistant Professor, Hindi.jpeg' },
        { name: 'Dr. Preeti Kumari', designation: 'Assistant Professor, Hindi', image: 'Dr. Preeti Kumari, Assistant Professor, Hindi.jpeg' }
      ]
    },
    {
      name: 'English',
      icon: PenTool,
      description: 'English language proficiency and literary studies',
      color: 'from-primary to-highlight',
      highlights: 'The English department focuses on developing strong communication skills, literary analysis, and cultural understanding through comprehensive language and literature courses.',
      faculty: [
        { name: 'Dr. Archana Jaiswal', designation: 'Associate Professor, HOD English', image: 'Dr. Archana Jaiswal, Associate Professor, HOD English.jpeg' }
      ]
    },
    {
      name: 'Maithili',
      icon: ScrollText,
      description: 'Regional language and literature of Mithila region',
      color: 'from-primary to-highlight',
      highlights: 'The Maithili department preserves and promotes the rich literary tradition of the Mithila region through language instruction and cultural studies.',
      faculty: []
    },
    {
      name: 'Persian',
      icon: Globe,
      description: 'Classical Persian language and Islamic studies',
      color: 'from-primary to-highlight',
      highlights: 'The Persian department offers courses in classical Persian literature, Islamic studies, and cultural heritage of Persian-speaking regions.',
      faculty: []
    },
    {
      name: 'Philosophy',
      icon: Brain,
      description: 'Critical thinking, ethics, and philosophical inquiry',
      color: 'from-primary to-highlight',
      highlights: 'The Philosophy department encourages critical thinking and ethical reasoning through the study of various philosophical traditions and contemporary issues.',
      faculty: [
        { name: 'Dr. Sanjay Kumar Priyadarshi', designation: 'Assistant Professor, Philosophy', image: 'Dr. Sanjay Kumar Priyadarshi, Assistant Professor, Philosophy.jpeg' },
        { name: 'Ms. Ranjana Yadav', designation: 'Assistant Professor, Philosophy', image: 'Ms. Ranjana Yadav, Assistant Professor, Philosophy.jpeg' }
      ]
    },
    {
      name: 'Sanskrit',
      icon: Languages,
      description: 'Ancient Sanskrit language and Vedic literature',
      color: 'from-primary to-highlight',
      highlights: 'The Sanskrit department provides instruction in ancient Sanskrit language, Vedic literature, and classical Indian philosophy.',
      faculty: []
    },
    {
      name: 'Urdu',
      icon: Music,
      description: 'Urdu language, poetry, and cultural studies',
      color: 'from-primary to-highlight',
      highlights: 'The Urdu department offers comprehensive study of Urdu language, poetry, literature, and cultural traditions.',
      faculty: [
        { name: 'Dr. Md. Rizwan', designation: 'Assistant Professor, Urdu', image: 'Dr. Md. Rizwan, Assistant Professor, Urdu.jpeg' },
        { name: 'Dr. Sohail Anwer', designation: 'Assistant Professor, Urdu', image: 'Dr. Md. Sohail Anwer.jpeg' }
      ]
    }
  ];

  return (

    <>
      <Helmet>
        <title>Humanities - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Humanities programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Humanities
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                The Humanities department at Magadh Mahila College offers comprehensive programs aligned with NEP 2020 guidelines, focusing on critical thinking, cultural understanding, and interdisciplinary learning.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Programs Offered</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Bachelor of Arts (BA) - 4 Year Program</li>
                <li>Master of Arts (MA) in various disciplines</li>
                <li>Certificate and Vocational courses</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Interdisciplinary curriculum</li>
                <li>Focus on skill development</li>
                <li>Research-oriented learning</li>
                <li>Cultural and ethical studies</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Detailed curriculum and course information will be available here soon.
                </p>
              </div>
            </div>
          </div>




          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-primary">
                Subjects Offered
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="group relative cursor-pointer h-full"
                  onClick={() => setSelectedSubject(subject)}
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden relative">

                    {/* Animated background blob */}
                    <motion.div
                      className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.8 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <subject.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {subject.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {subject.description}
                      </p>

                      {/* Learn more indicator */}
                      <motion.div
                        className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        Explore <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>

      <AnimatePresence>
        {selectedSubject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSubject(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl cursor-default"
            >
              <button
                onClick={() => setSelectedSubject(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedSubject.color} flex items-center justify-center shadow-lg`}
                  >
                    <selectedSubject.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Department of {selectedSubject.name}</h2>
                    <p className="text-muted-foreground text-lg">{selectedSubject.description}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-3">Highlights of the Department</h3>
                    <p className="text-sm text-foreground">{selectedSubject.highlights}</p>
                  </div>

                  {selectedSubject.faculty.length > 0 && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary mb-3">Faculty Members</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedSubject.faculty.map((member, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                              className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                              alt={member.name}
                              src={r2Url(`images/faculty/${encodeURIComponent(member.image)}`)}
                              onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d';
                              }}
                            />
                            <h4 className="text-sm font-semibold text-center text-foreground">{member.name}</h4>
                            <p className="text-xs text-center text-muted-foreground">{member.designation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
};

export default Humanities;
