import React from 'react';
import { motion } from 'framer-motion';

const blobs = [
  {
    className: 'pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl',
    animate: { x: [0, 42, 0], y: [0, 34, 0] },
    transition: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    className: 'pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/25 blur-3xl',
    animate: { x: [0, -38, 0], y: [0, 28, 0] },
    transition: { duration: 13, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    className: 'pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-200/18 blur-3xl',
    animate: { x: [0, 22, 0], y: [0, -18, 0] },
    transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
  },
];

const ERPBackdrop = ({ children, className = '' }) => (
  <section className={`erp-shell erp-radial-backdrop relative isolate overflow-hidden px-4 py-10 sm:px-6 lg:px-8 ${className}`.trim()}>
    <motion.div
      className="erp-soft-grid pointer-events-none absolute inset-0 opacity-60"
      animate={{ backgroundPosition: ['0px 0px', '28px 20px', '0px 0px'] }}
      transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
    />
    {blobs.map((blob) => (
      <motion.div
        key={blob.className}
        className={blob.className}
        animate={blob.animate}
        transition={blob.transition}
      />
    ))}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.92),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(186,230,253,0.3),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(209,250,229,0.22),transparent_40%)]" />
    {children}
  </section>
);

export default ERPBackdrop;
