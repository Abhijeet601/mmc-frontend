import i18next from "i18next";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Send, Star, Building, Mail, Users, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const IndustryFeedbackForm = () => {
  const {
    t
  } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    designation: '',
    industry: '',
    collaboration: 5,
    graduateQuality: 5,
    skillAlignment: 5,
    internshipPrograms: 5,
    industryReadiness: 5,
    communication: 5,
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
        organization: '',
        designation: '',
        industry: '',
        collaboration: 5,
        graduateQuality: 5,
        skillAlignment: 5,
        internshipPrograms: 5,
        industryReadiness: 5,
        communication: 5,
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
        <title>{t('industryFeedback.title', 'Industry Feedback Form - IQAC | Magadh Mahila College')}</title>
        <meta name="description" content={t('industryFeedback.metaDescription', 'Share your valuable feedback as an industry partner. Help us align our programs with industry needs and improve graduate employability.')} />
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
              <span className="text-primary">{i18next.t("auto.industry_feedback_form_16ray68")}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{`
              ${i18next.t("auto.your_insights_as_an_industry_partner_are_h8wju")}
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
                  <Building className="w-6 h-6 mr-3 text-primary" />{`
                  ${i18next.t("auto.organization_information_1b7arrm")}
                `}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{`
                      ${i18next.t("auto.contact_person_name_vr925")}
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
                      ${i18next.t("auto.organization_name_ato8oj")}
                    `}</label>
                    <input type="text" name="organization" value={formData.organization} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder={i18next.t("auto.enter_organization_name_1nioltd")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{`
                      ${i18next.t("auto.designation_1u42w1s")}
                    `}</label>
                    <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder={i18next.t("auto.e_g_hr_manager_ceo_mbjstj")} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">{`
                      ${i18next.t("auto.industry_sector_rskazq")}
                    `}</label>
                    <select name="industry" value={formData.industry} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                      <option value="">{i18next.t("auto.select_industry_1lp7cbb")}</option>
                      <option value="Information Technology">{i18next.t("auto.information_technology_yuyii7")}</option>
                      <option value="Healthcare">{i18next.t("auto.healthcare_1guwnzg")}</option>
                      <option value="Education">{i18next.t("auto.education_13hn5nz")}</option>
                      <option value="Finance">{i18next.t("auto.finance_sl8vnx")}</option>
                      <option value="Manufacturing">{i18next.t("auto.manufacturing_1r6fmf9")}</option>
                      <option value="Retail">{i18next.t("auto.retail_1igsawy")}</option>
                      <option value="Consulting">{i18next.t("auto.consulting_z3up89")}</option>
                      <option value="Government">{i18next.t("auto.government_1a4pxww")}</option>
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
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.industry_academia_collaboration_1nm0uwq")}</span>
                    <RatingStars field="collaboration" value={formData.collaboration} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.quality_of_graduates_tsajaf")}</span>
                    <RatingStars field="graduateQuality" value={formData.graduateQuality} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.skills_alignment_with_industry_needs_1lhwot5")}</span>
                    <RatingStars field="skillAlignment" value={formData.skillAlignment} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.internship_training_programs_18wdbho")}</span>
                    <RatingStars field="internshipPrograms" value={formData.internshipPrograms} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.industry_readiness_of_students_pbas9o")}</span>
                    <RatingStars field="industryReadiness" value={formData.industryReadiness} onChange={handleRatingChange} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-section rounded-lg">
                    <span className="font-medium text-foreground mb-2 md:mb-0">{i18next.t("auto.communication_responsiveness_60qbbo")}</span>
                    <RatingStars field="communication" value={formData.communication} onChange={handleRatingChange} />
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
                <textarea name="suggestions" value={formData.suggestions} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical" placeholder={i18next.t("auto.please_share_any_additional_feedback_suggestions_for_yja8b3")} />
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
export default IndustryFeedbackForm;
