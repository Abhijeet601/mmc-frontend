import React, { useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { ClipboardList, CreditCard, FileText, Home, LogOut } from 'lucide-react';

import ERPButton from '@/components/erp/ERPButton';
import ERPMetricCard from '@/components/erp/ERPMetricCard';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import ErpShell from '@/features/erp/ErpShell';
import {
  clearStudentToken,
  getStudentDashboard,
  getStudentToken,
  payApplicationFee,
  payHostelFee,
} from '@/services/erpApi';

const brand = {
  href: '/erp/student/dashboard',
  eyebrow: 'Student',
  title: 'Hostel ERP',
  description: 'Application, payments, receipts, and hostel renewal workspace.',
  icon: Home,
};

const navItems = [
  { to: '/erp/student/dashboard', label: 'Dashboard', caption: 'Application overview', icon: Home },
  { to: '/erp/application-form', label: 'Application form', caption: 'Admission details', icon: ClipboardList },
  { to: '/erp/student/payments', label: 'Payments', caption: 'Fees and receipts', icon: CreditCard },
];

const StudentDashboard = ({ data, error }) => (
  <div className="space-y-5">
    {error ? <div className="rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">{error}</div> : null}
    <div className="grid gap-4 md:grid-cols-3">
      <ERPMetricCard title="Application" value={data?.application_status || 'Pending'} icon={ClipboardList} />
      <ERPMetricCard title="Payment" value={data?.payment_status || 'Not paid'} icon={CreditCard} delay={0.05} />
      <ERPMetricCard title="Hostel" value={data?.hostel_name || 'Not allotted'} icon={Home} delay={0.1} />
    </div>
    <ERPSurfaceCard className="p-5" hover={false}>
      <h2 className="text-lg font-semibold text-foreground">Next actions</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link to="/erp/application-form"><ERPButton>Open application</ERPButton></Link>
        <Link to="/erp/student/payments"><ERPButton variant="secondary">View payments</ERPButton></Link>
      </div>
    </ERPSurfaceCard>
  </div>
);

const Payments = () => {
  const [status, setStatus] = useState('');

  const runPayment = async (handler) => {
    setStatus('Processing payment request...');
    try {
      await handler();
      setStatus('Payment request completed.');
    } catch (error) {
      setStatus(error.message || 'Payment request failed.');
    }
  };

  return (
    <ERPSurfaceCard className="p-5" hover={false}>
      <h2 className="text-lg font-semibold text-foreground">Payments</h2>
      <p className="mt-2 text-sm text-muted-foreground">Submit hostel ERP payment requests and download receipts after backend confirmation.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <ERPButton onClick={() => runPayment(payApplicationFee)}>Application fee</ERPButton>
        <ERPButton
          variant="secondary"
          onClick={() =>
            runPayment(() =>
              payHostelFee({
                payment_type: 'hostel_fee',
                amount: 12000,
                hostel_name: 'Mahima',
              })
            )
          }
        >
          Hostel fee
        </ERPButton>
      </div>
      {status ? <p className="mt-4 rounded-2xl border border-border bg-muted/40 p-3 text-sm text-muted-foreground">{status}</p> : null}
    </ERPSurfaceCard>
  );
};

const ERPStudentWorkspace = () => {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!getStudentToken()) return;
    getStudentDashboard().then(setDashboard).catch((err) => setError(err.message || 'Unable to load dashboard.'));
  }, []);

  if (!getStudentToken()) return <Navigate to="/erp/student/login" replace />;

  const logout = () => {
    clearStudentToken();
    navigate('/erp/student/login', { replace: true });
  };

  return (
    <ErpShell
      brand={brand}
      navItems={navItems}
      title="Student dashboard"
      description="Track hostel admission, payment, and renewal activity."
      profile={{ label: dashboard?.name || 'Student', caption: dashboard?.application_no || 'MMC Hostel ERP' }}
      actions={[{ key: 'logout', node: <ERPButton variant="secondary" onClick={logout}><LogOut className="h-4 w-4" />Logout</ERPButton> }]}
    >
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<StudentDashboard data={dashboard} error={error} />} />
        <Route path="payments" element={<Payments />} />
        <Route path="*" element={<ERPSurfaceCard className="p-5"><FileText className="h-6 w-6 text-primary" /><p className="mt-3 text-sm text-muted-foreground">Section not found.</p></ERPSurfaceCard>} />
      </Routes>
    </ErpShell>
  );
};

export default ERPStudentWorkspace;
