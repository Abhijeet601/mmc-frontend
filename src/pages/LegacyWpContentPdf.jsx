import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileWarning, FolderOpen, Link2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  getWpContentPreviewUrl,
  getWpContentUploadByPath,
} from '@/data/wpContentUploads';

export default function LegacyWpContentPdf() {
  const location = useLocation();
  const documentItem = getWpContentUploadByPath(location.pathname);
  const previewUrl = getWpContentPreviewUrl(documentItem);
  const pageTitle = documentItem
    ? `${documentItem.title} - wp-content/uploads`
    : 'Legacy Upload Not Found - Magadh Mahila College';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={
            documentItem
              ? `Open the preserved legacy upload page for ${documentItem.title} on the Magadh Mahila College website.`
              : 'The requested legacy upload page could not be matched to a preserved document route.'
          }
        />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <section className="px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/wp-content/uploads"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to uploads
                </Link>
                <Link
                  to="/wp-content"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  <FolderOpen className="h-4 w-4" />
                  wp-content
                </Link>
                {previewUrl ? (
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open Source PDF
                  </a>
                ) : null}
                {documentItem?.fallbackPath ? (
                  <Link
                    to={documentItem.fallbackPath}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                  >
                    <Link2 className="h-4 w-4" />
                    {documentItem.fallbackLabel || 'Open Related Page'}
                  </Link>
                ) : null}
              </div>

              <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                {!documentItem ? (
                  <>
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                      <FileWarning className="h-4 w-4" />
                      Route not mapped
                    </span>
                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
                      Legacy Upload Not Found
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                      This `wp-content/uploads` route is not currently mapped to a preserved PDF
                      page in the app.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                      <Link2 className="h-4 w-4" />
                      Legacy Upload Page
                    </span>
                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                      {documentItem.title}
                    </h1>
                    <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
                      {documentItem.description}
                    </p>
                    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600">
                      <div className="font-semibold text-slate-900">Legacy path</div>
                      <div className="mt-1 break-all">{documentItem.absoluteLegacyUrl}</div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {!documentItem ? (
              <div className="rounded-[32px] border border-amber-200 bg-amber-50 px-6 py-16 text-center text-amber-800 shadow-sm">
                Use the uploads directory to browse the preserved legacy PDF routes.
              </div>
            ) : previewUrl ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="text-xl font-bold text-slate-900">Document Preview</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    This legacy WordPress upload path now resolves to a dedicated page inside the
                    website.
                  </p>
                </div>
                <div className="p-4 md:p-6">
                  <iframe
                    src={previewUrl}
                    title={documentItem.title}
                    className="h-[75vh] w-full rounded-2xl border-0 bg-slate-100"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-[32px] border border-amber-200 bg-amber-50 px-6 py-16 text-center text-amber-800 shadow-sm"
              >
                <div className="mx-auto max-w-3xl">
                  <h2 className="text-2xl font-bold text-amber-900">
                    Dedicated page created, preview source still pending
                  </h2>
                  <p className="mt-4 text-base leading-7">
                    This legacy PDF route now has its own page in the site structure, but the PDF
                    file itself is not mirrored in this repository yet. Use the related page link
                    above while the source file is being added.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
