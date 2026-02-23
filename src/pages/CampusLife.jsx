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
        const newPositions = { ...prev };
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
    'Smart Class': MonitorSpeaker,
  };

  const facilityImageMapping = {
    'Central Library': ['Library'],
    'Modern Laboratories': ['Department of Botany', 'Department of Chemistry', 'Department of Zoology'],
    'Hostel Facilities': [],
    'Student Activities': [],
    'Cultural Center': ['Conference Hall', 'Seminar Hall'],
    'Sports Complex': [],
  };

  const facilities = [
    {
      icon: Library,
      title: 'Central Library',
      description: 'Extensive collection of books, journals, and digital resources',
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
        eresources: [
          { name: 'E-ShodhSindhu', url: 'https://ess.inflibnet.ac.in/' },
          { name: 'Shodhganga', url: 'https://shodhganga.inflibnet.ac.in/' },
          { name: 'Sodh Gagotri', url: 'https://sodhganga.inflibnet.ac.in/' },
          { name: 'OPAC – E-Granthalaya', url: '#' },
          { name: 'N-List (Inflibnet)', url: 'https://nlist.inflibnet.ac.in/' },
          { name: 'National Digital Library', url: 'https://ndl.iitkgp.ac.in/' }
        ],
        staff: [
          { name: 'Ragini Kumari', qualification: 'M.Lib. & Info. Sc. , M.A (Philosophy), DCA, e-Library', post: 'Librarian' },
          { name: 'Moni Kumari', qualification: 'B.Lib. & Info. Sc. , B.A (Political Sc. Hons) DCA', post: 'Library Assistant' }
        ],
        timing: 'Library remains open from 9.30 am. to 4.30 PM on all working days.',
        membership: 'Magadh Mahila College library has an academic library to meet the need of the students and teaching staff of the college. The new members in 2017 are 1,486 students of which 322 are vocational and 1,164 are from the general section.',
        highlights: [
          'e-library Services: The library has an open and fully automated accession system and lease line facility with the 100 Mbps internet connection to search any kind of books and journal very quickly.',
          'Library card holder Students, Teaching and Non-teaching Staff are allowed internet surfing for downloading study material.',
          'Students are using OPAC for searching Books',
          'CIRCULATION SERVICES: The Issue counter, from where the users can issue 3 General books and B.A, B.Sc. and PG Students can issue 2 additional T.B.L. books at a time for a 15th day through Library Automation Software (KOHA) and Return on Return Counter.',
          'THE TECHNICAL SERVICES: The Technical section of the library provides classification and cataloguing services.',
          'REFERENCE SERVICES: The Central Library has a spacious Reading Room with a seating capacity of 105.',
          'JOURNAL/ MAGAZINES SERVICES: The library has Journal/ national Journals and Local Magazines. Employment News, English and Hindi Newspapers are also available.',
          'BINDING SERVICES: The library has binding section where previous years Journals and Magazines are covered.',
          'XEROX SERVICES: The Library has Xerox section where students and Staff can take the Xerox copy of Books, Magazines and Documents.',
          'SEPARATE COMPUTER WITH ADEQUATE SOFTWARE FOR VISUALLY CHALLENGED STUDENT.'
        ],
        officials: [
          { name: 'Dr. Rishu Raj', designation: 'Library Incharge', email: 'nawanisrcc@gmail.com' },
          { name: 'Ms. Ragini Kumari', designation: 'Librarian (Officiating), Professional Assistant' }
        ],
        entitlements: [
          { category: 'Post Graduate Students', books: '4' },
          { category: 'Undergraduate Students', books: '4' },
          { category: 'Faculty members', books: '5 – 10' },
          { category: 'Non-teaching staff', books: '5' }
        ]
      }
    },
    {
      icon: Microscope,
      title: 'Modern Laboratories',
      description: 'State-of-the-art labs for science and computer programs',
      color: 'from-primary to-primary',
      details: {
        description: 'The college has well-equipped laboratories in various disciplines including Chemistry Lab, Physics Lab, Botany Lab, Zoology Lab, Language Lab, Research Labs, Music Lab, Computer Lab, and Psychology Lab. These labs facilitate hands-on learning and research activities.'
      }
    },
    {
      icon: Home,
      title: 'Hostel Facilities',
      description: '3 hostels accommodating 640 students with modern amenities',
      color: 'from-primary to-highlight',
      details: {
        description: 'The college provides comfortable hostel facilities for students with 3 hostels accommodating 640 students. The hostels are equipped with modern amenities including Wi-Fi, mess facilities, 24/7 security, and recreational areas to ensure a safe and conducive living environment.'
      }
    },
    {
      icon: Users,
      title: 'Student Activities',
      description: 'Vibrant clubs, societies, and cultural programs',
      color: 'from-primary to-highlight',
      details: {
        description: 'The college offers a wide range of student activities including various clubs and societies such as Science Society, NSS, NCC, IT Society, Students\' Counselling Cell, and Grievance Redressal Cell. These activities provide opportunities for students to develop leadership skills, participate in community service, and engage in extracurricular pursuits.'
      }
    },
    {
      icon: Music,
      title: 'Cultural Center',
      description: 'Auditorium and spaces for music, dance, and drama',
      color: 'from-primary to-highlight',
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities for fitness and wellness',
      color: 'from-primary to-highlight',
      details: {
        indoorSports: {
          title: 'Indoor Sports Complex',
          description: 'The College has a state-of-art international standard multipurpose indoor sports stadium. It has a seating capacity of about 300 spectators. The courts laid with wooden planks are used for chess, table tennis, Badminton, Judo, Wrestling, etc.'
        },
        outdoorStadium: {
          title: 'Outdoor Stadium',
          description: 'The College also has a hockey cum football field. The College has been excelling in sports for over two decades. Every year the College holds Sports Carnival, Intra-class, inter-college matches and Sports Day. For proper training and grooming of players the College provides coaching facilities to the players for different games. The College has teams for Cricket, Football, Hockey, Basket Ball, Volley Ball, Hand Ball, Badminton, Lawn Tennis, Table Tennis, Squash Racket, Swimming, Shooting, and Athletics.'
        },
        gym: {
          title: 'Gym',
          description: 'A gym with all modern equipments is available in our college to keep our students fit and healthy.'
        },
        fitnessCentre: {
          title: 'Fitness Centre',
          description: 'The College maintains its own fitness centre. It is located inside the multipurpose hall in sports complex possessing equipment for free weight exercises, bodyweight exercises, gym ball exercises / Swiss ball exercises, resistance band exercises, resistance machine exercises and stretching exercises. The Center also holds classes for kickboxing, yoga and aerobics: Weight training section: This section comprises of Olympic weightlifting weights, exercise stations, Swiss balls etc. Cardio section: It consists of treadmills, elliptical trainer, cycles etc.'
        }
      }
    },
    {
      icon: MonitorSpeaker,
      title: 'Academic & ICT Infrastructure',
      description: 'Modern classrooms, smart classrooms, computer centers, and advanced laboratories',
      color: 'from-primary to-highlight',
      details: {
        classroom: {
          title: 'Classroom',
          description: 'In view of its recognition as a "Heritage Building" by the Government of Bihar, the class-rooms in the College retain their heritage look with vintage and smart furniture. The class rooms at MMC facilitate a blend of traditional and modern modes of teaching with technological aids such as ceiling-mounted LCD projectors, roll-down screens, green boards and podium for faculty.'
        },
        smartClassroom: {
          title: 'Smart Classroom',
          description: 'Click here for more details of Smart Class Room',
          link: '#'
        },
        ict: {
          title: 'Information and Communication Technology (ICT)',
          description: 'The College has three state of the art Computer Centres. All the computers in the centres are provided with the latest updated software and hardware. Internet, printing and scanning facilities are also available through network. Further, each centre is equipped with uninterrupted power backup. The teaching of information technology and computer-based papers is carried out through LCD screens in the Computer Centres. In addition, the Centres are also available for the students for accessing internet, practice and for preparation of their projects. The College has separate IT Cell to conduct all web- affairs of the Institution like – College website upgradation-maintenance, Facebook maintenance WhatsApp site maintenance, College software maintenance, College MIS system maintenance etc.'
        },
        laboratories: {
          title: 'Laboratories',
          description: 'The college has a well equipped labs in different streams to enforce the theoretical studies. It has Chemistry Lab, Physics Lab, Botany Lab, Zoology Lab, Language lab, Research labs, Music Lab, Computer lab, Psychology Lab etc.'
        },
        seminarConference: {
          title: 'Seminar & Conference Room',
          description: 'The college has state-of-the-art air-conditioned Seminar Halls, with a seating capacity of around two hundred people. It is equipped with audio-visual facilities along with recording facilities and an excellent sound system. It also features a projector screen, white board, green board and a podium. The Seminar Hall is used for holding seminars, symposia, workshops, group discussions, lectures etc. Along with, the college has a well equipped air conditioned conference hall with a capacity of about 100 people. It is also equipped with audio-visual recording facility that is used for organizing meetings, conferences & Presentation.'
        }
      }
    },
  ];

  const galleryImages = [
    // Computer Lab
    { id: 1, folder: 'Computer Lab', name: 'WhatsApp Image 2026-01-29 at 12.35.43 AM (1).jpeg', path: 'Computer Lab' },
    { id: 2, folder: 'Computer Lab', name: 'WhatsApp Image 2026-01-29 at 12.35.43 AM.jpeg', path: 'Computer Lab' },
    { id: 3, folder: 'Computer Lab', name: 'WhatsApp Image 2026-01-29 at 12.35.47 AM.jpeg', path: 'Computer Lab' },

    // Conference Hall
    { id: 4, folder: 'Conference Hall', name: 'WhatsApp Image 2026-01-29 at 12.36.04 AM (1).jpeg', path: 'Conference Hall' },
    { id: 5, folder: 'Conference Hall', name: 'WhatsApp Image 2026-01-29 at 12.36.04 AM.jpeg', path: 'Conference Hall' },
    { id: 6, folder: 'Conference Hall', name: 'WhatsApp Image 2026-01-29 at 12.36.05 AM (1).jpeg', path: 'Conference Hall' },
    { id: 7, folder: 'Conference Hall', name: 'WhatsApp Image 2026-01-29 at 12.36.05 AM.jpeg', path: 'Conference Hall' },
    { id: 8, folder: 'Conference Hall', name: 'WhatsApp Image 2026-01-29 at 12.36.06 AM.jpeg', path: 'Conference Hall' },

    // Department of Botany
    { id: 9, folder: 'Department of Botany', name: 'WhatsApp Image 2026-01-29 at 12.35.55 AM (1).jpeg', path: 'dept of botany' },
    { id: 10, folder: 'Department of Botany', name: 'WhatsApp Image 2026-01-29 at 12.35.55 AM (2).jpeg', path: 'dept of botany' },
    { id: 11, folder: 'Department of Botany', name: 'WhatsApp Image 2026-01-29 at 12.35.55 AM.jpeg', path: 'dept of botany' },
    { id: 12, folder: 'Department of Botany', name: 'WhatsApp Image 2026-01-29 at 12.35.56 AM.jpeg', path: 'dept of botany' },

    // Department of Chemistry
    { id: 13, folder: 'Department of Chemistry', name: 'WhatsApp Image 2026-01-29 at 12.36.01 AM (1).jpeg', path: 'dept. of chemistry' },
    { id: 14, folder: 'Department of Chemistry', name: 'WhatsApp Image 2026-01-29 at 12.36.01 AM.jpeg', path: 'dept. of chemistry' },
    { id: 15, folder: 'Department of Chemistry', name: 'WhatsApp Image 2026-01-29 at 12.36.02 AM (1).jpeg', path: 'dept. of chemistry' },
    { id: 16, folder: 'Department of Chemistry', name: 'WhatsApp Image 2026-01-29 at 12.36.02 AM (2).jpeg', path: 'dept. of chemistry' },
    { id: 17, folder: 'Department of Chemistry', name: 'WhatsApp Image 2026-01-29 at 12.36.02 AM.jpeg', path: 'dept. of chemistry' },
    { id: 18, folder: 'Department of Chemistry', name: 'WhatsApp Image 2026-01-29 at 12.36.03 AM.jpeg', path: 'dept. of chemistry' },
    { id: 19, folder: 'Department of Chemistry', name: 'WhatsApp Image 2026-01-29 at 12.36.04 AM.jpeg', path: 'dept. of chemistry' },

    // Department of Zoology
    { id: 20, folder: 'Department of Zoology', name: 'WhatsApp Image 2026-01-29 at 12.35.56 AM.jpeg', path: 'dept. of zoology' },
    { id: 21, folder: 'Department of Zoology', name: 'WhatsApp Image 2026-01-29 at 12.35.57 AM (1).jpeg', path: 'dept. of zoology' },
    { id: 22, folder: 'Department of Zoology', name: 'WhatsApp Image 2026-01-29 at 12.35.57 AM (2).jpeg', path: 'dept. of zoology' },
    { id: 23, folder: 'Department of Zoology', name: 'WhatsApp Image 2026-01-29 at 12.35.57 AM.jpeg', path: 'dept. of zoology' },

    // Library
    { id: 24, folder: 'Library', name: 'WhatsApp Image 2026-01-29 at 12.35.47 AM (1).jpeg', path: 'Library' },
    { id: 25, folder: 'Library', name: 'WhatsApp Image 2026-01-29 at 12.35.47 AM.jpeg', path: 'Library' },
    { id: 26, folder: 'Library', name: 'WhatsApp Image 2026-01-29 at 12.35.49 AM.jpeg', path: 'Library' },
    { id: 27, folder: 'Library', name: 'WhatsApp Image 2026-01-29 at 12.35.50 AM.jpeg', path: 'Library' },
    { id: 28, folder: 'Library', name: 'WhatsApp Image 2026-01-29 at 12.35.51 AM (1).jpeg', path: 'Library' },
    { id: 29, folder: 'Library', name: 'WhatsApp Image 2026-01-29 at 12.35.51 AM (2).jpeg', path: 'Library' },
    { id: 30, folder: 'Library', name: 'WhatsApp Image 2026-01-29 at 12.35.51 AM.jpeg', path: 'Library' },
    { id: 31, folder: 'Library', name: 'WhatsApp Image 2026-01-29 at 12.35.52 AM (1).jpeg', path: 'Library' },
    { id: 32, folder: 'Library', name: 'WhatsApp Image 2026-01-29 at 12.35.53 AM.jpeg', path: 'Library' },

    // Reading Room
    { id: 33, folder: 'Reading Room', name: 'WhatsApp Image 2026-01-29 at 12.35.52 AM.jpeg', path: 'reading rom' },
    { id: 34, folder: 'Reading Room', name: 'WhatsApp Image 2026-01-29 at 12.35.53 AM (1).jpeg', path: 'reading rom' },
    { id: 35, folder: 'Reading Room', name: 'WhatsApp Image 2026-01-29 at 12.35.53 AM.jpeg', path: 'reading rom' },
    { id: 36, folder: 'Reading Room', name: 'WhatsApp Image 2026-01-29 at 12.35.54 AM (1).jpeg', path: 'reading rom' },
    { id: 37, folder: 'Reading Room', name: 'WhatsApp Image 2026-01-29 at 12.35.54 AM.jpeg', path: 'reading rom' },

    // Seminar Hall
    { id: 38, folder: 'Seminar Hall', name: 'WhatsApp Image 2026-01-29 at 12.35.59 AM.jpeg', path: 'seminar hall' },
    { id: 39, folder: 'Seminar Hall', name: 'WhatsApp Image 2026-01-29 at 12.36.00 AM (1).jpeg', path: 'seminar hall' },
    { id: 40, folder: 'Seminar Hall', name: 'WhatsApp Image 2026-01-29 at 12.36.00 AM.jpeg', path: 'seminar hall' },

    // Smart Class
    { id: 41, folder: 'Smart Class', name: 'WhatsApp Image 2026-01-29 at 12.35.58 AM.jpeg', path: 'smart class' },
  ];

  return (
    <>
      <Helmet>
        <title>Campus Life - Magadh Mahila College | Facilities & Student Life</title>
        <meta name="description" content="Experience vibrant campus life at Magadh Mahila College. Explore our modern facilities including library, labs, hostels, sports complex, and cultural activities." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">
                  Campus Life
                </span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto">
                Experience a vibrant and enriching campus environment designed for holistic development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">
                  World-Class Facilities
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    whileHover={{ y: -15, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedFacility(facility)}
                    className="group relative cursor-pointer h-full"
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
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-6 shadow-lg`}
                        >
                          <facility.icon className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {facility.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {facility.description}
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

            {/* ACTIVITIES SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">
                  Campus Activities & Initiatives
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border-2 border-blue-200 group cursor-pointer"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Target className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Internal Quality Assurance Cell (IQAC)</h3>
                  <p className="text-muted-foreground">
                    IQAC undertakes various engagement and developmental activities for all-round excellence. Orientation of mission, vision, values and leadership practices towards good governance.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 shadow-lg border-2 border-green-200 group cursor-pointer"
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  >
                    <Recycle className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Solid-Liquid Waste Management</h3>
                  <p className="text-muted-foreground">
                    Comprehensive solid waste management system at the entrance. Segregation, collection and processing of waste in four categories with treatment of over 90% waste on campus.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.24 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 shadow-lg border-2 border-cyan-200 group cursor-pointer"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  >
                    <Droplets className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Rain Water Harvesting</h3>
                  <p className="text-muted-foreground">
                    Unique feature as a valuable alternative water resource. Helps in replenishing ground water resources and relieves water shortages.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.36 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg border-2 border-yellow-200 group cursor-pointer"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Lightbulb className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Magadh Mahila Entrepreneurs Incubation Centre</h3>
                  <p className="text-muted-foreground">
                    First incubation centre in the state for women entrepreneurs. Provides technical support, training and expert guidance for business incubation and self-employment.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.48 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg border-2 border-orange-200 group cursor-pointer"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Solar Power Plant</h3>
                  <p className="text-muted-foreground">
                    100 KWp Solar Power Plant on Main Administrative Building roof. Generates electricity from renewable energy, saving 50% monthly electricity expenses.
                  </p>
                </motion.div>
              </div>

              {/* ENVIRONMENTAL POLICY SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl mb-8"
              >
                <div className="flex items-center justify-center mb-6">
                  <TreePine className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-center text-foreground mb-6">Environmental Sustainability</h3>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-6">
                  The College is strongly committed to sustainable development through its mechanisms of environmental management. College has its own functional 'Environment Policy' and 'Centre for Green Initiatives' to guide ongoing improvements in environmental concerns.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-foreground mb-3">Environmental Initiatives</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Tobacco free campus</li>
                      <li>• Polythene free campus</li>
                      <li>• Plantation drives</li>
                      <li>• Sanitation drives</li>
                      <li>• Steel plates/cups in cafeteria</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-foreground mb-3">Green Practices</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Rain Water Harvesting System</li>
                      <li>• Solid-Liquid Waste Management</li>
                      <li>• Solar Energy Generation</li>
                      <li>• Botanical Garden</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* STUDENT DEVELOPMENT SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl"
              >
                <div className="flex items-center justify-center mb-6">
                  <Award className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-center text-foreground mb-6">Student Development & Activities</h3>
                <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-6">
                  The activities outside of the classroom give opportunities to students to participate in areas of their interest. Beyond the classroom life, outdoor learning is facilitated and is a regular feature for students of professional courses.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">Anti-Ragging Cell</h4>
                    <p className="text-muted-foreground">Ragging in any form is strictly prohibited. Protected and insured by Anti Ragging Cell.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">Student Societies</h4>
                    <p className="text-muted-foreground">Science Society, NSS, NCC, IT Society, Students' Counselling Cell, Grievance Redressal Cell.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-2">Cultural Activities</h4>
                    <p className="text-muted-foreground">Language Lab, Literary Society, Gender Knowledge Centre, Green Earth Brigade, Red Ribbon Club.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">
                  Campus Gallery
                </span>
              </h2>

              {/* Gallery organized by folder */}
              <div className="space-y-16">
                {Array.from(new Map(galleryImages.map(img => [img.folder, img])).entries()).map(([folder, firstImage]) => {
                  const folderImages = galleryImages.filter(img => img.folder === folder);
                  return (
                    <motion.div
                      key={folder}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary flex items-center gap-3">
                        {galleryIcons[folder] && React.createElement(galleryIcons[folder], { className: "w-8 h-8 text-primary" })}
                        {folder}
                      </h3>
                      <div className="relative overflow-hidden">
                        <motion.div
                          className="flex gap-6"
                          drag="x"
                          dragConstraints={{ left: -((folderImages.length - 1) * 320), right: 0 }}
                          animate={{ x: -autoScrollPositions[folder] || 0 }}
                          transition={{ type: "spring", stiffness: 100, damping: 20 }}
                          whileTap={{ cursor: "grabbing" }}
                        >
                          {folderImages.map((image, index) => (
                            <motion.div
                              key={image.id}
                              initial={{ opacity: 0, x: 50, scale: 0.8 }}
                              whileInView={{ opacity: 1, x: 0, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 100
                              }}
                              whileHover={{
                                scale: 1.08,
                                y: -15,
                                rotateY: 5,
                                rotateX: -5,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                              }}
                              onClick={() => setSelectedImage(image)}
                              className="relative flex-shrink-0 w-full md:w-80 h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group"
                              style={{
                                transformStyle: "preserve-3d",
                                perspective: "1000px"
                              }}
                            >
                              {/* Loading skeleton */}
                              {loadingImages[image.id] && (
                                <motion.div
                                  initial={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-2xl"
                                />
                              )}

                              <motion.img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                alt={image.name}
                                loading="lazy"
                                src={r2Url(`images/campus/${image.path.replace(/\s+/g, '-')}/${encodeURIComponent(image.name)}`)}
                                onLoad={() => setLoadingImages(prev => ({ ...prev, [image.id]: false }))}
                                onLoadStart={() => setLoadingImages(prev => ({ ...prev, [image.id]: true }))}
                                onError={(e) => {
                                  e.target.src = 'https://images.unsplash.com/photo-1595872018818-97555653a011';
                                  setLoadingImages(prev => ({ ...prev, [image.id]: false }));
                                }}
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                              />

                              {/* Enhanced overlay with glow effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                              />
                              <motion.div
                                className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ scale: 0.95 }}
                                whileHover={{ scale: 1, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
                                transition={{ duration: 0.3 }}
                              />

                              {/* Floating elements on hover */}
                              <motion.div
                                className="absolute top-4 right-4 w-3 h-3 bg-white/80 rounded-full opacity-0 group-hover:opacity-100"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1, y: -5 }}
                                transition={{ delay: 0.1 }}
                              />
                              <motion.div
                                className="absolute bottom-4 left-4 w-2 h-2 bg-primary/80 rounded-full opacity-0 group-hover:opacity-100"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1, x: -5 }}
                                transition={{ delay: 0.2 }}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary to-blue-600 text-primary-foreground relative overflow-hidden"
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute w-96 h-96 -top-48 -right-48 bg-white rounded-full" />
              </motion.div>

              <h2 className="text-3xl font-bold text-center mb-8 relative z-10">Student Life Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <motion.div
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    50<span className="text-xl">+</span>
                  </motion.div>
                  <motion.p
                    className="text-white/90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Student Clubs & Societies
                  </motion.p>
                </motion.div>

                <motion.div
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    100<span className="text-xl">+</span>
                  </motion.div>
                  <motion.p
                    className="text-white/90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Annual Events & Activities
                  </motion.p>
                </motion.div>

                <motion.div
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    640
                  </motion.div>
                  <motion.p
                    className="text-white/90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Hostel Accommodation
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full cursor-default"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <img
                className="w-full h-auto rounded-2xl shadow-2xl"
                alt={selectedImage.name}
                src={r2Url(`images/campus/${selectedImage.path.replace(/\s+/g, '-')}/${encodeURIComponent(selectedImage.name)}`)}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1595872018818-97555653a011';
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFacility(null)}
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
                onClick={() => setSelectedFacility(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedFacility.color} flex items-center justify-center shadow-lg`}
                  >
                    <selectedFacility.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{selectedFacility.title}</h2>
                    <p className="text-muted-foreground text-lg">{selectedFacility.description}</p>
                  </div>
                </div>

                {selectedFacility.details && (
                  <div className="space-y-6 mb-8">
                    {/* Library Incharge */}
                    {selectedFacility.details.incharge && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-2">Library Administration</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.incharge}</p>
                        <p className="text-sm text-foreground">{selectedFacility.details.assistant}</p>
                        <p className="text-sm text-foreground mt-2">{selectedFacility.details.establishment}</p>
                      </div>
                    )}

                    {/* Books Collection */}
                    {selectedFacility.details.books && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">Book Collection</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          <div><strong>Central Library:</strong> {selectedFacility.details.books.central}</div>
                          <div><strong>Journals/Periodicals:</strong> {selectedFacility.details.books.journals}</div>
                          <div><strong>Newspapers:</strong> {selectedFacility.details.books.newspapers}</div>
                          <div><strong>B.B.A. Library:</strong> {selectedFacility.details.books.bba}</div>
                          <div><strong>B.C.A. Library:</strong> {selectedFacility.details.books.bca}</div>
                          <div><strong>B.S.W. Library:</strong> {selectedFacility.details.books.bsw}</div>
                          <div><strong>P.G. Library:</strong> {selectedFacility.details.books.pg}</div>
                          <div><strong>Departmental Libraries:</strong> {selectedFacility.details.books.departmental}</div>
                          <div className="col-span-2 md:col-span-3"><strong>Total Books:</strong> {selectedFacility.details.books.total}</div>
                        </div>
                      </div>
                    )}

                    {/* E-Resources */}
                    {selectedFacility.details.eresources && (
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">E-Resources</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedFacility.details.eresources.map((resource, index) => (
                            <div key={index} className="text-sm">
                              • <a
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 underline hover:no-underline transition-colors"
                                >
                                  {resource.name}
                                </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Library Staff */}
                    {selectedFacility.details.staff && (
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">Library Staff</h3>
                        <div className="space-y-2">
                          {selectedFacility.details.staff.map((member, index) => (
                            <div key={index} className="text-sm">
                              <strong>{member.name}</strong> - {member.post}<br />
                              <span className="text-muted-foreground">{member.qualification}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Library Officials */}
                    {selectedFacility.details.officials && (
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">Library Officials</h3>
                        <div className="space-y-2">
                          {selectedFacility.details.officials.map((official, index) => (
                            <div key={index} className="text-sm">
                              <strong>{official.name}</strong> - {official.designation}
                              {official.email && <><br /><span className="text-muted-foreground">Email: {official.email}</span></>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Library Timing */}
                    {selectedFacility.details.timing && (
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-2">Library Timing</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.timing}</p>
                      </div>
                    )}

                    {/* Membership */}
                    {selectedFacility.details.membership && (
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-2">Library Membership</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.membership}</p>
                      </div>
                    )}

                    {/* Book Entitlements */}
                    {selectedFacility.details.entitlements && (
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">Book Issue Entitlements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedFacility.details.entitlements.map((entitlement, index) => (
                            <div key={index} className="text-sm">
                              <strong>{entitlement.category}:</strong> {entitlement.books} books
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Library Highlights */}
                    {selectedFacility.details.highlights && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">Library Highlights</h3>
                        <ul className="space-y-2">
                          {selectedFacility.details.highlights.map((highlight, index) => (
                            <li key={index} className="text-sm text-foreground">• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Generic Description for other facilities */}
                    {selectedFacility.details.description && !selectedFacility.details.books && !selectedFacility.details.indoorSports && !selectedFacility.details.classroom && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">About {selectedFacility.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.description}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Sports Complex Details */}
                {selectedFacility.details && selectedFacility.details.indoorSports && (
                  <div className="space-y-6 mb-8">
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
                  </div>
                )}

                {facilityImageMapping[selectedFacility.title] && facilityImageMapping[selectedFacility.title].length > 0 ? (
                  <div className="space-y-8">
                    {facilityImageMapping[selectedFacility.title].map(folderName => {
                      const folderImages = galleryImages.filter(img => img.folder === folderName);
                      if (folderImages.length === 0) return null;

                      return (
                        <div key={folderName}>
                          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                            {galleryIcons[folderName] && React.createElement(galleryIcons[folderName], { className: "w-6 h-6 text-primary" })}
                            {folderName}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {folderImages.slice(0, 6).map((image, index) => (
                              <motion.div
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedImage(image)}
                                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                <img
                                  className="w-full h-full object-cover"
                                  alt={image.name}
                                  src={r2Url(`images/campus/${image.path.replace(/\s+/g, '-')}/${encodeURIComponent(image.name)}`)}
                                  onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1595872018818-97555653a011';
                                  }}
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <span className="text-white font-semibold">View Full Size</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : selectedFacility.details ? (
                  <div className="space-y-6">
                    {selectedFacility.details.classroom && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.classroom.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.classroom.description}</p>
                      </div>
                    )}

                    {selectedFacility.details.smartClassroom && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.smartClassroom.title}</h3>
                        <p className="text-sm text-foreground mb-2">{selectedFacility.details.smartClassroom.description}</p>
                        {selectedFacility.details.smartClassroom.link && (
                          <a
                            href={selectedFacility.details.smartClassroom.link}
                            className="text-primary hover:text-primary/80 underline text-sm"
                          >
                            Click here for more details
                          </a>
                        )}
                      </div>
                    )}

                    {selectedFacility.details.ict && (
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.ict.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.ict.description}</p>
                      </div>
                    )}

                    {selectedFacility.details.laboratories && (
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.laboratories.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.laboratories.description}</p>
                      </div>
                    )}

                    {selectedFacility.details.seminarConference && (
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-primary mb-3">{selectedFacility.details.seminarConference.title}</h3>
                        <p className="text-sm text-foreground">{selectedFacility.details.seminarConference.description}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <selectedFacility.icon className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground text-lg">Images for this facility are coming soon...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CampusLife;
