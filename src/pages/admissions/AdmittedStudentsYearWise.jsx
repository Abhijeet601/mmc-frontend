import i18next from "i18next";
import React from 'react';
import { r2Url } from '@/lib/r2Assets';
const AdmittedStudentsYearWise = () => {
  const pdfs = {
    2018: [{
      name: 'ADMITTED-IN-2018-PART-I-UG-PG-r.pdf',
      url: r2Url('documents/admission/admitted-students/ADMITTED-IN-2018-PART-I-UG-PG-r.pdf')
    }, {
      name: 'ADMITTED-IN-2018-PART-II-UG-PG-R.pdf',
      url: r2Url('documents/admission/admitted-students/ADMITTED-IN-2018-PART-II-UG-PG-R.pdf')
    }, {
      name: 'ADMITTED-IN-2018-PART-III-UG-R.pdf',
      url: r2Url('documents/admission/admitted-students/ADMITTED-IN-2018-PART-III-UG-R.pdf')
    }],
    2019: [{
      name: 'ADMITTED-IN-2019-PART-I-UG-PG-R.pdf',
      url: r2Url('documents/admission/admitted-students/ADMITTED-IN-2019-PART-I-UG-PG-R.pdf')
    }, {
      name: 'ADMITTED-IN-2019-PART-II-UG-PG_R.pdf',
      url: r2Url('documents/admission/admitted-students/ADMITTED-IN-2019-PART-II-UG-PG_R.pdf')
    }, {
      name: 'ADMITTED-IN-2019-PART-III-UG-R.pdf',
      url: r2Url('documents/admission/admitted-students/ADMITTED-IN-2019-PART-III-UG-R.pdf')
    }],
    2020: [{
      name: 'ADMITTED-IN-2020-PART-I-UG-PG-R.pdf',
      url: r2Url('documents/admission/admitted-students/ADMITTED-IN-2020-PART-I-UG-PG-R.pdf')
    }, {
      name: 'ADMITTED-IN-2020-PART-II-UG-PG-R.pdf',
      url: r2Url('documents/admission/admitted-students/ADMITTED-IN-2020-PART-II-UG-PG-R.pdf')
    }, {
      name: 'ADMITTED-IN-2020-PART-III-UG-R.pdf',
      url: r2Url('documents/admission/admitted-students/ADMITTED-IN-2020-PART-III-UG-R.pdf')
    }]
  };
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{i18next.t("auto.admitted_students_year_wise_peiynt")}</h1>
      {Object.keys(pdfs).map(year => <div key={year} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{year}</h2>
          <ul className="list-disc list-inside">
            {pdfs[year].map(pdf => <li key={pdf.name}>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {pdf.name}
                </a>
              </li>)}
          </ul>
        </div>)}
    </div>;
};
export default AdmittedStudentsYearWise;
