export const HOSTEL_ERP_ENABLED = import.meta.env.VITE_HOSTEL_ERP_ENABLED === 'true';
export const ERP_PORTAL_ENTRY_URL = '/mmc-erp/student/login.html';

export const openErpPortalInNewTab = () => {
  if (!HOSTEL_ERP_ENABLED) return;
  window.open(ERP_PORTAL_ENTRY_URL, '_blank', 'noopener,noreferrer');
};
