import React, { useState } from 'react';
import { motion } from 'framer-motion';

const variantStyles = {
  primary:
    'text-white shadow-[0_18px_40px_-22px_rgba(15,76,129,0.45)] bg-[linear-gradient(135deg,#0F4C81,#0EA5A9)] hover:shadow-[0_22px_44px_-22px_rgba(14,165,169,0.42)]',
  secondary:
    'text-slate-700 border border-slate-200 bg-white/90 hover:border-cyan-200 hover:text-cyan-800 hover:shadow-[0_12px_28px_-20px_rgba(14,165,169,0.3)]',
  success:
    'text-white shadow-[0_18px_40px_-22px_rgba(16,185,129,0.34)] bg-[linear-gradient(135deg,#059669,#14B8A6)] hover:shadow-[0_22px_44px_-20px_rgba(16,185,129,0.4)]',
  danger:
    'text-red-700 border border-red-200 bg-red-50 hover:bg-red-100 hover:shadow-[0_12px_28px_-20px_rgba(239,68,68,0.28)]',
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
        'erp-ripple-btn relative inline-flex items-center gap-2 overflow-hidden rounded-2xl px-4 py-2.5 text-sm font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60',
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
