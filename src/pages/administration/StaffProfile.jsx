import i18next from "i18next";
import React from 'react';
const StaffProfile = () => {
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{i18next.t("auto.staff_profile_819vpk")}</h1>
      <p>{i18next.t("auto.placeholder_content_for_staff_profile_page_1trt1no")}</p>
    </div>;
};
export default StaffProfile;
