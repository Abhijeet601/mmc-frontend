import React from 'react';
import { Helmet } from 'react-helmet-async';

const VocationalCommerce = () => {
  return (
    <>
      <Helmet>
        <title>Vocational (Commerce) - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Vocational Commerce programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Vocational (Commerce)
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                The Vocational Commerce program equips students with practical business skills and entrepreneurial knowledge aligned with NEP 2020 guidelines.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Programs Offered</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Bachelor of Commerce (BCom) with Vocational Specializations</li>
                <li>Vocational in Business Administration</li>
                <li>Certificate courses in Commerce</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Industry-relevant curriculum</li>
                <li>Entrepreneurship development</li>
                <li>Internship and apprenticeship programs</li>
                <li>Digital commerce skills</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Detailed curriculum and course information will be available here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VocationalCommerce;
