import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Calendar, MapPin, BookOpen, Droplets, TreePine, GraduationCap, Award, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';

const NSS = () => {
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
        <title>NSS - National Service Scheme | Magadh Mahila College</title>
        <meta name="description" content="National Service Scheme (NSS) at Magadh Mahila College - Promoting social responsibility and community service among students." />
      </Helmet>

      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-700 to-red-900">
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
                <Heart className="w-12 h-12 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                National Service Scheme (NSS)
              </h1>
              <p className="text-red-100 text-lg max-w-3xl mx-auto">
                "Education through Community Service" - Sensitizing students to various social issues and promoting holistic development
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
                <span className="text-red-700">About NSS</span>
              </h2>
              <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-600">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Magadh Mahila College has had a long tradition of social activism. Its Social Service Society was originally called 'Aloke'. In the seventies it was reconstituted as the NSS under the scheme launched by the Ministry of Youth Affairs and Sports.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  NSS started with the initial objective of 'Education through community service'. Now it has been restated aptly as "Personality Development of the Students Through Community Service". The overall objective of the scheme is to sensitize students to various social issues through seminars, workshops and social service programmes.
                </p>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl text-white"
              >
                <Calendar className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-2">120 Hours</div>
                <div className="text-red-100">Regular Activity Per Year</div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl text-white"
              >
                <Award className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-2">10 Days</div>
                <div className="text-red-100">Special Camping Programme</div>
              </motion.div>
            </motion.div>

            {/* Programme Officers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-red-700">Programme Officers</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Dr. Madhu Kumari Gupta", designation: "Programme Officer" },
                  { name: "Dr. Jyoti Dubey", designation: "Programme Officer" },
                  { name: "Dr. Aasha Kumari", designation: "Programme Officer" }
                ].map((officer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden"
                  >
                    <div className="bg-red-700 p-4">
                      <h3 className="text-white text-lg font-bold text-center">{officer.name}</h3>
                      <p className="text-red-100 text-center text-sm">{officer.designation}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Types of Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-red-700">Types of Activities</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <Target className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Regular Activity</h3>
                  <p className="text-gray-600">120 hours per year of community service activities</p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl">
                  <Calendar className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Special Camping Programme</h3>
                  <p className="text-gray-600">10 days duration special camp for intensive training</p>
                </div>
              </div>
            </motion.div>

            {/* Major Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-red-700">Major Areas of Work</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: TreePine, title: "Plantation of Trees" },
                  { icon: BookOpen, title: "Adult Education" },
                  { icon: GraduationCap, title: "Visual Handicapped Support" },
                  { icon: Users, title: "Economically Weaker Students Support" },
                  { icon: Heart, title: "Visiting Old Age Homes" },
                  { icon: Shield, title: "Special Camps for Social Values" }
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow border border-gray-100"
                  >
                    <area.icon className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{area.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-red-700">Our Partners</span>
              </h2>
              <div className="bg-red-50 p-8 rounded-2xl">
                <p className="text-gray-700 text-lg mb-4">
                  Currently associated with:
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white px-6 py-3 rounded-lg shadow">
                    <span className="font-bold text-gray-800">Red Cross Society</span>
                    <span className="text-gray-600"> (for blood donations)</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-lg shadow">
                    <span className="font-bold text-gray-800">Various NGOs</span>
                    <span className="text-gray-600"> (working on AIDS awareness)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Events Organized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-red-700">Events Organized</span>
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                NSS is also responsible for organizing debate competition, literary events, musical events etc. at inter-college level.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Award className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Debate Competitions</h3>
                  <p className="text-gray-600 text-sm">Inter-college level</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <BookOpen className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Literary Events</h3>
                  <p className="text-gray-600 text-sm">Various competitions</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Heart className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">Musical Events</h3>
                  <p className="text-gray-600 text-sm">Cultural programmes</p>
                </div>
              </div>
            </motion.div>

            {/* NSS Reports 2017-18 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-red-700">NSS Report 2017-18</span>
              </h2>
              <div className="bg-red-50 p-8 rounded-2xl">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The overall objective of the scheme is to sensitize students with various social issues. We do this through seminars, workshops and social service programmes.
                </p>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Special Programme</h3>
                  <p className="text-gray-600">
                    On the occasion of Children's Day, the students' of NSS distributed reading materials among the slum-dwellers of Anta-ghaat region. A Special Camp was also organized from 21.02.2018-25.02.2018 to spread awareness on several social issues.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* NSS Reports 2017 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-red-700">NSS Report 2017</span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    date: "07/02/17",
                    event: "Blood Donation Camp",
                    description: "Organized by HDFC Bank in the campus"
                  },
                  {
                    date: "01.08.17-15.08.2017",
                    event: "Swachhta – Pakhwada",
                    description: "Tree Plantation and Essay writing competition"
                  },
                  {
                    date: "15/08/17",
                    event: "Independence Day",
                    description: "Cleanliness drive in college campus"
                  },
                  {
                    date: "06/09/17",
                    event: "Swachhta-Pakhwada",
                    description: "Essay competition on 'Mai Swachhata ke liye kya Krungi'"
                  },
                  {
                    date: "08/09/2017",
                    event: "Literacy Day",
                    description: "NSS volunteers visited slum areas of Anta Ghat"
                  },
                  {
                    date: "18/09/17",
                    event: "Blood Donation Camp",
                    description: "In collaboration with RED CROSS SOCIETY"
                  },
                  {
                    date: "14/11/17",
                    event: "Children's Day",
                    description: "Distributed stationary and refreshment among slums children"
                  },
                  {
                    date: "19/11/17",
                    event: "Communal Harmony Week",
                    description: "Speech Competition and Poster making competition"
                  },
                  {
                    date: "02/12/17",
                    event: "AIDS Day",
                    description: "Human chain on main road outside College"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex gap-4 bg-white p-4 rounded-xl shadow border border-gray-100"
                  >
                    <div className="bg-red-100 px-4 py-2 rounded-lg flex-shrink-0">
                      <span className="text-red-700 font-bold text-sm">{item.date}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.event}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* NSS Report 2018 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-red-700">NSS Report 2018</span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    date: "12/01/18",
                    event: "National Youth Day",
                    description: "Inter College speech competition - Shreya Sen got 3rd prize"
                  },
                  {
                    date: "21/02/18 - 27/02/18",
                    event: "Special Camp",
                    description: "Theme: 'Baal Vivah Evam Dahej Unmulan'"
                  },
                  {
                    date: "29/08/18",
                    event: "Pre-Republic Day Parade",
                    description: "Volunteers from Vanijya College, Patna Women's College participated"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4 bg-white p-4 rounded-xl shadow border border-gray-100"
                  >
                    <div className="bg-red-100 px-4 py-2 rounded-lg flex-shrink-0">
                      <span className="text-red-700 font-bold text-sm">{item.date}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.event}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
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
                <span className="text-red-700">NSS Reports</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href={r2Url('documents/IQAC/NSS/mmc_nss_aanual_report_2223.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">NSS Annual Report 2022-23</h3>
                    <p className="text-gray-500 text-sm">View Document</p>
                  </div>
                </a>
                <a
                  href={r2Url('documents/IQAC/NSS/mmc-nss-report-1.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">NSS Report</h3>
                    <p className="text-gray-500 text-sm">View Document</p>
                  </div>
                </a>
                <a
                  href={r2Url('documents/IQAC/NSS/NSS-Report-2023-24.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">NSS Report 2023-24</h3>
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

export default NSS;
