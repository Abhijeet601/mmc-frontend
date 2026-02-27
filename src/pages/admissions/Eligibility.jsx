import i18next from "i18next";
import React from 'react';
const eligibilityRows = [{
  programme: 'B.A.(Hons.)/BSW',
  eligibility: 'Candidates who have passed intermediate examination I.A./I. Sc/I. Com or +2 of Bihar School Examination Board or equivalent examination offered by other approved National/State Boards.'
}, {
  programme: 'B.Sc. (Hons.)',
  eligibility: 'Candidates who have passed intermediate examination I. Sc or +2 science stream only of Bihar School Examination Board or equivalent examination offered by other approved National/State Boards.'
}, {
  programme: 'B. Com (Hons.)',
  eligibility: 'Candidates who have passed intermediate examination I.A./I. Sc/I. Com or +2 of Bihar School Examination Board or equivalent examination offered by other approved National/State Boards.'
}, {
  programme: 'BCA',
  eligibility: 'Candidates who have passed the intermediate examination of Bihar School Examination Board or equivalent examination offered by other approved National/ States Board with at least 45% marks in aggregate at the qualifying examination with mathematics or statistics'
}, {
  programme: 'BBA',
  eligibility: 'Candidates who have passed the intermediate examination of Bihar School Examination Board or equivalent examination offered by other approved National/ States Board with at least 45% marks in aggregate'
}, {
  programme: 'M.A./M.Sc.',
  eligibility: '(i) Passed the Bachelor degree with 45% marks in respective honours subject/major subject/core course or (ii) Passed the bachelor degree with 55% marks in subsidiary/pass course/allied subjects.'
}];
const Eligibility = () => {
  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{`
            ${i18next.t("auto.eligibility_for_different_programmes_are_as_follows_1mjsmw5")}
          `}</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">{i18next.t("auto.programme_4xv8gp")}</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">{i18next.t("auto.eligibility_g6u7ew")}</th>
                </tr>
              </thead>
              <tbody>
                {eligibilityRows.map(row => <tr key={row.programme} className="align-top">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">{row.programme}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700 leading-relaxed">{row.eligibility}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
};
export default Eligibility;
