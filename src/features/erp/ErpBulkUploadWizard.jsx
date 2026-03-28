import { useMemo, useState } from 'react';
import * as XLSX from 'xlsx';
import { AlertTriangle, Download, FileSpreadsheet, UploadCloud } from 'lucide-react';

import ERPButton from '@/components/erp/ERPButton';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const uploadRules = {
  shortlist: {
    columns: ['Registration Number'],
    description: 'Bulk shortlist, category updates, and pre-allocation data preparation.',
    validator: (row) => {
      const registration =
        row['Registration Number'] ||
        row['Application Number'] ||
        row['Application No'] ||
        row.application_number;
      const hasAction = row['Shortlist Status'] || row['Allotted Category'] || row['Hostel Name'];

      if (!registration) return 'Registration number is required.';
      if (!hasAction) return 'Shortlist, allotment, or hostel column must be present.';
      return null;
    },
  },
  allocation: {
    columns: ['Registration Number', 'Hostel Block', 'Room Number'],
    description: 'Bulk room allocation with room, block, and optional bed mapping.',
    validator: (row) => {
      const registration =
        row['Registration Number'] ||
        row['Application Number'] ||
        row['Application No'] ||
        row.application_number;
      if (!registration) return 'Registration number is required.';
      if (!row['Hostel Block'] || !row['Room Number']) return 'Hostel block and room number are required.';
      return null;
    },
  },
  oldStudents: {
    columns: ['Hostel ID', 'Student Name', 'Course Name', 'Session', 'Mobile Number'],
    description: 'Historic hostel records import with optional ID generation for missing records.',
    validator: (row) => {
      if (!row['Hostel ID'] && !row.hostel_id) return 'Hostel ID is required.';
      if (!row['Student Name'] && !row.student_name) return 'Student name is required.';
      if (!row['Course Name'] && !row.course_name) return 'Course name is required.';
      if (!row['Session'] && !row.session) return 'Session is required.';
      if (!row['Mobile Number'] && !row.mobile_number) return 'Mobile number is required.';
      return null;
    },
  },
};

const readWorkbookRows = async (file) => {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(firstSheet, { defval: '' });
};

const downloadWorkbook = (rows, filename) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
  XLSX.writeFile(workbook, filename);
};

const ErpBulkUploadWizard = ({
  mode,
  onUpload,
  onDownloadTemplate,
  title,
  subtitle,
  uploadButtonLabel,
  theme = 'light',
  extraFields,
}) => {
  const [file, setFile] = useState(null);
  const [previewRows, setPreviewRows] = useState([]);
  const [errors, setErrors] = useState([]);
  const [result, setResult] = useState(null);
  const [uploading, setUploading] = useState(false);
  const rules = uploadRules[mode];

  const palette =
    theme === 'dark'
      ? {
          frame: 'border-slate-800 bg-slate-950/82 text-slate-100',
          dropzone: 'border-slate-700 bg-slate-900/80',
          muted: 'text-slate-400',
          card: 'border-slate-800 bg-slate-900/80',
        }
      : {
          frame: 'border-white/70 bg-white/88 text-slate-900',
          dropzone: 'border-slate-200 bg-slate-50/80',
          muted: 'text-slate-500',
          card: 'border-slate-200 bg-slate-50/80',
        };

  const validRows = useMemo(() => Math.max(previewRows.length - errors.length, 0), [previewRows.length, errors.length]);

  const analyzeFile = async (nextFile) => {
    try {
      const rows = await readWorkbookRows(nextFile);
      const normalizedRows = rows.map((row) =>
        Object.fromEntries(Object.entries(row).map(([key, value]) => [String(key).trim(), value]))
      );

      const nextErrors = normalizedRows
        .map((row, index) => {
          const message = rules.validator(row);
          return message ? { row: index + 2, message, ...row } : null;
        })
        .filter(Boolean);

      setFile(nextFile);
      setPreviewRows(normalizedRows);
      setErrors(nextErrors);
      setResult(null);
    } catch (error) {
      toast({
        title: 'Unable to read upload',
        description: error.message || 'The file could not be parsed.',
        duration: 7000,
      });
    }
  };

  const handleFileChange = async (event) => {
    const nextFile = event.target.files?.[0];
    if (!nextFile) return;
    await analyzeFile(nextFile);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const nextFile = event.dataTransfer.files?.[0];
    if (!nextFile) return;
    await analyzeFile(nextFile);
  };

  const handleConfirmUpload = async () => {
    if (!file) {
      toast({ title: 'Select a file first', description: 'Upload an Excel or CSV file to continue.' });
      return;
    }

    if (errors.length) {
      toast({
        title: 'Validation issues found',
        description: 'Resolve or export the error report before confirming upload.',
      });
      return;
    }

    setUploading(true);
    try {
      const uploadResult = await onUpload(file);
      setResult(uploadResult || null);
      toast({
        title: 'Bulk upload completed',
        description: uploadResult?.message || 'Records processed successfully.',
      });
    } catch (error) {
      toast({
        title: 'Bulk upload failed',
        description: error.message || 'Please try again.',
        duration: 7000,
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <ERPSurfaceCard hover={false} className={cn('rounded-[32px] border p-5 sm:p-6', palette.frame)}>
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">Bulk Operations</p>
          <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
          <p className={cn('mt-2 max-w-2xl text-sm leading-6', palette.muted)}>{subtitle || rules.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <ERPButton variant="secondary" onClick={onDownloadTemplate}>
            <Download className="h-4 w-4" />
            Template
          </ERPButton>
          {errors.length ? (
            <ERPButton
              variant="secondary"
              onClick={() =>
                downloadWorkbook(
                  errors.map(({ row, message, ...rest }) => ({ row, message, ...rest })),
                  `${mode}_error_report.xlsx`
                )
              }
            >
              <AlertTriangle className="h-4 w-4" />
              Error report
            </ERPButton>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.1fr,0.9fr]">
        <div
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
          className={cn('rounded-[28px] border-2 border-dashed p-6 text-center transition', palette.dropzone)}
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,#1D4ED8,#0EA5E9)] text-white shadow-[0_22px_48px_-22px_rgba(37,99,235,0.55)]">
            <UploadCloud className="h-6 w-6" />
          </div>
          <h4 className="mt-4 text-lg font-semibold">Upload Excel or CSV</h4>
          <p className={cn('mt-2 text-sm leading-6', palette.muted)}>
            Required columns: {rules.columns.join(', ')}. Drag and drop the file here or browse from disk.
          </p>
          <label className="mt-5 inline-flex cursor-pointer">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700">
              <FileSpreadsheet className="h-4 w-4" />
              Browse file
            </span>
            <input type="file" accept=".xlsx,.xls,.csv" className="hidden" onChange={handleFileChange} />
          </label>
          {file ? <p className={cn('mt-4 text-sm font-medium', palette.muted)}>{file.name}</p> : null}
          {extraFields ? <div className="mt-5">{extraFields}</div> : null}
        </div>

        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
          {[
            ['Total rows', previewRows.length],
            ['Valid rows', validRows],
            ['Error rows', errors.length],
          ].map(([label, value]) => (
            <div key={label} className={cn('rounded-[26px] border p-4', palette.card)}>
              <p className={cn('text-xs font-semibold uppercase tracking-[0.18em]', palette.muted)}>{label}</p>
              <p className="mt-3 text-2xl font-semibold">{value}</p>
            </div>
          ))}

          <div className={cn('rounded-[26px] border p-4', palette.card)}>
            <p className={cn('text-xs font-semibold uppercase tracking-[0.18em]', palette.muted)}>Workflow</p>
            <ol className="mt-3 space-y-2 text-sm">
              <li>1. Upload file</li>
              <li>2. Preview rows</li>
              <li>3. Validate records</li>
              <li>4. Confirm upload</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr,0.85fr]">
        <div className={cn('rounded-[28px] border p-4', palette.card)}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Preview</p>
              <p className={cn('text-sm', palette.muted)}>First six rows are shown before upload confirmation.</p>
            </div>
            <ERPButton onClick={handleConfirmUpload} disabled={!file || uploading || errors.length > 0}>
              <UploadCloud className="h-4 w-4" />
              {uploading ? 'Uploading...' : uploadButtonLabel || 'Confirm upload'}
            </ERPButton>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200/70 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {(previewRows[0] ? Object.keys(previewRows[0]) : rules.columns).slice(0, 5).map((column) => (
                    <th key={column} className="px-3 py-2">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {previewRows.length ? (
                  previewRows.slice(0, 6).map((row, index) => (
                    <tr key={`${mode}-preview-${index}`} className="border-b border-slate-200/50">
                      {Object.entries(row)
                        .slice(0, 5)
                        .map(([key, value]) => (
                          <td key={`${index}-${key}`} className="px-3 py-3">
                            {String(value || '-')}
                          </td>
                        ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-3 py-8 text-sm text-slate-500" colSpan={5}>
                      Upload a file to see the preview grid.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className={cn('rounded-[28px] border p-4', palette.card)}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Validation</p>
              <p className={cn('text-sm', palette.muted)}>Errors can be downloaded as an Excel report.</p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {errors.length ? (
              errors.slice(0, 5).map((error) => (
                <div
                  key={`${mode}-error-${error.row}`}
                  className={cn(
                    'rounded-2xl border px-4 py-3 text-sm',
                    theme === 'dark'
                      ? 'border-rose-500/30 bg-rose-500/10 text-rose-100'
                      : 'border-rose-200 bg-rose-50 text-rose-700'
                  )}
                >
                  <p className="font-semibold">Row {error.row}</p>
                  <p className="mt-1">{error.message}</p>
                </div>
              ))
            ) : (
              <div
                className={cn(
                  'rounded-2xl border px-4 py-4 text-sm',
                  theme === 'dark'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-100'
                    : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                )}
              >
                Validation passed. The file is ready for upload.
              </div>
            )}

            {result ? (
              <div className={cn('rounded-2xl border px-4 py-4 text-sm', palette.card)}>
                <p className="font-semibold">Latest upload result</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {Object.entries(result)
                    .filter(([, value]) => value !== null && value !== undefined && value !== '')
                    .map(([key, value]) => (
                      <div key={key} className="rounded-2xl border border-slate-200/60 px-3 py-2 dark:border-slate-800">
                        <p className={cn('text-[11px] font-semibold uppercase tracking-[0.16em]', palette.muted)}>
                          {key.replace(/_/g, ' ')}
                        </p>
                        <p className="mt-1 font-semibold">{String(value)}</p>
                      </div>
                    ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </ERPSurfaceCard>
  );
};

export default ErpBulkUploadWizard;
