import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const isActivePath = (pathname, to) => pathname === to || pathname.startsWith(`${to}/`);
const IQACStickyLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const iqacMenuItems = useMemo(() => [{
    label: t('auto.iqac_home_1ua3g40'),
    to: '/iqac'
  }, {
    label: t('auto.workshop_viy740'),
    to: '/iqac/workshop'
  }, {
    label: t('auto.naac_yjoq3s'),
    to: '/iqac/naac'
  }, {
    label: t('auto.feedback_3sdld8'),
    to: '/iqac/feedback'
  }, {
    label: t('auto.aqar_yjjr5y'),
    to: '/iqac/aqar'
  }, {
    label: t('auto.collaboration_ukjaay'),
    to: '/iqac/collaboration'
  }, {
    label: t('auto.composition_of_iqac_1y3orke'),
    to: '/iqac/composition-of-iqac'
  }, {
    label: t('auto.academic_calendar_1r9vbea'),
    to: '/iqac/academic-calendar'
  }, {
    label: t('auto.extension_activities_1ozmklz'),
    to: '/iqac/extension-activities'
  }, {
    label: t('auto.minutes_of_iqac_ygs9d7'),
    to: '/iqac/minutes-of-iqac'
  }, {
    label: t('auto.project_internship_field_work_h4z4kx'),
    to: '/iqac/project-internship-fieldwork'
  }, {
    label: t('auto.research_yc00s'),
    to: '/iqac/research'
  }, {
    label: t('auto.student_satisfaction_survey_11q4iwm'),
    to: '/iqac/student-satisfaction-survey'
  }, {
    label: t('auto.best_practices_1limix9'),
    to: '/iqac/best-practices'
  }, {
    label: t('auto.criteria_5jpwza'),
    to: '/iqac/criteria'
  }, {
    label: t('auto.infrastructure_maintenance_14ekfi7'),
    to: '/iqac/infrastructure-maintenance'
  }, {
    label: t('auto.naac_peer_team_visit_1vd7nra'),
    to: '/iqac/naac-peer-team-visit'
  }, {
    label: t('auto.student_progression_form_po9kdr'),
    to: '/iqac/student-progression-form'
  }], [i18n.language]);
  return <>
      <div className="lg:flex lg:items-start lg:gap-8">
        <aside className="hidden md:block w-72 flex-shrink-0">
          <motion.div initial={{
          opacity: 0,
          x: -16
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.35
        }} className="sticky top-24 bg-white rounded-2xl shadow-lg p-5 border border-gray-200 max-h-[calc(100vh-7rem)] overflow-y-auto ml-4 xl:ml-8">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Menu className="w-5 h-5 text-primary" />{`
              ${t("auto.iqac_menu_1u9v7m4")}
            `}</h3>
            <nav className="space-y-2">
              {iqacMenuItems.map(item => <Link key={item.to} to={item.to} className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${isActivePath(location.pathname, item.to) ? 'bg-primary text-white shadow-md' : 'text-foreground/70 hover:bg-gray-50 hover:text-primary'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>)}
            </nav>
          </motion.div>
        </aside>

        <div className="flex-1 min-w-0">
        <div className="md:hidden fixed top-24 right-4 z-40">
          <button type="button" onClick={() => setSidebarOpen(true)} className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors">
            <Menu className="w-5 h-5" />{`
            ${t("auto.iqac_menu_1u9v7m4")}
          `}</button>
        </div>

        <Outlet />
      </div>
      </div>

      <AnimatePresence>
        {sidebarOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />
            <motion.div initial={{
          x: -300,
          opacity: 0
        }} animate={{
          x: 0,
          opacity: 1
        }} exit={{
          x: -300,
          opacity: 0
        }} transition={{
          duration: 0.25
        }} className="md:hidden fixed left-0 top-0 h-full w-80 bg-white z-50 shadow-2xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-foreground">{t("auto.iqac_menu_1u9v7m4")}</h3>
                  <button type="button" onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg" aria-label={t("auto.close_iqac_menu_xs2bp6")}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {iqacMenuItems.map(item => <Link key={`mobile-${item.to}`} to={item.to} onClick={() => setSidebarOpen(false)} className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${isActivePath(location.pathname, item.to) ? 'bg-primary text-white shadow-md' : 'text-foreground/70 hover:bg-gray-50 hover:text-primary'}`}>
                      <div className="flex items-center justify-between gap-3">
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>)}
                </nav>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
};
export default IQACStickyLayout;
