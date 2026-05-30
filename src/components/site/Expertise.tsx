import { useState } from "react";
import { motion } from "framer-motion";
import { EXPERTISE } from "@/lib/site-data";

export function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section id="expertise" className="relative py-24 md:py-32 overflow-hidden">
      <div className="watercolor-blob bg-secondary/30 h-72 w-72 -top-10 right-1/3" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="font-script text-3xl text-primary">What we teach</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Techniques that travel with you for life.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Hover any technique to dive deeper. Every discipline is taught by a practicing artist who
            uses it in their own work.
          </p>
          <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-soft">
            <p className="text-xs uppercase tracking-widest text-primary">Currently exploring</p>
            <h3 className="mt-2 font-display text-3xl">{EXPERTISE[active].title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{EXPERTISE[active].desc}</p>
          </div>
        </div>

        <ul className="space-y-1">
          {EXPERTISE.map((e, i) => (
            <motion.li
              key={e.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onMouseEnter={() => setActive(i)}
              className={`group cursor-pointer border-b border-border py-6 flex items-baseline gap-6 transition-all ${
                active === i ? "pl-4" : "hover:pl-2"
              }`}
            >
              <span className="font-script text-xl text-primary/70 w-10">0{i + 1}</span>
              <div className="flex-1">
                <h3
                  className={`font-display text-3xl md:text-4xl transition-colors ${
                    active === i ? "text-gradient" : "text-foreground/80"
                  }`}
                >
                  {e.title}
                </h3>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
