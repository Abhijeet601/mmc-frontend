import i18next from "i18next";
import React from 'react';
import NoticeBoardPage from '@/components/NoticeBoardPage';
import { NOTICE_CATEGORIES } from '@/services/notifications';
const Notices = () => <NoticeBoardPage title={i18next.t("auto.notices_1f4i3nw")} subtitle="General notice board updates" category={NOTICE_CATEGORIES.NOTICES} emptyMessage="No notices available right now." showAdminButton pageTitle="Notices - Magadh Mahila College" metaDescription="General notices published by Magadh Mahila College." />;
export default Notices;
