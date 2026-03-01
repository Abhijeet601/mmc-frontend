import i18next from "i18next";
import React from 'react';
import { r2Url } from '@/lib/r2Assets';

const ORDINANCE_FOLDER = 'data files/Ordinence & Regulations';
const OrdinanceRegulations = () => {
  const ordinanceDocuments = [{
    title: i18next.t("auto.bba_ordinance_and_regulations_7xis2n", {
      defaultValue: 'BBA Ordinance and Regulations'
    }),
    file: 'BBA ordinance and regulations.pdf'
  }, {
    title: i18next.t("auto.bca_ordinance_and_regulations_ul21by", {
      defaultValue: 'BCA Ordinance and Regulations'
    }),
    file: 'BCA ordinance regulation 2022.pdf'
  }, {
    title: i18next.t("auto.nep_ordinance_and_regulations_b_a_b_eijwqc", {
      defaultValue: 'NEP Ordinance and Regulations - B.A./B.Sc./B.Com'
    }),
    file: 'Nep ordinance and regulation.pdf'
  }];

  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{i18next.t("auto.ordinence_regulations_wl9xkn", {
          defaultValue: 'Ordinance & Regulations'
        })}</h1>

          <div className="space-y-4">
            {ordinanceDocuments.map(doc => <div key={doc.file} className="border border-gray-200 rounded-lg p-4 sm:p-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{doc.title}</h2>
                </div>
                <a href={r2Url(`${ORDINANCE_FOLDER}/${encodeURIComponent(doc.file)}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors whitespace-nowrap">{`
                  ${i18next.t("auto.view_pdf_6av1iy")}
                `}</a>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default OrdinanceRegulations;
