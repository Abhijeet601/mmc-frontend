import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.bmp', '.avif'];

const getPreviewType = (value) => {
  if (!value) return '';

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

const PdfViewer = () => {
  const [searchParams] = useSearchParams();
  const fileUrl = searchParams.get('file') || '';
  const title = searchParams.get('title') || 'Attachment Viewer';
  const backPath = searchParams.get('back')?.startsWith('/') ? searchParams.get('back') : '/';
  const previewType = searchParams.get('kind') || getPreviewType(fileUrl);
  const canPreview = Boolean(previewType);

  return (
    <>
      <Helmet>
        <title>{`${title} - Magadh Mahila College`}</title>
        <meta name="description" content={`Preview ${title} on the Magadh Mahila College website.`} />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <section className="px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                <FileText className="h-4 w-4" />
                Attachment Viewer
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                {title}
              </h1>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to={backPath}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Directory
                </Link>
                {fileUrl ? (
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open Original
                  </a>
                ) : null}
                {fileUrl ? (
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4" />
                    Download File
                  </a>
                ) : null}
              </div>
            </motion.div>

            {!fileUrl ? (
              <div className="rounded-[32px] border border-amber-200 bg-amber-50 px-6 py-16 text-center text-amber-800 shadow-sm">
                No file was provided.
              </div>
            ) : !canPreview ? (
              <div className="rounded-[32px] border border-amber-200 bg-amber-50 px-6 py-16 text-center text-amber-800 shadow-sm">
                This file type cannot be previewed on the website.
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="text-xl font-bold text-slate-900">
                    {previewType === 'image' ? 'Image Preview' : 'Document Preview'}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    This attachment is displayed on a dedicated page inside the website.
                  </p>
                </div>
                <div className="p-4 md:p-6">
                  {previewType === 'image' ? (
                    <div className="flex min-h-[75vh] items-center justify-center rounded-2xl bg-slate-100 p-4">
                      <img
                        src={fileUrl}
                        alt={title}
                        className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-sm"
                      />
                    </div>
                  ) : (
                    <iframe
                      src={fileUrl}
                      title={title}
                      className="h-[75vh] w-full rounded-2xl border-0 bg-slate-100"
                    />
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default PdfViewer;
