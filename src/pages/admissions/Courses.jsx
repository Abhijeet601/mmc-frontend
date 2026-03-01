import i18next from "i18next";
import React from 'react';
const degreeProgrammeSections = [{
  title: 'HUMANITIES',
  rows: [{
    sl: '1',
    title: 'B.A. (Hons.) in English',
    duration: '4',
    intake: '60'
  }, {
    sl: '2',
    title: 'B.A. (Hons.) in Hindi',
    duration: '4',
    intake: '15'
  }, {
    sl: '3',
    title: 'B.A. (Hons.) in Maithili',
    duration: '4',
    intake: '10'
  }, {
    sl: '4',
    title: 'B.A. (Hons.) in Persian',
    duration: '4',
    intake: '10'
  }, {
    sl: '5',
    title: 'B.A. (Hons.) in Philosophy',
    duration: '4',
    intake: '15'
  }, {
    sl: '6',
    title: 'B.A. (Hons.) in Music',
    duration: '4',
    intake: '10'
  }, {
    sl: '7',
    title: 'B.A. (Hons.) in Sanskrit',
    duration: '4',
    intake: '10'
  }, {
    sl: '8',
    title: 'B.A. (Hons.) in Urdu',
    duration: '4',
    intake: '15'
  }]
}, {
  title: 'SOCIAL SCIENCES',
  rows: [{
    sl: '9',
    title: 'B.A. (Hons.) in Economics',
    duration: '4',
    intake: '60'
  }, {
    sl: '10',
    title: 'B.A. (Hons.) in History',
    duration: '4',
    intake: '60'
  }, {
    sl: '11',
    title: 'B.A. (Hons.) in Home Science',
    duration: '4',
    intake: '20'
  }, {
    sl: '12',
    title: 'B.A. (Hons.) in Mathematics',
    duration: '4',
    intake: '10'
  }, {
    sl: '13',
    title: 'B.A. (Hons.) in Political Science',
    duration: '4',
    intake: '60'
  }, {
    sl: '14',
    title: 'B.A. (Hons.) in Psychology',
    duration: '4',
    intake: '40'
  }, {
    sl: '15',
    title: 'B.A. (Hons.) in Sociology',
    duration: '4',
    intake: '60'
  }]
}, {
  title: 'SCIENCE',
  rows: [{
    sl: '16',
    title: 'B.Sc. (Hons.) in Botany',
    duration: '4',
    intake: '48'
  }, {
    sl: '17',
    title: 'B.Sc. (Hons.) in Chemistry (Bio Group)',
    duration: '4',
    intake: '32'
  }, {
    sl: '18',
    title: 'B.Sc. (Hons.) in Chemistry (Math Group)',
    duration: '4',
    intake: '32'
  }, {
    sl: '19',
    title: 'B.Sc. (Hons.) in Mathematics',
    duration: '4',
    intake: '43'
  }, {
    sl: '20',
    title: 'B.Sc. (Hons.) in Physics',
    duration: '4',
    intake: '32'
  }, {
    sl: '21',
    title: 'B.Sc. (Hons.) in Statistics',
    duration: '4',
    intake: '16'
  }, {
    sl: '22',
    title: 'B.Sc. (Hons.) in Zoology',
    duration: '4',
    intake: '48'
  }]
}, {
  title: 'VOCATIONAL / PROFESSIONAL COURSES (Under self financing Programme)',
  rows: [{
    sl: '23',
    title: 'Bachelor in Computer Applications (B.C.A.)',
    duration: '3',
    intake: '60'
  }]
}, {
  title: 'Under Graduate Degree Courses(Under Self-financing Programme)',
  rows: [{
    sl: '24',
    title: 'Bachelor Hons. Degree in Commerce (B. Com.)',
    duration: '4',
    intake: '250'
  }, {
    sl: '25',
    title: 'Bachelor of Business Administration (B.B.A.)',
    duration: '3',
    intake: '60'
  }, {
    sl: '26',
    title: 'Bachelor of Social Work (B.S.W.)',
    duration: '3',
    intake: '60'
  }]
}, {
  title: 'Post Graduate Degree Courses',
  rows: [{
    sl: '27',
    title: 'M.A. in Economics',
    duration: '2',
    intake: '60'
  }, {
    sl: '28',
    title: 'M.A. in Psychology',
    duration: '2',
    intake: '30'
  }, {
    sl: '29',
    title: 'M.Sc in Chemistry',
    duration: '2',
    intake: '20'
  }]
}];
const certificateCourses = [{
  sl: '34',
  title: 'Certificate Course in Computer Applications (CCCA) Compulsory for all B.A. / B.Sc. Students',
  duration: '45',
  intake: '80'
}, {
  sl: '35',
  title: 'Certificate Course in Basic English Language Proficiency Programme',
  duration: '90',
  intake: '50'
}, {
  sl: '36',
  title: 'Certificate Course in Basic Hindi Language Proficiency Programme',
  duration: '90',
  intake: '50'
}, {
  sl: '37',
  title: 'Certificate Course in German Language Proficiency Programme',
  duration: '180',
  intake: '50'
}, {
  sl: '38',
  title: 'Certificate Course in SPSS & Origin Pro. Software',
  duration: '90',
  intake: '50'
}, {
  sl: '39',
  title: 'Certificate Course in Health & Dietetics',
  duration: '180',
  intake: '50'
}, {
  sl: '40',
  title: 'Certificate Course in Health & Beauty Care',
  duration: '180',
  intake: '50'
}, {
  sl: '41',
  title: 'Certificate Courses Under FineArt Stream : i) Block Printing ii) Madhubani Painting iii) Tikuli Art iv) Jute Art, Craft and Design',
  duration: '90 (Each)',
  intake: '50 (Each)'
}, {
  sl: '42',
  title: 'Certificate Course in Japaness Language Proficiency Programme',
  duration: '180',
  intake: '50'
}, {
  sl: '43',
  title: 'Certificate Course in IT Skill Stream : Computer Graphics & Web-Designing Programme',
  duration: '180',
  intake: '50'
}, {
  sl: '44',
  title: 'Certificate Course in Management Stream : Office Management',
  duration: '180',
  intake: '50'
}];
const Courses = () => {
  const numberedDegreeProgrammeSections = React.useMemo(() => {
    let serial = 1;
    return degreeProgrammeSections.map(section => ({
      ...section,
      rows: section.rows.map(row => ({
        ...row,
        sl: String(serial++)
      }))
    }));
  }, []);

  const numberedCertificateCourses = React.useMemo(() => {
    return certificateCourses.map((course, index) => ({
      ...course,
      sl: String(index + 1)
    }));
  }, []);

  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{i18next.t("auto.programmes_kzend6", {
          defaultValue: 'Programs'
        })}</h1>

          <div className="space-y-6">

            {numberedDegreeProgrammeSections.map(section => <div key={section.title} className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-3 py-2 text-left text-gray-900">{i18next.t("auto.sl_376nn8", {
                        defaultValue: 'Sl.'
                      })}</th>
                        <th className="border border-gray-300 px-3 py-2 text-left text-gray-900">{i18next.t("auto.title_of_programme_1t17980", {
                        defaultValue: 'Title of Program'
                      })}</th>
                        <th className="border border-gray-300 px-3 py-2 text-left text-gray-900">{i18next.t("auto.duration_year_wmdg0l", {
                        defaultValue: 'Duration (Year)'
                      })}</th>
                        <th className="border border-gray-300 px-3 py-2 text-left text-gray-900">{i18next.t("auto.intake_capacity_per_year_hygnyd", {
                        defaultValue: 'Intake Capacity Per Year'
                      })}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map(row => <tr key={`${section.title}-${row.sl}-${row.title}`}>
                          <td className="border border-gray-300 px-3 py-2">{row.sl}</td>
                          <td className="border border-gray-300 px-3 py-2">{row.title}</td>
                          <td className="border border-gray-300 px-3 py-2">{row.duration}</td>
                          <td className="border border-gray-300 px-3 py-2">{row.intake}</td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>)}

            <p className="text-gray-700 font-medium">{i18next.t("auto.no_of_seats_in_b_a_hons_13uhlsg")}</p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">{i18next.t("auto.value_added_certificate_courses_only_for_college_bhw9aj")}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left text-gray-900">{i18next.t("auto.sl_376nn8", {
                      defaultValue: 'Sl.'
                    })}</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-gray-900">{i18next.t("auto.title_of_course_19z5369", {
                      defaultValue: 'Title of Course'
                    })}</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-gray-900">{i18next.t("auto.duration_in_days_1r7clsi", {
                      defaultValue: 'Duration (in Days)'
                    })}</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-gray-900">{i18next.t("auto.intake_capacity_per_year_hygnyd", {
                      defaultValue: 'Intake Capacity Per Year'
                    })}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {numberedCertificateCourses.map(course => <tr key={`cert-${course.sl}`}>
                        <td className="border border-gray-300 px-3 py-2">{course.sl}</td>
                        <td className="border border-gray-300 px-3 py-2">{course.title}</td>
                        <td className="border border-gray-300 px-3 py-2">{course.duration}</td>
                        <td className="border border-gray-300 px-3 py-2">{course.intake}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Courses;
