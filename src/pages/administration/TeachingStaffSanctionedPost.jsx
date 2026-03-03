import i18next from "i18next";
import React from 'react';
const TeachingStaffSanctionedPost = () => {
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{i18next.t("auto.teaching_staff_sanctioned_post_1ar0tsy")}</h1>
      {/* display sanctioned post image */}
      <div className="mb-8">
        <img
          src="https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/data%20files/Teaching%20Staff%20Sanctioned%20Post.jpg.jpeg"
          alt="Teaching Staff Sanctioned Post"
          className="w-full h-auto rounded shadow"
        />
      </div>
      <p>{i18next.t("auto.placeholder_content_for_teaching_staff_sanctioned_post_msvla")}</p>
    </div>;
};
export default TeachingStaffSanctionedPost;
