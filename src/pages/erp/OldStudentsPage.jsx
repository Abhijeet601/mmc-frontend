import React, { useState, useMemo } from 'react';
import { Edit3, Trash2, Plus, Upload } from 'lucide-react';
import ERPDataTable from '../../components/erp/ERPDataTable';
import ERPButton from '../../components/erp/ERPButton';
import { Badge } from '../../components/ui/badge';
import { useAdmin } from './Layout/ERPAdminLayout';
import ERPSurfaceCard from '../../components/erp/ERPSurfaceCard';

const oldStudentStatusColors = {
  ACTIVE: 'bg-emerald-100 text-emerald-800',
  LEFT: 'bg-amber-100 text-amber-800',
  SUSPENDED: 'bg-red-100 text-red-800',
};

const OldStudentsPage = ({ oldStudentsData, onAction, oldStudentsLoading }) => {
  const [bulkFile, setBulkFile] = useState(null);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const { onExport } = useAdmin();

  const columns = useMemo(() => [
    {
      accessorKey: 'hostel_id',
      header: 'Hostel ID',
      size: 140,
      cell: ({ row }) => (
        <div>
          <div className="font-mono font-semibold">{row.original.hostel_id}</div>
          {row.original.admission_id && (
            <div className="text-xs text-slate-500 font-mono">{row.original.admission_id}</div>
          )}
        </div>
      ),
    },
    {
      accessorKey: 'student_name',
      header: 'Student',
      size: 180,
      cell: ({ row }) => (
        <div>
          <div className="font-semibold">{row.original.student_name}</div>
          <div className="text-xs text-slate-600">{row.original.email || row.original.mobile_number}</div>
        </div>
      ),
    },
    {
      accessorKey: 'course_name',
      header: 'Course/Session',
      size: 160,
      cell: ({ row }) => (
        <div>
          <div>{row.original.course_name}</div>
          <div className="text-xs text-slate-500 capitalize">{row.original.session}</div>
          <div className="text-xs text-slate-400">{row.original.category}</div>
        </div>
      ),
    },
    {
      accessorKey: 'hostel_name',
      header: 'Allocation',
      size: 220,
      cell: ({ row }) => (
        <div className="space-y-1 text-sm">
          {row.original.hostel_name && (
            <div className="font-medium">{row.original.hostel_name}</div>
          )}
          {(row.original.block_name || row.original.room_number || row.original.bed_number) && (
            <div className="text-xs text-slate-600 space-y-px">
              {row.original.block_name && row.original.room_number && (
                <div>{row.original.block_name}-{row.original.room_number}</div>
              )}
              {row.original.bed_number && <div>Bed {row.original.bed_number}</div>}
            </div>
          )}
        </div>
      ),
    },
    {
      accessorKey: 'old_student_status',
      header: 'Status',
      size: 120,
      cell: ({ row }) => (
        <Badge className={`capitalize ${oldStudentStatusColors[row.original.old_student_status] || 'bg-slate-100 text-slate-800'}`}>
          {row.original.old_student_status}
        </Badge>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      size: 160,
      cell: ({ row }) => (
        <div className="flex gap-1">
          <ERPButton
            variant="outline"
            size="icon-sm"
            onClick={() => onAction('edit', row.original)}
          >
            <Edit3 className="h-3.5 w-3.5" />
          </ERPButton>
          <ERPButton
            variant="outline"
            size="icon-sm"
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={() => onAction('delete', row.original)}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </ERPButton>
        </div>
      ),
    },
  ], [onAction]);

  const bulkActions = useMemo(() => [
    {
      key: 'mark-left',
      label: 'Mark as Left',
      variant: 'secondary',
      icon: UserCheck,
    },
    {
      key: 'suspend',
      label: 'Suspend Selected',
      variant: 'destructive',
      icon: AlertCircle,
    },
  ], []);

  const handleBulkUpload = (e) => {
    e.preventDefault();
    if (!bulkFile) return;
    // Backend upload logic
    toast({ title: 'Bulk upload initiated', description: 'Processing...' });
    setBulkFile(null);
    setShowBulkUpload(false);
  };

  return (
    <div className="space-y-6">
      {/* Bulk Upload Card */}
      <ERPSurfaceCard className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Bulk Operations</h2>
          <ERPButton onClick={() => setShowBulkUpload(!showBulkUpload)}>
            <Upload className="h-4 w-4 mr-2" />
            {showBulkUpload ? 'Cancel' : 'Bulk Upload'}
          </ERPButton>
        </div>
        
        {showBulkUpload && (
          <form onSubmit={handleBulkUpload} className="mt-6 p-6 border rounded-3xl bg-slate-50">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">
                Upload Excel/CSV
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  onChange={(e) => setBulkFile(e.target.files[0])}
                  className="mt-2 w-full p-3 border-2 border-dashed border-slate-300 rounded-2xl hover:border-cyan-300 transition-colors"
                />
              </label>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Update existing:</strong> Match by Hostel ID
                </div>
                <div>
                  <strong>Auto-generate IDs:</strong> OLD-001 format
                </div>
              </div>
              <ERPButton type="submit" disabled={!bulkFile} className="w-full">
                Process {bulkFile?.name ? `(${bulkFile.name})` : ''}
              </ERPButton>
            </div>
          </form>
        )}
      </ERPSurfaceCard>

      {/* Main Table */}
      <ERPDataTable
        columns={columns}
        data={oldStudentsData?.items || []}
        enableRowSelection
        enableExport
        bulkActions={bulkActions}
        onBulkAction={(rows, action) => console.log('Bulk:', action, rows.length)}
        loading={oldStudentsLoading}
        pageSize={50}
      />
    </div>
  );
};

export default OldStudentsPage;

