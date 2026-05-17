import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Facebook,
  Instagram,
  Megaphone,
  Youtube,
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

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/magadhmahila',
    icon: Facebook,
    tone: 'from-blue-600 to-blue-700',
    badge: 'Announcements',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/magadh.mahila.college/',
    icon: Instagram,
    tone: 'from-pink-600 to-rose-600',
    badge: 'Campus Moments',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@magadh_mahila_college',
    icon: Youtube,
    tone: 'from-red-600 to-orange-600',
    badge: 'Video Updates',
  },
];

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
          <div className="bg-[linear-gradient(135deg,#0f172a,#1d4ed8,#0f766e)] px-6 py-8 text-white md:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100">
                <Megaphone className="h-4 w-4" />
                Social Media Updates
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight">
                Follow official Magadh Mahila College channels
              </h2>
              <p className="mt-3 max-w-2xl text-sm md:text-base leading-7 text-sky-50/90">
                Stay connected with verified college announcements, event coverage, admission communication,
                hostel activities, and student life updates across our official platforms.
              </p>
            </div>
          </div>

          <div className="px-6 py-8 md:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className={`group rounded-[28px] bg-gradient-to-br ${item.tone} px-5 py-5 text-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] transition hover:-translate-y-1`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">{item.badge}</p>
                        <h3 className="mt-3 text-2xl font-bold">{item.label}</h3>
                      </div>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                      Visit official page
                      <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Live Social Posts</p>
                  <h3 className="mt-1 text-2xl font-black text-slate-900">Latest posts on the website</h3>
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
