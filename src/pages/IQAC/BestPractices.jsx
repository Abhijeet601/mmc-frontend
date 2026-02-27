import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { r2Url } from '@/lib/r2Assets';
import { useTranslation } from 'react-i18next';
const researchPractices = ['To encourage hands-on learning, undergraduate and postgraduate students are assigned minor research projects under the guidance of their respective department faculty members as supervisors.', 'These projects culminate in a yearly PowerPoint presentation, where selected projects are published in the college\'s peer-reviewed journal "Jigyasa" (ISSN.no.2279-0551).', 'Every department has an offline subscription (annual, three-year, lifetime) to one renowned journal of the related subject, with a frequency of weekly, quarterly, or half-yearly.', 'The college has signed an MOU with the International Benevolent Research Foundation (IBRF), Kolkata to cooperate in academic exchange, programme development, and research.', 'MMC subscribes to the N-LIST (National Library and Information Services Infrastructure for Scholarly Content) platform under INFLIBNET, granting access to an extensive collection of academic resources, including Springer e-books, Sage Publications, Indian Journals, Cambridge University Press materials, JSTOR, and ISID databases.', 'The college adheres strictly to plagiarism guidelines for all academic and research outputs, ensuring integrity in scholarly contributions.', 'International and national conferences, workshops, seminars and awareness drives are organized regularly to provide wide avenues for students.'];
const sustainabilityPractices = ['The college has conducted one International Conference on "5th World Clean Environment Summit on Technological Innovation for Climate Change Mitigation and Global Warming" from 12-14 December 2023. It was organized under the joint aegis of IQAC, Magadh Mahila College, IBRF Kolkata, in collaboration with DNET Patna and CIU New Delhi. It was attended by 150 faculty and students. Various papers and posters focusing on global warming and effects of climate change were presented.', 'A National Seminar on "Trends in Green Chemistry and Sustainable Development" (TGCSD-2024) from 20-21 February 2024 was organized by the Department of Chemistry, in collaboration with IQAC, Magadh Mahila College and the Indian Science Congress Association, Patna. It was attended by more than 200 students and 100 faculty members and research scholars. Papers and posters focusing on sustainable development were presented.', 'The Department of Botany established a solid waste management pit on campus under the supervision of Dr. Surendra Kumar Prasad, Associate Professor, Department of Botany. This initiative transforms organic waste, including plant leaves and food residues from the hostel mess, into nutrient-rich bio-manure distributed to faculty and staff at a nominal cost.', 'To further advance sustainability, MMC has installed a 100 KWP solar power plant across the campus including the main building rooftops and Mahima hostel.', 'The college has replaced traditional lighting systems with energy-efficient CFL and LED lamps. Staff and students are encouraged to conserve energy by switching off lights and fans when not in use.', 'The NCC, NSS unit and Sehat Kendra promote eco-friendly practices through awareness programmes, social work drives and outreach activities.', 'The college has signed an MOU with Tarumitra, a non-profit environmental organization, Digha, Patna to foster environmental consciousness and implement sustainability practices on campus.', 'Faculty members show their sensitization and responsibility towards sustainable development by publishing academic papers in prestigious journals and presenting research papers in national and international seminars.'];
const sustainabilityEvidence = ['In 2023-24, approximately 20 kg of manure has been produced and distributed in the process of solid waste management, contributing to effective waste utilization and promoting eco-friendly practices.', 'The installation of the solar power plant in college has significantly reduced electricity bills by nearly 40%.', 'The installation of LED lamps in college has resulted in 80-90% less energy consumption with longer lifespan.'];
const galleryImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
const sectionAnimation = {
  initial: {
    opacity: 0,
    y: 20
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.5
  }
};
const BestPractices = () => {
  const { t } = useTranslation();
  const researchObjectives = [t("auto.to_stimulate_research_culture_in_among_students_1dxly46"), t("auto.to_promote_interdisciplinary_studies_1nxebs"), t("auto.to_identify_areas_of_problems_and_their_17t8i8"), t("auto.to_gather_and_enhance_knowledge_in_the_k12xyn"), t("auto.to_develop_analytical_skills_and_rational_thinking_e3xj58")];
  const sustainabilityObjectives = [t("auto.to_promote_environmental_sustainable_practices_among_students_h6rnx2"), t("auto.to_promote_social_responsibility_in_the_community_17a1ogq"), t("auto.to_achieve_ecological_balance_through_efficient_utilization_18iw4kf"), t("auto.to_spread_awareness_among_students_and_faculties_uwxnvy")];
  return <>
      <Helmet>
        <title>{t("auto.best_practices_2023_24_iqac_magadh_mahila_1yr1poj")}</title>
        <meta name="description" content="Best Practices 2023-24 of IQAC, Magadh Mahila College: Promotion of Research, Sustainability Initiatives, and Photo Gallery." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/iqac" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8">
            <ChevronRight className="w-4 h-4 rotate-180" />{`
            ${t("auto.back_to_iqac_1o3axbj")}
          `}</Link>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{`
              ${t("auto.best_practices_1limix9")} `}<span className="text-primary">2023-24</span>
            </h1>
          </motion.div>

          <div className="space-y-8">
            <motion.section {...sectionAnimation} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{t("auto.1_promotion_of_research_fkjiu1")}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t("auto.the_context_oisz4z")}</h3>
                  <p className="text-foreground leading-relaxed">{`
                    ${t("auto.mmc_is_solemnly_dedicated_to_foster_research_ld1um9")}
                  `}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t("auto.the_objectives_14jiktc")}</h3>
                  <ul className="space-y-2">
                    {researchObjectives.map(item => <li key={item} className="flex items-start gap-2 text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t("auto.the_practices_1tkb2lw")}</h3>
                  <ul className="space-y-2">
                    {researchPractices.map(item => <li key={item} className="flex items-start gap-2 text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t("auto.recognition_to_efforts_kgd2zq")}</h3>
                  <p className="text-foreground leading-relaxed">{`
                    ${t("auto.prof_dr_namita_kumari_principal_of_the_196p1fa")}
                  `}</p>
                </div>
              </div>
            </motion.section>

            <motion.section {...sectionAnimation} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{t("auto.2_sustainability_initiatives_b5lvrn")}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t("auto.the_context_oisz4z")}</h3>
                  <p className="text-foreground leading-relaxed">{`
                    ${t("auto.sustainable_development_is_an_approach_to_growth_w7k1f2")}
                  `}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t("auto.the_objectives_14jiktc")}</h3>
                  <ul className="space-y-2">
                    {sustainabilityObjectives.map(item => <li key={item} className="flex items-start gap-2 text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t("auto.the_practices_1tkb2lw")}</h3>
                  <ul className="space-y-2">
                    {sustainabilityPractices.map(item => <li key={item} className="flex items-start gap-2 text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t("auto.evidence_of_success_u7kk3g")}</h3>
                  <ul className="space-y-2">
                    {sustainabilityEvidence.map(item => <li key={item} className="flex items-start gap-2 text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t("auto.recognition_to_efforts_kgd2zq")}</h3>
                  <p className="text-foreground leading-relaxed mb-3">{`
                    ${t("auto.magadh_mahila_college_received_certificate_of_achievement_1ni8gvt")}
                  `}</p>
                  <p className="text-foreground leading-relaxed">{`
                    ${t("auto.dr_amrita_prasad_department_of_chemistry_received_mu1vlb")}
                  `}</p>
                </div>
              </div>
            </motion.section>

            <motion.section {...sectionAnimation} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{t("auto.best_practices_photo_gallery_dvcpt0")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {galleryImages.map((imageName, index) => <motion.div key={imageName} initial={{
                opacity: 0,
                scale: 0.98
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.35,
                delay: index * 0.03
              }} className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                    <img src={r2Url(`images/iqac/best-practices/${imageName}`)} alt={`Best Practices activity ${index + 1}`} className="w-full h-64 object-cover" loading="lazy" />
                  </motion.div>)}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </>;
};
export default BestPractices;
