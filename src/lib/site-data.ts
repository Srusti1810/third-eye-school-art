// Single source of truth for editable site content.
// Update images, copy, courses, testimonials and links here.

import littleArt from "@/assets/courses/little-art-master.jpg";
import juniorArt from "@/assets/courses/junior-art.jpg";
import drawingPainting from "@/assets/courses/drawing-painting.jpg";
import painting from "@/assets/courses/painting.jpg";
import pencilShading from "@/assets/courses/pencil-shading.jpg";
import craftWork from "@/assets/courses/craft-work.jpg";

import g1 from "@/assets/art2.jpeg";
import g2 from "@/assets/childArt.jpeg";
import g3 from "@/assets/paint.jpeg";
import g4 from "@/assets/painting.jpeg";
import g5 from "@/assets/penSketch.jpeg";
import g6 from "@/assets/childArt1.jpeg";
import g7 from "@/assets/paint1.jpeg";
import g8 from "@/assets/painting1.jpeg";
import g9 from "@/assets/painting3.jpeg";
import g10 from "@/assets/childArt3.jpeg";
import g11 from "@/assets/paint3.jpeg";
import g12 from "@/assets/painting4.jpeg";

export const SITE = {
  name: "Third Eye School of Art",
  tagline: "Where imagination meets craft.",
  phone: "+91 8660472880",
  whatsapp: "918197119784", // digits only, no +
  email: "maheshkp@gmail.com",
  address: "Third Eye School of Art\n#19,Sai Orchard Layout,Hesaraghatta road. Vidyaranyapura Post,Bengaluru 560097",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124430.99875069516!2d77.49085339726562!3d12.954517000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15090f00ed25%3A0x53d61f5e2b1f0c9!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // replace with your Formspree ID
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export const COURSES = [
  { title: "Little Art Master", age: "Ages 4 – 6", desc: "Playful first strokes in colour, shape, and texture.", image: littleArt },
  { title: "Junior Art", age: "Ages 7 – 10", desc: "Foundations of observation, composition and joyful expression.", image: juniorArt },
  { title: "Drawing & Painting", age: "Ages 11+", desc: "Confident line work paired with vibrant painting techniques.", image: drawingPainting },
  { title: "Painting", age: "All Levels", desc: "Watercolour, acrylic and oil — explore mediums and moods.", image: painting },
  { title: "Pencil Shading", age: "All Levels", desc: "Master tone, depth and realism with graphite and charcoal.", image: pencilShading },
  { title: "Craft Work", age: "All Ages", desc: "Hands-on paper, clay and mixed media — make to learn.", image: craftWork },
];

export const EXPERTISE = [
  {
    title: "Pencil Drawing",
    desc: "Learn sketching fundamentals, shading techniques, proportions, textures, and detailed pencil artwork.",
  },
  {
    title: "Charcoal Drawing",
    desc: "Explore expressive charcoal techniques with bold strokes, blending, highlights, and dramatic contrasts.",
  },
  {
    title: "Ink (Pen) Drawing",
    desc: "Practice line work, detailing, hatching, and creative pen illustrations with different ink techniques.",
  },
  {
    title: "Crayon Drawing",
    desc: "Fun and colorful drawing sessions that help children explore creativity through crayons and textures.",
  },
  {
    title: "Colored Pencil Drawing",
    desc: "Develop layering, blending, color mixing, and realistic coloring techniques using color pencils.",
  },
  {
    title: "Scribbling",
    desc: "Encourage free-hand creativity and imagination through playful scribbling and expressive patterns.",
  },
  {
    title: "Soft Pastel Painting",
    desc: "Learn soft pastel blending, shading, textures, and vibrant artistic compositions.",
  },
  {
    title: "Watercolor Painting",
    desc: "Explore transparent layering, washes, gradients, and beautiful watercolor effects.",
  },
  {
    title: "Acrylic Painting",
    desc: "Create bold and colorful artworks while learning acrylic blending and brush techniques.",
  },
  {
    title: "Pastel Painting",
    desc: "Experiment with smooth textures, soft blending, and creative pastel painting styles.",
  },
];

export const GALLERY = [
  { src: g1, category: "Painting"},
  { src: g2, category: "Kids"},
  { src: g3, category: "Painting"},
  { src: g4, category: "Painting"},
  { src: g5, category: "Sketch"},
  { src: g6, category: "Kids"},
  { src: g7, category: "Painting"},
  { src: g8, category: "Painting"},
  { src: g9, category: "Painting"},
  { src: g10, category: "Kids"},
  { src: g11, category: "Painting"},
  { src: g12, category: "Painting"},
];

export const GALLERY_CATEGORIES = ["All", "Painting", "Sketch", "Kids"];

export const TESTIMONIALS = [
  { name: "Priya Menon", role: "Parent of Aanya, 8", quote: "My daughter looks forward to class all week. The teachers nurture her imagination without ever rushing her." },
  { name: "Rahul Verma", role: "Student, Pencil Shading", quote: "I came in barely able to sketch a circle. Six months later I finished my first realistic portrait. The mentorship is honest and patient." },
  { name: "Sneha Iyer", role: "Parent of twins, 6", quote: "A studio that respects children as artists. The space feels warm, the work on the walls is genuinely inspiring." },
  { name: "Arjun Das", role: "Adult Student", quote: "Weekend painting sessions are the calmest part of my week. Beautifully run, beautifully taught." },
];

export const WORKSHOPS = [
  { date: "Sat, Jun 21", title: "Watercolour Florals", desc: "A 3-hour intensive on loose botanical washes.", level: "Beginner" },
  { date: "Sun, Jul 06", title: "Portrait Sketching", desc: "Anatomy of the face — proportions, shading, life.", level: "Intermediate" },
  { date: "Sat, Jul 19", title: "Madhubani Workshop", desc: "Traditional Indian folk art with natural pigments.", level: "All Levels" },
  { date: "Sun, Aug 03", title: "Acrylic Pour Party", desc: "A playful afternoon of fluid art and colour theory.", level: "Beginner" },
];
