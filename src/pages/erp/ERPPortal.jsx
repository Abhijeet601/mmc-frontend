import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  Building2,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import ERPBackdrop from '@/components/erp/ERPBackdrop';
import ERPPageTransition from '@/components/erp/ERPPageTransition';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';

const studentFeatures = [
  'Student Registration',
  'Login',
  'Admission Form Submission',
  'Application Status Tracking',
  'Fee Payment',
  'Hostel Allocation Status',
  'Notifications',
];

const ERPPortal = () => (
  <>
    <Helmet>
      <title>Hostel Admission &amp; Management System | Magadh Mahila College</title>
      <meta
        name="description"
        content="Student hostel ERP for admission application, document upload, status tracking, fee payment, and room allocation updates."
      />
    </Helmet>

    <ERPBackdrop className="min-h-screen py-6 sm:py-8">
      <ERPPageTransition className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[32px] border border-white/80 bg-white/80 px-6 py-7 shadow-[0_30px_70px_-44px_rgba(15,23,42,0.28)] backdrop-blur md:px-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                <Building2 className="h-3.5 w-3.5" />
                MMC Hostel ERP
              </p>
              <h1 className="erp-display mt-5 text-balance text-4xl font-semibold text-slate-950 sm:text-5xl lg:text-[3.4rem]">
                Hostel Admission &amp; Management System
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                A centralized platform for students to apply for hostel admission, track application status, complete
                fee payments, and manage hostel allocation.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start">
              <span className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm sm:inline-flex">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-700" />
                Student Portal Only
              </span>
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="erp-bell inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/92 text-cyan-700 shadow-sm"
              >
                <Bell className="h-5 w-5" />
              </motion.div>
            </div>
          </div>
        </motion.header>

        <main className="flex flex-1 items-center justify-center py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl"
          >
            <ERPSurfaceCard className="group relative overflow-hidden p-7 sm:p-9 lg:p-11" animatedBorder glowEffect>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.74))]" />
              <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-cyan-100/80 blur-3xl transition duration-500 group-hover:scale-110" />
              <div className="pointer-events-none absolute -bottom-20 left-6 h-40 w-40 rounded-full bg-emerald-100/70 blur-3xl transition duration-500 group-hover:scale-110" />

              <div className="relative z-[1] grid gap-8 lg:grid-cols-[1.04fr,0.96fr] lg:items-start">
                <div>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[linear-gradient(135deg,#0F4C81,#0EA5A9)] text-white shadow-[0_22px_48px_-24px_rgba(15,76,129,0.48)]">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Student Portal</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.3rem]">
                    Admission, payments, and allocation in one student workspace
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    Students can register, submit hostel admission applications, upload documents, track application
                    progress, pay hostel fees, and check room allocation status.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-medium text-cyan-700">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Secure student authentication
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      Optimized for desktop, tablet, and mobile
                    </span>
                  </div>
                </div>

                <div className="rounded-[30px] border border-slate-200/80 bg-white/84 p-5 shadow-[0_22px_48px_-36px_rgba(15,23,42,0.28)] backdrop-blur sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Student Services</p>

                  <div className="mt-5 space-y-3">
                    {studentFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.14 + index * 0.05 }}
                        className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 px-4 py-4 text-sm text-slate-700 shadow-[0_14px_30px_-34px_rgba(15,23,42,0.32)]"
                      >
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(15,76,129,0.1),rgba(14,165,169,0.16))] text-cyan-700">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="text-sm text-slate-500">
                      Continue to the student login page to begin or resume your hostel admission process.
                    </p>
                    <motion.div className="mt-4" whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }}>
                      <Link
                        to="/erp/student"
                        className="group/student relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_42px_-22px_rgba(15,76,129,0.42)] transition duration-300 hover:shadow-[0_22px_46px_-20px_rgba(14,165,169,0.46)]"
                      >
                        <span className="absolute inset-0 bg-[linear-gradient(135deg,#0F4C81,#0EA5A9)]" />
                        <span className="absolute inset-0 bg-[linear-gradient(135deg,#0C3D68,#0B7285)] opacity-0 transition-opacity duration-300 group-hover/student:opacity-100" />
                        <span className="absolute inset-0 rounded-2xl ring-1 ring-white/25" />
                        <span className="relative z-[1]">Open Student Portal</span>
                        <ArrowRight className="relative z-[1] h-4 w-4 transition-transform duration-300 group-hover/student:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </ERPSurfaceCard>
          </motion.div>
        </main>

        <motion.footer
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-auto flex flex-col gap-2 border-t border-slate-200/70 px-2 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-medium text-slate-700">MMC Hostel ERP System</p>
          <Link
            to="/system-admin"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 transition hover:text-cyan-900"
          >
            Staff Login
          </Link>
        </motion.footer>
      </ERPPageTransition>
    </ERPBackdrop>
  </>
);

export default ERPPortal;
