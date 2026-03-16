import React, { useEffect, useMemo, useState } from 'react';
import { animate, motion } from 'framer-motion';
import ERPSurfaceCard from './ERPSurfaceCard';

const toNumber = (value) => {
  if (typeof value === 'number') return value;
  const parsed = Number(String(value).replace(/,/g, ''));
  return Number.isFinite(parsed) ? parsed : null;
};

const buildSparklinePath = (points) =>
  points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${index * (84 / Math.max(points.length - 1, 1))} ${28 - point}`)
    .join(' ');

const ERPMetricCard = ({
  title,
  value,
  icon: Icon,
  subtitle,
  delay = 0,
  suffix = '',
  sparkline = [4, 8, 6, 10, 12, 14, 16],
}) => {
  const numericValue = useMemo(() => toNumber(value), [value]);
  const [display, setDisplay] = useState(numericValue ?? value);

  useEffect(() => {
    if (numericValue === null) {
      setDisplay(value);
      return undefined;
    }

    const controls = animate(0, numericValue, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      delay,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [numericValue, value, delay]);

  return (
    <ERPSurfaceCard className="erp-metric-card relative overflow-hidden p-4" animatedBorder delay={delay}>
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-100/80 blur-2xl" />
      <div className="pointer-events-none absolute -left-6 bottom-0 h-20 w-20 rounded-full bg-emerald-100/60 blur-2xl" />

      <div className="relative z-[2] flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.13em] text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {numericValue !== null ? Number(display).toLocaleString() : display}
            {suffix}
          </p>
          {subtitle ? <p className="mt-1 text-xs text-slate-500">{subtitle}</p> : null}
        </div>
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0F4C81,#0EA5A9)] text-white shadow-[0_16px_32px_-20px_rgba(15,76,129,0.5)]"
        >
          <Icon className="h-5 w-5" />
        </motion.div>
      </div>

      <div className="relative z-[2] mt-3">
        <svg width="100%" viewBox="0 0 84 28" className="h-8 text-cyan-600/75">
          <path
            d={buildSparklinePath(sparkline)}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </ERPSurfaceCard>
  );
};

export default ERPMetricCard;
