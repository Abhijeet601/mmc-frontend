import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { getSlidingNotices } from '../services/notifications';

const SlidingNotice = () => {
  const { theme } = useTheme();
  const [notices, setNotices] = useState([]);

  /* Load notices */
  useEffect(() => {
    let mounted = true;

    const loadNotices = async () => {
      try {
        const data = await getSlidingNotices();
        if (mounted) {
          setNotices(data || []);
        }
      } catch (error) {
        console.error('Failed to load sliding notices:', error);
      }
    };

    loadNotices();
    const interval = setInterval(loadNotices, 30000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const bgClass =
    theme === 'blue'
      ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900'
      : 'bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900';

  const scrollDuration = Math.max(notices.length * 6, 20);
  const duplicatedNotices = [...notices, ...notices];

  return (
    <div
      className={`notice-horizontal-container relative w-full ${bgClass} py-2 text-xs overflow-hidden border-b-2 border-white/20 cursor-pointer`}
      style={{ zIndex: 40 }}
    >
      <div
        className="notice-horizontal-track flex whitespace-nowrap w-max"
        style={{ animationDuration: `${scrollDuration}s` }}
      >
        {duplicatedNotices.map((notice, index) => (
          <div
            key={index}
            className="flex items-center px-4 text-white font-bold mx-2 min-w-max"
          >
            <a
              href={notice.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <motion.span
                className="text-xs font-medium inline-block"
                whileHover={{ y: -1, x: 2 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {notice.text}
              </motion.span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingNotice;
