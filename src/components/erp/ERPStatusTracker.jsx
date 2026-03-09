import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CircleDashed, Clock3 } from 'lucide-react';

const stateStyles = {
  completed: {
    badge: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    line: 'from-emerald-400 to-cyan-400',
    icon: CheckCircle2,
  },
  current: {
    badge: 'border-amber-200 bg-amber-50 text-amber-700',
    line: 'from-amber-300 to-orange-300',
    icon: Clock3,
  },
  pending: {
    badge: 'border-slate-200 bg-slate-100 text-slate-500',
    line: 'from-slate-200 to-slate-200',
    icon: CircleDashed,
  },
};

const ERPStatusTracker = ({
  items = [],
  gridClassName = 'grid gap-3 md:grid-cols-2 xl:grid-cols-3',
}) => (
  <div className={gridClassName}>
    {items.map((item, index) => {
      const style = stateStyles[item.state] || stateStyles.pending;
      const Icon = style.icon;

      return (
        <motion.div
          key={item.key || item.label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: index * 0.06 }}
          whileHover={{ y: -3 }}
          className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Stage {index + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{item.label}</h3>
            </div>
            <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${style.badge}`}>
              <Icon className="h-3.5 w-3.5" />
              {item.state === 'completed' ? 'Done' : item.state === 'current' ? 'Active' : 'Pending'}
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${style.line}`}
              initial={{ width: 0 }}
              animate={{
                width: item.state === 'completed' ? '100%' : item.state === 'current' ? '60%' : '18%',
              }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          {item.date ? (
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              {new Date(item.date).toLocaleString('en-IN')}
            </p>
          ) : null}
        </motion.div>
      );
    })}
  </div>
);

export default ERPStatusTracker;
