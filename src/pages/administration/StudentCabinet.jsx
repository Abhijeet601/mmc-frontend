import i18next from "i18next";
import React from 'react';
const STUDENT_CABINET_FOLDER = 'https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/data%20files/Student%20Cabbinet';
const studentCabinetImages = [{
  title: i18next.t("auto.student_cabinet_2023_2024_1e0qvm8"),
  file: 'WhatsApp Image 2026-02-26 at 10.37.05 PM.jpeg'
}, {
  title: i18next.t("auto.student_cabinet_2024_2025_1ie5lkm"),
  file: 'WhatsApp Image 2026-02-26 at 10.37.07 PM.jpeg'
}];
const StudentCabinet = () => {
  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{i18next.t("auto.student_cabinet_vb3cl6")}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentCabinetImages.map(image => <div key={image.file} className="border border-gray-200 rounded-lg p-4">
                <img src={`${STUDENT_CABINET_FOLDER}/${encodeURIComponent(image.file)}`} alt={image.title} className="w-full h-auto object-contain rounded" loading="lazy" data-skip-r2-rewrite="true" />
                <p className="mt-3 text-sm font-medium text-gray-700">{image.title}</p>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default StudentCabinet;
