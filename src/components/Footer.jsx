import i18next from "i18next";
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Send, Info, FileText, ExternalLink, Download, Globe, GraduationCap, Users, Home } from 'lucide-react';
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
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};
/* --------------------------------------------------- */

const Footer = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const campusMapUrl = 'https://www.google.com/maps/place/Magadh+Mahila+College/@25.6211654,85.1444519,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed5856e3c09cc7:0xc8a6169d5cd95e88!8m2!3d25.6211654!4d85.1444519!16s%2Fg%2F11c4bhhwgm?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D';
  const campusMapEmbedUrl = 'https://www.google.com/maps?q=Magadh+Mahila+College,+Patna&z=17&output=embed';
  const tEn = i18n.getFixedT('en');
  const tHi = i18n.getFixedT('hi');
  const englishFooterYear = tEn('footer.copyright').match(/\b20\d{2}\b/)?.[0] || String(new Date().getFullYear());
  const localizedCopyright = t('footer.copyright').replace(/\b20\d{2}\b/, englishFooterYear);
  const quickLinks = [{
    path: '/about',
    label: t('footer.quickLinksItems.about')
  }, {
    path: '/academics',
    label: t('footer.quickLinksItems.academics')
  }, {
    path: '/admissions/general-information',
    label: t('footer.quickLinksItems.admissions')
  }, {
    path: '/campus-life',
    label: t('footer.quickLinksItems.campusLife')
  }, {
    path: '/contact',
    label: t('footer.quickLinksItems.contact')
  }];
  const importantLinks = [{
    path: '/tenders',
    label: t('footer.importantLinksItems.tenders')
  }, {
    path: '/notices',
    label: t('footer.importantLinksItems.notices')
  }, {
    path: '/iqac/aqar',
    label: t('footer.importantLinksItems.aqar')
  }, {
    path: '/annual-reports',
    label: t('footer.importantLinksItems.annualReports')
  }, {
    path: '/media-gallery',
    label: t('footer.importantLinksItems.mediaGallery')
  }, {
    path: '/privacy-policy',
    label: t('footer.importantLinksItems.privacyPolicy')
  }, {
    path: '/terms',
    label: t('footer.importantLinksItems.terms')
  }, {
    path: '/disclaimer',
    label: t('footer.importantLinksItems.disclaimer')
  }, {
    path: '/rti',
    label: t('footer.importantLinksItems.rti')
  }, {
    path: '/rti-manual',
    label: t('footer.importantLinksItems.rtiManual')
  }, {
    path: '/fee-refund-policy',
    label: t('footer.importantLinksItems.feeRefundPolicy')
  }, {
    path: '/online-payment-policy',
    label: t('footer.importantLinksItems.onlinePaymentPolicy')
  }, {
    path: '/transaction-fee-clause',
    label: t('footer.importantLinksItems.transactionFeeClause')
  }];
  const quickLinkIcons = {
    '/about': Info,
    '/academics': GraduationCap,
    '/admissions/general-information': Users,
    '/campus-life': Home,
    '/contact': Phone
  };
  const externalLinks = [{
    href: 'https://naac.gov.in/',
    label: i18next.t("auto.national_assessment_and_accreditation_council_naac_dmto7d")
  }, {
    href: 'https://www.ugc.gov.in/',
    label: i18next.t("auto.university_grants_commission_ugc_mllpj5")
  }, {
    href: 'https://nkn.gov.in/',
    label: i18next.t("auto.national_knowledge_network_17ooqzb")
  }, {
    href: 'https://nad.gov.in/',
    label: i18next.t("auto.national_academic_depository_nad_180764g")
  }, {
    href: 'https://www.education.gov.in/',
    label: i18next.t("auto.ministry_of_human_resource_development_mhrd_17uqfvb")
  }, {
    href: 'https://scholarships.gov.in/',
    label: i18next.t("auto.national_scholarship_portal_7s91yd")
  }, {
    href: 'https://aishe.gov.in/',
    label: i18next.t("auto.all_india_survey_on_higher_education_aishe_1mvlexg")
  }, {
    href: 'https://www.aarogyasetu.gov.in/',
    label: i18next.t("auto.arogya_setu_1ge1er5")
  }, {
    href: 'https://www.mygov.in/campaigns/bharat-padhe-online-campaign/',
    label: i18next.t("auto.bharat_padhe_online_campaign_1l2eq9s")
  }, {
    href: 'https://pup.samarth.ac.in/index.php/site/login',
    label: i18next.t("auto.pu_samarth_194spyo")
  }];
  const toTelHref = number => `tel:${String(number).replace(/[^\d+]/g, '')}`;
  const toMailHref = email => `mailto:${String(email).trim()}`;
  const hasValue = (value, key) => {
    const text = String(value || '').trim();
    return text.length > 0 && text !== key;
  };
  const contactDetails = [{
    key: 'footer.contactDetails.address',
    icon: MapPin,
    value: t('footer.contactDetails.address'),
    href: campusMapUrl,
    external: true
  }, {
    key: 'footer.contactDetails.phone',
    icon: Phone,
    value: t('footer.contactDetails.phone'),
    href: toTelHref(t('footer.contactDetails.phone'))
  }, {
    key: 'footer.contactDetails.mobile',
    icon: Phone,
    value: t('footer.contactDetails.mobile'),
    href: toTelHref(t('footer.contactDetails.mobile'))
  }, {
    key: 'footer.contactDetails.email',
    icon: Mail,
    value: t('footer.contactDetails.email'),
    href: toMailHref(t('footer.contactDetails.email'))
  }, {
    key: 'footer.contactDetails.map',
    icon: MapPin,
    value: t('footer.contactDetails.map'),
    href: campusMapUrl,
    external: true
  }].filter(item => hasValue(item.value, item.key));
  const socialLinks = [{
    icon: Facebook,
    href: 'https://facebook.com/magadhmahila',
    label: i18next.t("auto.facebook_1s8mezx")
  }, {
    icon: Instagram,
    href: 'https://www.instagram.com/magadh.mahila.college/?hl=en',
    label: i18next.t("auto.instagram_1sbvenx")
  }, {
    icon: Youtube,
    href: 'https://youtube.com/@magadh_mahila_college?si=yrRaQ5mkbjScDxMk',
    label: i18next.t("auto.youtube_dbvxsw")
  }];
  const sectionCardClass = 'rounded-xl border border-white/15 bg-white/5 p-4 md:p-5 shadow-sm h-fit';
  const sectionTitleClass = 'text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2';
  const linkClass = 'flex items-start gap-2 text-sm text-primary-foreground/90 hover:text-highlight transition-colors';
  return <footer className="relative bg-navbar text-primary-foreground overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-30 pointer-events-none" />

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
      once: true
    }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-5 items-start">
          <motion.div variants={itemUp} className={`md:col-span-2 xl:col-span-3 ${sectionCardClass}`}>
            <Link to="/" className="inline-flex items-center gap-3 mb-3">
              <motion.img src={r2Url('Magadh_Mahila_College.png')} alt={i18next.t("auto.magadh_mahila_college_logo_a2cjxf")} className="w-14 h-14 rounded-lg bg-white p-1 shadow-sm" whileHover={{
              scale: 1.05
            }} />
              <div className="text-left leading-tight">
                <h1 className="font-serif font-bold text-white">
                  <span className="block text-base">{tHi('hero.title')}</span>
                  <span className="block text-sm">{tEn('hero.title')}</span>
                </h1>
                <p className="text-xs text-primary-foreground/70 mt-1">{i18next.t("auto.patna_university_1phuj3f")}</p>
              </div>
            </Link>

            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          <motion.div variants={itemUp} className={`xl:col-span-2 ${sectionCardClass}`}>
            <h3 className={sectionTitleClass}>
              <Info className="w-4 h-4" />
              {t('footer.quickLinks')}
            </h3>
            <nav>
              <ul className="space-y-1.5">
                {quickLinks.map(link => {
                const Icon = quickLinkIcons[link.path] || Info;
                return <li key={link.path}>
                      <Link to={link.path} className={linkClass}>
                        <Icon className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{link.label}</span>
                      </Link>
                    </li>;
              })}
              </ul>
            </nav>
          </motion.div>

          <motion.div variants={itemUp} className={`xl:col-span-2 ${sectionCardClass}`}>
            <h3 className={sectionTitleClass}>
              <FileText className="w-4 h-4" />
              {t('footer.importantLinks')}
            </h3>
            <nav>
              <ul className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                {importantLinks.map(link => <li key={link.path}>
                    <Link to={link.path} className="flex items-start gap-2 text-xs text-primary-foreground/90 hover:text-highlight transition-colors">
                      <Download className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>)}
              </ul>
            </nav>
          </motion.div>

          <motion.div variants={itemUp} className={`xl:col-span-2 ${sectionCardClass}`}>
            <h3 className={sectionTitleClass}>
              <Globe className="w-4 h-4" />
              {t('footer.externalLinks')}
            </h3>
            <nav>
              <ul className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                {externalLinks.map(link => <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-xs text-primary-foreground/90 hover:text-highlight transition-colors">
                      <ExternalLink className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{link.label}</span>
                    </a>
                  </li>)}
              </ul>
            </nav>
          </motion.div>

          <motion.div variants={itemUp} className={`xl:col-span-3 ${sectionCardClass}`}>
            <h3 className={sectionTitleClass}>
              <Phone className="w-4 h-4" />
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {contactDetails.map((item, index) => {
              const Icon = item.icon;
              return <li key={`${item.value}-${index}`} className="flex items-start gap-2.5 text-primary-foreground/90">
                    <Icon className="w-4 h-4 mt-1 shrink-0 text-highlight" />
                    {item.href ? <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="hover:text-highlight transition-colors break-words">
                        {item.value}
                      </a> : <span className="break-words">{item.value}</span>}
                  </li>;
            })}
            </ul>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/15 bg-white/5">
              <div className="border-b border-white/10 px-4 py-3">
                <h4 className="text-sm font-semibold text-white">{t('footer.mapTitle')}</h4>
              </div>
              <iframe
                src={campusMapEmbedUrl}
                title={t('footer.mapTitle')}
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>

        {/* SOCIAL ICONS */}
        <motion.div variants={itemUp} className="mt-8 flex flex-wrap justify-center gap-3">
          {socialLinks.map(social => <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{
          scale: 1.2
        }} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight transition" aria-label={social.label}>
              <social.icon className="w-4 h-4" />
            </motion.a>)}
        </motion.div>

        {/* DIVIDER */}
        <div className="mt-8 h-px bg-white/10" />

        {/* COPYRIGHT */}
        <div className="mt-5 text-center text-sm space-y-1.5">
          <p>{localizedCopyright}</p>

          <p className="text-xs text-muted-foreground">
            {t('footer.managedBy')}{' '}
            <a href="https://ards.in/" target="_blank" rel="noopener noreferrer" className="font-semibold text-highlight hover:underline inline-flex items-center gap-1">
              <Globe className="w-3 h-3" />
              {t('footer.companyName')}
            </a>
          </p>
        </div>

      </motion.div>
    </footer>;
};
export default Footer;
