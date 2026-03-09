import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  Building2,
  CircleDollarSign,
  CreditCard,
  FileSpreadsheet,
  ShieldCheck,
  Sparkles,
  UserRound,
  UserRoundPlus,
} from 'lucide-react';
import ERPPageTransition from '@/components/erp/ERPPageTransition';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';

const portalCards = [
  {
    title: 'Student Portal',
    description:
      'Register, submit admission form, pay application fee, view shortlist status, and complete hostel allocation.',
    to: '/erp/student',
    icon: UserRound,
    badge: 'Admission + Hostel',
    gradient: 'from-indigo-500 to-cyan-500',
    highlights: ['New registration and login', 'Application tracking updates', 'Fee payment and allocation'],
  },
  {
    title: 'Admin Portal',
    description:
      'Manage records, export student sheets, upload shortlist, and monitor hostel payment progress in one place.',
    to: '/erp/admin',
    icon: ShieldCheck,
    badge: 'Admin Control',
    gradient: 'from-emerald-500 to-cyan-500',
    highlights: ['Shortlist and records control', 'Payment and workflow monitoring', 'Data export and verification'],
  },
];

const workflow = [
  { label: 'Registration', icon: UserRoundPlus },
  { label: 'Application Form', icon: FileSpreadsheet },
  { label: 'Application Fee Payment', icon: CircleDollarSign },
  { label: 'Shortlisting', icon: ShieldCheck },
  { label: 'Hostel Allocation', icon: Building2 },
  { label: 'Final Payment', icon: CreditCard },
];

const ERPPortal = () => (
  <>
    <Helmet>
      <title>Hostel ERP | Magadh Mahila College</title>
      <meta
        name="description"
        content="Magadh Mahila College ERP for admission processing, student shortlisting, and hostel allocation."
      />
    </Helmet>

    <section className="relative isolate overflow-hidden bg-[#F8FAFC] px-4 py-14 sm:px-6 lg:px-8">
      <motion.div
        className="erp-soft-grid pointer-events-none absolute inset-0 opacity-80"
        animate={{ backgroundPosition: ['0px 0px', '26px 18px', '0px 0px'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-cyan-200/65 blur-3xl"
        animate={{ x: [0, 36, 0], y: [0, 24, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-200/55 blur-3xl"
        animate={{ x: [0, -36, 0], y: [0, 26, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {[0, 1, 2, 3].map((item) => (
        <motion.div
          key={item}
          className="pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0))] blur-2xl"
          style={{
            width: item % 2 === 0 ? 132 : 96,
            height: item % 2 === 0 ? 132 : 96,
            left: `${14 + item * 22}%`,
            top: `${12 + (item % 2) * 28}%`,
          }}
          animate={{
            y: [0, item % 2 === 0 ? -18 : 18, 0],
            x: [0, item % 2 === 0 ? 10 : -10, 0],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 7 + item,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item * 0.5,
          }}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.96),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(224,242,254,0.82),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(236,253,245,0.82),transparent_45%)]" />

      <ERPPageTransition className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-start justify-between gap-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              MMC Hostel ERP
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              Premium Admission + Hostel ERP
            </h1>
            <motion.span
              className="mt-4 block h-1 w-40 rounded-full bg-[linear-gradient(90deg,rgba(79,70,229,0.22),rgba(6,182,212,0.82),rgba(79,70,229,0.22))]"
              style={{ backgroundSize: '200% 100%' }}
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1, backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{
                opacity: { duration: 0.35, delay: 0.18 },
                scaleX: { duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
                backgroundPosition: { duration: 8, repeat: Infinity, ease: 'linear' },
              }}
            />
            <motion.p
              className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              Modern student admission and hostel management workflow with a clean, secure, and responsive experience.
            </motion.p>
          </motion.div>

          <motion.button
            type="button"
            className="erp-bell rounded-xl border border-indigo-100 bg-white p-3 text-indigo-600 shadow-sm transition hover:shadow-md"
            aria-label="Notifications"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Bell className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {portalCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <ERPSurfaceCard
                  className="group relative flex h-full flex-col overflow-hidden p-6 sm:p-7"
                  animatedBorder
                  delay={index * 0.06}
                >
                  <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.gradient}`} />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-100/70 blur-2xl transition duration-500 group-hover:scale-110" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_28%,transparent)]" />

                  <div className="relative z-[2] flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                          <Icon className="h-3.5 w-3.5" />
                          {card.badge}
                        </p>
                        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">{card.title}</h2>
                      </div>
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-[0_18px_38px_-24px_rgba(79,70,229,0.6)]`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {card.highlights.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-slate-200/80 bg-slate-50/85 px-3 py-3 text-xs font-medium leading-5 text-slate-600 shadow-[0_12px_32px_-30px_rgba(15,23,42,0.45)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <motion.div className="mt-auto pt-7" initial="rest" whileHover="hover" whileTap="tap">
                      <motion.div variants={{ rest: { scale: 1 }, hover: { scale: 1.02 }, tap: { scale: 0.985 } }}>
                        <Link
                          to={card.to}
                          className="group/portal relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-300/35 transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(79,70,229,0.32)]"
                        >
                          <span className="absolute inset-0 bg-[linear-gradient(135deg,#4F46E5,#06B6D4)] transition-opacity duration-300 group-hover/portal:opacity-0" />
                          <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/portal:opacity-100 bg-[linear-gradient(135deg,#4338CA,#0891B2)]" />
                          <span className="relative z-[1]">Open Portal</span>
                          <span className="relative z-[1] transition-transform duration-200 group-hover/portal:translate-x-1">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </ERPSurfaceCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <ERPSurfaceCard className="mt-8 overflow-hidden p-5 sm:p-6" animatedBorder hover={false} delay={0.2}>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.13em] text-indigo-600">Workflow</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Hostel admission journey</h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-500">
                Each step stays visible and easy to follow, with restrained motion to keep the process clear.
              </p>
            </div>

            <div className="mt-6 flex flex-col xl:flex-row xl:items-stretch">
              {workflow.map((item, index) => (
                <React.Fragment key={item.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -3 }}
                    className="group relative"
                  >
                    <div className="relative rounded-2xl border border-slate-200/85 bg-white/85 p-4 shadow-[0_20px_45px_-38px_rgba(15,23,42,0.5)] transition duration-300 group-hover:border-cyan-200 group-hover:shadow-[0_20px_45px_-30px_rgba(79,70,229,0.18)] xl:min-h-full xl:w-[10.5rem]">
                      <div className="flex items-center gap-4 xl:flex-col xl:items-start">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(79,70,229,0.12),rgba(6,182,212,0.18))] text-cyan-700">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                            Step {index + 1}
                          </p>
                          <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">{item.label}</p>
                        </div>
                      </div>
                      <motion.div
                        className="mt-4 h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(79,70,229,0.18),rgba(6,182,212,0.7),rgba(79,70,229,0.18))]"
                        initial={{ scaleX: 0.45, opacity: 0.5 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.06 + 0.12 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  </motion.div>

                  {index < workflow.length - 1 ? (
                    <div className="relative flex h-8 items-center justify-center xl:h-auto xl:flex-1">
                      <motion.div
                        className="h-full w-px rounded-full bg-[linear-gradient(180deg,rgba(79,70,229,0.08),rgba(6,182,212,0.6),rgba(79,70,229,0.08))] xl:h-px xl:w-full"
                        initial={{ scaleY: 0.2, scaleX: 0.2, opacity: 0.3 }}
                        whileInView={{ scaleY: 1, scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.06 + 0.16 }}
                        style={{ transformOrigin: 'center' }}
                      />
                      <motion.span
                        className="absolute flex h-5 w-5 items-center justify-center rounded-full border border-cyan-200 bg-white text-cyan-600 shadow-sm"
                        animate={{ y: [0, -1, 0], x: [0, 1, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
                      >
                        <ArrowRight className="h-3 w-3 rotate-90 xl:rotate-0" />
                      </motion.span>
                    </div>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </ERPSurfaceCard>
        </motion.div>
      </ERPPageTransition>
    </section>
  </>
);

export default ERPPortal;
