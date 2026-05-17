import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe2, Instagram, Facebook, Youtube, Save, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: 'Facebook', url: 'https://www.facebook.com/magadhmahila', icon: Facebook, tone: 'bg-blue-50 text-blue-700 border-blue-200' },
  { label: 'Instagram', url: 'https://www.instagram.com/magadh.mahila.college/', icon: Instagram, tone: 'bg-pink-50 text-pink-700 border-pink-200' },
  { label: 'YouTube', url: 'https://www.youtube.com/@magadh_mahila_college', icon: Youtube, tone: 'bg-red-50 text-red-700 border-red-200' },
];

const inputClass =
  'h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100';

const API_BASE =
  import.meta.env.VITE_SOCIAL_API_BASE ||
  import.meta.env.VITE_API_BASE ||
  import.meta.env.VITE_API_BASE_URL ||
  '';

const browserLocation = typeof window !== 'undefined' ? window.location : null;
const fallbackApiBaseUrl = (() => {
  if (!browserLocation?.origin) return 'http://127.0.0.1:8000';
  if (!['3000', '4173', '5173'].includes(browserLocation.port)) return browserLocation.origin;

  try {
    const backendUrl = new URL(browserLocation.origin);
    backendUrl.port = '8000';
    return backendUrl.origin;
  } catch (_) {
    return 'http://127.0.0.1:8000';
  }
})();

const SOCIAL_ADMIN_API_BASE = (API_BASE || fallbackApiBaseUrl).trim().replace(/\/+$/, '');

const AdminEvents = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    platform: '',
    social_url: '',
    image_url: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [savedPosts, setSavedPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const detectedPlatform = useMemo(() => {
    const socialUrl = form.social_url.toLowerCase();
    if (socialUrl.includes('instagram')) return 'Instagram';
    if (socialUrl.includes('facebook')) return 'Facebook';
    if (socialUrl.includes('youtube')) return 'YouTube';
    if (socialUrl.includes('twitter')) return 'Twitter';
    return '';
  }, [form.social_url]);

  const loadPosts = async () => {
    setLoadingPosts(true);
    try {
      const response = await fetch(`${SOCIAL_ADMIN_API_BASE}/social-events`);
      if (!response.ok) {
        throw new Error(`Unable to load saved posts (${response.status})`);
      }
      const data = await response.json();
      setSavedPosts(Array.isArray(data) ? data : []);
    } catch (error) {
      setErrorMessage(error.message || 'Unable to load saved social posts.');
    } finally {
      setLoadingPosts(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const submitData = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (!form.social_url.trim()) {
      setErrorMessage('Social Media URL is required.');
      return;
    }

    const updatedForm = {
      ...form,
      platform: detectedPlatform,
    };

    setSubmitting(true);
    try {
      const response = await fetch(`${SOCIAL_ADMIN_API_BASE}/social-events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedForm),
      });

      if (!response.ok) {
        let errorText = `Upload failed (${response.status})`;
        try {
          const data = await response.json();
          errorText = data?.detail || errorText;
        } catch (_) {
          // Ignore non-JSON error body
        }
        throw new Error(errorText);
      }

      await response.json();
      setForm({
        title: '',
        description: '',
        platform: '',
        social_url: '',
        image_url: '',
      });
      setSuccessMessage('Social media event uploaded successfully.');
      await loadPosts();
    } catch (error) {
      setErrorMessage(error.message || 'Upload failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)]"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-6 py-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-100">Social Media Publishing</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight">Admin Events</h2>
        <p className="mt-1 text-sm text-sky-100/90">
          Publish official social updates, college event promotions, and platform-specific media links.
        </p>
      </div>

      <div className="space-y-6 px-6 py-6">
        <div className="grid gap-3 md:grid-cols-3">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setForm((current) => ({ ...current, social_url: item.url }))}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-left transition hover:-translate-y-0.5 ${item.tone}`}
              >
                <Icon className="h-5 w-5" />
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-xs opacity-80">Use official college link</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-semibold text-slate-700">
            Title
            <input
              className={`${inputClass} mt-2`}
              value={form.title}
              onChange={(e) => setForm((current) => ({ ...current, title: e.target.value }))}
              placeholder="Leave blank to auto-fetch from post URL"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Platform
            <input
              className={`${inputClass} mt-2 bg-slate-50`}
              value={detectedPlatform}
              readOnly
              placeholder="Auto-detected on submit"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
            Description
            <input
              className={`${inputClass} mt-2`}
              value={form.description}
              onChange={(e) => setForm((current) => ({ ...current, description: e.target.value }))}
              placeholder="Leave blank to auto-fetch from post URL"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
            Social Media URL
            <input
              className={`${inputClass} mt-2`}
              value={form.social_url}
              onChange={(e) => setForm((current) => ({ ...current, social_url: e.target.value }))}
              placeholder="Paste Instagram, Facebook, YouTube, or Twitter URL"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
            Image URL
            <input
              className={`${inputClass} mt-2`}
              value={form.image_url}
              onChange={(e) => setForm((current) => ({ ...current, image_url: e.target.value }))}
              placeholder="Leave blank to auto-fetch preview image"
            />
          </label>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600">
          <div className="flex items-start gap-3">
            <Globe2 className="mt-0.5 h-4 w-4 text-sky-600" />
            <p>
              Platform is inferred from the social URL during upload. If title, description, or image are left blank,
              the backend tries to fetch them automatically from the post link.
            </p>
          </div>
        </div>

        {errorMessage ? (
          <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{errorMessage}</p>
          </div>
        ) : null}

        {successMessage ? (
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{successMessage}</p>
          </div>
        ) : null}

        <div className="flex justify-end">
          <motion.button
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={submitData}
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:from-sky-700 hover:to-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save className="h-4 w-4" />
            {submitting ? 'Uploading...' : 'Upload Social Event'}
          </motion.button>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Saved Posts</p>
              <h3 className="mt-1 text-xl font-black text-slate-900">Uploaded social media events</h3>
            </div>
            <button
              type="button"
              onClick={loadPosts}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Refresh
            </button>
          </div>

          <div className="mt-4 grid gap-3">
            {loadingPosts ? (
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-500">
                Loading saved posts...
              </div>
            ) : savedPosts.length ? (
              savedPosts.map((post) => (
                <div key={post.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                  {post.image_url ? (
                    <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                      <img src={post.image_url} alt={post.title} className="h-48 w-full object-cover" />
                    </div>
                  ) : null}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">{post.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{post.description}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        <span>{post.platform || 'General'}</span>
                      </div>
                    </div>
                    <a
                      href={post.social_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-sm text-slate-500">
                No social media events have been uploaded yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminEvents;
