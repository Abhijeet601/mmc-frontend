import React, { useState, useMemo } from 'react';
import { Eye, CheckCircle, UserCheck, Edit3 } from 'lucide-react';
import ERPDataTable from '../../components/erp/ERPDataTable';
import ERPButton from '../../components/erp/ERPButton';
import { Badge } from '../../components/ui/badge'; // ShadCN Badge
import { useAdmin } from './Layout/ERPAdminLayout';

const statusColors = {
  verified: 'bg-emerald-100 text-emerald-800',
  shortlisted: 'bg-cyan-100 text-cyan-800',
  pending: 'bg-amber-100 text-amber-800',
  'payment_pending': 'bg-yellow-100 text-yellow-800',
};

const StudentsPage = ({ studentsData, onAction, loading }) => {
  const { onExport } = useAdmin();
  
  const columns = useMemo(() => [
    {
      accessorKey: 'application_number',
      header: 'App #',
      size: 120,
      cell: ({ row }) => (
        <div>
          <div className="font-semibold">{row.original.application_number}</div>
          <div className="text-xs text-slate-500">{row.original.name}</div>
        </div>
      ),
    },
    {
      accessorKey: 'course_name',
      header: 'Course',
      size: 160,
      cell: ({ row }) => (
        <div>
          <div>{row.original.course_name}</div>
          <div className="text-xs text-slate-500">{row.original.session}</div>
        </div>
      ),
    },
    {
      accessorKey: 'verification_status',
      header: 'Verification',
      size: 120,
      cell: ({ row }) => (
        <Badge className={`capitalize ${statusColors[row.original.verification_status] || 'bg-slate-100 text-slate-800'}`}>
          {row.original.verification_status?.replace('_', ' ') || 'pending'}
        </Badge>
      ),
    },
    {
      accessorKey: 'shortlist_status',
      header: 'Shortlist',
      size: 120,
      cell: ({ row }) => (
        <Badge className={`capitalize ${statusColors[row.original.shortlist_status] || 'bg-slate-100 text-slate-800'}`}>
          {row.original.shortlist_status?.replace('_', ' ') || 'pending'}
        </Badge>
      ),
    },
    {
      accessorKey: 'allocated_hostel',
      header: 'Allocation',
      size: 200,
      cell: ({ row }) => (
        <div className="space-y-1">
          <Badge variant="secondary" className="capitalize">
            {row.original.hostel_status?.replace('_', ' ') || 'pending'}
          </Badge>
          {row.original.allocated_hostel && (
            <div className="text-xs text-slate-600 space-y-0.5">
              <div>{row.original.allocated_hostel}</div>
              {row.original.hostel_block && row.original.room_number && (
                <div>{row.original.hostel_block}-{row.original.room_number}</div>
              )}
              {row.original.bed_number && <div>Bed {row.original.bed_number}</div>}
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      size: 200,
      cell: ({ row }) => (
        <div className="flex gap-2">
          <ERPButton
            variant="outline"
            size="sm"
            onClick={() => onAction('view', row.original.id)}
          >
            <Eye className="h-3 w-3" />
          </ERPButton>
          <ERPButton
            variant="outline"
            size="sm"
            onClick={() => onAction('verify', row.original.id)}
          >
            <CheckCircle className="h-3 w-3" />
          </ERPButton>
          <ERPButton
            variant="outline"
            size="sm"
            onClick={() => onAction('shortlist', row.original.id)}
          >
            <UserCheck className="h-3 w-3" />
          </ERPButton>
        </div>
      ),
    },
  ], [onAction]);

  const bulkActions = useMemo(() => [
    {
      key: 'verify',
      label: 'Verify Selected',
      variant: 'default',
      icon: CheckCircle,
    },
    {
      key: 'shortlist',
      label: 'Shortlist Selected',
      variant: 'success',
      icon: UserCheck,
    },
  ], []);

  const handleBulkAction = (selectedRows, action) => {
    // Implement bulk action logic
    toast({
      title: `Bulk ${action.label}`,
      description: `${selectedRows.length} students selected`,
    });
  };

  return (
    <ERPDataTable
      columns={columns}
      data={studentsData?.items || []}
      enableRowSelection
      enableExport
      bulkActions={bulkActions}
      onBulkAction={handleBulkAction}
      loading={loading}
      pageSize={50}
    />
  );
};

export default StudentsPage;

