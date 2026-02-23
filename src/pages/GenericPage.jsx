import React from 'react';
import { useTranslation } from 'react-i18next';

const GenericPage = ({ pageKey }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {t(`nav.aboutSub.${pageKey}`) || t(`nav.iqacSub.${pageKey}`) || t(`nav.aictSub.${pageKey}`) || pageKey}
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300">
              {t(`pages.${pageKey}`) || 'Content for this page is coming soon. Please check back later.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
