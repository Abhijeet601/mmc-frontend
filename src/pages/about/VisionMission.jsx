import i18next from "i18next";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';
const VisionMission = () => {
  const {
    t
  } = useTranslation();
  return <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {t('nav.aboutSub.visionMissionCoreValues')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{i18next.t("auto.our_vision_k0qey1")}</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>{i18next.t("auto.to_be_a_leader_in_the_field_3zlca6")}</p>
                  <p>{i18next.t("auto.to_give_direction_to_the_students_to_117aw6c")}</p>
                  <p>{i18next.t("auto.empowering_students_with_value_based_knowledge_and_tg7yvo")}</p>
                  <p>{i18next.t("auto.to_develop_leaders_with_new_ideas_and_4h3x0b")}</p>
                  <p>{i18next.t("auto.to_be_the_centre_of_excellence_in_l4pitg")}</p>
                  <p>{i18next.t("auto.on_the_banks_of_holy_ganga_the_19fpk1m")}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{i18next.t("auto.our_mission_1gebmm9")}</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>{i18next.t("auto.our_mission_is_to_ensure_wholesome_holistic_fncnpo")}</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>{i18next.t("auto.to_become_a_centre_of_excellence_in_kdy2ry")}</li>
                    <li>{i18next.t("auto.a_stimulating_learning_environment_through_new_and_1twou2b")}</li>
                    <li>{i18next.t("auto.to_create_women_leaders_and_to_make_1famsno")}</li>
                    <li>{i18next.t("auto.culturally_rich_environment_linking_education_to_the_1gdq3ri")}</li>
                    <li>{i18next.t("auto.to_provide_dedicated_and_responsive_scholars_as_ouh01k")}</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{i18next.t("auto.our_core_values_w9kyb2")}</h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>{i18next.t("auto.discipline_1zev1r")}</li>
                      <li>{i18next.t("auto.humanity_ezf6e6")}</li>
                      <li>{i18next.t("auto.sincerity_cuchgh")}</li>
                      <li>{i18next.t("auto.dedication_r613hz")}</li>
                      <li>{i18next.t("auto.honesty_vznnsn")}</li>
                      <li>{i18next.t("auto.team_works_1659zzb")}</li>
                    </ul>
                  </div>
                  <div className="text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>{i18next.t("auto.excellence_2ekw6r")}</li>
                      <li>{i18next.t("auto.morality_t4i1uk")}</li>
                      <li>{i18next.t("auto.social_responsibility_de9hma")}</li>
                      <li>{i18next.t("auto.inclusiveness_14i5kze")}</li>
                      <li>{i18next.t("auto.ethics_and_dignity_1i5hcj2")}</li>
                      <li>{i18next.t("auto.indian_values_1lfke6w")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-gray-700 leading-relaxed">
                <p>{i18next.t("auto.empowering_students_with_academic_cultural_administrative_knowledge_hbtagi")}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <img src={r2Url('documents/about/vision-mission/mmc_vision_mission_hindi.jpg')} alt={i18next.t("auto.vision_mission_hindi_1har8j3")} className="max-w-full h-auto rounded-lg shadow-lg object-contain" style={{
              maxHeight: '600px'
            }} />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default VisionMission;
