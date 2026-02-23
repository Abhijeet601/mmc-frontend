import React from 'react';

const OrganogramOfInstitution = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Organogram of Institution</h1>
      <p className="text-gray-600 mb-8">Decentralized Administrative Structure of Magadh Mahila College</p>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
        <p className="text-justify text-gray-800 mb-4">
          The organogram is an administrative diagram that describes the decentralized structure of College administration. College administration is a cooperative effort of the Principal, teaching, non-teaching staff and students with the cooperation and support of all stakeholders in pursuit of common objectives.
        </p>
        <p className="text-justify text-gray-800">
          It is necessary that all aspects should be organized in order to attain the desired goals. As the Head of the institution, the Principal supervises the Bursar, Nodal Officer RUSA and Nodal Officer Wi-Fi. The Principal is also the Warden of all five hostels on the campus and looks after all Class II & Class IV Non-teaching Staff.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Administrative Committees</h2>
        <p className="text-justify text-gray-800 mb-4">
          Under the administration of the Principal, various committees are formed to oversee different aspects of college operations:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 border rounded shadow">
            <h3 className="font-bold text-gray-800 mb-2">Academic Committees</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• IQAC (Internal Quality Assurance Cell)</li>
              <li>• General Body</li>
              <li>• Advisory Committee</li>
              <li>• Research Journal Committee</li>
            </ul>
          </div>
          <div className="bg-white p-4 border rounded shadow">
            <h3 className="font-bold text-gray-800 mb-2">Administrative Committees</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Development-cum-Finance Committee</li>
              <li>• Committee for SC/ST</li>
              <li>• Magazine Committee</li>
              <li>• Library Committee</li>
            </ul>
          </div>
          <div className="bg-white p-4 border rounded shadow">
            <h3 className="font-bold text-gray-800 mb-2">Student Committees</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Internal Complaint Committee</li>
              <li>• Sports Committee</li>
              <li>• Time-Table Committee</li>
              <li>• Discipline Committee</li>
            </ul>
          </div>
          <div className="bg-white p-4 border rounded shadow">
            <h3 className="font-bold text-gray-800 mb-2">Other Committees</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Building Committee</li>
              <li>• Purchase Committee</li>
              <li>• Placement Cell</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Grievance Redressal Cells</h2>
        <p className="text-justify text-gray-800 mb-4">
          Different Cells are designed to address students' and staff complaints. These cells function under the control and supervision of the Principal:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center"><span className="text-blue-600 mr-2">→</span> Students' Grievance Redressal Cell</div>
          <div className="flex items-center"><span className="text-blue-600 mr-2">→</span> Staff & Teachers' Grievance Redressal Cell</div>
          <div className="flex items-center"><span className="text-blue-600 mr-2">→</span> Anti-Ragging Cell</div>
          <div className="flex items-center"><span className="text-blue-600 mr-2">→</span> Sexual Harassment Cell</div>
          <div className="flex items-center"><span className="text-blue-600 mr-2">→</span> Gender Cell</div>
          <div className="flex items-center"><span className="text-blue-600 mr-2">→</span> Minority Cell</div>
          <div className="flex items-center"><span className="text-blue-600 mr-2">→</span> Legal Cell</div>
          <div className="flex items-center"><span className="text-blue-600 mr-2">→</span> OBC Cell</div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Societies</h2>
        <p className="text-justify text-gray-800 mb-4">
          Different societies are formed to maintain discipline amongst college students and work under the observation of the Principal:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded">
            <h3 className="font-bold text-gray-800 mb-2">Students' Central Society</h3>
            <p className="text-sm text-gray-700">An elected body of students' representatives serving as Students' Cabinet</p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded">
            <h3 className="font-bold text-gray-800 mb-2">Sahodara Society</h3>
            <p className="text-sm text-gray-700">House System with four houses: Jagriti, Maitri, Pragati, and Samriddhi</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded">
            <h3 className="font-bold text-gray-800 mb-2">Science & IT Society</h3>
            <p className="text-sm text-gray-700">Promoting science and technology initiatives</p>
          </div>
          <div className="bg-gradient-to-r from-pink-100 to-red-100 p-4 rounded">
            <h3 className="font-bold text-gray-800 mb-2">Alumnae Association</h3>
            <p className="text-sm text-gray-700">Connecting with and supporting college alumni</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Stakeholders</h2>
        <p className="text-justify text-gray-800 mb-4">
          An important characteristic of the Organogram includes involvement of various stakeholders:
        </p>
        <div className="grid md:grid-cols-3 gap-3 text-gray-800">
          <div>• Students</div>
          <div>• Parents and Guardians</div>
          <div>• Alumnae</div>
          <div>• NGOs</div>
          <div>• Corporate Organizations</div>
          <div>• Media Houses</div>
        </div>
      </section>
    </div>
  );
};

export default OrganogramOfInstitution;
