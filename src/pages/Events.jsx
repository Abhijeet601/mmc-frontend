import React from 'react';
import NoticeBoardPage from '@/components/NoticeBoardPage';
import { NOTICE_CATEGORIES } from '@/services/notifications';

const Events = () => (
  <NoticeBoardPage
    title="Upcoming Events"
    subtitle="Latest events and activities published by the administration"
    category={NOTICE_CATEGORIES.UPCOMING_EVENTS}
    emptyMessage="No upcoming events available right now."
    pageTitle="Events - Magadh Mahila College"
    metaDescription="Discover upcoming events and activities at Magadh Mahila College."
  />
);

export default Events;

