// Portraits supplied in data files/Faculty Images. Existing photo associations
// remain in faculty.js; these explicit additions do not resolve identity reviews.
export const facultyPhotoOverrides = {
  'english-archana-jaiswal': 'Prof. Archana Jaiswal, Professor, Head, Department of English.jpeg',
  'botany-shilpi-kumari': 'Dr Shilpi Kumari.jpeg',
  'music-maa-amrit-disha': 'Dr. Maa Amrit Disha,Assistant Professor,Department of Music.jpeg',
  'sanskrit-sangeeta-roy': 'Dr. Sangeeta Roy,Assistant Professor,Department of Sanskrit.jpeg',
  'political-science-neena-kumari': 'Dr. Neena Kumari,Assistant Professor,Department of Political Science.jpeg',
};

export const getFacultyPhotoFilename = (faculty) => {
  if (facultyPhotoOverrides[faculty.id]) return facultyPhotoOverrides[faculty.id];
  if (!faculty.photo) return null;
  const filename = faculty.photo.split(/[?#]/)[0].split('/').pop();
  try {
    return decodeURIComponent(filename);
  } catch {
    return filename;
  }
};
