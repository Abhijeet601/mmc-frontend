export const HOSTEL_NAMES = ['Vaidehi Hostel', 'Mahima Hostel'];

const numberFormatter = new Intl.NumberFormat('en-IN');
const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

export const formatNumber = (value) => numberFormatter.format(Number(value || 0));
export const formatCurrency = (value) => currencyFormatter.format(Number(value || 0));

export const formatDateTime = (value) => {
  if (!value) return 'Pending';
  try {
    return new Date(value).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (_) {
    return 'Pending';
  }
};

export const formatDate = (value) => {
  if (!value) return 'Pending';
  try {
    return new Date(value).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  } catch (_) {
    return 'Pending';
  }
};

export const statusLabel = (value) =>
  String(value || 'pending')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

export const percentage = (numerator, denominator) => {
  if (!denominator) return 0;
  return Math.round((Number(numerator || 0) / Number(denominator || 0)) * 100);
};

export const clampPercent = (value) => Math.max(0, Math.min(100, Math.round(Number(value || 0))));

export const getStatusTone = (value, theme = 'light') => {
  const normalized = String(value || 'pending').toLowerCase();

  const tones = {
    verified: 'emerald',
    paid: 'emerald',
    shortlisted: 'blue',
    active: 'emerald',
    success: 'emerald',
    approve_application_payment: 'emerald',
    approve_hostel_payment: 'emerald',
    create: 'blue',
    update: 'blue',
    submission: 'blue',
    shortlist: 'blue',
    action: 'blue',
    accent: 'blue',
    allocate_room: 'emerald',
    verification: 'emerald',
    payment: 'emerald',
    full: 'rose',
    delete: 'rose',
    suspended: 'rose',
    failed: 'rose',
    payment_failed: 'rose',
    reject_payment: 'rose',
    pending: 'amber',
    payment_pending: 'amber',
    draft: 'amber',
    awaiting_allocation: 'slate',
    preference_pending: 'slate',
    not_available: 'slate',
    info: 'slate',
    not_started: 'slate',
    left: 'amber',
  };

  const tone = tones[normalized] || 'slate';
  const themeMap = {
    light: {
      emerald: 'border-emerald-200 bg-emerald-50 text-emerald-700',
      blue: 'border-blue-200 bg-blue-50 text-blue-700',
      amber: 'border-amber-200 bg-amber-50 text-amber-700',
      rose: 'border-rose-200 bg-rose-50 text-rose-700',
      slate: 'border-slate-200 bg-slate-100 text-slate-700',
    },
    dark: {
      emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
      blue: 'border-blue-500/30 bg-blue-500/10 text-blue-200',
      amber: 'border-amber-500/30 bg-amber-500/10 text-amber-200',
      rose: 'border-rose-500/30 bg-rose-500/10 text-rose-200',
      slate: 'border-slate-700 bg-slate-800/80 text-slate-200',
    },
  };

  return themeMap[theme]?.[tone] || themeMap.light[tone];
};

export const inferFloorLabel = (roomNumber) => {
  const raw = String(roomNumber || '').trim();
  const match = raw.match(/^(\d+)/);
  if (!match) return 'Ground';
  const firstDigit = Number(match[1][0]);
  if (Number.isNaN(firstDigit)) return 'Ground';
  if (firstDigit <= 0) return 'Ground';
  return `Floor ${firstDigit}`;
};

export const getRoomOccupancyTone = (room) => {
  const occupied = Number(room?.occupied_beds || 0);
  const available = Number(room?.available_beds || 0);
  const capacity = Number(room?.bed_capacity || occupied + available || 0);

  if (!capacity || available <= 0) return 'full';
  if (occupied / capacity >= 0.75) return 'warning';
  return 'available';
};

export const getRoomToneClasses = (tone, theme = 'light') => {
  const tones = {
    light: {
      available: 'border-emerald-200 bg-emerald-50 text-emerald-700',
      warning: 'border-amber-200 bg-amber-50 text-amber-700',
      full: 'border-rose-200 bg-rose-50 text-rose-700',
    },
    dark: {
      available: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
      warning: 'border-amber-500/30 bg-amber-500/10 text-amber-200',
      full: 'border-rose-500/30 bg-rose-500/10 text-rose-200',
    },
  };

  return tones[theme]?.[tone] || tones.light[tone];
};

export const groupRoomsByHierarchy = (rooms = []) =>
  rooms.reduce((hostelMap, room) => {
    const hostelName = room.hostel_name || 'Unassigned Hostel';
    const blockName = room.block_name || 'Block';
    const floorLabel = inferFloorLabel(room.room_number);

    if (!hostelMap[hostelName]) hostelMap[hostelName] = {};
    if (!hostelMap[hostelName][blockName]) hostelMap[hostelName][blockName] = {};
    if (!hostelMap[hostelName][blockName][floorLabel]) hostelMap[hostelName][blockName][floorLabel] = [];

    hostelMap[hostelName][blockName][floorLabel].push(room);
    return hostelMap;
  }, {});

export const buildPaymentRows = (students = []) =>
  students
    .filter(
      (student) =>
        student.application_payment_status === 'paid' ||
        student.hostel_status === 'paid' ||
        student.hostel_status === 'payment_pending'
    )
    .map((student) => ({
      id: student.id,
      application_number: student.application_number,
      name: student.name,
      course_name: student.course_name,
      application_payment_status: student.application_payment_status,
      hostel_status: student.hostel_status,
      hostel_name: student.allocated_hostel,
      hostel_payment_date: student.hostel_payment_date,
    }));

export const buildActivityRows = (dashboard, students = []) => {
  const fromDashboard =
    dashboard?.recent_activities?.map((activity, index) => ({
      id: `dashboard-${index}`,
      title: activity.title,
      description: activity.description,
      action_type: activity.tone || 'info',
      actor: 'System',
      timestamp: activity.timestamp,
    })) || [];

  const fromStudents = students.flatMap((student) => {
    const actions = [];
    if (student.application_submitted_at) {
      actions.push({
        id: `${student.id}-submitted`,
        title: 'Application submitted',
        description: `${student.name || student.application_number} submitted the hostel application.`,
        action_type: 'submission',
        actor: 'Applicant',
        timestamp: student.application_submitted_at,
      });
    }
    if (student.verified_at) {
      actions.push({
        id: `${student.id}-verified`,
        title: 'Application verified',
        description: `${student.name || student.application_number} moved to verified state.`,
        action_type: 'verification',
        actor: 'Admin',
        timestamp: student.verified_at,
      });
    }
    if (student.shortlisted_at) {
      actions.push({
        id: `${student.id}-shortlisted`,
        title: 'Student shortlisted',
        description: `${student.name || student.application_number} added to shortlist.`,
        action_type: 'shortlist',
        actor: 'Admin',
        timestamp: student.shortlisted_at,
      });
    }
    if (student.hostel_payment_date) {
      actions.push({
        id: `${student.id}-payment`,
        title: 'Hostel payment recorded',
        description: `${student.name || student.application_number} completed hostel payment.`,
        action_type: 'payment',
        actor: 'Finance',
        timestamp: student.hostel_payment_date,
      });
    }
    return actions;
  });

  return [...fromDashboard, ...fromStudents]
    .filter((item) => item.timestamp)
    .sort((left, right) => new Date(right.timestamp).getTime() - new Date(left.timestamp).getTime());
};

export const createCsvBlob = (rows) => {
  const headers = Object.keys(rows[0] || {});
  const csv = [
    headers.join(','),
    ...rows.map((row) =>
      headers
        .map((header) => {
          const value = String(row[header] ?? '');
          return `"${value.replace(/"/g, '""')}"`;
        })
        .join(',')
    ),
  ].join('\n');

  return new Blob([csv], { type: 'text/csv;charset=utf-8;' });
};
