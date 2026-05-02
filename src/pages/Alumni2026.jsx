import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AlumniGallery from "@/components/alumni/AlumniGallery";

const registrationFormUrl = "https://forms.gle/r9jdV47edXuGAiZ17";

const images = [
  "https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/Alumni/WhatsApp%20Image%202026-04-30%20at%2010.25.51%20PM%20(1).jpeg",
  "https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/Alumni/WhatsApp%20Image%202026-04-30%20at%2010.25.51%20PM%20(3).jpeg",
  "https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/Alumni/WhatsApp%20Image%202026-04-30%20at%2010.25.51%20PM.jpeg",
].map((src, index) => ({
  src,
  alt: `Alumni Meet 2026 gallery photo ${index + 1}`,
}));

const Alumni2026 = () => {
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Registration Open</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">Alumni Meet 2026</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Register for the upcoming meet and browse the alumni gallery experience.
          </p>

          <motion.a
            href={registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 10px 25px rgba(225, 29, 72, 0.18)",
                "0 16px 34px rgba(225, 29, 72, 0.30)",
                "0 10px 25px rgba(225, 29, 72, 0.18)",
              ],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-rose-600 px-7 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
          >
            Register Now
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>

        <AlumniGallery images={images} variant="large" />
      </div>
    </motion.main>
  );
};

export default Alumni2026;
