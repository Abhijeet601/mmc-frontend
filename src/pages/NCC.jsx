import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Users, Target, Calendar, MapPin, Shield, Star, Flag, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';

const NCC = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>NCC - National Cadet Corps | Magadh Mahila College</title>
        <meta name="description" content="National Cadet Corps (NCC) at Magadh Mahila College - Building character, discipline, and leadership among students through military training and social service." />
      </Helmet>

      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-800 to-green-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-6"
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                National Cadet Corps (NCC)
              </h1>
              <p className="text-green-100 text-lg max-w-3xl mx-auto">
                "Unity and Discipline" - Building responsible and disciplined citizens through military training and social service
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-6">
                <span className="text-green-700">About NCC</span>
              </h2>
              <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-600">
                <p className="text-gray-700 text-lg leading-relaxed">
                  National Cadet Corps as the foremost organization of our youth has been performing a unique service to the nation by inculcating the spirit of national integration and unity in our youth and molding them into responsible and disciplined citizen. N.C.C Unit in Magadh Mahila College was established from the foundation of the College. It is the unit of Ist Bihar Girls Battalion, N.C.C. Patna, Which comes under Bihar and Jharkhand Directorate.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="rounded-2xl overflow-hidden border border-green-100 shadow-lg">
                <img
                  src={r2Url('images/iqac/extension-activities/ncc-image-2026-02-18.jpeg')}
                  alt="NCC Activities"
                  className="w-full h-auto max-h-[560px] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white text-center"
              >
                <Users className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">100</div>
                <div className="text-green-100">Enrolled Cadets</div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white text-center"
              >
                <Calendar className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">Weekly</div>
                <div className="green-100">Parade Every Tuesday</div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white text-center"
              >
                <Award className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">B & C</div>
                <div className="green-100">Certificate Exams</div>
              </motion.div>
            </motion.div>

            {/* Officer In Charge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">Associate NCC Officer</span>
              </h2>
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden">
                <div className="bg-green-700 p-4">
                  <h3 className="text-white text-xl font-bold text-center">Dr. Namrata</h3>
                  <p className="text-green-100 text-center">Associate NCC Officer</p>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600">Assistant Professor</p>
                  <p className="text-gray-600">Department of Psychology</p>
                </div>
              </div>
            </motion.div>

            {/* Training Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">Training Activities</span>
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                Training forms the backbone of NCC. NCC provides different types of training activities to the Cadets. The training activities are broadly divided into four categories
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: BookOpen,
                    title: "Institutional Training",
                    description: "Weekly classes on military subjects, leadership, and civil duties"
                  },
                  {
                    icon: Target,
                    title: "Adventure Training",
                    description: "Mountaineering, trekking, and outdoor adventure activities"
                  },
                  {
                    icon: Flag,
                    title: "Youth Exchange Programme",
                    description: "International exposure and cultural exchange with NCC cadets abroad"
                  },
                  {
                    icon: Users,
                    title: "Community Development",
                    description: "Social service activities and awareness programmes"
                  }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <activity.icon className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Camp Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">Camp Training</span>
              </h2>
              <div className="bg-green-50 p-8 rounded-2xl">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  NCC Cadets of this college has participated in different camps throughout the country round the year. The cadets of this college are very active at the college and state level. Weekly parade and classes are being organized for 2 hours every Tuesday.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "ATC (Annual Training Camp)",
                    "TSC (Tribal Super 30 Camp)",
                    "NIC (National Integration Camp)",
                    "RD Parade",
                    "YEP (Youth Exchange Programme)"
                  ].map((camp, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white p-4 rounded-lg">
                      <Star className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{camp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Community Development Programme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">Community Development Programme</span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-gray-700 text-lg mb-6">
                  The most imposing landmark of the NCC has been social service activity. The purpose of organizing these activities is to make the cadet conscious and sensitive to the needs and problems of the people and also contribute meaningfully to enrich community life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Literacy Drive",
                    "AIDS Awareness Programme",
                    "Cancer Awareness Programme",
                    "Save the Girl Child Initiative",
                    "Tree Plantation",
                    "Blood Donation Camp",
                    "Flood Relief",
                    "UNESCO Pulse Polio Drive",
                    "Immunization Drive",
                    "Yoga Day"
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">Achievements & Recognition</span>
              </h2>
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl text-white">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Cadets have taken part in ATC, TSC, NIC, RD Parade, YEP and won accolades for their performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Every year, the cadets have been able to get Cadet Welfare Society Scholarship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Majority of cadets appearing for B & C certificate examinations have received good grades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>The unit organizes SSB training for cadets; some cadets have made it to defense services as officers</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">Our Mission</span>
              </h2>
              <div className="bg-gray-900 p-8 rounded-2xl text-white">
                <p className="text-lg leading-relaxed">
                  NCC unit of Magadh Mahila College has been playing a stellar role in inspiring and nurturing our girl's cadet with vital traits of character building, discipline, leadership and camaraderie. It gives special emphasis on military training, adventure activities and social awareness programme. It instills in them, secular ideals and patriotism-which is essential for nation building. It provides an ideal platform for holistic development of girls' cadet.
                </p>
              </div>
            </motion.div>

            {/* Reports Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">NCC Reports</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href={r2Url('documents/IQAC/NCC/mmc-ncc-report.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">NCC Report</h3>
                    <p className="text-gray-500 text-sm">View Document</p>
                  </div>
                </a>
                <a
                  href={r2Url('documents/IQAC/NCC/NCC-Report-2023-24.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">NCC Report 2023-24</h3>
                    <p className="text-gray-500 text-sm">View Document</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NCC;
