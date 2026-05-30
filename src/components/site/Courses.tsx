import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COURSES } from "@/lib/site-data";

export function Courses() {
  return (
    <section id="courses" className="relative py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-script text-3xl text-primary">Our offerings</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight text-balance max-w-2xl">
              Courses crafted for every stage of the artist's journey.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Small batches. Personal feedback. Mediums and styles chosen with intent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card hover:shadow-glow transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-primary">{c.age}</p>
                <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition"
                >
                  Enquire <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="absolute inset-x-0 -bottom-1 h-1 gradient-warm scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
