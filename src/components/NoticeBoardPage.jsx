import i18next from 'i18next';
import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  FileText,
  Link as LinkIcon,
  Pin,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getPublicNotices, NOTICE_CATEGORIES } from '@/services/notifications';

const formatNoticeDate = (value) => {
  if (!value) return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return '';
  return parsed.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.bmp', '.avif'];

const getPreviewType = (value) => {
  if (!value) return false;

  let pathname = '';

  try {
    const parsed = new URL(value, 'https://magadhmahilacollege.local');
    pathname = parsed.pathname.toLowerCase();
  } catch {
    pathname = value.split('?')[0].split('#')[0].toLowerCase();
  }

  if (pathname.endsWith('.pdf')) return 'pdf';
  if (IMAGE_EXTENSIONS.some((extension) => pathname.endsWith(extension))) return 'image';
  return '';
};

const getDisplayFileName = (item) => {
  const explicitName = item?.fileName?.trim();
  if (explicitName) return explicitName;

  const source = item?.fileUrl || item?.file_url || '';
  if (!source) return 'Attached file';

  try {
    const parsed = new URL(source, 'https://magadhmahilacollege.local');
    const segments = parsed.pathname.split('/').filter(Boolean);
    return decodeURIComponent(segments[segments.length - 1] || 'Attached file');
  } catch {
    const path = source.split('?')[0].split('#')[0];
    const segments = path.split('/').filter(Boolean);
    return decodeURIComponent(segments[segments.length - 1] || 'Attached file');
  }
};

const getPdfLinkLabel = (item) => {
  const title = item?.title?.trim();
  if (title) return title;
  return getDisplayFileName(item);
};

const NoticeBoardPage = ({
  title,
  subtitle,
  category,
  emptyMessage,
  showAdminButton = false,
  pageTitle,
  metaDescription,
}) => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    const fetchItems = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await getPublicNotices({
          publishTo: category,
          limit: 200,
        });

        if (!mounted) return;
        setItems(data);
      } catch (err) {
        console.error('Error loading board items:', err);
        if (!mounted) return;
        setError(err?.message || 'Failed to load data.');
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchItems();

    return () => {
      mounted = false;
    };
  }, [category]);

  const boardTitle = pageTitle || `${title} - Magadh Mahila College`;
  const boardDescription = metaDescription || subtitle;
  const HeaderIcon = category === NOTICE_CATEGORIES.TENDERS ? FileText : Bell;

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;

      const bDate = new Date(b.publishDate || b.createdAt).getTime();
      const aDate = new Date(a.publishDate || a.createdAt).getTime();
      return bDate - aDate;
    });
  }, [items]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{boardTitle}</title>
        <meta name="description" content={boardDescription} />
      </Helmet>

      <section className="px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <HeaderIcon className="h-4 w-4" />
              {category === NOTICE_CATEGORIES.TENDERS ? 'Tender Desk' : 'Public Update Desk'}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">{subtitle}</p>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              >
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
              {showAdminButton ? (
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  {i18next.t('auto.admin_login_kxj9ih')}
                </Link>
              ) : null}
            </div>
          </motion.div>

          {loading ? (
            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-20 text-center text-slate-500 shadow-sm">
              {i18next.t('auto.loading_1ooa6x9')}
            </div>
          ) : error ? (
            <div className="rounded-[32px] border border-rose-200 bg-rose-50 px-6 py-20 text-center text-rose-700 shadow-sm">
              {error}
            </div>
          ) : sortedItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[32px] border border-slate-200 bg-white px-6 py-20 text-center shadow-sm"
            >
              <HeaderIcon className="mx-auto h-12 w-12 text-slate-400" />
              <h2 className="mt-4 text-xl font-semibold text-slate-900">{emptyMessage}</h2>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {sortedItems.map((item, index) => {
                const displayDate = formatNoticeDate(item.publishDate || item.createdAt);
                const linkUrl = item.link || '';
                const fileUrl = item.fileUrl || item.file_url || '';
                const previewType = getPreviewType(fileUrl);
                const previewUrl = previewType ? fileUrl : '';
                const fileLabel = fileUrl ? getDisplayFileName(item) : '';
                const previewLabel = previewUrl ? getPdfLinkLabel(item) : '';
                const viewerSearch = previewUrl
                  ? new URLSearchParams({
                      file: previewUrl,
                      title: item.title || title,
                      back: location.pathname,
                      kind: previewType,
                    }).toString()
                  : '';

                return (
                  <motion.article
                    key={item.id || `${item.title}-${index}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                  >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                          {item.pinned ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                              <Pin className="h-3 w-3" />
                              {i18next.t('auto.pinned_1jx2yl9')}
                            </span>
                          ) : null}
                        </div>

                        {displayDate ? (
                          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Posted {displayDate}
                          </p>
                        ) : null}

                        {item.description ? (
                          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
                            {item.description}
                          </p>
                        ) : null}

                        {(fileUrl || linkUrl) ? (
                          <div className="mt-5 flex flex-col gap-3 text-sm">
                            {fileUrl ? (
                              <div className="flex flex-wrap items-center gap-2 text-slate-600">
                                <FileText className="h-4 w-4 text-primary" />
                                {previewUrl ? (
                                  <Link
                                    to={`/pdf-viewer?${viewerSearch}`}
                                    className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition hover:text-primary/80"
                                  >
                                    {previewLabel}
                                  </Link>
                                ) : (
                                  <>
                                    <span className="font-medium text-slate-700">Attachment:</span>
                                    <a
                                      href={fileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition hover:text-primary/80"
                                    >
                                      {fileLabel}
                                    </a>
                                  </>
                                )}
                              </div>
                            ) : null}

                            {linkUrl ? (
                              <div className="flex flex-wrap items-center gap-2 text-slate-600">
                                <LinkIcon className="h-4 w-4 text-blue-600" />
                                <span className="font-medium text-slate-700">Reference link:</span>
                                <a
                                  href={linkUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800"
                                >
                                  Open link
                                </a>
                              </div>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NoticeBoardPage;
