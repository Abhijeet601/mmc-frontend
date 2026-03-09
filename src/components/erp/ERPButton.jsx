import React, { useState } from 'react';
import { motion } from 'framer-motion';

const variantStyles = {
  primary:
    'text-white shadow-lg shadow-indigo-300/35 bg-[linear-gradient(135deg,#4F46E5,#06B6D4)] hover:shadow-[0_12px_30px_rgba(79,70,229,0.32)]',
  secondary:
    'text-indigo-700 border border-indigo-200 bg-white hover:border-cyan-300 hover:text-cyan-700 hover:shadow-[0_8px_22px_rgba(6,182,212,0.18)]',
  success:
    'text-white shadow-lg shadow-emerald-300/30 bg-[linear-gradient(135deg,#22C55E,#06B6D4)] hover:shadow-[0_12px_28px_rgba(34,197,94,0.28)]',
  danger:
    'text-red-700 border border-red-200 bg-red-50 hover:bg-red-100 hover:shadow-[0_8px_20px_rgba(239,68,68,0.18)]',
};

const ERPButton = ({
  children,
  className = '',
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  whileHover,
  whileTap,
  ...props
}) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (event) => {
    if (disabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.4;
    const ripple = {
      id: Date.now() + Math.random(),
      x: event.clientX - rect.left - size / 2,
      y: event.clientY - rect.top - size / 2,
      size,
    };

    setRipples((prev) => [...prev, ripple]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((item) => item.id !== ripple.id));
    }, 620);

    if (onClick) onClick(event);
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      whileHover={whileHover || { scale: 1.03, y: -1 }}
      whileTap={whileTap || { scale: 0.98 }}
      className={[
        'erp-ripple-btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60',
        variantStyles[variant] || variantStyles.primary,
        className,
      ].join(' ')}
      {...props}
    >
      <span className="relative z-[2] inline-flex items-center gap-2">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="erp-ripple absolute rounded-full bg-white/55"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </motion.button>
  );
};

export default ERPButton;
