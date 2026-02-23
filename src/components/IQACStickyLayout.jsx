import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';

const iqacMenuItems = [
  { label: 'IQAC Home', to: '/iqac' },
  { label: 'Workshop', to: '/iqac/workshop' },
  { label: 'NAAC', to: '/iqac/naac' },
  { label: 'Feedback', to: '/iqac/feedback' },
  { label: 'AQAR', to: '/iqac/aqar' },
  { label: 'Collaboration', to: '/iqac/collaboration' },
  { label: 'Composition of IQAC', to: '/iqac/composition-of-iqac' },
  { label: 'Extension Activities', to: '/iqac/extension-activities' },
  { label: 'Minutes Of IQAC', to: '/iqac/minutes-of-iqac' },
  { label: 'Project, Internship & Field Work', to: '/iqac/project-internship-fieldwork' },
  { label: 'Research', to: '/iqac/research' },
  { label: 'Student Satisfaction Survey', to: '/iqac/student-satisfaction-survey' },
  { label: 'Best Practices', to: '/iqac/best-practices' },
  { label: 'Criteria', to: '/iqac/criteria' },
  { label: 'NAAC Peer Team Visit', to: '/iqac/naac-peer-team-visit' },
  { label: 'Objectives of IQAC', to: '/iqac/objectives-of-iqac' },
  { label: 'Student Progression Form', to: '/iqac/student-progression-form' }
];

const isActivePath = (pathname, to) => pathname === to || pathname.startsWith(`${to}/`);

const IQACStickyLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="lg:flex lg:items-start lg:gap-8">
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="sticky top-24 bg-white rounded-2xl shadow-lg p-5 border border-gray-200 max-h-[calc(100vh-7rem)] overflow-y-auto ml-4 xl:ml-8"
          >
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Menu className="w-5 h-5 text-primary" />
              IQAC Menu
            </h3>
            <nav className="space-y-2">
              {iqacMenuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActivePath(location.pathname, item.to)
                      ? 'bg-primary text-white shadow-md'
                      : 'text-foreground/70 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </nav>
          </motion.div>
        </aside>

        <div className="flex-1 min-w-0">
        <div className="lg:hidden fixed top-24 right-4 z-40">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          >
            <Menu className="w-5 h-5" />
            IQAC Menu
          </button>
        </div>

        <Outlet />
      </div>
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed left-0 top-0 h-full w-80 bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-foreground">IQAC Menu</h3>
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    aria-label="Close IQAC menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {iqacMenuItems.map((item) => (
                    <Link
                      key={`mobile-${item.to}`}
                      to={item.to}
                      onClick={() => setSidebarOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                        isActivePath(location.pathname, item.to)
                          ? 'bg-primary text-white shadow-md'
                          : 'text-foreground/70 hover:bg-gray-50 hover:text-primary'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default IQACStickyLayout;
