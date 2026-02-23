import React from 'react';
import { useTranslation } from 'react-i18next';

const GrievanceCell = () => {
  const { t } = useTranslation();

  const staffGrievanceCell = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal' },
    { sl: '02', name: 'Dr. Binay Kumar Bimal', designation: 'Bursar' },
    { sl: '03', name: 'Dr. Shyam Deo Yadav', designation: 'Convener, HOD, Department of Chemistry' },
    { sl: '04', name: 'Dr. Archana Jaiswal', designation: 'Superintendent Mahima Hostel' },
    { sl: '05', name: 'Dr. Sujata Kumari', designation: 'Superintendent Vaidehi Hostel' },
    { sl: '06', name: 'Dr. Amrita Prasad', designation: 'Superintendent Welfare Hostel' },
    { sl: '07', name: 'Ms. Nidhi Singh', designation: 'Department of Psychology' },
    { sl: '08', name: 'Dr. Pankaj Kumar Baitha', designation: 'Department of Physics' },
    { sl: '09', name: 'Dr. Archana Kumari', designation: 'Department of Psychology' },
    { sl: '10', name: 'Mr. Ravi Prakash', designation: 'Head Assistant' },
    { sl: '11', name: 'Mr. Arun Kumar', designation: 'Accountant – in-charge' },
  ];

  const studentsGrievanceCell = [
    { sl: '01', name: 'Prof. (Dr.) Nagendra Prasad Verma', designation: 'Principal' },
    { sl: '02', name: 'Dr. Binay Kumar Bimal', designation: 'Bursar' },
    { sl: '03', name: 'Dr. Archana Jaiswal', designation: 'Convener, Superintendent Mahima Hostel' },
    { sl: '04', name: 'Dr. Sujata Kumari', designation: 'Superintendent Vaidehi Hostel' },
    { sl: '05', name: 'Dr. Amrita Prasad', designation: 'Superintendent Welfare Hostel' },
    { sl: '06', name: 'Ms. Nidhi Singh', designation: 'Department of Psychology' },
    { sl: '07', name: 'Dr. Ashish Kumar', designation: 'Department of Economics' },
    { sl: '08', name: 'Dr. Veena Kumari', designation: 'Department of Sociology' },
    { sl: '09', name: 'Miss. Sonal Priya', designation: 'General Secretary, Students Central Society' },
    { sl: '10', name: 'Miss. Aaradhya Raj', designation: 'General Secretary, Assistant Students Central Society' },
  ];

  const TableComponent = ({ title, data, columns }) => (
    <div className="mb-8">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-400">
          <thead className="bg-blue-100">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="border border-gray-400 px-4 py-2 text-left">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-400 px-4 py-2">{row.sl}</td>
                <td className="border border-gray-400 px-4 py-2">{row.name}</td>
                <td className="border border-gray-400 px-4 py-2">{row.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Grievance Cell
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Magadh Mahila College, Patna</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Staff & Teachers' Grievance Redressal Cell
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The composition of Staff & Teachers' Grievance Redressal Cell for Academic Session 2025-26 is as follows:
            </p>
            <TableComponent 
              title="Composition of Staff & Teachers' Grievance Redressal Cell for Academic Session 2025-26" 
              data={staffGrievanceCell} 
              columns={['Sl. No.', 'Name', 'Designation / Department']} 
            />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Students' Grievance Redressal Cell (Administration)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The composition of Students' Grievance Redressal Cell for Academic Session 2025-26 is as follows:
            </p>
            <TableComponent 
              title="Composition of Students' Grievance Redressal Cell for Academic Session 2025-26" 
              data={studentsGrievanceCell} 
              columns={['Sl. No.', 'Name', 'Designation / Department']} 
            />
          </section>

        </div>
      </div>
    </div>
  );
};

export default GrievanceCell;
