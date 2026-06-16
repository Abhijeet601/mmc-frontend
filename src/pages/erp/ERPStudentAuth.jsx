import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, LogIn, UserPlus } from 'lucide-react';

import ERPBackdrop from '@/components/erp/ERPBackdrop';
import ERPButton from '@/components/erp/ERPButton';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { loginStudent, registerStudent } from '@/services/erpApi';

const inputClass =
  'h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/15';

const ERPStudentAuth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    date_of_birth: '',
    password: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      if (mode === 'register') {
        await registerStudent({
          email: form.email,
          mobile: form.mobile,
          dob: form.date_of_birth,
          password: form.password,
        });
        navigate('/erp/application-form', { replace: true });
      } else {
        await loginStudent(form);
        navigate('/erp/student/dashboard', { replace: true });
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unable to complete request.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ERPBackdrop className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <div>
          <Link to="/erp" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="h-4 w-4" />
            ERP portal
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground">Student access</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Login to manage your hostel admission form, fee status, and renewal requests.
          </p>
        </div>

        <ERPSurfaceCard className="p-6 sm:p-8" hover={false}>
          <div className="mb-6 inline-flex rounded-2xl border border-border bg-muted/40 p-1">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                mode === 'login' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode('register')}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                mode === 'register' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              Register
            </button>
          </div>

          <form className="space-y-4" onSubmit={submit}>
            {mode === 'register' ? (
              <>
                <input className={inputClass} name="name" value={form.name} onChange={updateField} placeholder="Full name" required />
                <input className={inputClass} name="mobile" value={form.mobile} onChange={updateField} placeholder="Mobile number" required />
              </>
            ) : null}
            <input
              className={inputClass}
              name="email"
              type={mode === 'register' ? 'email' : 'text'}
              value={form.email}
              onChange={updateField}
              placeholder={mode === 'register' ? 'Email address' : 'Email or application number'}
              required
            />
            {mode === 'register' ? (
              <input className={inputClass} name="date_of_birth" type="date" value={form.date_of_birth} onChange={updateField} required />
            ) : null}
            <input className={inputClass} name="password" type="password" value={form.password} onChange={updateField} placeholder="Password" required />

            {status.message ? (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                    : 'border-destructive/20 bg-destructive/10 text-destructive'
                }`}
              >
                {status.message}
              </div>
            ) : null}

            <ERPButton type="submit" disabled={submitting} className="w-full justify-center">
              {mode === 'login' ? <LogIn className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
              {submitting ? 'Please wait' : mode === 'login' ? 'Login' : 'Create account'}
            </ERPButton>
          </form>
        </ERPSurfaceCard>
      </div>
    </ERPBackdrop>
  );
};

export default ERPStudentAuth;
