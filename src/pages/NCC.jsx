import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Users, Target, Calendar, MapPin, Shield, Star, Flag, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';
const NCC = () => {
  const {
    t
  } = useTranslation();
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  return <>
      <Helmet>
        <title>{i18next.t("auto.ncc_national_cadet_corps_magadh_mahila_college_1kz4143")}</title>
        <meta name="description" content="National Cadet Corps (NCC) at Magadh Mahila College - Building character, discipline, and leadership among students through military training and social service." />
      </Helmet>

      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-800 to-green-900">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center">
              <motion.div initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-6">
                <Shield className="w-12 h-12 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{`
                ${i18next.t("auto.national_cadet_corps_ncc_1qlru8u")}
              `}</h1>
              <p className="text-green-100 text-lg max-w-3xl mx-auto">{`
                ${i18next.t("auto.unity_and_discipline_building_responsible_and_disciplined_tbxnh")}
              `}</p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
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
          }} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-6">
                <span className="text-green-700">{i18next.t("auto.about_ncc_1vyneu")}</span>
              </h2>
              <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-600">
                <p className="text-gray-700 text-lg leading-relaxed">{`
                  ${i18next.t("auto.national_cadet_corps_as_the_foremost_organization_1qds9cq")}
                `}</p>
              </div>
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
          }} className="mb-12">
              <div className="rounded-2xl overflow-hidden border border-green-100 shadow-lg">
                <img src={r2Url('images/iqac/extension-activities/ncc-image-2026-02-18.jpeg')} alt={i18next.t("auto.ncc_activities_166sg0w")} className="w-full h-auto max-h-[560px] object-cover" loading="lazy" />
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
            once: true
          }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white text-center">
                <Users className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">100</div>
                <div className="text-green-100">{i18next.t("auto.enrolled_cadets_1u04a52")}</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white text-center">
                <Calendar className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">{i18next.t("auto.weekly_1gric18")}</div>
                <div className="green-100">{i18next.t("auto.parade_every_tuesday_bjfceo")}</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white text-center">
                <Award className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">{i18next.t("auto.b_c_3j68le")}</div>
                <div className="green-100">{i18next.t("auto.certificate_exams_6q70tu")}</div>
              </motion.div>
            </motion.div>

            {/* Officer In Charge */}
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
          }} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">{i18next.t("auto.associate_ncc_officer_1cxrkq5")}</span>
              </h2>
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden">
                <div className="bg-green-700 p-4">
                  <h3 className="text-white text-xl font-bold text-center">{i18next.t("auto.dr_namrata_y1tq7t")}</h3>
                  <p className="text-green-100 text-center">{i18next.t("auto.associate_ncc_officer_1cxrkq5")}</p>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600">{i18next.t("auto.assistant_professor_wiyzr6")}</p>
                  <p className="text-gray-600">{i18next.t("auto.department_of_psychology_mttr6z")}</p>
                </div>
              </div>
            </motion.div>

            {/* Training Activities */}
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
          }} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">{i18next.t("auto.training_activities_pult7y")}</span>
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">{`
                ${i18next.t("auto.training_forms_the_backbone_of_ncc_ncc_yu0bin")}
              `}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[{
                icon: BookOpen,
                title: i18next.t("auto.institutional_training_1xvf1ek"),
                description: i18next.t("auto.weekly_classes_on_military_subjects_leadership_and_lt7kk")
              }, {
                icon: Target,
                title: i18next.t("auto.adventure_training_nqjyyz"),
                description: i18next.t("auto.mountaineering_trekking_and_outdoor_adventure_activities_1ams7l5")
              }, {
                icon: Flag,
                title: i18next.t("auto.youth_exchange_programme_1o3j8wt"),
                description: i18next.t("auto.international_exposure_and_cultural_exchange_with_ncc_bf845n")
              }, {
                icon: Users,
                title: i18next.t("auto.community_development_1sl78w5"),
                description: i18next.t("auto.social_service_activities_and_awareness_programmes_wfeah3")
              }].map((activity, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <activity.icon className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Camp Activities */}
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
          }} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">{i18next.t("auto.camp_training_3khkwq")}</span>
              </h2>
              <div className="bg-green-50 p-8 rounded-2xl">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{`
                  ${i18next.t("auto.ncc_cadets_of_this_college_has_participated_qjrn5w")}
                `}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["ATC (Annual Training Camp)", "TSC (Tribal Super 30 Camp)", "NIC (National Integration Camp)", "RD Parade", "YEP (Youth Exchange Programme)"].map((camp, index) => <div key={index} className="flex items-center gap-2 bg-white p-4 rounded-lg">
                      <Star className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{camp}</span>
                    </div>)}
                </div>
              </div>
            </motion.div>

            {/* Community Development Programme */}
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
          }} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">{i18next.t("auto.community_development_programme_oymkwp")}</span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-gray-700 text-lg mb-6">{`
                  ${i18next.t("auto.the_most_imposing_landmark_of_the_ncc_gbfpi")}
                `}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Literacy Drive", "AIDS Awareness Programme", "Cancer Awareness Programme", "Save the Girl Child Initiative", "Tree Plantation", "Blood Donation Camp", "Flood Relief", "UNESCO Pulse Polio Drive", "Immunization Drive", "Yoga Day"].map((activity, index) => <div key={index} className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{activity}</span>
                    </div>)}
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
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
          }} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">{i18next.t("auto.achievements_recognition_4dn5kg")}</span>
              </h2>
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl text-white">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>{i18next.t("auto.cadets_have_taken_part_in_atc_tsc_1bs5ce4")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>{i18next.t("auto.every_year_the_cadets_have_been_able_1uplwfu")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>{i18next.t("auto.majority_of_cadets_appearing_for_b_c_1gzn3kx")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>{i18next.t("auto.the_unit_organizes_ssb_training_for_cadets_hkvtze")}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Mission */}
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
          }} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">{i18next.t("auto.our_mission_1gebmm9")}</span>
              </h2>
              <div className="bg-gray-900 p-8 rounded-2xl text-white">
                <p className="text-lg leading-relaxed">{`
                  ${i18next.t("auto.ncc_unit_of_magadh_mahila_college_has_5pope9")}
                `}</p>
              </div>
            </motion.div>

            {/* Reports Section */}
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
          }}>
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-green-700">{i18next.t("auto.ncc_reports_1y5t792")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href={r2Url('documents/IQAC/NCC/mmc-ncc-report.pdf')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{i18next.t("auto.ncc_report_14vbtnp")}</h3>
                    <p className="text-gray-500 text-sm">{i18next.t("auto.view_document_trc75z")}</p>
                  </div>
                </a>
                <a href={r2Url('documents/IQAC/NCC/NCC-Report-2023-24.pdf')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{i18next.t("auto.ncc_report_2023_24_19q5899")}</h3>
                    <p className="text-gray-500 text-sm">{i18next.t("auto.view_document_trc75z")}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default NCC;
