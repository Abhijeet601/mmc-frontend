import React from 'react';
import { Helmet } from 'react-helmet-async';
import { r2Url } from '@/lib/r2Assets';

const TimeTable = () => {
  return (
    <>
      <Helmet>
        <title>Time Table - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Academic time table under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Time Table
            </h1>

            <div className="prose max-w-none">
              <div className="space-y-6 mb-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Master Time Table BA 2026</h3>
                  <iframe
                    src={r2Url('timetables/Master Time Table BA 2026 (1).pdf')}
                    width="100%"
                    height="600px"
                    title="Master Time Table BA 2026"
                    className="border border-gray-300 rounded"
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Master Time Table BSc 2026</h3>
                  <iframe
                    src={r2Url('timetables/Master Time Table BSc 2026 (1).pdf')}
                    width="100%"
                    height="600px"
                    title="Master Time Table BSc 2026"
                    className="border border-gray-300 rounded"
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">BCA Time Table 2026</h3>
                  <iframe
                    src={r2Url('timetables/BCA Time Table 2026 (1).pdf')}
                    width="100%"
                    height="600px"
                    title="BCA Time Table 2026"
                    className="border border-gray-300 rounded"
                  ></iframe>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Current semester time tables are available in the respective departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTable;
