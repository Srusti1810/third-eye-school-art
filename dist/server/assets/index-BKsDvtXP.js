import { jsx, jsxs } from "react/jsx-runtime";
import { Toaster as Toaster$1, toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Eye, Sun, Moon, X, Menu, Sparkles, ArrowRight, Palette, Heart, ArrowUpRight, Quote, ChevronLeft, ChevronRight, MessageCircle, Phone, Mail, MapPin, Loader2, Send } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Lightbox from "yet-another-react-lightbox";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.6 },
      className: "fixed inset-0 z-[100] grid place-items-center bg-background",
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { scale: 0.6, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.5 },
            className: "relative h-20 w-20 grid place-items-center rounded-full gradient-warm shadow-glow",
            children: [
              /* @__PURE__ */ jsx(Eye, { className: "h-8 w-8 text-primary-foreground" }),
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  className: "absolute inset-0 rounded-full border-2 border-primary/40",
                  animate: { scale: [1, 1.4], opacity: [0.8, 0] },
                  transition: { duration: 1.4, repeat: Infinity }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "font-display text-xl tracking-tight", children: "Third Eye School of Art" })
      ] })
    }
  ) });
}
function useTheme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const prefersDark = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  };
  return { theme, toggle };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#expertise", label: "Expertise" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-xl bg-background/75 border-b border-border/60 shadow-soft" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-9 w-9 rounded-full gradient-warm text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-lg md:text-xl tracking-tight", children: [
              "Third Eye ",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "School of Art" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "relative text-sm text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggle,
                "aria-label": "Toggle theme",
                className: "h-10 w-10 grid place-items-center rounded-full hover:bg-muted transition",
                children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contact",
                className: "hidden md:inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition",
                children: "Enroll"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setOpen((v) => !v),
                "aria-label": "Menu",
                className: "lg:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-muted",
                children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: "lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur",
            children: /* @__PURE__ */ jsx("ul", { className: "px-6 py-4 space-y-2", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                onClick: () => setOpen(false),
                href: l.href,
                className: "block py-2 text-base text-foreground/80 hover:text-primary",
                children: l.label
              }
            ) }, l.href)) })
          }
        ) })
      ]
    }
  );
}
const heroBg = "/assets/hero-watercolor-nB5VaPtU.jpg";
const heroImage = "/assets/main-BlIHTsr3.jpeg";
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-screen flex items-center overflow-hidden pt-20",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 -z-10 animate-ink",
            style: {
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 -z-10 bg-background/55 dark:bg-background/75",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 -z-10 gradient-canvas",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "watercolor-blob bg-primary/40 h-72 w-72 top-20 -left-10 animate-float-slow" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "watercolor-blob bg-secondary/30 h-96 w-96 bottom-0 -right-20 animate-float-slow",
            style: { animationDelay: "2s" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "watercolor-blob bg-accent/40 h-56 w-56 top-1/3 right-1/4" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 max-w-3xl order-2 lg:order-1 text-center lg:text-left", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-4 py-1.5 text-xs tracking-wider uppercase text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
                  "A premium creative studio"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.1 },
                className: "mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight",
                children: [
                  "Unlock Your ",
                  /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
                  "Child's",
                  " ",
                  /* @__PURE__ */ jsx("em", { className: "not-italic text-gradient", children: "Imagination" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.25 },
                className: "mt-6 max-w-xl text-base sm:text-lg text-muted-foreground mx-auto lg:mx-0",
                children: "Hand-crafted art mentorship for every age — from first brush strokes to portfolio-ready pieces. A calm, joyful studio where creativity is taken seriously."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-4",
                children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#contact",
                      className: "group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium shadow-soft hover:shadow-glow transition-all",
                      children: [
                        "Enroll Today",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#gallery",
                      className: "inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-all",
                      children: "View Gallery"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "lg:col-span-5 relative order-1 lg:order-2 flex justify-center",
              children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[450px] rounded-3xl overflow-hidden shadow-glow border border-border/60", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: heroImage,
                    alt: "Third Eye School of Art",
                    loading: "eager",
                    fetchPriority: "high",
                    decoding: "async",
                    className: "w-full h-auto object-contain bg-black/5 p-2"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-warm opacity-30 mix-blend-overlay" })
              ] })
            }
          )
        ] })
      ]
    }
  );
}
const about = "/assets/about-CP8e7LZC.jpeg";
const values = [
  { icon: Palette, title: "Craft-first", desc: "Real techniques, real materials, real growth." },
  { icon: Heart, title: "Joyful pace", desc: "We honour every learner's rhythm and imagination." },
  {
    icon: Palette,
    title: "Creative learning",
    desc: "A friendly space where children explore art with confidence and joy."
  }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-24 md:py-32 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft", children: /* @__PURE__ */ jsx("img", { src: about, alt: "Inside the Third Eye studio", className: "h-full w-full object-cover", loading: "lazy" }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 hidden md:block h-32 w-32 rounded-full gradient-warm opacity-80 blur-2xl" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-primary", children: "— Our story" }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance", children: [
            "A studio built around ",
            /* @__PURE__ */ jsx("em", { className: "not-italic text-gradient", children: "seeing" }),
            " differently."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Welcome to Third Eye School of Art, a creative space where children learn to express themselves through colors, shapes, and imagination. We believe every child is born creative and our mission is to help them discover the artist inside. Our classes are designed to be fun, interactive, and inspiring. With professional guidance, children explore different art forms such as drawing, painting, craft work, and various creative techniques that build confidence and skill. We aim to create an environment where creativity blossoms and imagination becomes art." }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "From the very first brushstroke to portfolio-ready work, we move at the pace of the artist in front of us." }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 grid sm:grid-cols-3 gap-4", children: values.map((v) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "rounded-2xl border border-border bg-card p-5 hover:shadow-soft hover:-translate-y-1 transition-all",
              children: [
                /* @__PURE__ */ jsx(v.icon, { className: "h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-lg", children: v.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: v.desc })
              ]
            },
            v.title
          )) })
        ]
      }
    )
  ] }) });
}
const littleArt = "/assets/little-art-master-DX3YhpOK.jpg";
const juniorArt = "/assets/junior-art-CEd2fJBk.jpg";
const drawingPainting = "/assets/drawing-painting-CZswC8aF.jpg";
const painting = "/assets/painting-BRouYwIc.jpg";
const pencilShading = "/assets/pencil-shading-CNomasXX.jpg";
const craftWork = "/assets/craft-work-BB-ZxdUy.jpg";
const g1 = "/assets/art2-CAO05kes.jpeg";
const g2 = "/assets/childArt-ytN_Vcff.jpeg";
const g3 = "/assets/paint-CpirKWl9.jpeg";
const g4 = "/assets/painting-xSeVrd1f.jpeg";
const g5 = "/assets/penSketch-CCSkAou1.jpeg";
const g6 = "/assets/childArt1-CQpgA2st.jpeg";
const g7 = "/assets/paint1-i0Bt73c5.jpeg";
const g8 = "/assets/painting1-x5nLZiRY.jpeg";
const g9 = "/assets/painting3-gqDix3ve.jpeg";
const g10 = "/assets/childArt3-RDwaDh9D.jpeg";
const g11 = "/assets/paint3-B4XWBmaN.jpeg";
const g12 = "/assets/painting4-9C4w3-NI.jpeg";
const SITE = {
  name: "Third Eye School of Art",
  tagline: "Where imagination meets craft.",
  phone: "+91 8660472880",
  whatsapp: "918197119784",
  // digits only, no +
  email: "maheshkp@gmail.com",
  address: "Third Eye School of Art\n#19,Sai Orchard Layout,Hesaraghatta road. Vidyaranyapura Post,Bengaluru 560097"
};
const COURSES = [
  { title: "Little Art Master", age: "Ages 4 – 6", desc: "Playful first strokes in colour, shape, and texture.", image: littleArt },
  { title: "Junior Art", age: "Ages 7 – 10", desc: "Foundations of observation, composition and joyful expression.", image: juniorArt },
  { title: "Drawing & Painting", age: "Ages 11+", desc: "Confident line work paired with vibrant painting techniques.", image: drawingPainting },
  { title: "Painting", age: "All Levels", desc: "Watercolour, acrylic and oil — explore mediums and moods.", image: painting },
  { title: "Pencil Shading", age: "All Levels", desc: "Master tone, depth and realism with graphite and charcoal.", image: pencilShading },
  { title: "Craft Work", age: "All Ages", desc: "Hands-on paper, clay and mixed media — make to learn.", image: craftWork }
];
const EXPERTISE = [
  {
    title: "Pencil Drawing",
    desc: "Learn sketching fundamentals, shading techniques, proportions, textures, and detailed pencil artwork."
  },
  {
    title: "Charcoal Drawing",
    desc: "Explore expressive charcoal techniques with bold strokes, blending, highlights, and dramatic contrasts."
  },
  {
    title: "Ink (Pen) Drawing",
    desc: "Practice line work, detailing, hatching, and creative pen illustrations with different ink techniques."
  },
  {
    title: "Crayon Drawing",
    desc: "Fun and colorful drawing sessions that help children explore creativity through crayons and textures."
  },
  {
    title: "Colored Pencil Drawing",
    desc: "Develop layering, blending, color mixing, and realistic coloring techniques using color pencils."
  },
  {
    title: "Scribbling",
    desc: "Encourage free-hand creativity and imagination through playful scribbling and expressive patterns."
  },
  {
    title: "Soft Pastel Painting",
    desc: "Learn soft pastel blending, shading, textures, and vibrant artistic compositions."
  },
  {
    title: "Watercolor Painting",
    desc: "Explore transparent layering, washes, gradients, and beautiful watercolor effects."
  },
  {
    title: "Acrylic Painting",
    desc: "Create bold and colorful artworks while learning acrylic blending and brush techniques."
  },
  {
    title: "Pastel Painting",
    desc: "Experiment with smooth textures, soft blending, and creative pastel painting styles."
  }
];
const GALLERY = [
  { src: g1, category: "Painting" },
  { src: g2, category: "Kids" },
  { src: g3, category: "Painting" },
  { src: g4, category: "Painting" },
  { src: g5, category: "Sketch" },
  { src: g6, category: "Kids" },
  { src: g7, category: "Painting" },
  { src: g8, category: "Painting" },
  { src: g9, category: "Painting" },
  { src: g10, category: "Kids" },
  { src: g11, category: "Painting" },
  { src: g12, category: "Painting" }
];
const GALLERY_CATEGORIES = ["All", "Painting", "Sketch", "Kids"];
const TESTIMONIALS = [
  { name: "Priya Menon", role: "Parent of Aanya, 8", quote: "My daughter looks forward to class all week. The teachers nurture her imagination without ever rushing her." },
  { name: "Rahul Verma", role: "Student, Pencil Shading", quote: "I came in barely able to sketch a circle. Six months later I finished my first realistic portrait. The mentorship is honest and patient." },
  { name: "Sneha Iyer", role: "Parent of twins, 6", quote: "A studio that respects children as artists. The space feels warm, the work on the walls is genuinely inspiring." },
  { name: "Arjun Das", role: "Adult Student", quote: "Weekend painting sessions are the calmest part of my week. Beautifully run, beautifully taught." }
];
function Courses() {
  return /* @__PURE__ */ jsx("section", { id: "courses", className: "relative py-24 md:py-32 bg-muted/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-primary", children: "Our offerings" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl tracking-tight text-balance max-w-2xl", children: "Courses crafted for every stage of the artist's journey." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm", children: "Small batches. Personal feedback. Mediums and styles chosen with intent." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: COURSES.map((c, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.3 },
        className: "group relative overflow-hidden rounded-3xl border border-border bg-card hover:shadow-glow transition-all",
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: c.image,
              alt: c.title,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: c.age }),
            /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl", children: c.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: c.desc }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#contact",
                className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition",
                children: [
                  "Enquire ",
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 -bottom-1 h-1 gradient-warm scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" })
        ]
      },
      c.title
    )) })
  ] }) });
}
function Expertise() {
  const [active, setActive] = useState(0);
  return /* @__PURE__ */ jsxs("section", { id: "expertise", className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "watercolor-blob bg-secondary/30 h-72 w-72 -top-10 right-1/3" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-28", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-primary", children: "What we teach" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl tracking-tight text-balance", children: "Techniques that travel with you for life." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground max-w-md", children: "Hover any technique to dive deeper. Every discipline is taught by a practicing artist who uses it in their own work." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-card p-8 shadow-soft", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Currently exploring" }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-3xl", children: EXPERTISE[active].title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: EXPERTISE[active].desc })
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: EXPERTISE.map((e, i) => /* @__PURE__ */ jsxs(
        motion.li,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.05 },
          onMouseEnter: () => setActive(i),
          className: `group cursor-pointer border-b border-border py-6 flex items-baseline gap-6 transition-all ${active === i ? "pl-4" : "hover:pl-2"}`,
          children: [
            /* @__PURE__ */ jsxs("span", { className: "font-script text-xl text-primary/70 w-10", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
              "h3",
              {
                className: `font-display text-3xl md:text-4xl transition-colors ${active === i ? "text-gradient" : "text-foreground/80"}`,
                children: e.title
              }
            ) })
          ]
        },
        e.title
      )) })
    ] })
  ] });
}
function Gallery() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(-1);
  const items = useMemo(
    () => filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter),
    [filter]
  );
  const slides = useMemo(() => items.map((i) => ({ src: i.src, alt: i.title })), [items]);
  return /* @__PURE__ */ jsxs("section", { id: "gallery", className: "relative py-24 md:py-32 bg-muted/40", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-primary", children: "Student & studio work" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl tracking-tight text-balance max-w-2xl", children: "A living gallery of imagination." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: GALLERY_CATEGORIES.map((c) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setFilter(c),
            className: `px-4 py-2 rounded-full text-sm border transition-all ${filter === c ? "bg-foreground text-background border-foreground" : "border-border text-foreground/70 hover:text-foreground hover:border-foreground/40"}`,
            children: c
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: items.map((g, i) => /* @__PURE__ */ jsxs(
        motion.button,
        {
          layout: true,
          onClick: () => setIndex(i),
          initial: false,
          animate: { opacity: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.2 },
          className: "group relative mb-4 block w-full overflow-hidden rounded-2xl border border-border bg-card break-inside-avoid",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: g.src,
                alt: g.title,
                loading: "lazy",
                decoding: "async",
                className: "w-full h-auto object-cover"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4", children: /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-white/70", children: g.category }),
              /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-white", children: g.title })
            ] }) })
          ]
        },
        g.title
      )) }) })
    ] }),
    /* @__PURE__ */ jsx(
      Lightbox,
      {
        open: index >= 0,
        index,
        close: () => setIndex(-1),
        slides,
        styles: { container: { backgroundColor: "rgba(20, 16, 14, 0.92)" } }
      }
    )
  ] });
}
function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  useEffect(() => {
    const t2 = setInterval(next, 6500);
    return () => clearInterval(t2);
  }, []);
  const t = TESTIMONIALS[i];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "watercolor-blob bg-primary/30 h-80 w-80 top-10 -left-20" }),
    /* @__PURE__ */ jsx("div", { className: "watercolor-blob bg-secondary/30 h-80 w-80 bottom-10 -right-20" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8 text-center relative", children: [
      /* @__PURE__ */ jsx(Quote, { className: "mx-auto h-10 w-10 text-primary opacity-70" }),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.blockquote,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.5 },
          className: "mt-6 font-display text-2xl md:text-4xl leading-snug text-balance",
          children: [
            '"',
            t.quote,
            '"'
          ]
        },
        i
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: t.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: t.role })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: prev,
            "aria-label": "Previous",
            className: "h-11 w-11 grid place-items-center rounded-full border border-border hover:bg-foreground hover:text-background transition",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex gap-1.5", children: TESTIMONIALS.map((_, k) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setI(k),
            "aria-label": `Slide ${k + 1}`,
            className: `h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-border"}`
          },
          k
        )) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: next,
            "aria-label": "Next",
            className: "h-11 w-11 grid place-items-center rounded-full border border-border hover:bg-foreground hover:text-background transition",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}
const courses = [
  "Little Art Master",
  "Junior Art",
  "Drawing & Painting",
  "Painting",
  "Pencil Shading",
  "Craft Work"
];
function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const parentName = data.get("parent_name");
    const studentName = data.get("student_name");
    const age = data.get("age");
    const phone = data.get("phone");
    const email = data.get("email");
    const course = data.get("course");
    const message = data.get("message");
    const whatsappMessage = `
🎨 *New Enrollment Inquiry*

👤 Parent Name: ${parentName}
🧒 Student Name: ${studentName}
🎂 Age: ${age}
📞 Phone: ${phone}
📧 Email: ${email}
🖌️ Course: ${course}

💬 Message:
${message}
    `;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
    toast.success("Redirecting to WhatsApp...");
    form.reset();
    setSubmitting(false);
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-24 md:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "watercolor-blob bg-primary/30 h-80 w-80 top-20 -left-20" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "lg:col-span-2",
          children: [
            /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-primary", children: "Get in touch" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl tracking-tight text-balance", children: "Begin your art journey with us." }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Drop by the studio, call, message us on WhatsApp, or fill the enrollment form. We usually respond within a day." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-3", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=Hello`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-soft hover:border-primary transition",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-11 w-11 rounded-xl bg-green-500/15 text-green-600 dark:text-green-400", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "WhatsApp" }),
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "+91 8197119784" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `tel:${SITE.phone.replace(/\s/g, "")}`,
                  className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-soft hover:border-primary transition",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-11 w-11 rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Call" }),
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: SITE.phone })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `mailto:${SITE.email}`,
                  className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-soft hover:border-primary transition",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-11 w-11 rounded-xl bg-secondary/15 text-secondary", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Email" }),
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: SITE.email })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4", children: [
                /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-11 w-11 rounded-xl bg-accent/30 text-accent-foreground", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Studio" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: SITE.address })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-soft", children: /* @__PURE__ */ jsx(
              "iframe",
              {
                src: "https://www.google.com/maps?q=Third+Eye+School+of+Art,+19+Sai+Orchard+Layout,+Hesaraghatta+Road,+Vidyaranyapura,+Bengaluru+560097&output=embed",
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                className: "h-full w-full",
                title: "Studio location"
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.form,
        {
          onSubmit,
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
          className: "lg:col-span-3 rounded-3xl border border-border bg-card p-7 md:p-10 shadow-soft",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl", children: "Enrollment Inquiry" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "All fields are required, except message." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsx(Field, { label: "Parent Name", name: "parent_name" }),
              /* @__PURE__ */ jsx(Field, { label: "Student Name", name: "student_name" }),
              /* @__PURE__ */ jsx(Field, { label: "Age", name: "age", type: "number", min: 3 }),
              /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone", type: "tel" }),
              /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email" }) }),
              /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Course Interested" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    name: "course",
                    required: true,
                    className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select a course" }),
                      courses.map((c) => /* @__PURE__ */ jsx("option", { children: c }, c))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    name: "message",
                    rows: 4,
                    className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none",
                    placeholder: "Anything you'd like us to know..."
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                disabled: submitting,
                className: "mt-7 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium shadow-soft hover:shadow-glow transition disabled:opacity-60",
                children: [
                  submitting ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
                  submitting ? "Redirecting..." : "Send Inquiry"
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  min
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        required: true,
        name,
        type,
        min,
        className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative border-t border-border bg-foreground text-background overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "watercolor-blob bg-primary/40 h-80 w-80 -top-20 -left-20" }),
    /* @__PURE__ */ jsx("div", { className: "watercolor-blob bg-secondary/40 h-80 w-80 -bottom-20 -right-20" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-8 py-16 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-9 w-9 rounded-full gradient-warm", children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl", children: SITE.name })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 max-w-md text-background/70 leading-relaxed", children: [
          SITE.tagline,
          " A calm studio where children and adults discover their visual voice in Bengaluru."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-background/50", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-background/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-primary", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#courses", className: "hover:text-primary", children: "Courses" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#gallery", className: "hover:text-primary", children: "Gallery" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-primary", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-background/50", children: "Visit" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-background/80 leading-relaxed", children: SITE.address }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-background/80", children: SITE.phone }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-background/80", children: SITE.email })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative border-t border-background/15", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/60", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        SITE.name,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-script text-lg text-background/80", children: "made with intention." })
    ] }) })
  ] });
}
function FloatingActions() {
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-5 right-5 z-40 flex flex-col gap-3", children: /* @__PURE__ */ jsx(
    "a",
    {
      href: `https://wa.me/${SITE.whatsapp}`,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "WhatsApp",
      className: "grid place-items-center h-13 w-13 h-13 rounded-full bg-green-500 text-white shadow-glow hover:scale-110 transition-transform",
      style: { height: 52, width: 52 },
      children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" })
    }
  ) });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Loader, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Courses, {}),
      /* @__PURE__ */ jsx(Expertise, {}),
      /* @__PURE__ */ jsx(Gallery, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingActions, {}),
    /* @__PURE__ */ jsx(Toaster, { position: "top-center", richColors: true })
  ] });
}
export {
  Home as component
};
