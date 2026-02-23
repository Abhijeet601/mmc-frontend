import React from 'react';
import { useTranslation } from 'react-i18next';

const AntiRagging = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Anti-Ragging Committee
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The committee reviews cases forwarded by the Anti-Ragging Cell and takes final decisions on matters involving ragging.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Members</h2>
            <div className="grid md:grid-cols-1 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Prof. (Dr.) Nagendra Pd. Verma — Chairman</h3>
                <p className="text-gray-700 dark:text-gray-300">Principal, MMC, P.U. Patna</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Prof. (Dr.) Renu Ranjan — Member</h3>
                <p className="text-gray-700 dark:text-gray-300">(NGO Representative)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Anupama — Member</h3>
                <p className="text-gray-700 dark:text-gray-300">(Medical Officer, Gardanibagh Hospital, Patna)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">SHO, Gandhi Maidan Police Station — Member (Ex-officio)</h3>
                <p className="text-gray-700 dark:text-gray-300"></p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Prof. (Dr.) Pushpalata Kumari — Member</h3>
                <p className="text-gray-700 dark:text-gray-300">(Coordinator, IQAC & NAAC, MMC)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Archana Jaiswal — Member</h3>
                <p className="text-gray-700 dark:text-gray-300">(Campus-in-Charge cum Hostel Superintendent)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Amrita Prasad — Member</h3>
                <p className="text-gray-700 dark:text-gray-300">(Hostel Superintendent, Welfare Hostel)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Suchita Arpan — Member</h3>
                <p className="text-gray-700 dark:text-gray-300">(Coordinator, BBA)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Sujata Kumari — Member</h3>
                <p className="text-gray-700 dark:text-gray-300">(Hostel Superintendent, Vaidehi Hostel)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Member, Students' Council (GS, MMC) — Member</h3>
                <p className="text-gray-700 dark:text-gray-300"></p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Mr. Ravi Prakash — Member</h3>
                <p className="text-gray-700 dark:text-gray-300">(Head Assistant, MMC)</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Anti-Ragging Cell</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The cell examines serious complaints reported by the Anti-Ragging Squad and forwards them for further action.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Members</h3>
            <div className="grid md:grid-cols-1 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Prof. (Dr.) Pushpanjali Khare — President</h3>
                <p className="text-gray-700 dark:text-gray-300">(Head, Department of Botany)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Surendra Kumar Prasad — Vice-President</h3>
                <p className="text-gray-700 dark:text-gray-300">(Department of Botany)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Binay Kumar Bimal — Vice-President</h3>
                <p className="text-gray-700 dark:text-gray-300">(Department of Sociology)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Priyamvada — Vice-President</h3>
                <p className="text-gray-700 dark:text-gray-300">(Department of Psychology)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Member, Students' Council (GS, MMC) — Vice-President</h3>
                <p className="text-gray-700 dark:text-gray-300"></p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Anti-Ragging Squad</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The squad conducts surprise inspections, campus monitoring, and preventive actions to stop ragging incidents. It maintains vigilance throughout campus and collaborates with student representatives.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Members</h3>
            <div className="grid md:grid-cols-1 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Shyam Deo Yadav — President</h3>
                <p className="text-gray-700 dark:text-gray-300">(Head, Department of Chemistry)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Manish Kumar Verma — Vice-President</h3>
                <p className="text-gray-700 dark:text-gray-300">(Department of Physics)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. Kavita Kumari — Vice-President</h3>
                <p className="text-gray-700 dark:text-gray-300">(Head, Department of Home Science)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Member, Students' Council (GS, MMC)</h3>
                <p className="text-gray-700 dark:text-gray-300"></p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Security Personnel</h3>
                <p className="text-gray-700 dark:text-gray-300">(Sunil Kumar / Rajesh Kumar / Vikash Kumar)</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiRagging;
