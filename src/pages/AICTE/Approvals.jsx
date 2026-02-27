import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileCheck, Calendar, Download, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const Approvals = () => {
  const {
    t
  } = useTranslation();
  const approvals = [{
    course: 'Bachelor of Computer Applications (BCA)',
    code: 'BCA-001',
    intake: '120',
    status: 'Approved',
    validTill: '2028',
    lastRenewal: '2023',
    statusColor: 'text-green-600',
    statusBg: 'bg-green-100',
    icon: CheckCircle
  }, {
    course: 'Bachelor of Business Administration (BBA)',
    code: 'BBA-002',
    intake: '100',
    status: 'Approved',
    validTill: '2028',
    lastRenewal: '2023',
    statusColor: 'text-green-600',
    statusBg: 'bg-green-100',
    icon: CheckCircle
  }, {
    course: 'Master of Computer Applications (MCA)',
    code: 'MCA-003',
    intake: '60',
    status: 'Approved',
    validTill: '2028',
    lastRenewal: '2023',
    statusColor: 'text-green-600',
    statusBg: 'bg-green-100',
    icon: CheckCircle
  }, {
    course: 'Bachelor of Commerce (B.Com)',
    code: 'BCOM-004',
    intake: '150',
    status: 'Under Review',
    validTill: '2027',
    lastRenewal: '2022',
    statusColor: 'text-yellow-600',
    statusBg: 'bg-yellow-100',
    icon: Clock
  }, {
    course: 'Master of Business Administration (MBA)',
    code: 'MBA-005',
    intake: '60',
    status: 'Extension Applied',
    validTill: '2026',
    lastRenewal: '2021',
    statusColor: 'text-orange-600',
    statusBg: 'bg-orange-100',
    icon: AlertCircle
  }];
  const stats = [{
    label: i18next.t("auto.total_courses_1sr085l"),
    value: '25',
    icon: FileCheck
  }, {
    label: i18next.t("auto.approved_courses_1du7q8"),
    value: '23',
    icon: CheckCircle
  }, {
    label: i18next.t("auto.under_review_1rwy49j"),
    value: '2',
    icon: Clock
  }, {
    label: i18next.t("auto.next_renewal_h92pd0"),
    value: '2024',
    icon: Calendar
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.aicte_approvals_course_accreditations_magadh_mahila_college_12k4kx7")}</title>
        <meta name="description" content="View AICTE course approvals, intake capacities, and accreditation status for all programs at Magadh Mahila College." />
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
                <span className="text-primary">{i18next.t("auto.aicte_course_approvals_p349x2")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.comprehensive_list_of_aicte_approved_courses_intake_10y5r3c")}
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

            {/* Approvals Table */}
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
                <span className="text-primary">{i18next.t("auto.course_approval_status_12jpl4b")}</span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl shadow-lg border border-border">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">{i18next.t("auto.course_name_dte35r")}</th>
                      <th className="px-6 py-4 text-left font-bold">{i18next.t("auto.course_code_dtg911")}</th>
                      <th className="px-6 py-4 text-left font-bold">{i18next.t("auto.intake_1a1rv95")}</th>
                      <th className="px-6 py-4 text-left font-bold">{i18next.t("auto.status_1iwhbo1")}</th>
                      <th className="px-6 py-4 text-left font-bold">{i18next.t("auto.valid_till_1m911q")}</th>
                      <th className="px-6 py-4 text-left font-bold">{i18next.t("auto.last_renewal_eid1op")}</th>
                      <th className="px-6 py-4 text-left font-bold">{i18next.t("auto.actions_66dnfs")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvals.map((approval, index) => <motion.tr key={index} initial={{
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
                  }} className="border-b border-border hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <approval.icon className={`w-5 h-5 ${approval.statusColor}`} />
                            <span className="font-medium text-foreground">{approval.course}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{approval.code}</td>
                        <td className="px-6 py-4 text-muted-foreground">{approval.intake}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${approval.statusBg} ${approval.statusColor}`}>
                            {approval.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{approval.validTill}</td>
                        <td className="px-6 py-4 text-muted-foreground">{approval.lastRenewal}</td>
                        <td className="px-6 py-4">
                          <button className="inline-flex items-center px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                            <Download className="w-4 h-4 mr-1" />{`
                            ${i18next.t("auto.download_1ypm7w1")}
                          `}</button>
                        </td>
                      </motion.tr>)}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Approval Process */}
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
                <span className="text-primary">{i18next.t("auto.approval_process_mnzqnd")}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <FileCheck className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{i18next.t("auto.application_submission_1nqmsbb")}</h3>
                  <p className="text-blue-700 text-sm">{`
                    ${i18next.t("auto.submit_detailed_course_proposals_faculty_details_infrastructure_14wcjjj")}
                  `}</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">{i18next.t("auto.review_inspection_1mxadt3")}</h3>
                  <p className="text-green-700 text-sm">{`
                    ${i18next.t("auto.aicte_conducts_thorough_review_of_applications_and_j07ayh")}
                  `}</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <Calendar className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">{i18next.t("auto.approval_renewal_17q4f2a")}</h3>
                  <p className="text-purple-700 text-sm">{`
                    ${i18next.t("auto.successful_applications_receive_approval_letters_with_validity_fac4ag")}
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
              <FileCheck className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{i18next.t("auto.approval_queries_rwkrji")}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">{`
                ${i18next.t("auto.for_questions_regarding_course_approvals_intake_modifications_43s901")}
              `}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">{i18next.t("auto.approval_coordinator_9pbjs")}</div>
                  <div className="text-white/80">{i18next.t("auto.dr_priya_sharma_cr6bre")}</div>
                  <div className="text-white/80">{i18next.t("auto.approvals_magadhmahilacollege_org_1imxtfs")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default Approvals;
