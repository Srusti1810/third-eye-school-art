import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GALLERY, GALLERY_CATEGORIES } from "@/lib/site-data";

export function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [index, setIndex] = useState<number>(-1);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  const slides = useMemo(() => items.map((i) => ({ src: i.src, alt: i.title })), [items]);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-script text-3xl text-primary">Student & studio work</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight text-balance max-w-2xl">
              A living gallery of imagination.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-foreground/70 hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.button
                layout
                key={g.title}
                onClick={() => setIndex(i)}
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-border bg-card break-inside-avoid"
              >
               <img
  src={g.src}
  alt={g.title}
  loading="lazy"
  decoding="async"
  className="w-full h-auto object-cover"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest text-white/70">{g.category}</p>
                    <p className="font-display text-lg text-white">{g.title}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(20, 16, 14, 0.92)" } }}
      />
    </section>
  );
}
