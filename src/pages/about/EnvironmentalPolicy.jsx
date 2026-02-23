import React from 'react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';

const EnvironmentalPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Environmental Policy
          </h1>

          <div className="prose prose-gray max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              Environmental Policy
            </div>
            <div className="flex justify-center mt-6">
              <img
                src={r2Url('data files/about/environment-policy.jpg')}
                alt="Environmental Policy"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalPolicy;
