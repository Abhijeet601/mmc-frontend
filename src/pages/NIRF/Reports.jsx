import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, Award, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const Reports = () => {
  const {
    t
  } = useTranslation();
  const reports = [{
    title: i18next.t("auto.nirf_2023_overall_report_wrr3tg"),
    description: i18next.t("auto.complete_nirf_evaluation_report_for_the_year_vh6q8b"),
    year: '2023',
    size: '2.4 MB',
    format: 'PDF',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.parameter_wise_analysis_report_3747dh"),
    description: i18next.t("auto.detailed_breakdown_of_scores_across_all_five_f95sya"),
    year: '2023',
    size: '1.8 MB',
    format: 'PDF',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.institutional_performance_summary_9ae18o"),
    description: i18next.t("auto.executive_summary_of_institutional_performance_achievements_and_6wg7h8"),
    year: '2023',
    size: '956 KB',
    format: 'PDF',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.nirf_2022_report_1p25tx6"),
    description: i18next.t("auto.previous_year_nirf_evaluation_report_for_comparison_vwo4rw"),
    year: '2022',
    size: '2.1 MB',
    format: 'PDF',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.research_output_analysis_1i0pm9d"),
    description: i18next.t("auto.comprehensive_analysis_of_research_publications_citations_and_1m0pe3x"),
    year: '2023',
    size: '1.2 MB',
    format: 'PDF',
    downloadUrl: '#'
  }, {
    title: i18next.t("auto.student_placement_report_1v41bor"),
    description: i18next.t("auto.detailed_report_on_student_placements_salary_packages_1u7v52e"),
    year: '2023',
    size: '887 KB',
    format: 'PDF',
    downloadUrl: '#'
  }];
  const stats = [{
    label: i18next.t("auto.reports_available_yqpmyp"),
    value: '12',
    icon: FileText
  }, {
    label: i18next.t("auto.total_downloads_dux3gg"),
    value: '1,247',
    icon: Download
  }, {
    label: i18next.t("auto.latest_update_kuh0j3"),
    value: 'Dec 2023',
    icon: Calendar
  }, {
    label: i18next.t("auto.coverage_years_ezk48n"),
    value: '2020-2023',
    icon: TrendingUp
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.nirf_reports_performance_analysis_magadh_mahila_college_o18im5")}</title>
        <meta name="description" content="Download comprehensive NIRF reports, analysis documents, and performance summaries for Magadh Mahila College." />
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
                <span className="text-primary">{i18next.t("auto.nirf_reports_analysis_ukz9cv")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.comprehensive_reports_and_analytical_documents_providing_detailed_139lhu4")}
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
                <span className="text-primary">{i18next.t("auto.available_reports_1y43jb5")}</span>
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

            {/* Report Categories */}
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <FileText className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{i18next.t("auto.annual_reports_gz35tt")}</h3>
                  <p className="text-blue-700 text-sm">{`
                    ${i18next.t("auto.complete_yearly_nirf_evaluation_reports_with_detailed_w9un0u")}
                  `}</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">{i18next.t("auto.performance_analysis_zbkrcf")}</h3>
                  <p className="text-green-700 text-sm">{`
                    ${i18next.t("auto.in_depth_analysis_of_institutional_performance_across_10b42p")}
                  `}</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">{i18next.t("auto.comparative_studies_1drw1hd")}</h3>
                  <p className="text-purple-700 text-sm">{`
                    ${i18next.t("auto.benchmarking_reports_comparing_our_performance_with_peer_knke8k")}
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
              <h2 className="text-3xl font-bold mb-4">{i18next.t("auto.need_specific_reports_qaa6gd")}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">{`
                ${i18next.t("auto.contact_our_nirf_coordination_team_for_customized_14z1sw6")}
              `}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">{i18next.t("auto.reports_coordinator_15kb0zm")}</div>
                  <div className="text-white/80">{i18next.t("auto.dr_rajesh_kumar_19g6hay")}</div>
                  <div className="text-white/80">{i18next.t("auto.nirf_reports_magadhmahilacollege_org_ho3obg")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default Reports;
