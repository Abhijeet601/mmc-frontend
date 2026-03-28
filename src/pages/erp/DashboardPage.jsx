import React from 'react';
import { motion } from 'framer-motion';
import { Users2, BedDouble, Filter, BookCheck, FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import ERPSurfaceCard from '../../components/erp/ERPSurfaceCard';
import ERPMetricCard from '../../components/erp/ERPMetricCard';
import ERPButton from '../../components/erp/ERPButton';
import { useAdmin } from './Layout/ERPAdminLayout';
import ERPBackdrop from '../../components/erp/ERPBackdrop';
import ERPPageTransition from '../../components/erp/ERPPageTransition';

const DashboardPage = ({ dashboardData, studentsData, roomsData, onRefresh }) => {
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const chartDataByCourse = dashboardData?.by_course || [];
  const chartDataByCategory = dashboardData?.by_category || [];
  const chartDataByHostel = dashboardData?.by_hostel || [];

  return (
    <ERPPageTransition className="space-y-8">
      {/* Hero Stats */}
      <ERPSurfaceCard className="p-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900 bg-clip-text text-transparent mb-6"
        >
          Welcome to Hostel ERP Dashboard
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <ERPMetricCard 
            title="Total Applications" 
            value={dashboardData?.total_applications ?? 0} 
            icon={Users2}
            trend="+12%"
            delay={0}
          />
          <ERPMetricCard 
            title="Old Students" 
            value={dashboardData?.old_students ?? 0} 
            icon={Users2}
            trend="+8%"
            delay={0.1}
          />
          <ERPMetricCard 
            title="Pending Applications" 
            value={dashboardData?.pending_applications ?? 0} 
            icon={Filter}
            trend="+5%"
            delay={0.2}
            color="amber"
          />
          <ERPMetricCard 
            title="Occupancy Rate" 
            value={`${dashboardData?.occupancy_rate ?? 0}%`} 
            icon={BedDouble}
            subtitle={`${dashboardData?.available_beds ?? 0} beds available`}
            delay={0.3}
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          <ERPButton onClick={onRefresh}>Refresh Data</ERPButton>
          <ERPButton variant="secondary">View Full Report</ERPButton>
        </div>
      </ERPSurfaceCard>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ERPSurfaceCard className="p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5 text-cyan-600" />
            Operational Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">Verification</div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="text-2xl font-bold text-emerald-700">{dashboardData?.verified_students ?? 0}</div>
                  <div className="text-xs uppercase tracking-wider text-emerald-600">Verified</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-2xl font-bold text-slate-700">{dashboardData?.pending_applications ?? 0}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Pending</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">Hostel Allocation</div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-4 bg-cyan-50 rounded-2xl border border-cyan-100">
                  <div className="text-2xl font-bold text-cyan-700">{dashboardData?.hostel_allocated_students ?? 0}</div>
                  <div className="text-xs uppercase tracking-wider text-cyan-600">Allocated</div>
                </div>
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <div className="text-2xl font-bold text-amber-700">{dashboardData?.available_beds ?? 0}</div>
                  <div className="text-xs uppercase tracking-wider text-amber-600">Available</div>
                </div>
              </div>
            </div>
          </div>
        </ERPSurfaceCard>

        <ERPSurfaceCard className="p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ERPButton className="h-16" size="lg">Review Pending Applications</ERPButton>
            <ERPButton className="h-16" variant="secondary" size="lg">Bulk Shortlist Upload</ERPButton>
            <ERPButton className="h-16 md:col-span-2" variant="success" size="lg">Start Room Allocation</ERPButton>
          </div>
        </ERPSurfaceCard>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ERPSurfaceCard className="p-8 lg:col-span-2">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Applications by Course</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartDataByCourse}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="#3B82F6">
                {chartDataByCourse.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ERPSurfaceCard>

        <ERPSurfaceCard className="p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Top Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartDataByCategory.slice(0, 5)}>
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </ERPSurfaceCard>
      </div>

      {/* Recent Activity */}
      <ERPSurfaceCard className="p-8">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
          Recent Activities
          <span className="ml-auto text-xs font-medium px-2 py-1 bg-slate-100 rounded-full">{dashboardData?.recent_activities?.length || 0}</span>
        </h3>
        <div className="space-y-4">
          {dashboardData?.recent_activities?.slice(0, 8).map((activity, index) => (
            <motion.div
              key={activity.id || index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4 p-4 border rounded-2xl hover:border-cyan-200 hover:bg-cyan-50/50 transition-all"
            >
              <div className="flex-shrink-0 w-2 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 text-lg leading-tight">{activity.title}</p>
                <p className="text-sm text-slate-600 mt-1">{activity.description}</p>
                <p className="text-xs font-mono text-slate-400 mt-2">{new Date(activity.timestamp).toLocaleString()}</p>
              </div>
            </motion.div>
          )) || (
            <p className="text-center py-12 text-slate-500">No recent activities</p>
          )}
        </div>
      </ERPSurfaceCard>
    </ERPPageTransition>
  );
};

export default DashboardPage;

