import i18next from "i18next";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Calendar, Award, ChevronRight, MapPin, Camera, Video } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const NAACPeerTeamVisit = () => {
  useTranslation();
  const [expandedVisitId, setExpandedVisitId] = useState('first-cycle');
  const visits = [{
    id: 'first-cycle',
    cycle: '1st Cycle Visit',
    title: i18next.t("auto.1st_cycle_visit_vcbzf6"),
    dates: '4th to 6th October, 2004',
    location: 'Magadh Mahila College, Patna',
    team: ['Professor Nityananda Saha, Vice-Chancellor, University of Kalyani, Kalyani, West Bengal (Chairperson)', 'Professor Mohit K. Ray, Professor of English, University of Burdwan, Burdwan, West Bengal (Member-Coordinator)', 'Professor Nihar Ranjan Patnaik, Professor of History, Ravenshaw College, Cuttack, Orissa (Member)'],
    coordinator: 'Mr. B.R. Manjunath, Academic Consultant, NAAC.',
    result: 'Grade B++ with Institutional Score 81.75',
    resultDate: '4th November, 2004',
    description: i18next.t("auto.the_magadh_mahila_college_patna_volunteered_to_rcg1i0")
  }, {
    id: 'second-cycle',
    cycle: '2nd Cycle NAAC Visit',
    title: i18next.t("auto.2nd_cycle_naac_visit_10100lt"),
    dates: '11th to 13th October, 2012',
    location: 'Magadh Mahila College, Patna',
    team: ['Prof. K Nirupa Rani, Former Vice-Chancellor, Adikavi Nannaya University, Rajahmundry, AP; Professor of English, Andhra University, Visakhapatnam (Chairperson)', 'Prof. (Dr.) Sanjukta Bhattacharya, Professor, Department of International Relations, Jadavpur University, Kolkata, West Bengal (Member-Coordinator)', 'Dr. Kavita Rege, Principal, Sathaye College, Dixit Road, Ville Parle (Member)'],
    coordinator: 'Dr. Ganesh Hegde, Assistant Advisor, NAAC, Bengaluru.',
    result: 'A Grade (CGPA 3.02)',
    resultDate: '5th January, 2013',
    description: i18next.t("auto.the_magadh_mahila_college_patna_volunteered_to_yg6yj3")
  }, {
    id: 'third-cycle',
    cycle: '3rd Cycle NAAC Visit',
    title: i18next.t("auto.3rd_cycle_naac_visit_1ofirqk"),
    dates: '18th to 19th March, 2019',
    location: 'Magadh Mahila College, Patna',
    team: ['Mr. Dharmarajan P K, Samskrithi, Kalady, Ernakulam, Kerala (Chairperson)', 'Dr. Madhu Raka, Department of Mathematics, Chandigarh (Member-Coordinator)', 'Dr. Pushpa Ranade, Pratham Patwardhan Baug, Pune, Maharashtra (Member)'],
    coordinator: 'Dr. Priya Narayanan, Assistant Adviser, NAAC, Bangalore.',
    result: 'B Grade',
    resultDate: '28th March, 2019',
    description: i18next.t("auto.the_magadh_mahila_college_patna_volunteered_to_33j1ns")
  }, {
    id: 'third-cycle-revisit',
    cycle: '3rd Cycle Re-Visit of NAAC',
    title: i18next.t("auto.3rd_cycle_re_visit_of_naac_9l7wan"),
    dates: '28th to 29th November, 2019',
    location: 'Magadh Mahila College, Patna',
    team: ['Dr. Shukla Mahanty, Vice-chancellor, Kolhan University, Chaibasa, Jharkhand (Chairperson)', 'Dr. Aparajita Chowdhury, Professor of Home Science, Berhampur University, Berhampur, Orissa (Member-Coordinator)', 'Dr. Varinder Kaur Thind, Former Principal, Khalsa College for Women, Ludhiana, Punjab (Member)'],
    coordinator: 'Dr. Priya Narayanan, Assistant Adviser, NAAC, Bangalore.',
    result: 'Grade B+ with CGPA of 2.54',
    resultDate: '8th January, 2020',
    description: i18next.t("auto.the_college_submitted_an_appeal_application_to_b7m6kq")
  }];
  const peerTeamVisitPhotos = ['Schedule of NAAC Peer Team Visit (Day 1 & Day 2)', 'NAAC Peer Team Visit Report (Day 1 & Day 2)', 'Exit Meeting Report (19th March, 2019)', 'PPT Slides / Reports Presented by the Principal', 'Photographs of NAAC Peer Team Visit (Day 1 & Day 2)', 'MAGADH MAHILA COLLEGE - At a Glance'];
  const selectedVisit = visits.find(visit => visit.id === expandedVisitId);
  return <>
      <Helmet>
        <title>{i18next.t("auto.naac_peer_team_visit_magadh_mahila_college_1v9owau")}</title>
        <meta name="description" content="Details of NAAC peer team visits and accreditation records at Magadh Mahila College." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/iqac" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8">
            <ChevronRight className="w-4 h-4 rotate-180" />{`
            ${i18next.t("auto.back_to_iqac_1o3axbj")}
          `}</Link>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{`
              ${i18next.t("auto.naac_yjoq3s")} `}<span className="text-primary">{i18next.t("auto.peer_team_visit_1f0ump7")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl">{`
              ${i18next.t("auto.the_following_records_contain_cycle_wise_naac_6u8wfg")}
            `}</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-10">
            {visits.map(visit => <button key={visit.id} onClick={() => setExpandedVisitId(visit.id)} className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${expandedVisitId === visit.id ? 'bg-primary text-white shadow-lg' : 'bg-white text-foreground border border-gray-200 hover:border-primary'}`}>
                {visit.cycle}
              </button>)}
          </div>

          {selectedVisit && <motion.div key={selectedVisit.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">{selectedVisit.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">{i18next.t("auto.visit_dates_5xv64z")}</p>
                    <p className="text-foreground font-medium">{selectedVisit.dates}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">{i18next.t("auto.location_wof33s")}</p>
                    <p className="text-foreground font-medium">{selectedVisit.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">{i18next.t("auto.result_1igq9u4")}</p>
                    <p className="text-foreground font-medium">{selectedVisit.result}</p>
                    <p className="text-xs text-muted-foreground mt-1">{`${i18next.t("auto.published_1q3i5hj")} `}{selectedVisit.resultDate}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />{`
                  ${i18next.t("auto.peer_team_members_ekei55")}
                `}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedVisit.team.map((member, idx) => <div key={idx} className="flex gap-3 p-4 bg-primary/5 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{member}</span>
                    </div>)}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-foreground mb-3">{i18next.t("auto.visit_description_1ifze4y")}</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedVisit.description}</p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{i18next.t("auto.visit_coordinator_79c184")}</span> {selectedVisit.coordinator}
                </p>
              </div>
            </motion.div>}

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-foreground mb-6">{i18next.t("auto.naac_visits_media_usk8xa")}</h2>
            <div className="flex items-start gap-3 mb-6">
              <Video className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">{i18next.t("auto.naac_visits_images_and_videos_link_will_e86vqy")}</p>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              <Camera className="w-5 h-5 text-primary" />{`
              ${i18next.t("auto.peer_team_visit_photos_1ejavx0")}
            `}</h3>
            <p className="text-muted-foreground mb-4">{i18next.t("auto.naac_peer_team_visit_report_3rd_cycle_tkfbf1")}</p>

            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              {peerTeamVisitPhotos.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
          </motion.div>
        </div>
      </div>
    </>;
};
export default NAACPeerTeamVisit;
