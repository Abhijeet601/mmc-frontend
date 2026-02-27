import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Users, Award, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const RebuildIQAC = () => {
  const {
    t
  } = useTranslation();
  const coreValues = [{
    title: i18next.t("auto.quality_education_1wprxk2"),
    description: i18next.t("auto.ensuring_excellence_in_teaching_and_learning_processes_r1fynm"),
    icon: Award
  }, {
    title: i18next.t("auto.continuous_improvement_1ngvl1c"),
    description: i18next.t("auto.regular_assessment_and_enhancement_of_academic_standards_o6h2ji"),
    icon: CheckCircle
  }, {
    title: i18next.t("auto.stakeholder_engagement_1wbjdhk"),
    description: i18next.t("auto.active_participation_from_students_faculty_and_alumni_k8e7xx"),
    icon: Users
  }, {
    title: i18next.t("auto.documentation_1m8aczb"),
    description: i18next.t("auto.systematic_record_keeping_of_all_quality_initiatives_el76lq"),
    icon: FileText
  }];
  const keyAreas = ['Academic Audit & Evaluation', 'Curriculum Development', 'Faculty Development Programs', 'Student Support Services', 'Research & Innovation', 'Infrastructure Development', 'Feedback Mechanism', 'NAAC Accreditation Process'];
  const upcomingActivities = [{
    month: 'January',
    activity: 'Annual Academic Audit'
  }, {
    month: 'February',
    activity: 'Faculty Training Workshop'
  }, {
    month: 'March',
    activity: 'Student Satisfaction Survey'
  }, {
    month: 'April',
    activity: 'AQAR Preparation'
  }, {
    month: 'May',
    activity: 'NAAC SSR Review'
  }, {
    month: 'June',
    activity: 'Strategic Planning Meeting'
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.rebuild_iqac_magadh_mahila_college_internal_quality_1af1qe9")}</title>
        <meta name="description" content="Rebuilding the Internal Quality Assurance Cell (IQAC) at Magadh Mahila College for enhanced quality education and continuous improvement." />
      </Helmet>

      <div className="pt-0">
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
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
                <span className="text-primary">{`
                  ${i18next.t("auto.rebuild_iqac_pvnpni")}
                `}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.reinforcing_our_commitment_to_quality_excellence_through_1yf0lks")}
              `}</p>
            </motion.div>

            {/* Introduction */}
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
              <div className="bg-gradient-to-r from-primary/10 to-highlight/10 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">{i18next.t("auto.our_quality_journey_iglhgw")}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">{`
                      ${i18next.t("auto.the_internal_quality_assurance_cell_iqac_at_1vhplo")}
                    `}</p>
                    <p className="text-muted-foreground text-lg leading-relaxed">{`
                      ${i18next.t("auto.our_renewed_focus_emphasizes_evidence_based_decision_1tdu70a")}
                    `}</p>
                  </div>
                  <div className="flex justify-center">
                    <Shield className="w-48 h-48 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Values */}
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
                <span className="text-primary">{i18next.t("auto.core_values_1yip3vq")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((value, index) => <motion.div key={index} initial={{
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
              }} whileHover={{
                y: -10,
                scale: 1.02
              }} className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-border text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Key Focus Areas */}
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
                <span className="text-primary">{i18next.t("auto.key_focus_areas_8xla7u")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {keyAreas.map((area, index) => <motion.div key={index} initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.05
              }} className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-center hover:bg-primary/10 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="font-medium text-foreground">{area}</span>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Upcoming Activities */}
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
                <span className="text-primary">{i18next.t("auto.upcoming_activities_gyl0x6")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingActivities.map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="p-6 rounded-2xl bg-white shadow-lg border border-border">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="w-6 h-6 text-primary" />
                      <span className="text-lg font-bold text-primary">{item.month}</span>
                    </div>
                    <p className="text-foreground font-medium">{item.activity}</p>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Contact Section */}
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
          }} className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{i18next.t("auto.join_our_quality_initiative_at511a")}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">{`
                ${i18next.t("auto.we_welcome_suggestions_and_feedback_from_all_1hdnjwg")}
              `}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">{i18next.t("auto.iqac_coordinator_214z39")}</div>
                  <div className="text-white/80">{i18next.t("auto.dr_nagendra_prasad_verma_nwre9")}</div>
                  <div className="text-white/80">{i18next.t("auto.iqac_magadhmahilacollege_org_zdse6e")}</div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
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
          }} className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{i18next.t("auto.b_3hn8s")}</div>
                <p className="text-muted-foreground">{i18next.t("auto.naac_grade_coxy59")}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">150+</div>
                <p className="text-muted-foreground">{i18next.t("auto.faculty_members_1pjb3g6")}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">13</div>
                <p className="text-muted-foreground">{i18next.t("auto.quality_metrics_r2w1dr")}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">5+</div>
                <p className="text-muted-foreground">{i18next.t("auto.aqar_submitted_cl1r47")}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default RebuildIQAC;
