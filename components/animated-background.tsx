"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Orb 1 */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl mix-blend-multiply"
        animate={{
          x: [0, 50, -20, 0],
          y: [0, 30, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Orb 2 */}
      <motion.div
        className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] bg-teal-200/20 rounded-full blur-3xl mix-blend-multiply"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      {/* Orb 3 */}
      <motion.div
        className="absolute -bottom-40 right-1/4 w-[25rem] h-[25rem] bg-sky-200/20 rounded-full blur-3xl mix-blend-multiply"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -30, -80, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />
    </div>
  );
}
