import i18next from "i18next";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Send, Star, User, Mail, Heart, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const ParentsFeedbackForm = () => {
  const {
    t
  } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentName: '',
    relationship: '',
    communication: 5,
    facilities: 5,
    safety: 5,
    academicSupport: 5,
    extracurricular: 5,
    valueForMoney: 5,
    overallSatisfaction: 5,
    suggestions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleRatingChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        studentName: '',
        relationship: '',
        communication: 5,
        facilities: 5,
        safety: 5,
        academicSupport: 5,
        extracurricular: 5,
        valueForMoney: 5,
        overallSatisfaction: 5,
        suggestions: ''
      });
    }, 3000);
  };
  const RatingStars = ({
    field,
    value,
    onChange
  }) => <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map(star => <button key={star} type="button" onClick={() => onChange(field, star)} className={`w-8 h-8 ${star <= value ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}>
          <Star className="w-full h-full fill-current" />
        </button>)}
    </div>;
  return <>
      <Helmet>
        <title>{t('parentsFeedback.title', 'Parents Feedback Form - IQAC | Magadh Mahila College')}</title>
        <meta name="description" content={t('parentsFeedback.metaDescription', 'Share your valuable feedback as a parent of a student at Magadh Mahila College. Help us improve our services and support.')} />
      </Helmet>

      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
              <span className="text-primary">{i18next.t("auto.parents_feedback_form_8wnoet")}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{`
              ${i18next.t("auto.your_perspective_as_a_parent_is_invaluable_1kffjlg")}
            `}</p>
          </motion.div>

          {submitted ? <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">{i18next.t("auto.thank_you_1f29jtr")}</h2>
              <p className="text-muted-foreground">{`
                ${i18next.t("auto.your_feedback_has_been_submitted_successfully_we_16cngv2")}
              `}</p>
            </motion.div> : <motion.form initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-primary" />{`
                  ${i18next.t("auto.personal_information_1pac8mp")}
                `}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{`
                      ${i18next.t("auto.parent_guardian_name_1abjqt4")}
                    `}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder={i18next.t("auto.enter_your_full_name_1mqiwjs")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{`
                      ${i18next.t("auto.email_address_d03ywl")}
                    `}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder={i18next.t("auto.enter_your_email_1qe62c0")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{`
                      ${i18next.t("auto.student_name_wi6j5t")}
                    `}</label>
                    <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder={i18next.t("auto.enter_your_child_s_name_uc4rfp")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{`
                      ${i18next.t("auto.relationship_to_student_zujf3t")}
                    `}</label>
                    <select name="relationship" value={formData.relationship} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                      <option value="">{i18next.t("auto.select_relationship_hh2dbd")}</option>
                      <option value="Father">{i18next.t("auto.father_15mahvt")}</option>
                      <option value="Mother">{i18next.t("auto.mother_17le3sc")}</option>
                      <option value="Guardian">{i18next.t("auto.guardian_1c2gau")}</option>
                      <option value="Other">{i18next.t("auto.other_3lrcg1")}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Ratings */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-primary" />{`
                  ${i18next.t("auto.rate_your_experience_1_5_stars_1w5yax3")}
                `}</h2>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.communication_with_parents_labpd4")}</span>
                    <RatingStars field="communication" value={formData.communication} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.campus_facilities_yxlg9r")}</span>
                    <RatingStars field="facilities" value={formData.facilities} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.student_safety_security_tp6o8w")}</span>
                    <RatingStars field="safety" value={formData.safety} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.academic_support_services_1j4wp5t")}</span>
                    <RatingStars field="academicSupport" value={formData.academicSupport} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.extracurricular_activities_afhxxe")}</span>
                    <RatingStars field="extracurricular" value={formData.extracurricular} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.value_for_money_1mkbk2t")}</span>
                    <RatingStars field="valueForMoney" value={formData.valueForMoney} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.overall_satisfaction_kluwvi")}</span>
                    <RatingStars field="overallSatisfaction" value={formData.overallSatisfaction} onChange={handleRatingChange} />
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-primary" />{`
                  ${i18next.t("auto.additional_comments_suggestions_1538mv9")}
                `}</h2>
                <textarea name="suggestions" value={formData.suggestions} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical" placeholder={i18next.t("auto.please_share_any_additional_feedback_suggestions_for_1oef3sd")} />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" disabled={isSubmitting} className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>{`
                      ${i18next.t("auto.submitting_19ychwr")}
                    `}</> : <>
                      <Send className="w-5 h-5 mr-2" />{`
                      ${i18next.t("auto.submit_feedback_1mxhn88")}
                    `}</>}
                </button>
              </div>
            </motion.form>}
        </div>
      </div>
    </>;
};
export default ParentsFeedbackForm;
