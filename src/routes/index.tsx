import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/site/Loader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Courses } from "@/components/site/Courses";
import { Expertise } from "@/components/site/Expertise";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Third Eye School of Art — Premium Art Classes in Bengaluru" },
      {
        name: "description",
        content:
          "A premium creative studio offering watercolour, sketching, painting and craft classes for children and adults in Bengaluru.",
      },
      { property: "og:title", content: "Third Eye School of Art" },
      {
        property: "og:description",
        content:
          "Unlock your child's imagination — hand-crafted art mentorship for every age, taught by practicing artists.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Expertise />
        <Gallery />
        <Testimonials />
       
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </div>
  );
}
