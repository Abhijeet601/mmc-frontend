import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  KeyRound,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRoundPlus,
} from 'lucide-react';
import ERPButton from '@/components/erp/ERPButton';
import ERPPageTransition from '@/components/erp/ERPPageTransition';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';
import { toast } from '@/components/ui/use-toast';
import { clearStudentToken, getStudentToken, loginStudent, registerStudent } from '@/services/erpApi';

const inputClass =
  'mt-2 h-12 w-full rounded-2xl border border-white/60 bg-white/85 px-4 text-sm text-slate-900 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.5)] outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100';

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

const highlights = [
  'Auto-generated application number after registration',
  'Draft save + edit before admin verification',
  'Demo payment flow with PDF receipt and email hook',
];

const ERPStudentAuth = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('login');
  const [registerForm, setRegisterForm] = useState(initialRegister);
  const [loginForm, setLoginForm] = useState(initialLogin);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [generatedCredentials, setGeneratedCredentials] = useState(null);

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
      navigate(data.redirect || '/application-form');
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

  return (
    <>
      <Helmet>
        <title>Student Hostel ERP | Magadh Mahila College</title>
      </Helmet>

      <section className="erp-shell erp-radial-backdrop relative isolate overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"
          animate={{ x: [0, 42, 0], y: [0, 34, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl"
          animate={{ x: [0, -42, 0], y: [0, 30, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        <ERPPageTransition className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <ERPSurfaceCard className="erp-glass-panel overflow-hidden p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                <Sparkles className="h-3.5 w-3.5" />
                Hostel Admission Workflow
              </div>
              <h1 className="erp-display mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
                Modern Hostel ERP for admission, verification, and allotment.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Register once, complete your hostel application, track verification, and finish fee payments with
                smooth status updates and receipt downloads.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Registration Fee', value: '₹1,000', icon: CreditCard },
                  { label: 'JWT Auth', value: 'Secure', icon: ShieldCheck },
                  { label: 'Live Status', value: 'Tracked', icon: CheckCircle2 },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-2xl border border-white/60 bg-white/75 p-4 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.5)]"
                  >
                    <item.icon className="h-5 w-5 text-cyan-600" />
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </ERPSurfaceCard>

            <ERPSurfaceCard className="erp-glass-panel p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">How it works</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Student journey</h2>
                </div>
                <Link to="/erp" className="text-sm font-semibold text-cyan-700 underline">
                  ERP home
                </Link>
              </div>

              <div className="mt-6 space-y-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm text-slate-700">{item}</p>
                  </motion.div>
                ))}
              </div>

              {getStudentToken() ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-4 text-sm text-emerald-900">
                  Existing student session found in this browser.
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link to="/dashboard" className="font-semibold underline">
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

            <div className="flex rounded-2xl bg-slate-100/80 p-1.5">
              {[
                { key: 'login', label: 'Student Login' },
                { key: 'register', label: 'New Registration' },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setTab(item.key)}
                  className={`relative flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
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
                    Email ID
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-6 h-4 w-4 text-slate-400" />
                      <input
                        required
                        type="email"
                        className={`${inputClass} pl-11`}
                        value={loginForm.email}
                        onChange={(event) => setLoginForm((prev) => ({ ...prev, email: event.target.value }))}
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
                      />
                    </div>
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Date of Birth
                    <span className="ml-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Optional verification</span>
                    <input
                      type="date"
                      className={inputClass}
                      value={loginForm.dob}
                      onChange={(event) => setLoginForm((prev) => ({ ...prev, dob: event.target.value }))}
                    />
                  </label>

                  <ERPButton type="submit" disabled={loginLoading} className="w-full justify-center">
                    <KeyRound className="h-4 w-4" />
                    {loginLoading ? 'Signing in...' : 'Access Student Portal'}
                  </ERPButton>
                </motion.form>
              ) : (
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
                    />
                  </label>

                  <ERPButton type="submit" disabled={registerLoading} className="w-full justify-center">
                    <UserRoundPlus className="h-4 w-4" />
                    {registerLoading ? 'Creating account...' : 'Create Student Account'}
                  </ERPButton>
                </motion.form>
              )}
            </AnimatePresence>

            {generatedCredentials ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50/90 p-5"
              >
                <div className="flex items-center gap-2 text-emerald-800">
                  <CheckCircle2 className="h-5 w-5" />
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
      </section>
    </>
  );
};

export default ERPStudentAuth;
