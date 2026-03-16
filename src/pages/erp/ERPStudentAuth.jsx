import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  BookOpenCheck,
  CreditCard,
  KeyRound,
  LockKeyhole,
  Mail,
  Phone,
  RefreshCcw,
  ShieldCheck,
  UserRoundPlus,
} from 'lucide-react';
import ERPButton from '@/components/erp/ERPButton';
import ERPBackdrop from '@/components/erp/ERPBackdrop';
import ERPPageTransition from '@/components/erp/ERPPageTransition';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { toast } from '@/components/ui/use-toast';
import {
  clearStudentToken,
  getStudentToken,
  loginStudent,
  registerStudent,
  resetStudentPassword,
} from '@/services/erpApi';

const inputClass =
  'mt-2 h-12 w-full rounded-2xl border border-white/60 bg-white/90 px-4 text-sm text-slate-900 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.45)] outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100';

const initialRegister = {
  email: '',
  date_of_birth: '',
  mobile_number: '',
  password: '',
};

const initialLogin = {
  email: '',
  dob: '',
  password: '',
};

const initialReset = {
  identifier: '',
  date_of_birth: '',
  mobile_number: '',
  new_password: '',
  confirm_password: '',
};

const portalModules = [
  {
    title: 'Student Authentication',
    description: 'Register, sign in, and reset your password securely using verified student details.',
    icon: ShieldCheck,
  },
  {
    title: 'Admission Form',
    description: 'Complete hostel admission details, academic information, address data, and document upload.',
    icon: BookOpenCheck,
  },
  {
    title: 'Application Tracking',
    description: 'Monitor verification, shortlist status, hostel allocation, and operational notifications.',
    icon: BellRing,
  },
  {
    title: 'Payments & Allocation',
    description: 'Record application fee, hostel fee, and view the assigned hostel, room, and bed details.',
    icon: CreditCard,
  },
];

const authTabs = [
  { key: 'login', label: 'Student Login' },
  { key: 'register', label: 'Register' },
  { key: 'reset', label: 'Reset Password' },
];

const ERPStudentAuth = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('login');
  const [registerForm, setRegisterForm] = useState(initialRegister);
  const [loginForm, setLoginForm] = useState(initialLogin);
  const [resetForm, setResetForm] = useState(initialReset);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [generatedCredentials, setGeneratedCredentials] = useState(null);

  const sessionNotice = Boolean(getStudentToken());

  const handleRegister = async (event) => {
    event.preventDefault();
    setRegisterLoading(true);
    try {
      const data = await registerStudent({
        ...registerForm,
        password: registerForm.password.trim() || undefined,
      });
      setGeneratedCredentials(data);
      setLoginForm({
        email: data.email,
        dob: registerForm.date_of_birth,
        password: data.password,
      });
      setTab('login');
      toast({
        title: 'Registration completed',
        description: `Application number ${data.application_number} generated successfully.`,
      });
    } catch (error) {
      toast({
        title: 'Registration failed',
        description: error.message || 'Unable to create student account.',
        duration: 7000,
      });
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginLoading(true);
    try {
      const data = await loginStudent(loginForm);
      toast({
        title: 'Login successful',
        description: `Application No. ${data.application_number} is ready.`,
      });
      navigate(data.redirect || '/erp/application-form');
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error.message || 'Invalid credentials.',
        duration: 7000,
      });
    } finally {
      setLoginLoading(false);
    }
  };

  const handleReset = async (event) => {
    event.preventDefault();
    if (resetForm.new_password !== resetForm.confirm_password) {
      toast({
        title: 'Password mismatch',
        description: 'New password and confirmation must match.',
        duration: 7000,
      });
      return;
    }

    setResetLoading(true);
    try {
      await resetStudentPassword({
        identifier: resetForm.identifier,
        date_of_birth: resetForm.date_of_birth,
        mobile_number: resetForm.mobile_number,
        new_password: resetForm.new_password,
      });
      setLoginForm((prev) => ({
        ...prev,
        email: resetForm.identifier,
        dob: resetForm.date_of_birth,
        password: resetForm.new_password,
      }));
      setResetForm(initialReset);
      setTab('login');
      toast({
        title: 'Password reset completed',
        description: 'Use the updated password to sign in to the student portal.',
      });
    } catch (error) {
      toast({
        title: 'Password reset failed',
        description: error.message || 'Unable to reset the password.',
        duration: 7000,
      });
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Student Portal | Hostel Admission &amp; Management System</title>
      </Helmet>

      <ERPBackdrop className="py-14">
        <ERPPageTransition className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr,0.92fr]">
          <div className="space-y-6">
            <ERPSurfaceCard className="erp-glass-panel overflow-hidden p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Student Portal
              </div>
              <h1 className="erp-display mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
                Student workspace for hostel admission, payments, tracking, and room allocation.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Register securely, complete the admission form, upload required records, track every review stage,
                complete fee payments, and monitor hostel allocation from one structured portal.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {portalModules.map((module, index) => (
                  <motion.div
                    key={module.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-[0_22px_48px_-36px_rgba(15,23,42,0.45)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(29,78,216,0.12),rgba(6,182,212,0.18))] text-sky-700">
                      <module.icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-slate-900">{module.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{module.description}</p>
                  </motion.div>
                ))}
              </div>
            </ERPSurfaceCard>

            <ERPSurfaceCard className="erp-glass-panel p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">System Workflow</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Student portal modules</h2>
                </div>
                <Link to="/erp" className="text-sm font-semibold text-cyan-700 underline">
                  ERP home
                </Link>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  'Student authentication with registration, login, and password reset.',
                  'Admission form with personal, academic, address, and document upload sections.',
                  'Status tracking, fee payment, hostel allocation, and notifications from the dashboard.',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4 text-sm text-slate-700"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {sessionNotice ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-4 text-sm text-emerald-900">
                  Existing student session found in this browser.
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link to="/erp/dashboard" className="font-semibold underline">
                      Open dashboard
                    </Link>
                    <button
                      type="button"
                      className="font-semibold underline"
                      onClick={() => {
                        clearStudentToken();
                        toast({ title: 'Student session cleared' });
                      }}
                    >
                      Clear session
                    </button>
                  </div>
                </div>
              ) : null}
            </ERPSurfaceCard>
          </div>

            <ERPSurfaceCard className="erp-glass-panel relative overflow-hidden p-6 sm:p-8" animatedBorder>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Access Portal</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Student authentication</h2>
            <p className="mt-2 text-sm text-slate-600">
              Use registration for new access, login for existing accounts, and password reset when credentials need
              to be refreshed.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-2 rounded-2xl bg-slate-100/80 p-1.5 sm:grid-cols-3">
              {authTabs.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setTab(item.key)}
                  className={`relative rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    tab === item.key ? 'text-slate-950' : 'text-slate-500'
                  }`}
                >
                  {item.label}
                  {tab === item.key ? (
                    <motion.span
                      layoutId="erp-auth-pill"
                      className="absolute inset-0 -z-[1] rounded-xl border border-white/70 bg-white shadow-sm"
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                    />
                  ) : null}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {tab === 'login' ? (
                <motion.form
                  key="login"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-7 space-y-5"
                  onSubmit={handleLogin}
                >
                  <label className="block text-sm font-medium text-slate-700">
                    Email ID / Application Number
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-6 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="text"
                        className={`${inputClass} pl-11`}
                        value={loginForm.email}
                        onChange={(event) => setLoginForm((prev) => ({ ...prev, email: event.target.value }))}
                        placeholder="Enter email or application number"
                      />
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Password
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-4 top-6 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="password"
                        className={`${inputClass} pl-11`}
                        value={loginForm.password}
                        onChange={(event) => setLoginForm((prev) => ({ ...prev, password: event.target.value }))}
                        placeholder="Enter password"
                      />
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Date of Birth
                    <span className="ml-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                      Optional verification
                    </span>
                    <input
                      type="date"
                      className={inputClass}
                      value={loginForm.dob}
                      onChange={(event) => setLoginForm((prev) => ({ ...prev, dob: event.target.value }))}
                    />
                  </label>

                  <ERPButton type="submit" disabled={loginLoading} className="w-full justify-center">
                    <KeyRound className="h-4 w-4" />
                    {loginLoading ? 'Signing in...' : 'Open Student Dashboard'}
                  </ERPButton>
                </motion.form>
              ) : null}

              {tab === 'register' ? (
                <motion.form
                  key="register"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-7 space-y-5"
                  onSubmit={handleRegister}
                >
                  <label className="block text-sm font-medium text-slate-700">
                    Email ID
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-6 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="email"
                        className={`${inputClass} pl-11`}
                        value={registerForm.email}
                        onChange={(event) => setRegisterForm((prev) => ({ ...prev, email: event.target.value }))}
                        placeholder="student@example.com"
                      />
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Date of Birth
                    <input
                      required
                      type="date"
                      className={inputClass}
                      value={registerForm.date_of_birth}
                      onChange={(event) => setRegisterForm((prev) => ({ ...prev, date_of_birth: event.target.value }))}
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Mobile Number
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-6 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="tel"
                        className={`${inputClass} pl-11`}
                        value={registerForm.mobile_number}
                        onChange={(event) => setRegisterForm((prev) => ({ ...prev, mobile_number: event.target.value }))}
                        placeholder="Enter mobile number"
                      />
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Password
                    <span className="ml-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Optional</span>
                    <input
                      type="password"
                      className={inputClass}
                      value={registerForm.password}
                      onChange={(event) => setRegisterForm((prev) => ({ ...prev, password: event.target.value }))}
                      placeholder="Leave blank for auto-generated password"
                    />
                  </label>

                  <ERPButton type="submit" disabled={registerLoading} className="w-full justify-center">
                    <UserRoundPlus className="h-4 w-4" />
                    {registerLoading ? 'Creating account...' : 'Create Student Account'}
                  </ERPButton>
                </motion.form>
              ) : null}

              {tab === 'reset' ? (
                <motion.form
                  key="reset"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-7 space-y-5"
                  onSubmit={handleReset}
                >
                  <label className="block text-sm font-medium text-slate-700">
                    Email ID / Application Number
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-6 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="text"
                        className={`${inputClass} pl-11`}
                        value={resetForm.identifier}
                        onChange={(event) => setResetForm((prev) => ({ ...prev, identifier: event.target.value }))}
                        placeholder="Enter email or application number"
                      />
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Registered Mobile Number
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-6 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="tel"
                        className={`${inputClass} pl-11`}
                        value={resetForm.mobile_number}
                        onChange={(event) => setResetForm((prev) => ({ ...prev, mobile_number: event.target.value }))}
                        placeholder="Enter registered mobile number"
                      />
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Date of Birth
                    <input
                      required
                      type="date"
                      className={inputClass}
                      value={resetForm.date_of_birth}
                      onChange={(event) => setResetForm((prev) => ({ ...prev, date_of_birth: event.target.value }))}
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    New Password
                    <div className="relative">
                      <RefreshCcw className="pointer-events-none absolute left-4 top-6 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="password"
                        className={`${inputClass} pl-11`}
                        value={resetForm.new_password}
                        onChange={(event) => setResetForm((prev) => ({ ...prev, new_password: event.target.value }))}
                        placeholder="Enter new password"
                      />
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Confirm Password
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-4 top-6 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="password"
                        className={`${inputClass} pl-11`}
                        value={resetForm.confirm_password}
                        onChange={(event) => setResetForm((prev) => ({ ...prev, confirm_password: event.target.value }))}
                        placeholder="Re-enter new password"
                      />
                    </div>
                  </label>

                  <ERPButton type="submit" disabled={resetLoading} className="w-full justify-center">
                    <RefreshCcw className="h-4 w-4" />
                    {resetLoading ? 'Updating password...' : 'Reset Password'}
                  </ERPButton>
                </motion.form>
              ) : null}
            </AnimatePresence>

            {generatedCredentials ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50/90 p-5"
              >
                <div className="flex items-center gap-2 text-emerald-800">
                  <BadgeCheck className="h-5 w-5" />
                  <p className="font-semibold">Registration completed</p>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-emerald-950">
                  <p>
                    Application Number: <span className="font-semibold">{generatedCredentials.application_number}</span>
                  </p>
                  <p>
                    Email: <span className="font-semibold">{generatedCredentials.email}</span>
                  </p>
                  <p>
                    Password: <span className="font-semibold">{generatedCredentials.password}</span>
                  </p>
                </div>
              </motion.div>
            ) : null}

            <div className="mt-6 flex items-center justify-between gap-3 text-sm text-slate-500">
              <span>Need to review the full process?</span>
              <Link to="/erp" className="inline-flex items-center gap-1 font-semibold text-cyan-700">
                Open ERP overview
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ERPSurfaceCard>
        </ERPPageTransition>
      </ERPBackdrop>
    </>
  );
};

export default ERPStudentAuth;
