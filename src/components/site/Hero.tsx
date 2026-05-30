import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-watercolor.jpg";
import heroImage from "@/assets/main.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Watercolor background */}
      <div
        className="absolute inset-0 -z-10 animate-ink"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      <div
        className="absolute inset-0 -z-10 bg-background/55 dark:bg-background/75"
        aria-hidden
      />

      <div
        className="absolute inset-0 -z-10 gradient-canvas"
        aria-hidden
      />

      {/* Floating artistic elements */}
      <div className="watercolor-blob bg-primary/40 h-72 w-72 top-20 -left-10 animate-float-slow" />
      <div
        className="watercolor-blob bg-secondary/30 h-96 w-96 bottom-0 -right-20 animate-float-slow"
        style={{ animationDelay: "2s" }}
      />
      <div className="watercolor-blob bg-accent/40 h-56 w-56 top-1/3 right-1/4" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 max-w-3xl order-2 lg:order-1 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-4 py-1.5 text-xs tracking-wider uppercase text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            A premium creative studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Unlock Your <br className="hidden sm:block" />
            Child's{" "}
            <em className="not-italic text-gradient">
              Imagination
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground mx-auto lg:mx-0"
          >
            Hand-crafted art mentorship for every age — from first brush
            strokes to portfolio-ready pieces. A calm, joyful studio where
            creativity is taken seriously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium shadow-soft hover:shadow-glow transition-all"
            >
              Enroll Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-all"
            >
              View Gallery
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[450px] rounded-3xl overflow-hidden shadow-glow border border-border/60">
            
            <img
              src={heroImage}
              alt="Third Eye School of Art"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-contain bg-black/5 p-2"
            />

            <div className="absolute inset-0 gradient-warm opacity-30 mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}