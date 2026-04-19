import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, FileText, FolderTree } from 'lucide-react';
import { Link } from 'react-router-dom';
import { wpContentUploadGroups } from '@/data/wpContentUploads';

export default function WpContentUploads() {
  return (
    <>
      <Helmet>
        <title>wp-content/uploads - Magadh Mahila College</title>
        <meta
          name="description"
          content="Browse every preserved legacy PDF route under wp-content/uploads for Magadh Mahila College."
        />
      </Helmet>

      <div className="min-h-screen bg-[linear-gradient(180deg,#f5f0e6_0%,#ffffff_24%,#edf5f6_100%)]">
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 shadow-[0_22px_60px_-28px_rgba(15,52,70,0.24)] backdrop-blur"
            >
              <div className="border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_right,rgba(13,91,120,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,123,71,0.12),transparent_30%)] px-6 py-8 sm:px-8 lg:px-10">
                <Link
                  to="/wp-content"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to wp-content
                </Link>

                <div className="mt-6 flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FolderTree className="h-6 w-6" />
                  </div>

                  <div>
                    <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                      uploads
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                      Every mapped `wp-content/uploads` PDF is listed here with its preserved route
                      and a dedicated page inside the site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                {wpContentUploadGroups.map((group, groupIndex) => (
                  <motion.section
                    key={group.key}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: groupIndex * 0.04 }}
                    className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_46px_-30px_rgba(15,52,70,0.28)]"
                  >
                    <div className="border-b border-slate-200 bg-[linear-gradient(90deg,rgba(13,91,120,0.08),rgba(13,91,120,0.02))] px-6 py-5">
                      <h2 className="font-serif text-2xl font-bold text-slate-950">{group.label}</h2>
                      <p className="mt-1 text-sm text-slate-600">
                        Preserved legacy uploads from `{group.year}/{group.month}`.
                      </p>
                    </div>

                    <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-3">
                      {group.items.map((documentItem) => {
                        const hasPreview = Boolean(documentItem.sourcePath);

                        return (
                          <article
                            key={documentItem.legacyPath}
                            className="flex h-full flex-col rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,249,0.92))] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_18px_34px_-24px_rgba(15,52,70,0.32)]"
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <FileText className="h-5 w-5" />
                              </div>

                              <div className="min-w-0">
                                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                  PDF Page
                                </span>
                                <h3 className="mt-3 text-lg font-bold leading-7 text-slate-950">
                                  {documentItem.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                  {documentItem.description}
                                </p>
                              </div>
                            </div>

                            <div className="mt-5 rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-xs leading-6 text-slate-500">
                              {documentItem.legacyPath}
                            </div>

                            <div className="mt-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                              {hasPreview ? 'Preview Ready' : 'Dedicated Page Ready'}
                            </div>

                            <div className="mt-5 pt-1">
                              <Link
                                to={documentItem.legacyPath}
                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                              >
                                Open Page
                                <ArrowUpRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </motion.section>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
