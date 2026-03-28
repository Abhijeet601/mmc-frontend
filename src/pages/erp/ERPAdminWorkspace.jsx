import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Activity,
  ArrowRight,
  BedDouble,
  BellRing,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  CreditCard,
  Download,
  Eye,
  FileStack,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  RefreshCw,
  Save,
  Settings,
  ShieldCheck,
  Trash2,
  Upload,
  UserCheck,
  Users2,
  WalletCards,
  XCircle,
} from 'lucide-react';

import ERPButton from '@/components/erp/ERPButton';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import ERPStatusTracker from '@/components/erp/ERPStatusTracker';
import { toast } from '@/components/ui/use-toast';
import { useTheme } from '@/contexts/ThemeContext';
import ErpBulkUploadWizard from '@/features/erp/ErpBulkUploadWizard';
import ErpDataTable from '@/features/erp/ErpDataTable';
import ErpHostelMap from '@/features/erp/ErpHostelMap';
import OldStudentBulkWorkflow from '@/features/erp/OldStudentBulkWorkflow';
import ErpShell from '@/features/erp/ErpShell';
import {
  HOSTEL_NAMES,
  buildActivityRows,
  createCsvBlob,
  formatCurrency,
  formatDateTime,
  formatNumber,
  getStatusTone,
  statusLabel,
} from '@/features/erp/erp-utils';
import { cn } from '@/lib/utils';
import {
  allocateHostel,
  approveAdminPayment,
  clearAdminToken,
  createAdminHostelRoom,
  createOldStudent,
  deleteAdminStudent,
  deleteOldStudent,
  downloadAllocationTemplate,
  downloadShortlistTemplate,
  downloadStudentsExcel,
  getAdminActivityLogs,
  getAdminDashboard,
  getAdminHostelRooms,
  getAdminPayments,
  getAdminStudentDetail,
  getAdminStudents,
  getAdminToken,
  getOldStudents,
  loginAdmin,
  rejectAdminPayment,
  resolveAssetUrl,
  toggleShortlistStudent,
  updateAdminHostelRoom,
  updateOldStudent,
  uploadBulkAllocation,
  uploadBulkShortlist,
  verifyStudentApplication,
} from '@/services/erpApi';

const adminNavItems = [
  { to: '/erp/admin/dashboard', label: 'Dashboard', caption: 'Operations overview', icon: LayoutDashboard },
  { to: '/erp/admin/students', label: 'Students', caption: 'Admissions pipeline', icon: Users2 },
  { to: '/erp/admin/old-students', label: 'Old Students', caption: 'Historic records', icon: BookOpenCheck },
  { to: '/erp/admin/hostel-management', label: 'Hostel Management', caption: 'Rooms and bed stock', icon: Building2 },
  { to: '/erp/admin/room-allocation', label: 'Room Allocation', caption: 'Manual + live capacity', icon: BedDouble },
  { to: '/erp/admin/bulk-operations', label: 'Bulk Operations', caption: 'Excel import center', icon: Upload },
  { to: '/erp/admin/payments', label: 'Payments', caption: 'Receipts and logs', icon: WalletCards },
  { to: '/erp/admin/reports', label: 'Reports', caption: 'Analytics exports', icon: FileStack },
  { to: '/erp/admin/activity-logs', label: 'Activity Logs', caption: 'Admin audit trail', icon: Activity },
  { to: '/erp/admin/settings', label: 'Settings', caption: 'Tenant controls', icon: Settings },
];

const initialRoomForm = {
  hostel_name: HOSTEL_NAMES[0],
  block_name: 'A',
  room_number: '',
  bed_capacity: 3,
  is_active: true,
  notes: '',
};

const initialStudentFilters = {
  course: '',
  category: '',
  session: '',
  program: '',
  shortlist: '',
  verified: '',
  hostel_state: '',
};

const initialOldStudentFilters = {
  hostel_name: '',
  status: '',
};

const initialOldStudentForm = {
  hostel_id: '',
  student_name: '',
  admission_id: '',
  roll_number: '',
  course_name: '',
  session: '',
  mobile_number: '',
  email: '',
  category: '',
  hostel_name: '',
  block_name: '',
  room_number: '',
  bed_number: '',
  old_student_status: 'ACTIVE',
};

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
const textareaClass = (theme) =>
  cn(
    'min-h-[110px] w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-300 focus:ring-4',
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

const MetricTile = ({ label, value, subtext, icon: Icon, theme, accent = 'from-blue-600 to-cyan-500' }) => (
  <SectionCard theme={theme} className="p-5">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', mutedText(theme))}>{label}</p>
        <p className="mt-3 text-3xl font-semibold">{value}</p>
        {subtext ? <p className={cn('mt-2 text-sm', mutedText(theme))}>{subtext}</p> : null}
      </div>
      <span className={cn('inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br text-white shadow-[0_22px_48px_-24px_rgba(37,99,235,0.55)]', accent)}>
        <Icon className="h-5 w-5" />
      </span>
    </div>
  </SectionCard>
);

const BarChartCard = ({ title, items, theme }) => (
  <SectionCard theme={theme}>
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Analytics</p>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      </div>
      <span className={cn('text-xs uppercase tracking-[0.18em]', mutedText(theme))}>{items.length} buckets</span>
    </div>

    <div className="mt-6 space-y-4">
      {items.length ? (
        items.map((item) => {
          const maxValue = Math.max(...items.map((entry) => entry.value || 0), 1);
          const width = `${Math.max(10, Math.round(((item.value || 0) / maxValue) * 100))}%`;
          return (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-medium">{item.label}</span>
                <span className={mutedText(theme)}>{formatNumber(item.value)}</span>
              </div>
              <div className={cn('h-3 rounded-full', theme === 'dark' ? 'bg-slate-900' : 'bg-slate-100')}>
                <div className="h-3 rounded-full bg-[linear-gradient(90deg,#2563EB,#38BDF8)]" style={{ width }} />
              </div>
            </div>
          );
        })
      ) : (
        <p className={cn('text-sm', mutedText(theme))}>No chart data available.</p>
      )}
    </div>
  </SectionCard>
);

const InfoGrid = ({ items, theme }) => (
  <div className="grid gap-3 md:grid-cols-2">
    {items.map(([label, value]) => (
      <div key={label} className={cn('rounded-[24px] border px-4 py-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
        <p className={cn('text-xs font-semibold uppercase tracking-[0.18em]', mutedText(theme))}>{label}</p>
        <p className="mt-2 break-words text-sm font-semibold">{value || 'Pending'}</p>
      </div>
    ))}
  </div>
);

const triggerBlobDownload = (blob, filename) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};

const formatLogDescription = (item) => {
  const nextValues = String(item?.new_values || '').trim();
  const previousValues = String(item?.old_values || '').trim();
  const details = nextValues || previousValues;

  if (details) return details;
  if (item?.entity_id) return `${statusLabel(item.entity_type)} ${item.entity_id}`;
  return `${statusLabel(item.action)} ${statusLabel(item.entity_type)}`;
};

const ReceiptPanel = ({ title, receipt, theme }) => (
  <div className={cn('rounded-[24px] border p-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className={cn('mt-1 text-sm', mutedText(theme))}>
          {receipt ? 'Receipt generated by the backend.' : 'Receipt not available yet.'}
        </p>
      </div>
      {receipt?.receipt_url ? (
        <a
          href={resolveAssetUrl(receipt.receipt_url)}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-semibold',
            theme === 'dark' ? 'border-slate-700 bg-slate-950 text-slate-100' : 'border-slate-200 bg-white text-slate-700'
          )}
        >
          <Download className="h-4 w-4" />
          Open receipt
        </a>
      ) : null}
    </div>

    <div className="mt-4 grid gap-3 md:grid-cols-2">
      {[
        ['Amount', receipt ? formatCurrency(receipt.amount) : 'Pending'],
        ['Transaction ID', receipt?.transaction_id || 'Pending'],
        ['Payment date', formatDateTime(receipt?.payment_date)],
        ['Payment type', statusLabel(receipt?.payment_type)],
      ].map(([label, value]) => (
        <div key={label} className={cn('rounded-[20px] border px-4 py-3', theme === 'dark' ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-white')}>
          <p className={cn('text-xs font-semibold uppercase tracking-[0.18em]', mutedText(theme))}>{label}</p>
          <p className="mt-2 text-sm font-semibold">{value}</p>
        </div>
      ))}
    </div>
  </div>
);

const StudentDetailDrawer = ({ detail, loading, onClose, theme }) => {
  if (!detail && !loading) return null;

  return (
    <div className="fixed inset-0 z-[95] bg-slate-950/40 backdrop-blur-sm">
      <div className="ml-auto h-full w-full max-w-3xl overflow-y-auto border-l border-white/10 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.7)] dark:bg-slate-950">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">Student Profile</p>
            <h3 className="mt-2 text-2xl font-semibold">{detail?.student_name || 'Loading profile'}</h3>
            <p className={cn('mt-2 text-sm', mutedText(theme))}>{detail?.application_number || 'Preparing student detail view'}</p>
          </div>
          <button type="button" onClick={onClose} className={cn('rounded-2xl border px-3 py-2 text-sm font-semibold', theme === 'dark' ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white')}>
            Close
          </button>
        </div>

        {loading && !detail ? (
          <div className={cn('mt-6 rounded-[28px] border p-6 text-sm', sectionFrame(theme))}>Loading student details...</div>
        ) : detail ? (
          <div className="mt-6 space-y-6">
            <SectionCard theme={theme}>
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge value={detail.verification_status} theme={theme} />
                <StatusBadge value={detail.application_payment_status} theme={theme} />
                <StatusBadge value={detail.shortlist_status} theme={theme} />
                <StatusBadge value={detail.hostel_status} theme={theme} />
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <InfoGrid
                  theme={theme}
                  items={[
                    ['Course', detail.summary?.course_name],
                    ['Session', detail.summary?.session],
                    ['Program', detail.summary?.program],
                    ['Allotted Hostel', detail.allocated_hostel],
                    ['Room / Bed', `${detail.room_number || '-'} / ${detail.bed_number || '-'}`],
                    ['Registered On', formatDateTime(detail.registered_at)],
                  ]}
                />
              </div>
            </SectionCard>

            <SectionCard theme={theme}>
              <p className="text-sm font-semibold">Lifecycle timeline</p>
              <div className="mt-4">
                <ERPStatusTracker items={detail.tracker || []} />
              </div>
            </SectionCard>

            <SectionCard theme={theme}>
              <p className="text-sm font-semibold">Profile summary</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ['Email', detail.email],
                  ['Mobile', detail.mobile_number],
                  ['Category', detail.summary?.category],
                  ['Honours Subject', detail.summary?.honours_subject],
                  ['Father Name', detail.summary?.father_name],
                  ['Guardian Mobile', detail.summary?.guardian_mobile_number],
                  ['Address', detail.summary?.correspondence_address],
                  ['Academic Record', `${detail.summary?.intermediate_board || '-'} / ${detail.summary?.aggregate_percentage || '-'}%`],
                ].map(([label, value]) => (
                  <div key={label} className={cn('rounded-[24px] border px-4 py-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
                    <p className={cn('text-xs font-semibold uppercase tracking-[0.18em]', mutedText(theme))}>{label}</p>
                    <p className="mt-2 text-sm font-semibold">{value || 'Pending'}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard theme={theme}>
              <p className="text-sm font-semibold">Receipts and finance trail</p>
              <div className="mt-4 grid gap-4">
                <ReceiptPanel title="Application Fee Receipt" receipt={detail.application_receipt} theme={theme} />
                <ReceiptPanel title="Hostel Fee Receipt" receipt={detail.hostel_receipt} theme={theme} />
              </div>
            </SectionCard>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const AdminLoginScreen = ({ loginForm, setLoginForm, onSubmit, loading }) => (
  <div className="erp-shell mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10">
    <Helmet>
      <title>Admin Login | Hostel ERP</title>
    </Helmet>
    <div className="grid w-full gap-8 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="rounded-[40px] border border-white/60 bg-white/88 p-8 shadow-[0_30px_80px_-38px_rgba(15,23,42,0.32)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">University Operations</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Premium hostel administration workspace</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Manage 5000+ students, room allocation, bulk imports, payment operations, and hostel analytics from one
          modern control surface.
        </p>
      </div>

      <form onSubmit={onSubmit} className="rounded-[40px] border border-white/60 bg-white/88 p-8 shadow-[0_30px_80px_-38px_rgba(15,23,42,0.32)]">
        <div className="erp-brand-gradient inline-flex h-14 w-14 items-center justify-center rounded-3xl shadow-[var(--shadow-card-hover)]">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold text-slate-950">Sign in to admin workspace</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Authorized staff only. Credentials are validated against the FastAPI admin auth flow.</p>

        <div className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Username</span>
            <input className={inputClass('light')} value={loginForm.username} onChange={(event) => setLoginForm((current) => ({ ...current, username: event.target.value }))} required />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Password</span>
            <input type="password" className={inputClass('light')} value={loginForm.password} onChange={(event) => setLoginForm((current) => ({ ...current, password: event.target.value }))} required />
          </label>
        </div>

        <ERPButton type="submit" className="mt-6 h-12 w-full justify-center" disabled={loading}>
          {loading ? 'Signing in...' : 'Open Admin Workspace'}
          <ArrowRight className="h-4 w-4" />
        </ERPButton>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">Default local demo: admin / admin123</p>
      </form>
    </div>
  </div>
);

const ERPAdminWorkspace = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { theme: siteTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearch = useDeferredValue(searchTerm);
  const [studentFilters, setStudentFilters] = useState(initialStudentFilters);
  const [oldStudentFilters, setOldStudentFilters] = useState(initialOldStudentFilters);
  const [roomForm, setRoomForm] = useState(initialRoomForm);
  const [editingRoomId, setEditingRoomId] = useState(null);
  const [oldStudentForm, setOldStudentForm] = useState(initialOldStudentForm);
  const [editingOldStudentId, setEditingOldStudentId] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [allocationDraft, setAllocationDraft] = useState({ studentId: '', bed_number: '' });
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [reportWindow, setReportWindow] = useState('30');
  const [logActorFilter, setLogActorFilter] = useState('');
  const [logActionFilter, setLogActionFilter] = useState('');
  const [loginForm, setLoginForm] = useState({ username: 'admin', password: '' });
  const [bulkShortlistHostel, setBulkShortlistHostel] = useState('');
  const [bulkAllocationHostel, setBulkAllocationHostel] = useState('');

  const currentPath = location.pathname;
  const theme = siteTheme === 'dark' ? 'dark' : 'light';
  const isAuthenticated = Boolean(getAdminToken());
  const isLoginRoute = currentPath === '/erp/admin/login';
  const currentNav = adminNavItems.find((item) => currentPath.startsWith(item.to)) || adminNavItems[0];

  const dashboardQuery = useQuery({
    queryKey: ['erp', 'admin', 'dashboard'],
    queryFn: getAdminDashboard,
    enabled: isAuthenticated,
  });

  const studentsQuery = useQuery({
    queryKey: ['erp', 'admin', 'students', deferredSearch, studentFilters],
    queryFn: () =>
      getAdminStudents({
        search: deferredSearch,
        ...studentFilters,
        limit: 500,
        offset: 0,
      }),
    enabled: isAuthenticated,
  });

  const roomsQuery = useQuery({
    queryKey: ['erp', 'admin', 'rooms'],
    queryFn: getAdminHostelRooms,
    enabled: isAuthenticated,
    refetchInterval: 30000,
  });

  const oldStudentsQuery = useQuery({
    queryKey: ['erp', 'admin', 'old-students', deferredSearch, oldStudentFilters],
    queryFn: () =>
      getOldStudents({
        search: deferredSearch,
        ...oldStudentFilters,
        limit: 500,
        offset: 0,
      }),
    enabled: isAuthenticated,
  });

  const activityLogsQuery = useQuery({
    queryKey: ['erp', 'admin', 'activity-logs'],
    queryFn: () => getAdminActivityLogs({ limit: 500, offset: 0 }),
    enabled: isAuthenticated,
    refetchInterval: 30000,
  });

  const studentDetailQuery = useQuery({
    queryKey: ['erp', 'admin', 'student', selectedStudentId],
    queryFn: () => getAdminStudentDetail(selectedStudentId),
    enabled: isAuthenticated && Boolean(selectedStudentId),
  });

  const paymentsQuery = useQuery({
    queryKey: ['erp', 'admin', 'payments'],
    queryFn: getAdminPayments,
    enabled: isAuthenticated,
    refetchInterval: 30000,
  });

  const invalidateAdminQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ['erp', 'admin', 'dashboard'] }),
      queryClient.invalidateQueries({ queryKey: ['erp', 'admin', 'students'] }),
      queryClient.invalidateQueries({ queryKey: ['erp', 'admin', 'payments'] }),
      queryClient.invalidateQueries({ queryKey: ['erp', 'admin', 'rooms'] }),
      queryClient.invalidateQueries({ queryKey: ['erp', 'admin', 'old-students'] }),
      queryClient.invalidateQueries({ queryKey: ['erp', 'admin', 'activity-logs'] }),
    ]);
  };

  const loginMutation = useMutation({
    mutationFn: loginAdmin,
    onSuccess: async () => {
      await invalidateAdminQueries();
      navigate('/erp/admin/dashboard', { replace: true });
    },
    onError: (error) => {
      toast({ title: 'Login failed', description: error.message || 'Invalid admin credentials.', duration: 7000 });
    },
  });

  const actionMutation = useMutation({
    mutationFn: async ({ request, successMessage }) => {
      await request();
      return successMessage;
    },
    onSuccess: async (message) => {
      toast({ title: 'Action completed', description: message });
      await invalidateAdminQueries();
    },
    onError: (error) => {
      toast({ title: 'Action failed', description: error.message || 'Unable to complete the request.', duration: 7000 });
    },
  });

  if (!isAuthenticated && !isLoginRoute) {
    return <Navigate to="/erp/admin/login" replace />;
  }

  if (isAuthenticated && isLoginRoute) {
    return <Navigate to="/erp/admin/dashboard" replace />;
  }

  if (!isAuthenticated) {
    return (
      <AdminLoginScreen
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        loading={loginMutation.isPending}
        onSubmit={(event) => {
          event.preventDefault();
          loginMutation.mutate(loginForm);
        }}
      />
    );
  }

  const dashboard = dashboardQuery.data;
  const students = studentsQuery.data?.items || [];
  const rooms = roomsQuery.data?.items || [];
  const oldStudents = oldStudentsQuery.data?.items || [];
  const detail = studentDetailQuery.data;
  const paymentRows = paymentsQuery.data?.items || [];

  const selectedRoom = rooms.find((room) => room.id === selectedRoomId) || null;
  const allocationQueue = students.filter((student) => student.shortlist_status === 'shortlisted' && !student.allocated_hostel);
  const pendingPaymentRows = paymentRows.filter((payment) => payment.status === 'pending');
  const approvedPaymentRows = paymentRows.filter((payment) => payment.status === 'success');
  const rejectedPaymentRows = paymentRows.filter((payment) => payment.status === 'failed');
  const roomCapacityTotal = (dashboard?.occupied_beds || 0) + (dashboard?.available_beds || 0);
  const occupancyRate = roomCapacityTotal ? `${Math.round(((dashboard?.occupied_beds || 0) / roomCapacityTotal) * 100)}%` : '0%';
  const apiActivityRows =
    activityLogsQuery.data?.items?.map((item) => ({
      id: item.id,
      title: `${statusLabel(item.action)} ${statusLabel(item.entity_type)}`,
      description: formatLogDescription(item),
      action_type: item.action,
      actor: item.admin_id ? `Admin ${item.admin_id}` : 'System',
      timestamp: item.created_at,
      entity_type: item.entity_type,
      entity_id: item.entity_id,
    })) || [];
  const activityRows = apiActivityRows.length ? apiActivityRows : buildActivityRows(dashboard, students);
  const activeCourseOptions = Array.from(new Set(students.map((item) => item.course_name).filter(Boolean))).sort();
  const activeSessionOptions = Array.from(new Set(students.map((item) => item.session).filter(Boolean))).sort();
  const activeCategoryOptions = Array.from(new Set(students.map((item) => item.category).filter(Boolean))).sort();
  const activeProgramOptions = Array.from(new Set(students.map((item) => item.program).filter(Boolean))).sort();

  const filteredLogs = activityRows.filter((item) => {
    const withinWindow = reportWindow === 'all' || new Date(item.timestamp).getTime() >= Date.now() - Number(reportWindow) * 24 * 60 * 60 * 1000;
    const actorMatch = !logActorFilter || item.actor === logActorFilter;
    const actionMatch = !logActionFilter || item.action_type === logActionFilter;
    const searchMatch = !deferredSearch || `${item.title} ${item.description}`.toLowerCase().includes(deferredSearch.toLowerCase());
    return withinWindow && actorMatch && actionMatch && searchMatch;
  });

  const studentColumns = [
    {
      accessorKey: 'name',
      header: 'Student',
      cell: ({ row }) => (
        <div>
          <p className="font-semibold">{row.original.name || 'Unnamed applicant'}</p>
          <p className={cn('mt-1 text-xs', mutedText(theme))}>{row.original.application_number}</p>
        </div>
      ),
    },
    {
      accessorKey: 'course_name',
      header: 'Academic',
      cell: ({ row }) => (
        <div>
          <p>{row.original.course_name || 'Course pending'}</p>
          <p className={cn('mt-1 text-xs', mutedText(theme))}>{row.original.session || 'Session pending'} / {row.original.program || 'Program pending'}</p>
        </div>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-2">
          <StatusBadge value={row.original.verification_status} theme={theme} />
          <StatusBadge value={row.original.shortlist_status} theme={theme} />
          <StatusBadge value={row.original.hostel_status} theme={theme} />
        </div>
      ),
    },
    {
      accessorKey: 'allocated_hostel',
      header: 'Allocation',
      cell: ({ row }) => (
        <div>
          <p className="font-medium">{row.original.allocated_hostel || row.original.preferred_hostel || 'Awaiting allocation'}</p>
          <p className={cn('mt-1 text-xs', mutedText(theme))}>
            {row.original.hostel_block && row.original.room_number
              ? `${row.original.hostel_block} / ${row.original.room_number}${row.original.bed_number ? ` / ${row.original.bed_number}` : ''}`
              : row.original.preferred_hostel
                ? 'Preference saved'
                : 'No room assigned'}
          </p>
        </div>
      ),
    },
    {
      accessorKey: 'application_payment_status',
      header: 'Payments',
      cell: ({ row }) => (
        <div className="space-y-2">
          <StatusBadge value={row.original.application_payment_status} theme={theme} />
          <StatusBadge value={row.original.hostel_status === 'paid' ? 'paid' : row.original.hostel_status} theme={theme} />
        </div>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      enableSorting: false,
      cell: ({ row }) => {
        const isVerified = row.original.verification_status === 'verified';
        const isShortlisted = row.original.shortlist_status === 'shortlisted';

        return (
        <div className="flex flex-wrap gap-2">
          <ERPButton variant="secondary" className="px-3 py-2 text-xs" onClick={() => setSelectedStudentId(row.original.id)}>
            <Eye className="h-3.5 w-3.5" />
            View
          </ERPButton>
          <ERPButton
            variant="secondary"
            className="px-3 py-2 text-xs"
            onClick={() =>
              actionMutation.mutate({
                request: () => verifyStudentApplication(row.original.id, !isVerified),
                successMessage: isVerified ? 'Student moved back to pending verification.' : 'Student application verified.',
              })
            }
          >
            <UserCheck className="h-3.5 w-3.5" />
            {isVerified ? 'Mark Pending' : 'Verify'}
          </ERPButton>
          <ERPButton
            variant={isShortlisted ? 'secondary' : 'primary'}
            className="px-3 py-2 text-xs"
            onClick={() =>
              actionMutation.mutate({
                request: () => toggleShortlistStudent(row.original.id, !isShortlisted),
                successMessage: isShortlisted ? 'Student removed from shortlist.' : 'Student added to shortlist.',
              })
            }
          >
            <GraduationCap className="h-3.5 w-3.5" />
            {isShortlisted ? 'Unshortlist' : 'Shortlist'}
          </ERPButton>
        </div>
      );
      },
    },
  ];

  const roomColumns = [
    { accessorKey: 'hostel_name', header: 'Hostel', cell: ({ row }) => <div className="font-semibold">{row.original.hostel_name}</div> },
    { accessorKey: 'block_name', header: 'Block', cell: ({ row }) => row.original.block_name },
    { accessorKey: 'room_number', header: 'Room', cell: ({ row }) => row.original.room_number },
    { accessorKey: 'occupancy', header: 'Occupancy', cell: ({ row }) => `${row.original.occupied_beds}/${row.original.bed_capacity}` },
    { accessorKey: 'available_beds', header: 'Available Beds', cell: ({ row }) => row.original.available_beds },
    {
      id: 'room-actions',
      header: 'Actions',
      enableSorting: false,
      cell: ({ row }) => (
        <ERPButton
          variant="secondary"
          className="px-3 py-2 text-xs"
          onClick={() => {
            setEditingRoomId(row.original.id);
            setRoomForm({
              hostel_name: row.original.hostel_name,
              block_name: row.original.block_name,
              room_number: row.original.room_number,
              bed_capacity: row.original.bed_capacity,
              is_active: row.original.is_active,
              notes: row.original.notes || '',
            });
            setSelectedRoomId(row.original.id);
          }}
        >
          Edit
        </ERPButton>
      ),
    },
  ];

  const oldStudentColumns = [
    { accessorKey: 'hostel_id', header: 'Hostel ID', cell: ({ row }) => <span className="font-mono font-semibold">{row.original.hostel_id}</span> },
    {
      accessorKey: 'student_name',
      header: 'Student',
      cell: ({ row }) => (
        <div>
          <p className="font-semibold">{row.original.student_name}</p>
          <p className={cn('mt-1 text-xs', mutedText(theme))}>{row.original.mobile_number}</p>
        </div>
      ),
    },
    {
      accessorKey: 'course_name',
      header: 'Academic',
      cell: ({ row }) => (
        <div>
          <p>{row.original.course_name}</p>
          <p className={cn('mt-1 text-xs', mutedText(theme))}>{row.original.session}</p>
        </div>
      ),
    },
    {
      accessorKey: 'old_student_status',
      header: 'Status',
      cell: ({ row }) => <StatusBadge value={row.original.old_student_status} theme={theme} />,
    },
    {
      accessorKey: 'hostel_name',
      header: 'Allocation',
      cell: ({ row }) => `${row.original.hostel_name || '-'} ${row.original.room_number ? `/ ${row.original.room_number}` : ''}`,
    },
    {
      id: 'old-actions',
      header: 'Actions',
      enableSorting: false,
      cell: ({ row }) => (
        <div className="flex gap-2">
          <ERPButton
            variant="secondary"
            className="px-3 py-2 text-xs"
            onClick={() => {
              setEditingOldStudentId(row.original.id);
              setOldStudentForm({ ...row.original });
            }}
          >
            Edit
          </ERPButton>
          <ERPButton
            variant="danger"
            className="px-3 py-2 text-xs"
            onClick={() =>
              actionMutation.mutate({
                request: () => deleteOldStudent(row.original.id),
                successMessage: 'Old student record deleted.',
              })
            }
          >
            <Trash2 className="h-3.5 w-3.5" />
            Delete
          </ERPButton>
        </div>
      ),
    },
  ];

  const paymentColumns = [
    {
      accessorKey: 'payment_type',
      header: 'Type',
      cell: ({ row }) => (
        <div>
          <p className="font-semibold">{statusLabel(row.original.payment_type)}</p>
          <p className={cn('mt-1 text-xs', mutedText(theme))}>{row.original.payment_mode}</p>
        </div>
      ),
    },
    {
      accessorKey: 'student_name',
      header: 'Student',
      cell: ({ row }) => (
        <div>
          <p className="font-semibold">{row.original.student_name || 'Unnamed applicant'}</p>
          <p className={cn('mt-1 text-xs', mutedText(theme))}>{row.original.application_number}</p>
        </div>
      ),
    },
    { accessorKey: 'course_name', header: 'Course', cell: ({ row }) => row.original.course_name || 'Pending' },
    {
      accessorKey: 'transaction_id',
      header: 'Transaction',
      cell: ({ row }) => (
        <div>
          <p className="font-mono text-xs font-semibold">{row.original.transaction_id}</p>
          <p className={cn('mt-1 text-xs', mutedText(theme))}>{formatCurrency(row.original.amount)}</p>
        </div>
      ),
    },
    { accessorKey: 'status', header: 'Status', cell: ({ row }) => <StatusBadge value={row.original.status === 'success' ? 'paid' : row.original.status} theme={theme} /> },
    { accessorKey: 'hostel_name', header: 'Hostel', cell: ({ row }) => row.original.hostel_name || '-' },
    { accessorKey: 'payment_date', header: 'Submitted', cell: ({ row }) => formatDateTime(row.original.payment_date) },
    {
      accessorKey: 'receipt_url',
      header: 'Receipt',
      cell: ({ row }) =>
        row.original.receipt_url ? (
          <a
            href={resolveAssetUrl(row.original.receipt_url)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 underline"
          >
            <Eye className="h-4 w-4" />
            Open
          </a>
        ) : (
          <span className={mutedText(theme)}>Pending</span>
        ),
    },
    {
      id: 'actions',
      header: 'Actions',
      enableSorting: false,
      cell: ({ row }) =>
        row.original.status === 'pending' ? (
          <div className="flex flex-wrap gap-2">
            <ERPButton
              className="px-3 py-2 text-xs"
              disabled={actionMutation.isPending}
              onClick={() =>
                actionMutation.mutate({
                  request: () => approveAdminPayment(row.original.id),
                  successMessage: 'Payment approved successfully.',
                })
              }
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              Approve
            </ERPButton>
            <ERPButton
              variant="secondary"
              className="px-3 py-2 text-xs"
              disabled={actionMutation.isPending}
              onClick={() =>
                actionMutation.mutate({
                  request: () => rejectAdminPayment(row.original.id),
                  successMessage: 'Payment rejected successfully.',
                })
              }
            >
              <XCircle className="h-3.5 w-3.5" />
              Reject
            </ERPButton>
          </div>
        ) : (
          <span className={mutedText(theme)}>{row.original.status === 'success' ? 'Approved' : 'Rejected'}</span>
        ),
    },
  ];

  const logColumns = [
    { accessorKey: 'timestamp', header: 'Date', cell: ({ row }) => formatDateTime(row.original.timestamp) },
    { accessorKey: 'actor', header: 'Actor', cell: ({ row }) => row.original.actor },
    { accessorKey: 'action_type', header: 'Action', cell: ({ row }) => <StatusBadge value={row.original.action_type} theme={theme} /> },
    {
      accessorKey: 'description',
      header: 'Details',
      cell: ({ row }) => (
        <div>
          <p className="font-semibold">{row.original.title}</p>
          <p className={cn('mt-1 text-sm', mutedText(theme))}>{row.original.description}</p>
        </div>
      ),
    },
  ];

  const handleStudentBulkVerify = async (rows) => {
    try {
      await Promise.all(rows.map((row) => verifyStudentApplication(row.id, true)));
      toast({ title: 'Students verified', description: `${rows.length} records moved to verified.` });
      await invalidateAdminQueries();
    } catch (error) {
      toast({ title: 'Bulk verify failed', description: error.message || 'Unable to verify selected students.', duration: 7000 });
    }
  };

  const handleStudentBulkShortlist = async (rows) => {
    try {
      await Promise.all(rows.map((row) => toggleShortlistStudent(row.id, true)));
      toast({ title: 'Students shortlisted', description: `${rows.length} records added to shortlist.` });
      await invalidateAdminQueries();
    } catch (error) {
      toast({ title: 'Bulk shortlist failed', description: error.message || 'Unable to shortlist selected students.', duration: 7000 });
    }
  };

  const handleStudentBulkDelete = async (rows) => {
    try {
      await Promise.all(rows.map((row) => deleteAdminStudent(row.id)));
      toast({ title: 'Students deleted', description: `${rows.length} records removed.` });
      await invalidateAdminQueries();
    } catch (error) {
      toast({ title: 'Bulk delete failed', description: error.message || 'Unable to delete selected students.', duration: 7000 });
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricTile label="Submitted" value={formatNumber(dashboard?.total_applications)} subtext="Student applications received" icon={Users2} theme={theme} />
        <MetricTile label="Pending Review" value={formatNumber(dashboard?.pending_applications)} subtext="Waiting for admin verification" icon={BellRing} theme={theme} />
        <MetricTile label="Verified" value={formatNumber(dashboard?.verified_students)} subtext="Applications cleared for next stage" icon={UserCheck} theme={theme} />
        <MetricTile label="Shortlisted" value={formatNumber(dashboard?.shortlisted_students)} subtext="Eligible for hostel allocation" icon={GraduationCap} theme={theme} />
        <MetricTile label="Allocated" value={formatNumber(dashboard?.hostel_allocated_students)} subtext="Students with hostel assignment" icon={Building2} theme={theme} />
        <MetricTile label="Occupied Beds" value={formatNumber(dashboard?.occupied_beds)} subtext={`${occupancyRate} of live bed capacity used`} icon={BedDouble} theme={theme} />
        <MetricTile label="Available Beds" value={formatNumber(dashboard?.available_beds)} subtext={`${formatNumber(dashboard?.total_rooms)} active rooms in inventory`} icon={ShieldCheck} theme={theme} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <BarChartCard title="Hostel occupancy" items={dashboard?.by_hostel || []} theme={theme} />
        <BarChartCard title="Student distribution" items={dashboard?.by_category || []} theme={theme} />
        <BarChartCard title="Application status" items={dashboard?.by_status || []} theme={theme} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <SectionCard theme={theme}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Operations summary</p>
              <h3 className="mt-2 text-xl font-semibold">Backend-driven hostel operations health</h3>
            </div>
            <WalletCards className={cn('h-5 w-5', mutedText(theme))} />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['Application payments', formatNumber(dashboard?.total_paid)],
              ['Hostel fee payments', formatNumber(dashboard?.hostel_paid_students)],
              ['Active old students', formatNumber(dashboard?.old_students)],
              ['Active rooms', formatNumber(dashboard?.total_rooms)],
              ['Bed utilization', occupancyRate],
            ].map(([label, value]) => (
              <div key={label} className={cn('rounded-[26px] border p-5', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
                <p className={cn('text-xs font-semibold uppercase tracking-[0.18em]', mutedText(theme))}>{label}</p>
                <p className="mt-3 text-3xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Recent activity</p>
          <h3 className="mt-2 text-xl font-semibold">Latest operational events</h3>
          <div className="mt-6 space-y-3">
            {(dashboard?.recent_activities || []).slice(0, 5).map((activity, index) => (
              <div key={`${activity.title}-${index}`} className={cn('rounded-[24px] border p-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
                <p className="font-semibold">{activity.title}</p>
                <p className={cn('mt-2 text-sm leading-6', mutedText(theme))}>{activity.description}</p>
                <p className={cn('mt-3 text-xs uppercase tracking-[0.18em]', mutedText(theme))}>{formatDateTime(activity.timestamp)}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <SectionCard theme={theme}>
        <div className="grid gap-4 xl:grid-cols-4">
          <label className="block text-sm">
            <span className={mutedText(theme)}>Course</span>
            <select className={inputClass(theme)} value={studentFilters.course} onChange={(event) => setStudentFilters((current) => ({ ...current, course: event.target.value }))}>
              <option value="">All courses</option>
              {activeCourseOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Program</span>
            <select className={inputClass(theme)} value={studentFilters.program} onChange={(event) => setStudentFilters((current) => ({ ...current, program: event.target.value }))}>
              <option value="">All programs</option>
              {activeProgramOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Category</span>
            <select className={inputClass(theme)} value={studentFilters.category} onChange={(event) => setStudentFilters((current) => ({ ...current, category: event.target.value }))}>
              <option value="">All categories</option>
              {activeCategoryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Session</span>
            <select className={inputClass(theme)} value={studentFilters.session} onChange={(event) => setStudentFilters((current) => ({ ...current, session: event.target.value }))}>
              <option value="">All sessions</option>
              {activeSessionOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Verification</span>
            <select className={inputClass(theme)} value={studentFilters.verified} onChange={(event) => setStudentFilters((current) => ({ ...current, verified: event.target.value }))}>
              <option value="">All verification states</option>
              <option value="pending">Pending</option>
              <option value="verified">Verified</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Shortlist</span>
            <select className={inputClass(theme)} value={studentFilters.shortlist} onChange={(event) => setStudentFilters((current) => ({ ...current, shortlist: event.target.value }))}>
              <option value="">All shortlist states</option>
              <option value="pending">Pending</option>
              <option value="shortlisted">Shortlisted</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Hostel status</span>
            <select className={inputClass(theme)} value={studentFilters.hostel_state} onChange={(event) => setStudentFilters((current) => ({ ...current, hostel_state: event.target.value }))}>
              <option value="">All statuses</option>
              <option value="pending">Pending</option>
              <option value="not_available">Not available</option>
              <option value="awaiting_allocation">Awaiting allocation</option>
              <option value="payment_pending">Payment pending</option>
              <option value="paid">Paid</option>
            </select>
          </label>
          <div className="flex items-end">
            <ERPButton variant="secondary" className="w-full justify-center" onClick={() => setStudentFilters(initialStudentFilters)}>
              Reset filters
            </ERPButton>
          </div>
        </div>
      </SectionCard>

      <ErpDataTable
        data={students}
        columns={studentColumns}
        loading={studentsQuery.isLoading}
        theme={theme}
        onRowClick={(row) => setSelectedStudentId(row.id)}
        searchPlaceholder="Search by student name or application number"
        bulkActions={[
          { key: 'verify', label: 'Verify', icon: UserCheck, onClick: handleStudentBulkVerify },
          { key: 'shortlist', label: 'Shortlist', icon: GraduationCap, onClick: handleStudentBulkShortlist },
          { key: 'delete', label: 'Delete', icon: Trash2, variant: 'danger', onClick: handleStudentBulkDelete },
        ]}
        toolbarEnd={
          <ERPButton variant="secondary" className="px-3 py-2 text-xs" onClick={() => downloadStudentsExcel({ search: deferredSearch, ...studentFilters })}>
            <Download className="h-3.5 w-3.5" />
            Export Excel
          </ERPButton>
        }
      />
    </div>
  );

  const renderOldStudents = () => (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <ErpDataTable data={oldStudents} columns={oldStudentColumns} loading={oldStudentsQuery.isLoading} theme={theme} searchPlaceholder="Search hostel ID or student name" bulkActions={[]} />
        <SectionCard theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">{editingOldStudentId ? 'Update record' : 'Add record'}</p>
          <h3 className="mt-2 text-xl font-semibold">Old student management</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {Object.entries(oldStudentForm).map(([key, value]) => (
              <label key={key} className={cn('block text-sm', key === 'old_student_status' ? 'md:col-span-2' : '')}>
                <span className={mutedText(theme)}>{statusLabel(key)}</span>
                {key === 'old_student_status' ? (
                  <select className={inputClass(theme)} value={value} onChange={(event) => setOldStudentForm((current) => ({ ...current, [key]: event.target.value }))}>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="LEFT">LEFT</option>
                    <option value="SUSPENDED">SUSPENDED</option>
                  </select>
                ) : (
                  <input className={inputClass(theme)} value={value || ''} onChange={(event) => setOldStudentForm((current) => ({ ...current, [key]: event.target.value }))} />
                )}
              </label>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <ERPButton
              onClick={() =>
                actionMutation.mutate({
                  request: () =>
                    editingOldStudentId
                      ? updateOldStudent(editingOldStudentId, oldStudentForm)
                      : createOldStudent(oldStudentForm),
                  successMessage: editingOldStudentId ? 'Old student record updated.' : 'Old student record created.',
                })
              }
            >
              <Save className="h-4 w-4" />
              {editingOldStudentId ? 'Update record' : 'Create record'}
            </ERPButton>
            <ERPButton variant="secondary" onClick={() => { setEditingOldStudentId(null); setOldStudentForm(initialOldStudentForm); }}>
              Reset
            </ERPButton>
          </div>
        </SectionCard>
      </div>
    </div>
  );

  const renderHostelManagement = () => (
    <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
      <ErpDataTable data={rooms} columns={roomColumns} loading={roomsQuery.isLoading} theme={theme} selectable={false} searchPlaceholder="Search room, block, or hostel" />
      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">{editingRoomId ? 'Edit room' : 'Create room'}</p>
        <h3 className="mt-2 text-xl font-semibold">Room inventory form</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="block text-sm">
            <span className={mutedText(theme)}>Hostel</span>
            <select className={inputClass(theme)} value={roomForm.hostel_name} onChange={(event) => setRoomForm((current) => ({ ...current, hostel_name: event.target.value }))}>
              {HOSTEL_NAMES.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Block</span>
            <input className={inputClass(theme)} value={roomForm.block_name} onChange={(event) => setRoomForm((current) => ({ ...current, block_name: event.target.value }))} />
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Room number</span>
            <input className={inputClass(theme)} value={roomForm.room_number} onChange={(event) => setRoomForm((current) => ({ ...current, room_number: event.target.value }))} />
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Bed capacity</span>
            <input type="number" min="1" className={inputClass(theme)} value={roomForm.bed_capacity} onChange={(event) => setRoomForm((current) => ({ ...current, bed_capacity: Number(event.target.value) }))} />
          </label>
          <label className="block text-sm md:col-span-2">
            <span className={mutedText(theme)}>Notes</span>
            <textarea className={textareaClass(theme)} value={roomForm.notes} onChange={(event) => setRoomForm((current) => ({ ...current, notes: event.target.value }))} />
          </label>
          <label className="flex items-center gap-3 text-sm md:col-span-2">
            <input type="checkbox" checked={roomForm.is_active} onChange={(event) => setRoomForm((current) => ({ ...current, is_active: event.target.checked }))} />
            Room is active for allocation
          </label>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <ERPButton
            onClick={() =>
              actionMutation.mutate({
                request: () => (editingRoomId ? updateAdminHostelRoom(editingRoomId, roomForm) : createAdminHostelRoom(roomForm)),
                successMessage: editingRoomId ? 'Hostel room updated.' : 'Hostel room created.',
              })
            }
          >
            <Save className="h-4 w-4" />
            {editingRoomId ? 'Update room' : 'Create room'}
          </ERPButton>
          <ERPButton variant="secondary" onClick={() => { setEditingRoomId(null); setRoomForm(initialRoomForm); }}>
            Reset
          </ERPButton>
        </div>
      </SectionCard>
    </div>
  );

  const renderAllocation = () => (
    <div className="space-y-6">
      <ErpHostelMap rooms={rooms} theme={theme} selectedRoomId={selectedRoomId} onRoomSelect={(room) => { setSelectedRoomId(room.id); setAllocationDraft((current) => ({ ...current, bed_number: '' })); }} />
      <div className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
        <SectionCard theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Manual allocation</p>
          <h3 className="mt-2 text-xl font-semibold">Assign shortlisted students to live room inventory</h3>
          <div className="mt-5 space-y-4">
            <label className="block text-sm">
              <span className={mutedText(theme)}>Selected room</span>
              <input className={inputClass(theme)} disabled value={selectedRoom ? `${selectedRoom.hostel_name} / ${selectedRoom.block_name} / ${selectedRoom.room_number}` : 'Choose a room from the map'} />
            </label>
            <label className="block text-sm">
              <span className={mutedText(theme)}>Student</span>
              <select className={inputClass(theme)} value={allocationDraft.studentId} onChange={(event) => setAllocationDraft((current) => ({ ...current, studentId: event.target.value }))}>
                <option value="">Select shortlisted student</option>
                {allocationQueue.map((student) => <option key={student.id} value={student.id}>{student.name || student.application_number} - {student.application_number}</option>)}
              </select>
            </label>
            <label className="block text-sm">
              <span className={mutedText(theme)}>Bed number</span>
              <input className={inputClass(theme)} placeholder="Leave blank to auto-assign" value={allocationDraft.bed_number} onChange={(event) => setAllocationDraft((current) => ({ ...current, bed_number: event.target.value }))} />
            </label>
            <ERPButton
              disabled={!selectedRoom || !allocationDraft.studentId}
              onClick={() =>
                actionMutation.mutate({
                  request: () => allocateHostel(Number(allocationDraft.studentId), { room_id: selectedRoom.id, bed_number: allocationDraft.bed_number || undefined }),
                  successMessage: 'Student allocated successfully.',
                })
              }
            >
              <BedDouble className="h-4 w-4" />
              Confirm allocation
            </ERPButton>
          </div>
        </SectionCard>

        <SectionCard theme={theme}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Allocation queue</p>
              <h3 className="mt-2 text-xl font-semibold">Students awaiting room assignment</h3>
            </div>
            <span className={cn('text-xs uppercase tracking-[0.18em]', mutedText(theme))}>live capacity refresh every 30s</span>
          </div>
          <div className="mt-6 space-y-3">
            {allocationQueue.length ? allocationQueue.map((student) => (
              <button key={student.id} type="button" onClick={() => setAllocationDraft((current) => ({ ...current, studentId: String(student.id) }))} className={cn('w-full rounded-[26px] border p-4 text-left transition', theme === 'dark' ? 'border-slate-800 bg-slate-900/80 hover:border-blue-500/40' : 'border-slate-200 bg-slate-50/80 hover:border-blue-200')}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">{student.name || 'Unnamed applicant'}</p>
                    <p className={cn('mt-1 text-sm', mutedText(theme))}>{student.application_number} / {student.course_name || 'Course pending'}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <StatusBadge value={student.shortlist_status} theme={theme} />
                    <StatusBadge value={student.hostel_status} theme={theme} />
                  </div>
                </div>
              </button>
            )) : <p className={cn('text-sm', mutedText(theme))}>No shortlisted students are currently waiting for room allocation.</p>}
          </div>
        </SectionCard>
      </div>
    </div>
  );

  const renderBulkOperations = () => (
    <div className="space-y-6">
      <ErpBulkUploadWizard
        mode="shortlist"
        title="Bulk shortlist upload"
        theme={theme}
        onDownloadTemplate={downloadShortlistTemplate}
        onUpload={(file) => uploadBulkShortlist(file, bulkShortlistHostel)}
        extraFields={
          <label className="block text-left text-sm">
            <span className={mutedText(theme)}>Default hostel (optional)</span>
            <select className={inputClass(theme)} value={bulkShortlistHostel} onChange={(event) => setBulkShortlistHostel(event.target.value)}>
              <option value="">No default hostel</option>
              {HOSTEL_NAMES.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        }
      />
      <ErpBulkUploadWizard
        mode="allocation"
        title="Bulk room allocation upload"
        theme={theme}
        onDownloadTemplate={downloadAllocationTemplate}
        onUpload={(file) => uploadBulkAllocation(file, bulkAllocationHostel)}
        extraFields={
          <label className="block text-left text-sm">
            <span className={mutedText(theme)}>Default hostel (optional)</span>
            <select className={inputClass(theme)} value={bulkAllocationHostel} onChange={(event) => setBulkAllocationHostel(event.target.value)}>
              <option value="">No default hostel</option>
              {HOSTEL_NAMES.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        }
      />
      <OldStudentBulkWorkflow
        theme={theme}
        onCompleted={async () => {
          await invalidateAdminQueries();
        }}
      />
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricTile label="Pending Approval" value={formatNumber(pendingPaymentRows.length)} subtext="Demo payments waiting for admin action" icon={BellRing} theme={theme} />
        <MetricTile label="Approved" value={formatNumber(approvedPaymentRows.length)} subtext="Payments cleared successfully" icon={CheckCircle2} theme={theme} />
        <MetricTile label="Rejected" value={formatNumber(rejectedPaymentRows.length)} subtext="Payments sent back for retry" icon={XCircle} theme={theme} />
        <MetricTile label="Successful Value" value={formatCurrency(approvedPaymentRows.reduce((sum, item) => sum + Number(item.amount || 0), 0))} subtext="Approved demo payment volume" icon={CreditCard} theme={theme} />
      </div>
      <ErpDataTable
        data={paymentRows}
        columns={paymentColumns}
        theme={theme}
        selectable={false}
        loading={paymentsQuery.isLoading}
        searchPlaceholder="Search payments by transaction, student, or application number"
      />
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <SectionCard theme={theme}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Reports & analytics</p>
            <h3 className="mt-2 text-xl font-semibold">Occupancy, categories, and utilization</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <select className={inputClass(theme)} value={reportWindow} onChange={(event) => setReportWindow(event.target.value)}>
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="all">All data</option>
            </select>
            <ERPButton
              variant="secondary"
              onClick={() =>
                triggerBlobDownload(
                  createCsvBlob(
                    (dashboard?.by_hostel || []).map((item) => ({ metric: 'occupancy', label: item.label, value: item.value }))
                  ),
                  `hostel_report_${Date.now()}.csv`
                )
              }
            >
              <Download className="h-4 w-4" />
              Export CSV
            </ERPButton>
          </div>
        </div>
      </SectionCard>
      <div className="grid gap-6 xl:grid-cols-2">
        <BarChartCard title="Hostel occupancy" items={dashboard?.by_hostel || []} theme={theme} />
        <BarChartCard title="Student categories" items={dashboard?.by_category || []} theme={theme} />
        <BarChartCard title="Application status" items={dashboard?.by_status || []} theme={theme} />
        <BarChartCard title="Course distribution" items={dashboard?.by_course || []} theme={theme} />
      </div>
    </div>
  );

  const renderLogs = () => (
    <div className="space-y-6">
      <SectionCard theme={theme}>
        <div className="grid gap-4 xl:grid-cols-4">
          <label className="block text-sm">
            <span className={mutedText(theme)}>Actor</span>
            <select className={inputClass(theme)} value={logActorFilter} onChange={(event) => setLogActorFilter(event.target.value)}>
              <option value="">All actors</option>
              {Array.from(new Set(activityRows.map((item) => item.actor))).map((actor) => <option key={actor} value={actor}>{actor}</option>)}
            </select>
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Action type</span>
            <select className={inputClass(theme)} value={logActionFilter} onChange={(event) => setLogActionFilter(event.target.value)}>
              <option value="">All actions</option>
              {Array.from(new Set(activityRows.map((item) => item.action_type))).map((action) => <option key={action} value={action}>{action}</option>)}
            </select>
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Date window</span>
            <select className={inputClass(theme)} value={reportWindow} onChange={(event) => setReportWindow(event.target.value)}>
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="all">All data</option>
            </select>
          </label>
          <div className={cn('rounded-[24px] border px-4 py-4 text-sm', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
            <p className="font-semibold">{apiActivityRows.length ? 'Live backend audit trail' : 'Fallback activity timeline'}</p>
            <p className={cn('mt-2 leading-6', mutedText(theme))}>
              {apiActivityRows.length
                ? `${apiActivityRows.length} activity log records loaded from the backend.`
                : 'No backend log rows were returned, so the page is showing derived operational events.'}
            </p>
          </div>
        </div>
      </SectionCard>
      <ErpDataTable data={filteredLogs} columns={logColumns} theme={theme} loading={activityLogsQuery.isLoading && !apiActivityRows.length} selectable={false} searchPlaceholder="Search log descriptions" />
    </div>
  );

  const renderSettings = () => (
    <div className="grid gap-6 xl:grid-cols-2">
      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Tenant profile</p>
        <h3 className="mt-2 text-xl font-semibold">Institution configuration</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="block text-sm">
            <span className={mutedText(theme)}>Institution name</span>
            <input className={inputClass(theme)} defaultValue="Magadh Mahila College" />
          </label>
          <label className="block text-sm">
            <span className={mutedText(theme)}>Campus scale</span>
            <input className={inputClass(theme)} defaultValue="5000+ students" />
          </label>
          <label className="block text-sm md:col-span-2">
            <span className={mutedText(theme)}>Platform notes</span>
            <textarea className={textareaClass(theme)} defaultValue="Designed to scale across multiple colleges with shared hostel ERP architecture." />
          </label>
        </div>
      </SectionCard>
      <SectionCard theme={theme}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Operational controls</p>
        <h3 className="mt-2 text-xl font-semibold">Notification and process defaults</h3>
        <div className="mt-5 space-y-4 text-sm">
          {['Allow self-service hostel preference', 'Send payment receipt notifications', 'Enable bulk import validations', 'Auto-refresh room inventory every 30 seconds'].map((item, index) => (
            <label key={item} className={cn('flex items-center justify-between rounded-[24px] border px-4 py-4', theme === 'dark' ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-slate-50/80')}>
              <span>{item}</span>
              <input type="checkbox" defaultChecked={index !== 1 ? true : false} />
            </label>
          ))}
        </div>
      </SectionCard>
    </div>
  );

  const renderContent = () => {
    switch (currentNav.to) {
      case '/erp/admin/dashboard':
        return renderDashboard();
      case '/erp/admin/students':
        return renderStudents();
      case '/erp/admin/old-students':
        return renderOldStudents();
      case '/erp/admin/hostel-management':
        return renderHostelManagement();
      case '/erp/admin/room-allocation':
        return renderAllocation();
      case '/erp/admin/bulk-operations':
        return renderBulkOperations();
      case '/erp/admin/payments':
        return renderPayments();
      case '/erp/admin/reports':
        return renderReports();
      case '/erp/admin/activity-logs':
        return renderLogs();
      case '/erp/admin/settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <>
      <Helmet>
        <title>{currentNav.label} | Hostel ERP Admin</title>
      </Helmet>
      <ErpShell
        brand={{
          href: '/erp',
          eyebrow: 'Hostel ERP',
          title: 'Admin Workspace',
          description: 'Modern hostel operations for admissions, allocation, payments, and reporting.',
          icon: ShieldCheck,
        }}
        navItems={adminNavItems}
        theme={theme}
        title={currentNav.label}
        description={currentNav.caption}
        searchValue={searchTerm}
        onSearchChange={(event) => setSearchTerm(event.target.value)}
        searchPlaceholder={`Search ${currentNav.label.toLowerCase()}`}
        notificationCount={dashboard?.pending_applications || 0}
        profile={{ label: 'Admin', caption: 'Hostel ERP control center' }}
        actions={[
          {
            key: 'refresh',
            node: (
              <ERPButton variant="secondary" className="px-3 py-2 text-xs" onClick={() => invalidateAdminQueries()}>
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
                  clearAdminToken();
                  queryClient.removeQueries({ queryKey: ['erp', 'admin'] });
                  navigate('/erp/admin/login', { replace: true });
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">SaaS-ready stack</p>
            <p className="mt-2 font-semibold">React Query + TanStack Table + FastAPI</p>
            <p className={cn('mt-2 text-xs leading-5', mutedText(theme))}>
              Designed for smooth admin operations at university scale with modern dashboards and reusable modules.
            </p>
          </div>
        )}
      >
        {renderContent()}
      </ErpShell>

      <StudentDetailDrawer detail={detail} loading={studentDetailQuery.isLoading} onClose={() => setSelectedStudentId(null)} theme={theme} />
    </>
  );
};

export default ERPAdminWorkspace;
