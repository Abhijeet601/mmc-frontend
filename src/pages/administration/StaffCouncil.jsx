import React, { useState } from 'react';

const StaffCouncil = () => {
  const [activeTab, setActiveTab] = useState('regular');

  const regularTeachers = [
    { sl: 1, department: 'Principal', name: 'Prof. (Dr.) Nagendra Prasad Verma' },
    { sl: 2, department: 'Hindi', name: 'Dr. Shipra Prabha' },
    { sl: 3, department: 'Hindi', name: 'Dr. Asha Kumari' },
    { sl: 4, department: 'Hindi', name: 'Dr. Jyoti Dubey' },
    { sl: 5, department: 'Hindi', name: 'Dr. Preeti Kumari' },
    { sl: 6, department: 'English', name: 'Dr. Archana Jaiswal' },
    { sl: 7, department: 'English', name: 'Dr. Rajeev Kumar Singh' },
    { sl: 8, department: 'Urdu', name: 'Dr. Md. Sohail Anwer' },
    { sl: 9, department: 'Urdu', name: 'Dr. Md. Rizwan' },
    { sl: 10, department: 'Persian', name: 'Dr. Shahida Khanam' },
    { sl: 11, department: 'Philosophy', name: 'Ms. Ranjana Yadav' },
    { sl: 12, department: 'Philosophy', name: 'Dr. Suchita Arpan' },
    { sl: 13, department: 'Philosophy', name: 'Dr. Sanjay Kumar Priyadarshi' },
    { sl: 14, department: 'Pol. Science', name: 'Prof. (Dr.) Pushplata Kumari' },
    { sl: 15, department: 'Pol. Science', name: 'Dr. Rishu Raj' },
    { sl: 16, department: 'Sociology', name: 'Dr. Binay Kumar Bimal' },
    { sl: 17, department: 'Sociology', name: 'Dr. Archna Kumari' },
    { sl: 18, department: 'Sociology', name: 'Dr. Reena Kumari' },
    { sl: 19, department: 'Sociology', name: 'Dr. Anju Kumari' },
    { sl: 20, department: 'Sociology', name: 'Dr. Veena Kumari' },
    { sl: 21, department: 'Sociology', name: 'Dr. Rajendra Kumar' },
    { sl: 22, department: 'Sociology', name: 'Dr. Minu Minj' },
    { sl: 23, department: 'Economics', name: 'Dr. Sweta Sharan' },
    { sl: 24, department: 'Economics', name: 'Dr. Priyardarshni' },
    { sl: 25, department: 'Economics', name: 'Dr. Chandan Chandra Chunna' },
    { sl: 26, department: 'Economics', name: 'Dr. Angur Kumari' },
    { sl: 27, department: 'Economics', name: 'Dr. Ashish Kumar' },
    { sl: 28, department: 'Economics', name: 'Dr. Mita Malkhandi' },
    { sl: 29, department: 'Psychology', name: 'Ms. Nidhi Singh' },
    { sl: 30, department: 'Psychology', name: 'Dr. Namrata' },
    { sl: 31, department: 'Psychology', name: 'Dr. Sonali Kumari' },
    { sl: 32, department: 'Psychology', name: 'Dr. Priyamvada' },
    { sl: 33, department: 'Psychology', name: 'Dr. Kavita Chowdhary' },
    { sl: 34, department: 'Psychology', name: 'Dr. Archana Kumari' },
    { sl: 35, department: 'Psychology', name: 'Dr. Ranjana Kumari' },
    { sl: 36, department: 'Psychology', name: 'Dr. Archana Bharti' },
    { sl: 40, department: 'Home-Sc.', name: 'Dr. Kavita Kumari' },
    { sl: 41, department: 'Home-Sc.', name: 'Dr. Seema Prakash' },
    { sl: 42, department: 'Home-Sc.', name: 'Dr. Shruti Kumari' },
    { sl: 43, department: 'Music', name: 'Prof. (Dr.) Neera Choudhury' },
    { sl: 44, department: 'Music', name: 'Dr. Arvind Kumar' },
    { sl: 45, department: 'Mathematics', name: 'Dr. Poonam Kumari' },
    { sl: 46, department: 'Mathematics', name: 'Dr. Binay Kumar' },
    { sl: 47, department: 'Physics', name: 'Dr. Manish Kumar Verma' },
    { sl: 48, department: 'Physics', name: 'Dr. Priti Mishra' },
    { sl: 49, department: 'Physics', name: 'Dr. Sonu Rani' },
    { sl: 50, department: 'Physics', name: 'Dr. Pankaj Kumar Baitha' },
    { sl: 51, department: 'Chemistry', name: 'Dr. Usha Kumari' },
    { sl: 52, department: 'Chemistry', name: 'Dr. Shyam Deo Yadav' },
    { sl: 53, department: 'Chemistry', name: 'Dr. Madhu Kumari Gupta' },
    { sl: 54, department: 'Chemistry', name: 'Dr. Amrita Prasad' },
    { sl: 55, department: 'Chemistry', name: 'Dr. Reena Kumari' },
    { sl: 56, department: 'Chemistry', name: 'Dr. Deepak Kumar' },
    { sl: 57, department: 'Chemistry', name: 'Dr. Archana Sinha' },
    { sl: 58, department: 'Botany', name: 'Prof. (Dr.) Namita Kumari' },
    { sl: 59, department: 'Botany', name: 'Dr. Pushpanjali Khare' },
    { sl: 60, department: 'Botany', name: 'Dr. Surendra Kumar Prasad' },
    { sl: 61, department: 'Zoology', name: 'Dr. Sujata Kumari' },
  ];

  const guestFaculty = [
    { sl: 1, department: 'History', name: 'Dr. Rajesh Kumar' },
    { sl: 2, department: 'History', name: 'Dr. Deepika Singh' },
    { sl: 3, department: 'History', name: 'Dr. Sweta Kumari' },
    { sl: 4, department: 'Zoology', name: 'Dr. Maya Rani' },
    { sl: 5, department: 'Zoology', name: 'Dr. Arshi Rana' },
    { sl: 6, department: 'English', name: 'Dr. Anamika' },
    { sl: 7, department: 'English', name: 'Dr. Anchit Pandey' },
    { sl: 8, department: 'Chemistry', name: 'Dr. Priya' },
    { sl: 9, department: 'Chemistry', name: 'Dr. Sadhana Kumari' },
    { sl: 10, department: 'Sanskrit', name: 'Dr. Bharti Kumari' },
    { sl: 11, department: 'Political Sc.', name: 'Dr. Varsha Shekhar' },
    { sl: 12, department: 'Sociology', name: 'Dr. Madhavi' },
    { sl: 13, department: 'Physics', name: 'Dr. Kamad Nath Shandilya' },
    { sl: 14, department: 'Economics', name: 'Dr. Deepali Kumari' },
  ];

  const regularEmployees = [
    { sl: 1, department: 'Administration', name: 'Mr. Ravi Prakash', designation: 'Head Assistant' },
    { sl: 2, department: 'Botany', name: 'Mr. Arun Kumar', designation: 'Store Keeper / Accountant-in-charge' },
    { sl: 3, department: 'Office (Accounts)', name: 'Mr. Jitendra Kumar', designation: 'LDC' },
    { sl: 4, department: 'Office', name: 'Mr. Abhimanyu Kumar', designation: 'LDC' },
    { sl: 5, department: 'Office', name: 'Mrs. Gitanjali Palei', designation: 'LDC' },
    { sl: 6, department: 'Office', name: 'Mrs. Ritu Rani', designation: 'LDC' },
    { sl: 7, department: 'Botany', name: 'Mrs. Radha Devi', designation: 'Lab. Bearer' },
    { sl: 8, department: 'Principal Chamber', name: 'Mrs. Lalita Devi', designation: 'Peon' },
    { sl: 9, department: 'Zoology', name: 'Mr. Ahraruddin Ansari', designation: 'Lab. Bearer' },
    { sl: 10, department: 'Office', name: 'Mr. Gautam Raj', designation: 'Peon' },
    { sl: 11, department: 'Vaidehi Hostel', name: 'Mr. Ashok Kumar', designation: 'Darwan' },
    { sl: 12, department: 'General', name: 'Mr. Kishore Kumar', designation: 'Darwan' },
    { sl: 13, department: 'Office', name: 'Mr. Ram Pravesh Prasad', designation: 'Peon' },
    { sl: 14, department: 'Psychology', name: 'Mr. Neeraj Kumar', designation: 'Lab. Bearer' },
    { sl: 15, department: 'Physics', name: 'Mr. Dablu Kumar', designation: 'Lab. Bearer' },
    { sl: 16, department: 'Principal Chamber', name: 'Mr. Suraj Kumar', designation: 'Peon' },
    { sl: 17, department: 'Chemistry', name: 'Mrs. Sahuda Iffat', designation: 'Peon' },
    { sl: 18, department: 'Psychology', name: 'Mrs. Meena Devi', designation: 'Peon' },
  ];

  const TableComponent = ({ data, columns }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-blue-100">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="border border-gray-400 px-4 py-2 text-left text-sm font-bold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {columns.map((col, colIdx) => {
                const key = col.toLowerCase().replace(/\s+/g, '');
                return (
                  <td key={colIdx} className="border border-gray-400 px-4 py-2 text-sm">
                    {row[key] || ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Teachers and Employee List 2025-2026</h1>
      <p className="text-gray-600 mb-8">Magadh Mahila College, Patna - Complete Teachers and Employee Directory</p>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTab('regular')}
          className={`px-6 py-2 rounded font-bold transition ${
            activeTab === 'regular'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Regular Teachers ({regularTeachers.length})
        </button>
        <button
          onClick={() => setActiveTab('guest')}
          className={`px-6 py-2 rounded font-bold transition ${
            activeTab === 'guest'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Guest Faculty ({guestFaculty.length})
        </button>
        <button
          onClick={() => setActiveTab('employees')}
          className={`px-6 py-2 rounded font-bold transition ${
            activeTab === 'employees'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Non-Teaching Staff ({regularEmployees.length})
        </button>
      </div>

      {activeTab === 'regular' && (
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Regular Teaching Faculty</h2>
          <TableComponent data={regularTeachers} columns={['Sl', 'Department', 'Name']} />
        </div>
      )}

      {activeTab === 'guest' && (
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Guest Faculty</h2>
          <TableComponent data={guestFaculty} columns={['Sl', 'Department', 'Name']} />
        </div>
      )}

      {activeTab === 'employees' && (
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Non-Teaching Staff (3rd & 4th Grade)</h2>
          <TableComponent data={regularEmployees} columns={['Sl', 'Department', 'Name', 'Designation']} />
        </div>
      )}
    </div>
  );
};

export default StaffCouncil;
