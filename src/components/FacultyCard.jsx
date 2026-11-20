import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';
import { getLocalFacultyPhoto } from '@/lib/facultyPhotos';
import { getFacultyName, getFacultyDepartment, getFacultyDesignation } from '@/lib/facultyPresentation';
import './faculty.css';

const FacultyCard = ({ faculty, headingLevel = 3 }) => {
  const { t } = useTranslation();
  const [failedPhoto, setFailedPhoto] = useState(null);
  const name = getFacultyName(faculty, t);
  const department = getFacultyDepartment(faculty, t);
  const designation = getFacultyDesignation(faculty, t);
  const Heading = `h${headingLevel}`;
  const localPhoto = getLocalFacultyPhoto(faculty);
  const photo = localPhoto || faculty.photo;
  const photoUrl = localPhoto || (photo && (/^https?:\/\//.test(photo) || photo.startsWith('/')
    ? r2Url(photo)
    : r2Url(`images/faculty/${encodeURIComponent(photo)}`)));
  const initials = faculty.name.replace(/\b(?:prof|dr|ms|mr|mrs)\.?/gi, '')
    .replace(/[()]/g, '').trim().split(/\s+/).filter(Boolean)
    .slice(0, 2).map(part => part[0]).join('').toUpperCase();

  return (
    <article data-faculty-id={faculty.id} className="faculty-card h-full rounded-2xl border border-border bg-background p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 text-2xl font-bold text-foreground">
          {photoUrl && failedPhoto !== photo ? (
            <img src={photoUrl} data-skip-r2-rewrite={localPhoto ? 'true' : undefined} alt={name} loading="lazy" width="96" height="96"
              className="h-full w-full object-contain" onError={() => setFailedPhoto(photo)} />
          ) : <span aria-hidden="true">{initials}</span>}
        </div>
        {faculty.isHOD && <span className="rounded-full bg-navbar px-3 py-1.5 text-sm font-semibold text-navbar-foreground">
          {t('facultyDirectory.hod')}
        </span>}
      </div>
      <Heading className="text-lg font-bold leading-snug text-foreground">{name}</Heading>
      {designation && <p className="mt-2 text-base text-foreground">{designation}</p>}
      {faculty.employmentCategory === 'guest' && designation !== t('facultyDirectory.guest') && (
        <p className="mt-1 text-sm text-muted-foreground">{t('facultyDirectory.guest')}</p>
      )}
      <p className="mt-3 text-sm text-muted-foreground">
        {t('facultyDirectory.department')}: <span className="text-foreground">{department}</span>
      </p>
      {faculty.responsibility && <p className="mt-2 text-sm text-foreground">
        {faculty.responsibility === 'Coordinator' ? t('facultyDirectory.coordinator') : faculty.responsibility}
      </p>}
      {faculty.specialization && <p className="mt-2 text-sm text-foreground">
        {t('facultyDirectory.appointment')}: {faculty.specialization === 'Environmental Science'
          ? t('facultyDirectory.environmentalScience') : faculty.specialization}
      </p>}
      {faculty.deputationDepartment && <p className="mt-2 text-sm font-medium text-foreground">
        {t('facultyDirectory.deputedTo', { department: t(`facultyDirectory.departments.${faculty.deputationDepartment.toLowerCase().replace(/\s+/g, '-')}`, { defaultValue: faculty.deputationDepartment }) })}
      </p>}
    </article>
  );
};

export default FacultyCard;
