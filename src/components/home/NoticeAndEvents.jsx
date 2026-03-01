import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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

/* ================= Main Component ================= */
const NoticeAndEvents = () => {
  const { t } = useTranslation();
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadNotifications = async () => {
      try {
        const [noticeData, eventData] = await Promise.all([
          getPublicNotices({ publishTo: NOTICE_CATEGORIES.NOTICES, limit: 10 }),
          getPublicNotices({ publishTo: NOTICE_CATEGORIES.UPCOMING_EVENTS, limit: 10 }),
        ]);

        if (!mounted) return;

        setNotices(
          dedupeBoardItems(
            noticeData.map((item) => ({
              title: item.title,
              link: item.link || item.fileUrl || '#',
              fileUrl: item.fileUrl || '',
              publishDate: item.publishDate || '',
            })),
          ),
        );

        setEvents(
          dedupeBoardItems(
            eventData.map((item) => ({
              title: item.title,
              link: item.link || item.fileUrl || '#',
              fileUrl: item.fileUrl || '',
              publishDate: item.publishDate || '',
            })),
          ),
        );
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
      </div>
    </section>
  );
};

export default NoticeAndEvents;
