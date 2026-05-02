import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, HeartHandshake, UsersRound } from "lucide-react";

const cardData = [

    {
    title: "Alumni Meet 2026",
    description: "Register for the upcoming meet and view alumni event updates.",
    link: "/alumni/2026",
    color: "from-rose-400 to-orange-400",
    icon: UsersRound,
  },
  {
    title: "Alumni Meet 2023",
    description: "Browse highlights and memories from the 2023 alumni gathering.",
    link: "/alumni/2023",
    color: "from-sky-400 to-indigo-500",
    icon: CalendarDays,
  },
  {
    title: "Lifetime Members",
    description: "View the lifetime member document directly inside the page.",
    link: "/alumni/lifetime",
    color: "from-emerald-400 to-teal-500",
    icon: HeartHandshake,
  },
];

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Alumni = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      <div className="absolute left-[-6rem] top-12 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute bottom-10 right-[-5rem] h-80 w-80 rounded-full bg-rose-100 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <motion.p
          variants={itemVariants}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-600"
        >
          Magadh Mahila College
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="mx-auto max-w-3xl text-4xl font-bold text-slate-950 sm:text-5xl"
        >
          Alumni Section
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
        >
          Explore meet galleries, upcoming alumni registration, and lifetime member records.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 grid gap-7 md:grid-cols-3">
          {cardData.map((card) => (
            <Link to={card.link} key={card.title} className="group block focus:outline-none">
              <motion.div
                whileHover={{ scale: 1.035, y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative h-full"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.color} opacity-20 blur-xl transition duration-300 group-hover:opacity-40`}
                />
                <div className="relative flex h-full min-h-[260px] flex-col rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-lg shadow-slate-200/70 transition duration-300 group-hover:shadow-2xl group-hover:shadow-slate-300/70 group-focus-visible:ring-2 group-focus-visible:ring-rose-500">
                  <div
                    className={`mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color} text-white shadow-lg`}
                  >
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-950">{card.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{card.description}</p>
                  <p className="mt-8 text-sm font-semibold text-rose-700">
                    Open section <span aria-hidden="true">-&gt;</span>
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Alumni;
