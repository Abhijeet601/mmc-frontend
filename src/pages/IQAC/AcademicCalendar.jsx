import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarDays, ChevronRight, Download, FileText } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
import { useTranslation } from 'react-i18next';
const academicCalendars = [{
  year: '2024-25',
  file: 'Academic Calendar 2024-25.pdf'
}, {
  year: '2023-24',
  file: 'Academic Calander 2023-24.pdf'
}, {
  year: '2022-23',
  file: 'Academic-Calendar-Admission-2022-2023.pdf'
}, {
  year: '2021-22',
  file: 'IQAC Calendar 2021-2022.pdf'
}, {
  year: '2020-21',
  file: 'IQAC Calendar 2020-2021.pdf'
}];
const AcademicCalendar = () => {
  useTranslation();
  return <>
      <Helmet>
        <title>{i18next.t("auto.academic_calendar_iqac_magadh_mahila_college_1y6jzjo")}</title>
        <meta name="description" content="Academic Calendar under IQAC at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/iqac" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8">
            <ChevronRight className="w-4 h-4 rotate-180" />{`
            ${i18next.t("auto.back_to_iqac_1o3axbj")}
          `}</Link>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{`
              ${i18next.t("auto.academic_1idltgg")} `}<span className="text-primary">{i18next.t("auto.calendar_1fyt14n")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{`
              ${i18next.t("auto.academic_calendar_pdfs_listed_in_descending_order_1u4mkg3")}
            `}</p>
          </motion.div>

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
        }} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <CalendarDays className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">{i18next.t("auto.academic_calendar_1r9vbea")}</h2>
            </div>

            <div className="space-y-4">
              {academicCalendars.map(item => {
              const fileUrl = encodeURI(r2Url(`data files/IQAC/Academic Calender/${item.file}`));
              return <div key={item.file} className="flex items-center justify-between gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground">{item.year}</p>
                        <p className="text-sm text-muted-foreground break-all">{item.file}</p>
                      </div>
                    </div>

                    <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium flex-shrink-0">
                      <Download className="w-4 h-4" />{`
                      ${i18next.t("auto.open_yjqpip")}
                    `}</a>
                  </div>;
            })}
            </div>
          </motion.div>
        </div>
      </div>
    </>;
};
export default AcademicCalendar;
