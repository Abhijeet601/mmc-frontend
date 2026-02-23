import React from 'react';
import { useTranslation } from 'react-i18next';

const FeedbackForms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Feedback Forms
          </h1>

          <div className="prose prose-gray max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              Feedback Forms

Magadh Mahila College values feedback from students, faculty, and stakeholders to continuously improve our services and educational quality. We provide various feedback forms to gather insights on teaching, infrastructure, facilities, and overall experience.

Available Feedback Forms:
- Student Feedback on Teaching
- Infrastructure and Facilities Feedback
- Library Services Feedback
- Hostel and Accommodation Feedback
- General College Experience Feedback

Please fill out the relevant feedback forms to help us enhance our institution. Your feedback is confidential and greatly appreciated.

For access to feedback forms, please contact the IQAC Cell or visit the college website.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForms;
