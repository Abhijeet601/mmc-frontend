import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookText,
  CheckCircle2,
  GraduationCap,
  Home,
  ImagePlus,
  MapPinned,
  Save,
  Sparkles,
  UserSquare2,
} from 'lucide-react';
import ERPButton from '@/components/erp/ERPButton';
import ERPBackdrop from '@/components/erp/ERPBackdrop';
import ERPPageTransition from '@/components/erp/ERPPageTransition';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { toast } from '@/components/ui/use-toast';
import {
  getApplicationForm,
  getStudentToken,
  resolveAssetUrl,
  saveApplicationDraft,
  submitApplication,
} from '@/services/erpApi';

const categoryOptions = ['UR', 'EWS', 'BC', 'EBC', 'SC', 'ST'];
const religionOptions = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Other'];
const ugCourseOptions = ['BA', 'BSc', 'BCom', 'BSW', 'BCA', 'BBA'];
const pgCourseOptions = ['MA', 'MSc'];
const programOptions = ['UG', 'PG'];
const resultTypes = ['Pass', 'Appearing', 'Division', 'CGPA'];

const initialForm = {
  name: '',
  email: '',
  mobile_number: '',
  date_of_birth: '',
  gender: 'Female',
  blood_group: '',
  aadhaar_number: '',
  category: 'UR',
  religion: 'Hindu',
  nationality: 'Indian',
  father_name: '',
  mother_name: '',
  local_guardian_name: '',
  guardian_mobile_number: '',
  correspondence_address: '',
  intermediate_college_name: '',
  intermediate_board: '',
  total_marks: '',
  marks_obtained: '',
  result_type: 'Pass',
  aggregate_percentage: '',
  admission_application_id: '',
  college_name: 'Magadh Mahila College',
  course_name: '',
  honours_subject: '',
  session: '2026-27',
  program: '',
  roll_number: '',
};

const inputClass =
  'mt-2 h-11 w-full rounded-2xl border border-white/60 bg-white/90 px-4 text-sm text-slate-900 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100';

const textareaClass = `${inputClass} h-auto min-h-[120px] py-3`;

const steps = [
  { key: 'personal', title: 'Personal Details', icon: UserSquare2 },
  { key: 'academic', title: 'Academic Information', icon: GraduationCap },
  { key: 'address', title: 'Address Information', icon: MapPinned },
  { key: 'documents', title: 'Admission & Documents', icon: BookText },
];

const requiredFields = [
  'name',
  'date_of_birth',
  'gender',
  'blood_group',
  'aadhaar_number',
  'category',
  'religion',
  'nationality',
  'father_name',
  'mother_name',
  'local_guardian_name',
  'guardian_mobile_number',
  'correspondence_address',
  'intermediate_college_name',
  'intermediate_board',
  'total_marks',
  'marks_obtained',
  'result_type',
  'aggregate_percentage',
  'admission_application_id',
  'college_name',
  'course_name',
  'honours_subject',
  'session',
  'program',
];

const formatValue = (value) => (value === null || value === undefined ? '' : String(value));

const getCourseOptions = (program) => (program === 'PG' ? pgCourseOptions : ugCourseOptions);

const Label = ({ title, required = false, children }) => (
  <label className="block text-sm font-medium text-slate-700">
    {title}
    {required ? <span className="ml-1 text-rose-500">*</span> : null}
    {children}
  </label>
);

const ERPApplicationForm = () => {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(true);
  const [savingDraft, setSavingDraft] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState('');
  const [formStatus, setFormStatus] = useState('not_started');
  const [registrationDob, setRegistrationDob] = useState('');
  const [isEditable, setIsEditable] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState('');

  useEffect(() => {
    if (!getStudentToken()) {
      navigate('/erp/student', { replace: true });
      return;
    }

    let active = true;
    const loadForm = async () => {
      setFetching(true);
      try {
        const data = await getApplicationForm();
        if (!active) return;

        setApplicationNumber(data.application_number);
        setFormStatus(data.form_status);
        setRegistrationDob(formatValue(data.registration_date_of_birth));
        setIsEditable(Boolean(data.is_editable));
        setPhotoPreview(data?.data?.student_photo_url ? resolveAssetUrl(data.data.student_photo_url) : '');
        setForm((prev) => ({
          ...prev,
          ...Object.fromEntries(Object.entries(prev).map(([key]) => [key, formatValue(data?.data?.[key]) || prev[key]])),
          email: data.email,
          mobile_number: data.mobile_number,
          date_of_birth: formatValue(data?.data?.date_of_birth || data.registration_date_of_birth),
        }));
      } catch (error) {
        toast({
          title: 'Unable to load application form',
          description: error.message || 'Please login again.',
          duration: 7000,
        });
        navigate('/erp/student', { replace: true });
      } finally {
        if (active) setFetching(false);
      }
    };

    loadForm();
    return () => {
      active = false;
    };
  }, [navigate]);

  useEffect(() => {
    const totalMarks = Number(form.total_marks);
    const marksObtained = Number(form.marks_obtained);
    if (Number.isFinite(totalMarks) && totalMarks > 0 && Number.isFinite(marksObtained)) {
      const percentage = ((marksObtained / totalMarks) * 100).toFixed(2);
      setForm((prev) => (prev.aggregate_percentage === percentage ? prev : { ...prev, aggregate_percentage: percentage }));
    }
  }, [form.total_marks, form.marks_obtained]);

  const selectedCourseOptions = useMemo(
    () => (form.program ? getCourseOptions(form.program) : []),
    [form.program],
  );

  useEffect(() => {
    if (!form.program) {
      setForm((prev) => (prev.course_name ? { ...prev, course_name: '' } : prev));
      return;
    }
    if (!selectedCourseOptions.includes(form.course_name)) {
      setForm((prev) => ({ ...prev, course_name: selectedCourseOptions[0] || '' }));
    }
  }, [form.course_name, form.program, selectedCourseOptions]);

  const completion = useMemo(() => {
    const filledFields = requiredFields.reduce((count, key) => {
      const value = form[key];
      return String(value || '').trim() ? count + 1 : count;
    }, 0);
    const photoDone = photoFile || photoPreview ? 1 : 0;
    return Math.round(((filledFields + photoDone) / (requiredFields.length + 1)) * 100);
  }, [form, photoFile, photoPreview]);

  const statusLabel = useMemo(() => {
    if (!isEditable) return 'Verified and locked';
    if (formStatus === 'submitted') return 'Submitted and editable before verification';
    if (formStatus === 'draft') return 'Draft saved';
    return 'New application';
  }, [formStatus, isEditable]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const buildPayload = () => {
    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      payload.append(key, value ?? '');
    });
    if (photoFile) payload.append('student_photo', photoFile);
    return payload;
  };

  const handleSaveDraft = async () => {
    setSavingDraft(true);
    try {
      const response = await saveApplicationDraft(buildPayload());
      setFormStatus((prev) => (prev === 'submitted' ? prev : 'draft'));
      toast({
        title: 'Draft saved',
        description: response.message || 'Application draft saved successfully.',
      });
    } catch (error) {
      toast({
        title: 'Draft save failed',
        description: error.message || 'Unable to save draft.',
        duration: 7000,
      });
    } finally {
      setSavingDraft(false);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const response = await submitApplication(buildPayload());
      toast({
        title: 'Application submitted',
        description: response.message || 'Application submitted successfully.',
      });
      navigate('/erp/dashboard');
    } catch (error) {
      toast({
        title: 'Submission failed',
        description: error.message || 'Unable to submit application.',
        duration: 7000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const renderStep = () => {
    const isProgramSelected = Boolean(form.program);
    const isPgStudent = form.program === 'PG';
    const qualifyingExamLabel = isPgStudent ? 'Graduation' : 'Intermediate';
    const institutionLabel = `${qualifyingExamLabel} College Name`;
    const boardLabel = isPgStudent ? 'Graduation University' : 'Intermediate Board';
    const totalMarksLabel = `${qualifyingExamLabel} Total Marks`;
    const marksObtainedLabel = `${qualifyingExamLabel} Marks Obtained`;
    const resultTypeLabel = `${qualifyingExamLabel} Result Type`;
    const percentageLabel = `${qualifyingExamLabel} Aggregate Percentage`;

    switch (steps[currentStep].key) {
      case 'personal':
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Label title="Application Number">
              <input className={inputClass} value={applicationNumber} readOnly />
            </Label>
            <Label title="Email ID">
              <input className={inputClass} value={form.email} readOnly />
            </Label>
            <Label title="Mobile Number">
              <input className={inputClass} value={form.mobile_number} readOnly />
            </Label>
            <Label title="Registration DOB">
              <input className={inputClass} value={registrationDob} readOnly />
            </Label>
            <Label title="Student Name" required>
              <input
                className={inputClass}
                value={form.name}
                disabled={!isEditable}
                onChange={(event) => handleChange('name', event.target.value)}
              />
            </Label>
            <Label title="Date of Birth" required>
              <input
                type="date"
                className={inputClass}
                value={form.date_of_birth}
                disabled={!isEditable}
                onChange={(event) => handleChange('date_of_birth', event.target.value)}
              />
            </Label>
            <Label title="Gender" required>
              <select
                className={inputClass}
                value={form.gender}
                disabled={!isEditable}
                onChange={(event) => handleChange('gender', event.target.value)}
              >
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </Label>
            <Label title="Blood Group" required>
              <input
                className={inputClass}
                value={form.blood_group}
                disabled={!isEditable}
                onChange={(event) => handleChange('blood_group', event.target.value)}
              />
            </Label>
            <Label title="Aadhaar Number" required>
              <input
                className={inputClass}
                value={form.aadhaar_number}
                disabled={!isEditable}
                onChange={(event) => handleChange('aadhaar_number', event.target.value)}
              />
            </Label>
            <Label title="Category" required>
              <select
                className={inputClass}
                value={form.category}
                disabled={!isEditable}
                onChange={(event) => handleChange('category', event.target.value)}
              >
                {categoryOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Label>
            <Label title="Religion" required>
              <select
                className={inputClass}
                value={form.religion}
                disabled={!isEditable}
                onChange={(event) => handleChange('religion', event.target.value)}
              >
                {religionOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Label>
            <Label title="Nationality" required>
              <input
                className={inputClass}
                value={form.nationality}
                disabled={!isEditable}
                onChange={(event) => handleChange('nationality', event.target.value)}
              />
            </Label>
          </div>
        );
      case 'academic':
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <Label title="Are you a UG student or PG student?" required>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {programOptions.map((item) => {
                    const active = form.program === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        disabled={!isEditable}
                        aria-pressed={active}
                        onClick={() => handleChange('program', item)}
                        className={`rounded-[24px] border px-5 py-4 text-left transition ${
                          active
                            ? 'border-cyan-300 bg-cyan-50 text-cyan-900 shadow-[0_18px_40px_-32px_rgba(14,116,144,0.55)]'
                            : 'border-white/60 bg-white/90 text-slate-700 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.45)]'
                        } ${!isEditable ? 'cursor-not-allowed opacity-70' : 'hover:border-cyan-200 hover:bg-cyan-50/60'}`}
                      >
                        <p className="text-sm font-semibold">{item}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item === 'UG' ? 'Show intermediate details' : 'Show graduation details'}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </Label>
            </div>
            {!isProgramSelected ? (
              <div className="md:col-span-2 rounded-[28px] border border-dashed border-cyan-200 bg-cyan-50/70 px-6 py-8 text-center text-sm text-slate-600">
                Select `UG` or `PG` to open the academic details form.
              </div>
            ) : null}
            {isProgramSelected ? (
              <>
            <Label title={institutionLabel} required>
              <input
                className={inputClass}
                value={form.intermediate_college_name}
                disabled={!isEditable}
                onChange={(event) => handleChange('intermediate_college_name', event.target.value)}
              />
            </Label>
            <Label title={boardLabel} required>
              <input
                className={inputClass}
                value={form.intermediate_board}
                disabled={!isEditable}
                onChange={(event) => handleChange('intermediate_board', event.target.value)}
              />
            </Label>
            <Label title={totalMarksLabel} required>
              <input
                type="number"
                className={inputClass}
                value={form.total_marks}
                disabled={!isEditable}
                onChange={(event) => handleChange('total_marks', event.target.value)}
              />
            </Label>
            <Label title={marksObtainedLabel} required>
              <input
                type="number"
                className={inputClass}
                value={form.marks_obtained}
                disabled={!isEditable}
                onChange={(event) => handleChange('marks_obtained', event.target.value)}
              />
            </Label>
            <Label title={resultTypeLabel} required>
              <select
                className={inputClass}
                value={form.result_type}
                disabled={!isEditable}
                onChange={(event) => handleChange('result_type', event.target.value)}
              >
                {resultTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Label>
            <Label title={percentageLabel} required>
              <input className={inputClass} value={form.aggregate_percentage} readOnly />
            </Label>
              </>
            ) : null}
          </div>
        );
      case 'address':
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Label title="Father's Name" required>
              <input
                className={inputClass}
                value={form.father_name}
                disabled={!isEditable}
                onChange={(event) => handleChange('father_name', event.target.value)}
              />
            </Label>
            <Label title="Mother's Name" required>
              <input
                className={inputClass}
                value={form.mother_name}
                disabled={!isEditable}
                onChange={(event) => handleChange('mother_name', event.target.value)}
              />
            </Label>
            <Label title="Local Guardian Name" required>
              <input
                className={inputClass}
                value={form.local_guardian_name}
                disabled={!isEditable}
                onChange={(event) => handleChange('local_guardian_name', event.target.value)}
              />
            </Label>
            <Label title="Guardian Mobile Number" required>
              <input
                className={inputClass}
                value={form.guardian_mobile_number}
                disabled={!isEditable}
                onChange={(event) => handleChange('guardian_mobile_number', event.target.value)}
              />
            </Label>
            <div className="md:col-span-2">
              <Label title="Correspondence Address" required>
                <textarea
                  rows={5}
                  className={textareaClass}
                  value={form.correspondence_address}
                  disabled={!isEditable}
                  onChange={(event) => handleChange('correspondence_address', event.target.value)}
                />
              </Label>
            </div>
          </div>
        );
      default:
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Label title="Admission Application ID" required>
              <input
                className={inputClass}
                value={form.admission_application_id}
                disabled={!isEditable}
                onChange={(event) => handleChange('admission_application_id', event.target.value)}
              />
            </Label>
            <Label title="College Name" required>
              <input
                className={inputClass}
                value={form.college_name}
                disabled={!isEditable}
                onChange={(event) => handleChange('college_name', event.target.value)}
              />
            </Label>
            <Label title="Course Name" required>
              <select
                className={inputClass}
                value={form.course_name}
                disabled={!isEditable || !form.program}
                onChange={(event) => handleChange('course_name', event.target.value)}
              >
                {!form.program ? (
                  <option value="">Select UG or PG first</option>
                ) : null}
                {selectedCourseOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Label>
            <Label title="Honours Subject" required>
              <input
                className={inputClass}
                value={form.honours_subject}
                disabled={!isEditable}
                onChange={(event) => handleChange('honours_subject', event.target.value)}
              />
            </Label>
            <Label title="Session" required>
              <input
                className={inputClass}
                value={form.session}
                disabled={!isEditable}
                onChange={(event) => handleChange('session', event.target.value)}
              />
            </Label>
            <Label title="Roll Number">
              <input
                className={inputClass}
                value={form.roll_number}
                disabled={!isEditable}
                onChange={(event) => handleChange('roll_number', event.target.value)}
              />
            </Label>
            <div className="md:col-span-2">
              <Label title="Student Photo" required>
                <label className="mt-2 flex min-h-[152px] cursor-pointer flex-col items-center justify-center rounded-[28px] border border-dashed border-cyan-200 bg-cyan-50/70 px-5 py-6 text-center">
                  <ImagePlus className="h-8 w-8 text-cyan-600" />
                  <span className="mt-3 text-sm font-medium text-slate-800">
                    {photoFile ? photoFile.name : 'Upload student photograph'}
                  </span>
                  <span className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                    JPG, PNG or WEBP
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={!isEditable}
                    onChange={(event) => {
                      const file = event.target.files?.[0] || null;
                      setPhotoFile(file);
                      if (file) setPhotoPreview(URL.createObjectURL(file));
                    }}
                  />
                </label>
              </Label>
            </div>
            {photoPreview ? (
              <div className="md:col-span-2">
                <img
                  src={photoPreview}
                  alt="Student preview"
                  className="h-36 w-28 rounded-3xl object-cover shadow-[0_16px_40px_-26px_rgba(15,23,42,0.5)]"
                />
              </div>
            ) : null}
            <div className="md:col-span-2 rounded-[28px] border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm text-slate-600">
              Document upload currently captures the required student photograph for the hostel admission workflow.
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>Application Form | Hostel ERP</title>
      </Helmet>

      <ERPBackdrop className="py-14">
        <ERPPageTransition className="relative z-10 mx-auto max-w-7xl space-y-6">
          <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr]">
            <ERPSurfaceCard className="erp-glass-panel p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    Hostel Application
                  </p>
                  <h1 className="erp-display mt-4 text-4xl font-bold text-slate-950">
                    Complete the structured hostel admission form.
                  </h1>
                  <p className="mt-3 max-w-2xl text-slate-600">
                    Personal details, academic details, address information, and document upload are organized into
                    clear steps with draft-save support before final submission.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/80 px-5 py-4 shadow-[0_24px_50px_-35px_rgba(15,23,42,0.45)]">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Application Number</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{applicationNumber || '-'}</p>
                  <p className="mt-2 text-sm text-slate-500">{statusLabel}</p>
                </div>
              </div>
            </ERPSurfaceCard>

            <ERPSurfaceCard className="erp-glass-panel p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Completion</p>
                  <p className="mt-3 text-4xl font-bold text-slate-950">{completion}%</p>
                  <p className="mt-2 text-sm text-slate-600">
                    All required fields and the student photograph must be present before final submission.
                  </p>
                </div>
                <Link
                  to="/erp/dashboard"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Dashboard
                </Link>
              </div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400"
                  animate={{ width: `${completion}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </ERPSurfaceCard>
          </div>

          <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
            <ERPSurfaceCard className="erp-glass-panel p-5">
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const active = currentStep === index;
                  const completed = currentStep > index;
                  return (
                    <button
                      key={step.key}
                      type="button"
                      onClick={() => setCurrentStep(index)}
                      className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition ${
                        active
                          ? 'border-cyan-200 bg-cyan-50 text-cyan-800'
                          : completed
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                            : 'border-slate-200 bg-white/80 text-slate-600'
                      }`}
                    >
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${
                          active
                            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white'
                            : completed
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {completed ? <CheckCircle2 className="h-4 w-4" /> : <step.icon className="h-4 w-4" />}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] opacity-70">Step {index + 1}</p>
                        <p className="mt-1 font-semibold">{step.title}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {!isEditable ? (
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-900">
                  This application is already verified by admin and cannot be edited further.
                </div>
              ) : null}
            </ERPSurfaceCard>

            <ERPSurfaceCard className="erp-glass-panel overflow-hidden p-6 sm:p-7" animatedBorder>
              {fetching ? (
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-center text-sm text-slate-500">
                  Loading student application...
                </div>
              ) : (
                <>
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {steps[currentStep].title} Details
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-slate-900">{steps[currentStep].title} Information</h2>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-600">
                      Registration DOB: <span className="font-semibold text-slate-900">{registrationDob || '-'}</span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={steps[currentStep].key}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                    >
                      {renderStep()}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-3">
                      <ERPButton
                        variant="secondary"
                        disabled={currentStep === 0}
                        onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Previous
                      </ERPButton>
                      <ERPButton
                        variant="secondary"
                        disabled={currentStep === steps.length - 1}
                        onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
                      >
                        Next
                        <ArrowRight className="h-4 w-4" />
                      </ERPButton>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <ERPButton
                        variant="secondary"
                        disabled={savingDraft || submitting || !isEditable}
                        onClick={handleSaveDraft}
                      >
                        <Save className="h-4 w-4" />
                        {savingDraft ? 'Saving...' : 'Save Draft'}
                      </ERPButton>
                      <ERPButton disabled={submitting || savingDraft || !isEditable} onClick={handleSubmit}>
                        <CheckCircle2 className="h-4 w-4" />
                        {submitting ? 'Submitting...' : 'Submit Application'}
                      </ERPButton>
                    </div>
                  </div>
                </>
              )}
            </ERPSurfaceCard>
          </div>

          <div className="text-sm text-slate-500">
            <Link to="/erp" className="inline-flex items-center gap-2 font-semibold text-cyan-700 underline">
              <Home className="h-4 w-4" />
              Back to ERP portal
            </Link>
          </div>
        </ERPPageTransition>
      </ERPBackdrop>
    </>
  );
};

export default ERPApplicationForm;
