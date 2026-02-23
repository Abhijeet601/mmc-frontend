import React from 'react';
import { Helmet } from 'react-helmet-async';

const VocationalComputerApplication = () => {
  return (
    <>
      <Helmet>
        <title>Vocational (Computer Application) - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Vocational Computer Application programs under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Vocational (Computer Application)
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                The Vocational Computer Application program equips students with essential IT skills and software development knowledge aligned with NEP 2020 guidelines.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Programs Offered</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Bachelor of Computer Applications (BCA)</li>
                <li>Diploma in Computer Applications</li>
                <li>Certificate courses in IT and programming</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Programming languages and software development</li>
                <li>Database management and web technologies</li>
                <li>IT infrastructure and networking</li>
                <li>Industry-relevant certifications</li>
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

export default VocationalComputerApplication;
