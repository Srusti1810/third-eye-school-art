import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid place-items-center h-13 w-13 h-13 rounded-full bg-green-500 text-white shadow-glow hover:scale-110 transition-transform"
        style={{ height: 52, width: 52 }}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      
    </div>
  );
}
