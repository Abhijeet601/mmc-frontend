import React from 'react';
import NoticeBoardPage from '@/components/NoticeBoardPage';
import { NOTICE_CATEGORIES } from '@/services/notifications';

const Tender = () => (
  <NoticeBoardPage
    title="Tenders"
    subtitle="Procurement notices and tender documents"
    category={NOTICE_CATEGORIES.TENDERS}
    emptyMessage="No tenders available right now."
    pageTitle="Tenders - Magadh Mahila College"
    metaDescription="View current tenders and procurement opportunities at Magadh Mahila College."
  />
);

export default Tender;

