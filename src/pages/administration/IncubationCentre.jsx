import React from 'react';

const IncubationCentre = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Magadh Mahila College Incubation Centre (MMCIC)</h1>
      <p className="text-gray-600 mb-8">Fostering Entrepreneurship and Innovation Among Students</p>

      <section className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Inception and Establishment</h2>
        <p className="text-justify text-gray-800">
          The Incubation Centre was established in Magadh Mahila College on 15th May 2018. The inauguration ceremony was graced by the Industry Minister of Government of Bihar, Shri Jai Kumar Singh, Vice Chancellor Patna University Dr. Ras Bihari Singh, Mayor, Patna Ms. Sita Sahu, and MK Sinha, Director IIED. The Founder Principal, Dr. Shashi Sharma, established the centre with the vision of creating entrepreneurs from the talent pool of Magadh Mahila College.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">About MMCIC</h2>
        <p className="text-justify text-gray-800 mb-4">
          The MMC Incubation Centre (MMCIC) is a student-led centre comprising MMC faculty, alumnae, industry experts and like-minded organizations to build an ecosystem of synergized efforts towards entrepreneurial and business initiatives.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision and Mission</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-3">Vision</h3>
            <p>
              Create an environment that promotes and stimulates the spirit of entrepreneurship among the students of the College
            </p>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-3">Mission</h3>
            <p>
              Support student-initiated business ideas with sound business acumen and guidance from professors, mentors and industry experts to facilitate successful transition from start-ups to established businesses
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Key Features and Support</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">Mentoring and Guidance</h3>
            <p className="text-gray-700">Expert mentorship from professors, industry leaders, and successful entrepreneurs</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">Financial Support</h3>
            <p className="text-gray-700">Fundraising assistance and developing networks with angel investors and venture capital firms</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">Operational Support</h3>
            <p className="text-gray-700">Market research, idea validation, and overall business development assistance</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">Professional Services</h3>
            <p className="text-gray-700">Financial and legal advisory, marketing services, and technological support</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-800">Alumnae Network</h3>
            <p className="text-gray-700">Comprehensive network of MMC alumnae, angel investors and venture capital firms</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Comprehensive Support Ecosystem</h2>
        <p className="text-justify text-gray-800">
          MMCIC has established a comprehensive network of organizations to help incubate the start-ups with operational execution, market research, idea validation, financial and legal advisory, marketing services and overall business development. The centre is in the process of developing an extensive network comprising of MMC alumnae, prominent angel investors and venture capital firms to provide the start-ups with essential financial support for their growth and sustainability.
        </p>
      </section>
    </div>
  );
};

export default IncubationCentre;
