import React from 'react';
import { useTranslation } from 'react-i18next';

const SexualHarassment = () => {
  const { t } = useTranslation();
  const antiSexualHarassmentCellData = [
    {
      slNo: '01',
      name: 'Prof. (Dr.) Nagendra Prasad Verma',
      designationDepartment: 'Principal',
    },
    {
      slNo: '02',
      name: 'Dr. Binay Kumar Bimal',
      designationDepartment: 'Bursar',
    },
    {
      slNo: '03',
      name: 'Dr. Poonam Kumari',
      designationDepartment: 'Convener, HOD, Department of Mathematics',
    },
    {
      slNo: '04',
      name: 'Dr. Archana Jaiswal',
      designationDepartment: 'HOD, Department of English',
    },
    {
      slNo: '05',
      name: 'Dr. Pushpanjali Khare',
      designationDepartment: 'HOD, Department of Botany',
    },
    {
      slNo: '06',
      name: 'Ms. Nidhi Singh',
      designationDepartment: 'Department of Psychology',
    },
    {
      slNo: '07',
      name: 'Dr. Namrata',
      designationDepartment: 'HOD, Department of Psychology',
    },
    {
      slNo: '08',
      name: 'Dr. Anju Kumari',
      designationDepartment: 'Department of Sociology',
    },
    {
      slNo: '09',
      name: 'Dr. Mita Malkhandi',
      designationDepartment: 'Department of Economics',
    },
    {
      slNo: '10',
      name: 'Mr. Ravi Prakash',
      designationDepartment: 'Head Assistant',
    },
    {
      slNo: '11',
      name: 'Mrs. Ritu Rani',
      designationDepartment: 'LDC',
    },
    {
      slNo: '12',
      name: 'Miss. Sonal Priya',
      designationDepartment: "General Secretary, Students' Central Society",
    },
    {
      slNo: '13',
      name: 'Miss. Aaradhya Raj',
      designationDepartment: "General Secretary, Assistant Students' Central Society",
    },
    {
      slNo: '14',
      name: 'Miss. Sonam Kumari',
      designationDepartment: 'Common Room Secretary',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Anti - Sexual Harassment Cell
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t('sexualHarassment.content')}
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              The composition of Anti-Sexual Harassment Cell Session 2025-26 is as follows:
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-white">
                      Sl. No
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-white">
                      Name
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-white">
                      Designation / Department
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {antiSexualHarassmentCellData.map((member) => (
                    <tr key={member.slNo} className="bg-white dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                        {member.slNo}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                        {member.name}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300">
                        {member.designationDepartment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SexualHarassment;
