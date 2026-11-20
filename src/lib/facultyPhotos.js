import { getFacultyPhotoFilename } from '@/data/facultyPhotoFiles';

// Vite emits these original, supplied portraits with the production assets.
const bundledPhotos = import.meta.glob('../assets/faculty/*.jpeg', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const getLocalFacultyPhoto = (faculty) => {
  const filename = getFacultyPhotoFilename(faculty);
  return filename ? bundledPhotos[`../assets/faculty/${filename}`] || null : null;
};
