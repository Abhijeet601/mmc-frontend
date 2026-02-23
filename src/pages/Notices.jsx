import React from 'react';
import NoticeBoardPage from '@/components/NoticeBoardPage';
import { NOTICE_CATEGORIES } from '@/services/notifications';

const Notices = () => (
  <NoticeBoardPage
    title="Notices"
    subtitle="General notice board updates"
    category={NOTICE_CATEGORIES.NOTICES}
    emptyMessage="No notices available right now."
    showAdminButton
    pageTitle="Notices - Magadh Mahila College"
    metaDescription="General notices published by Magadh Mahila College."
  />
);

export default Notices;

