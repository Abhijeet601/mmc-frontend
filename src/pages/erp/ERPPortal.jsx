import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, GraduationCap, ShieldCheck } from 'lucide-react';

import ERPBackdrop from '@/components/erp/ERPBackdrop';
import ERPButton from '@/components/erp/ERPButton';
import ERPSurfaceCard from '@/components/erp/ERPSurfaceCard';

const portalCards = [
  {
    title: 'Student portal',
    description: 'Login, complete hostel application, view payment status, and download receipts.',
    icon: GraduationCap,
    to: '/erp/student/login',
    action: 'Student login',
  },
  {
    title: 'Application form',
    description: 'Start or continue the hostel admission form for Magadh Mahila College.',
    icon: ClipboardList,
    to: '/erp/application-form',
    action: 'Open form',
  },
  {
    title: 'Admin workspace',
    description: 'Review students, verify applications, manage payments, and allot hostel rooms.',
    icon: ShieldCheck,
    to: '/erp/admin/login',
    action: 'Admin login',
  },
];

const ERPPortal = () => (
  <ERPBackdrop className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">MMC Hostel ERP</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Hostel admission and management portal
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Access student applications, hostel fee workflows, room allotment, and administrative review tools.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {portalCards.map((card) => (
          <ERPSurfaceCard key={card.title} className="p-6" animatedBorder>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <card.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-foreground">{card.title}</h2>
            <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted-foreground">{card.description}</p>
            <Link className="mt-6 inline-flex" to={card.to}>
              <ERPButton>{card.action}</ERPButton>
            </Link>
          </ERPSurfaceCard>
        ))}
      </div>
    </div>
  </ERPBackdrop>
);

export default ERPPortal;
