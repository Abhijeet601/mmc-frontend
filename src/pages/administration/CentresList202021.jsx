import React from 'react';

const CentresList202021 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Centre for Green Initiatives (C4GI)</h1>
      <p className="text-gray-600 mb-8">An ISO Certified Institution Committed to Environmental Conservation</p>

      <section className="mb-12 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">About C4GI</h2>
        <p className="text-justify text-gray-800 mb-4">
          An ISO Certified proactive institution concerned with the conservation of the environment, the Centre for Green Initiatives (C4GI) has been established with the objective of generating awareness and promoting environmental care at both individual and community level. Its primary goal is to provide a healthy environment and superior quality of life to our students during their short but memorable stay at the college campus.
        </p>
        <p className="text-justify text-gray-800">
          This will facilitate them to focus in contributing to overall development of the College as well as the nation. The centre follows the theory of three 'R's of waste management:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 mt-4 ml-4">
          <li><strong>Reduce:</strong> Reduction in use of raw materials</li>
          <li><strong>Reuse:</strong> Reuse of waste materials</li>
          <li><strong>Recycle:</strong> Recycling of waste materials</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Our Objectives</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 border-l-4 border-green-500">
            <p className="text-gray-800">Understanding several environmental issues and the need to address them</p>
          </div>
          <div className="bg-white p-4 border-l-4 border-green-500">
            <p className="text-gray-800">Sensitizing students, faculty members, staff and society about the need for protection of environment for a sustainable growth and healthy future</p>
          </div>
          <div className="bg-white p-4 border-l-4 border-green-500">
            <p className="text-gray-800">Undertaking technological setup aimed to have an environmentally and economically strong impact</p>
          </div>
          <div className="bg-white p-4 border-l-4 border-green-500">
            <p className="text-gray-800">Creating a holistic atmosphere to facilitate the conversation, action and feedback on environmental issues</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Our Commitments</h2>
        <p className="text-justify text-gray-800 mb-4">
          We are committed to protect the environment through complete compliance with environmental laws, regulations, and outstanding efficiency in the conduct of our operations.
        </p>
        <ul className="space-y-3 text-gray-800">
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span> Comply with National, State, and Local Environmental Laws and Regulations</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span> Implement and maintain Environmental Management System (EMS)</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span> Minimize environmental impact through regular evaluation and efficient use of natural resources</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span> Implement sustainable practices including bio-based and environmentally friendly products</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span> Conduct audits to measure environmental performance</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span> Continuously improve environmental performance through appropriate policies and procedures</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span> Prepare for emergencies to minimize environmental impacts</li>
          <li className="flex items-start"><span className="text-green-600 mr-3">✓</span> Emphasize pollution prevention and sustainable business practices</li>
        </ul>
      </section>
    </div>
  );
};

export default CentresList202021;
