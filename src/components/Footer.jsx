import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Send,
  Info,
  FileText,
  ExternalLink,
  Download,
  Globe,
  GraduationCap,
  Users,
  Home
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';

/* ---------------- ANIMATION VARIANTS ---------------- */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};
/* --------------------------------------------------- */

const Footer = () => {
  const { t, i18n } = useTranslation();
  const tEn = i18n.getFixedT('en');
  const tHi = i18n.getFixedT('hi');

  const quickLinks = [
    { path: '/about', label: t('footer.quickLinksItems.about') },
    { path: '/academics', label: t('footer.quickLinksItems.academics') },
    { path: '/admissions', label: t('footer.quickLinksItems.admissions') },
    { path: '/campus-life', label: t('footer.quickLinksItems.campusLife') },
    { path: '/contact', label: t('footer.quickLinksItems.contact') }
  ];

  const importantLinks = [
    { path: '/tenders', label: t('footer.importantLinksItems.tenders') },
    { path: '/notices', label: t('footer.importantLinksItems.notices') },
    { path: '/aqar', label: t('footer.importantLinksItems.aqar') },
    { path: '/annual-reports', label: t('footer.importantLinksItems.annualReports') },
    { path: '/media-gallery', label: t('footer.importantLinksItems.mediaGallery') },
    { path: '/privacy-policy', label: t('footer.importantLinksItems.privacyPolicy') },
    { path: '/terms', label: t('footer.importantLinksItems.terms') },
    { path: '/disclaimer', label: t('footer.importantLinksItems.disclaimer') },
    { path: '/rti', label: t('footer.importantLinksItems.rti') },
    { path: '/rti-manual', label: t('footer.importantLinksItems.rtiManual') },
    { path: '/fee-refund-policy', label: t('footer.importantLinksItems.feeRefundPolicy') },
    { path: '/online-payment-policy', label: t('footer.importantLinksItems.onlinePaymentPolicy') },
    { path: '/transaction-fee-clause', label: t('footer.importantLinksItems.transactionFeeClause') }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Send, href: '#', label: 'Telegram' }
  ];

  return (
    <footer className="relative bg-navbar text-primary-foreground overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-30 pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + DESCRIPTION */}
          <motion.div variants={itemUp} className="text-center">

            <Link to="/" className="inline-block">
              {/* LOGO CONTAINER MOVED UP */}
              <div className="relative max-w-[400px] mx-auto -mt-6">

                {/* BIGGER SVG SHAPE TOUCHING TOP */}
                <svg viewBox="0 0 400 160" className="w-full">
                  <path
                    d="M0 0 H400 V80 C300 160 100 160 0 80 Z"
                    fill="white"
                  />
                  <path
                    d="M0 0 H400 V80 C300 160 100 160 0 80 Z"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                  />
                </svg>

                {/* LOGO CONTENT */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
                  <motion.img
                    src={r2Url('Magadh_Mahila_College.png')}
                    alt="Magadh Mahila College Logo"
                    className="w-14 h-14"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />

                  <div className="text-left leading-tight">
                    <h1 className="font-serif font-bold text-primary">
                      <span className="block text-base">{tHi('hero.title')}</span>
                      <span className="block text-sm">{tEn('hero.title')}</span>
                    </h1>
                    <p className="text-xs text-gray-500">
                      Patna University
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <p className="mt-4 text-muted-foreground text-sm">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={itemUp}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              {t('footer.quickLinks')}
            </h3>
            <nav className="space-y-2">
              {quickLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm hover:text-highlight transition flex items-center gap-2"
                >
                  {link.path === '/about' && <Info className="w-4 h-4" />}
                  {link.path === '/academics' && <GraduationCap className="w-4 h-4" />}
                  {link.path === '/admissions' && <Users className="w-4 h-4" />}
                  {link.path === '/campus-life' && <Home className="w-4 h-4" />}
                  {link.path === '/contact' && <Phone className="w-4 h-4" />}
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* IMPORTANT LINKS */}
          <motion.div variants={itemUp}>
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              {t('footer.importantLinks')}
            </h3>
            <nav className="space-y-2">
              {importantLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-xs hover:text-highlight transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* EXTERNAL IMPORTANT LINKS */}
          <motion.div variants={itemUp}>
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              External Important Links
            </h3>
            <nav className="space-y-2">
              <a
                href="https://naac.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                National Assessment and Accreditation Council (NAAC)
              </a>
              <a
                href="https://www.ugc.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                University Grants Commission (UGC)
              </a>
              <a
                href="https://nkn.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                National Knowledge Network
              </a>
              <a
                href="https://nad.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                National Academic Depository (NAD)
              </a>
              <a
                href="https://www.education.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Ministry of Human Resource Development (MHRD)
              </a>
              <a
                href="https://scholarships.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                National Scholarship Portal
              </a>
              <a
                href="https://aishe.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                All India Survey on Higher Education (AISHE)
              </a>
              <a
                href="https://www.aarogyasetu.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Arogya Setu
              </a>
              <a
                href="https://www.mygov.in/campaigns/bharat-padhe-online-campaign/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Bharat Padhe Online campaign
              </a>
              <a
                href="https://pup.samarth.ac.in/index.php/site/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs hover:text-highlight transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                PU SAMARTH
              </a>
            </nav>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={itemUp}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {t('footer.contactInfo')}
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-highlight" />
                {t('footer.contactDetails.address')}
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-highlight" />
                {t('footer.contactDetails.phone')}
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-highlight" />
                {t('footer.contactDetails.mobile')}
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-highlight" />
                {t('footer.contactDetails.fax')}
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-highlight" />
                {t('footer.contactDetails.email')}
              </div>
            </div>
          </motion.div>
        </div>

        {/* SOCIAL ICONS */}
        <motion.div variants={itemUp} className="mt-10 flex justify-center gap-4">
          {socialLinks.map(social => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight transition"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* DIVIDER */}
        <div className="mt-12 h-px bg-white/10" />

        {/* COPYRIGHT */}
        <div className="mt-6 text-center text-sm space-y-2">
          <p>{t('footer.copyright')}</p>

          <p className="text-xs text-muted-foreground">
            Managed by{' '}
            <a
              href="https://ards.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-highlight hover:underline inline-flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              Alpenrose Digital Solutions
            </a>
          </p>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
