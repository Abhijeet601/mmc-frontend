import React from 'react';
import { useTranslation } from 'react-i18next';

const CodeOfEthics = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Code of Ethics
          </h1>

          <div className="prose prose-gray max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              Code of Ethics to Check Malpractices and Plagiarism in Research The institution is committed to producing and promoting research and
scholarship of the highest order, unadulterated with plagiarism and other unethical practices, all this, while endeavouring to maintain academic freedom and innovation. The college invites its teachers and students to abide by the highest standards of integrity in their conduct of academic research and/or support to academic research activities, which include the following:

No form of plagiarism allowed. Plagiarism takes many forms viz. "passing off" another's paper as one's own, copying or paraphrasing substantial parts of
another's work without due acknowledgement, and claiming credit for another's research;

Use of appropriate plagiarism checks- both manual and technical – such as, use of software to catch instances of plagiarism during review;

In the event of the teachers/students attending/participating in any conference, permission must be sought from the Principal, highlighting the purpose of the
visit;

Many of our faculty members serve as reviewers on editorial boards of many prestigious journals, and adhere to the strictest standards to ensure good quality publications.

Our college also organizes conferences and seminars on pressing issues calling for academic inquiry, and while selecting papers for the same, places strong emphasis on the standard of research, original thought and expression, and multiple layers of review.

We also keep our teachers and students informed of appropriate guidelines for publication in various journals, including those recognized by the UGC;

Our library is stocked with renowned journals from the world over, acting as a mirror for quality research and writing, for our teachers and students – a veritable
tool that they can employ by emulating the standards of these publications.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfEthics;
