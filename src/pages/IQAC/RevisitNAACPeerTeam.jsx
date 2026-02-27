import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const RevisitNAACPeerTeam = () => {
  useTranslation();
  return <>
      <Helmet>
        <title>{i18next.t("auto.revisit_of_naac_peer_team_magadh_mahila_1bgxwvd")}</title>
        <meta name="description" content="Information about the NAAC Peer Team revisit and follow-up assessment at Magadh Mahila College." />
      </Helmet>

      <div className="pt-0">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary">{i18next.t("auto.revisit_of_naac_peer_team_1qj84l4")}</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">{`
                ${i18next.t("auto.follow_up_assessment_and_revisit_by_the_nvx6k6")}
              `}</p>
            </motion.div>

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
          }} className="bg-white rounded-2xl shadow-lg border border-border p-8 text-center">
              <RotateCcw className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">{i18next.t("auto.naac_peer_team_revisit_1tjc2sx")}</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{`
                ${i18next.t("auto.information_about_the_naac_peer_team_revisit_rvtlqn")}
              `}</p>
              <div className="text-gray-500">
                <p>{i18next.t("auto.revisit_details_will_be_updated_here_1wj47w9")}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default RevisitNAACPeerTeam;
