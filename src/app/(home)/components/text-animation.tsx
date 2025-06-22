"use client";
import { motion } from "framer-motion";

export default function AnimateTextHome() {
  const headline = "The next generation of audio collaboration.";
  const words = headline.split(" ");

  const wordVariants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 12 },
    visible: (index: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div className="flex w-[900px] flex-wrap justify-center gap-3">
      {words.map((word, index) => (
        <motion.p
          key={index}
          custom={index}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className="animation-h1 mr-1.5 inline-block text-center font-mono text-[5rem] font-semibold leading-[5.2rem] -tracking-[3px]"
        >
          {word}
        </motion.p>
      ))}
    </div>
  );
}
