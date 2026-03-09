import React from 'react';
import { motion } from 'framer-motion';

const ERPSurfaceCard = ({
  children,
  className = '',
  hover = true,
  animatedBorder = false,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay }}
    whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
    className={[
      'erp-surface-card rounded-2xl border border-slate-200 bg-white/95 shadow-sm backdrop-blur-md',
      animatedBorder ? 'erp-gradient-border' : '',
      hover ? 'transition-shadow hover:shadow-[0_14px_35px_rgba(79,70,229,0.16)]' : '',
      className,
    ].join(' ')}
  >
    {children}
  </motion.div>
);

export default ERPSurfaceCard;
