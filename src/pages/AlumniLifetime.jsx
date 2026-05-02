import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const lifetimeMembersPdf =
  "https://pub-c7047204b6824b4ea67be147e7ebb0ac.r2.dev/public/Alumni/life_mem_2024_2.pdf";

const AlumniLifetime = () => {
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={() => navigate("/alumni")}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-rose-200 hover:text-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Alumni
        </button>

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Document</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">Lifetime Members</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            View the lifetime member document inside a responsive PDF frame.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/80 sm:p-5">
          <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-slate-950">Lifetime Member PDF</p>
                <p className="text-sm text-slate-600">Embedded document viewer</p>
              </div>
            </div>
            <a
              href={lifetimeMembersPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Open PDF
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <iframe
            src={lifetimeMembersPdf}
            title="Lifetime Members PDF"
            className="h-[70vh] min-h-[520px] w-full rounded-2xl border border-slate-200 bg-slate-50"
          />
        </div>
      </div>
    </motion.main>
  );
};

export default AlumniLifetime;
