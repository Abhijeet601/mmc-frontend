import React, { useEffect, useMemo, useState } from 'react';
import { animate, motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
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
  trend = null,
  sparkline = [4, 8, 6, 10, 12, 14, 16],
}) => {
  const numericValue = useMemo(() => toNumber(value), [value]);
  const [display, setDisplay] = useState(numericValue ?? value);

  const trendPositive = String(trend || '').trim().startsWith('+');

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
    <ERPSurfaceCard className="erp-metric-card relative overflow-hidden p-5" animatedBorder delay={delay}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-3xl font-semibold text-foreground">
              {numericValue !== null ? Number(display).toLocaleString() : display}
              {suffix}
            </p>
            {trend ? (
              <span
                className={
                  'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ' +
                  (trendPositive ? 'bg-success/15 text-success' : 'bg-error/10 text-error')
                }
              >
                {trendPositive ? (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                ) : (
                  <ArrowDownRight className="h-3.5 w-3.5" />
                )}
                {trend}
              </span>
            ) : null}
          </div>
          {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-xl"
        >
          <Icon className="h-5 w-5" />
        </motion.div>
      </div>

      <div className="relative z-10 mt-4">
        <svg width="100%" viewBox="0 0 84 28" className="h-8 text-primary/60">
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
