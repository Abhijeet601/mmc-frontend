import i18next from "i18next";
import React from 'react';
const PGAdmission = () => {
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{i18next.t("auto.p_g_admission_1p2r2yj")}</h1>
      <p>{i18next.t("auto.placeholder_content_for_p_g_admission_page_y7n5dj")}</p>
    </div>;
};
export default PGAdmission;
