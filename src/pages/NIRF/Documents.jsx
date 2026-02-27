import i18next from "i18next";
import React from 'react';
import GenericPage from '../GenericPage';
const NIRFDocuments = () => {
  return <GenericPage title={i18next.t("auto.nirf_documents_i2i00a")} content="National Institutional Ranking Framework (NIRF) documents." />;
};
export default NIRFDocuments;
