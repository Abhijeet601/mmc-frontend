import React, { lazy, Suspense } from 'react';
import { useParams, Routes, Route, useNavigate } from 'react-router-dom';
import ERPAdminLayout, { useAdmin } from './Layout/ERPAdminLayout';
import { Helmet } from 'react-helmet-async';
import { toast } from '../components/ui/use-toast';
import {
  getAdminDashboard,
  getAdminStudents,
  getOldStudents,
  getAdminHostelRooms,
  loginAdmin,
  getAdminToken,
  clearAdminToken,
} from '../services/erpApi';

// Lazy load pages
const DashboardPage = lazy(() => import('./DashboardPage'));
const StudentsPage = lazy(() => import('./StudentsPage'));
const OldStudentsPage = lazy(() => import('./OldStudentsPage'));

const ERPAdminIndex = () => {
  const params = useParams();
  const navigate = useNavigate();
  const section = params['*'] || 'dashboard';

  // Shared state
  const [authChecked, setAuthChecked] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loginLoading, setLoginLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [exporting, setExporting] = React.useState(false);
  const [loginForm, setLoginForm] = React.useState({ username: 'admin', password: '' });
  
  const [dashboard, setDashboard] = React.useState(null);
  const [studentsData, setStudentsData] = React.useState({ total: 0, items: [] });
  const [oldStudentsData, setOldStudentsData] = React.useState({ total: 0, items: [] });
  const [roomsData, setRoomsData] = React.useState({ total: 0, items: [] });

  const loadData = async () => {
    setLoading(true);
    try {
      const [dashboardData, students, oldStudents, rooms] = await Promise.all([
        getAdminDashboard(),
        getAdminStudents({ limit: 100, offset: 0 }),
        getOldStudents({ limit: 50, offset: 0 }),
        getAdminHostelRooms(),
      ]);
      setDashboard(dashboardData);
      setStudentsData(students);
      setOldStudentsData(oldStudents);
      setRoomsData(rooms);
    } catch (error) {
      toast({
        title: 'Load failed',
        description: error.message || 'Please refresh or login again',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const token = getAdminToken();
    if (token) {
      setLoggedIn(true);
      loadData();
    }
    setAuthChecked(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      await loginAdmin(loginForm);
      setLoggedIn(true);
      toast({ title: 'Welcome to Admin Dashboard' });
      loadData();
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error.message || 'Invalid credentials',
        variant: 'destructive',
      });
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    clearAdminToken();
    setLoggedIn(false);
    navigate('/erp');
  };

  const contextValue = {
    dashboard,
    studentsData,
    oldStudentsData,
    roomsData,
    loading,
    loadData: () => loadData(),
    exporting,
    onExport: () => {/* export logic */},
    onRefresh: loadData,
    onStudentAction: (action, id) => console.log('Action:', action, id),
    onOldStudentAction: (action, student) => console.log('OldStudent:', action, student),
    navigate,
  };

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <Helmet>
          <title>Admin Login | Hostel ERP</title>
        </Helmet>
        <div className="max-w-md w-full space-y-6">
          <div className="text-center">
            <div className="mx-auto h-20 w-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
              <ShieldCheck className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Login</h1>
            <p className="text-slate-600 mt-2">Secure access to Hostel ERP controls</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Admin Username"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-300"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-300"
              required
            />
            <ERPButton type="submit" className="w-full h-12" disabled={loginLoading}>
              {loginLoading ? 'Signing in...' : 'Login'}
            </ERPButton>
          </form>
        </div>
      </div>
    );
  }

  return (
    <ERPAdminLayout dashboardData={dashboard} exporting={exporting} onRefresh={loadData} onExport={() => {}}>
      <Suspense fallback={<div>Loading module...</div>}>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/old-students" element={<OldStudentsPage />} />
          {/* Add more routes as pages are created */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Suspense>
    </ERPAdminLayout>
  );
};

export default ERPAdminIndex;

