import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const BestPractices2023 = () => {
  return (
    <>
      <Helmet>
        <title>Best Practices 2023-24 - IQAC | Magadh Mahila College</title>
        <meta name="description" content="Explore best practices and innovative initiatives implemented in 2023-24 at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Best Practices 2023-24</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Innovative practices and successful initiatives implemented during the academic year.
              </p>
            </motion.div>

            {/* Best Practices Content */}
            <div className="space-y-16">
              {/* Promotion of Research */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-border"
              >
                <h2 className="text-3xl font-bold mb-6 text-primary">Promotion of Research</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Context</h3>
                    <p className="text-muted-foreground">
                      MMC is solemnly dedicated to foster research practices among students and faculties and promises unwavering commitment in providing a platform for academicians to discuss emerging research trends, so as to offer valuable networking opportunities for faculty and students. To facilitate this, the institution supports research through a well-developed infrastructure, offering online and offline resources. Facilities such as the library, research laboratories, computer lab, reading room, and ICT-enabled classrooms enhance research output, benefiting the academic growth of both teachers and students.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Objectives</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>To stimulate research culture among students</li>
                      <li>To promote interdisciplinary studies</li>
                      <li>To identify areas of problems and their respective solutions</li>
                      <li>To gather and enhance knowledge in the area of study</li>
                      <li>To develop analytical skills and rational thinking</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Practices</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>To encourage hands-on learning, undergraduate and postgraduate students are assigned minor research projects under the guidance of their respective department faculty members as supervisors</li>
                      <li>These projects culminate in a yearly PowerPoint presentation, where selected projects are published in the college's peer-reviewed journal "Jigyasa" (ISSN.no.2279-0551.)</li>
                      <li>Every Department has an offline subscription (Annual, three-year, lifetime) to one renowned journal of the related subject, with a frequency of Weekly, Quarterly, or half-yearly.</li>
                      <li>The College has signed an MOU with the International Benevolent Research Foundation (IBRF) Kolkata to cooperate in Academic Exchange, Programme Development, and Research.</li>
                      <li>MMC subscribes to the N-LIST (National Library and Information Services Infrastructure for Scholarly Content) platform under INFLIBNET, granting access to an extensive collection of academic resources, including Springer e-books, Sage Publications, Indian Journals, Cambridge University Press materials, JSTOR, and ISID databases.</li>
                      <li>The college adheres strictly to plagiarism guidelines for all academic and research outputs, ensuring integrity in scholarly contributions.</li>
                      <li>International and National conferences, workshops, seminars and awareness drives are organized regularly to provide wide avenues for students.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Recognition to Efforts</h3>
                    <p className="text-muted-foreground">
                      Prof. Dr. Namita Kumari, Principal of College has received "Bharat Shiksha Ratan Award" from International Benevolent Research Foundation, Kolkata for imparting a significant contribution in the field of research.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Sustainability Initiatives */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-border"
              >
                <h2 className="text-3xl font-bold mb-6 text-primary">Sustainability Initiatives</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Context</h3>
                    <p className="text-muted-foreground">
                      Sustainable development is an approach to growth and human development that aims to meet the needs of the present generation without compromising the ability of future generations to meet their own needs. MMC values sustainable development as the need of the hour and shows staunch and persistence support by endeavouring socially, economically and culturally for clean and green environment and ecological protection.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Objectives</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>To promote environmental sustainable practices among students and faculty</li>
                      <li>To promote social responsibility in the community</li>
                      <li>To achieve ecological balance through efficient utilization of resources</li>
                      <li>To spread awareness among students and faculties in educational institutions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Practices</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>The college has conducted one International conference on "5th World Clean Environment Summit on 'Technological Innovation for Climate Change Mitigation and Global Warming'" from 12–14th December 2023. It was organised under the joint aegis of IQAC, Magadh Mahila College, IBRF, Kolkata, In collaboration with DNET, Patna and CIU, New Delhi. It was attended by 150 faculty and students. Various types of papers and posters focusing on global warming and effects of climate change were presented during this event.</li>
                      <li>A National seminar on "Trends in Green Chemistry and Sustainable Development" (TGCSD-2024) from 20-21st February 2024 was organized by the Department of Chemistry, in collaboration with IQAC, Magadh Mahila College and the Indian Science Congress Association, Patna. It was attended by more than 200 students and 100 faculties and research scholars. Various types of papers and posters focusing on sustainable development were presented during this event.</li>
                      <li>The Department of Botany has taken a significant step towards sustainability by establishing a solid waste management pit on campus under the supervision of Dr. Surendra Kumar Prasad, Associate Professor, Department of Botany. This initiative transforms organic waste, including plant leaves and food residues from the hostel mess, into nutrient-rich bio-manure. The manure is distributed to faculty and staff at a nominal cost, with the intention to aware & use vermi compost in plants and avoid chemical fertilisers.</li>
                      <li>To further advance sustainability, MMC has installed a 100 KWP solar power plant across the campus including the main building's rooftops and Mahima hostel.</li>
                      <li>The college has replaced traditional lighting systems with energy-efficient CFL and LED lamps. Staff and students are encouraged to conserve energy by switching off lights and fans when not in use.</li>
                      <li>The NCC, NSS unit & Sehat Kendra intent on to promote concerns on eco friendly practices through various awareness programme, social works drive and outreach activities.</li>
                      <li>The College has signed an MOU with Tarumitra, a non-profit environmental organization, Digha, Patna to foster environmental consciousness and implement sustainability practices in campus.</li>
                      <li>The Faculties of colleges show their sensitisation and responsibilities towards sustainable development by publishing their academic paper in prestigious journals periodically and presenting research papers in National and International seminars.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Evidence of Success</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>In 2023-24, approximately 20 kg of manure has been produced and distributed in the process of solid waste management contributing to effective waste utilization and promoting eco-friendly practices.</li>
                      <li>This installation of solar power plant in college has significantly reduced electricity bills by nearly 40%.</li>
                      <li>The installation of LED lamps in college has resulted in 80 – 90% less energy consumption providing longer lifespan.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Recognition to Efforts</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Magadh Mahila College received award – Certificate of Achievement Green School Programme for Securing 5-star rating given by Bihar State Pollution Control Board Department of Environment, Forest and Climate Change, Government of Bihar, Patna on 5th June, 2023.</li>
                      <li>Dr. Amrita Prasad, Department of Chemistry, received the Best Oral Presentation Award at the International Conference on "Technological Innovations for Climate Change Mitigation and Global Warming." from IBRF, Kolkata.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BestPractices2023;
