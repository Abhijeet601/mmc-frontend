import React from 'react';
import { motion } from 'framer-motion';

const ERPPageTransition = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16, filter: 'blur(5px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
    transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default ERPPageTransition;
