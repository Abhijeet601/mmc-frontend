import React from 'react';
import { Helmet } from 'react-helmet-async';

const FineArts = () => {
  return (
    <>
      <Helmet>
        <title>Fine Arts - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Fine Arts programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Fine Arts
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                The Fine Arts department nurtures creativity and artistic expression, offering comprehensive programs that blend traditional and contemporary art forms.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Programs Offered</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Bachelor of Fine Arts (BFA)</li>
                <li>Certificate courses in various art forms</li>
                <li>Workshop-based learning programs</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Art Disciplines</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Painting and visual arts</li>
                <li>Sculpture and three-dimensional arts</li>
                <li>Applied arts and crafts</li>
                <li>Digital arts and multimedia</li>
                <li>Traditional and folk arts</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Fine Arts programs emphasize practical training and creative expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FineArts;
