"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

const LazySection = ({
  children,
  className = "",
  threshold = 0.1,
}: LazySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "100px",
    amount: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={className}
    >
      {isInView && children}
    </motion.div>
  );
};

export default LazySection;
