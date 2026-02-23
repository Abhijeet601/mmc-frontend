import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getPublicNotices, NOTICE_CATEGORIES } from '@/services/notifications';

/* ================= Scroll List ================= */
const ScrollList = ({ items, accent, emptyText }) => {
  if (!items.length) {
    return (
      <div className="relative h-64 overflow-hidden rounded-lg border border-dashed border-gray-300 bg-white/80 flex items-center justify-center text-sm text-gray-500">
        {emptyText}
      </div>
    );
  }

  // Slightly slow down as the number of cards grows.
  const duration = Math.max(items.length * 6, 20);
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative h-64 overflow-hidden notice-scroll-container">
      <div
        className="notice-scroll-track space-y-4"
        style={{ animationDuration: `${duration}s` }}
      >
        {duplicatedItems.map((item, index) => (
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
          noticeData.map((item) => ({
            title: item.title,
            link: item.link || item.fileUrl || '#',
          })),
        );

        setEvents(
          eventData.map((item) => ({
            title: item.title,
            link: item.link || item.fileUrl || '#',
          })),
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
    <section className="py-20 bg-[#F8FAFC]">
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
              accent="text-blue-700"
              emptyText={t('notices.noUpcomingEvents', 'No upcoming events right now.')}
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
