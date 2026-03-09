import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  CreditCard,
  Download,
  FileText,
  Home,
  LogOut,
  MailCheck,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import ERPButton from '@/components/erp/ERPButton';
import ERPMetricCard from '@/components/erp/ERPMetricCard';
import ERPPageTransition from '@/components/erp/ERPPageTransition';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import ERPStatusTracker from '@/components/erp/ERPStatusTracker';
import { toast } from '@/components/ui/use-toast';
import {
  clearStudentToken,
  getApplicationCompleted,
  getStudentDashboard,
  getStudentToken,
  payApplicationFee,
  payHostelFee,
  resolveAssetUrl,
  saveHostelPreference,
} from '@/services/erpApi';

const inputClass =
  'mt-2 h-11 w-full rounded-2xl border border-white/60 bg-white/90 px-4 text-sm text-slate-900 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100';

const statusTone = {
  paid: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  verified: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  shortlisted: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  pending: 'border-amber-200 bg-amber-50 text-amber-700',
  payment_pending: 'border-amber-200 bg-amber-50 text-amber-700',
  awaiting_allocation: 'border-slate-200 bg-slate-100 text-slate-600',
  preference_pending: 'border-slate-200 bg-slate-100 text-slate-600',
  not_available: 'border-slate-200 bg-slate-100 text-slate-600',
};

const decorateTracker = (items = []) => {
  let currentAssigned = false;
  return items.map((item) => {
    if (item.state === 'completed') return item;
    if (!currentAssigned) {
      currentAssigned = true;
      return { ...item, state: 'current' };
    }
    return item;
  });
};

const receiptHref = (receipt) => (receipt?.receipt_url ? resolveAssetUrl(receipt.receipt_url) : '');

const summaryEntries = (summary = {}) => [
  ['Course', summary.course_name],
  ['Session', summary.session],
  ['Program', summary.program],
  ['Honours Subject', summary.honours_subject],
  ['Category', summary.category],
  ['Religion', summary.religion],
  ['Father Name', summary.father_name],
  ['Guardian Mobile', summary.guardian_mobile_number],
];

const ERPStudentDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [payingApplication, setPayingApplication] = useState(false);
  const [payingHostel, setPayingHostel] = useState(false);
  const [savingPreference, setSavingPreference] = useState(false);
  const [dashboard, setDashboard] = useState(null);
  const [applicationTxn, setApplicationTxn] = useState('');
  const [hostelTxn, setHostelTxn] = useState('');
  const [preferredHostel, setPreferredHostel] = useState('Vaidehi Hostel');
  const [flashMessage, setFlashMessage] = useState('');

  const tracker = useMemo(() => decorateTracker(dashboard?.tracker || []), [dashboard]);

  const loadDashboard = async () => {
    setLoading(true);
    try {
      const data = await getStudentDashboard();
      setDashboard(data);
      if (data?.preferred_hostel) setPreferredHostel(data.preferred_hostel);
      if (data?.form_status !== 'submitted') {
        navigate('/application-form', { replace: true });
      }
    } catch (error) {
      toast({
        title: 'Unable to load dashboard',
        description: error.message || 'Please login again.',
        duration: 7000,
      });
      clearStudentToken();
      navigate('/erp/student', { replace: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!getStudentToken()) {
      navigate('/erp/student', { replace: true });
      return;
    }
    if (getApplicationCompleted() === false) {
      navigate('/application-form', { replace: true });
      return;
    }
    void loadDashboard();
  }, [navigate]);

  const handleApplicationPayment = async () => {
    setPayingApplication(true);
    try {
      const data = await payApplicationFee({
        transaction_id: applicationTxn.trim() || undefined,
      });
      setFlashMessage(`Application fee recorded. Email status: ${data.email_status}.`);
      setApplicationTxn('');
      toast({
        title: 'Application fee successful',
        description: data.message || 'Receipt generated successfully.',
      });
      await loadDashboard();
    } catch (error) {
      toast({
        title: 'Application payment failed',
        description: error.message || 'Unable to record payment.',
        duration: 7000,
      });
    } finally {
      setPayingApplication(false);
    }
  };

  const handleHostelPayment = async () => {
    setPayingHostel(true);
    try {
      const data = await payHostelFee({
        transaction_id: hostelTxn.trim() || undefined,
      });
      setFlashMessage(`Hostel fee recorded. Email status: ${data.email_status}.`);
      setHostelTxn('');
      toast({
        title: 'Hostel payment successful',
        description: data.message || 'Final receipt generated successfully.',
      });
      await loadDashboard();
    } catch (error) {
      toast({
        title: 'Hostel payment failed',
        description: error.message || 'Unable to record hostel payment.',
        duration: 7000,
      });
    } finally {
      setPayingHostel(false);
    }
  };

  const handlePreferenceSave = async () => {
    setSavingPreference(true);
    try {
      const data = await saveHostelPreference(preferredHostel);
      toast({
        title: 'Preference saved',
        description: data.message || 'Hostel preference saved successfully.',
      });
      setFlashMessage('Hostel preference saved. Waiting for admin allocation.');
      await loadDashboard();
    } catch (error) {
      toast({
        title: 'Unable to save hostel preference',
        description: error.message || 'Please try again.',
        duration: 7000,
      });
    } finally {
      setSavingPreference(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Student Dashboard | Hostel ERP</title>
      </Helmet>

      <section className="erp-shell erp-radial-backdrop relative isolate overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl"
          animate={{ x: [0, 46, 0], y: [0, 34, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-300/16 blur-3xl"
          animate={{ x: [0, -44, 0], y: [0, 34, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        <ERPPageTransition className="relative z-10 mx-auto max-w-7xl space-y-6">
          <ERPSurfaceCard className="erp-glass-panel overflow-hidden p-7 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Student Dashboard
                </p>
                <h1 className="erp-display mt-4 text-4xl font-bold text-slate-950">
                  {dashboard?.student_name || 'Student'} hostel admission journey
                </h1>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Application number {dashboard?.application_number || '-'} with real-time verification, shortlist, and
                  payment tracking.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ERPButton variant="secondary" onClick={loadDashboard}>
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </ERPButton>
                <ERPButton variant="secondary" onClick={() => navigate('/application-form')}>
                  <FileText className="h-4 w-4" />
                  Application Form
                </ERPButton>
                <ERPButton
                  variant="danger"
                  onClick={() => {
                    clearStudentToken();
                    navigate('/erp/student', { replace: true });
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </ERPButton>
              </div>
            </div>

            {flashMessage ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50/90 px-5 py-4 text-sm text-emerald-900"
              >
                <div className="flex items-start gap-3">
                  <MailCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-semibold">Latest action completed</p>
                    <p className="mt-1">{flashMessage}</p>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </ERPSurfaceCard>

          {loading ? (
            <ERPSurfaceCard className="erp-glass-panel p-8">
              <p className="text-sm text-slate-500">Loading dashboard...</p>
            </ERPSurfaceCard>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <ERPMetricCard
                  title="Application Status"
                  value={dashboard?.application_status || '-'}
                  icon={ShieldCheck}
                  subtitle={dashboard?.verification_status || 'pending'}
                  delay={0.02}
                />
                <ERPMetricCard
                  title="Registration Fee"
                  value={dashboard?.application_payment_status === 'paid' ? 'Paid' : 'Pending'}
                  icon={CreditCard}
                  subtitle={`Amount ₹${dashboard?.application_fee_amount || 1000}`}
                  delay={0.08}
                />
                <ERPMetricCard
                  title="Shortlist Status"
                  value={dashboard?.shortlist_status || 'pending'}
                  icon={BadgeCheck}
                  subtitle={dashboard?.allocated_hostel || 'Hostel not allocated yet'}
                  delay={0.14}
                />
                <ERPMetricCard
                  title="Hostel Fee"
                  value={dashboard?.hostel_status || 'not_available'}
                  icon={Home}
                  subtitle={
                    dashboard?.hostel_fee_amount ? `Amount ₹${dashboard.hostel_fee_amount}` : 'Available after allocation'
                  }
                  delay={0.2}
                />
              </div>

              <ERPSurfaceCard className="erp-glass-panel p-6 sm:p-7">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Status Tracker</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">Application progress</h2>
                  </div>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                      statusTone[dashboard?.hostel_status] || statusTone.pending
                    }`}
                  >
                    {dashboard?.hostel_status?.replace(/_/g, ' ') || 'pending'}
                  </span>
                </div>
                <ERPStatusTracker items={tracker} />
              </ERPSurfaceCard>

              <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
                <div className="space-y-6">
                  <ERPSurfaceCard className="erp-glass-panel p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Registration Fee
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Application payment</h2>
                      </div>
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                          statusTone[dashboard?.application_payment_status] || statusTone.pending
                        }`}
                      >
                        {dashboard?.application_payment_status}
                      </span>
                    </div>

                    {dashboard?.application_payment_status === 'paid' ? (
                      <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50/80 p-5">
                        <p className="text-sm text-emerald-900">Application fee already paid.</p>
                        {dashboard?.application_receipt ? (
                          <a
                            href={receiptHref(dashboard.application_receipt)}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white"
                          >
                            <Download className="h-4 w-4" />
                            Download Receipt
                          </a>
                        ) : null}
                      </div>
                    ) : (
                      <div className="mt-5 grid gap-4 md:grid-cols-[1fr,auto]">
                        <label className="block text-sm font-medium text-slate-700">
                          Transaction ID
                          <span className="ml-2 text-xs uppercase tracking-[0.16em] text-slate-400">Optional for demo</span>
                          <input
                            className={inputClass}
                            value={applicationTxn}
                            onChange={(event) => setApplicationTxn(event.target.value)}
                            placeholder="Leave blank to auto-generate demo ID"
                          />
                        </label>
                        <div className="self-end">
                          <ERPButton disabled={payingApplication} onClick={handleApplicationPayment}>
                            <CreditCard className="h-4 w-4" />
                            {payingApplication ? 'Processing...' : `Pay ₹${dashboard?.application_fee_amount || 1000}`}
                          </ERPButton>
                        </div>
                      </div>
                    )}
                  </ERPSurfaceCard>

                  <ERPSurfaceCard className="erp-glass-panel p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Hostel Allocation</p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Preference, allocation, final payment</h2>
                      </div>
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                          statusTone[dashboard?.hostel_status] || statusTone.pending
                        }`}
                      >
                        {dashboard?.hostel_status?.replace(/_/g, ' ') || 'pending'}
                      </span>
                    </div>

                    {dashboard?.shortlist_status !== 'shortlisted' ? (
                      <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-100/80 p-5 text-sm text-slate-600">
                        Hostel preference and payment unlock after the shortlist is uploaded by admin.
                      </div>
                    ) : null}

                    {dashboard?.can_choose_hostel && !dashboard?.allocated_hostel ? (
                      <div className="mt-5 grid gap-4 md:grid-cols-[1fr,auto]">
                        <label className="block text-sm font-medium text-slate-700">
                          Preferred Hostel
                          <select
                            className={inputClass}
                            value={preferredHostel}
                            onChange={(event) => setPreferredHostel(event.target.value)}
                          >
                            <option value="Vaidehi Hostel">Vaidehi Hostel</option>
                            <option value="Mahima Hostel">Mahima Hostel</option>
                          </select>
                        </label>
                        <div className="self-end">
                          <ERPButton disabled={savingPreference} onClick={handlePreferenceSave}>
                            {savingPreference ? 'Saving...' : 'Save Preference'}
                          </ERPButton>
                        </div>
                      </div>
                    ) : null}

                    {dashboard?.allocated_hostel ? (
                      <div className="mt-5 rounded-3xl border border-cyan-200 bg-cyan-50/80 p-5">
                        <p className="text-sm text-cyan-900">
                          Allocated Hostel: <span className="font-semibold">{dashboard.allocated_hostel}</span>
                        </p>
                        <p className="mt-2 text-sm text-cyan-800">
                          Payable amount: <span className="font-semibold">₹{dashboard.hostel_fee_amount}</span>
                        </p>

                        {dashboard?.hostel_status === 'paid' ? (
                          <a
                            href={receiptHref(dashboard.hostel_receipt)}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-cyan-700 px-4 py-2.5 text-sm font-semibold text-white"
                          >
                            <Download className="h-4 w-4" />
                            Download Final Receipt
                          </a>
                        ) : (
                          <div className="mt-4 grid gap-4 md:grid-cols-[1fr,auto]">
                            <label className="block text-sm font-medium text-slate-700">
                              Transaction ID
                              <span className="ml-2 text-xs uppercase tracking-[0.16em] text-slate-400">Optional for demo</span>
                              <input
                                className={inputClass}
                                value={hostelTxn}
                                onChange={(event) => setHostelTxn(event.target.value)}
                                placeholder="Leave blank to auto-generate demo ID"
                              />
                            </label>
                            <div className="self-end">
                              <ERPButton disabled={payingHostel} onClick={handleHostelPayment}>
                                <CreditCard className="h-4 w-4" />
                                {payingHostel ? 'Processing...' : `Pay ₹${dashboard.hostel_fee_amount}`}
                              </ERPButton>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </ERPSurfaceCard>
                </div>

                <div className="space-y-6">
                  <ERPSurfaceCard className="erp-glass-panel p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Profile Snapshot</p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Submitted details</h2>
                      </div>
                      {dashboard?.photo_url ? (
                        <img
                          src={resolveAssetUrl(dashboard.photo_url)}
                          alt={dashboard.student_name || 'Student'}
                          className="h-20 w-16 rounded-3xl object-cover shadow-[0_18px_40px_-30px_rgba(15,23,42,0.5)]"
                        />
                      ) : null}
                    </div>

                    <div className="mt-5 space-y-3">
                      {summaryEntries(dashboard?.summary).map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm"
                        >
                          <span className="text-slate-500">{label}</span>
                          <span className="font-medium text-slate-900">{value || '-'}</span>
                        </div>
                      ))}
                    </div>
                  </ERPSurfaceCard>

                  <ERPSurfaceCard className="erp-glass-panel p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Receipts</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">Downloads</h2>
                    <div className="mt-5 space-y-3">
                      {dashboard?.application_receipt ? (
                        <a
                          href={receiptHref(dashboard.application_receipt)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-800"
                        >
                          Application Fee Receipt
                          <Download className="h-4 w-4 text-cyan-600" />
                        </a>
                      ) : null}
                      {dashboard?.hostel_receipt ? (
                        <a
                          href={receiptHref(dashboard.hostel_receipt)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-800"
                        >
                          Final Hostel Receipt
                          <Download className="h-4 w-4 text-cyan-600" />
                        </a>
                      ) : null}
                      {!dashboard?.application_receipt && !dashboard?.hostel_receipt ? (
                        <p className="rounded-2xl border border-slate-200 bg-slate-100/70 px-4 py-4 text-sm text-slate-500">
                          Receipts will appear here after payment completion.
                        </p>
                      ) : null}
                    </div>
                  </ERPSurfaceCard>
                </div>
              </div>
            </>
          )}

          <div className="text-sm text-slate-500">
            <Link to="/erp" className="inline-flex items-center gap-2 font-semibold text-cyan-700 underline">
              <Home className="h-4 w-4" />
              Back to ERP portal
            </Link>
          </div>
        </ERPPageTransition>
      </section>
    </>
  );
};

export default ERPStudentDashboard;
