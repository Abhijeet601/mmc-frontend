import { useMemo, useState } from 'react';
import * as XLSX from 'xlsx';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Download,
  Eye,
  FileSpreadsheet,
  RefreshCw,
  UploadCloud,
} from 'lucide-react';

import ERPButton from '@/components/erp/ERPButton';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import {
  commitBulkUpsertOldStudents,
  previewBulkUpsertOldStudents,
  resolveAssetUrl,
} from '@/services/erpApi';

const BULK_COLUMNS = ['name', 'email', 'course', 'category', 'hostel', 'block', 'room', 'bed', 'hostel_id'];

const statusStyle = {
  create: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  update: 'border-blue-200 bg-blue-50 text-blue-700',
  error: 'border-rose-200 bg-rose-50 text-rose-700',
  no_change: 'border-slate-200 bg-slate-100 text-slate-600',
};

const normalizeCell = (value) => (value === null || value === undefined ? '' : String(value).trim());

const pickValue = (row, keys) => {
  const lowered = Object.fromEntries(Object.entries(row).map(([key, value]) => [String(key).trim().toLowerCase(), value]));
  for (const key of keys) {
    if (lowered[key] !== undefined) return lowered[key];
  }
  return '';
};

const normalizeUploadRow = (row, index) => ({
  row_number: Number(pickValue(row, ['row_number', '__row_number'])) || index + 2,
  name: normalizeCell(pickValue(row, ['name', 'student name', 'student_name'])),
  email: normalizeCell(pickValue(row, ['email'])).toLowerCase(),
  course: normalizeCell(pickValue(row, ['course', 'course name', 'course_name'])),
  category: normalizeCell(pickValue(row, ['category'])),
  hostel: normalizeCell(pickValue(row, ['hostel', 'hostel name', 'hostel_name'])),
  block: normalizeCell(pickValue(row, ['block', 'block name', 'block_name'])),
  room: normalizeCell(pickValue(row, ['room', 'room number', 'room_number'])),
  bed: normalizeCell(pickValue(row, ['bed', 'bed number', 'bed_number'])).toUpperCase(),
  hostel_id: normalizeCell(pickValue(row, ['hostel id', 'hostel_id', 'hostelid'])),
});

const readWorkbookRows = async (file) => {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  const rawRows = XLSX.utils.sheet_to_json(firstSheet, { defval: '' });
  return rawRows.map((row, index) => normalizeUploadRow(row, index));
};

const downloadTemplate = () => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet([
    {
      name: 'Asha Kumari',
      email: 'asha.kumari@example.com',
      course: 'B.A.',
      category: 'GEN',
      hostel: 'Vaidehi Hostel',
      block: 'A',
      room: '101',
      bed: '',
      hostel_id: '',
    },
    {
      name: 'Nidhi Singh',
      email: 'nidhi.singh@example.com',
      course: 'B.Sc.',
      category: 'OBC',
      hostel: '',
      block: '',
      room: '',
      bed: '',
      hostel_id: '2026000010',
    },
  ]);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Old Students');
  XLSX.writeFile(workbook, 'old_student_bulk_upsert_template.xlsx');
};

const steps = [
  ['1', 'Upload Excel'],
  ['2', 'Preview Data'],
  ['3', 'Review Changes'],
  ['4', 'Confirm Action'],
];

const OldStudentBulkWorkflow = ({ theme = 'light', onCompleted }) => {
  const [file, setFile] = useState(null);
  const [rows, setRows] = useState([]);
  const [options, setOptions] = useState({
    generateIds: true,
    updateExisting: true,
    allocateRooms: true,
  });
  const [previewResult, setPreviewResult] = useState(null);
  const [commitResult, setCommitResult] = useState(null);
  const [previewing, setPreviewing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [previewDirty, setPreviewDirty] = useState(false);
  const [rowFilter, setRowFilter] = useState('all');

  const palette =
    theme === 'dark'
      ? {
          frame: 'border-slate-800 bg-slate-950/82 text-slate-100',
          muted: 'text-slate-400',
          surface: 'border-slate-800 bg-slate-900/80',
          input: 'border-slate-700 bg-slate-900 text-slate-100',
        }
      : {
          frame: 'border-white/70 bg-white/88 text-slate-900',
          muted: 'text-slate-500',
          surface: 'border-slate-200 bg-slate-50/80',
          input: 'border-slate-200 bg-white text-slate-900',
        };

  const activeResult = commitResult || previewResult;
  const currentStep = commitResult ? 4 : previewResult && !previewDirty ? 3 : rows.length ? 2 : 1;
  const resultRows = activeResult?.rows || [];
  const filteredRows = useMemo(() => {
    if (rowFilter === 'all') return resultRows;
    return resultRows.filter((row) => row.action === rowFilter);
  }, [resultRows, rowFilter]);

  const summaryItems = useMemo(
    () => [
      ['Uploaded rows', rows.length],
      ['New students', activeResult?.created || 0],
      ['Updated students', activeResult?.updated || 0],
      ['Errors', activeResult?.errors || 0],
    ],
    [activeResult, rows.length]
  );

  const handleFileSelect = async (nextFile) => {
    if (!nextFile) return;
    try {
      const parsedRows = await readWorkbookRows(nextFile);
      setFile(nextFile);
      setRows(parsedRows);
      setPreviewResult(null);
      setCommitResult(null);
      setPreviewDirty(false);
    } catch (error) {
      toast({
        title: 'Unable to read upload',
        description: error.message || 'The workbook could not be parsed.',
        duration: 7000,
      });
    }
  };

  const handleCellChange = (index, key, value) => {
    setRows((current) =>
      current.map((row, rowIndex) => (rowIndex === index ? { ...row, [key]: value } : row))
    );
    setPreviewDirty(true);
    setCommitResult(null);
  };

  const handlePreview = async () => {
    if (!rows.length) {
      toast({ title: 'Upload a file first', description: 'Select an Excel or CSV workbook before previewing.' });
      return;
    }
    setPreviewing(true);
    try {
      const result = await previewBulkUpsertOldStudents({ rows, options });
      setPreviewResult(result);
      setCommitResult(null);
      setPreviewDirty(false);
      setRowFilter('all');
      toast({
        title: 'Preview ready',
        description: `${result.created} new, ${result.updated} updates, ${result.errors} errors.`,
      });
    } catch (error) {
      toast({
        title: 'Preview failed',
        description: error.message || 'Unable to build the preview.',
        duration: 7000,
      });
    } finally {
      setPreviewing(false);
    }
  };

  const handleCommit = async () => {
    if (!rows.length) {
      toast({ title: 'Nothing to process', description: 'Upload or retry rows before confirming.' });
      return;
    }
    if (!previewResult || previewDirty) {
      toast({
        title: 'Preview required',
        description: 'Run a fresh preview after the latest edits before confirming.',
      });
      return;
    }
    setSubmitting(true);
    try {
      const result = await commitBulkUpsertOldStudents({ rows, options });
      setCommitResult(result);
      setRowFilter('all');
      if (typeof onCompleted === 'function') {
        await onCompleted(result);
      }
      toast({
        title: 'Bulk upsert complete',
        description: `${result.created} created, ${result.updated} updated, ${result.errors} errors.`,
      });
    } catch (error) {
      toast({
        title: 'Bulk upsert failed',
        description: error.message || 'Unable to complete the bulk operation.',
        duration: 7000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetryFailedRows = () => {
    const source = commitResult || previewResult;
    const failedRows = (source?.rows || [])
      .filter((row) => row.action === 'error')
      .map((row) => ({ row_number: row.row_number, ...row.proposed_values }));
    if (!failedRows.length) {
      toast({ title: 'No failed rows', description: 'There are no failed rows to retry.' });
      return;
    }
    setRows(failedRows);
    setFile(null);
    setPreviewResult(null);
    setCommitResult(null);
    setPreviewDirty(false);
    setRowFilter('all');
  };

  const openErrorReport = () => {
    const errorReportUrl = activeResult?.error_report_url;
    if (!errorReportUrl) {
      toast({ title: 'No error report', description: 'No error workbook is available for the current result.' });
      return;
    }
    window.open(resolveAssetUrl(errorReportUrl), '_blank', 'noopener,noreferrer');
  };

  return (
    <ERPSurfaceCard hover={false} className={cn('rounded-[32px] border p-5 sm:p-6', palette.frame)}>
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">Unified Bulk Workflow</p>
          <h3 className="mt-2 text-2xl font-semibold">Old student upsert, IDs, and room allocation</h3>
          <p className={cn('mt-2 max-w-3xl text-sm leading-6', palette.muted)}>
            Upload one workbook, preview create versus update decisions, edit rows inline, inspect hostel ID generation,
            and confirm the full bulk action from the same screen.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <ERPButton variant="secondary" onClick={downloadTemplate}>
            <Download className="h-4 w-4" />
            Template
          </ERPButton>
          <ERPButton variant="secondary" onClick={handleRetryFailedRows} disabled={!activeResult?.errors}>
            <RefreshCw className="h-4 w-4" />
            Retry failed rows
          </ERPButton>
          <ERPButton variant="secondary" onClick={openErrorReport} disabled={!activeResult?.error_report_url}>
            <AlertTriangle className="h-4 w-4" />
            Error report
          </ERPButton>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        {steps.map(([value, label], index) => {
          const active = currentStep >= index + 1;
          return (
            <div
              key={label}
              className={cn(
                'rounded-[24px] border px-4 py-4 transition',
                active
                  ? theme === 'dark'
                    ? 'border-blue-500/40 bg-blue-500/10'
                    : 'border-blue-200 bg-blue-50'
                  : palette.surface
              )}
            >
              <p className={cn('text-[11px] font-semibold uppercase tracking-[0.18em]', palette.muted)}>Step {value}</p>
              <p className="mt-2 text-sm font-semibold">{label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.05fr,0.95fr]">
        <div className={cn('rounded-[28px] border p-5', palette.surface)}>
          <div
            onDragOver={(event) => event.preventDefault()}
            onDrop={async (event) => {
              event.preventDefault();
              await handleFileSelect(event.dataTransfer.files?.[0]);
            }}
            className={cn(
              'rounded-[26px] border-2 border-dashed p-6 text-center',
              theme === 'dark' ? 'border-slate-700 bg-slate-950/50' : 'border-slate-200 bg-white/80'
            )}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,#1D4ED8,#0EA5E9)] text-white shadow-[0_22px_48px_-24px_rgba(37,99,235,0.55)]">
              <UploadCloud className="h-6 w-6" />
            </div>
            <h4 className="mt-4 text-lg font-semibold">Upload Excel or CSV</h4>
            <p className={cn('mt-2 text-sm', palette.muted)}>
              Required columns: name, email, course, category, hostel, block, room, bed, hostel_id.
            </p>
            <label className="mt-5 inline-flex cursor-pointer">
              <span className="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700">
                <FileSpreadsheet className="h-4 w-4" />
                Browse file
              </span>
              <input type="file" accept=".xlsx,.xls,.csv" className="hidden" onChange={(event) => handleFileSelect(event.target.files?.[0])} />
            </label>
            {file ? <p className={cn('mt-4 text-sm font-medium', palette.muted)}>{file.name}</p> : null}
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm">
              <input
                type="checkbox"
                checked={options.generateIds}
                onChange={(event) => {
                  setOptions((current) => ({ ...current, generateIds: event.target.checked }));
                  setPreviewDirty(true);
                }}
              />
              Generate hostel IDs
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm">
              <input
                type="checkbox"
                checked={options.updateExisting}
                onChange={(event) => {
                  setOptions((current) => ({ ...current, updateExisting: event.target.checked }));
                  setPreviewDirty(true);
                }}
              />
              Update existing students
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm">
              <input
                type="checkbox"
                checked={options.allocateRooms}
                onChange={(event) => {
                  setOptions((current) => ({ ...current, allocateRooms: event.target.checked }));
                  setPreviewDirty(true);
                }}
              />
              Allocate rooms
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <ERPButton onClick={handlePreview} disabled={!rows.length || previewing}>
              <Eye className="h-4 w-4" />
              {previewing ? 'Previewing...' : 'Preview changes'}
            </ERPButton>
            <ERPButton variant="secondary" onClick={handleCommit} disabled={!rows.length || submitting || !previewResult || previewDirty}>
              <ArrowRight className="h-4 w-4" />
              {submitting ? 'Processing...' : 'Confirm bulk upsert'}
            </ERPButton>
          </div>

          {previewDirty && previewResult ? (
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              The preview is out of date. Run preview again before confirming.
            </div>
          ) : null}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
          {summaryItems.map(([label, value]) => (
            <div key={label} className={cn('rounded-[24px] border p-4', palette.surface)}>
              <p className={cn('text-[11px] font-semibold uppercase tracking-[0.18em]', palette.muted)}>{label}</p>
              <p className="mt-3 text-2xl font-semibold">{value}</p>
            </div>
          ))}
          <div className={cn('rounded-[24px] border p-4 sm:col-span-2', palette.surface)}>
            <p className={cn('text-[11px] font-semibold uppercase tracking-[0.18em]', palette.muted)}>Hostel ID Preview</p>
            <p className="mt-3 text-sm">
              Last ID: <span className="font-semibold">{activeResult?.hostel_id_preview?.last_id || 'Not available yet'}</span>
            </p>
            <p className="mt-2 text-sm">
              Next IDs: <span className="font-semibold">{activeResult?.hostel_id_preview?.next_ids?.join(', ') || 'Preview the upload to see generated IDs.'}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.08fr,0.92fr]">
        <div className={cn('rounded-[28px] border p-4', palette.surface)}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Inline preview editor</p>
              <p className={cn('mt-1 text-sm', palette.muted)}>Review and adjust rows before sending them to the backend.</p>
            </div>
            <span className={cn('text-xs uppercase tracking-[0.16em]', palette.muted)}>{rows.length} rows loaded</span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200/70 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <th className="px-3 py-2">Row</th>
                  {BULK_COLUMNS.map((column) => (
                    <th key={column} className="px-3 py-2">{column.replace('_', ' ')}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.length ? (
                  rows.slice(0, 12).map((row, index) => (
                    <tr key={`bulk-old-row-${row.row_number}`} className="border-b border-slate-200/50 align-top">
                      <td className="px-3 py-3 font-semibold text-slate-500">{row.row_number}</td>
                      {BULK_COLUMNS.map((column) => (
                        <td key={`${row.row_number}-${column}`} className="px-3 py-3">
                          <input
                            value={row[column] || ''}
                            onChange={(event) => handleCellChange(index, column, event.target.value)}
                            className={cn('h-10 w-full rounded-xl border px-3 text-sm', palette.input)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={BULK_COLUMNS.length + 1} className={cn('px-3 py-10 text-center text-sm', palette.muted)}>
                      Upload a workbook to start the bulk workflow.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {rows.length > 12 ? (
            <p className={cn('mt-3 text-xs', palette.muted)}>Showing the first 12 rows. All rows are still sent to preview and commit.</p>
          ) : null}
        </div>

        <div className={cn('rounded-[28px] border p-4', palette.surface)}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Change review</p>
              <p className={cn('mt-1 text-sm', palette.muted)}>New students, updates, no-change rows, and errors are highlighted separately.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'create', 'update', 'error', 'no_change'].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRowFilter(value)}
                  className={cn(
                    'rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]',
                    rowFilter === value ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-600'
                  )}
                >
                  {value.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {filteredRows.length ? (
              filteredRows.slice(0, 10).map((row) => (
                <div key={`result-row-${row.row_number}`} className={cn('rounded-2xl border px-4 py-4', statusStyle[row.action] || statusStyle.no_change)}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold">Row {row.row_number}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em]">{row.action.replace('_', ' ')}</p>
                    </div>
                    <div className="text-right text-xs">
                      {row.matched_by ? <p>Matched by {row.matched_by}</p> : null}
                      {row.generated_hostel_id ? <p>Hostel ID generated</p> : null}
                    </div>
                  </div>
                  {row.changed_fields?.length ? (
                    <p className="mt-3 text-sm">Changed fields: {row.changed_fields.join(', ')}</p>
                  ) : null}
                  {row.messages?.length ? (
                    <div className="mt-3 space-y-1 text-sm">
                      {row.messages.map((message) => (
                        <p key={`${row.row_number}-${message}`}>{message}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))
            ) : (
              <div className={cn('rounded-2xl border px-4 py-8 text-sm', palette.surface)}>
                Preview the upload to inspect new students, updates, and errors.
              </div>
            )}
          </div>

          {activeResult ? (
            <div className={cn('mt-4 rounded-2xl border px-4 py-4 text-sm', palette.surface)}>
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {activeResult.mode === 'commit' ? 'Latest commit summary' : 'Latest preview summary'}
              </div>
              <p className="mt-2">{activeResult.message}</p>
              {activeResult.errors ? (
                <p className="mt-2">Invalid rows can be retried directly or downloaded as an Excel report.</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </ERPSurfaceCard>
  );
};

export default OldStudentBulkWorkflow;
