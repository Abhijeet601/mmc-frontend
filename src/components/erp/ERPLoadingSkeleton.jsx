import React from 'react';

const ERPLoadingSkeleton = ({ rows = 3, className = '' }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm ${className}`}>
    <div className="h-4 w-40 rounded bg-slate-200/80 erp-shimmer" />
    <div className="mt-4 space-y-3">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="h-10 rounded-xl bg-slate-200/75 erp-shimmer" />
      ))}
    </div>
  </div>
);

export default ERPLoadingSkeleton;
