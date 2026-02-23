import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, XCircle, TrendingUp, FileText, Calendar, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Compliance = () => {
  const { t } = useTranslation();

  const complianceAreas = [
    {
      area: 'Faculty Qualifications',
      status: 'Compliant',
      score: '98%',
      lastAudit: 'Dec 2023',
      nextAudit: 'Dec 2024',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      area: 'Infrastructure Standards',
      status: 'Compliant',
      score: '95%',
      lastAudit: 'Nov 2023',
      nextAudit: 'Nov 2024',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      area: 'Student-Teacher Ratio',
      status: 'Minor Issues',
      score: '87%',
      lastAudit: 'Oct 2023',
      nextAudit: 'Oct 2024',
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      area: 'Library Resources',
      status: 'Compliant',
      score: '92%',
      lastAudit: 'Sep 2023',
      nextAudit: 'Sep 2024',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      area: 'Laboratory Facilities',
      status: 'Compliant',
      score: '96%',
      lastAudit: 'Aug 2023',
      nextAudit: 'Aug 2024',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      area: 'Financial Management',
      status: 'Under Review',
      score: '78%',
      lastAudit: 'Jul 2023',
      nextAudit: 'Jul 2024',
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  const recentAudits = [
    {
      title: 'Annual Compliance Audit 2023',
      date: 'December 15, 2023',
      auditor: 'AICTE Regional Office',
      findings: '5 minor observations, all addressed',
      status: 'Completed',
      statusColor: 'text-green-600',
      statusBg: 'bg-green-100'
    },
    {
      title: 'Infrastructure Inspection',
      date: 'November 28, 2023',
      auditor: 'AICTE Technical Team',
      findings: 'All facilities meet standards',
      status: 'Completed',
      statusColor: 'text-green-600',
      statusBg: 'bg-green-100'
    },
    {
      title: 'Faculty Qualification Review',
      date: 'October 20, 2023',
      auditor: 'AICTE Academic Committee',
      findings: '2 faculty members pursuing higher qualifications',
      status: 'Completed',
      statusColor: 'text-green-600',
      statusBg: 'bg-green-100'
    }
  ];

  const stats = [
    { label: 'Overall Compliance', value: '92%', icon: Shield },
    { label: 'Areas Compliant', value: '5/6', icon: CheckCircle },
    { label: 'Last Full Audit', value: 'Dec 2023', icon: Calendar },
    { label: 'Next Audit', value: 'Dec 2024', icon: TrendingUp }
  ];

  return (
    <>
      <Helmet>
        <title>AICTE Compliance - Audit Reports | Magadh Mahila College</title>
        <meta name="description" content="View AICTE compliance status, audit reports, and regulatory adherence for Magadh Mahila College's technical education programs." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">AICTE Compliance & Audits</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Comprehensive compliance monitoring, audit reports, and regulatory adherence status for all AICTE requirements.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white shadow-lg border border-border"
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Compliance Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Compliance Status by Area</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {complianceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${area.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <area.icon className={`w-6 h-6 ${area.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {area.area}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${area.bgColor} ${area.color}`}>
                            {area.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="text-2xl font-bold text-primary">
                            {area.score}
                          </div>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 bg-gradient-to-r from-primary to-highlight rounded-full`}
                              style={{ width: area.score }}
                            ></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">Last Audit:</span> {area.lastAudit}
                          </div>
                          <div>
                            <span className="font-medium">Next Audit:</span> {area.nextAudit}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Audits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Recent Audit Reports</span>
              </h2>
              <div className="space-y-6">
                {recentAudits.map((audit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white shadow-lg border border-border"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 mb-4 lg:mb-0">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {audit.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${audit.statusBg} ${audit.statusColor}`}>
                            {audit.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-2">
                          <strong>Auditor:</strong> {audit.auditor}
                        </p>
                        <p className="text-muted-foreground mb-2">
                          <strong>Findings:</strong> {audit.findings}
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{audit.date}</span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                          View Report
                        </button>
                        <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Compliance Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-primary">Compliance Improvement Actions</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Regular Monitoring</h3>
                  <p className="text-blue-700 text-sm">
                    Continuous monitoring of all compliance parameters with monthly internal audits.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Corrective Actions</h3>
                  <p className="text-green-700 text-sm">
                    Immediate implementation of corrective measures for any compliance gaps identified.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Continuous Improvement</h3>
                  <p className="text-purple-700 text-sm">
                    Regular review and enhancement of processes to exceed compliance requirements.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center"
            >
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Compliance Support</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                For compliance queries, audit preparations, or regulatory guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">Compliance Officer</div>
                  <div className="text-white/80">Dr. Priya Sharma</div>
                  <div className="text-white/80">compliance@magadhmahilacollege.org</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Compliance;
