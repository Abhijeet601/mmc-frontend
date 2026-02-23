import React from 'react';
import { Helmet } from 'react-helmet-async';

const Library = () => {
  return (
    <>
      <Helmet>
        <title>Library - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Library services under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Library
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                The Central Library at Magadh Mahila College is a modern learning resource center equipped with digital facilities to support NEP 2020 implementation.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Library Resources</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Extensive collection of books and reference materials</li>
                <li>Digital library with e-books and journals</li>
                <li>INFLIBNET and NDL access</li>
                <li>Multimedia resources and audio-visual materials</li>
                <li>Previous years' question papers</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Services Offered</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Barcode-based circulation system</li>
                <li>Online Public Access Catalogue (OPAC)</li>
                <li>Photocopying and printing facilities</li>
                <li>Research assistance and guidance</li>
                <li>Special services for differently-abled students</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Library timings and access policies are available at the library counter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
