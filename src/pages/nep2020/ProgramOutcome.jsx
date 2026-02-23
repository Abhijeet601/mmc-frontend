import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';

const ProgramOutcome = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('nav.nep2020Sub.programOutcome.metaTitle')}</title>
        <meta name="description" content={t('nav.nep2020Sub.programOutcome.metaDescription')} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              {t('nav.nep2020Sub.programOutcome.title')}
            </h1>

            <div className="prose max-w-none">
              <div className="w-full h-screen-lg">
                <iframe
                  src={r2Url('data files/NEP 2020/Final-CO-PO_250129_145038-2.pdf')}
                  title="Program Outcome and Course Outcome"
                  className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramOutcome;
