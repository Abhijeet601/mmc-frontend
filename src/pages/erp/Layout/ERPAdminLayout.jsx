import React, { createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users2, Building2, BedDouble, FileSpreadsheet, Settings, BookCheck, WalletCards, ShieldCheck, RefreshCw, Download, LogOut, Bell, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ERPButton from '../../../components/erp/ERPButton';
import ERPSurfaceCard from '../../../components/erp/ERPSurfaceCard';
import ERPBackdrop from '../../../components/erp/ERPBackdrop';
import ERPPageTransition from '../../../components/erp/ERPPageTransition';
import { toast } from '../../../components/ui/use-toast';
import { clearAdminToken, getAdminToken } from '../../../services/erpApi';
import { Helmet } from 'react-helmet-async';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within ERPAdminLayout');
  return context;
};

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin-login/dashboard' },
  { key: 'students', label: 'Student Applications', icon: Users2, path: '/admin-login/students' },
  { key: 'old-students', label: 'Old Students', icon: Users2, path: '/admin-login/old-students' },
  { key: 'hostels', label: 'Hostel Management', icon: Building2, path: '/admin-login/hostels' },
  { key: 'allocation', label: 'Room Allocation', icon: BedDouble, path: '/admin-login/allocation' },
  { key: 'bulk-upload', label: 'Bulk Upload', icon: BookCheck, path: '/admin-login/bulk-upload' },
  { key: 'payments', label: 'Payments', icon: WalletCards, path: '/admin-login/payments' },
  { key: 'reports', label: 'Reports', icon: FileSpreadsheet, path: '/admin-login/reports' },
  { key: 'settings', label: 'Settings', icon: Settings, path: '/admin-login/settings' },
];

const ERPAdminLayout = ({ children, activeSection = 'dashboard', dashboardData, onRefresh, exporting, onExport }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const pendingAlerts = dashboardData?.pending_applications ?? 0;

  const value = {
    activeSection,
    dashboardData,
    onRefresh,
    exporting,
    onExport,
    sidebarOpen,
    setSidebarOpen,
  };

  const handleLogout = () => {
    clearAdminToken();
    toast({ title: 'Logged out successfully' });
    navigate('/erp');
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Hostel ERP</title>
      </Helmet>
      <AdminContext.Provider value={value}>
        <ERPBackdrop className="min-h-screen py-8">
          <ERPPageTransition className="mx-auto max-w-7xl h-full space-y-6">
            {/* Top Header */}
            <ERPSurfaceCard className="erp-glass-panel p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden p-2 rounded-2xl border bg-white/80"
                  >
                    <ShieldCheck className="h-5 w-5" />
                  </button>
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      Hostel ERP Admin
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">{navItems.find(item => item.key === activeSection)?.label}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-2xl border bg-white/80">
                    <Bell className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium text-slate-700">{pendingAlerts} Pending</span>
                  </div>
                  <ERPButton
                    variant="secondary"
                    className="hidden lg:inline-flex"
                    onClick={() => setSidebarCollapsed((prev) => !prev)}
                    title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                  >
                    {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                  </ERPButton>
                  <ERPButton onClick={onRefresh} variant="secondary">
                    <RefreshCw className="h-4 w-4" />
                  </ERPButton>
                  <ERPButton onClick={onExport} disabled={exporting} variant="secondary">
                    <Download className="h-4 w-4" />
                    {exporting ? 'Exporting...' : 'Export'}
                  </ERPButton>
                  <ERPButton onClick={handleLogout} variant="danger">
                    <LogOut className="h-4 w-4" />
                  </ERPButton>
                </div>
              </div>
            </ERPSurfaceCard>

            {/* Layout */}
            <div className="grid lg:grid-cols-[260px_1fr] gap-6 h-full lg:h-[calc(100vh-12rem)]">
              {/* Sidebar */}
              <ERPSurfaceCard
                className={`lg:block hidden erp-admin-sidebar p-6 h-full overflow-y-auto transition-all ${
                  sidebarCollapsed ? 'w-24' : 'w-[260px]'
                }`}
              >
                <div className="space-y-3">
                  {navItems.map((item) => {
                    const active = activeSection === item.key;
                    return (
                      <motion.button
                        key={item.key}
                        onClick={() => navigate(item.path)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        title={sidebarCollapsed ? item.label : undefined}
                        className={`flex w-full items-center gap-3 rounded-3xl p-4 text-left transition-all ${
                          active
                            ? 'border-cyan-300 bg-gradient-to-r from-cyan-50 to-blue-50 shadow-lg'
                            : 'border-transparent hover:border-cyan-100 hover:bg-cyan-50/50 hover:shadow-md'
                        } ${sidebarCollapsed ? 'justify-center px-0' : ''}`}
                      >
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl p-2 ${
                            active
                              ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg'
                              : 'bg-slate-100 shadow-sm'
                          }`}
                        >
                          <item.icon className={`h-5 w-5 ${active ? 'text-white' : 'text-slate-500'}`} />
                        </div>
                        {!sidebarCollapsed ? (
                          <span className="font-semibold text-slate-900">{item.label}</span>
                        ) : null}
                      </motion.button>
                    );
                  })}
                </div>
              </ERPSurfaceCard>

              {/* Mobile Sidebar */}
              {sidebarOpen && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  className="lg:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between p-6 border-b border-white/20">
                    <h2 className="text-2xl font-bold text-white">Admin Menu</h2>
                    <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-2xl bg-white/10">
                      <X className="h-6 w-6 text-white" />
                    </button>
                  </div>
                  <div className="p-6 space-y-3">
                    {navItems.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => {
                          navigate(item.path);
                          setSidebarOpen(false);
                        }}
                        className="flex w-full items-center gap-4 p-4 rounded-3xl bg-white/10 backdrop-blur text-white hover:bg-white/20 transition-all"
                      >
                        <item.icon className="h-6 w-6" />
                        <span className="font-semibold">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Main Content */}
              <main className="space-y-6 overflow-y-auto">
                {children}
              </main>
            </div>
          </ERPPageTransition>
        </ERPBackdrop>
      </AdminContext.Provider>
    </>
  );
};

export default ERPAdminLayout;

