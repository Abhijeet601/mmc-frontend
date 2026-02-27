import i18next from "i18next";
import React from 'react';
import { useTranslation } from 'react-i18next';
const FeedbackForms = () => {
  const {
    t
  } = useTranslation();
  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{`
            ${i18next.t("auto.feedback_forms_srf689")}
          `}</h1>

          <div className="prose prose-gray max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">{`
              ${i18next.t("auto.feedback_forms_magadh_mahila_college_values_feedback_zll6uv")}
            `}</div>
          </div>
        </div>
      </div>
    </div>;
};
export default FeedbackForms;
