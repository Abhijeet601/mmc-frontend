import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
import { useTranslation } from 'react-i18next';
const ProjectInternshipFieldwork = () => {
  useTranslation();
  const basePath = r2Url('documents/IQAC/Project%20Internship%20%26%20Field%20Work');
  const reports = [{
    year: '2023-24',
    title: i18next.t("auto.project_internship_field_work_report_2023_24_c9n9wa"),
    file: 'Project-Internship-Field-Work-23-24.pdf'
  }, {
    year: '2022-23',
    title: i18next.t("auto.internship_project_report_2022_23_2bmxw9"),
    file: 'Internship_project_22-23.pdf'
  }, {
    year: '2021-22',
    title: i18next.t("auto.project_internship_field_work_report_2021_22_cb20ta"),
    file: 'Project-internship-field-work-2021-22-1.pdf'
  }, {
    year: '2019-20',
    title: i18next.t("auto.project_internship_field_work_report_2019_20_902ol3"),
    file: 'Project-Internship-Field-Work-Session-2019-2020.pdf'
  }, {
    year: '2018-19',
    title: i18next.t("auto.project_internship_field_work_report_2018_19_90s0ws"),
    file: 'Project-Internship-and-Field-Work-2018-19.pdf'
  }, {
    year: 'Undated',
    title: i18next.t("auto.field_work_internship_project_report_3hmj9"),
    file: 'Field-WorkInternship-Project.pdf'
  }, {
    year: 'Undated',
    title: i18next.t("auto.mmc_internship_report_gqurj4"),
    file: 'mmc_Internship.pdf'
  }];
  const parseYearValue = year => {
    const match = year.match(/\d{4}/);
    return match ? Number(match[0]) : -1;
  };
  const groupedReports = reports.reduce((acc, report) => {
    if (!acc[report.year]) {
      acc[report.year] = [];
    }
    acc[report.year].push(report);
    return acc;
  }, {});
  const sortedYears = Object.keys(groupedReports).sort((a, b) => {
    if (a === 'Undated') return 1;
    if (b === 'Undated') return -1;
    return parseYearValue(b) - parseYearValue(a);
  });
  return <>
      <Helmet>
        <title>{i18next.t("auto.project_internship_field_work_iqac_magadh_mahila_yrk8hn")}</title>
        <meta name="description" content="Explore project internships and fieldwork opportunities at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
                <span className="text-primary">{i18next.t("auto.project_internship_field_work_nb19ul")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.practical_learning_experiences_through_internships_and_fieldwork_1uiak1a")}
              `}</p>
            </motion.div>

            {/* Project Internship & Field Work Documents */}
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
                <span className="text-primary">{i18next.t("auto.project_internship_field_work_documents_u436o1")}</span>
              </h2>
              <div className="space-y-8">
                {sortedYears.map((year, index) => <motion.div key={year} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.05
              }} className="p-8 rounded-2xl bg-white shadow-lg border border-border">
                    <h3 className="text-2xl font-bold text-foreground mb-5">
                      {year === 'Undated' ? 'Additional Reports' : `Session ${year}`}
                    </h3>
                    <div className="space-y-3">
                      {groupedReports[year].map(report => <motion.a key={report.file} href={`${basePath}/${encodeURIComponent(report.file)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:underline" whileHover={{
                    x: 3
                  }} transition={{
                    duration: 0.2
                  }}>
                          <FileText className="w-5 h-5 flex-shrink-0" />
                          <span>{report.title}</span>
                        </motion.a>)}
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default ProjectInternshipFieldwork;
