import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="watercolor-blob bg-primary/30 h-80 w-80 top-10 -left-20" />
      <div className="watercolor-blob bg-secondary/30 h-80 w-80 bottom-10 -right-20" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center relative">
        <Quote className="mx-auto h-10 w-10 text-primary opacity-70" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-6 font-display text-2xl md:text-4xl leading-snug text-balance"
          >
            "{t.quote}"
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-8">
          <p className="font-medium">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.role}</p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="h-11 w-11 grid place-items-center rounded-full border border-border hover:bg-foreground hover:text-background transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Slide ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="h-11 w-11 grid place-items-center rounded-full border border-border hover:bg-foreground hover:text-background transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
