import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import {
  BellRing,
  Building2,
  CreditCard,
  Download,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  MapPinned,
  ReceiptIndianRupee,
  RefreshCw,
  ShieldCheck,
  UserCircle2,
  WalletCards,
} from 'lucide-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import ERPButton from '@/components/erp/ERPButton';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import ERPStatusTracker from '@/components/erp/ERPStatusTracker';
import { toast } from '@/components/ui/use-toast';
import { useTheme } from '@/contexts/ThemeContext';
import ErpShell from '@/features/erp/ErpShell';
import { cn } from '@/lib/utils';
import {
  formatCurrency,
  formatDateTime,
  getStatusTone,
  statusLabel,
} from '@/features/erp/erp-utils';
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

const studentNavItems = [
  { to: '/erp/student/dashboard', label: 'Dashboard', caption: 'Status and alerts', icon: LayoutDashboard },
  { to: '/erp/student/application', label: 'Application', caption: 'Form and progress', icon: FileText },
  { to: '/erp/student/hostel-preference', label: 'Hostel Preference', caption: 'Preference and allocation', icon: MapPinned },
  { to: '/erp/student/payments', label: 'Payments', caption: 'Fees and receipts', icon: WalletCards },
  { to: '/erp/student/profile', label: 'Profile', caption: 'Personal and academic info', icon: UserCircle2 },
];

const sectionFrame = (theme) =>
  theme === 'dark'
    ? 'border-slate-800 bg-slate-950/82 text-slate-100'
    : 'border-white/70 bg-white/88 text-slate-900';

const mutedText = (theme) => (theme === 'dark' ? 'text-slate-400' : 'text-slate-500');
const inputClass = (theme) =>
  cn(
    'h-11 w-full rounded-2xl border px-4 text-sm outline-none transition focus:border-blue-300 focus:ring-4',
    theme === 'dark'
      ? 'border-slate-700 bg-slate-900 text-slate-100 focus:ring-blue-500/15'
      : 'border-slate-200 bg-white text-slate-900 focus:ring-blue-100'
  );

const SectionCard = ({ children, theme, className = '' }) => (
  <ERPSurfaceCard hover={false} className={cn('rounded-[32px] border p-5 sm:p-6', sectionFrame(theme), className)}>
    {children}
  </ERPSurfaceCard>
);

const StatusBadge = ({ value, theme }) => (
  <span className={cn('inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]', getStatusTone(value, theme))}>
    {statusLabel(value)}
  </span>
);

const MetricTile = ({ label, value, subtext, icon: Icon, theme }) => (
  <SectionCard theme={theme} className="p-5">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', mutedText(theme))}>{label}</p>
        <p className="mt-3 text-3xl font-semibold">{value}</p>
        {subtext ? <p className={cn('mt-2 text-sm', mutedText(theme))}>{subtext}</p> : null}
      </div>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,#1D4ED8,#0EA5E9)] text-white shadow-[0_22px_48px_-24px_rgba(37,99,235,0.55)]">
        <Icon className="h-5 w-5" />
      </span>
    </div>
  </SectionCard>
);

const ERPStudentWorkspace = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { theme: siteTheme } = useTheme();
  const [preferredHostel, setPreferredHostel] = useState('Vaidehi Hostel');
  const [applicationTxn, setApplicationTxn] = useState('');
  const [hostelTxn, setHostelTxn] = useState('');

  const theme = siteTheme === 'dark' ? 'dark' : 'light';
  const isAuthenticated = Boolean(getStudentToken());
  const applicationCompleted = getApplicationCompleted();
  const currentNav = studentNavItems.find((item) => location.pathname.startsWith(item.to)) || studentNavItems[0];

  const dashboardQuery = useQuery({
    queryKey: ['erp', 'student', 'dashboard'],
    queryFn: getStudentDashboard,
    enabled: isAuthenticated && applicationCompleted !== false,
  });

  const actionMutation = useMutation({
    mutationFn: async ({ request, successTitle }) => {
      const response = await request();
      return { response, successTitle };
    },
    onSuccess: async ({ response, successTitle }) => {
      toast({ title: successTitle, description: response?.message || 'Student dashboard updated.' });
      await queryClient.invalidateQueries({ queryKey: ['erp', 'student', 'dashboard'] });
    },
    onError: (error) => {
      toast({ title: 'Request failed', description: error.message || 'Please try again.', duration: 7000 });
    },
  });

  useEffect(() => {
    if (!isAuthenticated) navigate('/erp/student/login', { replace: true });
    if (applicationCompleted === false) navigate('/erp/application-form', { replace: true });
  }, [applicationCompleted, isAuthenticated, navigate]);

  useEffect(() => {
    if (dashboardQuery.error) {
      toast({
        title: 'Unable to load student workspace',
        description: dashboardQuery.error.message || 'Please sign in again.',
        duration: 7000,
      });
      clearStudentToken();
      navigate('/erp/student/login', { replace: true });
    }
  }, [dashboardQuery.error, navigate]);

  useEffect(() => {
    if (dashboardQuery.data?.preferred_hostel) {
      setPreferredHostel(dashboardQuery.data.preferred_hostel);
    }
  }, [dashboardQuery.data?.preferred_hostel]);

  if (!isAuthenticated) return <Navigate to="/erp/student/login" replace />;
  if (applicationCompleted === false) return <Navigate to="/erp/application-form" replace />;
  if (location.pathname === '/erp/student' || location.pathname === '/erp/student/') return <Navigate to="/erp/student/dashboard" replace />;

  const dashboard = dashboardQuery.data;
  const summary = dashboard?.summary || {};
  const receipts = [dashboard?.application_receipt, dashboard?.hostel_receipt].filter(Boolean);
  const applicationPaymentState = dashboard?.application_payment_status;
  const hostelPaymentState = dashboard?.hostel_status;
  const applicationAwaitingApproval =
    dashboard?.form_status === 'submitted' &&
    applicationPaymentState === 'pending' &&
    !dashboard?.can_pay_application_fee &&
    !dashboard?.application_receipt;
  const hostelAwaitingApproval =
    Boolean(dashboard?.allocated_hostel) &&
    hostelPaymentState === 'payment_pending' &&
    !dashboard?.can_pay_hostel_fee &&
    !dashboard?.hostel_receipt;

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricTile label="Application Status" value={statusLabel(dashboard?.application_status)} subtext={statusLabel(dashboard?.verification_status)} icon={ShieldCheck} theme={theme} />
        <MetricTile
          label="Application Fee"
          value={applicationPaymentState === 'paid' ? 'Paid' : applicationPaymentState === 'failed' ? 'Failed' : 'Pending'}
          subtext={applicationAwaitingApproval ? 'Waiting for admin approval' : formatCurrency(dashboard?.application_fee_amount)}
          icon={ReceiptIndianRupee}
          theme={theme}
        />
        <MetricTile label="Hostel Allocation" value={dashboard?.allocated_hostel || 'Pending'} subtext={dashboard?.room_number ? `${dashboard.hostel_block || '-'} / ${dashboard.room_number}` : 'Room assignment pending'} icon={Building2} theme={theme} />
        <MetricTile label="Notifications" value={String(dashboard?.notifications?.length || 0)} subtext={dashboard?.notifications?.[0]?.title || 'No new alerts'} icon={BellRing} theme={theme} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <SectionCard theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Lifecycle</p>
          <h3 className="mt-2 text-xl font-semibold">Application progress tracker</h3>
          <div className="mt-6">
            <ERPStatusTracker items={dashboard?.tracker || []} />
          </div>
        </SectionCard>
        <SectionCard theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Notifications</p>
          <h3 className="mt-2 text-xl font-semibold">Important updates</h3>
          <div className="mt-6 space-y-3">
            {(dashboard?.notifications || []).length ? (
              dashboard.notifications.map((item, index) => (
                <div key={`${item.title}-${index}`} className={cn('rounded-[24px] border p-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
                  <p className="font-semibold">{item.title}</p>
                  <p className={cn('mt-2 text-sm leading-6', mutedText(theme))}>{item.description}</p>
                  {item.created_at ? <p className={cn('mt-3 text-xs uppercase tracking-[0.18em]', mutedText(theme))}>{formatDateTime(item.created_at)}</p> : null}
                </div>
              ))
            ) : (
              <p className={cn('text-sm', mutedText(theme))}>No notifications available yet.</p>
            )}
          </div>
        </SectionCard>
      </div>
    </div>
  );

  const renderApplication = () => (
    <div className="grid gap-6 xl:grid-cols-[1fr,1fr]">
      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Application workspace</p>
        <h3 className="mt-2 text-xl font-semibold">Continue or review your hostel application</h3>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            ['Application number', dashboard?.application_number],
            ['Course', summary.course_name],
            ['Session', summary.session],
            ['Program', summary.program],
            ['Category', summary.category],
            ['Allotted category', dashboard?.allotted_category],
            ['Honours subject', summary.honours_subject],
          ].map(([label, value]) => (
            <div key={label} className={cn('rounded-[24px] border px-4 py-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
              <p className={cn('text-xs font-semibold uppercase tracking-[0.18em]', mutedText(theme))}>{label}</p>
              <p className="mt-2 text-sm font-semibold">{value || 'Pending'}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/erp/application-form">
            <ERPButton>
              <FileText className="h-4 w-4" />
              Open Application Form
            </ERPButton>
          </Link>
        </div>
      </SectionCard>
      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Checklist</p>
        <h3 className="mt-2 text-xl font-semibold">Submission readiness</h3>
        <div className="mt-6 space-y-3 text-sm">
          {[
            ['Application submitted', dashboard?.form_status === 'submitted'],
            ['Application fee paid', dashboard?.application_payment_status === 'paid'],
            ['Verified by admin', dashboard?.verification_status === 'verified'],
            ['Shortlisted for hostel', dashboard?.shortlist_status === 'shortlisted'],
          ].map(([label, complete]) => (
            <div key={label} className={cn('flex items-center justify-between rounded-[24px] border px-4 py-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
              <span>{label}</span>
              <StatusBadge value={complete ? 'verified' : 'pending'} theme={theme} />
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );

  const renderPreference = () => (
    <div className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Hostel preference</p>
        <h3 className="mt-2 text-xl font-semibold">Choose and monitor hostel assignment</h3>
        <div className="mt-6 space-y-4">
          <label className="block text-sm">
            <span className={mutedText(theme)}>Preferred hostel</span>
            <select className={inputClass(theme)} value={preferredHostel} onChange={(event) => setPreferredHostel(event.target.value)} disabled={!dashboard?.can_choose_hostel || Boolean(dashboard?.allocated_hostel)}>
              <option value="Vaidehi Hostel">Vaidehi Hostel</option>
              <option value="Mahima Hostel">Mahima Hostel</option>
            </select>
          </label>
          <ERPButton
            disabled={!dashboard?.can_choose_hostel || Boolean(dashboard?.allocated_hostel) || actionMutation.isPending}
            onClick={() =>
              actionMutation.mutate({
                request: () => saveHostelPreference(preferredHostel),
                successTitle: 'Preference saved',
              })
            }
          >
            <MapPinned className="h-4 w-4" />
            Save Hostel Preference
          </ERPButton>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              ['Preferred hostel', dashboard?.preferred_hostel],
              ['Allocated hostel', dashboard?.allocated_hostel],
              ['Block', dashboard?.hostel_block],
              ['Room / Bed', `${dashboard?.room_number || '-'} / ${dashboard?.bed_number || '-'}`],
            ].map(([label, value]) => (
              <div key={label} className={cn('rounded-[24px] border px-4 py-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
                <p className={cn('text-xs font-semibold uppercase tracking-[0.18em]', mutedText(theme))}>{label}</p>
                <p className="mt-2 text-sm font-semibold">{value || 'Pending'}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>
      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Allocation state</p>
        <h3 className="mt-2 text-xl font-semibold">Current hostel readiness</h3>
        <div className="mt-6 space-y-3">
          {[
            ['Shortlist status', dashboard?.shortlist_status],
            ['Hostel status', dashboard?.hostel_status],
            ['Can choose hostel', dashboard?.can_choose_hostel ? 'verified' : 'pending'],
            ['Can pay hostel fee', dashboard?.can_pay_hostel_fee ? 'verified' : 'pending'],
          ].map(([label, value]) => (
            <div key={label} className={cn('flex items-center justify-between rounded-[24px] border px-4 py-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
              <span>{label}</span>
              <StatusBadge value={value} theme={theme} />
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Application fee</p>
          <h3 className="mt-2 text-xl font-semibold">{formatCurrency(dashboard?.application_fee_amount)}</h3>
          <p className={cn('mt-2 text-sm', mutedText(theme))}>Status: {statusLabel(applicationPaymentState)}</p>
          <div className="mt-5 space-y-4">
            {dashboard?.application_receipt ? (
              <a
                href={resolveAssetUrl(dashboard.application_receipt.receipt_url)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                <Download className="h-4 w-4" />
                Download Receipt
              </a>
            ) : dashboard?.can_pay_application_fee ? (
              <>
                <input className={inputClass(theme)} placeholder="Optional transaction ID" value={applicationTxn} onChange={(event) => setApplicationTxn(event.target.value)} />
                <ERPButton
                  disabled={actionMutation.isPending}
                  onClick={() =>
                    actionMutation.mutate({
                      request: () => payApplicationFee({ transaction_id: applicationTxn.trim() || undefined }),
                      successTitle: applicationPaymentState === 'failed' ? 'Application fee resubmitted' : 'Application fee submitted',
                    })
                  }
                >
                  <CreditCard className="h-4 w-4" />
                  {applicationPaymentState === 'failed' ? 'Retry Application Fee' : 'Pay Application Fee'}
                </ERPButton>
              </>
            ) : (
              <ERPButton disabled>
                <CreditCard className="h-4 w-4" />
                {applicationAwaitingApproval ? 'Waiting for approval' : dashboard?.form_status === 'submitted' ? 'Not available' : 'Submit application first'}
              </ERPButton>
            )}
            {applicationPaymentState === 'failed' ? (
              <p className="text-sm text-rose-600">The last payment record was rejected. Submit it again for admin approval.</p>
            ) : null}
          </div>
        </SectionCard>

        <SectionCard theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Hostel fee</p>
          <h3 className="mt-2 text-xl font-semibold">{dashboard?.hostel_fee_amount ? formatCurrency(dashboard.hostel_fee_amount) : 'Awaiting allocation'}</h3>
          <p className={cn('mt-2 text-sm', mutedText(theme))}>Status: {statusLabel(hostelPaymentState)}</p>
          <div className="mt-5 space-y-4">
            {dashboard?.hostel_receipt ? (
              <a
                href={resolveAssetUrl(dashboard.hostel_receipt.receipt_url)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                <Download className="h-4 w-4" />
                Download Receipt
              </a>
            ) : dashboard?.can_pay_hostel_fee ? (
              <>
                <input className={inputClass(theme)} placeholder="Optional transaction ID" value={hostelTxn} onChange={(event) => setHostelTxn(event.target.value)} />
                <ERPButton
                  disabled={actionMutation.isPending}
                  onClick={() =>
                    actionMutation.mutate({
                      request: () => payHostelFee({ transaction_id: hostelTxn.trim() || undefined }),
                      successTitle: hostelPaymentState === 'payment_failed' ? 'Hostel fee resubmitted' : 'Hostel fee submitted',
                    })
                  }
                >
                  <WalletCards className="h-4 w-4" />
                  {hostelPaymentState === 'payment_failed' ? 'Retry Hostel Fee' : 'Pay Hostel Fee'}
                </ERPButton>
              </>
            ) : (
              <ERPButton disabled>
                <WalletCards className="h-4 w-4" />
                {hostelAwaitingApproval ? 'Waiting for approval' : dashboard?.allocated_hostel ? 'Not available' : 'Awaiting allocation'}
              </ERPButton>
            )}
            {hostelPaymentState === 'payment_failed' ? (
              <p className="text-sm text-rose-600">The last hostel payment record was rejected. Submit it again for admin approval.</p>
            ) : null}
          </div>
        </SectionCard>
      </div>

      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Receipts</p>
        <h3 className="mt-2 text-xl font-semibold">Payment history and downloads</h3>
        <div className="mt-6 space-y-3">
          {receipts.length ? (
            receipts.map((receipt) => (
              <a key={receipt.transaction_id} href={resolveAssetUrl(receipt.receipt_url)} target="_blank" rel="noreferrer" className={cn('flex items-center justify-between rounded-[24px] border px-4 py-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
                <div>
                  <p className="font-semibold">{statusLabel(receipt.payment_type)}</p>
                  <p className={cn('mt-1 text-sm', mutedText(theme))}>
                    {formatCurrency(receipt.amount)} / {receipt.transaction_id}
                  </p>
                  <p className={cn('mt-1 text-xs uppercase tracking-[0.18em]', mutedText(theme))}>
                    {formatDateTime(receipt.payment_date)}
                  </p>
                </div>
                <Download className="h-4 w-4" />
              </a>
            ))
          ) : (
            <p className={cn('text-sm', mutedText(theme))}>Receipts will appear here after successful payment.</p>
          )}
        </div>
      </SectionCard>
    </div>
  );

  const renderProfile = () => (
    <div className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Student profile</p>
        <h3 className="mt-2 text-xl font-semibold">{dashboard?.student_name || 'Student'}</h3>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            ['Email', dashboard?.email],
            ['Mobile', dashboard?.mobile_number],
            ['Course', summary.course_name],
            ['Session', summary.session],
            ['Program', summary.program],
            ['Category', summary.category],
            ['Allotted category', dashboard?.allotted_category],
            ['Father Name', summary.father_name],
            ['Preferred Hostel', dashboard?.preferred_hostel],
          ].map(([label, value]) => (
            <div key={label} className={cn('rounded-[24px] border px-4 py-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
              <p className={cn('text-xs font-semibold uppercase tracking-[0.18em]', mutedText(theme))}>{label}</p>
              <p className="mt-2 text-sm font-semibold">{value || 'Pending'}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Timeline</p>
        <h3 className="mt-2 text-xl font-semibold">Allocation and payment history</h3>
        <div className="mt-6">
          <ERPStatusTracker items={dashboard?.tracker || []} />
        </div>
      </SectionCard>
    </div>
  );

  const renderContent = () => {
    switch (currentNav.to) {
      case '/erp/student/dashboard':
        return renderDashboard();
      case '/erp/student/application':
        return renderApplication();
      case '/erp/student/hostel-preference':
        return renderPreference();
      case '/erp/student/payments':
        return renderPayments();
      case '/erp/student/profile':
        return renderProfile();
      default:
        return renderDashboard();
    }
  };

  return (
    <>
      <Helmet>
        <title>{currentNav.label} | Hostel ERP Student</title>
      </Helmet>
      <ErpShell
        brand={{
          href: '/erp',
          eyebrow: 'Hostel ERP',
          title: 'Student Workspace',
          description: 'Application tracking, hostel preference, payments, and profile in one student portal.',
          icon: Home,
        }}
        navItems={studentNavItems}
        theme={theme}
        title={currentNav.label}
        description={currentNav.caption}
        notificationCount={dashboard?.notifications?.length || 0}
        profile={{ label: dashboard?.student_name || 'Student', caption: dashboard?.application_number || 'Hostel application' }}
        actions={[
          {
            key: 'refresh',
            node: (
              <ERPButton variant="secondary" className="px-3 py-2 text-xs" onClick={() => queryClient.invalidateQueries({ queryKey: ['erp', 'student', 'dashboard'] })}>
                <RefreshCw className="h-3.5 w-3.5" />
                Refresh
              </ERPButton>
            ),
          },
          {
            key: 'logout',
            node: (
              <ERPButton
                variant="danger"
                className="px-3 py-2 text-xs"
                onClick={() => {
                  clearStudentToken();
                  queryClient.removeQueries({ queryKey: ['erp', 'student'] });
                  navigate('/erp/student/login', { replace: true });
                }}
              >
                <LogOut className="h-3.5 w-3.5" />
                Logout
              </ERPButton>
            ),
          },
        ]}
        footer={() => (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Student access</p>
            <p className="mt-2 font-semibold">Modern hostel ERP portal</p>
            <p className={cn('mt-2 text-xs leading-5', mutedText(theme))}>
              Responsive student workspace for application progress, allocation updates, and payment receipts.
            </p>
          </div>
        )}
      >
        {renderContent()}
      </ErpShell>
    </>
  );
};

export default ERPStudentWorkspace;
