import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string; // Changed to string for simplicity
  blur?: string;
}

export default function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ y: yOffset, opacity: 0, filter: `blur(${blur})` }}
        animate={isInView ? { y: -yOffset, opacity: 1, filter: "blur(0px)" } : { y: yOffset, opacity: 0, filter: `blur(${blur})` }}
        exit={{ y: yOffset, opacity: 0, filter: `blur(${blur})` }}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
