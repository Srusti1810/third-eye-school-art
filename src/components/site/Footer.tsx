import { Eye, Instagram, Facebook, Youtube } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-foreground text-background overflow-hidden">
      <div className="watercolor-blob bg-primary/40 h-80 w-80 -top-20 -left-20" />
      <div className="watercolor-blob bg-secondary/40 h-80 w-80 -bottom-20 -right-20" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-full gradient-warm">
              <Eye className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-xl">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-md text-background/70 leading-relaxed">
            {SITE.tagline} A calm studio where children and adults discover their visual voice in
            Bengaluru.
          </p>
          
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-background/50">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#courses" className="hover:text-primary">Courses</a></li>
            <li><a href="#gallery" className="hover:text-primary">Gallery</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-background/50">Visit</p>
          <p className="mt-4 text-sm text-background/80 leading-relaxed">{SITE.address}</p>
          <p className="mt-3 text-sm text-background/80">{SITE.phone}</p>
          <p className="text-sm text-background/80">{SITE.email}</p>
        </div>
      </div>
      <div className="relative border-t border-background/15">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="font-script text-lg text-background/80">made with intention.</p>
        </div>
      </div>
    </footer>
  );
}
