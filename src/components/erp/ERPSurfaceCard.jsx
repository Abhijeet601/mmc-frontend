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
            y: -4,
            scale: 1.02,
            boxShadow: 'var(--shadow-card-hover)',
          }
        : undefined
    }
    className={[
      'erp-surface-card relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-[var(--shadow-card)] backdrop-blur-md',
      animatedBorder ? 'erp-gradient-border' : '',
      glowEffect
        ? 'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-primary/10 before:via-accent/10 before:to-info/10 before:opacity-0 before:transition-opacity hover:before:opacity-100'
        : '',
      hover ? 'transition-all duration-300 hover:border-primary/50' : '',
      className,
    ].join(' ')}
  >
    {children}
  </motion.div>
);

export default ERPSurfaceCard;
