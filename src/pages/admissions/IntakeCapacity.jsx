import i18next from "i18next";
import React from 'react';
const IntakeCapacity = () => {
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{i18next.t("auto.intake_capacity_ob2i19")}</h1>
      <p>{i18next.t("auto.placeholder_content_for_intake_capacity_page_3lz9ep")}</p>
    </div>;
};
export default IntakeCapacity;
