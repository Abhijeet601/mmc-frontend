import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const VideoRecordingNAACPeerTeamVisit = () => {
  return (
    <>
      <Helmet>
        <title>Video Recording of NAAC Peer Team Visit | Magadh Mahila College</title>
        <meta name="description" content="Watch the video recording of the NAAC Peer Team Visit at Magadh Mahila College." />
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
                <span className="text-primary">Video Recording of NAAC Peer Team Visit</span>
              </h1>
              <p className="text-foreground max-w-3xl mx-auto text-lg">
                Official video documentation of the NAAC Peer Team assessment visit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-border p-8 text-center"
            >
              <Video className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">NAAC Peer Team Visit Video</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Video recording of the NAAC Peer Team visit and assessment process. (Video content to be added soon.)
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Video Placeholder</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VideoRecordingNAACPeerTeamVisit;
