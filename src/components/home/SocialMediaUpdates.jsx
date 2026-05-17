import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
} from 'lucide-react';
import { getSocialEvents } from '@/services/socialEvents';

const normalizeInstagramUrl = (url) => {
  if (!url) return '';
  return url.replace(/\?.*$/, '').replace(/\/+$/, '');
};

const getInstagramEmbedUrl = (url) => {
  const normalized = normalizeInstagramUrl(url);
  if (!normalized.includes('instagram.com')) return '';
  if (!(normalized.includes('/p/') || normalized.includes('/reel/'))) return '';
  return `${normalized}/embed/captioned/`;
};

// The platform cards were removed from the published social section.
const socialLinks = [];

const SocialMediaUpdates = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadPosts = async () => {
      try {
        const items = await getSocialEvents(6);
        if (!mounted) return;
        setPosts(items);
      } catch (error) {
        console.error('Failed to load social media posts:', error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadPosts();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)]"
        >
          <div className="px-6 py-8 md:px-8">
            {/* Official platform cards removed to simplify the Media Corner section. */}

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-white">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Live Social Posts</p>
                          <h3 className="mt-1 text-3xl md:text-4xl font-extrabold text-sky-800">Media Corner</h3>
                        </div>
                        <p className="text-sm text-slate-500">Published from the admin social media panel</p>
                      </div>

              <div className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
                {loading ? (
                  <div className="md:col-span-2 xl:col-span-3 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-10 text-center text-sm text-slate-500">
                    Loading social media posts...
                  </div>
                ) : posts.length ? (
                  posts.map((post, index) => (
                    <motion.a
                      key={post.id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      href={post.social_url}
                      target="_blank"
                      rel="noreferrer"
                      className="group overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50/70 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      {post.image_url ? (
                        <div className="h-52 overflow-hidden bg-slate-100">
                          <img
                            src={post.image_url}
                            alt={post.title}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>
                      ) : getInstagramEmbedUrl(post.social_url) ? (
                        <div className="bg-white p-3">
                          <iframe
                            title={post.title}
                            src={getInstagramEmbedUrl(post.social_url)}
                            className="h-[560px] w-full rounded-2xl border border-slate-200"
                            loading="lazy"
                            allowTransparency
                          />
                        </div>
                      ) : null}
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                            {post.platform}
                          </span>
                        </div>
                        <h4 className="mt-4 text-xl font-bold text-slate-900">{post.title}</h4>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{post.description}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Open post
                          <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </motion.a>
                  ))
                ) : (
                  <div className="md:col-span-2 xl:col-span-3 rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center text-sm text-slate-500">
                    No social media posts have been uploaded yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaUpdates;
