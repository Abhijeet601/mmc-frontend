import i18next from 'i18next';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  BellRing,
  CalendarRange,
  Camera,
  ExternalLink,
  GraduationCap,
  Home,
  Instagram,
  Megaphone,
  ScrollText,
  Users,
  Facebook,
  Youtube,
} from 'lucide-react';

import NoticeBoardPage from '@/components/NoticeBoardPage';
import { NOTICE_CATEGORIES } from '@/services/notifications';

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/magadhmahila',
    className: 'bg-blue-600 hover:bg-blue-700',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/magadh.mahila.college/',
    className: 'bg-pink-600 hover:bg-pink-700',
    icon: Instagram,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@magadh_mahila_college',
    className: 'bg-red-600 hover:bg-red-700',
    icon: Youtube,
  },
];

const feedCards = [
  {
    title: 'Latest Instagram Posts',
    description: 'Visual highlights from campus celebrations, student achievements, cultural programs, and outreach activities.',
    icon: Instagram,
    accent: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Latest YouTube Videos',
    description: 'Official college videos, stage programs, seminars, awareness drives, and curated institutional media updates.',
    icon: Youtube,
    accent: 'from-red-500 to-orange-500',
  },
  {
    title: 'College Event Announcements',
    description: 'Timely updates for lectures, workshops, festivals, competitions, ceremonies, and major institutional events.',
    icon: CalendarRange,
    accent: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Admission Notices',
    description: 'Admission-related alerts, important dates, document reminders, application windows, and orientation schedules.',
    icon: ScrollText,
    accent: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Hostel Events',
    description: 'Hostel activities, resident notices, cultural evenings, orientation updates, and community engagement moments.',
    icon: Home,
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Student Activities',
    description: 'Snapshots from societies, NCC, NSS, academic clubs, sports initiatives, and student-led participation across campus.',
    icon: Users,
    accent: 'from-amber-500 to-orange-500',
  },
];

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events - Magadh Mahila College</title>
        <meta
          name="description"
          content="Explore official social media updates, student activities, hostel events, admissions alerts, and upcoming events from Magadh Mahila College."
        />
      </Helmet>

      <div className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_52%,#f8fafc_100%)] px-4 pb-4 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_24px_70px_-36px_rgba(15,23,42,0.35)]"
          >
            <div className="bg-[linear-gradient(135deg,#0f172a,#1d4ed8,#0f766e)] px-6 py-10 text-white md:px-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100">
                  <Megaphone className="h-4 w-4" />
                  Official Event Desk
                </div>
                <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  Social media updates and college events
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-sky-50/90">
                  Follow official campus updates across social platforms and track college announcements, admission
                  notices, hostel activities, and student events from one professional public page.
                </p>
              </div>
            </div>

            <div className="px-6 py-8 md:px-10">
              <div className="flex gap-4 justify-center mb-10 flex-wrap">
                <a
                  href="https://www.facebook.com/magadhmahila"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 px-5 py-3 rounded-xl text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/magadh.mahila.college/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-pink-600 px-5 py-3 rounded-xl text-sm font-semibold text-white transition hover:bg-pink-700"
                >
                  Instagram
                </a>

                <a
                  href="https://www.youtube.com/@magadh_mahila_college"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-600 px-5 py-3 rounded-xl text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  YouTube
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className={`flex items-center justify-between rounded-[28px] ${item.className} px-5 py-5 text-white shadow-[0_20px_40px_-26px_rgba(15,23,42,0.4)] transition`}
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Official Link</p>
                        <p className="mt-2 text-xl font-bold">{item.label}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 px-5 py-6 md:px-7">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Professional Feed</p>
                    <h2 className="mt-2 text-2xl font-black text-slate-900">Automatic social media feed overview</h2>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                    <BellRing className="h-4 w-4 text-sky-600" />
                    Public Information Stream
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {feedCards.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white`}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-[28px] border border-dashed border-slate-300 bg-white px-5 py-5 text-sm text-slate-600">
                  Future-ready upgrade path includes Instagram embedded posts, YouTube embeds, direct image uploads,
                  event categories, live updates, gallery expansion, countdown timers, and notice board integration.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <NoticeBoardPage
        title={i18next.t('auto.upcoming_events_1poq4ou')}
        subtitle="Latest events and activities published by the administration"
        category={NOTICE_CATEGORIES.UPCOMING_EVENTS}
        emptyMessage="No upcoming events available right now."
        pageTitle="Events - Magadh Mahila College"
        metaDescription="Discover upcoming events and activities at Magadh Mahila College."
      />
    </>
  );
};

export default Events;
