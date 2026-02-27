import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';
import { Shield, Heart, Users, Calendar, Award, Target, TreePine, Droplets, BookOpen, FileText, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const getExtensionUnits = t => [{
  id: 'ncc',
  shortName: 'NCC',
  title: t("auto.national_cadet_corps_194fnbl"),
  subtitle: t("auto.leadership_discipline_and_national_service_1nast26"),
  icon: Shield,
  color: 'from-green-600 to-green-700',
  image: r2Url('images/iqac/extension-activities/ncc-image-2026-02-18.jpeg'),
  overview: `National Cadet Corps is one of the foremost youth organizations of India, cultivating national integration, unity, discipline, and responsible citizenship among students.

The NCC Unit in Magadh Mahila College has been active since the foundation of the college. It is a unit of 1st Bihar Girls Battalion, NCC, Patna, under the Bihar and Jharkhand Directorate.

Cadets participate in ATC, TSC, NIC, RD Parade, and YEP, and the unit regularly earns recognition for its performance. Weekly parade and classes are held for two hours every Tuesday.

The unit also organizes SSB training, and some cadets have joined defense services as officers. It emphasizes character building, leadership, camaraderie, patriotism, and holistic development.`,
  quickFacts: [{
    label: t("auto.unit_yjs76r"),
    value: '1st Bihar Girls Battalion, NCC, Patna'
  }, {
    label: t("auto.directorate_n6c339"),
    value: 'Bihar and Jharkhand Directorate'
  }, {
    label: t("auto.strength_1mendfk"),
    value: '100 cadets enrolled'
  }, {
    label: t("auto.weekly_training_3ty8ng"),
    value: '2 hours every Tuesday'
  }],
  officers: [{
    name: t("auto.dr_namrata_y1tq7t"),
    designation: 'Associate NCC Officer',
    note: t("auto.assistant_professor_department_of_psychology_1roevq8")
  }],
  programmeComponents: ['Institutional Training', 'Adventure Training', 'Youth Exchange Programme', 'Community Development Programme and Social Service Activities'],
  focusAreas: ['Military subjects, leadership, civil duties, and regimental values', 'Camp participation across the country throughout the year', 'Swachhta Abhiyan and social awareness programmes', 'Tree plantation, blood donation, and flood relief', 'Literacy drive, AIDS awareness, and cancer awareness', 'Save the Girl Child initiative and pulse polio support', 'Yoga Day and immunization drives'],
  highlights: [t("auto.cadets_consistently_participate_in_atc_tsc_nic_13cdmi5"), t("auto.cadets_secure_cadet_welfare_society_scholarships_every_1d5g1bo"), t("auto.majority_of_cadets_achieve_good_grades_in_15cqz55"), t("auto.the_unit_prepares_cadets_for_ssb_and_2zkei0")],
  reportLinks: [{
    label: t("auto.ncc_annual_report_p9wxj0"),
    href: r2Url('documents/IQAC/NCC/mmc-ncc-report.pdf')
  }, {
    label: t("auto.ncc_report_2023_24_19q5899"),
    href: r2Url('documents/IQAC/NCC/NCC-Report-2023-24.pdf')
  }]
}, {
  id: 'nss',
  shortName: 'NSS',
  title: t("auto.national_service_scheme_1ix4rwz"),
  subtitle: t("auto.education_through_community_service_1ev27zu"),
  icon: Heart,
  color: 'from-red-600 to-red-700',
  overview: `Magadh Mahila College has a long tradition of social activism. Its Social Service Society was originally known as "Aloke" and was reconstituted as NSS in the seventies under the scheme of the Ministry of Youth Affairs and Sports.

NSS began with the objective of "Education through Community Service" and is now focused on "Personality Development of Students through Community Service." The aim is to sensitize students to social issues through seminars, workshops, and field engagement.

NSS conducts regular and special camp activities and works with partners such as Red Cross and NGOs for blood donation and AIDS awareness programmes.`,
  quickFacts: [{
    label: t("auto.regular_activity_1tqke8i"),
    value: '120 hours per year'
  }, {
    label: t("auto.special_camp_f1a4u3"),
    value: '10 days duration'
  }, {
    label: t("auto.legacy_1c2sqls"),
    value: 'Started as Aloke, reconstituted as NSS in 1970s'
  }, {
    label: t("auto.core_objective_1b2b7rl"),
    value: 'Personality development through community service'
  }],
  officers: [{
    name: t("auto.dr_madhu_kumari_gupta_vqlz92")
  }, {
    name: t("auto.dr_jyoti_dubey_1tqj3df")
  }, {
    name: t("auto.dr_aasha_kumari_1rcju8e")
  }],
  programmeComponents: ['Regular activity: 120 hours each year', 'Special camping programme: 10 days', 'Seminars, workshops, and social service programmes'],
  focusAreas: ['Plantation of trees and environmental campaigns', 'Adult education and literacy awareness', 'Reading and writing support for visually handicapped persons', 'Academic support for economically weaker students', 'Visits to old age homes and community support drives', 'Blood donation drives, AIDS awareness, and social outreach', 'Debate, literary, and musical events at inter-college level'],
  highlights: [t("auto.children_s_day_outreach_with_reading_material_16pv94x"), t("auto.special_camp_from_21_02_2018_to_1r0tppp"), t("auto.swachhta_pakhwada_activities_with_tree_plantation_and_ihgczg"), t("auto.red_cross_collaboration_with_blood_donation_camps_17ic6sa")],
  timeline: [{
    date: '07/02/2017',
    event: 'Blood donation camp organized in campus (HDFC Bank).'
  }, {
    date: '01/08/2017 - 15/08/2017',
    event: 'Swachhta Pakhwada: tree plantation and essay competition.'
  }, {
    date: '15/08/2017',
    event: 'Cleanliness drive and Independence Day parade participation.'
  }, {
    date: '08/09/2017',
    event: 'Literacy Day awareness campaign in Anta Ghat slum areas.'
  }, {
    date: '18/09/2017',
    event: 'Blood donation camp in collaboration with Red Cross Society.'
  }, {
    date: '02/12/2017',
    event: 'AIDS Day human chain and awareness activity.'
  }, {
    date: '12/01/2018',
    event: 'National Youth Day inter-college speech competition.'
  }, {
    date: '21/02/2018 - 27/02/2018',
    event: 'Special camp theme: Baal Vivah Evam Dahej Unmulan.'
  }, {
    date: '29/08/2018',
    event: 'Pre-Republic Day parade selection camp at university level.'
  }],
  reportLinks: [{
    label: t("auto.nss_annual_report_2022_23_gn020i"),
    href: r2Url('documents/IQAC/NSS/mmc_nss_aanual_report_2223.pdf')
  }, {
    label: t("auto.nss_report_6dd145"),
    href: r2Url('documents/IQAC/NSS/mmc-nss-report-1.pdf')
  }, {
    label: t("auto.nss_report_2023_24_46sjrh"),
    href: r2Url('documents/IQAC/NSS/NSS-Report-2023-24.pdf')
  }]
}];
const modalVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: {
      duration: 0.2
    }
  }
};
const ExtensionActivities = () => {
  const { t } = useTranslation();
  const extensionUnits = getExtensionUnits(t);
  const [selectedUnit, setSelectedUnit] = useState(null);
  return <>
      <Helmet>
        <title>{t("auto.iqac_extension_activities_ncc_and_nss_magadh_6efkbe")}</title>
        <meta name="description" content="Explore NCC and NSS extension activities at Magadh Mahila College, including training, outreach, programme officers, and annual reports." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">{t("auto.extension_activities_1ozmklz")}</h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${t("auto.explore_our_two_core_extension_units_open_7vcy31")}
              `}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {extensionUnits.map((unit, index) => {
              const Icon = unit.icon;
              return <motion.button key={unit.id} type="button" onClick={() => setSelectedUnit(unit)} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} whileHover={{
                y: -4
              }} className="text-left p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${unit.color} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs uppercase tracking-wide font-semibold text-muted-foreground">{`
                        ${t("auto.view_details_1gtjy7e")}
                      `}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {unit.title} ({unit.shortName})
                    </h2>
                    <p className="text-muted-foreground mb-6">{unit.subtitle}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {unit.quickFacts.slice(0, 2).map(fact => <div key={`${unit.id}-${fact.label}`} className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-muted-foreground">{fact.label}</div>
                          <div className="font-semibold text-foreground text-sm">{fact.value}</div>
                        </div>)}
                    </div>
                  </motion.button>;
            })}
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
            duration: 0.5
          }} className="p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground">
              <h2 className="text-3xl font-bold mb-3">{t("auto.official_reports_9soym1")}</h2>
              <p className="text-white/90 mb-6">{`
                ${t("auto.access_unit_wise_documents_from_the_college_ck2nyu")}
              `}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {extensionUnits.map(unit => <div key={`reports-${unit.id}`} className="bg-white/10 rounded-xl p-5">
                    <h3 className="text-lg font-semibold mb-3">
                      {unit.title} ({unit.shortName})
                    </h3>
                    <div className="space-y-2">
                      {unit.reportLinks.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="block underline-offset-2 hover:underline text-white/95">
                          {link.label}
                        </a>)}
                    </div>
                  </div>)}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedUnit && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setSelectedUnit(null)} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" onClick={event => event.stopPropagation()} className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl relative">
              <button type="button" onClick={() => setSelectedUnit(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center" aria-label={t("auto.close_details_1f1ope9")}>
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="p-6 md:p-10">
                <div className="flex items-start gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedUnit.color} flex items-center justify-center`}>
                    <selectedUnit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {selectedUnit.title} ({selectedUnit.shortName})
                    </h2>
                    <p className="text-muted-foreground mt-1">{selectedUnit.subtitle}</p>
                  </div>
                </div>

                {selectedUnit.image && <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
                    <img src={selectedUnit.image} alt={`${selectedUnit.title} activities`} className="w-full h-auto max-h-[420px] object-cover" />
                  </div>}

                <div className="mb-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />{`
                    ${t("auto.overview_1pi8jpi")}
                  `}</h3>
                  <p className="text-foreground whitespace-pre-line leading-relaxed">{selectedUnit.overview}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />{`
                    ${t("auto.quick_facts_yz5fxf")}
                  `}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedUnit.quickFacts.map(fact => <div key={`fact-${fact.label}`} className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="text-sm text-muted-foreground">{fact.label}</div>
                        <div className="font-semibold text-foreground">{fact.value}</div>
                      </div>)}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />{`
                    ${t("auto.unit_officers_hnwb0i")}
                  `}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedUnit.officers.map(officer => <div key={`officer-${officer.name}`} className="border border-gray-200 rounded-xl p-4">
                        <div className="font-semibold text-foreground">{officer.name}</div>
                        {officer.designation && <div className="text-sm text-primary">{officer.designation}</div>}
                        {officer.note && <div className="text-sm text-muted-foreground mt-1">{officer.note}</div>}
                      </div>)}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-xl p-5">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />{`
                      ${t("auto.programme_components_1njk3s5")}
                    `}</h3>
                    <ul className="space-y-2 text-foreground">
                      {selectedUnit.programmeComponents.map(item => <li key={`component-${item}`} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>)}
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      {selectedUnit.id === 'ncc' ? <TreePine className="w-5 h-5 text-primary" /> : <Droplets className="w-5 h-5 text-primary" />}{`
                      ${t("auto.major_activities_1j6e69h")}
                    `}</h3>
                    <ul className="space-y-2 text-foreground">
                      {selectedUnit.focusAreas.map(item => <li key={`activity-${item}`} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>

                <div className="mb-8 border border-gray-200 rounded-xl p-5 bg-gray-50">
                  <h3 className="text-xl font-bold text-foreground mb-4">{t("auto.highlights_17cuxy")}</h3>
                  <ul className="space-y-3">
                    {selectedUnit.highlights.map(item => <li key={`highlight-${item}`} className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>

                {selectedUnit.timeline && selectedUnit.timeline.length > 0 && <div className="mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />{`
                      ${t("auto.report_highlights_2017_2018_6c8f2j")}
                    `}</h3>
                    <div className="space-y-3">
                      {selectedUnit.timeline.map(item => <div key={`timeline-${item.date}-${item.event}`} className="border border-gray-200 rounded-lg p-4">
                          <div className="font-semibold text-primary text-sm mb-1">{item.date}</div>
                          <div className="text-foreground">{item.event}</div>
                        </div>)}
                    </div>
                  </div>}

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />{`
                    ${t("auto.documents_tfs00p")}
                  `}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedUnit.reportLinks.map(link => <a key={`report-${link.href}`} href={link.href} target="_blank" rel="noopener noreferrer" className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <span className="font-medium text-foreground">{link.label}</span>
                      </a>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default ExtensionActivities;
