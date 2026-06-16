import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Send } from 'lucide-react';

import ERPBackdrop from '@/components/erp/ERPBackdrop';
import ERPButton from '@/components/erp/ERPButton';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { getApplicationForm, getStudentToken, saveApplicationDraft, submitApplication } from '@/services/erpApi';

const inputClass =
  'h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/15';
const areaClass =
  'min-h-[96px] w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/15';

const initialForm = {
  name: '',
  mobile: '',
  email: '',
  father_name: '',
  mother_name: '',
  guardian_name: '',
  guardian_mobile: '',
  dob: '',
  gender: 'Female',
  blood_group: 'O+',
  aadhar_no: '',
  category: 'General',
  religion: 'Hindu',
  nationality: 'Indian',
  correspondence_address: '',
  college_name: 'Magadh Mahila College',
  course: 'BA',
  honours_subject: '',
  session: '',
  roll_no: '',
};

const ERPApplicationForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!getStudentToken()) return;
    getApplicationForm()
      .then((data) => {
        if (data && typeof data === 'object') {
          setForm((current) => ({ ...current, ...data, dob: data.dob || data.date_of_birth || current.dob }));
        }
      })
      .catch(() => {});
  }, []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const buildPayload = () => ({
    ...form,
    inter_total_marks: Number(form.inter_total_marks || 0),
    inter_marks_obtained: Number(form.inter_marks_obtained || 0),
    inter_aggregate: Number(form.inter_aggregate || 0),
  });

  const handleSave = async (submit = false) => {
    if (!getStudentToken()) {
      navigate('/erp/student/login');
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      if (submit) {
        await saveApplicationDraft(buildPayload());
        await submitApplication();
        setStatus({ type: 'success', message: 'Application submitted successfully.' });
      } else {
        await saveApplicationDraft(buildPayload());
        setStatus({ type: 'success', message: 'Draft saved successfully.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unable to save application.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ERPBackdrop className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link to="/erp" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <ArrowLeft className="h-4 w-4" />
              ERP portal
            </Link>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">Hostel application form</h1>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Complete the required student and admission details.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <ERPButton variant="secondary" disabled={loading} onClick={() => handleSave(false)}>
              <Save className="h-4 w-4" />
              Save draft
            </ERPButton>
            <ERPButton disabled={loading} onClick={() => handleSave(true)}>
              <Send className="h-4 w-4" />
              Submit
            </ERPButton>
          </div>
        </div>

        <ERPSurfaceCard className="p-5 sm:p-6" hover={false}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <input className={inputClass} name="name" value={form.name} onChange={updateField} placeholder="Student name" />
            <input className={inputClass} name="mobile" value={form.mobile} onChange={updateField} placeholder="Mobile" />
            <input className={inputClass} name="email" type="email" value={form.email} onChange={updateField} placeholder="Email" />
            <input className={inputClass} name="dob" type="date" value={form.dob} onChange={updateField} />
            <select className={inputClass} name="gender" value={form.gender} onChange={updateField}>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
            <select className={inputClass} name="blood_group" value={form.blood_group} onChange={updateField}>
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <input className={inputClass} name="father_name" value={form.father_name} onChange={updateField} placeholder="Father name" />
            <input className={inputClass} name="mother_name" value={form.mother_name} onChange={updateField} placeholder="Mother name" />
            <input className={inputClass} name="guardian_name" value={form.guardian_name} onChange={updateField} placeholder="Guardian name" />
            <input className={inputClass} name="guardian_mobile" value={form.guardian_mobile} onChange={updateField} placeholder="Guardian mobile" />
            <input className={inputClass} name="aadhar_no" value={form.aadhar_no} onChange={updateField} placeholder="Aadhar number" />
            <input className={inputClass} name="category" value={form.category} onChange={updateField} placeholder="Category" />
            <input className={inputClass} name="religion" value={form.religion} onChange={updateField} placeholder="Religion" />
            <input className={inputClass} name="nationality" value={form.nationality} onChange={updateField} placeholder="Nationality" />
            <input className={inputClass} name="college_name" value={form.college_name} onChange={updateField} placeholder="College name" />
            <input className={inputClass} name="course" value={form.course} onChange={updateField} placeholder="Course" />
            <input className={inputClass} name="honours_subject" value={form.honours_subject} onChange={updateField} placeholder="Honours subject" />
            <input className={inputClass} name="session" value={form.session} onChange={updateField} placeholder="Session" />
            <input className={inputClass} name="roll_no" value={form.roll_no} onChange={updateField} placeholder="Roll number" />
            <textarea className={`${areaClass} md:col-span-2 lg:col-span-3`} name="correspondence_address" value={form.correspondence_address} onChange={updateField} placeholder="Correspondence address" />
          </div>

          {status.message ? (
            <div
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-destructive/20 bg-destructive/10 text-destructive'
              }`}
            >
              {status.message}
            </div>
          ) : null}
        </ERPSurfaceCard>
      </div>
    </ERPBackdrop>
  );
};

export default ERPApplicationForm;
