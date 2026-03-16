import React from 'react';
import { motion } from 'framer-motion';

const ERPSurfaceCard = ({
  children,
  className = '',
  hover = true,
  animatedBorder = false,
  delay = 0,
  glowEffect = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay }}
    whileHover={
      hover
        ? {
            y: -5,
            scale: 1.004,
            boxShadow: '0 28px 58px -34px rgba(14, 165, 169, 0.38)',
          }
        : undefined
    }
    className={[
      'erp-surface-card relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.25)] backdrop-blur-md',
      animatedBorder ? 'erp-gradient-border' : '',
      glowEffect ? 'before:absolute before:inset-0 before:rounded-[28px] before:bg-gradient-to-r before:from-sky-500/10 before:via-cyan-500/10 before:to-emerald-500/10 before:opacity-0 before:transition-opacity hover:before:opacity-100' : '',
      hover ? 'transition-all duration-300 hover:border-cyan-100' : '',
      className,
    ].join(' ')}
  >
    {children}
  </motion.div>
);

export default ERPSurfaceCard;
