"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const words = ["Backend Developer", "AI/ML Specialist"];

export default function RollingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] text-sm overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.17, ease: [0.23, 1, 0.32, 1] }}
          className="inline-block text-black font-light"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
