import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const Accordion = ({ children, className, type, collapsible, ...props }) => {
  return (
    <div className={cn('w-full', className)} {...props}>
      {children}
    </div>
  );
};

const AccordionItem = ({ children, className, ...props }) => {
  return (
    <div className={cn('border-b border-gray-200', className)} {...props}>
      {children}
    </div>
  );
};

const AccordionTrigger = ({ children, className, onClick, isOpen, ...props }) => {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-between py-4 px-6 text-left font-medium transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
      <svg
        className={cn(
          'h-5 w-5 shrink-0 transition-transform duration-200',
          isOpen ? 'rotate-180' : ''
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

const AccordionContent = ({ children, className, isOpen, ...props }) => {
  return (
    <div
      className={cn(
        'transition-all duration-300 ease-in-out',
        isOpen ? 'block opacity-100' : 'hidden opacity-0'
      )}
      {...props}
    >
      <div className={cn('px-6 pb-4', className)}>
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
