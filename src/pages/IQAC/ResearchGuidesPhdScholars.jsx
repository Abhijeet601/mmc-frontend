import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, BookOpen, Mail, Phone, Calendar, TrendingUp, FileText, Download, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';
const ResearchGuidesPhdScholars = () => {
  const {
    t
  } = useTranslation();
  const researchGuides = [{
    name: i18next.t("auto.dr_nagendra_prasad_verma_nwre9"),
    designation: 'Professor & Head, Department of Computer Science',
    specialization: 'Machine Learning, Data Science, Educational Technology',
    phdScholars: 8,
    completedPhds: 12,
    ongoingPhds: 6,
    email: 'nagendra.verma@mmcpatna.edu.in',
    phone: '+91-9876543210',
    experience: '15 years'
  }, {
    name: i18next.t("auto.dr_priya_sharma_cr6bre"),
    designation: 'Associate Professor, Department of Commerce',
    specialization: 'Financial Management, Entrepreneurship, Women Studies',
    phdScholars: 6,
    completedPhds: 8,
    ongoingPhds: 4,
    email: 'priya.sharma@mmcpatna.edu.in',
    phone: '+91-9876543211',
    experience: '12 years'
  }, {
    name: i18next.t("auto.dr_rajesh_kumar_19g6hay"),
    designation: 'Assistant Professor, Department of Botany',
    specialization: 'Plant Biotechnology, Environmental Science, Biodiversity',
    phdScholars: 5,
    completedPhds: 6,
    ongoingPhds: 3,
    email: 'rajesh.kumar@mmcpatna.edu.in',
    phone: '+91-9876543212',
    experience: '10 years'
  }, {
    name: i18next.t("auto.dr_anita_singh_16q2rcl"),
    designation: 'Professor, Department of Sociology',
    specialization: 'Rural Development, Gender Studies, Social Anthropology',
    phdScholars: 7,
    completedPhds: 9,
    ongoingPhds: 5,
    email: 'anita.singh@mmcpatna.edu.in',
    phone: '+91-9876543213',
    experience: '14 years'
  }, {
    name: i18next.t("auto.dr_manoj_tiwari_1j24f8q"),
    designation: 'Associate Professor, Department of Chemistry',
    specialization: 'Organic Chemistry, Green Chemistry, Environmental Chemistry',
    phdScholars: 4,
    completedPhds: 5,
    ongoingPhds: 2,
    email: 'manoj.tiwari@mmcpatna.edu.in',
    phone: '+91-9876543214',
    experience: '11 years'
  }, {
    name: i18next.t("auto.dr_sunita_patel_18tz4p1"),
    designation: 'Assistant Professor, Department of Mathematics',
    specialization: 'Applied Mathematics, Statistics, Computational Mathematics',
    phdScholars: 3,
    completedPhds: 4,
    ongoingPhds: 2,
    email: 'sunita.patel@mmcpatna.edu.in',
    phone: '+91-9876543215',
    experience: '9 years'
  }];
  const phdStats = [{
    label: i18next.t("auto.total_research_guides_ionc9j"),
    value: '6',
    icon: Users,
    change: '+20%'
  }, {
    label: i18next.t("auto.phd_scholars_nclwle"),
    value: '33',
    icon: GraduationCap,
    change: '+15%'
  }, {
    label: i18next.t("auto.completed_phds_yos27b"),
    value: '44',
    icon: Award,
    change: '+25%'
  }, {
    label: i18next.t("auto.ongoing_research_xntyut"),
    value: '22',
    icon: BookOpen,
    change: '+18%'
  }];
  const pdfFiles = [{
    title: i18next.t("auto.research_guides_phd_scholars_2023_24_1kufxr0"),
    filename: '3.3.2_2324.pdf',
    path: r2Url('documents/IQAC/Research/Research%20Guides%20%26%20PHD%20Scholars/3.3.2_2324.pdf'),
    description: i18next.t("auto.detailed_report_on_research_guides_and_phd_d7muvc")
  }, {
    title: i18next.t("auto.mmc_phd_scholars_b7009t"),
    filename: 'mmc_Phd_scholar.pdf',
    path: r2Url('documents/IQAC/Research/Research%20Guides%20%26%20PHD%20Scholars/mmc_Phd_scholar.pdf'),
    description: i18next.t("auto.comprehensive_overview_of_phd_scholars_at_magadh_9cdggi")
  }];
  const recentAchievements = [{
    scholar: 'Ms. Ritu Sharma',
    guide: 'Dr. Nagendra Prasad Verma',
    topic: 'AI-Powered Learning Analytics for Higher Education',
    status: 'Thesis Submitted',
    year: '2024'
  }, {
    scholar: 'Mr. Amit Kumar',
    guide: 'Dr. Priya Sharma',
    topic: 'Financial Inclusion of Women Entrepreneurs in Rural Bihar',
    status: 'Viva Completed',
    year: '2024'
  }, {
    scholar: 'Ms. Priyanka Singh',
    guide: 'Dr. Anita Singh',
    topic: 'Impact of Education on Women Empowerment in Bihar',
    status: 'Pre-PhD Completed',
    year: '2023'
  }];
  return <>
      <Helmet>
        <title>{i18next.t("auto.research_guides_phd_scholars_iqac_magadh_mahila_3riq0i")}</title>
        <meta name="description" content="Meet our research guides and PhD scholars at Magadh Mahila College. Learn about ongoing research projects and academic supervision." />
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
                <span className="text-primary">{i18next.t("auto.research_guides_phd_scholars_1z0vb90")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.meet_our_esteemed_research_guides_and_explore_3466u2")}
              `}</p>
            </motion.div>

            {/* PDF Files */}
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
          }} className="space-y-6">
              {pdfFiles.map((pdf, index) => <motion.div key={index} initial={{
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
            }} className="p-8 rounded-2xl bg-white shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {pdf.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {pdf.description}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <strong>{i18next.t("auto.file_3f1oah")}</strong> {pdf.filename}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:ml-6">
                      <a href={pdf.path} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        <ExternalLink className="w-4 h-4" />{`
                        ${i18next.t("auto.view_pdf_6av1iy")}
                      `}</a>
                      <a href={pdf.path} download className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Download className="w-4 h-4" />{`
                        ${i18next.t("auto.download_1ypm7w1")}
                      `}</a>
                    </div>
                  </div>
                </motion.div>)}
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
          }} className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center">
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{i18next.t("auto.research_guidance_support_1i5fslh")}</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">{`
                ${i18next.t("auto.for_phd_admissions_research_guidance_or_information_3h46oj")}
              `}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-bold">{i18next.t("auto.phd_coordinator_1hwn0o3")}</div>
                  <div className="text-white/80">{i18next.t("auto.dr_nagendra_prasad_verma_nwre9")}</div>
                  <div className="text-white/80">{i18next.t("auto.phd_magadhmahilacollege_org_goor7k")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default ResearchGuidesPhdScholars;
