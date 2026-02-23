import React from 'react';
import { useTranslation } from 'react-i18next';

const CodeOfConduct = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Code of Conduct
          </h1>

          <div className="prose prose-gray max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              Academic Rules, Regulations & General Code Of Conduct

The Magadh Mahila College administration takes step for the better career building of students for which full cooperation from the students and their guardians is expected. The students admitted to this College are directed to abide by the following Rules /Regulations / General Code of Conduct:

Proper discipline has to be maintained within the College Premises.

It is mandatory to all students to put on the Identity Card inside the Campus

It is mandatory for the students to be in college uniform.

Students should strictly maintain silence in the Main Building Corridor

All fees must be paid as per the schedule, otherwise fine will be charged.

Students should be regular and punctual in attending Theory and Practical classes.

75% attendance in both Theory and Practical Classes is compulsory.

No student shall be allowed to appear in the University Examinations unless all her dues is cleared and she has declared ‘SENT-UP’ by the departmental committee.

Any student found misbehaving or caught adopting unfair practices during examination is liable for immediate expulsion from the examination hall and proper action will be taken against such students as per the rules of Patna University.

Use of Mobile Phone is strictly prohibited inside the campus. A fine of Rs. 1000/- will be levied if any student is found using it.

It is necessary to switch off all the fans and lights after the class is over.

Use of polythene inside the College Premises is prohibited.

Keep the College Campus clean

Save water, Save life, Save Planet

Don’t waste drinking water. It is necessary to close water tap after use

College furniture-like Chairs, Desks, Benches or Podium should not be removed from its proper place and not be made dirty.

It is mandatory for all students to take part in Extra-curricular and Co-curricular activities.

Bi-cycle, Scooter etc. shall be parked and locked only in the area provided for this purpose.

Students are directed not to take part in any type of ‘Dharna’ ‘Pradarshan’ and ‘Hartal’, “which affect the educational environment of the College and the University.

Ragging in any form is strictly prohibited. It is a punishable offence. Students involved in ragging may face expulsion from the college and university. Legal action may also be taken against them. Effected students may contact any member of the ‘Students Grievance Redressal Cell’ & “Anti-Ragging Cell” regarding any complain of ragging. They must also submit a written complaint regarding the same at the earliest in the Principal’s Office

The Management reserves the right to change any Rules / Regulations and provision given in the Display Board at short notice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
