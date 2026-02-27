import i18next from "i18next";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Users, Heart, GraduationCap, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const IQACFeedback = () => {
  const {
    t
  } = useTranslation();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const feedbackForms = [{
    label: i18next.t("auto.student_feedback_form_1ge8opf"),
    to: '/iqac/feedback/student',
    icon: Users,
    description: i18next.t("auto.share_your_feedback_as_a_current_student_1j8d8rn")
  }, {
    label: i18next.t("auto.parents_feedback_form_8wnoet"),
    to: '/iqac/feedback/parents',
    icon: Heart,
    description: i18next.t("auto.provide_feedback_as_a_parent_or_guardian_fpug6m")
  }, {
    label: i18next.t("auto.teachers_feedback_form_1c8f71h"),
    to: '/iqac/feedback/teachers',
    icon: GraduationCap,
    description: i18next.t("auto.share_insights_as_faculty_member_1nrqq9b")
  }, {
    label: i18next.t("auto.alumni_feedback_form_1vxs1ag"),
    to: '/iqac/feedback/alumni',
    icon: Users,
    description: i18next.t("auto.contribute_as_a_former_student_18wisz9")
  }, {
    label: i18next.t("auto.industry_feedback_form_16ray68"),
    to: '/iqac/feedback/industry',
    icon: Building,
    description: i18next.t("auto.provide_industry_perspective_kbut0g")
  }];
  return <>
      <Helmet>
        <title>{t('feedback.title', 'Feedback Forms - IQAC | Magadh Mahila College')}</title>
        <meta name="description" content={t('feedback.metaDescription', 'Access various feedback forms to help us improve the quality of education and services at Magadh Mahila College.')} />
      </Helmet>

      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">{i18next.t("auto.feedback_forms_srf689")}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{`
              ${i18next.t("auto.your_feedback_is_invaluable_in_helping_us_129bh9e")}
            `}</p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedbackForms.map((form, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            y: -5,
            scale: 1.02
          }} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden">
                <Link to={form.to} className="block p-6 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <form.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {form.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {form.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium">
                    <span>{i18next.t("auto.fill_form_1hg6870")}</span>
                    <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
                  </div>
                </Link>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </>;
};
export default IQACFeedback;
