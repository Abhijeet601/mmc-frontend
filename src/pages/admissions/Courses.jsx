import React from 'react';
import { r2Url } from '@/lib/r2Assets';

const courseListImages = [
  r2Url('images/admissions/courses/course-list-1.jpg'),
  r2Url('images/admissions/courses/course-list-2.jpg'),
  r2Url('images/admissions/courses/course-list-3.jpg')
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {courseListImages.map((src, index) => (
              <div key={src} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={src}
                  alt={`Course list ${index + 1}`}
                  className="w-full h-auto object-contain bg-white"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
