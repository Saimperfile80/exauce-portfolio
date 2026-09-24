"use client";

import { motion } from "framer-motion";
import { 
  MagnifyingGlassIcon, 
  Square3Stack3DIcon, 
  CodeBracketIcon, 
  RocketLaunchIcon,
  ArrowPathIcon,
  SparklesIcon 
} from "@heroicons/react/24/outline";

import { PHILOSOPHY_STEPS } from "@/constants/portfolio";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const ICONS_MAP: Record<string, typeof MagnifyingGlassIcon> = {
  search: MagnifyingGlassIcon,
  cube: Square3Stack3DIcon,
  code: CodeBracketIcon,
  rocket: RocketLaunchIcon,
  refresh: ArrowPathIcon,
};

export const Philosophy = () => {
  return (
    <section 
      id="philosophy"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto w-full relative z-[20]"
    >
      {/* Badge */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-purple-950/20 backdrop-blur-md rounded-full inline-flex items-center gap-2 mb-6"
      >
        <SparklesIcon className="text-[#b49bff] h-4 w-4" />
        <span className="Welcome-text text-xs md:text-sm font-semibold tracking-wider uppercase">
          DEVELOPMENT PHILOSOPHY
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        variants={slideInFromLeft(0.3)}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
      >
        HOW I{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
          BUILD
        </span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.4)}
        className="text-gray-400 text-center max-w-2xl text-sm sm:text-base mb-14"
      >
        A 5-step problem-first engineering lifecycle turning ambiguous challenges into deployed, resilient and useful software products.
      </motion.p>

      {/* 5-Step Process Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {PHILOSOPHY_STEPS.map((step, idx) => {
          const Icon = ICONS_MAP[step.icon] || CodeBracketIcon;
          return (
            <motion.div
              key={step.number}
              variants={slideInFromLeft(0.2 + idx * 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-5 rounded-2xl border border-purple-500/20 bg-[#030014]/90 backdrop-blur-xl hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between group"
            >
              {/* Step Number Glow */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-500/80 to-cyan-500/80 group-hover:from-purple-400 group-hover:to-cyan-400 transition">
                  {step.number}
                </span>
                <div className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <h4 className="text-[11px] font-semibold text-purple-300/90 uppercase tracking-wider mb-2">
                  {step.tagline}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom line indicator */}
              <div className="mt-5 pt-3 border-t border-purple-900/30 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>Phase {step.number}</span>
                <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">Ready ➔</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
