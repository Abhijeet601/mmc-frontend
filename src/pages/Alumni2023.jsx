import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AlumniGallery from "@/components/alumni/AlumniGallery";
import { r2Url } from "@/lib/r2Assets";

const images = [
  "images/alumni_mmc_alumni2023_2_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_7_768x511.jpg",
  "images/alumni_mmc_alumni_2023meet_8_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_9_768x512.jpeg",
  "images/alumni_mmc_alumni_2023meet_11_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_12_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_13_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_14_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_15_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_16_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_17_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_18_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_19_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_20_768x512.jpeg",
  "images/alumni_mmc_alumni_2023meet_21_768x512.jpeg",
  "images/alumni_mmc_alumni_2023meet_22_768x511.jpeg",
  "images/alumni_mmc_alumni_2023meet_23_768x512.jpeg",
  "images/alumni_mmc_alumni_2023meet_24_768x512.jpeg",
  "images/alumni_mmc_alumni_2023meet_77_768x511.jpg",
].map((src, index) => ({
  src: r2Url(src),
  alt: `Alumni Meet 2023 photo ${index + 1}`,
}));

const Alumni2023 = () => {
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <button
          type="button"
          onClick={() => navigate("/alumni")}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-rose-200 hover:text-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Alumni
        </button>

        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Gallery</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">Alumni Meet 2023</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A responsive collection of alumni meet memories from Magadh Mahila College.
          </p>
        </div>

        <AlumniGallery images={images} />
      </div>
    </motion.main>
  );
};

export default Alumni2023;
