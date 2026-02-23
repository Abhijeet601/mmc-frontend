import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const GeneralInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages.admissions.generalInformation.metaTitle')}</title>
        <meta name="description" content={t('pages.admissions.generalInformation.metaDescription')} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {t('pages.admissions.generalInformation.title')}
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {t('pages.admissions.generalInformation.content')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralInformation;
