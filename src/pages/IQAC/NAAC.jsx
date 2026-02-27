import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, FileText, Camera, Video, RotateCcw, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const NAAC = () => {
  useTranslation();
  const sections = [{
    title: i18next.t("auto.naac_certificate_kd4l0d"),
    description: i18next.t("auto.official_naac_accreditation_certificates_and_grades_1moas1c"),
    icon: Award,
    to: '/iqac/naac-certificate',
    color: 'text-blue-600'
  }, {
    title: i18next.t("auto.self_study_report_dc87zs"),
    description: i18next.t("auto.comprehensive_self_evaluation_document_for_naac_assessment_n2go1t"),
    icon: FileText,
    to: '/iqac/self-study-report',
    color: 'text-green-600'
  }, {
    title: i18next.t("auto.peer_team_visit_photos_1ejavx0"),
    description: i18next.t("auto.photographic_documentation_of_naac_peer_team_visits_orzs4"),
    icon: Camera,
    to: '/iqac/peer-team-visit-photos',
    color: 'text-purple-600'
  }, {
    title: i18next.t("auto.video_recording_of_naac_peer_team_visit_mnrpcj"),
    description: i18next.t("auto.official_video_documentation_of_the_naac_assessment_e3y9z1"),
    icon: Video,
    to: '/iqac/video-recording-naac-peer-team-visit',
    color: 'text-red-600'
  }, {
    title: i18next.t("auto.revisit_of_naac_peer_team_1qj84l4"),
    description: i18next.t("auto.follow_up_assessment_and_revisit_by_the_1aonx13"),
    icon: RotateCcw,
    to: '/iqac/revisit-naac-peer-team',
    color: 'text-orange-600'
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.iqac_naac_accreditation_quality_magadh_mahila_college_1e5l36f")}</title>
        <meta name="description" content="Explore NAAC accreditation details, assessment criteria, and quality assurance processes at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
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
                <span className="text-primary">{i18next.t("auto.naac_accreditation_1rd5nbu")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.national_assessment_and_accreditation_council_evaluation_framework_1e349a5")}
              `}</p>
            </motion.div>

            {/* Sections Grid */}
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
          }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {sections.map((section, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="bg-white rounded-2xl shadow-lg border border-border p-6 hover:shadow-xl transition-shadow group">
                  <Link to={section.to} className="block">
                    <div className="flex items-center gap-4 mb-4">
                      <section.icon className={`w-8 h-8 ${section.color}`} />
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-medium">
                      <ExternalLink className="w-4 h-4" />{`
                      ${i18next.t("auto.explore_8ktigs")}
                    `}</div>
                  </Link>
                </motion.div>)}
            </motion.div>

          </div>
        </section>
      </div>
    </>;
};
export default NAAC;
