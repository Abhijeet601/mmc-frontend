import React from 'react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';

const MELC = () => {
  const { t } = useTranslation();

  const melcImages = [
    'DSC_6411.jpg',
    'DSC_6416.jpg',
    'DSC_6444.jpg',
    'DSC_6526.jpg',
    'mmc11.jpg',
    'mmc22.jpg'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Institutions' Pride: Model Electoral Literacy Club
          </h1>

          <div className="prose prose-gray max-w-none mb-8">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              Model Electoral Literacy Club

Magadh Mahila College has been selected as Model Electoral Literacy Club (MELC) by the Election Commission of India and Bihar for creating awareness in the forthcoming 17th Lok Sabha Election. The inaugural function of MELC was held on 07-Dec-2018 and the Chief Guest of programme was Sri Kumar Ravi DM Patna.He addressed the students on inaugural session and extended help in understanding the function of EVM and VVPAT. This Club shall spread the awareness towards voting and encourage the students to exercise their franchise.
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Model Electoral Literacy Club Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {melcImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={r2Url(`images/about/melc/${image}`)}
                  alt={`MELC Image ${index + 1}`}
                  className="max-w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MELC;
