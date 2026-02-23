import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedCard = ({ children, index = 0, className = '', onClick, delay = 0.1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        y: -15, 
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative cursor-pointer ${className}`}
    >
      {/* Animated background blob */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-highlight/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
      />
      
      {children}
    </motion.div>
  );
};

export const AnimatedIcon = ({ icon: Icon, color = 'from-primary to-highlight', className = '' }) => {
  return (
    <motion.div
      whileHover={{ rotate: 360, scale: 1.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg ${className}`}
    >
      <Icon className="w-8 h-8 text-white" />
    </motion.div>
  );
};

export const FloatingElement = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};

export const GradientText = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-primary via-highlight to-primary bg-clip-text text-transparent ${className}`}
      animate={{ 
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: "linear"
      }}
      style={{ backgroundSize: '200% 200%' }}
    >
      {children}
    </motion.span>
  );
};

export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInUp = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1]
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 0.5,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1]
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({ children, className = '', direction = 'left', delay = 0 }) => {
  const xOffset = direction === 'left' ? -50 : direction === 'right' ? 50 : 0;
  const yOffset = direction === 'up' ? 50 : direction === 'down' ? -50 : 0;
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: xOffset, y: yOffset },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1]
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const PulseEffect = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        scale: [1, 1.02, 1],
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const HoverGlow = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/30 to-highlight/30 rounded-xl blur-xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export const CountUp = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {end}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {suffix}
      </motion.span>
    </motion.span>
  );
};

export const ParallaxSection = ({ children, className = '', speed = 0.5 }) => {
  return (
    <motion.div
      className={className}
      style={{ y: 0 }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export const MagneticButton = ({ children, className = '', onClick }) => {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-highlight"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export const TextReveal = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={{
          hidden: { y: '100%' },
          visible: { 
            y: 0,
            transition: {
              duration: 0.6,
              delay: delay,
              ease: [0.25, 0.1, 0.25, 1]
            }
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const BouncingElement = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -20, 0],
      }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const RotatingElement = ({ children, className = '', duration = 20 }) => {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  );
};

export const MorphingShape = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        borderRadius: ['20%', '50%', '20%'],
        rotate: [0, 90, 0],
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const RippleEffect = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileTap={{
        scale: 0.95,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/30"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      {children}
    </motion.div>
  );
};

export const ScrollProgress = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export const TiltCard = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        rotateX: 5, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredText = ({ text, className = '', staggerDelay = 0.05 }) => {
  const letters = text.split('');
  
  return (
    <motion.span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: index * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const NeonGlow = ({ children, className = '', color = 'primary' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        boxShadow: `0 0 20px ${color === 'primary' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(147, 51, 234, 0.5)'}, 0 0 40px ${color === 'primary' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(147, 51, 234, 0.3)'}`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const WaveAnimation = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -10, 0, 10, 0],
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const BlurFadeIn = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export const ElasticScale = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export const DrawSVG = ({ children, className = '', duration = 2 }) => {
  return (
    <motion.div
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: duration,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const ConfettiEffect = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
    >
      {children}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={{
          hover: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary"
            style={{
              left: `${50 + (i - 3) * 15}%`,
              top: '50%',
            }}
            variants={{
              hover: {
                y: -50,
                x: (i - 3) * 20,
                opacity: 0,
                transition: { duration: 0.5 }
              }
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export const SpotlightEffect = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        variants={{
          hover: {
            x: ['-100%', '100%'],
            transition: { duration: 0.6 }
          }
        }}
      />
      {children}
    </motion.div>
  );
};

export default {
  AnimatedCard,
  AnimatedIcon,
  FloatingElement,
  GradientText,
  StaggerContainer,
  FadeInUp,
  ScaleIn,
  SlideIn,
  PulseEffect,
  HoverGlow,
  CountUp,
  ParallaxSection,
  MagneticButton,
  TextReveal,
  BouncingElement,
  RotatingElement,
  MorphingShape,
  RippleEffect,
  ScrollProgress,
  TiltCard,
  StaggeredText,
  NeonGlow,
  WaveAnimation,
  BlurFadeIn,
  ElasticScale,
  DrawSVG,
  ConfettiEffect,
  SpotlightEffect,
};
