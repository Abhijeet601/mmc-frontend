import i18next from "i18next";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Info, Building, Shield, UserCheck, BookOpen, GraduationCap, Home, Phone, TrendingUp, Users, Bell, FileText, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { useBilingual } from '../contexts/BilingualContext';
import { motion, AnimatePresence } from 'framer-motion';
import { r2Url } from '@/lib/r2Assets';
import { persistLanguagePreference } from '@/lib/languagePreference';
const Navbar = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const tEn = i18n.getFixedT('en');
  const tHi = i18n.getFixedT('hi');
  const {
    theme,
    setTheme
  } = useTheme();
  const {
    setBilingual
  } = useBilingual();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [admissionsDropdownOpen, setAdmissionsDropdownOpen] = useState(false);
  const [cellsDropdownOpen, setCellsDropdownOpen] = useState(false);
  const [rightAcademicsDropdownOpen, setRightAcademicsDropdownOpen] = useState(false);

  // Mobile collapsible states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false);
  const [mobileAdminOpen, setMobileAdminOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileCellsOpen, setMobileCellsOpen] = useState(false);
  const aboutDropdownRef = useRef(null);
  const adminDropdownRef = useRef(null);
  const admissionsDropdownRef = useRef(null);
  const cellsDropdownRef = useRef(null);
  const rightAcademicsDropdownRef = useRef(null);
  const adminCloseTimeoutRef = useRef(null);
  const aboutCloseTimeoutRef = useRef(null);
  const admissionsCloseTimeoutRef = useRef(null);
  const rightAcademicsCloseTimeoutRef = useRef(null);
  const cellsCloseTimeoutRef = useRef(null);

  // Function to close all dropdowns instantly
  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false);
    setAdminDropdownOpen(false);
    setAdmissionsDropdownOpen(false);
    setRightAcademicsDropdownOpen(false);
    setCellsDropdownOpen(false);
  };

  // Close mobile menu and reset mobile submenu states
  const closeMobileMenu = useCallback(() => {
    setOpen(false);
    setMobileAboutOpen(false);
    setMobileAdmissionsOpen(false);
    setMobileAdminOpen(false);
    setMobileAcademicsOpen(false);
    setMobileCellsOpen(false);
  }, []);

  const handleLanguageChange = useCallback(language => {
    persistLanguagePreference(language);
    i18n.changeLanguage(language);
    setBilingual(false);
  }, [i18n, setBilingual]);

  // Keyboard helper: open with Enter/Space/ArrowDown and focus the first item
  const handleDropdownButtonKeyDown = (e, openSetter, ref) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openSetter(true);
      setTimeout(() => {
        const first = ref.current?.querySelector('a, button');
        if (first && typeof first.focus === 'function') first.focus();
      }, 0);
    } else if (e.key === 'Escape') {
      openSetter(false);
    }
  };

  // Prevent background scroll when mobile menu is open and close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const handleKey = e => {
      if (e.key === 'Escape') closeMobileMenu();
    };
    if (open) document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [open, closeMobileMenu]);

  // Close all dropdowns on Escape and clear hover timeouts on unmount
  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
        closeMobileMenu();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      [adminCloseTimeoutRef, aboutCloseTimeoutRef, admissionsCloseTimeoutRef, rightAcademicsCloseTimeoutRef, cellsCloseTimeoutRef].forEach(ref => {
        if (ref.current) {
          clearTimeout(ref.current);
          ref.current = null;
        }
      });
    };
  }, [closeMobileMenu]);

  // Scroll detection for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const aboutItems = React.useMemo(() => [{
    label: t('nav.aboutSub.welcome'),
    to: "/about/brief-profile"
  }, {
    label: t('nav.aboutSub.principalProfile'),
    to: "/about/principal"
  }, {
    label: t('nav.aboutSub.previousPrincipals'),
    to: "/about/previous-principals"
  }, {
    label: t('nav.aboutSub.collegeEmblem'),
    to: "/about/emblem"
  }, {
    label: t('nav.aboutSub.studentsRollOfHonor'),
    to: "/about/roll-of-honor"
  }, {
    label: t('nav.aboutSub.codeOfEthics'),
    to: "/about/code-of-ethics"
  }, {
    label: t('nav.aboutSub.codeOfConduct'),
    to: "/about/code-of-conduct"
  }, {
    label: t('nav.aboutSub.instituteDistinctiveness.title'),
    to: "/about/institute-distinctiveness"
  }, {
    label: t('nav.aboutSub.institutionsPride'),
    to: "/about/institutions-pride"
  }, {
    label: t('nav.aboutSub.modelElectoralLiteracyClub'),
    to: "/about/melc"
  }, {
    label: t('nav.aboutSub.visionMissionCoreValues'),
    to: "/about/vision-mission"
  }, {
    label: t('nav.aboutSub.feedback'),
    to: "/about/feedback-forms"
  }, {
    label: t('nav.aboutSub.environmentalPolicy'),
    to: "/about/environment-policy"
  }, {
    label: t('nav.aboutSub.mou'),
    to: "/about/mou"
  }, {
    label: t('nav.aboutSub.futurePlans'),
    to: "/about/future-plans"
  }, {
    label: t('nav.aboutSub.milestones'),
    to: "/about/milestones"
  }, {
    label: t('nav.aboutSub.visitorsNote'),
    to: "/about/visitors-note"
  }, {
    label: t('nav.aboutSub.mis'),
    to: "/about/mis"
  }], [i18n.language]);
  const nepItems = React.useMemo(() => [{
    label: i18next.t("auto.academic_programs_ke4e7b"),
    to: '/academics'
  }, {
    label: i18next.t("auto.departments_pn2w2a"),
    to: '/departments'
  }, {
    label: t('nav.nep2020Sub.academicInfrastructure'),
    to: "/nep2020/academic-infrastructure"
  }, {
    label: t('nav.nep2020Sub.courseMaterial'),
    to: "/nep2020/course-material"
  }, {
    label: t('nav.nep2020Sub.programOutcome.title'),
    to: "/nep2020/program-outcome"
  }, {
    label: t('nav.nep2020Sub.publications'),
    to: "/nep2020/publications"
  }, {
    label: t('nav.nep2020Sub.syllabus'),
    to: "/nep2020/syllabus"
  }, {
    label: t('nav.nep2020Sub.syllabusNEP'),
    to: "/nep2020/syllabus-nep"
  }, {
    label: t('nav.nep2020Sub.timeTable'),
    to: "/nep2020/time-table"
  }], [i18n.language]);
  const admissionsItems = React.useMemo(() => [{
    label: i18next.t("auto.programmes_kzend6"),
    to: "/admissions/courses"
  }, {
    label: i18next.t("auto.general_information_n82m3j"),
    to: "/admissions/general-information"
  }, {
    label: i18next.t("auto.eligibility_g6u7ew"),
    to: "/admissions/eligibility"
  }, {
    label: i18next.t("auto.ordinence_regulations_wl9xkn"),
    to: "/admissions/ordinance-regulations"
  }, {
    label: i18next.t("auto.admitted_students_17o0un3"),
    to: "/admissions/admitted-students-year-wise"
  }], [i18n.language]);
  const linksLeft = [];
  const linksRight = React.useMemo(() => [{
    to: '/alumni',
    label: i18next.t("auto.alumni_1584sdz")
  }, {
    to: '/campus-life',
    label: i18next.t("auto.campus_life_mycba2")
  }, {
    to: '/contact',
    label: i18next.t("auto.contact_1ofoso5")
  }, {
    to: '/nirf',
    label: i18next.t("auto.nirf_yjojti")
  }], []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = event => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
      if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target)) {
        setAdminDropdownOpen(false);
      }
      if (admissionsDropdownRef.current && !admissionsDropdownRef.current.contains(event.target)) {
        setAdmissionsDropdownOpen(false);
      }
      if (rightAcademicsDropdownRef.current && !rightAcademicsDropdownRef.current.contains(event.target)) {
        setRightAcademicsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return <motion.header className="relative z-50" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1]
  }}>


      {/* ========== TOP BAR ========== */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        <div className="max-w-7xl mx-auto px-4 h-10 flex justify-between items-center uppercase relative z-10 whitespace-nowrap">
          <div className="flex gap-4 items-center min-w-0">
            <Link to="/" className="nav-link text-xs hover:text-white transition-colors duration-300 flex items-center gap-2">
              <Home className="w-4 h-4" />
              {t('nav.home')}
            </Link>
            <Link to="/notifications" className="nav-link text-xs hover:text-white transition-colors duration-300 flex items-center gap-2">
              <motion.div whileHover={{
              scale: 1.2
            }} transition={{
              duration: 0.2
            }}>
                <Bell className="w-4 h-4" />
              </motion.div>
              {t('nav.notifications')}
            </Link>
            <Link to="/tenders" className="nav-link text-xs hover:text-white transition-colors duration-300 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {t('nav.tenders')}
            </Link>
          </div>

          <div className="flex gap-4 items-center flex-nowrap ml-4 whitespace-nowrap">
            {/* Language selector */}
            <div className="flex items-center gap-2 text-white text-xs whitespace-nowrap">
              <span className="text-xs font-medium">{t('nav.language')}</span>
              <div className="flex items-center bg-white/10 rounded-md p-0.5 backdrop-blur-sm">
                <button onClick={() => {
                handleLanguageChange('en');
              }} className={`lang-button px-2.5 py-1 text-xs rounded-sm ${i18n.language?.startsWith('en') ? 'bg-white/20 font-semibold shadow-sm' : 'opacity-90 hover:bg-white/10'}`} aria-pressed={i18n.language?.startsWith('en')}>
                  {t('common.english')}
                </button>
                <span className="px-1 text-white/40">|</span>
                <button onClick={() => {
                handleLanguageChange('hi');
              }} className={`lang-button px-2.5 py-1 text-xs rounded-sm ${i18n.language?.startsWith('hi') ? 'bg-white/20 font-semibold shadow-sm' : 'opacity-90 hover:bg-white/10'}`} aria-pressed={i18n.language?.startsWith('hi')}>
                  {t('common.hindi')}
                </button>
              </div>
            </div>

            {/* Theme selector */}
            <div className="flex items-center gap-2 text-white text-xs whitespace-nowrap">
              <span className="text-xs font-medium">{t('nav.theme')}</span>
              <div className="flex items-center bg-white/10 rounded-md p-0.5 backdrop-blur-sm">
                <button onClick={() => setTheme('blue')} className={`theme-button flex items-center px-2.5 py-1 text-xs rounded-sm ${theme === 'blue' ? 'bg-white/20 font-semibold shadow-sm' : 'opacity-90 hover:bg-white/10'}`} aria-pressed={theme === 'blue'}>
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1.5"></span>
                  {t('nav.blue')}
                </button>
                <span className="px-1 text-white/40">|</span>
                <button onClick={() => setTheme('maroon')} className={`theme-button flex items-center px-2.5 py-1 text-xs rounded-sm ${theme === 'maroon' ? 'bg-white/20 font-semibold shadow-sm' : 'opacity-90 hover:bg-white/10'}`} aria-pressed={theme === 'maroon'}>
                  <span className="inline-block w-2 h-2 bg-red-800 rounded-full mr-1.5"></span>
                  {t('nav.maroon')}
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* ========== MOBILE HEADER BAR ========== */}
      {!open && <div className="md:hidden relative bg-white text-primary h-14 flex items-center gap-3 px-4 z-50 shadow-md">
          <button onClick={() => setOpen(prev => !prev)} className="p-2 hover:bg-primary/10 rounded-lg flex-shrink-0" aria-label={i18next.t("auto.toggle_menu_x7mgf8")} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link to="/" className="flex items-center gap-2 min-w-0 flex-1">
            <img src={r2Url('Magadh_Mahila_College.png')} alt={i18next.t("auto.magadh_mahila_college_logo_a2cjxf")} className="w-8 h-8 object-contain bg-white rounded flex-shrink-0" loading="lazy" decoding="async" />
            <span className="text-sm font-semibold leading-tight">{i18next.t("auto.magadh_mahila_college_patna_mpzeni")}</span>
          </Link>
        </div>}

      {/* ========== MAIN NAV ========== */}
      <div className={`hidden md:block bg-white border-b transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center relative">

          {/* LEFT NAVIGATION */}
          <nav className="hidden md:grid flex-1 min-w-0 grid-cols-3 grid-rows-2 gap-2 uppercase text-xs pr-8 lg:pr-56 items-center whitespace-nowrap">
            {/* ABOUT DROPDOWN */}
            <div className="relative" ref={aboutDropdownRef} onMouseEnter={() => {
            if (aboutCloseTimeoutRef.current) {
              clearTimeout(aboutCloseTimeoutRef.current);
              aboutCloseTimeoutRef.current = null;
            }
            closeAllDropdowns();
            setAboutDropdownOpen(true);
          }} onMouseLeave={() => {
            aboutCloseTimeoutRef.current = setTimeout(() => {
              setAboutDropdownOpen(false);
            }, 800);
          }}>
              {/* Invisible hover area to keep dropdown open */}
              <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
              <div className="absolute top-0 left-0 w-[300px] h-[400px] opacity-0 pointer-events-none" />
              <button onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)} onKeyDown={e => handleDropdownButtonKeyDown(e, setAboutDropdownOpen, aboutDropdownRef)} aria-haspopup="menu" aria-expanded={aboutDropdownOpen} aria-controls="about-menu" className="nav-link hover:text-primary flex items-center font-medium tracking-wide">
                <motion.div whileHover={{
                scale: 1.2
              }} transition={{
                duration: 0.2
              }}>
                  <Info className="w-4 h-4 mr-2" />
                </motion.div>
                {t('nav.about')}
                <ChevronDown className={`ml-1 transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} size={14} />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && <motion.div id="about-menu" role="menu" aria-label={t('nav.about')} initial={{
                opacity: 0,
                y: -8,
                scale: 0.98
              }} animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }} exit={{
                opacity: 0,
                y: -8,
                scale: 0.98
              }} transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
                staggerChildren: 0.05,
                delayChildren: 0.1
              }} className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[10000] overflow-y-auto overflow-x-hidden" style={{
                width: 'min(520px, 80vw)',
                maxHeight: '70vh'
              }}>
                    {aboutItems.map((item, index) => <motion.div key={`${item.to}-${index}`} initial={{
                  opacity: 0,
                  x: -6
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.2,
                  delay: index * 0.03,
                  ease: [0.4, 0, 0.2, 1]
                }}>
                        <Link to={item.to} role="menuitem" tabIndex={-1} className="group relative block px-5 py-3 text-xs uppercase hover:text-primary whitespace-normal border-b border-gray-100 last:border-0 transition-all duration-200 ease-out">
                          <motion.span className="relative z-10" whileHover={{
                      scale: 1.02,
                      transition: {
                        duration: 0.15,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }} whileTap={{
                      scale: 0.98
                    }}>
                            {item.label}
                          </motion.span>
                          <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" initial={false} whileHover={{
                      x: [0, 100, 0],
                      transition: {
                        duration: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2
                      }
                    }} />
                        </Link>
                      </motion.div>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* AICTE LINK */}
            <Link to="/aicte" className="nav-link hover:text-primary font-medium tracking-wide flex items-center">
              <motion.div whileHover={{
              scale: 1.2
            }} transition={{
              duration: 0.2
            }}>
                <Shield className="w-4 h-4 mr-2" />
              </motion.div>{`
              ${i18next.t("auto.aicte_3f4u1r")}
            `}</Link>

            {/* IQAC LINK */}
            <Link to="/iqac" className="nav-link hover:text-primary font-medium tracking-wide flex items-center relative z-50">
              <motion.div whileHover={{
              scale: 1.2
            }} transition={{
              duration: 0.2
            }}>
                <Award className="w-4 h-4 mr-2" />
              </motion.div>{t('nav.iqac')}</Link>

            {/* ADMIN DROPDOWN */}
            <div className="relative" ref={adminDropdownRef} onMouseEnter={() => {
            if (adminCloseTimeoutRef.current) {
              clearTimeout(adminCloseTimeoutRef.current);
              adminCloseTimeoutRef.current = null;
            }
            closeAllDropdowns();
            setAdminDropdownOpen(true);
          }} onMouseLeave={() => {
            adminCloseTimeoutRef.current = setTimeout(() => {
              setAdminDropdownOpen(false);
            }, 800);
          }}>
              {/* Invisible hover area to keep dropdown open */}
              <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
              <div className="absolute top-0 left-0 w-[300px] h-[400px] opacity-0 pointer-events-none" />
              {/* Invisible hover area to keep dropdown open when hovering over Cells subdropdown */}
              <div className="absolute top-0 left-full ml-1 w-[250px] h-[400px] opacity-0 pointer-events-none" />
              <button onClick={() => setAdminDropdownOpen(!adminDropdownOpen)} onKeyDown={e => handleDropdownButtonKeyDown(e, setAdminDropdownOpen, adminDropdownRef)} aria-haspopup="menu" aria-expanded={adminDropdownOpen} aria-controls="admin-menu" className="nav-link hover:text-primary flex items-center font-medium tracking-wide">{`
                ${i18next.t("auto.administration_1k4huqz")}
                `}<ChevronDown className={`ml-1 transition-transform duration-300 ${adminDropdownOpen ? 'rotate-180' : ''}`} size={14} />
              </button>

              <AnimatePresence>
                {adminDropdownOpen && <motion.div id="admin-menu" role="menu" aria-label={i18next.t("auto.administration_1k4huqz")} initial={{
                opacity: 0,
                y: -8,
                scale: 0.98
              }} animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }} exit={{
                opacity: 0,
                y: -8,
                scale: 0.98
              }} transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
                staggerChildren: 0.05,
                delayChildren: 0.1
              }} className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[999] overflow-y-auto overflow-x-hidden" style={{
                width: 'min(420px, 80vw)',
                maxHeight: '70vh'
              }}>
                    {/* Cells */}
                    <div className="relative" ref={cellsDropdownRef} onMouseEnter={() => {
                  if (cellsCloseTimeoutRef.current) {
                    clearTimeout(cellsCloseTimeoutRef.current);
                    cellsCloseTimeoutRef.current = null;
                  }
                  setCellsDropdownOpen(true);
                }} onMouseLeave={() => {
                  cellsCloseTimeoutRef.current = setTimeout(() => {
                    setCellsDropdownOpen(false);
                  }, 800);
                }}>
                      {/* Invisible hover area to keep dropdown open */}
                      <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
                      <div className="absolute top-full left-0 mt-2 w-[200px] h-[200px] opacity-0 pointer-events-none" />
                      <button className="group relative block px-5 py-3 text-xs uppercase hover:text-primary border-b border-gray-100 transition-all duration-200 ease-out w-full text-left flex items-center justify-between">{`
                        ${i18next.t("auto.cells_3iex8w")}
                        `}<ChevronDown className={`ml-1 transition-transform duration-300 ${cellsDropdownOpen ? 'rotate-180' : ''}`} size={14} />
                      </button>

                      <AnimatePresence>
                        {cellsDropdownOpen && <motion.div initial={{
                      opacity: 0,
                      y: -8,
                      scale: 0.98
                    }} animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1
                    }} exit={{
                      opacity: 0,
                      y: -8,
                      scale: 0.98
                    }} transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }} className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[1000] overflow-y-auto overflow-x-hidden" style={{
                      width: 'min(200px, 80vw)',
                      maxHeight: '70vh'
                    }}>
                            {[{
                        to: "/administration/cells/2025-2026",
                        label: i18next.t("auto.cells_2025_2026_1fy7qtc")
                      }, {
                        to: "/administration/cells/2024-2025",
                        label: i18next.t("auto.cells_2024_2025_1fcd9pe")
                      }, {
                        to: "/administration/cells/2023-2024",
                        label: i18next.t("auto.cells_2023_2024_1ekvj9g")
                      }].map((item, index) => <motion.div key={item.to} initial={{
                        opacity: 0,
                        x: -6
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        duration: 0.2,
                        delay: index * 0.03,
                        ease: [0.4, 0, 0.2, 1]
                      }}>
                                <Link to={item.to} role="menuitem" tabIndex={-1} className="group relative block px-5 py-3 text-xs uppercase hover:text-primary border-b border-gray-100 last:border-0 transition-all duration-200 ease-out">
                                  <motion.span className="relative z-10" whileHover={{
                            scale: 1.02,
                            transition: {
                              duration: 0.15,
                              ease: [0.4, 0, 0.2, 1]
                            }
                          }} whileTap={{
                            scale: 0.98
                          }}>
                                    {item.label}
                                  </motion.span>
                                  <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" initial={false} whileHover={{
                            x: [0, 100, 0],
                            transition: {
                              duration: 0.6,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 2
                            }
                          }} />
                                </Link>
                              </motion.div>)}
                          </motion.div>}
                      </AnimatePresence>
                    </div>

                    {[{
                  to: "/anti-ragging",
                  label: i18next.t("auto.anti_ragging_committee_18blg3w")
                }, {
                  to: "/sexual-harassment",
                  label: i18next.t("auto.anti_sexual_harassment_committee_1zss24")
                }, {
                  to: "/grievance",
                  label: i18next.t("auto.grievance_cell_1xn5cat")
                }].map((item, index) => <motion.div key={item.to} initial={{
                  opacity: 0,
                  x: -6
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.2,
                  delay: (index + 1) * 0.03,
                  ease: [0.4, 0, 0.2, 1]
                }}>
                        <Link to={item.to} className="group relative block px-5 py-3 text-xs uppercase hover:text-primary border-b border-gray-100 transition-all duration-200 ease-out">
                          <motion.span className="relative z-10" whileHover={{
                      scale: 1.02,
                      transition: {
                        duration: 0.15,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }} whileTap={{
                      scale: 0.98
                    }}>
                            {item.label}
                          </motion.span>
                          <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" initial={false} whileHover={{
                      x: [0, 100, 0],
                      transition: {
                        duration: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2
                      }
                    }} />
                        </Link>
                      </motion.div>)}



                    {[{
                  to: "/administration/student-cabinet",
                  label: i18next.t("auto.student_cabinet_vb3cl6")
                }, {
                  to: "/administration/committees",
                  label: i18next.t("auto.committees_6ma377")
                }, {
                  to: "/administration/incubation-centre",
                  label: i18next.t("auto.incubation_centre_1ny2f40")
                }, {
                  to: "/administration/organogram-of-institution",
                  label: i18next.t("auto.organogram_of_institution_1osjh2z")
                }, {
                  to: "/administration/societies",
                  label: i18next.t("auto.societies_ew7ixp")
                }, {
                  to: "/administration/staff-council",
                  label: i18next.t("auto.teachers_and_employee_list_fnl4r5")
                }, {
                  to: "/administration/centres-list-2020-21",
                  label: i18next.t("auto.centres_list_2020_21_g8k3ld")
                }, {
                  to: "/administration/staff-profile",
                  label: i18next.t("auto.staff_profile_819vpk")
                }, {
                  to: "/administration/teaching-staff-sanctioned-post",
                  label: i18next.t("auto.teaching_staff_sanctioned_post_1ar0tsy")
                }].map((item, index) => <motion.div key={item.to} initial={{
                  opacity: 0,
                  x: -6
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.2,
                  delay: (index + 5) * 0.03,
                  ease: [0.4, 0, 0.2, 1]
                }}>
                        <Link to={item.to} className="group relative block px-5 py-3 text-xs uppercase hover:text-primary border-b border-gray-100 transition-all duration-200 ease-out">
                          <motion.span className="relative z-10" whileHover={{
                      scale: 1.02,
                      transition: {
                        duration: 0.15,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }} whileTap={{
                      scale: 0.98
                    }}>
                            {item.label}
                          </motion.span>
                          <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" initial={false} whileHover={{
                      x: [0, 100, 0],
                      transition: {
                        duration: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2
                      }
                    }} />
                        </Link>
                      </motion.div>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* ADMISSIONS DROPDOWN */}
            <div className="relative" ref={admissionsDropdownRef} onMouseEnter={() => {
            if (admissionsCloseTimeoutRef.current) {
              clearTimeout(admissionsCloseTimeoutRef.current);
              admissionsCloseTimeoutRef.current = null;
            }
            closeAllDropdowns();
            setAdmissionsDropdownOpen(true);
          }} onMouseLeave={() => {
            admissionsCloseTimeoutRef.current = setTimeout(() => {
              setAdmissionsDropdownOpen(false);
            }, 800);
          }}>
              {/* Invisible hover area to keep dropdown open */}
              <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
              <div className="absolute top-0 left-0 w-[300px] h-[400px] opacity-0 pointer-events-none" />
              <button onClick={() => setAdmissionsDropdownOpen(!admissionsDropdownOpen)} onKeyDown={e => handleDropdownButtonKeyDown(e, setAdmissionsDropdownOpen, admissionsDropdownRef)} aria-haspopup="menu" aria-expanded={admissionsDropdownOpen} aria-controls="admissions-menu" className="nav-link hover:text-primary flex items-center font-medium tracking-wide">
                {t('nav.admissions')}
                <ChevronDown className={`ml-1 transition-transform duration-300 ${admissionsDropdownOpen ? 'rotate-180' : ''}`} size={14} />
              </button>

              <AnimatePresence>
                {admissionsDropdownOpen && <motion.div id="admissions-menu" role="menu" aria-label={t('nav.admissions')} initial={{
                opacity: 0,
                y: -8,
                scale: 0.98
              }} animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }} exit={{
                opacity: 0,
                y: -8,
                scale: 0.98
              }} transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
                staggerChildren: 0.05,
                delayChildren: 0.1
              }} className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[999] overflow-y-auto overflow-x-hidden" style={{
                width: 'min(420px, 80vw)',
                maxHeight: '70vh'
              }}>
                    {admissionsItems.map((item, index) => <motion.div key={`${item.to}-${index}`} initial={{
                  opacity: 0,
                  x: -6
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.2,
                  delay: index * 0.03,
                  ease: [0.4, 0, 0.2, 1]
                }}>
                        <Link to={item.to} role="menuitem" tabIndex={-1} className="group relative block px-5 py-3 text-xs uppercase hover:text-primary whitespace-normal border-b border-gray-100 last:border-0 transition-all duration-200 ease-out">
                          <motion.span className="relative z-10" whileHover={{
                      scale: 1.02,
                      transition: {
                        duration: 0.15,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }} whileTap={{
                      scale: 0.98
                    }}>
                            {item.label}
                          </motion.span>
                          <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" initial={false} whileHover={{
                      x: [0, 100, 0],
                      transition: {
                        duration: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2
                      }
                    }} />
                        </Link>
                      </motion.div>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* ALUMNI LINK */}
            <Link to="/alumni" className="nav-link hover:text-primary font-medium tracking-wide flex items-center">
              <Users className="w-4 h-4 mr-2" />{`
              ${i18next.t("auto.alumni_1584sdz")}
            `}</Link>

          </nav>

          {/* RIGHT NAVIGATION */}
          <div className="hidden md:flex flex-1 min-w-0 justify-end gap-4 uppercase text-xs pl-8 lg:pl-48 items-center whitespace-nowrap">
            {/* ACADEMICS DROPDOWN */}
            <div className="relative" ref={rightAcademicsDropdownRef} onMouseEnter={() => {
            if (rightAcademicsCloseTimeoutRef.current) {
              clearTimeout(rightAcademicsCloseTimeoutRef.current);
              rightAcademicsCloseTimeoutRef.current = null;
            }
            closeAllDropdowns();
            setRightAcademicsDropdownOpen(true);
          }} onMouseLeave={() => {
            rightAcademicsCloseTimeoutRef.current = setTimeout(() => {
              setRightAcademicsDropdownOpen(false);
            }, 800);
          }}>
              {/* Invisible hover area to keep dropdown open */}
              <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" />
              <div className="absolute top-0 left-0 w-[300px] h-[400px] opacity-0 pointer-events-none" />
              <button onClick={() => setRightAcademicsDropdownOpen(!rightAcademicsDropdownOpen)} onKeyDown={e => handleDropdownButtonKeyDown(e, setRightAcademicsDropdownOpen, rightAcademicsDropdownRef)} aria-haspopup="menu" aria-expanded={rightAcademicsDropdownOpen} aria-controls="right-academics-menu" className="nav-link hover:text-primary flex items-center font-medium tracking-wide">
                <motion.div whileHover={{
                scale: 1.2
              }} transition={{
                duration: 0.2
              }}>
                  <GraduationCap className="w-4 h-4 mr-2" />
                </motion.div>{`
                ${i18next.t("auto.academics_ip6mmr")}
                `}<ChevronDown className={`ml-1 transition-transform duration-300 ${rightAcademicsDropdownOpen ? 'rotate-180' : ''}`} size={14} />
              </button>

              <AnimatePresence>
                {rightAcademicsDropdownOpen && <motion.div id="right-academics-menu" role="menu" aria-label={i18next.t("auto.academics_ip6mmr")} initial={{
                opacity: 0,
                y: -8,
                scale: 0.98
              }} animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }} exit={{
                opacity: 0,
                y: -8,
                scale: 0.98
              }} transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
                staggerChildren: 0.05,
                delayChildren: 0.1
              }} className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[999] overflow-y-auto overflow-x-hidden" style={{
                width: 'min(420px, 80vw)',
                maxHeight: '70vh'
              }}>
                    {nepItems.map((item, index) => <motion.div key={`${item.to}-${index}`} initial={{
                  opacity: 0,
                  x: -6
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.2,
                  delay: index * 0.03,
                  ease: [0.4, 0, 0.2, 1]
                }}>
                        <Link to={item.to} role="menuitem" tabIndex={-1} className="group relative block px-5 py-3 text-xs uppercase hover:text-primary whitespace-normal border-b border-gray-100 last:border-0 transition-all duration-200 ease-out">
                          <motion.span className="relative z-10" whileHover={{
                      scale: 1.02,
                      transition: {
                        duration: 0.15,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }} whileTap={{
                      scale: 0.98
                    }}>
                            {item.label}
                          </motion.span>
                          <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" initial={false} whileHover={{
                      x: [0, 100, 0],
                      transition: {
                        duration: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2
                      }
                    }} />
                        </Link>
                      </motion.div>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            <Link to="/campus-life" className="nav-link hover:text-primary font-medium tracking-wide flex items-center">
              <motion.div whileHover={{
              scale: 1.2
            }} transition={{
              duration: 0.2
            }}>
                <Building className="w-4 h-4 mr-2" />
              </motion.div>{`
              ${i18next.t("auto.campus_life_mycba2")}
            `}</Link>
            <Link to="/contact" className="nav-link hover:text-primary font-medium tracking-wide flex items-center">
              <motion.div whileHover={{
              scale: 1.2
            }} transition={{
              duration: 0.2
            }}>
                <Phone className="w-4 h-4 mr-2" />
              </motion.div>{`
              ${i18next.t("auto.contact_1ofoso5")}
            `}</Link>
            <Link to="/nirf" className="nav-link hover:text-primary font-medium tracking-wide flex items-center">
              <motion.div whileHover={{
              scale: 1.2
            }} transition={{
              duration: 0.2
            }}>
                <TrendingUp className="w-4 h-4 mr-2" />
              </motion.div>{`
              ${i18next.t("auto.nirf_yjojti")}
            `}</Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button className="md:hidden mobile-toggle p-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary relative" onClick={() => setOpen(prev => !prev)} aria-label={i18next.t("auto.toggle_menu_x7mgf8")} aria-expanded={open} aria-controls="mobile-menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
              <path d={open ? "M3 3l18 18" : "M3 12h18"} />
              <path d={open ? "M3 21l18-18" : "M3 6h18"} />
              <path d={open ? "M3 12h18" : "M3 18h18"} opacity={open ? "0" : "1"} />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU BACKDROP */}
      <AnimatePresence>
        {open && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={closeMobileMenu} />}
      </AnimatePresence>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {open && <motion.div id="mobile-menu" role="dialog" aria-modal="true" initial={{
        x: '-100%',
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} exit={{
        x: '-100%',
        opacity: 0
      }} transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: {
          duration: 0.2
        }
      }} className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col shadow-2xl">
            {/* Top Section: Logo + College Name */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3 relative">
              <img src={r2Url('Magadh_Mahila_College.png')} alt={i18next.t("auto.magadh_mahila_college_logo_a2cjxf")} className="w-10 h-10 object-contain" loading="lazy" decoding="async" />
              <div>
                <h1 className="text-lg font-bold">{i18next.t("auto.magadh_mahila_college_t72y6g")}</h1>
                <p className="text-sm opacity-90">{i18next.t("auto.patna_university_1phuj3f")}</p>
              </div>

              {/* Close button (accessible) */}
              <button aria-label={i18next.t("auto.close_menu_1n2spnk")} onClick={closeMobileMenu} className="absolute right-3 top-3 p-2 rounded-md hover:bg-primary/10">
                <X size={20} />
              </button>
            </div>

            {/* Settings Section: Theme and Language Switchers */}
            <motion.div className="bg-white border-b border-gray-200 px-4 py-3" initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 0.1
        }}>
              <div className="flex items-center justify-between gap-4">
                {/* Language selector */}
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-sm font-medium text-gray-700">{t('nav.language')}</span>
                  <div className="flex items-center bg-gray-100 rounded-md p-0.5">
                    <button onClick={() => {
                  handleLanguageChange('en');
                }} className={`px-3 py-1 text-xs rounded-sm transition-colors ${i18n.language?.startsWith('en') ? 'bg-primary text-primary-foreground font-semibold' : 'text-gray-600 hover:bg-gray-200'}`} aria-pressed={i18n.language?.startsWith('en')}>
                      {t('common.english')}
                    </button>
                    <button onClick={() => {
                  handleLanguageChange('hi');
                }} className={`px-3 py-1 text-xs rounded-sm transition-colors ${i18n.language?.startsWith('hi') ? 'bg-primary text-primary-foreground font-semibold' : 'text-gray-600 hover:bg-gray-200'}`} aria-pressed={i18n.language?.startsWith('hi')}>
                      {t('common.hindi')}
                    </button>
                  </div>
                </div>

                {/* Theme selector */}
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-sm font-medium text-gray-700">{t('nav.theme')}</span>
                  <div className="flex items-center bg-gray-100 rounded-md p-0.5">
                    <button onClick={() => setTheme('blue')} className={`flex items-center px-3 py-1 text-xs rounded-sm transition-colors ${theme === 'blue' ? 'bg-primary text-primary-foreground font-semibold' : 'text-gray-600 hover:bg-gray-200'}`} aria-pressed={theme === 'blue'}>
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1.5"></span>
                      {t('nav.blue')}
                    </button>
                    <button onClick={() => setTheme('maroon')} className={`flex items-center px-3 py-1 text-xs rounded-sm transition-colors ${theme === 'maroon' ? 'bg-primary text-primary-foreground font-semibold' : 'text-gray-600 hover:bg-gray-200'}`} aria-pressed={theme === 'maroon'}>
                      <span className="inline-block w-2 h-2 bg-red-800 rounded-full mr-1.5"></span>
                      {t('nav.maroon')}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Middle Section: Menu Items */}
            <motion.div className="flex-1 overflow-y-auto px-4 py-4 space-y-2" initial="hidden" animate="visible" variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}>
              <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <Link to="/" className="block uppercase text-sm py-3 hover:text-primary font-medium transition-colors" onClick={closeMobileMenu}>{`
                  ${i18next.t("auto.home_yjtufe")}
                `}</Link>
              </motion.div>

              {/* About Accordion */}
              <motion.div className="border-b border-gray-200 pb-2" variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <button onClick={() => {
              setMobileAboutOpen(!mobileAboutOpen);
              setMobileAdmissionsOpen(false);
              setMobileAdminOpen(false);
              setMobileAcademicsOpen(false);
            }} className="flex items-center justify-between w-full uppercase text-sm font-bold text-primary py-3 hover:bg-gray-50 px-3 rounded transition-colors">
                  <div className="flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    <span>{i18next.t("auto.about_3ebm88")}</span>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} size={18} />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3
              }} className="overflow-hidden">
                      <div className="space-y-1 bg-gray-50 rounded-lg p-3 mt-2">
                        {aboutItems.map((item, idx) => <Link key={`${item.to}-${idx}`} to={item.to} onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">
                            {item.label}
                          </Link>)}
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>

              {/* AICTE Link */}
              <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <Link to="/aicte" onClick={closeMobileMenu} className="flex items-center gap-2 uppercase text-sm font-bold text-primary py-3 hover:bg-gray-50 px-3 rounded transition-colors">
                  <Shield className="w-5 h-5" />{`
                  ${i18next.t("auto.aicte_3f4u1r")}
                `}</Link>
              </motion.div>

              {/* Administration Accordion */}
              <motion.div className="border-b border-gray-200 pb-2" variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <button onClick={() => {
              setMobileAdminOpen(!mobileAdminOpen);
              setMobileAboutOpen(false);
              setMobileAdmissionsOpen(false);
              setMobileAcademicsOpen(false);
            }} className="flex items-center justify-between w-full uppercase text-sm font-bold text-primary py-3 hover:bg-gray-50 px-3 rounded transition-colors">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    <span>{i18next.t("auto.administration_1k4huqz")}</span>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 ${mobileAdminOpen ? 'rotate-180' : ''}`} size={18} />
                </button>
                <AnimatePresence>
                  {mobileAdminOpen && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3
              }} className="overflow-hidden">
                      <div className="space-y-1 bg-gray-50 rounded-lg p-3 mt-2">
                        {/* Cells Submenu */}
                        <div className="pl-2 border-b border-gray-100 pb-2 mb-2">
                          <button onClick={() => setMobileCellsOpen(!mobileCellsOpen)} className="flex items-center justify-between w-full uppercase text-xs font-semibold py-2 hover:text-primary transition-colors">
                            <span>{i18next.t("auto.cells_3iex8w")}</span>
                            <ChevronDown className={`transition-transform duration-300 ${mobileCellsOpen ? 'rotate-180' : ''}`} size={14} />
                          </button>
                          <AnimatePresence>
                            {mobileCellsOpen && <motion.div initial={{
                        height: 0,
                        opacity: 0
                      }} animate={{
                        height: 'auto',
                        opacity: 1
                      }} exit={{
                        height: 0,
                        opacity: 0
                      }} transition={{
                        duration: 0.2
                      }} className="overflow-hidden">
                                <div className="space-y-1 bg-white rounded p-2 ml-2 mt-1">
                                  <Link to="/administration/cells/2023-2024" onClick={closeMobileMenu} className="block uppercase text-xs py-1.5 hover:text-primary pl-4 transition-colors">{`
                                    ${i18next.t("auto.cells_2023_2024_1ekvj9g")}
                                  `}</Link>
                                  <Link to="/administration/cells/2024-2025" onClick={closeMobileMenu} className="block uppercase text-xs py-1.5 hover:text-primary pl-4 transition-colors">{`
                                    ${i18next.t("auto.cells_2024_2025_1fcd9pe")}
                                  `}</Link>
                                  <Link to="/administration/cells/2025-2026" onClick={closeMobileMenu} className="block uppercase text-xs py-1.5 hover:text-primary pl-4 transition-colors">{`
                                    ${i18next.t("auto.cells_2025_2026_1fy7qtc")}
                                  `}</Link>
                                </div>
                              </motion.div>}
                          </AnimatePresence>
                        </div>

                        <Link to="/anti-ragging" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.anti_ragging_committee_18blg3w")}</Link>
                        <Link to="/sexual-harassment" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.anti_sexual_harassment_committee_1zss24")}</Link>
                        <Link to="/grievance" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.grievance_cell_1xn5cat")}</Link>
                        <Link to="/administration/student-cabinet" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.student_cabinet_vb3cl6")}</Link>
                        <Link to="/administration/committees" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.committees_6ma377")}</Link>
                        <Link to="/administration/incubation-centre" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.incubation_centre_1ny2f40")}</Link>
                        <Link to="/administration/organogram-of-institution" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.organogram_of_institution_1osjh2z")}</Link>
                        <Link to="/administration/societies" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.societies_ew7ixp")}</Link>
                        <Link to="/administration/staff-council" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.staff_council_c3wocy")}</Link>
                        <Link to="/administration/centres-list-2020-21" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.centres_list_2020_21_g8k3ld")}</Link>
                        <Link to="/administration/staff-profile" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.staff_profile_819vpk")}</Link>
                        <Link to="/administration/teaching-staff-sanctioned-post" onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">{i18next.t("auto.teaching_staff_sanctioned_post_1ar0tsy")}</Link>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>

              {/* Admissions Accordion */}
              <motion.div className="border-b border-gray-200 pb-2" variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <button onClick={() => {
              setMobileAdmissionsOpen(!mobileAdmissionsOpen);
              setMobileAboutOpen(false);
              setMobileAdminOpen(false);
            }} className="flex items-center justify-between w-full uppercase text-sm font-bold text-primary py-3 hover:bg-gray-50 px-3 rounded transition-colors">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>{i18next.t("auto.admissions_1fe72rj")}</span>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 ${mobileAdmissionsOpen ? 'rotate-180' : ''}`} size={18} />
                </button>
                <AnimatePresence>
                  {mobileAdmissionsOpen && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3
              }} className="overflow-hidden">
                      <div className="space-y-1 bg-gray-50 rounded-lg p-3 mt-2">
                        {admissionsItems.map((item, idx) => <Link key={`${item.to}-${idx}`} to={item.to} onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">
                            {item.label}
                          </Link>)}
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>

              {/* ACADEMICS Accordion */}
              <motion.div className="border-b border-gray-200 pb-2" variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <button onClick={() => {
              setMobileAcademicsOpen(!mobileAcademicsOpen);
              setMobileAboutOpen(false);
              setMobileAdmissionsOpen(false);
              setMobileAdminOpen(false);
            }} className="flex items-center justify-between w-full uppercase text-sm font-bold text-primary py-3 hover:bg-gray-50 px-3 rounded transition-colors">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    <span>{i18next.t("auto.academics_ip6mmr")}</span>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 ${mobileAcademicsOpen ? 'rotate-180' : ''}`} size={18} />
                </button>
                <AnimatePresence>
                  {mobileAcademicsOpen && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3
              }} className="overflow-hidden">
                      <div className="space-y-1 bg-gray-50 rounded-lg p-3 mt-2">
                        {nepItems.map((item, idx) => <Link key={`${item.to}-${idx}`} to={item.to} onClick={closeMobileMenu} className="block uppercase text-xs py-2 hover:text-primary pl-4 transition-colors">
                            {item.label}
                          </Link>)}
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>

              {/* Alumni Link */}
              <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <Link to="/alumni" onClick={closeMobileMenu} className="block uppercase text-sm py-3 hover:text-primary font-medium transition-colors">{`
                  ${i18next.t("auto.alumni_1584sdz")}
                `}</Link>
              </motion.div>

              {/* IQAC Link */}
              <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <Link to="/iqac" onClick={closeMobileMenu} className="block uppercase text-sm py-3 hover:text-primary font-medium transition-colors">
                  {t('nav.iqac')}
                </Link>
              </motion.div>

              {/* Other Links */}
              <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <Link to="/campus-life" onClick={closeMobileMenu} className="block uppercase text-sm py-3 hover:text-primary font-medium transition-colors">{`
                  ${i18next.t("auto.campus_life_mycba2")}
                `}</Link>
              </motion.div>
              <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <Link to="/contact" onClick={closeMobileMenu} className="block uppercase text-sm py-3 hover:text-primary font-medium transition-colors">{`
                  ${i18next.t("auto.contact_1ofoso5")}
                `}</Link>
              </motion.div>

              <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <Link to="/departments" onClick={closeMobileMenu} className="block uppercase text-sm py-3 hover:text-primary font-medium transition-colors">{`
                  ${i18next.t("auto.departments_pn2w2a")}
                `}</Link>
              </motion.div>
              <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <Link to="/nirf" onClick={closeMobileMenu} className="block uppercase text-sm py-3 hover:text-primary font-medium transition-colors">{`
                  ${i18next.t("auto.nirf_yjojti")}
                `}</Link>
              </motion.div>
              <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -20
            },
            visible: {
              opacity: 1,
              x: 0
            }
          }} transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}>
                <Link to="/tenders" onClick={closeMobileMenu} className="block uppercase text-sm py-3 hover:text-primary font-medium transition-colors">{`
                  ${i18next.t("auto.tenders_1gv9o4a")}
                `}</Link>
              </motion.div>
            </motion.div>

            {/* Bottom Section: Quick Action Buttons */}
            <div className="border-t border-gray-200 p-4 space-y-3">

              <Link to="/contact" onClick={closeMobileMenu} className="block w-full bg-primary text-primary-foreground text-center py-3 px-4 rounded-lg font-semibold uppercase text-sm hover:bg-primary/90 transition-colors">{`
                ${i18next.t("auto.contact_us_14c3gdf")}
              `}</Link>
              <Link to="/campus-life" onClick={closeMobileMenu} className="block w-full bg-primary text-primary-foreground text-center py-3 px-4 rounded-lg font-semibold uppercase text-sm hover:bg-primary/90 transition-colors">{`
                ${i18next.t("auto.visit_campus_1ntbl1p")}
              `}</Link>
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* ========== SVG SHIELD LOGO ========== */}
      <Link to="/" aria-label={i18next.t("auto.magadh_mahila_college_home_a1mmo7")} className="logo-container hidden md:block absolute left-1/2 -translate-x-1/2 -ml-2 top-0 z-40 pointer-events-none">
        <div className="relative w-52 md:w-72 lg:w-88 xl:w-96 max-w-[500px]">
          <svg viewBox="0 0 400 140" className="w-full h-auto drop-shadow-lg max-w-[400px]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{
                stopColor: 'white',
                stopOpacity: 1
              }} />
                <stop offset="100%" style={{
                stopColor: '#f9fafb',
                stopOpacity: 1
              }} />
              </linearGradient>
            </defs>
            <path d="M0 0 H400 V70 C300 140 100 140 0 70 Z" fill="url(#shieldGradient)" />
            <path d="M0 0 H400 V70 C300 140 100 140 0 70 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 pt-0">
            <img src={r2Url('Magadh_Mahila_College.png')} alt={i18next.t("auto.magadh_mahila_college_logo_a2cjxf")} className="w-8 h-8 md:w-10 h-10 lg:w-12 h-12 object-contain transition-transform duration-300 hover:scale-110" />
            <div className="text-left leading-tight">
              <h1 className="font-serif font-bold text-primary">
                <span className="block text-xs md:text-sm lg:text-base font-semibold text-primary">
                  {tHi('hero.title')}
                </span>
                <span className="block text-xs md:text-sm lg:text-base font-semibold text-primary">
                  {tEn('hero.title')}
                </span>
              </h1>
              <p className="text-xs text-gray-600 font-medium mt-0.5">{i18next.t("auto.patna_university_1phuj3f")}</p>
            </div>
          </div>
        </div>
      </Link>

    </motion.header>;
};
export default Navbar;
