import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const FeeRefundPolicy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('feeRefundPolicy.title', 'Fee Refund Policy - Magadh Mahila College')}</title>
        <meta name="description" content={t('feeRefundPolicy.metaDescription', 'Fee Refund Policy for Magadh Mahila College.')} />
      </Helmet>
      <div className="pt-0 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-primary mb-8">Fee Refund Policy</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600">Fee Refund Policy content will be added here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeRefundPolicy;
