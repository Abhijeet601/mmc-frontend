import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  BedDouble,
  Bell,
  BookCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Download,
  Eye,
  FileSpreadsheet,
  Filter,
  LayoutDashboard,
  LogIn,
  LogOut,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Upload,
  Users2,
  WalletCards,
  X,
} from 'lucide-react';
import ERPBarChart from '@/components/erp/ERPBarChart';
import ERPButton from '@/components/erp/ERPButton';
import ERPBackdrop from '@/components/erp/ERPBackdrop';
import ERPMetricCard from '@/components/erp/ERPMetricCard';
import ERPPageTransition from '@/components/erp/ERPPageTransition';
import ERPStatusTracker from '@/components/erp/ERPStatusTracker';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { toast } from '@/components/ui/use-toast';
import {
  allocateHostel,
  clearAdminToken,
  createAdminHostelRoom,
  downloadStudentsExcel,
  getAdminDashboard,
  getAdminHostelRooms,
  getAdminStudentDetail,
  getAdminStudents,
  getAdminToken,
  loginAdmin,
  resolveAssetUrl,
  downloadAllocationTemplate,
  downloadShortlistTemplate,
  toggleShortlistStudent,
  updateAdminHostelRoom,
  uploadBulkAllocation,
  uploadBulkShortlist,
  verifyStudentApplication,
} from '@/services/erpApi';

const inputClass =
  'h-11 w-full rounded-2xl border border-white/60 bg-white/90 px-4 text-sm text-slate-900 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100';

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

const initialRoomForm = {
  hostel_name: 'Vaidehi Hostel',
  block_name: 'A',
  room_number: '',
  bed_capacity: 3,
  is_active: true,
  notes: '',
};

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

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'old-students', label: 'Old Students Management', icon: Users2 },
  { key: 'admissions', label: 'Admissions', icon: BookCheck },
  { key: 'students', label: 'Students', icon: Users2 },
  { key: 'hostels', label: 'Hostel Management', icon: Building2 },
  { key: 'allocation', label: 'Room Allocation', icon: BedDouble },
  { key: 'payments', label: 'Payments', icon: WalletCards },
  { key: 'reports', label: 'Reports', icon: FileSpreadsheet },
  { key: 'settings', label: 'Settings', icon: Settings },
];

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
    title: 'Family & Address',
    fields: [
      ["Father's Name", 'father_name'],
      ["Mother's Name", 'mother_name'],
      ['Local Guardian', 'local_guardian_name'],
      ['Guardian Mobile', 'guardian_mobile_number'],
      ['Correspondence Address', 'correspondence_address'],
    ],
  },
  {
    title: 'Academic Details',
    fields: [
      ['Institution', 'intermediate_college_name'],
      ['Board / University', 'intermediate_board'],
      ['Total Marks', 'total_marks'],
      ['Marks Obtained', 'marks_obtained'],
      ['Result Type', 'result_type'],
      ['Aggregate Percentage', 'aggregate_percentage'],
    ],
  },
  {
    title: 'Admission & Hostel',
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
      ['Hostel Block', 'hostel_block'],
      ['Room Number', 'room_number'],
      ['Bed Allocation', 'bed_number'],
    ],
  },
];

const formatDate = (value) => (value ? new Date(value).toLocaleString('en-IN') : '-');
const displayValue = (value) => (value === null || value === undefined || value === '' ? '-' : value);

const Badge = ({ value }) => (
  <span
    className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
      statusTone[value] || statusTone.pending
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

const DetailSection = ({ title, items }) => (
  <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map(([label, value]) => {
        const resolvedValue = displayValue(value);
        const isWide = /address|institution|subject|hostel/i.test(label) || String(resolvedValue).length > 34;
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

const SectionTitle = ({ eyebrow, title, description }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{eyebrow}</p>
    <h2 className="mt-2 text-2xl font-semibold text-slate-900">{title}</h2>
    {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
  </div>
);

const ERPAdminPanel = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [roomSaving, setRoomSaving] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [bulkShortlistFile, setBulkShortlistFile] = useState(null);
  const [bulkAllocationFile, setBulkAllocationFile] = useState(null);
  const [bulkShortlistHostel, setBulkShortlistHostel] = useState('');
  const [bulkAllocationHostel, setBulkAllocationHostel] = useState('');
  const [bulkLoading, setBulkLoading] = useState({
    shortlist: false,
    allocation: false,
    downloadShortlist: false,
    downloadAllocation: false,
  });
  const [loginForm, setLoginForm] = useState({ username: 'admin', password: '' });
  const [filters, setFilters] = useState(defaultFilters);
  const [dashboard, setDashboard] = useState(null);
  const [studentsData, setStudentsData] = useState({ total: 0, items: [] });
  const [roomsData, setRoomsData] = useState({ total: 0, items: [] });
  const [allocationDrafts, setAllocationDrafts] = useState({});
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [detailLoading, setDetailLoading] = useState(false);
  const [selectedStudentDetail, setSelectedStudentDetail] = useState(null);
  const [roomForm, setRoomForm] = useState(initialRoomForm);
  const [editingRoomId, setEditingRoomId] = useState(null);

  const activeCourseList = useMemo(
    () => Array.from(new Set((studentsData.items || []).map((item) => item.course_name).filter(Boolean))),
    [studentsData.items]
  );
  const activeSessionList = useMemo(
    () => Array.from(new Set((studentsData.items || []).map((item) => item.session).filter(Boolean))),
    [studentsData.items]
  );
  const activeRoomOptions = useMemo(() => (roomsData.items || []).filter((room) => room.is_active), [roomsData.items]);
  const pendingAdmissions = useMemo(
    () => (studentsData.items || []).filter((item) => item.verification_status !== 'verified'),
    [studentsData.items]
  );
  const shortlistedStudents = useMemo(
    () => (studentsData.items || []).filter((item) => item.shortlist_status === 'shortlisted'),
    [studentsData.items]
  );
  const paymentRows = useMemo(
    () =>
      (studentsData.items || []).filter(
        (item) =>
          item.application_payment_status === 'paid' ||
          item.hostel_status === 'paid' ||
          item.hostel_status === 'payment_pending'
      ),
    [studentsData.items]
  );

  const detailSummary = selectedStudentDetail?.summary || {};
  const detailName = selectedStudentDetail?.student_name || 'Student';
  const detailInitial = detailName.trim().charAt(0).toUpperCase() || 'S';
  const activeNavItem = navItems.find((item) => item.key === selectedSection) || navItems[0];
  const pendingAlertsCount = dashboard?.pending_applications ?? 0;

  const buildAllocationDrafts = (students, rooms) => {
    const roomKeyToId = new Map(
      (rooms || []).map((room) => [`${room.hostel_name}|${room.block_name}|${room.room_number}`, String(room.id)])
    );
    return Object.fromEntries(
      (students || []).map((item) => {
        const roomKey =
          item.allocated_hostel && item.hostel_block && item.room_number
            ? `${item.allocated_hostel}|${item.hostel_block}|${item.room_number}`
            : '';
        return [item.id, { room_id: roomKey ? roomKeyToId.get(roomKey) || '' : '', bed_number: item.bed_number || '' }];
      })
    );
  };

  const loadData = async (nextFilters = filters) => {
    setLoading(true);
    try {
      const [dashboardData, students, rooms] = await Promise.all([
        getAdminDashboard(),
        getAdminStudents({ ...nextFilters, limit: 200, offset: 0 }),
        getAdminHostelRooms(),
      ]);
      setDashboard(dashboardData);
      setStudentsData(students);
      setRoomsData(rooms);
      setAllocationDrafts(buildAllocationDrafts(students.items, rooms.items));
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
      setRoomsData({ total: 0, items: [] });
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
      toast({ title: 'Admin login successful', description: 'Hostel ERP admin controls are ready.' });
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

  const handleAllocateStudent = async (studentId) => {
    const draft = allocationDrafts[studentId];
    if (!draft?.room_id) {
      toast({ title: 'Select a room', description: 'Choose a hostel room before assigning allocation.' });
      return;
    }

    await handleStudentAction(studentId, () =>
      allocateHostel(studentId, {
        room_id: Number(draft.room_id),
        bed_number: draft.bed_number || undefined,
      })
    );
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      await downloadStudentsExcel(filters);
      toast({ title: 'Excel exported', description: 'Student workbook downloaded successfully.' });
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

  const handleDownloadShortlistTemplate = async () => {
    setBulkLoading((prev) => ({ ...prev, downloadShortlist: true }));
    try {
      await downloadShortlistTemplate();
      toast({ title: 'Template downloaded', description: 'Bulk shortlist Excel template is ready.' });
    } catch (error) {
      toast({ title: 'Download failed', description: error.message || 'Unable to download template.' });
    } finally {
      setBulkLoading((prev) => ({ ...prev, downloadShortlist: false }));
    }
  };

  const handleDownloadAllocationTemplate = async () => {
    setBulkLoading((prev) => ({ ...prev, downloadAllocation: true }));
    try {
      await downloadAllocationTemplate();
      toast({ title: 'Template downloaded', description: 'Bulk room allocation Excel template is ready.' });
    } catch (error) {
      toast({ title: 'Download failed', description: error.message || 'Unable to download template.' });
    } finally {
      setBulkLoading((prev) => ({ ...prev, downloadAllocation: false }));
    }
  };

  const handleBulkShortlistUpload = async (event) => {
    event.preventDefault();
    if (!bulkShortlistFile) {
      toast({ title: 'Select a file', description: 'Upload the updated shortlist Excel first.' });
      return;
    }

    setBulkLoading((prev) => ({ ...prev, shortlist: true }));
    try {
      const data = await uploadBulkShortlist(bulkShortlistFile, bulkShortlistHostel);
      const invalidNotice = data.invalid_registrations ? ` ${data.invalid_registrations} registration numbers not found.` : '';
      const skippedNotice = data.skipped_rows ? ` ${data.skipped_rows} rows skipped.` : '';
      toast({
        title: 'Shortlist processed',
        description: `${data.shortlisted_yes} shortlisted, ${data.shortlisted_no} removed, ${data.updated_allotted_category} category updates.${invalidNotice}${skippedNotice}`,
      });
      setBulkShortlistFile(null);
      setBulkShortlistHostel('');
      await loadData();
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: error.message || 'Unable to process shortlist file.',
        duration: 7000,
      });
    } finally {
      setBulkLoading((prev) => ({ ...prev, shortlist: false }));
    }
  };

  const handleBulkAllocationUpload = async (event) => {
    event.preventDefault();
    if (!bulkAllocationFile) {
      toast({ title: 'Select a file', description: 'Upload the updated room allocation Excel first.' });
      return;
    }

    setBulkLoading((prev) => ({ ...prev, allocation: true }));
    try {
      const data = await uploadBulkAllocation(bulkAllocationFile, bulkAllocationHostel);
      const errors = data.room_errors + data.invalid_registrations + data.not_shortlisted + data.skipped_rows;
      toast({
        title: 'Room allocation processed',
        description: `${data.allocated} allocations saved, ${data.auto_assigned_beds} beds auto-assigned.${errors ? ` ${errors} rows skipped.` : ''}`,
      });
      setBulkAllocationFile(null);
      setBulkAllocationHostel('');
      await loadData();
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: error.message || 'Unable to process allocation file.',
        duration: 7000,
      });
    } finally {
      setBulkLoading((prev) => ({ ...prev, allocation: false }));
    }
  };

  const handleRoomSubmit = async (event) => {
    event.preventDefault();
    setRoomSaving(true);
    try {
      const payload = { ...roomForm, bed_capacity: Number(roomForm.bed_capacity) };
      if (editingRoomId) {
        await updateAdminHostelRoom(editingRoomId, payload);
        toast({ title: 'Room updated successfully' });
      } else {
        await createAdminHostelRoom(payload);
        toast({ title: 'Room created successfully' });
      }
      setRoomForm(initialRoomForm);
      setEditingRoomId(null);
      await loadData();
    } catch (error) {
      toast({
        title: editingRoomId ? 'Room update failed' : 'Room creation failed',
        description: error.message || 'Unable to save room details.',
        duration: 7000,
      });
    } finally {
      setRoomSaving(false);
    }
  };

  const handleEditRoom = (room) => {
    setEditingRoomId(room.id);
    setRoomForm({
      hostel_name: room.hostel_name,
      block_name: room.block_name,
      room_number: room.room_number,
      bed_capacity: room.bed_capacity,
      is_active: room.is_active,
      notes: room.notes || '',
    });
    setSelectedSection('hostels');
  };

  const handleRoomFormReset = () => {
    setEditingRoomId(null);
    setRoomForm(initialRoomForm);
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

  const renderDashboardSection = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ERPMetricCard title="Total Applications" value={dashboard?.total_applications ?? 0} icon={Users2} delay={0.02} />
        <ERPMetricCard title="Old Students" value={dashboard?.old_students ?? 0} icon={Users2} delay={0.08} />
        <ERPMetricCard title="Pending Applications" value={dashboard?.pending_applications ?? 0} icon={Filter} delay={0.14} />
        <ERPMetricCard
          title="Hostel Occupancy"
          value={dashboard?.occupied_beds ?? 0}
          icon={BedDouble}
          subtitle={`${dashboard?.available_beds ?? 0} beds available`}
          delay={0.2}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-[1.08fr,0.92fr]">
        <ERPSurfaceCard className="erp-glass-panel p-6">
          <SectionTitle
            eyebrow="Operational Overview"
            title="System statistics"
            description="Applications, approvals, and hostel occupancy from the current admission cycle."
          />
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <DetailMetric label="Shortlisted Students" value={dashboard?.shortlisted_students ?? 0} />
            <DetailMetric label="Hostel Allocated" value={dashboard?.hostel_allocated_students ?? 0} />
          </div>
        </ERPSurfaceCard>

        <ERPSurfaceCard className="erp-glass-panel p-6">
          <SectionTitle
            eyebrow="Recent Activities"
            title="Latest workflow events"
            description="A concise feed of the newest student and allocation operations."
          />
          <div className="mt-5 space-y-3">
            {(dashboard?.recent_activities || []).length ? (
              dashboard.recent_activities.map((activity, index) => (
                <motion.div
                  key={`${activity.title}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4"
                >
                  <p className="font-semibold text-slate-900">{activity.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{activity.description}</p>
                  {activity.timestamp ? (
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                      {formatDate(activity.timestamp)}
                    </p>
                  ) : null}
                </motion.div>
              ))
            ) : (
              <p className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-sm text-slate-500">
                No recent activities available yet.
              </p>
            )}
          </div>
        </ERPSurfaceCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <ERPBarChart title="Applications by Course" items={dashboard?.by_course || []} tone="sky" />
        <ERPBarChart title="Applications by Category" items={dashboard?.by_category || []} tone="emerald" />
        <ERPBarChart title="Allocation by Hostel" items={dashboard?.by_hostel || []} tone="amber" />
      </div>
    </div>
  );

  const renderAdmissionsSection = () => (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-2">
        <ERPSurfaceCard className="erp-glass-panel p-6">
          <SectionTitle
            eyebrow="Bulk Shortlist"
            title="Mark shortlist status via Excel"
            description="Download the combined shortlist/allocation sheet, update YES/NO and allotted category, and optionally prefill hostel info in one upload."
          />
          <div className="mt-5 flex flex-wrap gap-3">
            <ERPButton type="button" variant="secondary" onClick={handleDownloadShortlistTemplate} disabled={bulkLoading.downloadShortlist}>
              <Download className="h-4 w-4" />
              {bulkLoading.downloadShortlist ? 'Preparing...' : 'Download Template'}
            </ERPButton>
          </div>
          <form className="mt-5 space-y-4" onSubmit={handleBulkShortlistUpload}>
            <label className="block text-sm font-medium text-slate-700">
              Optional default hostel (applied when marking YES)
              <select
                className={`mt-2 ${inputClass}`}
                value={bulkShortlistHostel}
                onChange={(event) => setBulkShortlistHostel(event.target.value)}
              >
                <option value="">No hostel during shortlist</option>
                <option value="Vaidehi Hostel">Vaidehi Hostel</option>
                <option value="Mahima Hostel">Mahima Hostel</option>
              </select>
            </label>
            <input
              type="file"
              accept=".csv,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              className={inputClass}
              onChange={(event) => setBulkShortlistFile(event.target.files?.[0] || null)}
            />
            <ERPButton type="submit" disabled={bulkLoading.shortlist}>
              <Upload className="h-4 w-4" />
              {bulkLoading.shortlist ? 'Processing...' : 'Upload Updated Excel'}
            </ERPButton>
            <p className="text-xs leading-relaxed text-slate-500">
              Columns: Registration Number, Student Name, Applied Category, Allotted Category, Shortlist Status (YES/NO), Hostel Name, Hostel Block, Room Number, Bed Number.
            </p>
          </form>
        </ERPSurfaceCard>

        <ERPSurfaceCard className="erp-glass-panel p-6">
          <SectionTitle
            eyebrow="Bulk Room Allocation"
            title="Assign hostel, room, and bed"
            description="Use the same combined sheet: shortlisted rows with hostel name + block + room + bed will be allocated with capacity checks."
          />
          <div className="mt-5 flex flex-wrap gap-3">
            <ERPButton
              type="button"
              variant="secondary"
              onClick={handleDownloadAllocationTemplate}
              disabled={bulkLoading.downloadAllocation}
            >
              <Download className="h-4 w-4" />
              {bulkLoading.downloadAllocation ? 'Preparing...' : 'Download Template'}
            </ERPButton>
          </div>
          <form className="mt-5 space-y-4" onSubmit={handleBulkAllocationUpload}>
            <label className="block text-sm font-medium text-slate-700">
              Default hostel for this upload
              <select
                className={`mt-2 ${inputClass}`}
                value={bulkAllocationHostel}
                onChange={(event) => setBulkAllocationHostel(event.target.value)}
              >
                <option value="">Use hostel column / detect by block</option>
                <option value="Vaidehi Hostel">Vaidehi Hostel</option>
                <option value="Mahima Hostel">Mahima Hostel</option>
              </select>
            </label>
            <input
              type="file"
              accept=".csv,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              className={inputClass}
              onChange={(event) => setBulkAllocationFile(event.target.files?.[0] || null)}
            />
            <ERPButton type="submit" disabled={bulkLoading.allocation}>
              <Upload className="h-4 w-4" />
              {bulkLoading.allocation ? 'Assigning...' : 'Upload Updated Excel'}
            </ERPButton>
            <p className="text-xs leading-relaxed text-slate-500">
              Use the same combined columns; include Hostel Name to avoid block conflicts and ensure shortlist status is YES before allocation is applied.
            </p>
          </form>
        </ERPSurfaceCard>
      </div>

      <ERPSurfaceCard className="erp-glass-panel p-6">
        <SectionTitle
          eyebrow="Verification Queue"
          title="Pending reviews"
          description="Review newly submitted applications and complete verification or shortlist actions quickly."
        />
        <div className="mt-5 space-y-3">
          {pendingAdmissions.length ? (
            pendingAdmissions.slice(0, 6).map((student) => (
              <div key={student.id} className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{student.name || 'Student'}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{student.application_number}</p>
                  </div>
                  <Badge value={student.verification_status} />
                </div>
                <p className="mt-3 text-sm text-slate-600">{student.course_name || '-'} • {student.session || '-'}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ERPButton variant="secondary" disabled={detailLoading} onClick={() => openStudentDetail(student.id)}>
                    <Eye className="h-4 w-4" />
                    View
                  </ERPButton>
                  <ERPButton
                    disabled={actionLoadingId === student.id}
                    onClick={() => handleStudentAction(student.id, () => verifyStudentApplication(student.id, true))}
                  >
                    Verify
                  </ERPButton>
                </div>
              </div>
            ))
          ) : (
            <p className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-sm text-slate-500">
              No pending admissions in the current filtered set.
            </p>
          )}
        </div>
      </ERPSurfaceCard>
    </div>
  );

  const renderStudentsSection = () => (
    <div className="space-y-6">
      <ERPSurfaceCard className="erp-glass-panel p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionTitle
            eyebrow="Student Records"
            title="Search and manage applicants"
            description="Filter student records, open detail views, and update verification or shortlist state."
          />
          <div className="flex flex-wrap gap-3">
            <ERPButton variant="secondary" onClick={() => loadData()}>
              <RefreshCw className="h-4 w-4" />
              Refresh
            </ERPButton>
            <ERPButton
              variant="secondary"
              onClick={() => {
                setFilters(defaultFilters);
                void loadData(defaultFilters);
              }}
            >
              Reset Filters
            </ERPButton>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Search
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
              <input
                className={`${inputClass} pl-11`}
                value={filters.search}
                onChange={(event) => setFilters((prev) => ({ ...prev, search: event.target.value }))}
                placeholder="App no / email / name"
              />
            </div>
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

        <div className="mt-4">
          <ERPButton onClick={() => loadData(filters)}>
            <Filter className="h-4 w-4" />
            Apply Filters
          </ERPButton>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[1220px] text-sm">
            <thead className="text-left text-slate-500">
              <tr>
                {['Student', 'Course', 'Verification', 'Shortlist', 'Allocation', 'Actions'].map((heading) => (
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
                    <p className="text-slate-700">Hostel: <span className="font-medium">{student.allocated_hostel || '-'}</span></p>
                    <p className="text-slate-700">
                      Room: <span className="font-medium">{student.hostel_block && student.room_number ? `${student.hostel_block}-${student.room_number}` : '-'}</span>
                    </p>
                    <p className="text-slate-700">Bed: <span className="font-medium">{student.bed_number || '-'}</span></p>
                  </td>
                  <td className="px-4 py-4">
                    <div className="grid gap-2">
                      <ERPButton variant="secondary" disabled={detailLoading} onClick={() => openStudentDetail(student.id)}>
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
    </div>
  );

  const renderHostelsSection = () => (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[0.9fr,1.1fr]">
        <ERPSurfaceCard className="erp-glass-panel p-6">
          <SectionTitle
            eyebrow="Room Inventory"
            title={editingRoomId ? 'Edit hostel room' : 'Create hostel room'}
            description="Manage hostel blocks, room numbers, capacity, and availability from a single inventory form."
          />
          <form className="mt-6 space-y-4" onSubmit={handleRoomSubmit}>
            <label className="block text-sm font-medium text-slate-700">
              Hostel Name
              <select
                className={`mt-2 ${inputClass}`}
                value={roomForm.hostel_name}
                onChange={(event) => setRoomForm((prev) => ({ ...prev, hostel_name: event.target.value }))}
              >
                <option value="Vaidehi Hostel">Vaidehi Hostel</option>
                <option value="Mahima Hostel">Mahima Hostel</option>
              </select>
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Block
                <input
                  className={`mt-2 ${inputClass}`}
                  value={roomForm.block_name}
                  onChange={(event) => setRoomForm((prev) => ({ ...prev, block_name: event.target.value }))}
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Room Number
                <input
                  className={`mt-2 ${inputClass}`}
                  value={roomForm.room_number}
                  onChange={(event) => setRoomForm((prev) => ({ ...prev, room_number: event.target.value }))}
                />
              </label>
            </div>
            <label className="block text-sm font-medium text-slate-700">
              Bed Capacity
              <input
                type="number"
                min="1"
                className={`mt-2 ${inputClass}`}
                value={roomForm.bed_capacity}
                onChange={(event) => setRoomForm((prev) => ({ ...prev, bed_capacity: event.target.value }))}
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Notes
              <textarea
                rows={4}
                className={`mt-2 ${inputClass} h-auto min-h-[110px] py-3`}
                value={roomForm.notes}
                onChange={(event) => setRoomForm((prev) => ({ ...prev, notes: event.target.value }))}
              />
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={roomForm.is_active}
                onChange={(event) => setRoomForm((prev) => ({ ...prev, is_active: event.target.checked }))}
              />
              Room is active
            </label>
            <div className="flex flex-wrap gap-3">
              <ERPButton type="submit" disabled={roomSaving}>
                {roomSaving ? 'Saving...' : editingRoomId ? 'Update Room' : 'Create Room'}
              </ERPButton>
              <ERPButton type="button" variant="secondary" onClick={handleRoomFormReset}>
                Reset
              </ERPButton>
            </div>
          </form>
        </ERPSurfaceCard>

        <ERPSurfaceCard className="erp-glass-panel p-6">
          <SectionTitle
            eyebrow="Capacity & Occupancy"
            title="Hostel room overview"
            description="Review room capacity, occupancy, and availability before making allocation decisions."
          />
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {(roomsData.items || []).map((room) => (
              <div
                key={room.id}
                className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-5 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.36)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{room.hostel_name}</p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      Block {room.block_name} • Room {room.room_number}
                    </h3>
                  </div>
                  <Badge value={room.is_active ? 'verified' : 'pending'} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <DetailMetric label="Capacity" value={room.bed_capacity} />
                  <DetailMetric label="Occupied" value={room.occupied_beds} />
                  <DetailMetric label="Available" value={room.available_beds} />
                </div>
                <div className="mt-4">
                  <ERPButton variant="secondary" onClick={() => handleEditRoom(room)}>
                    Edit Room
                  </ERPButton>
                </div>
              </div>
            ))}
          </div>
        </ERPSurfaceCard>
      </div>
    </div>
  );

  const renderAllocationSection = () => (
    <div className="space-y-6">
      <ERPSurfaceCard className="erp-glass-panel p-6">
        <SectionTitle
          eyebrow="Room Allocation"
          title="Assign hostel, room, and bed"
          description="Allocate shortlisted students to active hostel rooms and specify bed identifiers when needed."
        />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[1200px] text-sm">
            <thead className="text-left text-slate-500">
              <tr>
                {['Student', 'Current Status', 'Preferred Hostel', 'Room Selection', 'Bed', 'Action'].map((heading) => (
                  <th key={heading} className="px-4 py-3 font-semibold uppercase tracking-[0.16em]">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {shortlistedStudents.map((student) => (
                <tr key={student.id} className="border-t border-slate-200/70 align-top">
                  <td className="px-4 py-4">
                    <p className="font-semibold text-slate-900">{student.name || 'Student'}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{student.application_number}</p>
                  </td>
                  <td className="space-y-2 px-4 py-4">
                    <Badge value={student.hostel_status} />
                    <p className="text-slate-600">
                      {student.allocated_hostel
                        ? `${student.allocated_hostel}${student.hostel_block && student.room_number ? ` • ${student.hostel_block}-${student.room_number}` : ''}${student.bed_number ? ` • ${student.bed_number}` : ''}`
                        : 'Allocation pending'}
                    </p>
                  </td>
                  <td className="px-4 py-4 text-slate-700">{student.preferred_hostel || '-'}</td>
                  <td className="px-4 py-4">
                    <select
                      className={inputClass}
                      value={allocationDrafts[student.id]?.room_id || ''}
                      onChange={(event) =>
                        setAllocationDrafts((prev) => ({
                          ...prev,
                          [student.id]: { ...(prev[student.id] || {}), room_id: event.target.value },
                        }))
                      }
                    >
                      <option value="">Select room</option>
                      {activeRoomOptions.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.hostel_name} • Block {room.block_name} • Room {room.room_number} • {room.occupied_beds}/{room.bed_capacity}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-4">
                    <input
                      className={inputClass}
                      value={allocationDrafts[student.id]?.bed_number || ''}
                      onChange={(event) =>
                        setAllocationDrafts((prev) => ({
                          ...prev,
                          [student.id]: { ...(prev[student.id] || {}), bed_number: event.target.value },
                        }))
                      }
                      placeholder="B1 / B2"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <ERPButton variant="secondary" disabled={actionLoadingId === student.id} onClick={() => handleAllocateStudent(student.id)}>
                      Assign Room
                    </ERPButton>
                  </td>
                </tr>
              ))}
              {!shortlistedStudents.length ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-sm text-slate-500">
                    No shortlisted students available for room allocation.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </ERPSurfaceCard>
    </div>
  );

  const renderPaymentsSection = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <ERPMetricCard title="Application Paid" value={dashboard?.total_paid ?? 0} icon={CheckCircle2} delay={0.1} />
        <ERPMetricCard title="Hostel Paid" value={dashboard?.hostel_paid_students ?? 0} icon={BedDouble} delay={0.2} />
      </div>

      <ERPSurfaceCard className="erp-glass-panel p-6">
        <SectionTitle
          eyebrow="Payment Monitoring"
          title="Transaction status"
          description="Review application fee completion, final hostel fee progress, and identify pending collections."
        />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[1080px] text-sm">
            <thead className="text-left text-slate-500">
              <tr>
                {['Student', 'Application Fee', 'Hostel Fee', 'Allocation', 'Timeline'].map((heading) => (
                  <th key={heading} className="px-4 py-3 font-semibold uppercase tracking-[0.16em]">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paymentRows.map((student) => (
                <tr key={student.id} className="border-t border-slate-200/70">
                  <td className="px-4 py-4">
                    <p className="font-semibold text-slate-900">{student.name || 'Student'}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{student.application_number}</p>
                  </td>
                  <td className="px-4 py-4"><Badge value={student.application_payment_status} /></td>
                  <td className="px-4 py-4"><Badge value={student.hostel_status} /></td>
                  <td className="px-4 py-4 text-slate-600">
                    {student.allocated_hostel
                      ? `${student.allocated_hostel}${student.hostel_block && student.room_number ? ` • ${student.hostel_block}-${student.room_number}` : ''}`
                      : '-'}
                  </td>
                  <td className="px-4 py-4 text-slate-500">
                    {student.hostel_payment_date ? formatDate(student.hostel_payment_date) : formatDate(student.verified_at || student.shortlisted_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ERPSurfaceCard>
    </div>
  );

  const renderReportsSection = () => (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[0.92fr,1.08fr]">
        <ERPSurfaceCard className="erp-glass-panel p-6">
          <SectionTitle
            eyebrow="Export Reports"
            title="Download operational reports"
            description="Generate student, admission, payment, and occupancy reports for the current ERP cycle."
          />
          <div className="mt-6 space-y-3">
            {['Admission Reports', 'Hostel Occupancy Reports', 'Payment Reports', 'Student Reports'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
          <ERPButton className="mt-6" disabled={exporting} onClick={handleExport}>
            <Download className="h-4 w-4" />
            {exporting ? 'Exporting...' : 'Export Excel Workbook'}
          </ERPButton>
        </ERPSurfaceCard>

        <ERPSurfaceCard className="erp-glass-panel p-6">
          <SectionTitle
            eyebrow="Report Summary"
            title="Key report-ready metrics"
            description="Use these headline figures for institutional summaries and management reviews."
          />
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <DetailMetric label="Total Applications" value={dashboard?.total_applications ?? 0} />
            <DetailMetric label="Verified Students" value={dashboard?.verified_students ?? 0} />
            <DetailMetric label="Occupied Beds" value={dashboard?.occupied_beds ?? 0} />
            <DetailMetric label="Available Beds" value={dashboard?.available_beds ?? 0} />
          </div>
        </ERPSurfaceCard>
      </div>
    </div>
  );

  const renderSettingsSection = () => (
    <div className="space-y-6">
      <ERPSurfaceCard className="erp-glass-panel p-6">
        <SectionTitle
          eyebrow="Security & Access"
          title="Admin access settings"
          description="The admin portal remains hidden from the public ERP page and is available through a protected route."
        />
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <DetailMetric label="Hidden Routes" value="/admin-login and /system-admin" />
          <DetailMetric label="Authentication" value="Required for all admin modules" />
          <DetailMetric label="Public Landing Page" value="Student portal only" />
          <DetailMetric label="System Name" value="Hostel Admission & Management System" />
        </div>
      </ERPSurfaceCard>
    </div>
  );

  const renderActiveSection = () => {
    switch (selectedSection) {
      case 'dashboard':
        return renderDashboardSection();
      case 'admissions':
        return renderAdmissionsSection();
      case 'students':
        return renderStudentsSection();
      case 'hostels':
        return renderHostelsSection();
      case 'allocation':
        return renderAllocationSection();
      case 'payments':
        return renderPaymentsSection();
      case 'reports':
        return renderReportsSection();
      case 'settings':
        return renderSettingsSection();
      default:
        return renderDashboardSection();
    }
  };

  if (!authChecked) {
    return <section className="px-4 py-16 text-sm text-slate-500">Loading admin session...</section>;
  }

  if (!loggedIn) {
    return (
      <>
        <Helmet>
          <title>Admin Login | Hostel Admission &amp; Management System</title>
        </Helmet>

        <ERPBackdrop className="py-14">
          <ERPPageTransition className="relative z-10 mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr,0.95fr]">
            <ERPSurfaceCard className="erp-glass-panel p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Hidden Admin Portal
              </div>
              <h1 className="erp-display mt-5 text-4xl font-bold text-slate-950 md:text-5xl">
                Secure control center for admissions, hostel allocation, payments, and reporting.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                This interface is intentionally hidden from the public ERP landing page. Access is controlled through
                authenticated admin routes only.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['/admin-login', '/system-admin', 'Authentication Required'].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white/86 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Admissions', value: 'Review Ready' },
                  { label: 'Room Inventory', value: 'Managed' },
                  { label: 'Reports', value: 'Export Ready' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/60 bg-white/80 px-4 py-4 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </ERPSurfaceCard>

            <ERPSurfaceCard className="erp-glass-panel p-8" animatedBorder>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Admin Sign In</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Secure ERP login</h2>
              <p className="mt-2 text-sm text-slate-600">
                Authenticate with admin credentials to access dashboard metrics, student records, room allocation,
                payments, and reports.
              </p>
              <form className="mt-8 space-y-5" onSubmit={handleAdminLogin}>
                <label className="block text-sm font-medium text-slate-700">
                  Admin Username
                  <input required className={`mt-2 ${inputClass}`} value={loginForm.username} onChange={(event) => setLoginForm((prev) => ({ ...prev, username: event.target.value }))} />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Password
                  <input required type="password" className={`mt-2 ${inputClass}`} value={loginForm.password} onChange={(event) => setLoginForm((prev) => ({ ...prev, password: event.target.value }))} />
                </label>
                <ERPButton type="submit" disabled={loginLoading} className="w-full justify-center">
                  <LogIn className="h-4 w-4" />
                  {loginLoading ? 'Signing in...' : 'Login as Admin'}
                </ERPButton>
              </form>
            </ERPSurfaceCard>
          </ERPPageTransition>
        </ERPBackdrop>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Hostel Admission &amp; Management System</title>
      </Helmet>

      <ERPBackdrop className="py-8">
        <ERPPageTransition className="relative z-10 mx-auto max-w-7xl space-y-6">
          <ERPSurfaceCard className="erp-glass-panel overflow-hidden p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Hostel ERP Admin
                </p>
                <h1 className="erp-display mt-4 text-4xl font-bold text-slate-950">Admission operations dashboard</h1>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Review applications, manage student records, maintain hostel rooms, assign allocations, monitor
                  payments, and generate operational reports.
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

          <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
            <ERPSurfaceCard className="erp-admin-rail erp-admin-sidebar p-4" hover={false}>
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Navigation</p>
                  <p className="mt-1 font-semibold text-slate-900">Admin Modules</p>
                </div>
                <Bell className="h-4 w-4 text-cyan-600" />
              </div>
              <div className="space-y-2">
                {navItems.map((item) => {
                  const active = selectedSection === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setSelectedSection(item.key)}
                      className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                        active
                          ? 'border-cyan-200 bg-cyan-50 text-cyan-800 shadow-[0_18px_38px_-34px_rgba(6,182,212,0.5)]'
                          : 'border-slate-200 bg-white/80 text-slate-600 hover:border-cyan-100 hover:bg-cyan-50/50'
                      }`}
                    >
                      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${active ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <item.icon className="h-4 w-4" />
                      </span>
                      <p className="font-semibold">{item.label}</p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white/84 px-4 py-4 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Access Control</p>
                <p className="mt-2 font-semibold text-slate-900">Student portal remains public-facing.</p>
                <p className="mt-2">Admin access stays hidden behind authenticated routes and is not listed on the ERP landing page.</p>
              </div>
            </ERPSurfaceCard>

            <div className="space-y-6">
              <ERPSurfaceCard className="erp-admin-topbar overflow-hidden p-5" hover={false}>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Current Module</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">{activeNavItem.label}</h2>
                    <p className="mt-1 text-sm text-slate-600">
                      Notifications, profile context, and quick actions stay available while managing the hostel ERP.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="erp-topbar-chip rounded-2xl border border-slate-200 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Notifications</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{pendingAlertsCount} pending applications</p>
                    </div>
                    <div className="erp-topbar-chip rounded-2xl border border-slate-200 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Admin Profile</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">Hostel ERP Administrator</p>
                    </div>
                    <div className="erp-topbar-chip rounded-2xl border border-slate-200 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Quick Actions</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <ERPButton variant="secondary" className="px-3 py-2 text-xs" onClick={() => loadData()}>
                          <RefreshCw className="h-3.5 w-3.5" />
                          Refresh
                        </ERPButton>
                        <ERPButton variant="secondary" className="px-3 py-2 text-xs" disabled={exporting} onClick={handleExport}>
                          <Download className="h-3.5 w-3.5" />
                          Export
                        </ERPButton>
                      </div>
                    </div>
                  </div>
                </div>
              </ERPSurfaceCard>
              {loading ? (
                <ERPSurfaceCard className="erp-glass-panel p-8">
                  <p className="text-sm text-slate-500">Loading admin workspace...</p>
                </ERPSurfaceCard>
              ) : (
                renderActiveSection()
              )}
            </div>
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
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">{selectedStudentDetail?.student_name || 'Loading student record'}</h2>
                    <p className="mt-1 text-sm text-slate-500">{selectedStudentDetail?.application_number || 'Fetching full application details'}</p>
                  </div>
                  <button type="button" onClick={closeStudentDetail} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {detailLoading && !selectedStudentDetail ? (
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-sm text-slate-500">Loading full student application...</div>
              ) : selectedStudentDetail ? (
                <div className="space-y-6 pt-5">
                  <ERPSurfaceCard className="erp-glass-panel overflow-hidden p-0">
                    <div className="relative overflow-hidden rounded-[32px]">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_56%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_44%)]" />
                      <div className="relative grid gap-6 p-6 lg:grid-cols-[1.08fr,0.92fr] lg:p-7">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                          {selectedStudentDetail.photo_url ? (
                            <img src={resolveAssetUrl(selectedStudentDetail.photo_url)} alt={detailName} className="h-32 w-28 rounded-[28px] object-cover shadow-[0_18px_40px_-26px_rgba(15,23,42,0.45)]" />
                          ) : (
                            <div className="flex h-32 w-28 items-center justify-center rounded-[28px] bg-gradient-to-br from-cyan-500 to-emerald-500 text-3xl font-semibold text-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.45)]">{detailInitial}</div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap gap-2">
                              <Badge value={selectedStudentDetail.verification_status} />
                              <Badge value={selectedStudentDetail.application_payment_status} />
                              <Badge value={selectedStudentDetail.shortlist_status} />
                              <Badge value={selectedStudentDetail.hostel_status} />
                            </div>
                            <h3 className="mt-4 text-3xl font-semibold text-slate-950">{detailName}</h3>
                            <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{selectedStudentDetail.application_number}</p>
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
                          <DetailMetric label="Application Fee" value={selectedStudentDetail.application_payment_status} />
                          <DetailMetric label="Allocated Hostel" value={selectedStudentDetail.allocated_hostel} />
                          <DetailMetric label="Hostel Block / Room" value={`${displayValue(selectedStudentDetail.hostel_block)} / ${displayValue(selectedStudentDetail.room_number)}`} />
                          <DetailMetric label="Bed Allocation" value={selectedStudentDetail.bed_number} />
                        </div>
                      </div>
                    </div>
                  </ERPSurfaceCard>

                  <div className="grid gap-6 xl:grid-cols-[0.92fr,1.08fr]">
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
                        ].map(([label, value]) => <DetailMetric key={label} label={label} value={value} />)}
                      </div>
                    </ERPSurfaceCard>

                    <ERPSurfaceCard className="erp-glass-panel p-6">
                      <h3 className="text-lg font-semibold text-slate-900">Status Tracker</h3>
                      <p className="mt-2 text-sm text-slate-500">Each stage reflects the current operational state of the student application.</p>
                      <div className="mt-4">
                        <ERPStatusTracker items={selectedStudentDetail.tracker || []} gridClassName="grid gap-3 md:grid-cols-2" />
                      </div>
                    </ERPSurfaceCard>
                  </div>

                  <div className="grid gap-6 xl:grid-cols-2">
                    {detailSections.map((section) => (
                      <DetailSection
                        key={section.title}
                        title={section.title}
                        items={section.fields.map(([label, key]) => [label, key === 'application_number' ? selectedStudentDetail.application_number : detailSummary[key]])}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </motion.div>
          </div>
        ) : null}
      </ERPBackdrop>
    </>
  );
};

export default ERPAdminPanel;
