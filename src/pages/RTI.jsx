import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
const RTI = () => {
  const {
    t
  } = useTranslation();
  return <>
      <Helmet>
        <title>{t('rti.title', 'RTI - Magadh Mahila College')}</title>
        <meta name="description" content={t('rti.metaDescription', 'Right to Information for Magadh Mahila College.')} />
      </Helmet>
      <div className="pt-0 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-primary mb-8">{i18next.t("auto.rti_376ld6")}</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600">{i18next.t("auto.rti_content_will_be_added_here_chtw5q")}</p>
          </div>
        </div>
      </div>
    </>;
};
export default RTI;
