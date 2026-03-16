import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  BellRing, 
  Check, 
  X, 
  AlertCircle, 
  Info, 
  CheckCircle2,
  MessageSquare,
  Calendar
} from 'lucide-react';
import ERPSurfaceCard from './ERPSurfaceCard';

const notificationIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertCircle,
  message: MessageSquare,
};

const notificationColors = {
  info: 'from-blue-500/10 to-cyan-500/10 border-blue-200',
  success: 'from-emerald-500/10 to-cyan-500/10 border-emerald-200',
  warning: 'from-amber-500/10 to-orange-500/10 border-amber-200',
  message: 'from-violet-500/10 to-purple-500/10 border-violet-200',
};

const iconColors = {
  info: 'text-blue-600 bg-blue-100',
  success: 'text-emerald-600 bg-emerald-100',
  warning: 'text-amber-600 bg-amber-100',
  message: 'text-violet-600 bg-violet-100',
};

const ERPNotifications = ({ 
  notifications = [], 
  onMarkAsRead, 
  onMarkAllRead,
  maxDisplay = 5 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayedNotifications = notifications.slice(0, maxDisplay);
  const hasMore = notifications.length > maxDisplay;

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-IN');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="erp-bell relative rounded-xl border border-indigo-100 bg-white p-3 text-indigo-600 shadow-sm transition hover:shadow-md"
        aria-label="Notifications"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {unreadCount > 0 ? (
          <BellRing className="h-5 w-5" />
        ) : (
          <Bell className="h-5 w-5" />
        )}
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white px-1"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-3 z-50 w-80 sm:w-96"
          >
            <ERPSurfaceCard className="overflow-hidden p-0" hover={false}>
              <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-slate-500" />
                  <span className="text-sm font-semibold text-slate-900">Notifications</span>
                  {unreadCount > 0 && (
                    <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && onMarkAllRead && (
                  <button
                    onClick={onMarkAllRead}
                    className="text-xs font-medium text-cyan-600 hover:text-cyan-700"
                  >
                    Mark all read
                  </button>
                )}
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                {displayedNotifications.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Bell className="h-12 w-12 text-slate-300" />
                    <p className="mt-2 text-sm text-slate-500">No notifications yet</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {displayedNotifications.map((notification, index) => {
                      const Icon = notificationIcons[notification.type] || Info;
                      return (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`relative flex gap-3 p-4 transition-colors hover:bg-slate-50/80 ${!notification.read ? 'bg-blue-50/30' : ''}`}
                          onClick={() => onMarkAsRead?.(notification.id)}
                        >
                          {!notification.read && (
                            <span className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-500" />
                          )}
                          <div className={`shrink-0 flex h-10 w-10 items-center justify-center rounded-xl ${iconColors[notification.type] || iconColors.info}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-slate-900 truncate">
                              {notification.title}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500 line-clamp-2">
                              {notification.message}
                            </p>
                            <div className="mt-1.5 flex items-center gap-1 text-xs text-slate-400">
                              <Calendar className="h-3 w-3" />
                              {formatTime(notification.created_at)}
                            </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>

              {hasMore && (
                <div className="border-t border-slate-200/80 p-3 text-center">
                  <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700">
                    View all {notifications.length} notifications
                  </button>
                </div>
              )}
            </ERPSurfaceCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ERPNotifications;
