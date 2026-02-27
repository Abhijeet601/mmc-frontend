import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Calendar, MapPin, BookOpen, Droplets, TreePine, GraduationCap, Award, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';
const NSS = () => {
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
        <title>{i18next.t("auto.nss_national_service_scheme_magadh_mahila_college_1avolfl")}</title>
        <meta name="description" content="National Service Scheme (NSS) at Magadh Mahila College - Promoting social responsibility and community service among students." />
      </Helmet>

      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-700 to-red-900">
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
                <Heart className="w-12 h-12 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{`
                ${i18next.t("auto.national_service_scheme_nss_16kkct8")}
              `}</h1>
              <p className="text-red-100 text-lg max-w-3xl mx-auto">{`
                ${i18next.t("auto.education_through_community_service_sensitizing_students_to_5xl5yj")}
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
                <span className="text-red-700">{i18next.t("auto.about_nss_1vynt2")}</span>
              </h2>
              <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-600">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{`
                  ${i18next.t("auto.magadh_mahila_college_has_had_a_long_15avjet")}
                `}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{`
                  ${i18next.t("auto.nss_started_with_the_initial_objective_of_mc80hw")}
                `}</p>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
            once: true
          }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl text-white">
                <Calendar className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-2">{i18next.t("auto.120_hours_kc2ydh")}</div>
                <div className="text-red-100">{i18next.t("auto.regular_activity_per_year_l6y67u")}</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl text-white">
                <Award className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-2">{i18next.t("auto.10_days_2v2c0b")}</div>
                <div className="text-red-100">{i18next.t("auto.special_camping_programme_33ge93")}</div>
              </motion.div>
            </motion.div>

            {/* Programme Officers */}
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
                <span className="text-red-700">{i18next.t("auto.programme_officers_zm0do8")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{
                name: i18next.t("auto.dr_madhu_kumari_gupta_vqlz92"),
                designation: "Programme Officer"
              }, {
                name: i18next.t("auto.dr_jyoti_dubey_1tqj3df"),
                designation: "Programme Officer"
              }, {
                name: i18next.t("auto.dr_aasha_kumari_1rcju8e"),
                designation: "Programme Officer"
              }].map((officer, index) => <motion.div key={index} initial={{
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
              }} className="bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden">
                    <div className="bg-red-700 p-4">
                      <h3 className="text-white text-lg font-bold text-center">{officer.name}</h3>
                      <p className="text-red-100 text-center text-sm">{officer.designation}</p>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Types of Activities */}
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
                <span className="text-red-700">{i18next.t("auto.types_of_activities_usohvw")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <Target className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{i18next.t("auto.regular_activity_1tqke8i")}</h3>
                  <p className="text-gray-600">{i18next.t("auto.120_hours_per_year_of_community_service_10au10h")}</p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl">
                  <Calendar className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{i18next.t("auto.special_camping_programme_33ge93")}</h3>
                  <p className="text-gray-600">{i18next.t("auto.10_days_duration_special_camp_for_intensive_1623xk1")}</p>
                </div>
              </div>
            </motion.div>

            {/* Major Areas */}
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
                <span className="text-red-700">{i18next.t("auto.major_areas_of_work_1q292wi")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[{
                icon: TreePine,
                title: i18next.t("auto.plantation_of_trees_rh7yo3")
              }, {
                icon: BookOpen,
                title: i18next.t("auto.adult_education_13l147b")
              }, {
                icon: GraduationCap,
                title: i18next.t("auto.visual_handicapped_support_162p7xz")
              }, {
                icon: Users,
                title: i18next.t("auto.economically_weaker_students_support_1at00a0")
              }, {
                icon: Heart,
                title: i18next.t("auto.visiting_old_age_homes_3l59zg")
              }, {
                icon: Shield,
                title: i18next.t("auto.special_camps_for_social_values_fxqka8")
              }].map((area, index) => <motion.div key={index} initial={{
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
              }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow border border-gray-100">
                    <area.icon className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{area.title}</span>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Partners */}
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
                <span className="text-red-700">{i18next.t("auto.our_partners_1jmy50w")}</span>
              </h2>
              <div className="bg-red-50 p-8 rounded-2xl">
                <p className="text-gray-700 text-lg mb-4">{`
                  ${i18next.t("auto.currently_associated_with_104kf81")}
                `}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white px-6 py-3 rounded-lg shadow">
                    <span className="font-bold text-gray-800">{i18next.t("auto.red_cross_society_2l39km")}</span>
                    <span className="text-gray-600">{` ${i18next.t("auto.for_blood_donations_126ty4e")}`}</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-lg shadow">
                    <span className="font-bold text-gray-800">{i18next.t("auto.various_ngos_11vxlit")}</span>
                    <span className="text-gray-600">{` ${i18next.t("auto.working_on_aids_awareness_3mux9s")}`}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Events Organized */}
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
                <span className="text-red-700">{i18next.t("auto.events_organized_wq560t")}</span>
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">{`
                ${i18next.t("auto.nss_is_also_responsible_for_organizing_debate_3410s")}
              `}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Award className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">{i18next.t("auto.debate_competitions_1q6247k")}</h3>
                  <p className="text-gray-600 text-sm">{i18next.t("auto.inter_college_level_6yrptd")}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <BookOpen className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">{i18next.t("auto.literary_events_vg5z2u")}</h3>
                  <p className="text-gray-600 text-sm">{i18next.t("auto.various_competitions_55bra")}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <Heart className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">{i18next.t("auto.musical_events_vb9g1i")}</h3>
                  <p className="text-gray-600 text-sm">{i18next.t("auto.cultural_programmes_1tdqh7y")}</p>
                </div>
              </div>
            </motion.div>

            {/* NSS Reports 2017-18 */}
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
                <span className="text-red-700">{i18next.t("auto.nss_report_2017_18_4608kl")}</span>
              </h2>
              <div className="bg-red-50 p-8 rounded-2xl">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{`
                  ${i18next.t("auto.the_overall_objective_of_the_scheme_is_15r8lkk")}
                `}</p>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{i18next.t("auto.special_programme_1fgk1k")}</h3>
                  <p className="text-gray-600">{`
                    ${i18next.t("auto.on_the_occasion_of_children_s_day_1cuopya")}
                  `}</p>
                </div>
              </div>
            </motion.div>

            {/* NSS Reports 2017 */}
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
                <span className="text-red-700">{i18next.t("auto.nss_report_2017_1tiy5tt")}</span>
              </h2>
              <div className="space-y-4">
                {[{
                date: "07/02/17",
                event: "Blood Donation Camp",
                description: i18next.t("auto.organized_by_hdfc_bank_in_the_campus_vnwfu9")
              }, {
                date: "01.08.17-15.08.2017",
                event: "Swachhta – Pakhwada",
                description: i18next.t("auto.tree_plantation_and_essay_writing_competition_nyaiyq")
              }, {
                date: "15/08/17",
                event: "Independence Day",
                description: i18next.t("auto.cleanliness_drive_in_college_campus_146zt2v")
              }, {
                date: "06/09/17",
                event: "Swachhta-Pakhwada",
                description: i18next.t("auto.essay_competition_on_mai_swachhata_ke_liye_tznjbn")
              }, {
                date: "08/09/2017",
                event: "Literacy Day",
                description: i18next.t("auto.nss_volunteers_visited_slum_areas_of_anta_1krn6ve")
              }, {
                date: "18/09/17",
                event: "Blood Donation Camp",
                description: i18next.t("auto.in_collaboration_with_red_cross_society_1no0mvw")
              }, {
                date: "14/11/17",
                event: "Children's Day",
                description: i18next.t("auto.distributed_stationary_and_refreshment_among_slums_children_q9rr0v")
              }, {
                date: "19/11/17",
                event: "Communal Harmony Week",
                description: i18next.t("auto.speech_competition_and_poster_making_competition_wuw7n2")
              }, {
                date: "02/12/17",
                event: "AIDS Day",
                description: i18next.t("auto.human_chain_on_main_road_outside_college_141oonv")
              }].map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.05
              }} className="flex gap-4 bg-white p-4 rounded-xl shadow border border-gray-100">
                    <div className="bg-red-100 px-4 py-2 rounded-lg flex-shrink-0">
                      <span className="text-red-700 font-bold text-sm">{item.date}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.event}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* NSS Report 2018 */}
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
                <span className="text-red-700">{i18next.t("auto.nss_report_2018_1tiy5u6")}</span>
              </h2>
              <div className="space-y-4">
                {[{
                date: "12/01/18",
                event: "National Youth Day",
                description: i18next.t("auto.inter_college_speech_competition_shreya_sen_got_12affrv")
              }, {
                date: "21/02/18 - 27/02/18",
                event: "Special Camp",
                description: i18next.t("auto.theme_baal_vivah_evam_dahej_unmulan_1jmlkv1")
              }, {
                date: "29/08/18",
                event: "Pre-Republic Day Parade",
                description: i18next.t("auto.volunteers_from_vanijya_college_patna_women_s_1wa08fq")
              }].map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="flex gap-4 bg-white p-4 rounded-xl shadow border border-gray-100">
                    <div className="bg-red-100 px-4 py-2 rounded-lg flex-shrink-0">
                      <span className="text-red-700 font-bold text-sm">{item.date}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.event}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>)}
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
                <span className="text-red-700">{i18next.t("auto.nss_reports_1w6pwxi")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href={r2Url('documents/IQAC/NSS/mmc_nss_aanual_report_2223.pdf')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{i18next.t("auto.nss_annual_report_2022_23_gn020i")}</h3>
                    <p className="text-gray-500 text-sm">{i18next.t("auto.view_document_trc75z")}</p>
                  </div>
                </a>
                <a href={r2Url('documents/IQAC/NSS/mmc-nss-report-1.pdf')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{i18next.t("auto.nss_report_6dd145")}</h3>
                    <p className="text-gray-500 text-sm">{i18next.t("auto.view_document_trc75z")}</p>
                  </div>
                </a>
                <a href={r2Url('documents/IQAC/NSS/NSS-Report-2023-24.pdf')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{i18next.t("auto.nss_report_2023_24_46sjrh")}</h3>
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
export default NSS;
