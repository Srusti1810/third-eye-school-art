import { motion } from "framer-motion";
import about from "@/assets/about.jpeg";
import { Palette, Heart } from "lucide-react";

const values = [
  { icon: Palette, title: "Craft-first", desc: "Real techniques, real materials, real growth." },
  { icon: Heart, title: "Joyful pace", desc: "We honour every learner's rhythm and imagination." },
  {
    icon: Palette,
    title: "Creative learning",
    desc: "A friendly space where children explore art with confidence and joy.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
            <img src={about} alt="Inside the Third Eye studio" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -top-6 -right-6 hidden md:block h-32 w-32 rounded-full gradient-warm opacity-80 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-3xl text-primary">— Our story</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            A studio built around <em className="not-italic text-gradient">seeing</em> differently.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Welcome to Third Eye School of Art, a creative space where children learn to express themselves through colors, shapes, and imagination. We believe every child is born creative and our mission is to help them discover the artist inside.

Our classes are designed to be fun, interactive, and inspiring. With professional guidance, children explore different art forms such as drawing, painting, craft work, and various creative techniques that build confidence and skill.

We aim to create an environment where creativity blossoms and imagination becomes art.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From the very first brushstroke to portfolio-ready work, we move at the pace of the
            artist in front of us.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-5 hover:shadow-soft hover:-translate-y-1 transition-all"
              >
                <v.icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-display text-lg">{v.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
