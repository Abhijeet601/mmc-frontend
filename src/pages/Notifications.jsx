import i18next from "i18next";
import React from 'react';
import NoticeBoardPage from '@/components/NoticeBoardPage';
import { NOTICE_CATEGORIES } from '@/services/notifications';
const Notifications = () => <NoticeBoardPage title={i18next.t("auto.notifications_ahx7yz")} subtitle="Official updates and announcements" category={NOTICE_CATEGORIES.NOTIFICATIONS} emptyMessage="No notifications available right now." showAdminButton pageTitle="Notifications - Magadh Mahila College" metaDescription="Latest notifications and announcements from Magadh Mahila College." />;
export default Notifications;
