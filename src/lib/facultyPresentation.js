export const getFacultyName = (faculty, t) =>
  faculty.nameKey ? t(faculty.nameKey, { defaultValue: faculty.name }) : faculty.name;

export const getFacultyDepartment = (faculty, t) =>
  t(`facultyDirectory.departments.${faculty.departmentId}`, { defaultValue: faculty.department });

export const getFacultyDesignation = (faculty, t) => {
  const keys = {
    Professor: 'professor',
    'Associate Professor': 'associateProfessor',
    'Assistant Professor': 'assistantProfessor',
    Principal: 'principal',
    'Guest Faculty': 'guest',
  };
  const key = keys[faculty.designation];
  return key ? t(`facultyDirectory.${key}`) : faculty.designation || '';
};
