import { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronDown, ChevronUp, Columns3, FilterX, Search } from 'lucide-react';

import ERPButton from '@/components/erp/ERPButton';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { cn } from '@/lib/utils';

const sortIcons = {
  asc: <ChevronUp className="h-3.5 w-3.5" />,
  desc: <ChevronDown className="h-3.5 w-3.5" />,
};

const checkboxClasses = 'h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500';

const ErpDataTable = ({
  data,
  columns,
  bulkActions = [],
  emptyTitle = 'No data available',
  emptyDescription = 'Adjust your filters or try again later.',
  initialPageSize = 12,
  loading = false,
  onRowClick,
  searchPlaceholder = 'Search records',
  selectable = true,
  theme = 'light',
  toolbarEnd,
}) => {
  const [sorting, setSorting] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilterInput, setGlobalFilterInput] = useState('');
  const deferredGlobalFilter = useDeferredValue(globalFilterInput);

  const palette =
    theme === 'dark'
      ? {
          frame: 'border-slate-800 bg-slate-950/82 text-slate-100',
          head: 'border-slate-800 bg-slate-900/90 text-slate-300',
          row: 'border-slate-800 text-slate-200 hover:bg-slate-900/80',
          muted: 'text-slate-400',
          search: 'border-slate-700 bg-slate-900 text-slate-100 placeholder:text-slate-500',
          dropdown: 'border-slate-800 bg-slate-950 text-slate-200',
        }
      : {
          frame: 'border-white/70 bg-white/88 text-slate-900',
          head: 'border-slate-200 bg-slate-50 text-slate-600',
          row: 'border-slate-100 text-slate-700 hover:bg-slate-50/80',
          muted: 'text-slate-500',
          search: 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400',
          dropdown: 'border-slate-200 bg-white text-slate-700',
        };

  const resolvedColumns = useMemo(() => {
    if (!selectable) return columns;

    return [
      {
        id: 'select',
        header: ({ table }) => (
          <input
            type="checkbox"
            className={checkboxClasses}
            checked={table.getIsAllPageRowsSelected()}
            ref={(element) => {
              if (element) element.indeterminate = table.getIsSomePageRowsSelected();
            }}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
            aria-label="Select all rows"
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            className={checkboxClasses}
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
            onClick={(event) => event.stopPropagation()}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
        size: 40,
      },
      ...columns,
    ];
  }, [columns, selectable]);

  const table = useReactTable({
    data: data || [],
    columns: resolvedColumns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      globalFilter: deferredGlobalFilter,
    },
    enableRowSelection: selectable,
    getRowId: (row, index) => String(row.id ?? row.application_number ?? row.hostel_id ?? index),
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: 'includesString',
    initialState: {
      pagination: {
        pageSize: initialPageSize,
      },
    },
  });

  useEffect(() => {
    table.resetPageIndex();
  }, [deferredGlobalFilter, table]);

  const selectedRows = table.getSelectedRowModel().rows.map((row) => row.original);

  return (
    <ERPSurfaceCard hover={false} className={cn('overflow-hidden rounded-[32px] border', palette.frame)}>
      <div className="border-b border-inherit p-5">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative flex-1">
              <Search className={cn('pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2', palette.muted)} />
              <input
                value={globalFilterInput}
                onChange={(event) =>
                  startTransition(() => {
                    setGlobalFilterInput(event.target.value);
                  })
                }
                placeholder={searchPlaceholder}
                className={cn(
                  'h-11 w-full rounded-2xl border pl-10 pr-4 text-sm outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100',
                  palette.search,
                  theme === 'dark' ? 'focus:ring-blue-500/15' : ''
                )}
              />
            </label>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  type="button"
                  className={cn(
                    'inline-flex h-11 items-center gap-2 rounded-2xl border px-4 text-sm font-medium transition',
                    palette.search
                  )}
                >
                  <Columns3 className="h-4 w-4" />
                  Columns
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  sideOffset={8}
                  align="end"
                  className={cn('z-[100] min-w-[220px] rounded-3xl border p-2 shadow-xl', palette.dropdown)}
                >
                  {table
                    .getAllLeafColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => (
                      <DropdownMenu.CheckboxItem
                        key={column.id}
                        checked={column.getIsVisible()}
                        onCheckedChange={(checked) => column.toggleVisibility(Boolean(checked))}
                        className="flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-2 text-sm outline-none hover:bg-slate-100/70 data-[highlighted]:bg-slate-100/70 dark:hover:bg-slate-800 dark:data-[highlighted]:bg-slate-800"
                      >
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white text-[10px] font-bold text-blue-600 dark:border-slate-600 dark:bg-slate-900">
                          {column.getIsVisible() ? '✓' : ''}
                        </span>
                        <span className="capitalize">{column.id.replace(/_/g, ' ')}</span>
                      </DropdownMenu.CheckboxItem>
                    ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {globalFilterInput ? (
              <button
                type="button"
                onClick={() => setGlobalFilterInput('')}
                className={cn(
                  'inline-flex h-11 items-center gap-2 rounded-2xl border px-4 text-sm font-medium transition',
                  palette.search
                )}
              >
                <FilterX className="h-4 w-4" />
                Clear
              </button>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {bulkActions.length && selectedRows.length
              ? bulkActions.map((action) => (
                  <ERPButton
                    key={action.key}
                    variant={action.variant || 'secondary'}
                    className="px-3 py-2 text-xs"
                    onClick={() => action.onClick(selectedRows)}
                  >
                    {action.icon ? <action.icon className="h-3.5 w-3.5" /> : null}
                    {action.label} ({selectedRows.length})
                  </ERPButton>
                ))
              : null}
            {toolbarEnd}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className={palette.head}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-inherit">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{ width: header.getSize() !== 150 ? header.getSize() : undefined }}
                  >
                    {header.isPlaceholder ? null : (
                      <button
                        type="button"
                        className={cn(
                          'inline-flex items-center gap-1.5 text-left',
                          header.column.getCanSort() ? 'cursor-pointer' : 'cursor-default'
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {sortIcons[header.column.getIsSorted()] || null}
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {loading ? (
              Array.from({ length: initialPageSize }).map((_, index) => (
                <tr key={`skeleton-${index}`} className={cn('border-b', palette.row)}>
                  {resolvedColumns.map((column) => (
                    <td key={`${column.id || column.accessorKey}-${index}`} className="px-4 py-3">
                      <div className={cn('h-4 animate-pulse rounded-full', theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200')} />
                    </td>
                  ))}
                </tr>
              ))
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={cn(
                    'border-b transition',
                    palette.row,
                    row.getIsSelected() ? (theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50/70') : ''
                  )}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 align-top text-sm"
                      onClick={() => onRowClick?.(row.original)}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={resolvedColumns.length} className="px-6 py-16 text-center">
                  <div className="mx-auto max-w-md">
                    <p className="text-lg font-semibold">{emptyTitle}</p>
                    <p className={cn('mt-2 text-sm', palette.muted)}>{emptyDescription}</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={cn('flex flex-col gap-3 border-t border-inherit px-5 py-4 text-sm sm:flex-row sm:items-center sm:justify-between', palette.muted)}>
        <p>
          Showing {table.getRowModel().rows.length} of {table.getFilteredRowModel().rows.length} records
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(event) => table.setPageSize(Number(event.target.value))}
            className={cn('h-10 rounded-2xl border px-3 text-sm', palette.search)}
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} rows
              </option>
            ))}
          </select>
          <ERPButton variant="secondary" className="px-3 py-2 text-xs" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </ERPButton>
          <span className="px-2 text-xs font-semibold uppercase tracking-[0.18em]">
            {table.getState().pagination.pageIndex + 1} / {table.getPageCount() || 1}
          </span>
          <ERPButton variant="secondary" className="px-3 py-2 text-xs" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </ERPButton>
        </div>
      </div>
    </ERPSurfaceCard>
  );
};

export default ErpDataTable;
