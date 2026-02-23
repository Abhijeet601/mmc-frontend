import React, { useState } from 'react';
import committees202526 from '../../data/committees202526.json';

const Committees = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const years = ['2025-26', '2023-24', '2022-23', '2021-22', '2020-21'];

  const academicAuditCommittee202021 = [
    { sl: '01', name: 'Prof. (Dr.) Namita Kumari', designation: 'Principal University Professor', department: '-----' },
    { sl: '02', name: 'Dr. Shyam Deo Yadav', designation: 'Bursar Associate Professor', department: 'Chemistry' },
    { sl: '03', name: 'Prof. Anjum Fatma', designation: 'University Professor', department: 'HoD, Chemistry' },
    { sl: '04', name: 'Dr. Bandana Singh Convener', designation: 'University Professor', department: 'Home Science' },
    { sl: '05', name: 'Dr. Pushpa Sinha', designation: 'Associate Professor', department: 'HoD, Economics' }
  ];

  const advisoryCommittee202021 = [
    { sl: '01', name: 'Prof. (Dr.) Namita Kumari', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Shyam Deo Yadav', designation: 'Bursar Coordinator-B.Com.', department: '' },
    { sl: '03', name: 'Dr. Kumari Aruna', designation: 'HoD, Hindi', department: '' }
  ];

  const buildingCommittee202021 = [
    { sl: '01', name: 'Prof. (Dr.) Namita Kumari', designation: 'Principal', department: '' },
    { sl: '02', name: 'Dr. Shyam Deo Yadav', designation: 'Bursar, Coordinator-B.Com.', department: 'Chemistry' },
    { sl: '03', name: 'Mr. Parimal Kumar Khan', designation: 'Development Officer, PU', department: '' }
  ];

  const allCommittees = {
    '2020-21': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Building Committee', data: buildingCommittee202021 }
    ],
    '2021-22': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Building Committee', data: buildingCommittee202021 }
    ],
    '2022-23': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Time Table Committee', data: buildingCommittee202021 }
    ],
    '2023-24': [
      { title: 'Academic Audit Committee', data: academicAuditCommittee202021 },
      { title: 'Advisory Committee', data: advisoryCommittee202021 },
      { title: 'Time Table Committee', data: buildingCommittee202021 }
    ],
    '2025-26': committees202526
  };

  const getCellValue = (row, column) => {
    const normalized = column.toLowerCase().replace(/[^a-z0-9]/g, '');
    return (
      row[normalized] ||
      row[column.toLowerCase().replace(/\s+/g, '')] ||
      row[column.toLowerCase()] ||
      ''
    );
  };

  const TableComponent = ({ data, columns }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-blue-100">
          <tr>
            {columns.map((col) => (
              <th key={col} className="border border-gray-400 px-4 py-2 text-left text-sm">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={`${row.sl || idx}-${row.name || 'row'}`} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {columns.map((col) => (
                <td key={`${idx}-${col}`} className="border border-gray-400 px-4 py-2 text-sm align-top">
                  {getCellValue(row, col)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">College Committees</h1>
      <p className="text-gray-600 mb-8">Administrative Structure and Committee Compositions</p>

      <div className="space-y-4">
        {years.map((year) => (
          <div key={year} className="border rounded-lg shadow-md">
            <button
              onClick={() => setExpandedYear(expandedYear === year ? null : year)}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg flex justify-between items-center hover:bg-blue-700 transition"
            >
              <span>Academic Year {year}</span>
              <span className="text-xl">{expandedYear === year ? '-' : '+'}</span>
            </button>

            {expandedYear === year && (
              <div className="px-6 py-6 bg-white">
                {(allCommittees[year] || []).map((committee, idx) => (
                  <div key={`${year}-${committee.title}-${idx}`} className="mb-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">{committee.title}</h3>
                    <TableComponent
                      data={committee.data}
                      columns={['Sl', 'Name', 'Designation', 'Department']}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
