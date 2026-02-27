import i18next from "i18next";
import React from 'react';
import { r2Url } from '@/lib/r2Assets';
const StudentsRollOfHonor = () => {
  const years = [{
    year: '2022',
    pdf: 'mmc_gm_2022.pdf'
  }, {
    year: '2021',
    pdf: 'mmc_gm_2021.pdf'
  }, {
    year: '2020',
    pdf: 'mmc_gm_2020.pdf'
  }, {
    year: '2019',
    pdf: 'mmc_gm_2019.pdf'
  }, {
    year: '2018',
    pdf: 'mmc_gm_2018.pdf'
  }];
  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{`
            ${i18next.t("auto.students_roll_of_honor_gtb3zz")}
          `}</h1>

          <div className="space-y-8">
            {years.map(({
            year,
            pdf
          }) => <div key={year} className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{`
                  ${i18next.t("auto.gold_medalists_and_rank_holders_nc6xzj")} `}{year}
                </h2>
                <div className="mb-4">
                  <a href={r2Url(`documents/about/students-roll-of-honor/${pdf}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">{`
                    ${i18next.t("auto.view_pdf_6av1iy")}
                  `}</a>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default StudentsRollOfHonor;
