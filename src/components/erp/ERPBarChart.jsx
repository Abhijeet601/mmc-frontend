import React from 'react';
import { motion } from 'framer-motion';

const ERPBarChart = ({ title, items = [], tone = 'sky' }) => {
  const maxValue = Math.max(...items.map((item) => Number(item.value) || 0), 1);
  const toneClass =
    tone === 'emerald'
      ? 'from-emerald-400 via-teal-400 to-cyan-400'
      : tone === 'amber'
        ? 'from-amber-400 via-orange-400 to-rose-400'
        : 'from-sky-400 via-cyan-400 to-indigo-400';

  return (
    <div className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-[0_24px_50px_-32px_rgba(15,23,42,0.45)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span className="text-xs uppercase tracking-[0.16em] text-slate-400">{items.length} buckets</span>
      </div>

      <div className="mt-5 space-y-4">
        {items.length ? (
          items.map((item, index) => (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-medium text-slate-700">{item.label}</span>
                <span className="text-slate-500">{item.value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(((Number(item.value) || 0) / maxValue) * 100, 4)}%` }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={`h-full rounded-full bg-gradient-to-r ${toneClass}`}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500">No chart data available yet.</p>
        )}
      </div>
    </div>
  );
};

export default ERPBarChart;
