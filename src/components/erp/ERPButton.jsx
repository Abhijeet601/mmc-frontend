import React, { useState } from 'react';
import { motion } from 'framer-motion';

const variantStyles = {
  primary:
    'bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:bg-primary/90',
  secondary:
    'bg-card border border-border text-foreground hover:bg-secondary/80 hover:border-border',
  success:
    'bg-success text-success-foreground shadow-sm hover:shadow-md hover:bg-success/90',
  warning:
    'bg-warning text-warning-foreground shadow-sm hover:shadow-md hover:bg-warning/90',
  danger:
    'bg-error text-error-foreground shadow-sm hover:shadow-md hover:bg-error/90',
  outline:
    'bg-transparent border border-border text-foreground hover:bg-secondary/70 hover:text-foreground',
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
