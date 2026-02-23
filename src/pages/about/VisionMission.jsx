import React from 'react';
import { useTranslation } from 'react-i18next';
import { r2Url } from '@/lib/r2Assets';

const VisionMission = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {t('nav.aboutSub.visionMissionCoreValues')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>To be a leader in the field of higher education by providing innovative learning environment through academic pursuit of excellence, community involvement and empowerment with traditional values to bring qualitative change in the society</p>
                  <p>To give direction to the students to accomplish self-learning with Indian values, openness and creativity to sustain themselves in the changing societal and economic environment</p>
                  <p>Empowering students with value-based knowledge and skill that enable them to cope up and compete with the demands of modern age.</p>
                  <p>To develop leaders with new ideas and capacity to make difference in themselves and society by upholding values of respect and humanism</p>
                  <p>To be the centre of excellence in education, skill development and lifelong learning</p>
                  <p>On the banks of Holy Ganga, the college provides perennial flowing environment of self-learning, to become flexible to meet the women centric challenges by inculcating innovative educational methods</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Our mission is to ensure wholesome, holistic education so that the pursuit of knowledge efficiently helps to combat the challenges a student faces in her life. The college is committed to the holistic development of students so as to make an effective contribution to creation of healthy society. To this end we strive:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>To become a Centre of Excellence in higher education for women in healthy environment</li>
                    <li>A stimulating learning environment through new and innovative academic programmes</li>
                    <li>To create women leaders and to make them agents of social change</li>
                    <li>Culturally rich environment linking education to the outside world</li>
                    <li>To provide dedicated and responsive scholars as faculty</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Discipline</li>
                      <li>Humanity</li>
                      <li>Sincerity</li>
                      <li>Dedication</li>
                      <li>Honesty</li>
                      <li>Team-works</li>
                    </ul>
                  </div>
                  <div className="text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Excellence</li>
                      <li>Morality</li>
                      <li>Social Responsibility</li>
                      <li>Inclusiveness</li>
                      <li>Ethics and Dignity</li>
                      <li>Indian Values</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-gray-700 leading-relaxed">
                <p>Empowering students with academic, cultural, administrative knowledge and skill to cope up with the challenges of emerging global knowledge and parameters with holistic approach towards progress and overall development is the main goal of institution which reflects in the vision and mission of the college. The proactive, pre-emptive, sincere and dedicated approach of the entire stakeholders including Principal, faculty members, non-teaching staff, students and parents/ guardians substantially contribute in developing and implementing the quality policy and plans in order to uphold the vision, mission and core values of the college.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={r2Url('documents/about/vision-mission/mmc_vision_mission_hindi.jpg')}
                alt="Vision Mission Hindi"
                className="max-w-full h-auto rounded-lg shadow-lg object-contain"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
