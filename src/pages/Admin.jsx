import i18next from "i18next";
import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Edit, Eye, EyeOff, KeyRound, LayoutDashboard, LogOut, Plus, ShieldCheck, Sparkles, Trash2, User2 } from 'lucide-react';
import AdminNotificationForm from '@/components/AdminNotificationForm';
import { addNotification, clearAdminToken, deleteNotification, getNotifications, isAdminAuthenticated, loginAdmin, PUBLISH_TO_OPTIONS, updateNotification } from '@/services/notifications';
const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNotification, setEditingNotification] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const publishLabelMap = useMemo(() => PUBLISH_TO_OPTIONS.reduce((acc, option) => {
    acc[option.value] = option.label;
    return acc;
  }, {}), []);
  const loadNotifications = async () => {
    setLoading(true);
    try {
      const allNotifications = await getNotifications();
      setNotifications(allNotifications);
      setAuthError('');
    } catch (error) {
      console.error('Error loading notices:', error);
      const message = error?.message || 'Unable to load notices';
      if (message.toLowerCase().includes('invalid') || message.toLowerCase().includes('expired')) {
        clearAdminToken();
        setIsAuthenticated(false);
        setAuthError('Session expired. Please login again.');
      } else {
        setAuthError(message);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!isAdminAuthenticated()) return;
    setIsAuthenticated(true);
    loadNotifications();
  }, []);
  const handleLogin = async e => {
    e.preventDefault();
    setAuthError('');
    setLoading(true);
    try {
      await loginAdmin({
        username: username.trim(),
        password
      });
      setIsAuthenticated(true);
      setPassword('');
      setSuccessMessage('');
      await loadNotifications();
    } catch (error) {
      setAuthError(error?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    clearAdminToken();
    setIsAuthenticated(false);
    setUsername('admin');
    setPassword('');
    setNotifications([]);
    setShowForm(false);
    setEditingNotification(null);
    setSuccessMessage('');
  };
  const handleSaveNotification = async notificationData => {
    const isEdit = Boolean(editingNotification);
    setLoading(true);
    setSuccessMessage('');
    try {
      if (isEdit) {
        await updateNotification(editingNotification.id, notificationData);
      } else {
        await addNotification(notificationData);
      }
      await loadNotifications();
      setShowForm(false);
      setEditingNotification(null);
      setSuccessMessage(isEdit ? 'Notice updated successfully.' : 'Notice uploaded successfully.');
    } catch (error) {
      console.error('Error saving notice:', error);
      alert(error?.message || 'Error saving notice');
    } finally {
      setLoading(false);
    }
  };
  const handleEditNotification = notification => {
    setSuccessMessage('');
    setEditingNotification(notification);
    setShowForm(true);
  };
  const handleDeleteNotification = async id => {
    if (!window.confirm('Delete this notice?')) return;
    setSuccessMessage('');
    try {
      await deleteNotification(id);
      await loadNotifications();
      setSuccessMessage('Notice deleted successfully.');
    } catch (error) {
      console.error('Error deleting notice:', error);
      alert(error?.message || 'Unable to delete notice');
    }
  };
  const formatDate = dateString => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  if (!isAuthenticated) {
    return <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-amber-50">
        <Helmet>
          <title>{i18next.t("auto.admin_login_magadh_mahila_college_rlodrd")}</title>
        </Helmet>

        <motion.div aria-hidden="true" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
        <motion.div aria-hidden="true" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="pointer-events-none absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-6xl items-center gap-8 px-4 py-12 lg:grid-cols-2 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.45
        }} className="hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-[0_22px_60px_-28px_rgba(15,23,42,0.4)] backdrop-blur lg:block">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
              <ShieldCheck className="h-3.5 w-3.5" />{`
              ${i18next.t("auto.secure_admin_area_1li5cqy")}
            `}</div>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900">{`
              ${i18next.t("auto.notice_control_panel_1i4dp1q")}
            `}</h1>
            <p className="mt-3 max-w-md text-slate-600">{`
              ${i18next.t("auto.manage_notices_notifications_tenders_and_upcoming_events_1kukv9v")}
            `}</p>
            <div className="mt-8 space-y-3">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">{`
                ${i18next.t("auto.upload_file_attachments_and_publish_with_schedule_19ock66")}
              `}</div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">{`
                ${i18next.t("auto.pin_critical_notices_and_control_visibility_instantly_vznpmi")}
              `}</div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">{`
                ${i18next.t("auto.designed_for_fast_updates_during_admissions_and_121yi3l")}
              `}</div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4
        }} className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur">
              <div className="border-b border-slate-200 bg-gradient-to-r from-sky-50 via-white to-amber-50 px-6 py-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  <Sparkles className="h-3.5 w-3.5 text-sky-600" />{`
                  ${i18next.t("auto.admin_sign_in_6swgf2")}
                `}</div>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">{i18next.t("auto.welcome_back_1h9w0d0")}</h2>
                <p className="mt-1 text-sm text-slate-600">{i18next.t("auto.use_your_admin_credentials_to_access_notice_zlfxaw")}</p>
              </div>

              <form className="space-y-5 px-6 py-6" onSubmit={handleLogin}>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">{i18next.t("auto.username_52zi1f")}</label>
                  <div className="relative">
                    <User2 className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                    <input name="username" type="text" required className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100" placeholder={i18next.t("auto.username_52zi1f")} value={username} onChange={e => setUsername(e.target.value)} />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">{i18next.t("auto.password_1pd9l6i")}</label>
                  <div className="relative">
                    <KeyRound className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                    <input name="password" type={showPassword ? 'text' : 'password'} required className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-10 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100" placeholder={i18next.t("auto.password_1pd9l6i")} value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 transition hover:text-slate-600" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {authError && <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{authError}</div>}

                <motion.button whileHover={{
                y: -1,
                scale: 1.01
              }} whileTap={{
                scale: 0.99
              }} type="submit" disabled={loading} className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-4 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:from-sky-700 hover:to-blue-800 disabled:cursor-not-allowed disabled:opacity-60">
                  {loading ? 'Signing in...' : 'Login to Dashboard'}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50/40">
      <Helmet>
        <title>{i18next.t("auto.admin_dashboard_magadh_mahila_college_1qj4h9q")}</title>
      </Helmet>

      <div className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-6 py-6 text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.7)]">
            <motion.div aria-hidden="true" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />
            <motion.div aria-hidden="true" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.15
          }} className="pointer-events-none absolute -bottom-10 left-16 h-36 w-36 rounded-full bg-amber-300/20 blur-3xl" />

            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <LayoutDashboard className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-100">{i18next.t("auto.admin_workspace_1v4d9ov")}</p>
                  <h1 className="mt-1 text-2xl font-black tracking-tight">{i18next.t("auto.notice_dashboard_y0g6rf")}</h1>
                  <p className="mt-1 text-sm text-sky-100/90">{i18next.t("auto.create_schedule_and_manage_official_announcements_1szo3tf")}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <motion.button whileHover={{
                y: -1
              }} whileTap={{
                scale: 0.98
              }} onClick={() => {
                setSuccessMessage('');
                setShowForm(true);
                setEditingNotification(null);
              }} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow transition hover:bg-slate-100">
                  <Plus className="h-4 w-4" />{`
                  ${i18next.t("auto.add_notice_1mv4k0u")}
                `}</motion.button>
                <motion.button whileHover={{
                y: -1
              }} whileTap={{
                scale: 0.98
              }} onClick={handleLogout} className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">
                  <LogOut className="h-4 w-4" />{`
                  ${i18next.t("auto.logout_1c182un")}
                `}</motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {showForm ? <AdminNotificationForm notification={editingNotification} onSave={handleSaveNotification} onCancel={() => {
        setShowForm(false);
        setEditingNotification(null);
      }} /> : <div className="py-2">
            {successMessage && <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                {successMessage}
              </div>}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)]">
              {loading ? <div className="px-6 py-10 text-center text-slate-500">{i18next.t("auto.loading_1ooa6x9")}</div> : notifications.length === 0 ? <div className="px-6 py-10 text-center text-slate-500">{i18next.t("auto.no_notices_found_xpxstx")}</div> : <ul className="grid gap-4 p-4 md:p-6">
                  {notifications.map((notification, index) => <motion.li key={notification.id} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.03
            }} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center flex-wrap gap-2">
                            <p className="text-lg font-semibold text-slate-900 truncate">{notification.title}</p>
                            <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-800">
                              {publishLabelMap[notification.publish_to] || notification.publish_to}
                            </span>
                            {notification.pinned && <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">{`
                                ${i18next.t("auto.pinned_1jx2yl9")}
                              `}</span>}
                            {!notification.published && <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{`
                                ${i18next.t("auto.draft_3gnfc0")}
                              `}</span>}
                          </div>

                          {notification.description && <p className="mt-2 text-sm text-slate-600 line-clamp-2">{notification.description}</p>}

                          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <span>{`${i18next.t("auto.created_1x7mwsf")} `}{formatDate(notification.createdAt)}</span>
                            {notification.publishDate && <span>{`${i18next.t("auto.publish_date_1jiycia")} `}{formatDate(notification.publishDate)}</span>}
                            {notification.fileName && <span>{`${i18next.t("auto.file_3f1oah")} `}{notification.fileName}</span>}
                          </div>
                        </div>

                        <div className="ml-4 flex items-center gap-2">
                          <motion.button whileHover={{
                    y: -1
                  }} whileTap={{
                    scale: 0.95
                  }} onClick={() => handleEditNotification(notification)} className="rounded-lg p-2 text-sky-600 transition hover:bg-sky-50 hover:text-sky-900" title={i18next.t("auto.edit_yjfqt5")}>
                            <Edit className="h-4 w-4" />
                          </motion.button>
                          <motion.button whileHover={{
                    y: -1
                  }} whileTap={{
                    scale: 0.95
                  }} onClick={() => handleDeleteNotification(notification.id)} className="rounded-lg p-2 text-rose-600 transition hover:bg-rose-50 hover:text-rose-900" title={i18next.t("auto.delete_16wmut8")}>
                            <Trash2 className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.li>)}
                </ul>}
            </div>
            {authError && <p className="mt-4 text-sm text-rose-600">{authError}</p>}
          </div>}
      </div>
    </div>;
};
export default Admin;
