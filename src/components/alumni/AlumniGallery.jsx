import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const galleryContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const galleryItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AlumniGallery = ({ images, variant = "default" }) => {
  const [activeImage, setActiveImage] = useState(null);
  const isLarge = variant === "large";
  const gridClassName = isLarge
    ? "grid grid-cols-1 gap-7 lg:grid-cols-3"
    : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  const tileClassName = isLarge ? "min-h-[520px] lg:min-h-[620px]" : "aspect-[4/3]";
  const imageClassName = isLarge
    ? "h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
    : "h-full w-full object-cover transition duration-500 group-hover:scale-110";

  useEffect(() => {
    if (!activeImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <motion.div
        variants={galleryContainer}
        initial="hidden"
        animate="visible"
        className={gridClassName}
      >
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            variants={galleryItem}
            whileHover={{ y: -4 }}
            onClick={() => setActiveImage(image)}
            className={`group relative ${tileClassName} overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500`}
            aria-label={`View ${image.alt || `alumni gallery image ${index + 1}`}`}
          >
            <img
              src={image.src}
              alt={image.alt || `Alumni gallery ${index + 1}`}
              loading="lazy"
              className={imageClassName}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white/55 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm">
                View
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative max-h-[90vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close image preview"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={activeImage.src}
                alt={activeImage.alt || "Selected alumni gallery image"}
                className="max-h-[90vh] w-full rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default AlumniGallery;
