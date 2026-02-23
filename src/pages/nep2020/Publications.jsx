import React from 'react';
import { Helmet } from 'react-helmet-async';
import { publications } from '../../data/publications';

// Sort publications by year in descending order
const sortedPublications = [...publications].sort((a, b) => {
  // Extract the ending year from the year string
  // For "2017-18", extract 18; for "2023", extract 2023
  const extractYear = (yearStr) => {
    if (yearStr.includes('-')) {
      // For ranges like "2017-18", get the last part
      const parts = yearStr.split('-');
      return parseInt(parts[parts.length - 1], 10) + 2000; // Convert 18 to 2018
    }
    return parseInt(yearStr, 10);
  };
  
  const yearA = extractYear(a.year);
  const yearB = extractYear(b.year);
  
  // Sort in descending order (newest first)
  return yearB - yearA;
});

const Publications = () => {
  return (
    <>
      <Helmet>
        <title>Publications - NEP 2020 - Magadh Mahila College</title>
        <meta name="description" content="Research publications under National Education Policy 2020 at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">
              Publications
            </h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Research and academic publications are integral to the NEP 2020 implementation, fostering a culture of inquiry, innovation, and knowledge dissemination.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Available Publications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {sortedPublications.map((pub, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{pub.title}</h3>
                        <p className="text-sm text-gray-600">{pub.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{pub.description}</p>
                    <div className="flex space-x-2">
                      <a
                        href={pub.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        View PDF
                      </a>
                      <a
                        href={pub.file}
                        download
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-primary mb-4">Publication Categories</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Research papers in peer-reviewed journals</li>
                <li>Conference proceedings and presentations</li>
                <li>Books and book chapters</li>
                <li>Working papers and policy briefs</li>
                <li>Student research publications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4">Research Support</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Internal Quality Assurance Cell (IQAC) support</li>
                <li>Research methodology workshops</li>
                <li>Publication assistance and guidance</li>
                <li>Collaboration with research institutions</li>
                <li>Funding for research projects</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> Faculty and student publications are regularly updated on the college website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publications;
