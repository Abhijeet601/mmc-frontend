import React, { useState, useMemo, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, Download, Filter, MoreHorizontal, CheckSquare, Square } from 'lucide-react';
import ERPButton from './ERPButton';
import ERPSurfaceCard from './ERPSurfaceCard';
import { toast } from '../ui/use-toast';
import * as XLSX from 'xlsx';

const ERPDataTable = ({
  columns,
  data,
  enableRowSelection = false,
  enableGlobalFilter = true,
  enableColumnFilters = true,
  pageSize = 25,
  enableExport = true,
  className = '',
  bulkActions = [],
  onBulkAction,
  loading = false,
}) => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: { pageSize },
    },
    columnResizeMode: 'onChange',
    enableRowSelection,
    globalFilterFn: 'includesString',
  });

  const handleExport = () => {
    try {
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Data');
      XLSX.writeFile(wb, `hostel-erp-${Date.now()}.xlsx`);
      toast({ title: 'Exported successfully' });
    } catch (error) {
      toast({ title: 'Export failed', description: error.message, variant: 'destructive' });
    }
  };

  const selectedRows = useMemo(() => 
    table.getSelectedRowModel().rows.map(row => row.original), 
    [table.getSelectedRowModel().rows]
  );

  if (loading) {
    return (
      <ERPSurfaceCard className="p-8">
        <div className="space-y-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-12 skeleton" />
          ))}
        </div>
      </ERPSurfaceCard>
    );
  }

  return (
    <ERPSurfaceCard className={`overflow-hidden ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-3">
            {enableGlobalFilter && (
              <div className="relative flex-1 min-w-[300px] max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={globalFilter ?? ''}
                  onChange={(e) => table.setGlobalFilter(e.target.value || undefined)}
                  placeholder="Search all columns..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-200 focus:border-transparent"
                />
              </div>
            )}
            {enableExport && (
              <ERPButton onClick={handleExport} variant="secondary">
                <Download className="h-4 w-4" />
                Export XLSX
              </ERPButton>
            )}
          </div>
          
          {/* Bulk Actions */}
          {enableRowSelection && Object.keys(rowSelection).length > 0 && bulkActions.length > 0 && (
            <div className="flex gap-2">
              {bulkActions.map((action) => (
                <ERPButton
                  key={action.key}
                  onClick={() => onBulkAction?.(selectedRows, action)}
                  size="sm"
                  variant={action.variant || 'secondary'}
                >
                  {action.icon && React.createElement(action.icon, { className: 'h-4 w-4 mr-1' })}
                  {action.label} ({Object.keys(rowSelection).length})
                </ERPButton>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider cursor-pointer select-none hover:bg-slate-100 first:rounded-tl-xl last:rounded-tr-xl"
                  >
                    <div className="flex items-center gap-2">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <ChevronUp className="h-4 w-4" />,
                        desc: <ChevronDown className="h-4 w-4" />,
                      }[header.column.getIsSorted()] ?? null}
                    </div>
                    {header.column.getCanFilter() ? (
                      <div className="mt-1">
                        <input
                          onChange={(e) => header.column.setFilterValue(e.target.value)}
                          placeholder={`Filter ${header.column.id}...`}
                          className="w-24 text-xs px-2 py-1 border rounded-lg bg-white/50 focus:ring-1"
                          value={(header.column.getFilterValue() ?? '')}
                        />
                      </div>
                    ) : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  whileHover={{ scale: 1.005 }}
                  layout
                  className={`transition-colors ${
                    row.getIsSelected() ? 'bg-primary/10 border border-primary/20' : 'hover:bg-border/40'
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-slate-600">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()} | 
            Rows: {table.getRowModel().rows.length} of {table.getFilteredRowModel().rows.length} filtered
          </div>
          <div className="flex items-center gap-2">
            <ERPButton
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </ERPButton>
            <ERPButton
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </ERPButton>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className="h-9 rounded-lg border px-3 text-sm"
            >
              {[10, 25, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </ERPSurfaceCard>
  );
};

export default ERPDataTable;

