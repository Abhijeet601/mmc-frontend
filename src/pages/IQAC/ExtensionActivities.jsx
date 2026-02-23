import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';
import {
  Shield,
  Heart,
  Users,
  Calendar,
  Award,
  Target,
  TreePine,
  Droplets,
  BookOpen,
  FileText,
  X
} from 'lucide-react';

const extensionUnits = [
  {
    id: 'ncc',
    shortName: 'NCC',
    title: 'National Cadet Corps',
    subtitle: 'Leadership, discipline, and national service',
    icon: Shield,
    color: 'from-green-600 to-green-700',
    image: r2Url('images/iqac/extension-activities/ncc-image-2026-02-18.jpeg'),
    overview: `National Cadet Corps is one of the foremost youth organizations of India, cultivating national integration, unity, discipline, and responsible citizenship among students.

The NCC Unit in Magadh Mahila College has been active since the foundation of the college. It is a unit of 1st Bihar Girls Battalion, NCC, Patna, under the Bihar and Jharkhand Directorate.

Cadets participate in ATC, TSC, NIC, RD Parade, and YEP, and the unit regularly earns recognition for its performance. Weekly parade and classes are held for two hours every Tuesday.

The unit also organizes SSB training, and some cadets have joined defense services as officers. It emphasizes character building, leadership, camaraderie, patriotism, and holistic development.`,
    quickFacts: [
      { label: 'Unit', value: '1st Bihar Girls Battalion, NCC, Patna' },
      { label: 'Directorate', value: 'Bihar and Jharkhand Directorate' },
      { label: 'Strength', value: '100 cadets enrolled' },
      { label: 'Weekly Training', value: '2 hours every Tuesday' }
    ],
    officers: [
      {
        name: 'Dr. Namrata',
        designation: 'Associate NCC Officer',
        note: 'Assistant Professor, Department of Psychology'
      }
    ],
    programmeComponents: [
      'Institutional Training',
      'Adventure Training',
      'Youth Exchange Programme',
      'Community Development Programme and Social Service Activities'
    ],
    focusAreas: [
      'Military subjects, leadership, civil duties, and regimental values',
      'Camp participation across the country throughout the year',
      'Swachhta Abhiyan and social awareness programmes',
      'Tree plantation, blood donation, and flood relief',
      'Literacy drive, AIDS awareness, and cancer awareness',
      'Save the Girl Child initiative and pulse polio support',
      'Yoga Day and immunization drives'
    ],
    highlights: [
      'Cadets consistently participate in ATC, TSC, NIC, RD Parade, and YEP.',
      'Cadets secure Cadet Welfare Society Scholarships every year.',
      'Majority of cadets achieve good grades in B and C certificate examinations.',
      'The unit prepares cadets for SSB and defense service opportunities.'
    ],
    reportLinks: [
      { label: 'NCC Annual Report', href: r2Url('documents/IQAC/NCC/mmc-ncc-report.pdf') },
      { label: 'NCC Report 2023-24', href: r2Url('documents/IQAC/NCC/NCC-Report-2023-24.pdf') }
    ]
  },
  {
    id: 'nss',
    shortName: 'NSS',
    title: 'National Service Scheme',
    subtitle: 'Education through community service',
    icon: Heart,
    color: 'from-red-600 to-red-700',
    overview: `Magadh Mahila College has a long tradition of social activism. Its Social Service Society was originally known as "Aloke" and was reconstituted as NSS in the seventies under the scheme of the Ministry of Youth Affairs and Sports.

NSS began with the objective of "Education through Community Service" and is now focused on "Personality Development of Students through Community Service." The aim is to sensitize students to social issues through seminars, workshops, and field engagement.

NSS conducts regular and special camp activities and works with partners such as Red Cross and NGOs for blood donation and AIDS awareness programmes.`,
    quickFacts: [
      { label: 'Regular Activity', value: '120 hours per year' },
      { label: 'Special Camp', value: '10 days duration' },
      { label: 'Legacy', value: 'Started as Aloke, reconstituted as NSS in 1970s' },
      { label: 'Core Objective', value: 'Personality development through community service' }
    ],
    officers: [
      { name: 'Dr. Madhu Kumari Gupta' },
      { name: 'Dr. Jyoti Dubey' },
      { name: 'Dr. Aasha Kumari' }
    ],
    programmeComponents: [
      'Regular activity: 120 hours each year',
      'Special camping programme: 10 days',
      'Seminars, workshops, and social service programmes'
    ],
    focusAreas: [
      'Plantation of trees and environmental campaigns',
      'Adult education and literacy awareness',
      'Reading and writing support for visually handicapped persons',
      'Academic support for economically weaker students',
      'Visits to old age homes and community support drives',
      'Blood donation drives, AIDS awareness, and social outreach',
      'Debate, literary, and musical events at inter-college level'
    ],
    highlights: [
      'Children\'s Day outreach with reading material distribution in Anta Ghat areas.',
      'Special camp from 21/02/2018 to 25/02/2018 on social awareness.',
      'Swachhta Pakhwada activities with tree plantation and essay competitions.',
      'Red Cross collaboration with blood donation camps and awareness programmes.'
    ],
    timeline: [
      { date: '07/02/2017', event: 'Blood donation camp organized in campus (HDFC Bank).' },
      { date: '01/08/2017 - 15/08/2017', event: 'Swachhta Pakhwada: tree plantation and essay competition.' },
      { date: '15/08/2017', event: 'Cleanliness drive and Independence Day parade participation.' },
      { date: '08/09/2017', event: 'Literacy Day awareness campaign in Anta Ghat slum areas.' },
      { date: '18/09/2017', event: 'Blood donation camp in collaboration with Red Cross Society.' },
      { date: '02/12/2017', event: 'AIDS Day human chain and awareness activity.' },
      { date: '12/01/2018', event: 'National Youth Day inter-college speech competition.' },
      { date: '21/02/2018 - 27/02/2018', event: 'Special camp theme: Baal Vivah Evam Dahej Unmulan.' },
      { date: '29/08/2018', event: 'Pre-Republic Day parade selection camp at university level.' }
    ],
    reportLinks: [
      { label: 'NSS Annual Report 2022-23', href: r2Url('documents/IQAC/NSS/mmc_nss_aanual_report_2223.pdf') },
      { label: 'NSS Report', href: r2Url('documents/IQAC/NSS/mmc-nss-report-1.pdf') },
      { label: 'NSS Report 2023-24', href: r2Url('documents/IQAC/NSS/NSS-Report-2023-24.pdf') }
    ]
  }
];

const modalVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
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
    transition: { duration: 0.2 }
  }
};

const ExtensionActivities = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <>
      <Helmet>
        <title>IQAC Extension Activities - NCC and NSS | Magadh Mahila College</title>
        <meta
          name="description"
          content="Explore NCC and NSS extension activities at Magadh Mahila College, including training, outreach, programme officers, and annual reports."
        />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Extension Activities</h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Explore our two core extension units. Open each unit to view detailed activities, officers,
                programme structure, and report links.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {extensionUnits.map((unit, index) => {
                const Icon = unit.icon;

                return (
                  <motion.button
                    key={unit.id}
                    type="button"
                    onClick={() => setSelectedUnit(unit)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="text-left p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${unit.color} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs uppercase tracking-wide font-semibold text-muted-foreground">
                        View Details
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {unit.title} ({unit.shortName})
                    </h2>
                    <p className="text-muted-foreground mb-6">{unit.subtitle}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {unit.quickFacts.slice(0, 2).map((fact) => (
                        <div key={`${unit.id}-${fact.label}`} className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-muted-foreground">{fact.label}</div>
                          <div className="font-semibold text-foreground text-sm">{fact.value}</div>
                        </div>
                      ))}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground"
            >
              <h2 className="text-3xl font-bold mb-3">Official Reports</h2>
              <p className="text-white/90 mb-6">
                Access unit-wise documents from the college repository.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {extensionUnits.map((unit) => (
                  <div key={`reports-${unit.id}`} className="bg-white/10 rounded-xl p-5">
                    <h3 className="text-lg font-semibold mb-3">
                      {unit.title} ({unit.shortName})
                    </h3>
                    <div className="space-y-2">
                      {unit.reportLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block underline-offset-2 hover:underline text-white/95"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedUnit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedUnit(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(event) => event.stopPropagation()}
              className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setSelectedUnit(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                aria-label="Close details"
              >
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

                {selectedUnit.image && (
                  <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
                    <img
                      src={selectedUnit.image}
                      alt={`${selectedUnit.title} activities`}
                      className="w-full h-auto max-h-[420px] object-cover"
                    />
                  </div>
                )}

                <div className="mb-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Overview
                  </h3>
                  <p className="text-foreground whitespace-pre-line leading-relaxed">{selectedUnit.overview}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Quick Facts
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedUnit.quickFacts.map((fact) => (
                      <div key={`fact-${fact.label}`} className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="text-sm text-muted-foreground">{fact.label}</div>
                        <div className="font-semibold text-foreground">{fact.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Unit Officers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedUnit.officers.map((officer) => (
                      <div key={`officer-${officer.name}`} className="border border-gray-200 rounded-xl p-4">
                        <div className="font-semibold text-foreground">{officer.name}</div>
                        {officer.designation && <div className="text-sm text-primary">{officer.designation}</div>}
                        {officer.note && <div className="text-sm text-muted-foreground mt-1">{officer.note}</div>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-xl p-5">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Programme Components
                    </h3>
                    <ul className="space-y-2 text-foreground">
                      {selectedUnit.programmeComponents.map((item) => (
                        <li key={`component-${item}`} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      {selectedUnit.id === 'ncc' ? (
                        <TreePine className="w-5 h-5 text-primary" />
                      ) : (
                        <Droplets className="w-5 h-5 text-primary" />
                      )}
                      Major Activities
                    </h3>
                    <ul className="space-y-2 text-foreground">
                      {selectedUnit.focusAreas.map((item) => (
                        <li key={`activity-${item}`} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8 border border-gray-200 rounded-xl p-5 bg-gray-50">
                  <h3 className="text-xl font-bold text-foreground mb-4">Highlights</h3>
                  <ul className="space-y-3">
                    {selectedUnit.highlights.map((item) => (
                      <li key={`highlight-${item}`} className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedUnit.timeline && selectedUnit.timeline.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Report Highlights (2017-2018)
                    </h3>
                    <div className="space-y-3">
                      {selectedUnit.timeline.map((item) => (
                        <div key={`timeline-${item.date}-${item.event}`} className="border border-gray-200 rounded-lg p-4">
                          <div className="font-semibold text-primary text-sm mb-1">{item.date}</div>
                          <div className="text-foreground">{item.event}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Documents
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedUnit.reportLinks.map((link) => (
                      <a
                        key={`report-${link.href}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-foreground">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExtensionActivities;
