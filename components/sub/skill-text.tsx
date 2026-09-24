"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center max-w-4xl mx-auto text-center px-4">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-purple-950/20 backdrop-blur-md rounded-full inline-flex items-center gap-2 mb-4"
      >
        <SparklesIcon className="text-[#b49bff] h-4 w-4" />
        <span className="Welcome-text text-xs md:text-sm font-semibold tracking-wider uppercase">
          ENGINEERING CAPABILITIES & TECH STACK
        </span>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.4)}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
      >
        Technologies &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
          Architectural Focus
        </span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.5)}
        className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed mb-8"
      >
        Categorized by domain and structured by genuine proficiency levels: <span className="text-purple-300 font-semibold">CORE</span>, <span className="text-cyan-300 font-semibold">WORKING KNOWLEDGE</span>, and <span className="text-amber-300 font-semibold">EXPLORING</span>.
      </motion.p>
    </div>
  );
};
