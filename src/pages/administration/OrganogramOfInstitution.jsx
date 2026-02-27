import i18next from "i18next";
import React from 'react';
const ORGANOGRAM_IMAGE = '/data files/Administration/Organogram of Institution/WhatsApp Image 2026-02-26 at 10.53.33 PM.jpeg';
const OrganogramOfInstitution = () => {
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{i18next.t("auto.organogram_of_institution_1osjh2z")}</h1>
      <p className="text-gray-600 mb-8">{i18next.t("auto.decentralized_administrative_structure_of_magadh_mahila_college_xym57c")}</p>

      <div className="max-w-5xl">
        <img src={ORGANOGRAM_IMAGE} alt={i18next.t("auto.organogram_of_institution_1osjh2z")} className="w-full h-auto rounded-lg shadow-md border border-gray-200" loading="lazy" data-skip-r2-rewrite="true" />
      </div>
    </div>;
};
export default OrganogramOfInstitution;
