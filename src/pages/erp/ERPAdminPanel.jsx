import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  Download,
  Eye,
  Filter,
  Home,
  LogIn,
  LogOut,
  RefreshCw,
  Search,
  ShieldCheck,
  Upload,
  Users2,
  X,
} from 'lucide-react';
import ERPBarChart from '@/components/erp/ERPBarChart';
import ERPButton from '@/components/erp/ERPButton';
import ERPMetricCard from '@/components/erp/ERPMetricCard';
import ERPPageTransition from '@/components/erp/ERPPageTransition';
import ERPStatusTracker from '@/components/erp/ERPStatusTracker';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { toast } from '@/components/ui/use-toast';
import {
  allocateHostel,
  clearAdminToken,
  downloadStudentsExcel,
  getAdminDashboard,
  getAdminStudentDetail,
  getAdminStudents,
  getAdminToken,
  loginAdmin,
  resolveAssetUrl,
  toggleShortlistStudent,
  uploadShortlist,
  verifyStudentApplication,
} from '@/services/erpApi';

const inputClass =
  'h-11 w-full rounded-2xl border border-white/60 bg-white/90 px-4 text-sm text-slate-900 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100';

const badgeTone = {
  paid: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  verified: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  shortlisted: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  pending: 'border-amber-200 bg-amber-50 text-amber-700',
  payment_pending: 'border-amber-200 bg-amber-50 text-amber-700',
  awaiting_allocation: 'border-slate-200 bg-slate-100 text-slate-600',
  preference_pending: 'border-slate-200 bg-slate-100 text-slate-600',
  not_available: 'border-slate-200 bg-slate-100 text-slate-600',
};

const defaultFilters = {
  search: '',
  course: '',
  category: '',
  session: '',
  program: '',
  shortlist: '',
  verified: '',
  hostel_state: '',
};

const formatDate = (value) => (value ? new Date(value).toLocaleString('en-IN') : '-');
const displayValue = (value) => (value === null || value === undefined || value === '' ? '-' : value);

const detailSections = [
  {
    title: 'Personal Details',
    fields: [
      ['Name', 'name'],
      ['Email', 'email'],
      ['Mobile Number', 'mobile_number'],
      ['Date of Birth', 'date_of_birth'],
      ['Gender', 'gender'],
      ['Blood Group', 'blood_group'],
      ['Aadhaar Number', 'aadhaar_number'],
      ['Category', 'category'],
      ['Religion', 'religion'],
      ['Nationality', 'nationality'],
    ],
  },
  {
    title: 'Family Details',
    fields: [
      ["Father's Name", 'father_name'],
      ["Mother's Name", 'mother_name'],
      ['Local Guardian Name', 'local_guardian_name'],
      ['Guardian Mobile', 'guardian_mobile_number'],
      ['Correspondence Address', 'correspondence_address'],
    ],
  },
  {
    title: 'Academic Details',
    fields: [
      ['Intermediate College', 'intermediate_college_name'],
      ['Intermediate Board', 'intermediate_board'],
      ['Total Marks', 'total_marks'],
      ['Marks Obtained', 'marks_obtained'],
      ['Result Type', 'result_type'],
      ['Aggregate Percentage', 'aggregate_percentage'],
    ],
  },
  {
    title: 'Admission Details',
    fields: [
      ['Application Number', 'application_number'],
      ['Admission Application ID', 'admission_application_id'],
      ['College Name', 'college_name'],
      ['Course Name', 'course_name'],
      ['Honours Subject', 'honours_subject'],
      ['Session', 'session'],
      ['Program', 'program'],
      ['Roll Number', 'roll_number'],
      ['Preferred Hostel', 'preferred_hostel'],
      ['Allocated Hostel', 'allocated_hostel'],
    ],
  },
];

const Badge = ({ value }) => (
  <span
    className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
      badgeTone[value] || badgeTone.pending
    }`}
  >
    {String(value || 'pending').replace(/_/g, ' ')}
  </span>
);

const DetailMetric = ({ label, value, className = '' }) => (
  <div
    className={`rounded-[26px] border border-white/70 bg-white/88 px-4 py-4 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] backdrop-blur ${className}`}
  >
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
    <p className="mt-2 break-words text-sm font-semibold text-slate-900">{displayValue(value)}</p>
  </div>
);

const DetailSection = ({ title, items, className = '' }) => (
  <div className={`rounded-3xl border border-slate-200/70 bg-white/80 p-5 ${className}`}>
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map(([label, value]) => {
        const resolvedValue = displayValue(value);
        const isWide = /address|college|subject/i.test(label) || String(resolvedValue).length > 34;

        return (
          <div
            key={label}
            className={`rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm ${isWide ? 'sm:col-span-2' : ''}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
            <p className="mt-1 whitespace-pre-wrap break-words text-slate-900">{resolvedValue}</p>
          </div>
        );
      })}
    </div>
  </div>
);

const ERPAdminPanel = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [shortlistFile, setShortlistFile] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: 'admin', password: '' });
  const [filters, setFilters] = useState(defaultFilters);
  const [dashboard, setDashboard] = useState(null);
  const [studentsData, setStudentsData] = useState({ total: 0, items: [] });
  const [allocationDrafts, setAllocationDrafts] = useState({});
  const [detailLoading, setDetailLoading] = useState(false);
  const [selectedStudentDetail, setSelectedStudentDetail] = useState(null);
  const detailSummary = selectedStudentDetail?.summary || {};
  const detailName = selectedStudentDetail?.student_name || 'Student';
  const detailInitial = detailName.trim().charAt(0).toUpperCase() || 'S';

  const activeCourseList = useMemo(
    () => Array.from(new Set((studentsData.items || []).map((item) => item.course_name).filter(Boolean))),
    [studentsData.items]
  );
  const activeSessionList = useMemo(
    () => Array.from(new Set((studentsData.items || []).map((item) => item.session).filter(Boolean))),
    [studentsData.items]
  );

  const loadData = async (nextFilters = filters) => {
    setLoading(true);
    try {
      const [dashboardData, students] = await Promise.all([
        getAdminDashboard(),
        getAdminStudents({ ...nextFilters, limit: 200, offset: 0 }),
      ]);
      setDashboard(dashboardData);
      setStudentsData(students);
      setAllocationDrafts(
        Object.fromEntries((students.items || []).map((item) => [item.id, item.allocated_hostel || 'Vaidehi Hostel']))
      );
    } catch (error) {
      toast({
        title: 'Admin session error',
        description: error.message || 'Please login again.',
        duration: 7000,
      });
      clearAdminToken();
      setLoggedIn(false);
      setDashboard(null);
      setStudentsData({ total: 0, items: [] });
      setSelectedStudentDetail(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const hasToken = Boolean(getAdminToken());
    setLoggedIn(hasToken);
    setAuthChecked(true);
    if (hasToken) {
      void loadData(defaultFilters);
    }
  }, []);

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    setLoginLoading(true);
    try {
      await loginAdmin(loginForm);
      setLoggedIn(true);
      toast({
        title: 'Admin login successful',
        description: 'Hostel ERP admin controls are ready.',
      });
      await loadData(defaultFilters);
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error.message || 'Invalid admin credentials.',
        duration: 7000,
      });
    } finally {
      setLoginLoading(false);
    }
  };

  const handleStudentAction = async (studentId, action) => {
    setActionLoadingId(studentId);
    try {
      await action();
      await loadData();
    } catch (error) {
      toast({
        title: 'Action failed',
        description: error.message || 'Unable to complete admin action.',
        duration: 7000,
      });
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      await downloadStudentsExcel();
      toast({
        title: 'Excel exported',
        description: 'Student workbook downloaded successfully.',
      });
    } catch (error) {
      toast({
        title: 'Export failed',
        description: error.message || 'Unable to export Excel file.',
        duration: 7000,
      });
    } finally {
      setExporting(false);
    }
  };

  const handleShortlistUpload = async (event) => {
    event.preventDefault();
    if (!shortlistFile) {
      toast({
        title: 'Select a file',
        description: 'Upload a CSV or Excel shortlist file first.',
      });
      return;
    }
    setUploading(true);
    try {
      const data = await uploadShortlist(shortlistFile);
      toast({
        title: 'Shortlist processed',
        description: `${data.marked_shortlisted} students marked shortlisted.`,
      });
      setShortlistFile(null);
      await loadData();
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: error.message || 'Unable to process shortlist file.',
        duration: 7000,
      });
    } finally {
      setUploading(false);
    }
  };

  const openStudentDetail = async (studentId) => {
    setDetailLoading(true);
    try {
      const detail = await getAdminStudentDetail(studentId);
      setSelectedStudentDetail(detail);
    } catch (error) {
      toast({
        title: 'Unable to load student details',
        description: error.message || 'Please try again.',
        duration: 7000,
      });
    } finally {
      setDetailLoading(false);
    }
  };

  const closeStudentDetail = () => {
    setSelectedStudentDetail(null);
  };

  if (!authChecked) {
    return <section className="px-4 py-16 text-sm text-slate-500">Loading admin session...</section>;
  }

  if (!loggedIn) {
    return (
      <>
        <Helmet>
          <title>Admin Login | Hostel ERP</title>
        </Helmet>

        <section className="erp-shell erp-radial-backdrop relative isolate overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
          <motion.div
            className="pointer-events-none absolute -left-20 top-12 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl"
            animate={{ x: [0, 42, 0], y: [0, 34, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-300/16 blur-3xl"
            animate={{ x: [0, -42, 0], y: [0, 34, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />

          <ERPPageTransition className="relative z-10 mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr,0.95fr]">
            <ERPSurfaceCard className="erp-glass-panel p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Admin Control Center
              </div>
              <h1 className="erp-display mt-5 text-4xl font-bold text-slate-950 md:text-5xl">
                Verify, shortlist, allocate, and export from one place.
              </h1>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Verification', value: 'Fast' },
                  { label: 'Shortlist Upload', value: 'Excel / CSV' },
                  { label: 'Hostel Allocation', value: 'Live' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/60 bg-white/80 px-4 py-4 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </ERPSurfaceCard>

            <ERPSurfaceCard className="erp-glass-panel p-8" animatedBorder>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Admin Sign In</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Hostel ERP login</h2>
              <p className="mt-2 text-sm text-slate-600">
                Use the configured admin username and password to access student operations.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleAdminLogin}>
                <label className="block text-sm font-medium text-slate-700">
                  Admin Username
                  <input
                    required
                    className={`mt-2 ${inputClass}`}
                    value={loginForm.username}
                    onChange={(event) => setLoginForm((prev) => ({ ...prev, username: event.target.value }))}
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Password
                  <input
                    required
                    type="password"
                    className={`mt-2 ${inputClass}`}
                    value={loginForm.password}
                    onChange={(event) => setLoginForm((prev) => ({ ...prev, password: event.target.value }))}
                  />
                </label>

                <ERPButton type="submit" disabled={loginLoading} className="w-full justify-center">
                  <LogIn className="h-4 w-4" />
                  {loginLoading ? 'Signing in...' : 'Login as Admin'}
                </ERPButton>
              </form>
            </ERPSurfaceCard>
          </ERPPageTransition>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Hostel ERP</title>
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
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Hostel ERP Admin
                </p>
                <h1 className="erp-display mt-4 text-4xl font-bold text-slate-950">Admission operations dashboard</h1>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Review submitted forms, push shortlist updates, assign hostels, and export Excel reports for the
                  admission cycle.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ERPButton variant="secondary" onClick={() => loadData()}>
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </ERPButton>
                <ERPButton variant="secondary" disabled={exporting} onClick={handleExport}>
                  <Download className="h-4 w-4" />
                  {exporting ? 'Exporting...' : 'Export Excel'}
                </ERPButton>
                <ERPButton
                  variant="danger"
                  onClick={() => {
                    clearAdminToken();
                    setLoggedIn(false);
                    setSelectedStudentDetail(null);
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </ERPButton>
              </div>
            </div>
          </ERPSurfaceCard>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ERPMetricCard title="Total Applications" value={dashboard?.total_applications ?? 0} icon={Users2} delay={0.02} />
            <ERPMetricCard title="Fee Paid" value={dashboard?.total_paid ?? 0} icon={CheckCircle2} delay={0.08} />
            <ERPMetricCard title="Pending Verification" value={dashboard?.pending_applications ?? 0} icon={Filter} delay={0.14} />
            <ERPMetricCard title="Hostel Allocated" value={dashboard?.hostel_allocated_students ?? 0} icon={Building2} delay={0.2} />
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
            <ERPSurfaceCard className="erp-glass-panel p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Shortlist Upload</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Bulk shortlist processing</h2>
                </div>
                <Upload className="h-5 w-5 text-cyan-600" />
              </div>
              <form className="mt-6 space-y-4" onSubmit={handleShortlistUpload}>
                <input
                  type="file"
                  accept=".csv,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  className={inputClass}
                  onChange={(event) => setShortlistFile(event.target.files?.[0] || null)}
                />
                <ERPButton type="submit" disabled={uploading}>
                  <Upload className="h-4 w-4" />
                  {uploading ? 'Uploading...' : 'Upload shortlist file'}
                </ERPButton>
              </form>
              <p className="mt-4 text-sm text-slate-500">
                Use a CSV or Excel sheet containing application numbers. Matching students are marked shortlisted automatically.
              </p>
            </ERPSurfaceCard>

            <div className="grid gap-6 md:grid-cols-2">
              <ERPBarChart title="By Course" items={dashboard?.by_course || []} tone="sky" />
              <ERPBarChart title="By Status" items={dashboard?.by_status || []} tone="emerald" />
            </div>
          </div>

          <ERPSurfaceCard className="erp-glass-panel p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Student Management</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Applications ({studentsData.total || 0})</h2>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <button
                  type="button"
                  onClick={() => loadData()}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 font-medium text-slate-700"
                >
                  <Search className="h-4 w-4" />
                  Apply Filters
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Search
                <input
                  className={inputClass}
                  value={filters.search}
                  onChange={(event) => setFilters((prev) => ({ ...prev, search: event.target.value }))}
                  placeholder="App no / email / name"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Course
                <select
                  className={inputClass}
                  value={filters.course}
                  onChange={(event) => setFilters((prev) => ({ ...prev, course: event.target.value }))}
                >
                  <option value="">All courses</option>
                  {activeCourseList.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Session
                <select
                  className={inputClass}
                  value={filters.session}
                  onChange={(event) => setFilters((prev) => ({ ...prev, session: event.target.value }))}
                >
                  <option value="">All sessions</option>
                  {activeSessionList.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Verification
                <select
                  className={inputClass}
                  value={filters.verified}
                  onChange={(event) => setFilters((prev) => ({ ...prev, verified: event.target.value }))}
                >
                  <option value="">All</option>
                  <option value="pending">Pending</option>
                  <option value="verified">Verified</option>
                </select>
              </label>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[1180px] text-sm">
                <thead className="text-left text-slate-500">
                  <tr>
                    {['Student', 'Course', 'Verification', 'Shortlist', 'Hostel', 'Actions'].map((heading) => (
                      <th key={heading} className="px-4 py-3 font-semibold uppercase tracking-[0.16em]">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(studentsData.items || []).map((student) => (
                    <tr key={student.id} className="border-t border-slate-200/70 align-top">
                      <td className="px-4 py-4">
                        <p className="font-semibold text-slate-900">{student.name || 'Student'}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{student.application_number}</p>
                        <p className="mt-2 text-slate-600">{student.email}</p>
                        <p className="text-slate-500">{student.mobile_number}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-slate-900">{student.course_name || '-'}</p>
                        <p className="mt-1 text-slate-500">{student.program || '-'}</p>
                        <p className="text-slate-500">{student.session || '-'}</p>
                      </td>
                      <td className="space-y-2 px-4 py-4">
                        <Badge value={student.verification_status} />
                        <p className="text-xs text-slate-500">{student.form_status?.replace(/_/g, ' ')}</p>
                      </td>
                      <td className="space-y-2 px-4 py-4">
                        <Badge value={student.shortlist_status} />
                        <p className="text-xs text-slate-500">{student.application_payment_status?.replace(/_/g, ' ')}</p>
                      </td>
                      <td className="space-y-2 px-4 py-4">
                        <Badge value={student.hostel_status} />
                        <p className="text-slate-700">
                          Preferred: <span className="font-medium">{student.preferred_hostel || '-'}</span>
                        </p>
                        <p className="text-slate-700">
                          Allocated: <span className="font-medium">{student.allocated_hostel || '-'}</span>
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <div className="grid gap-2">
                          <ERPButton
                            variant="secondary"
                            disabled={detailLoading}
                            onClick={() => openStudentDetail(student.id)}
                          >
                            <Eye className="h-4 w-4" />
                            View Details
                          </ERPButton>
                          <ERPButton
                            variant={student.verification_status === 'verified' ? 'secondary' : 'primary'}
                            disabled={actionLoadingId === student.id}
                            onClick={() =>
                              handleStudentAction(student.id, () =>
                                verifyStudentApplication(student.id, student.verification_status !== 'verified')
                              )
                            }
                          >
                            {student.verification_status === 'verified' ? 'Move to Pending' : 'Verify'}
                          </ERPButton>
                          <ERPButton
                            variant={student.shortlist_status === 'shortlisted' ? 'secondary' : 'success'}
                            disabled={actionLoadingId === student.id}
                            onClick={() =>
                              handleStudentAction(student.id, () =>
                                toggleShortlistStudent(student.id, student.shortlist_status !== 'shortlisted')
                              )
                            }
                          >
                            {student.shortlist_status === 'shortlisted' ? 'Remove Shortlist' : 'Shortlist'}
                          </ERPButton>
                          <div className="flex gap-2">
                            <select
                              className="h-11 min-w-[160px] rounded-2xl border border-white/60 bg-white/90 px-4 text-sm text-slate-900"
                              value={allocationDrafts[student.id] || 'Vaidehi Hostel'}
                              onChange={(event) =>
                                setAllocationDrafts((prev) => ({ ...prev, [student.id]: event.target.value }))
                              }
                            >
                              <option value="Vaidehi Hostel">Vaidehi Hostel</option>
                              <option value="Mahima Hostel">Mahima Hostel</option>
                            </select>
                            <ERPButton
                              variant="secondary"
                              disabled={actionLoadingId === student.id || student.shortlist_status !== 'shortlisted'}
                              onClick={() =>
                                handleStudentAction(student.id, () =>
                                  allocateHostel(student.id, allocationDrafts[student.id] || 'Vaidehi Hostel')
                                )
                              }
                            >
                              Allocate
                            </ERPButton>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {!loading && (!studentsData.items || studentsData.items.length === 0) ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-12 text-center text-sm text-slate-500">
                        No student applications match the current filters.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </ERPSurfaceCard>

          <div className="text-sm text-slate-500">
            <a href="/erp" className="inline-flex items-center gap-2 font-semibold text-cyan-700 underline">
              <Home className="h-4 w-4" />
              Back to ERP portal
            </a>
          </div>
        </ERPPageTransition>

        {(detailLoading || selectedStudentDetail) ? (
          <div className="fixed inset-0 z-[90] flex justify-end bg-slate-950/35 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full max-w-5xl overflow-y-auto border-l border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(248,250,252,0.94))] p-5 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)]"
            >
              <div className="sticky top-0 z-[2] -mx-5 -mt-5 border-b border-slate-200/80 bg-white/92 px-5 py-4 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Student Detail View</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                      {selectedStudentDetail?.student_name || 'Loading student record'}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {selectedStudentDetail?.application_number || 'Fetching full application details'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeStudentDetail}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {detailLoading && !selectedStudentDetail ? (
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-sm text-slate-500">
                  Loading full student application...
                </div>
              ) : selectedStudentDetail ? (
                <div className="space-y-6 pt-5">
                  <ERPSurfaceCard className="erp-glass-panel overflow-hidden p-0">
                    <div className="relative overflow-hidden rounded-[32px]">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_56%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_44%)]" />
                      <div className="relative grid gap-6 p-6 lg:grid-cols-[1.08fr,0.92fr] lg:p-7">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                          {selectedStudentDetail.photo_url ? (
                            <img
                              src={resolveAssetUrl(selectedStudentDetail.photo_url)}
                              alt={detailName}
                              className="h-32 w-28 rounded-[28px] object-cover shadow-[0_18px_40px_-26px_rgba(15,23,42,0.45)]"
                            />
                          ) : (
                            <div className="flex h-32 w-28 items-center justify-center rounded-[28px] bg-gradient-to-br from-cyan-500 to-emerald-500 text-3xl font-semibold text-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.45)]">
                              {detailInitial}
                            </div>
                          )}

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap gap-2">
                              <Badge value={selectedStudentDetail.verification_status} />
                              <Badge value={selectedStudentDetail.application_payment_status} />
                              <Badge value={selectedStudentDetail.shortlist_status} />
                              <Badge value={selectedStudentDetail.hostel_status} />
                            </div>

                            <h3 className="mt-4 text-3xl font-semibold text-slate-950">{detailName}</h3>
                            <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                              {selectedStudentDetail.application_number}
                            </p>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                              <DetailMetric label="Course" value={detailSummary.course_name} />
                              <DetailMetric label="Program / Session" value={`${displayValue(detailSummary.program)} / ${displayValue(detailSummary.session)}`} />
                              <DetailMetric label="Email" value={detailSummary.email} />
                              <DetailMetric label="Mobile Number" value={detailSummary.mobile_number} />
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <DetailMetric label="Registered On" value={formatDate(selectedStudentDetail.registered_at)} />
                          <DetailMetric label="Application Status" value={selectedStudentDetail.application_status} />
                          <DetailMetric label="Registration Fee" value={selectedStudentDetail.application_payment_status} />
                          <DetailMetric label="Hostel Allocation" value={selectedStudentDetail.allocated_hostel} />
                          <DetailMetric label="Preferred Hostel" value={detailSummary.preferred_hostel} />
                          <DetailMetric label="Registration DOB" value={selectedStudentDetail.registration_date_of_birth} />
                        </div>
                      </div>
                    </div>
                  </ERPSurfaceCard>

                  <div className="grid gap-6 xl:grid-cols-[0.92fr,1.08fr]">
                    <div className="space-y-6">
                      <ERPSurfaceCard className="erp-glass-panel p-6">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-cyan-600" />
                          <h3 className="text-lg font-semibold text-slate-900">Timeline</h3>
                        </div>
                        <div className="mt-4 grid gap-3">
                          {[
                            ['Registration Date', formatDate(selectedStudentDetail.registered_at)],
                            ['Application Submitted', formatDate(selectedStudentDetail.application_submitted_at)],
                            ['Verified On', formatDate(selectedStudentDetail.verified_at)],
                            ['Shortlisted On', formatDate(selectedStudentDetail.shortlisted_at)],
                            ['Hostel Allocated On', formatDate(selectedStudentDetail.hostel_allocated_at)],
                          ].map(([label, value]) => (
                            <DetailMetric key={label} label={label} value={value} />
                          ))}
                        </div>
                      </ERPSurfaceCard>

                      <ERPSurfaceCard className="erp-glass-panel p-6">
                        <h3 className="text-lg font-semibold text-slate-900">Receipts</h3>
                        <div className="mt-4 grid gap-3">
                          {selectedStudentDetail.application_receipt?.receipt_url ? (
                            <a
                              href={resolveAssetUrl(selectedStudentDetail.application_receipt.receipt_url)}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-sm font-medium text-slate-800 transition hover:border-cyan-200 hover:bg-cyan-50/70"
                            >
                              Application Receipt
                              <Download className="h-4 w-4 text-cyan-600" />
                            </a>
                          ) : (
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-500">
                              Application receipt not generated yet.
                            </div>
                          )}
                          {selectedStudentDetail.hostel_receipt?.receipt_url ? (
                            <a
                              href={resolveAssetUrl(selectedStudentDetail.hostel_receipt.receipt_url)}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-sm font-medium text-slate-800 transition hover:border-cyan-200 hover:bg-cyan-50/70"
                            >
                              Hostel Receipt
                              <Download className="h-4 w-4 text-cyan-600" />
                            </a>
                          ) : (
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-500">
                              Hostel receipt not generated yet.
                            </div>
                          )}
                        </div>
                      </ERPSurfaceCard>
                    </div>

                    <ERPSurfaceCard className="erp-glass-panel p-6">
                      <h3 className="text-lg font-semibold text-slate-900">Status Tracker</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        Each stage reflects the current operational state of the student application.
                      </p>
                      <div className="mt-4">
                        <ERPStatusTracker
                          items={selectedStudentDetail.tracker || []}
                          gridClassName="grid gap-3 md:grid-cols-2"
                        />
                      </div>
                    </ERPSurfaceCard>
                  </div>

                  <div className="grid gap-6 xl:grid-cols-2">
                    {detailSections.map((section) => (
                      <DetailSection
                        key={section.title}
                        title={section.title}
                        items={section.fields.map(([label, key]) => [
                          label,
                          key === 'application_number' ? selectedStudentDetail.application_number : detailSummary[key],
                        ])}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </motion.div>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default ERPAdminPanel;
