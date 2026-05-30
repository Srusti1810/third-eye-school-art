import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-20 w-20 grid place-items-center rounded-full gradient-warm shadow-glow"
            >
              <Eye className="h-8 w-8 text-primary-foreground" />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-primary/40"
                animate={{ scale: [1, 1.4], opacity: [0.8, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            </motion.div>
            <p className="font-display text-xl tracking-tight">Third Eye School of Art</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
