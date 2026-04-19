import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, FileStack, FolderOpen, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { wpContentUploadGroups, wpContentUploads } from '@/data/wpContentUploads';

export default function WpContent() {
  return (
    <>
      <Helmet>
        <title>wp-content - Magadh Mahila College</title>
        <meta
          name="description"
          content="Browse the preserved wp-content legacy routes for Magadh Mahila College, including uploads and dedicated PDF pages."
        />
      </Helmet>

      <div className="min-h-screen bg-[linear-gradient(180deg,#f5f0e6_0%,#ffffff_24%,#edf5f6_100%)]">
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 shadow-[0_22px_60px_-28px_rgba(15,52,70,0.24)] backdrop-blur"
            >
              <div className="border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_right,rgba(13,91,120,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,123,71,0.12),transparent_30%)] px-6 py-9 sm:px-8 lg:px-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  <span className="h-2 w-2 rounded-full bg-amber-600" aria-hidden="true" />
                  Legacy Route Hub
                </div>

                <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-end">
                  <div>
                    <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                      wp-content
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                      This section preserves the old WordPress-style upload structure inside the new
                      website. The uploads index groups every mapped legacy PDF, and each file has
                      its own dedicated page.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-sm">
                      <p className="font-serif text-3xl font-bold text-slate-950">
                        {wpContentUploads.length}
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-600">
                        Legacy upload routes preserved
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-sm">
                      <p className="font-serif text-3xl font-bold text-slate-950">
                        {wpContentUploadGroups.length}
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-600">
                        Upload folders represented
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-10">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <FolderOpen className="h-6 w-6" />
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl font-bold text-slate-950">Uploads</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Open the uploads index to browse every preserved `wp-content/uploads`
                        document and jump to its dedicated page.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/wp-content/uploads"
                      className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                      Open Uploads Directory
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <FileStack className="h-6 w-6" />
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl font-bold text-slate-950">
                        Dedicated PDF Pages
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Each mapped upload route now resolves to its own website page instead of
                        being treated as an orphaned raw file link.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {wpContentUploads.slice(0, 3).map((documentItem) => (
                      <Link
                        key={documentItem.legacyPath}
                        to={documentItem.legacyPath}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-primary/25 hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="truncate">{documentItem.title}</span>
                        <Link2 className="h-4 w-4 flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
