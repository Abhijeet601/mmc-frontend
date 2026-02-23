import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Disclaimer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('disclaimer.title', 'Disclaimer - Magadh Mahila College')}</title>
        <meta name="description" content={t('disclaimer.metaDescription', 'Disclaimer for Magadh Mahila College website.')} />
      </Helmet>
      <div className="pt-0 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-primary mb-8">Disclaimer</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600">Disclaimer content will be added here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
