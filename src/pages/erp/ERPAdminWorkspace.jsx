import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { BarChart3, CreditCard, Home, LogOut, ShieldCheck, Users } from 'lucide-react';

import ERPButton from '@/components/erp/ERPButton';
import ERPMetricCard from '@/components/erp/ERPMetricCard';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import ErpShell from '@/features/erp/ErpShell';
import {
  clearAdminToken,
  getAdminDashboard,
  getAdminPayments,
  getAdminStudents,
  getAdminToken,
  loginAdmin,
} from '@/services/erpApi';

const inputClass =
  'h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/15';

const brand = {
  href: '/erp/admin/dashboard',
  eyebrow: 'Admin',
  title: 'Hostel ERP',
  description: 'Review applications, payments, and student hostel records.',
  icon: ShieldCheck,
};

const navItems = [
  { to: '/erp/admin/dashboard', label: 'Dashboard', caption: 'Admission summary', icon: BarChart3 },
  { to: '/erp/admin/students', label: 'Students', caption: 'Application records', icon: Users },
  { to: '/erp/admin/payments', label: 'Payments', caption: 'Fee review', icon: CreditCard },
];

const ERPAdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await loginAdmin(form);
      navigate('/erp/admin/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Admin login failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md items-center px-4 py-10">
      <ERPSurfaceCard className="w-full p-6 sm:p-8" hover={false}>
        <h1 className="text-2xl font-semibold text-foreground">Admin login</h1>
        <form className="mt-6 space-y-4" onSubmit={submit}>
          <input className={inputClass} type="text" value={form.username} onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))} placeholder="Admin username" required />
          <input className={inputClass} type="password" value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} placeholder="Password" required />
          {error ? <div className="rounded-2xl border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">{error}</div> : null}
          <ERPButton type="submit" disabled={submitting} className="w-full justify-center">
            {submitting ? 'Signing in' : 'Login'}
          </ERPButton>
        </form>
      </ERPSurfaceCard>
    </div>
  );
};

const Dashboard = ({ data, error }) => (
  <div className="space-y-5">
    {error ? <div className="rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">{error}</div> : null}
    <div className="grid gap-4 md:grid-cols-3">
      <ERPMetricCard title="Applications" value={data?.total_applications ?? data?.applications ?? 0} icon={Users} />
      <ERPMetricCard title="Shortlisted" value={data?.shortlisted ?? 0} icon={ShieldCheck} delay={0.05} />
      <ERPMetricCard title="Payments" value={data?.payments ?? data?.total_payments ?? 0} icon={CreditCard} delay={0.1} />
    </div>
  </div>
);

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAdminStudents({ limit: 25 }).then((data) => setStudents(data?.items || data?.students || data || [])).catch((err) => setError(err.message));
  }, []);

  return (
    <ERPSurfaceCard className="overflow-hidden p-5" hover={false}>
      <h2 className="text-lg font-semibold text-foreground">Students</h2>
      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="border-b border-border text-muted-foreground">
            <tr><th className="py-3">Name</th><th>Email</th><th>Course</th><th>Status</th></tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id || student._id || index} className="border-b border-border/60">
                <td className="py-3 font-medium text-foreground">{student.name || student.student_name || '-'}</td>
                <td>{student.email || '-'}</td>
                <td>{student.course || '-'}</td>
                <td>{student.status || student.application_status || '-'}</td>
              </tr>
            ))}
            {!students.length ? <tr><td className="py-5 text-muted-foreground" colSpan="4">No student records loaded.</td></tr> : null}
          </tbody>
        </table>
      </div>
    </ERPSurfaceCard>
  );
};

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAdminPayments().then((data) => setPayments(data?.items || data?.payments || data || [])).catch((err) => setError(err.message));
  }, []);

  return (
    <ERPSurfaceCard className="p-5" hover={false}>
      <h2 className="text-lg font-semibold text-foreground">Payments</h2>
      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
      <div className="mt-4 space-y-3">
        {payments.map((payment, index) => (
          <div key={payment.id || payment._id || index} className="rounded-2xl border border-border bg-muted/30 p-4 text-sm">
            <p className="font-semibold text-foreground">{payment.student_name || payment.name || 'Student payment'}</p>
            <p className="mt-1 text-muted-foreground">{payment.payment_type || 'Fee'} - {payment.payment_status || payment.status || 'Pending'}</p>
          </div>
        ))}
        {!payments.length ? <p className="text-sm text-muted-foreground">No payment records loaded.</p> : null}
      </div>
    </ERPSurfaceCard>
  );
};

const ERPAdminWorkspace = () => {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!getAdminToken()) return;
    getAdminDashboard().then(setDashboard).catch((err) => setError(err.message || 'Unable to load admin dashboard.'));
  }, []);

  if (window.location.pathname.endsWith('/login')) return <ERPAdminLogin />;
  if (!getAdminToken()) return <Navigate to="/erp/admin/login" replace />;

  const logout = () => {
    clearAdminToken();
    navigate('/erp/admin/login', { replace: true });
  };

  return (
    <ErpShell
      brand={brand}
      navItems={navItems}
      title="Admin dashboard"
      description="Review hostel admission records and operational status."
      profile={{ label: 'Admin', caption: 'MMC Hostel ERP' }}
      actions={[{ key: 'logout', node: <ERPButton variant="secondary" onClick={logout}><LogOut className="h-4 w-4" />Logout</ERPButton> }]}
    >
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="login" element={<ERPAdminLogin />} />
        <Route path="dashboard" element={<Dashboard data={dashboard} error={error} />} />
        <Route path="students" element={<Students />} />
        <Route path="payments" element={<Payments />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </ErpShell>
  );
};

export default ERPAdminWorkspace;
