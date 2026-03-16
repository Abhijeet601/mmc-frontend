import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, Download, FileText, Link as LinkIcon } from 'lucide-react';
import { getPublicNotices, NOTICE_CATEGORIES } from '@/services/notifications';

const NOTICE_NOTE_TILT_CLASSES = [
  'board-note-tilt-a',
  'board-note-tilt-b',
  'board-note-tilt-c',
  'board-note-tilt-d',
  'board-note-tilt-e',
  'board-note-tilt-f',
];

const NOTICE_NOTE_ATTACHMENTS = ['pin', 'tape-left', 'tape-right', 'tape-both', 'pin', 'tape-left'];

const formatPublishDate = (value) => {
  if (!value) return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return '';
  return parsed.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const dedupeBoardItems = (items = []) => {
  const seen = new Set();
  const deduped = [];

  items.forEach((item) => {
    const key = [item?.title || '', item?.link || '', item?.fileUrl || ''].join('|').toLowerCase();
    if (!key || seen.has(key)) return;
    seen.add(key);
    deduped.push(item);
  });

  return deduped;
};

const mapNoticeItems = (items = []) =>
  dedupeBoardItems(
    items.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description || '',
      link: item.link || item.fileUrl || '#',
      fileUrl: item.fileUrl || '',
      publishDate: item.publishDate || item.createdAt || '',
    })),
  );

/* ================= Scroll List ================= */
const ScrollList = ({ items, accent, emptyText, variant = 'default' }) => {
  const isBoardVariant = variant === 'notice-board' || variant === 'event-board';
  const boardToneClass = variant === 'event-board' ? 'event-board-tone' : 'notice-board-tone';
  const boardTextClass = variant === 'event-board' ? 'text-[#1f466e]' : 'text-[#5a3a1d]';
  const noteToneClass = variant === 'event-board' ? 'board-note-event' : 'board-note-notice';
  const pinToneClass = variant === 'event-board' ? 'board-note-pin-event' : 'board-note-pin-notice';
  const tapeToneClass = variant === 'event-board' ? 'board-note-tape-event' : 'board-note-tape-notice';

  if (!items.length) {
    if (isBoardVariant) {
      return (
        <div className={`notice-board-shell ${boardToneClass}`}>
          <div className={`notice-board-surface h-64 rounded-xl px-6 text-center text-sm ${boardTextClass} flex items-center justify-center`}>
            {emptyText}
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-64 overflow-hidden rounded-lg border border-dashed border-gray-300 bg-white/80 flex items-center justify-center text-sm text-gray-500">
        {emptyText}
      </div>
    );
  }

  // Slightly slow down as the number of cards grows.
  const duration = Math.max(items.length * 6, 20);
  const shouldDuplicateForScroll = items.length > 1;
  const scrollItems = shouldDuplicateForScroll ? [...items, ...items] : items;

  if (isBoardVariant) {
    return (
      <div className={`notice-board-shell ${boardToneClass}`}>
        <div className="relative h-72 overflow-hidden notice-scroll-container notice-board-surface">
          <div
            className="notice-scroll-track notice-board-track space-y-5"
            style={{ animationDuration: `${duration}s` }}
          >
            {scrollItems.map((item, index) => {
              const tiltClass = NOTICE_NOTE_TILT_CLASSES[index % NOTICE_NOTE_TILT_CLASSES.length];
              const attachment = NOTICE_NOTE_ATTACHMENTS[index % NOTICE_NOTE_ATTACHMENTS.length];
              const hasLeftTape = attachment === 'tape-left' || attachment === 'tape-both';
              const hasRightTape = attachment === 'tape-right' || attachment === 'tape-both';
              const hasPin = attachment === 'pin';
              const publishedDate = formatPublishDate(item.publishDate);

              return (
                <a
                  key={index}
                  href={item.link || item.fileUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block notice-board-note-link"
                >
                  <div className={`board-note ${tiltClass} ${noteToneClass}`}>
                    {hasPin ? <span className={`board-note-pin ${pinToneClass}`} aria-hidden="true" /> : null}
                    {hasLeftTape ? <span className={`board-note-tape board-note-tape-left ${tapeToneClass}`} aria-hidden="true" /> : null}
                    {hasRightTape ? <span className={`board-note-tape board-note-tape-right ${tapeToneClass}`} aria-hidden="true" /> : null}

                    <p className={`font-serif font-medium ${accent} board-note-title`}>
                      {item.title || item.text}
                    </p>
                    {publishedDate ? <p className="board-note-date">Published: {publishedDate}</p> : null}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 overflow-hidden notice-scroll-container">
      <div
        className="notice-scroll-track space-y-4"
        style={{ animationDuration: `${duration}s` }}
      >
        {scrollItems.map((item, index) => (
          <a
            key={index}
            href={item.link || item.fileUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <p className={`font-serif font-medium ${accent}`}>
                {item.title || item.text}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

const UpdatePreviewCard = ({
  title,
  items,
  emptyText,
  buttonLabel,
  buttonTo,
  icon: Icon,
  iconClassName,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
  >
    <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClassName}`}>
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">
            {items.length ? `${items.length} latest updates` : 'No updates yet'}
          </p>
        </div>
      </div>

      <Link
        to={buttonTo}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
      >
        {buttonLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

    {items.length === 0 ? (
      <div className="px-6 py-12 text-center text-sm text-slate-500">{emptyText}</div>
    ) : (
      <div className="divide-y divide-slate-100">
        {items.map((item, index) => {
          const publishedDate = formatPublishDate(item.publishDate);
          const href = item.link || item.fileUrl || '';
          const hasFile = Boolean(item.fileUrl);

          return (
            <a
              key={item.id || `${item.title}-${index}`}
              href={href || '#'}
              target={href ? '_blank' : undefined}
              rel={href ? 'noopener noreferrer' : undefined}
              className={`block px-6 py-4 transition ${href ? 'hover:bg-slate-50' : 'pointer-events-none'}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-base font-semibold text-slate-900 line-clamp-2">
                    {item.title || item.text}
                  </p>
                  {item.description ? (
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{item.description}</p>
                  ) : null}
                  {publishedDate ? (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Published {publishedDate}
                    </p>
                  ) : null}
                </div>

                {href ? (
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600">
                    {hasFile ? <Download className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
                  </span>
                ) : null}
              </div>
            </a>
          );
        })}
      </div>
    )}
  </motion.div>
);

/* ================= Main Component ================= */
const NoticeAndEvents = () => {
  const { t } = useTranslation();
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadNotifications = async () => {
      try {
        const [noticeData, eventData, notificationData, tenderData] = await Promise.all([
          getPublicNotices({ publishTo: NOTICE_CATEGORIES.NOTICES, limit: 10 }),
          getPublicNotices({ publishTo: NOTICE_CATEGORIES.UPCOMING_EVENTS, limit: 10 }),
          getPublicNotices({ publishTo: NOTICE_CATEGORIES.NOTIFICATIONS, limit: 6 }),
          getPublicNotices({ publishTo: NOTICE_CATEGORIES.TENDERS, limit: 6 }),
        ]);

        if (!mounted) return;

        setNotices(mapNoticeItems(noticeData));
        setEvents(mapNoticeItems(eventData));
        setNotifications(mapNoticeItems(notificationData));
        setTenders(mapNoticeItems(tenderData));
      } catch (error) {
        console.error('Failed to load notice/event board:', error);
      }
    };

    loadNotifications();
    const interval = setInterval(loadNotifications, 30000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-12 md:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* NOTICE BOARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-primary inline-block pb-2">
              {t('notices.noticeBoard')}
            </h2>

            <ScrollList
              items={notices}
              accent="text-red-700"
              emptyText={t('notices.noNotices', 'No notices available right now.')}
              variant="notice-board"
            />

            <Link to="/notices" className="inline-block mt-6 text-sm font-semibold text-primary hover:underline">
              {t('notices.viewAllNotices')}
            </Link>
          </motion.div>

          {/* UPCOMING EVENTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-primary inline-block pb-2">
              {t('notices.upcomingEvents')}
            </h2>

            <ScrollList
              items={events}
              accent="text-red-700"
              emptyText={t('notices.noUpcomingEvents', 'No upcoming events right now.')}
              variant="event-board"
            />

            <Link to="/events" className="inline-block mt-6 text-sm font-semibold text-primary hover:underline">
              {t('notices.viewAllEvents')}
            </Link>
          </motion.div>

        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <UpdatePreviewCard
            title={t('nav.notifications')}
            items={notifications}
            emptyText={t('notices.noNotifications', 'No notifications available right now.')}
            buttonLabel={t('notices.viewAllNotifications', 'Show All Notifications')}
            buttonTo="/notifications"
            icon={Bell}
            iconClassName="bg-blue-100 text-blue-700"
          />

          <UpdatePreviewCard
            title={t('nav.tenders')}
            items={tenders}
            emptyText={t('notices.noTenders', 'No tenders available right now.')}
            buttonLabel={t('notices.viewAllTenders', 'Show All Tenders')}
            buttonTo="/tenders"
            icon={FileText}
            iconClassName="bg-amber-100 text-amber-700"
          />
        </div>
      </div>
    </section>
  );
};

export default NoticeAndEvents;
