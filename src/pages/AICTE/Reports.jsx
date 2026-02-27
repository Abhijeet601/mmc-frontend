import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, Award, Eye, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const Reports = () => {
  const {
    t
  } = useTranslation();
  const reports = [{
    title: i18next.t("auto.annual_aicte_report_2023_1k76n7v"),
    description: i18next.t("auto.comprehensive_annual_report_submitted_to_aicte_including_1690hp1"),
    year: '2023',
    size: '3.2 MB',
    format: 'PDF',
    category: 'Annual',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.course_approval_extension_report_1hrzwko"),
    description: i18next.t("auto.detailed_report_for_extension_of_course_approvals_v219fi"),
    year: '2023',
    size: '1.8 MB',
    format: 'PDF',
    category: 'Approval',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.infrastructure_development_report_j6nzj3"),
    description: i18next.t("auto.report_on_infrastructure_improvements_and_compliance_with_a7r7me"),
    year: '2023',
    size: '2.4 MB',
    format: 'PDF',
    category: 'Infrastructure',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.faculty_qualification_report_6ygtt6"),
    description: i18next.t("auto.comprehensive_faculty_qualification_and_experience_report_as_suuou6"),
    year: '2023',
    size: '1.5 MB',
    format: 'PDF',
    category: 'Faculty',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.student_intake_and_placement_report_n6ict8"),
    description: i18next.t("auto.annual_report_on_student_admissions_retention_and_yer3gd"),
    year: '2023',
    size: '987 KB',
    format: 'PDF',
    category: 'Students',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.research_and_innovation_report_jfjbhw"),
    description: i18next.t("auto.report_on_research_activities_publications_and_innovation_hdlv8t"),
    year: '2023',
    size: '1.2 MB',
    format: 'PDF',
    category: 'Research',
    downloadUrl: '#'
  }];
  const categories = [{
    name: i18next.t("auto.annual_reports_gz35tt"),
    count: 8,
    icon: FileText,
    color: 'from-blue-500 to-blue-600'
  }, {
    name: i18next.t("auto.approval_documents_o0t89q"),
    count: 12,
    icon: Award,
    color: 'from-green-500 to-green-600'
  }, {
    name: i18next.t("auto.compliance_reports_n9jqpx"),
    count: 15,
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600'
  }, {
    name: i18next.t("auto.audit_reports_ukbf11"),
    count: 6,
    icon: BarChart3,
    color: 'from-orange-500 to-orange-600'
  }];
  const stats = [{
    label: i18next.t("auto.total_reports_mr902i"),
    value: '41',
    icon: FileText
  }, {
    label: i18next.t("auto.downloads_1ohrh7m"),
    value: '2,847',
    icon: Download
  }, {
    label: i18next.t("auto.latest_update_kuh0j3"),
    value: 'Jan 2024',
    icon: Calendar
  }, {
    label: i18next.t("auto.categories_h6n1lf"),
    value: '4',
    icon: BarChart3
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.aicte_reports_annual_submissions_magadh_mahila_college_1by4gvw")}</title>
        <meta name="description" content="Download AICTE reports, annual submissions, and regulatory documents for Magadh Mahila College's technical education programs." />
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
                <span className="text-primary">{i18next.t("auto.aicte_reports_submissions_d0djq7")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.comprehensive_collection_of_aicte_reports_annual_submissions_qzcrb8")}
              `}</p>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} className="text-center p-6 rounded-2xl bg-white shadow-lg border border-border">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>)}
            </motion.div>

            {/* Categories */}
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
                <span className="text-primary">{i18next.t("auto.report_categories_1wcs8l9")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.1
              }} className="text-center p-6 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.count}{` ${i18next.t("auto.reports_mkjmoo")}`}</p>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Reports List */}
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
                <span className="text-primary">{i18next.t("auto.latest_reports_f8hg0z")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reports.map((report, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.05
              }} className="p-6 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {report.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {report.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {report.year}
                          </span>
                          <span>{report.size}</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                            {report.category}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                            {report.format}
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <button className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors">
                            <Download className="w-4 h-4 mr-2" />{`
                            ${i18next.t("auto.download_1ypm7w1")}
                          `}</button>
                          <a href="/about/mou" className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-lg hover:bg-secondary/90 transition-colors">
                            <FileText className="w-4 h-4 mr-2" />{`
                            ${i18next.t("auto.download_mou_rgd8li")}
                          `}</a>
                          <button className="inline-flex items-center px-4 py-2 border border-primary text-primary text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                            <Eye className="w-4 h-4 mr-2" />{`
                            ${i18next.t("auto.preview_1la60pb")}
                          `}</button>
                        </div>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Submission Timeline */}
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
                <span className="text-primary">{i18next.t("auto.aicte_submission_timeline_hj6zw")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <Calendar className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{i18next.t("auto.quarterly_reports_lwjwih")}</h3>
                  <p className="text-blue-700 text-sm">{`
                    ${i18next.t("auto.progress_reports_submitted_every_quarter_with_updates_1og5ihm")}
                  `}</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <FileText className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">{i18next.t("auto.annual_reports_gz35tt")}</h3>
                  <p className="text-green-700 text-sm">{`
                    ${i18next.t("auto.comprehensive_annual_reports_submitted_by_end_of_1qfhtr5")}
                  `}</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">{i18next.t("auto.ad_hoc_reports_1aptc1g")}</h3>
                  <p className="text-purple-700 text-sm">{`
                    ${i18next.t("auto.special_reports_submitted_as_requested_by_aicte_19v1v3k")}
                  `}</p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
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
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{i18next.t("auto.report_assistance_wzenjh")}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">{`
                ${i18next.t("auto.need_help_with_aicte_reporting_requirements_data_1srm0v4")}
              `}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">{i18next.t("auto.reports_coordinator_15kb0zm")}</div>
                  <div className="text-white/80">{i18next.t("auto.dr_priya_sharma_cr6bre")}</div>
                  <div className="text-white/80">{i18next.t("auto.reports_magadhmahilacollege_org_1g3l0g1")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default Reports;
