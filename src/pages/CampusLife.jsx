import i18next from "i18next";
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Library, Microscope, Home, Users, Music, Dumbbell, X, Recycle, Zap, Lightbulb, Award, Target, Shield, TreePine, Droplets, Fish, Bird, MonitorSpeaker, Presentation, Leaf, Beaker, Dna, BookOpen, Eye, GraduationCap, Sparkles } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
const CampusLife = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [loadingImages, setLoadingImages] = useState({});
  const [autoScrollPositions, setAutoScrollPositions] = useState({});

  // Auto-scroll effect for gallery sections
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoScrollPositions(prev => {
        const newPositions = {
          ...prev
        };
        const uniqueFolders = [...new Set(galleryImages.map(img => img.folder))];
        uniqueFolders.forEach(folderName => {
          const folderImages = galleryImages.filter(img => img.folder === folderName);
          const maxScroll = Math.max(0, (folderImages.length - 3) * 320); // Show 3 images at a time
          newPositions[folderName] = ((prev[folderName] || 0) + 1) % (maxScroll + 1);
        });
        return newPositions;
      });
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const galleryIcons = {
    'Computer Lab': MonitorSpeaker,
    'Conference Hall': Presentation,
    'Department of Botany': Leaf,
    'Department of Chemistry': Beaker,
    'Department of Zoology': Dna,
    'Library': BookOpen,
    'Reading Room': Eye,
    'Seminar Hall': GraduationCap,
    'Smart Class': MonitorSpeaker
  };
  const facilityImageMapping = {
    'Central Library': ['Library'],
    'Modern Laboratories': ['Department of Botany', 'Department of Chemistry', 'Department of Zoology'],
    'Hostel Facilities': [],
    'Student Activities': [],
    'Cultural Center': ['Conference Hall', 'Seminar Hall'],
    'Sports Complex': []
  };
  const facilities = [{
    icon: Library,
    title: i18next.t("auto.central_library_13cvzsp"),
    description: i18next.t("auto.extensive_collection_of_books_journals_and_digital_1cb5ox"),
    color: 'from-primary to-primary',
    details: {
      incharge: 'LIBRARY INCHARGE: Dr. Rishu Raj (Asst. Professor, Department of Political Science)',
      assistant: 'Assistant Library Incharge: Dr. Bhawana Singh (Asst. Professor (Guest Faculty), Department of History)',
      establishment: 'Year of establishment: 1946, Shifted in New Building: 1990',
      books: {
        central: '1,55,643',
        journals: '13',
        newspapers: '05',
        bba: '4821',
        bca: '4864',
        bsw: '381',
        pg: '1147',
        departmental: '5005',
        total: '1,72,006'
      },
      eresources: [{
        name: i18next.t("auto.e_shodhsindhu_c1em48"),
        url: 'https://ess.inflibnet.ac.in/'
      }, {
        name: i18next.t("auto.shodhganga_nj1yur"),
        url: 'https://shodhganga.inflibnet.ac.in/'
      }, {
        name: i18next.t("auto.sodh_gagotri_1wmtv1w"),
        url: 'https://sodhganga.inflibnet.ac.in/'
      }, {
        name: i18next.t("auto.opac_e_granthalaya_dw3to1"),
        url: '#'
      }, {
        name: i18next.t("auto.n_list_inflibnet_1m2gtp8"),
        url: 'https://nlist.inflibnet.ac.in/'
      }, {
        name: i18next.t("auto.national_digital_library_1y75eym"),
        url: 'https://ndl.iitkgp.ac.in/'
      }],
      staff: [{
        name: i18next.t("auto.ragini_kumari_17583cm"),
        qualification: 'M.Lib. & Info. Sc. , M.A (Philosophy), DCA, e-Library',
        post: 'Librarian'
      }, {
        name: i18next.t("auto.moni_kumari_1t4jm2x"),
        qualification: 'B.Lib. & Info. Sc. , B.A (Political Sc. Hons) DCA',
        post: 'Library Assistant'
      }],
      timing: 'Library remains open from 9.30 am. to 4.30 PM on all working days.',
      membership: 'Magadh Mahila College library has an academic library to meet the need of the students and teaching staff of the college. The new members in 2017 are 1,486 students of which 322 are vocational and 1,164 are from the general section.',
      highlights: [i18next.t("auto.e_library_services_the_library_has_an_1tlct0e"), i18next.t("auto.library_card_holder_students_teaching_and_non_1tvh6bx"), i18next.t("auto.students_are_using_opac_for_searching_books_goqjh"), i18next.t("auto.circulation_services_the_issue_counter_from_where_mdmv7p"), i18next.t("auto.the_technical_services_the_technical_section_of_btf3n0"), i18next.t("auto.reference_services_the_central_library_has_a_guk4un"), i18next.t("auto.journal_magazines_services_the_library_has_journal_kyamkb"), i18next.t("auto.binding_services_the_library_has_binding_section_lpgj54"), i18next.t("auto.xerox_services_the_library_has_xerox_section_2cr3m2"), i18next.t("auto.separate_computer_with_adequate_software_for_visually_xsrex0")],
      officials: [{
        name: i18next.t("auto.dr_rishu_raj_xiys6p"),
        designation: 'Library Incharge',
        email: 'nawanisrcc@gmail.com'
      }, {
        name: i18next.t("auto.ms_ragini_kumari_12ljl0m"),
        designation: 'Librarian (Officiating), Professional Assistant'
      }],
      entitlements: [{
        category: 'Post Graduate Students',
        books: '4'
      }, {
        category: 'Undergraduate Students',
        books: '4'
      }, {
        category: 'Faculty members',
        books: '5 – 10'
      }, {
        category: 'Non-teaching staff',
        books: '5'
      }]
    }
  }, {
    icon: Microscope,
    title: i18next.t("auto.modern_laboratories_qd9ywv"),
    description: i18next.t("auto.state_of_the_art_labs_for_science_zk3i5s"),
    color: 'from-primary to-primary',
    details: {
      description: i18next.t("auto.the_college_has_well_equipped_laboratories_in_zyh0we")
    }
  }, {
    icon: Home,
    title: i18next.t("auto.hostel_facilities_hv63xr"),
    description: i18next.t("auto.3_hostels_accommodating_640_students_with_modern_148jcng"),
    color: 'from-primary to-highlight',
    details: {
      description: i18next.t("auto.the_college_provides_comfortable_hostel_facilities_for_4vahyn")
    }
  }, {
    icon: Users,
    title: i18next.t("auto.student_activities_1voutlz"),
    description: i18next.t("auto.vibrant_clubs_societies_and_cultural_programs_ku3gcq"),
    color: 'from-primary to-highlight',
    details: {
      description: i18next.t("auto.the_college_offers_a_wide_range_of_3zl111")
    }
  }, {
    icon: Music,
    title: i18next.t("auto.cultural_center_fad23u"),
    description: i18next.t("auto.auditorium_and_spaces_for_music_dance_and_ebt4cf"),
    color: 'from-primary to-highlight'
  }, {
    icon: Dumbbell,
    title: i18next.t("auto.sports_complex_8ox6os"),
    description: i18next.t("auto.indoor_and_outdoor_sports_facilities_for_fitness_3jvc84"),
    color: 'from-primary to-highlight',
    details: {
      indoorSports: {
        title: i18next.t("auto.indoor_sports_complex_1mgyx71"),
        description: i18next.t("auto.the_college_has_a_state_of_art_zc7bxy")
      },
      outdoorStadium: {
        title: i18next.t("auto.outdoor_stadium_1crchgu"),
        description: i18next.t("auto.the_college_also_has_a_hockey_cum_mb2qej")
      },
      gym: {
        title: i18next.t("auto.gym_3767di"),
        description: i18next.t("auto.a_gym_with_all_modern_equipments_is_l2d1ek")
      },
      fitnessCentre: {
        title: i18next.t("auto.fitness_centre_1jbmvb2"),
        description: i18next.t("auto.the_college_maintains_its_own_fitness_centre_bh151x")
      }
    }
  }, {
    icon: MonitorSpeaker,
    title: i18next.t("auto.academic_ict_infrastructure_uq2rdr"),
    description: i18next.t("auto.modern_classrooms_smart_classrooms_computer_centers_and_1bsi83k"),
    color: 'from-primary to-highlight',
    details: {
      classroom: {
        title: i18next.t("auto.classroom_1gytayc"),
        description: i18next.t("auto.in_view_of_its_recognition_as_a_19jcl6t")
      },
      smartClassroom: {
        title: i18next.t("auto.smart_classroom_1min2y5"),
        description: i18next.t("auto.click_here_for_more_details_of_smart_4iddi4"),
        link: '#'
      },
      ict: {
        title: i18next.t("auto.information_and_communication_technology_ict_19t3z97"),
        description: i18next.t("auto.the_college_has_three_state_of_the_gobagn")
      },
      laboratories: {
        title: i18next.t("auto.laboratories_llvfr4"),
        description: i18next.t("auto.the_college_has_a_well_equipped_labs_1rasrmz")
      },
      seminarConference: {
        title: i18next.t("auto.seminar_conference_room_1kpt6b1"),
        description: i18next.t("auto.the_college_has_state_of_the_art_17wpy7p")
      }
    }
  }];
  const galleryImages = [
  // Computer Lab
  {
    id: 1,
    folder: 'Computer Lab',
    name: 'WhatsApp Image 2026-01-29 at 12.35.43 AM (1).jpeg',
    path: 'Computer Lab'
  }, {
    id: 2,
    folder: 'Computer Lab',
    name: 'WhatsApp Image 2026-01-29 at 12.35.43 AM.jpeg',
    path: 'Computer Lab'
  }, {
    id: 3,
    folder: 'Computer Lab',
    name: 'WhatsApp Image 2026-01-29 at 12.35.47 AM.jpeg',
    path: 'Computer Lab'
  },
  // Conference Hall
  {
    id: 4,
    folder: 'Conference Hall',
    name: 'WhatsApp Image 2026-01-29 at 12.36.04 AM (1).jpeg',
    path: 'Conference Hall'
  }, {
    id: 5,
    folder: 'Conference Hall',
    name: 'WhatsApp Image 2026-01-29 at 12.36.04 AM.jpeg',
    path: 'Conference Hall'
  }, {
    id: 6,
    folder: 'Conference Hall',
    name: 'WhatsApp Image 2026-01-29 at 12.36.05 AM (1).jpeg',
    path: 'Conference Hall'
  }, {
    id: 7,
    folder: 'Conference Hall',
    name: 'WhatsApp Image 2026-01-29 at 12.36.05 AM.jpeg',
    path: 'Conference Hall'
  }, {
    id: 8,
    folder: 'Conference Hall',
    name: 'WhatsApp Image 2026-01-29 at 12.36.06 AM.jpeg',
    path: 'Conference Hall'
  },
  // Department of Botany
  {
    id: 9,
    folder: 'Department of Botany',
    name: 'WhatsApp Image 2026-01-29 at 12.35.55 AM (1).jpeg',
    path: 'dept of botany'
  }, {
    id: 10,
    folder: 'Department of Botany',
    name: 'WhatsApp Image 2026-01-29 at 12.35.55 AM (2).jpeg',
    path: 'dept of botany'
  }, {
    id: 11,
    folder: 'Department of Botany',
    name: 'WhatsApp Image 2026-01-29 at 12.35.55 AM.jpeg',
    path: 'dept of botany'
  }, {
    id: 12,
    folder: 'Department of Botany',
    name: 'WhatsApp Image 2026-01-29 at 12.35.56 AM.jpeg',
    path: 'dept of botany'
  },
  // Department of Chemistry
  {
    id: 13,
    folder: 'Department of Chemistry',
    name: 'WhatsApp Image 2026-01-29 at 12.36.01 AM (1).jpeg',
    path: 'dept. of chemistry'
  }, {
    id: 14,
    folder: 'Department of Chemistry',
    name: 'WhatsApp Image 2026-01-29 at 12.36.01 AM.jpeg',
    path: 'dept. of chemistry'
  }, {
    id: 15,
    folder: 'Department of Chemistry',
    name: 'WhatsApp Image 2026-01-29 at 12.36.02 AM (1).jpeg',
    path: 'dept. of chemistry'
  }, {
    id: 16,
    folder: 'Department of Chemistry',
    name: 'WhatsApp Image 2026-01-29 at 12.36.02 AM (2).jpeg',
    path: 'dept. of chemistry'
  }, {
    id: 17,
    folder: 'Department of Chemistry',
    name: 'WhatsApp Image 2026-01-29 at 12.36.02 AM.jpeg',
    path: 'dept. of chemistry'
  }, {
    id: 18,
    folder: 'Department of Chemistry',
    name: 'WhatsApp Image 2026-01-29 at 12.36.03 AM.jpeg',
    path: 'dept. of chemistry'
  }, {
    id: 19,
    folder: 'Department of Chemistry',
    name: 'WhatsApp Image 2026-01-29 at 12.36.04 AM.jpeg',
    path: 'dept. of chemistry'
  },
  // Department of Zoology
  {
    id: 20,
    folder: 'Department of Zoology',
    name: 'WhatsApp Image 2026-01-29 at 12.35.56 AM.jpeg',
    path: 'dept. of zoology'
  }, {
    id: 21,
    folder: 'Department of Zoology',
    name: 'WhatsApp Image 2026-01-29 at 12.35.57 AM (1).jpeg',
    path: 'dept. of zoology'
  }, {
    id: 22,
    folder: 'Department of Zoology',
    name: 'WhatsApp Image 2026-01-29 at 12.35.57 AM (2).jpeg',
    path: 'dept. of zoology'
  }, {
    id: 23,
    folder: 'Department of Zoology',
    name: 'WhatsApp Image 2026-01-29 at 12.35.57 AM.jpeg',
    path: 'dept. of zoology'
  },
  // Library
  {
    id: 24,
    folder: 'Library',
    name: 'WhatsApp Image 2026-01-29 at 12.35.47 AM (1).jpeg',
    path: 'Library'
  }, {
    id: 25,
    folder: 'Library',
    name: 'WhatsApp Image 2026-01-29 at 12.35.47 AM.jpeg',
    path: 'Library'
  }, {
    id: 26,
    folder: 'Library',
    name: 'WhatsApp Image 2026-01-29 at 12.35.49 AM.jpeg',
    path: 'Library'
  }, {
    id: 27,
    folder: 'Library',
    name: 'WhatsApp Image 2026-01-29 at 12.35.50 AM.jpeg',
    path: 'Library'
  }, {
    id: 28,
    folder: 'Library',
    name: 'WhatsApp Image 2026-01-29 at 12.35.51 AM (1).jpeg',
    path: 'Library'
  }, {
    id: 29,
    folder: 'Library',
    name: 'WhatsApp Image 2026-01-29 at 12.35.51 AM (2).jpeg',
    path: 'Library'
  }, {
    id: 30,
    folder: 'Library',
    name: 'WhatsApp Image 2026-01-29 at 12.35.51 AM.jpeg',
    path: 'Library'
  }, {
    id: 31,
    folder: 'Library',
    name: 'WhatsApp Image 2026-01-29 at 12.35.52 AM (1).jpeg',
    path: 'Library'
  }, {
    id: 32,
    folder: 'Library',
    name: 'WhatsApp Image 2026-01-29 at 12.35.53 AM.jpeg',
    path: 'Library'
  },
  // Reading Room
  {
    id: 33,
    folder: 'Reading Room',
    name: 'WhatsApp Image 2026-01-29 at 12.35.52 AM.jpeg',
    path: 'reading rom'
  }, {
    id: 34,
    folder: 'Reading Room',
    name: 'WhatsApp Image 2026-01-29 at 12.35.53 AM (1).jpeg',
    path: 'reading rom'
  }, {
    id: 35,
    folder: 'Reading Room',
    name: 'WhatsApp Image 2026-01-29 at 12.35.53 AM.jpeg',
    path: 'reading rom'
  }, {
    id: 36,
    folder: 'Reading Room',
    name: 'WhatsApp Image 2026-01-29 at 12.35.54 AM (1).jpeg',
    path: 'reading rom'
  }, {
    id: 37,
    folder: 'Reading Room',
    name: 'WhatsApp Image 2026-01-29 at 12.35.54 AM.jpeg',
    path: 'reading rom'
  },
  // Seminar Hall
  {
    id: 38,
    folder: 'Seminar Hall',
    name: 'WhatsApp Image 2026-01-29 at 12.35.59 AM.jpeg',
    path: 'seminar hall'
  }, {
    id: 39,
    folder: 'Seminar Hall',
    name: 'WhatsApp Image 2026-01-29 at 12.36.00 AM (1).jpeg',
    path: 'seminar hall'
  }, {
    id: 40,
    folder: 'Seminar Hall',
    name: 'WhatsApp Image 2026-01-29 at 12.36.00 AM.jpeg',
    path: 'seminar hall'
  },
  // Smart Class
  {
    id: 41,
    folder: 'Smart Class',
    name: 'WhatsApp Image 2026-01-29 at 12.35.58 AM.jpeg',
    path: 'smart class'
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.campus_life_magadh_mahila_college_facilities_student_c84ay4")}</title>
        <meta name="description" content="Experience vibrant campus life at Magadh Mahila College. Explore our modern facilities including library, labs, hostels, sports complex, and cultural activities." />
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
            duration: 0.6
          }} className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">{`
                  ${i18next.t("auto.campus_life_mycba2")}
                `}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">{`
                ${i18next.t("auto.experience_a_vibrant_and_enriching_campus_environment_1e8e2w6")}
              `}</p>
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
          }} className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">{`
                  ${i18next.t("auto.world_class_facilities_4159gn")}
                `}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 30,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.12
              }} whileHover={{
                y: -15,
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }} onClick={() => setSelectedFacility(facility)} className="group relative cursor-pointer h-full">
                      <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 overflow-hidden relative">
                      
                      {/* Animated background blob */}
                      <motion.div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100" animate={{
                    scale: [1, 1.3, 1]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity
                  }} />

                      {/* Shine effect */}
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20" animate={{
                    x: ['-100%', '100%']
                  }} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} />

                      <div className="relative z-10">
                        <motion.div whileHover={{
                      rotate: 360,
                      scale: 1.15
                    }} transition={{
                      duration: 0.8
                    }} className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-6 shadow-lg`}>
                          <facility.icon className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {facility.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {facility.description}
                        </p>

                        {/* Learn more indicator */}
                        <motion.div className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity" initial={{
                      x: -10,
                      opacity: 0
                    }} whileHover={{
                      x: 5
                    }}>{`
                          ${i18next.t("auto.explore_8ktigs")} `}<motion.span animate={{
                        x: [0, 5, 0]
                      }} transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}>→</motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* ACTIVITIES SECTION */}
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
          }} className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">{`
                  ${i18next.t("auto.campus_activities_initiatives_mvrtzy")}
                `}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <motion.div initial={{
                opacity: 0,
                y: 30,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }} whileHover={{
                y: -10,
                scale: 1.05
              }} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border-2 border-blue-200 group cursor-pointer">
                  <motion.div animate={{
                  rotate: [0, 10, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    <Target className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{i18next.t("auto.internal_quality_assurance_cell_iqac_13r4hnh")}</h3>
                  <p className="text-muted-foreground">{`
                    ${i18next.t("auto.iqac_undertakes_various_engagement_and_developmental_activities_9xxrm2")}
                  `}</p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 30,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.12
              }} whileHover={{
                y: -10,
                scale: 1.05
              }} className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 shadow-lg border-2 border-green-200 group cursor-pointer">
                  <motion.div animate={{
                  rotate: [0, -10, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.2
                }}>
                    <Recycle className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{i18next.t("auto.solid_liquid_waste_management_2b9gam")}</h3>
                  <p className="text-muted-foreground">{`
                    ${i18next.t("auto.comprehensive_solid_waste_management_system_at_the_eyirkr")}
                  `}</p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 30,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.24
              }} whileHover={{
                y: -10,
                scale: 1.05
              }} className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 shadow-lg border-2 border-cyan-200 group cursor-pointer">
                  <motion.div animate={{
                  y: [0, -5, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.4
                }}>
                    <Droplets className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{i18next.t("auto.rain_water_harvesting_61mnbf")}</h3>
                  <p className="text-muted-foreground">{`
                    ${i18next.t("auto.unique_feature_as_a_valuable_alternative_water_bh64sw")}
                  `}</p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 30,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.36
              }} whileHover={{
                y: -10,
                scale: 1.05
              }} className="p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg border-2 border-yellow-200 group cursor-pointer">
                  <motion.div animate={{
                  rotate: [0, 15, -15, 0]
                }} transition={{
                  duration: 3,
                  repeat: Infinity
                }}>
                    <Lightbulb className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{i18next.t("auto.magadh_mahila_entrepreneurs_incubation_centre_191j05y")}</h3>
                  <p className="text-muted-foreground">{`
                    ${i18next.t("auto.first_incubation_centre_in_the_state_for_12fe0jg")}
                  `}</p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 30,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.48
              }} whileHover={{
                y: -10,
                scale: 1.05
              }} className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg border-2 border-orange-200 group cursor-pointer">
                  <motion.div animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    <Zap className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{i18next.t("auto.solar_power_plant_1li0dfi")}</h3>
                  <p className="text-muted-foreground">{`
                    ${i18next.t("auto.100_kwp_solar_power_plant_on_main_pkimj8")}
                  `}</p>
                </motion.div>
              </div>

              {/* ENVIRONMENTAL POLICY SECTION */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl mb-8">
                <div className="flex items-center justify-center mb-6">
                  <TreePine className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-center text-foreground mb-6">{i18next.t("auto.environmental_sustainability_jk7fco")}</h3>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-6">{`
                  ${i18next.t("auto.the_college_is_strongly_committed_to_sustainable_75n3ke")}
                `}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-foreground mb-3">{i18next.t("auto.environmental_initiatives_y5if5e")}</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>{i18next.t("auto.tobacco_free_campus_1jujdnh")}</li>
                      <li>{i18next.t("auto.polythene_free_campus_10p46lu")}</li>
                      <li>{i18next.t("auto.plantation_drives_hbv6ea")}</li>
                      <li>{i18next.t("auto.sanitation_drives_v13uuc")}</li>
                      <li>{i18next.t("auto.steel_plates_cups_in_cafeteria_1dfpcf8")}</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-foreground mb-3">{i18next.t("auto.green_practices_apwfiu")}</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>{i18next.t("auto.rain_water_harvesting_system_8nnkzw")}</li>
                      <li>{i18next.t("auto.solid_liquid_waste_management_1qiq2m4")}</li>
                      <li>{i18next.t("auto.solar_energy_generation_lxe22o")}</li>
                      <li>{i18next.t("auto.botanical_garden_nk53e5")}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* STUDENT DEVELOPMENT SECTION */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl">
                <div className="flex items-center justify-center mb-6">
                  <Award className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-center text-foreground mb-6">{i18next.t("auto.student_development_activities_1y81436")}</h3>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-6">{`
                  ${i18next.t("auto.the_activities_outside_of_the_classroom_give_1881m39")}
                `}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">{i18next.t("auto.anti_ragging_cell_1xe8r0v")}</h4>
                    <p className="text-muted-foreground">{i18next.t("auto.ragging_in_any_form_is_strictly_prohibited_1e7atgo")}</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">{i18next.t("auto.student_societies_hl09tg")}</h4>
                    <p className="text-muted-foreground">{i18next.t("auto.science_society_nss_ncc_it_society_students_xr1agt")}</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">{i18next.t("auto.cultural_activities_m7u9re")}</h4>
                    <p className="text-muted-foreground">{i18next.t("auto.language_lab_literary_society_gender_knowledge_centre_7r1wu4")}</p>
                  </div>
                </div>
              </motion.div>
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
          }} className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">{`
                  ${i18next.t("auto.campus_gallery_283v6c")}
                `}</span>
              </h2>

              {/* Gallery organized by folder */}
              <div className="space-y-16">
                {Array.from(new Map(galleryImages.map(img => [img.folder, img])).entries()).map(([folder, firstImage]) => {
                const folderImages = galleryImages.filter(img => img.folder === folder);
                return <motion.div key={folder} initial={{
                  opacity: 0,
                  y: 30
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6
                }}>
                      <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary flex items-center gap-3">
                        {galleryIcons[folder] && React.createElement(galleryIcons[folder], {
                      className: "w-8 h-8 text-primary"
                    })}
                        {folder}
                      </h3>
                      <div className="relative overflow-hidden">
                        <motion.div className="flex gap-6" drag="x" dragConstraints={{
                      left: -((folderImages.length - 1) * 320),
                      right: 0
                    }} animate={{
                      x: -autoScrollPositions[folder] || 0
                    }} transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }} whileTap={{
                      cursor: "grabbing"
                    }}>
                          {folderImages.map((image, index) => <motion.div key={image.id} initial={{
                        opacity: 0,
                        x: 50,
                        scale: 0.8
                      }} whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1
                      }} viewport={{
                        once: true
                      }} transition={{
                        duration: 0.6,
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 100
                      }} whileHover={{
                        scale: 1.08,
                        y: -15,
                        rotateY: 5,
                        rotateX: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }} onClick={() => setSelectedImage(image)} className="relative flex-shrink-0 w-full md:w-80 h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group" style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px"
                      }}>
                              {/* Loading skeleton */}
                              {loadingImages[image.id] && <motion.div initial={{
                          opacity: 1
                        }} exit={{
                          opacity: 0
                        }} className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-2xl" />}

                              <motion.img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={image.name} loading="lazy" src={r2Url(`images/campus/${image.path.replace(/\s+/g, '-')}/${encodeURIComponent(image.name)}`)} onLoad={() => setLoadingImages(prev => ({
                          ...prev,
                          [image.id]: false
                        }))} onLoadStart={() => setLoadingImages(prev => ({
                          ...prev,
                          [image.id]: true
                        }))} onError={e => {
                          e.target.src = 'https://images.unsplash.com/photo-1595872018818-97555653a011';
                          setLoadingImages(prev => ({
                            ...prev,
                            [image.id]: false
                          }));
                        }} initial={{
                          scale: 1.1
                        }} animate={{
                          scale: 1
                        }} transition={{
                          duration: 0.3
                        }} />

                              {/* Enhanced overlay with glow effect */}
                              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={{
                          opacity: 0
                        }} whileHover={{
                          opacity: 1
                        }} />
                              <motion.div className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={{
                          scale: 0.95
                        }} whileHover={{
                          scale: 1,
                          boxShadow: "0 0 30px rgba(255,255,255,0.3)"
                        }} transition={{
                          duration: 0.3
                        }} />

                              {/* Floating elements on hover */}
                              <motion.div className="absolute top-4 right-4 w-3 h-3 bg-white/80 rounded-full opacity-0 group-hover:opacity-100" initial={{
                          scale: 0
                        }} whileHover={{
                          scale: 1,
                          y: -5
                        }} transition={{
                          delay: 0.1
                        }} />
                              <motion.div className="absolute bottom-4 left-4 w-2 h-2 bg-primary/80 rounded-full opacity-0 group-hover:opacity-100" initial={{
                          scale: 0
                        }} whileHover={{
                          scale: 1,
                          x: -5
                        }} transition={{
                          delay: 0.2
                        }} />
                            </motion.div>)}
                        </motion.div>
                      </div>
                    </motion.div>;
              })}
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.8
          }} className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary to-blue-600 text-primary-foreground relative overflow-hidden">
              {/* Animated background elements */}
              <motion.div className="absolute inset-0 opacity-10" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}>
                <div className="absolute w-96 h-96 -top-48 -right-48 bg-white rounded-full" />
              </motion.div>

              <h2 className="text-3xl font-bold text-center mb-8 relative z-10">{i18next.t("auto.student_life_highlights_123dbvt")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <motion.div className="text-center group cursor-pointer" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0
              }} whileHover={{
                scale: 1.1
              }}>
                  <motion.div className="text-4xl font-bold mb-2" initial={{
                  opacity: 0
                }} whileInView={{
                  opacity: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.8,
                  delay: 0.2
                }}>
                    50<span className="text-xl">+</span>
                  </motion.div>
                  <motion.p className="text-white/90" initial={{
                  opacity: 0
                }} whileInView={{
                  opacity: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.3
                }}>{`
                    ${i18next.t("auto.student_clubs_societies_1dh2h3t")}
                  `}</motion.p>
                </motion.div>

                <motion.div className="text-center group cursor-pointer" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} whileHover={{
                scale: 1.1
              }}>
                  <motion.div className="text-4xl font-bold mb-2" initial={{
                  opacity: 0
                }} whileInView={{
                  opacity: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.8,
                  delay: 0.4
                }}>
                    100<span className="text-xl">+</span>
                  </motion.div>
                  <motion.p className="text-white/90" initial={{
                  opacity: 0
                }} whileInView={{
                  opacity: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.5
                }}>{`
                    ${i18next.t("auto.annual_events_activities_yfcnbi")}
                  `}</motion.p>
                </motion.div>

                <motion.div className="text-center group cursor-pointer" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.4
              }} whileHover={{
                scale: 1.1
              }}>
                  <motion.div className="text-4xl font-bold mb-2" initial={{
                  opacity: 0
                }} whileInView={{
                  opacity: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.8,
                  delay: 0.6
                }}>
                    640
                  </motion.div>
                  <motion.p className="text-white/90" initial={{
                  opacity: 0
                }} whileInView={{
                  opacity: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.7
                }}>{`
                    ${i18next.t("auto.hostel_accommodation_1j2gnbo")}
                  `}</motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedImage && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer">
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} onClick={e => e.stopPropagation()} className="relative max-w-5xl w-full cursor-default">
              <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
              <img className="w-full h-auto rounded-2xl shadow-2xl" alt={selectedImage.name} src={r2Url(`images/campus/${selectedImage.path.replace(/\s+/g, '-')}/${encodeURIComponent(selectedImage.name)}`)} onError={e => {
            e.target.src = 'https://images.unsplash.com/photo-1595872018818-97555653a011';
          }} />
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
        {selectedFacility && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setSelectedFacility(null)} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer">
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} onClick={e => e.stopPropagation()} className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl cursor-default">
              <button onClick={() => setSelectedFacility(null)} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10">
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div whileHover={{
                rotate: 360,
                scale: 1.1
              }} transition={{
                duration: 0.8
              }} className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedFacility.color} flex items-center justify-center shadow-lg`}>
                    <selectedFacility.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{selectedFacility.title}</h2>
                    <p className="text-muted-foreground text-lg">{selectedFacility.description}</p>
                  </div>
                </div>

                {selectedFacility.details && <div className="space-y-6 mb-8">
                    {/* Library Incharge */}
                    {selectedFacility.details.incharge && <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-2">{i18next.t("auto.library_administration_io1opg")}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.incharge}</p>
                        <p className="text-sm text-foreground">{selectedFacility.details.assistant}</p>
                        <p className="text-sm text-foreground mt-2">{selectedFacility.details.establishment}</p>
                      </div>}

                    {/* Books Collection */}
                    {selectedFacility.details.books && <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{i18next.t("auto.book_collection_1cr5l4q")}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          <div><strong>{i18next.t("auto.central_library_k9atr7")}</strong> {selectedFacility.details.books.central}</div>
                          <div><strong>{i18next.t("auto.journals_periodicals_1gejx6b")}</strong> {selectedFacility.details.books.journals}</div>
                          <div><strong>{i18next.t("auto.newspapers_1tk7vth")}</strong> {selectedFacility.details.books.newspapers}</div>
                          <div><strong>{i18next.t("auto.b_b_a_library_1udq2kv")}</strong> {selectedFacility.details.books.bba}</div>
                          <div><strong>{i18next.t("auto.b_c_a_library_19qlrym")}</strong> {selectedFacility.details.books.bca}</div>
                          <div><strong>{i18next.t("auto.b_s_w_library_1a45etk")}</strong> {selectedFacility.details.books.bsw}</div>
                          <div><strong>{i18next.t("auto.p_g_library_lp1pdj")}</strong> {selectedFacility.details.books.pg}</div>
                          <div><strong>{i18next.t("auto.departmental_libraries_1fxv1lb")}</strong> {selectedFacility.details.books.departmental}</div>
                          <div className="col-span-2 md:col-span-3"><strong>{i18next.t("auto.total_books_1tspfrb")}</strong> {selectedFacility.details.books.total}</div>
                        </div>
                      </div>}

                    {/* E-Resources */}
                    {selectedFacility.details.eresources && <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{i18next.t("auto.e_resources_pxihg")}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedFacility.details.eresources.map((resource, index) => <div key={index} className="text-sm">
                              • <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline hover:no-underline transition-colors">
                                  {resource.name}
                                </a>
                            </div>)}
                        </div>
                      </div>}

                    {/* Library Staff */}
                    {selectedFacility.details.staff && <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{i18next.t("auto.library_staff_1gxim64")}</h3>
                        <div className="space-y-2">
                          {selectedFacility.details.staff.map((member, index) => <div key={index} className="text-sm">
                              <strong>{member.name}</strong> - {member.post}<br />
                              <span className="text-muted-foreground">{member.qualification}</span>
                            </div>)}
                        </div>
                      </div>}

                    {/* Library Officials */}
                    {selectedFacility.details.officials && <div className="bg-indigo-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{i18next.t("auto.library_officials_11xroq0")}</h3>
                        <div className="space-y-2">
                          {selectedFacility.details.officials.map((official, index) => <div key={index} className="text-sm">
                              <strong>{official.name}</strong> - {official.designation}
                              {official.email && <><br /><span className="text-muted-foreground">{`${i18next.t("auto.email_12rd9wz")} `}{official.email}</span></>}
                            </div>)}
                        </div>
                      </div>}

                    {/* Library Timing */}
                    {selectedFacility.details.timing && <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-2">{i18next.t("auto.library_timing_17eg4dm")}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.timing}</p>
                      </div>}

                    {/* Membership */}
                    {selectedFacility.details.membership && <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-2">{i18next.t("auto.library_membership_6k0g6g")}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.membership}</p>
                      </div>}

                    {/* Book Entitlements */}
                    {selectedFacility.details.entitlements && <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{i18next.t("auto.book_issue_entitlements_kwf4vz")}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedFacility.details.entitlements.map((entitlement, index) => <div key={index} className="text-sm">
                              <strong>{entitlement.category}:</strong> {entitlement.books}{` ${i18next.t("auto.books_2wkahr")}
                            `}</div>)}
                        </div>
                      </div>}

                    {/* Library Highlights */}
                    {selectedFacility.details.highlights && <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{i18next.t("auto.library_highlights_5ycf4p")}</h3>
                        <ul className="space-y-2">
                          {selectedFacility.details.highlights.map((highlight, index) => <li key={index} className="text-sm text-foreground">• {highlight}</li>)}
                        </ul>
                      </div>}

                    {/* Generic Description for other facilities */}
                    {selectedFacility.details.description && !selectedFacility.details.books && !selectedFacility.details.indoorSports && !selectedFacility.details.classroom && <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{`${i18next.t("auto.about_3ebm88")} `}{selectedFacility.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.description}</p>
                      </div>}
                  </div>}

                {/* Sports Complex Details */}
                {selectedFacility.details && selectedFacility.details.indoorSports && <div className="space-y-6 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.indoorSports.title}</h3>
                      <p className="text-sm text-foreground">{selectedFacility.details.indoorSports.description}</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.outdoorStadium.title}</h3>
                      <p className="text-sm text-foreground">{selectedFacility.details.outdoorStadium.description}</p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.gym.title}</h3>
                      <p className="text-sm text-foreground">{selectedFacility.details.gym.description}</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.fitnessCentre.title}</h3>
                      <p className="text-sm text-foreground">{selectedFacility.details.fitnessCentre.description}</p>
                    </div>
                  </div>}

                {facilityImageMapping[selectedFacility.title] && facilityImageMapping[selectedFacility.title].length > 0 ? <div className="space-y-8">
                    {facilityImageMapping[selectedFacility.title].map(folderName => {
                const folderImages = galleryImages.filter(img => img.folder === folderName);
                if (folderImages.length === 0) return null;
                return <div key={folderName}>
                          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                            {galleryIcons[folderName] && React.createElement(galleryIcons[folderName], {
                      className: "w-6 h-6 text-primary"
                    })}
                            {folderName}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {folderImages.slice(0, 6).map((image, index) => <motion.div key={image.id} initial={{
                      opacity: 0,
                      scale: 0.8
                    }} animate={{
                      opacity: 1,
                      scale: 1
                    }} transition={{
                      duration: 0.6,
                      delay: index * 0.1
                    }} whileHover={{
                      scale: 1.05
                    }} onClick={() => setSelectedImage(image)} className="relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                                <img className="w-full h-full object-cover" alt={image.name} src={r2Url(`images/campus/${image.path.replace(/\s+/g, '-')}/${encodeURIComponent(image.name)}`)} onError={e => {
                        e.target.src = 'https://images.unsplash.com/photo-1595872018818-97555653a011';
                      }} />
                                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <span className="text-white font-semibold">{i18next.t("auto.view_full_size_15bevtq")}</span>
                                </div>
                              </motion.div>)}
                          </div>
                        </div>;
              })}
                  </div> : selectedFacility.details ? <div className="space-y-6">
                    {selectedFacility.details.classroom && <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.classroom.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.classroom.description}</p>
                      </div>}

                    {selectedFacility.details.smartClassroom && <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.smartClassroom.title}</h3>
                        <p className="text-sm text-foreground mb-2">{selectedFacility.details.smartClassroom.description}</p>
                        {selectedFacility.details.smartClassroom.link && <a href={selectedFacility.details.smartClassroom.link} className="text-primary hover:text-primary/80 underline text-sm">{`
                            ${i18next.t("auto.click_here_for_more_details_h0bdz1")}
                          `}</a>}
                      </div>}

                    {selectedFacility.details.ict && <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.ict.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.ict.description}</p>
                      </div>}

                    {selectedFacility.details.laboratories && <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.laboratories.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.laboratories.description}</p>
                      </div>}

                    {selectedFacility.details.seminarConference && <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.seminarConference.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.seminarConference.description}</p>
                      </div>}
                  </div> : <div className="text-center py-12">
                    <selectedFacility.icon className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground text-lg">{i18next.t("auto.images_for_this_facility_are_coming_soon_bm8o3x")}</p>
                  </div>}
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default CampusLife;
