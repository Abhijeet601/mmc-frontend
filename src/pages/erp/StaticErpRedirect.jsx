import { Link, useLocation } from 'react-router-dom';

const ensureHtml = (value, fallback) => {
  const segment = String(value || '').replace(/^\/+|\/+$/g, '');
  if (!segment) return fallback;
  return segment.endsWith('.html') ? segment : `${segment}.html`;
};

const StaticErpRedirect = ({ base, fallbackPage }) => {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/g, '');
  const page = ensureHtml(currentPath.split('/').pop(), fallbackPage);
  const target = `/mmc-erp/${base}/${page}`;

  if (typeof window !== 'undefined') {
    window.location.replace(target);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-center text-slate-800">
      <h1 className="text-2xl font-semibold">Opening Magadh Mahila College ERP Portal</h1>
      <p className="mt-3 text-sm text-slate-600">If the page does not open automatically, use the link below.</p>
      <Link className="mt-6 inline-flex rounded-lg bg-[#8a1538] px-5 py-3 text-sm font-semibold text-white" to={target}>
        Open ERP Portal
      </Link>
    </main>
  );
};

export default StaticErpRedirect;
