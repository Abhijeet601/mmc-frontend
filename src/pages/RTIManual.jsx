import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const RTIManual = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('rtiManual.title', 'RTI Manual - Magadh Mahila College')}</title>
        <meta name="description" content={t('rtiManual.metaDescription', 'RTI Manual for Magadh Mahila College.')} />
      </Helmet>
      <div className="pt-0 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-primary mb-8">RTI Manual</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600">RTI Manual content will be added here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RTIManual;
