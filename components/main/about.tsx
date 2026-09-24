"use client";

import { motion } from "framer-motion";
import { 
  CpuChipIcon, 
  ComputerDesktopIcon, 
  GlobeAltIcon, 
  WrenchScrewdriverIcon, 
  BuildingOffice2Icon,
  SparklesIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

import { PERSONAL_INFO } from "@/constants/portfolio";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const About = () => {
  const pillars = [
    {
      title: "Artificial Intelligence & Local AI",
      description: "Designing intelligent agents, local-first LLM orchestration (Qwen), speech interfaces (Whisper), and FastMCP tooling without 100% cloud dependency.",
      icon: CpuChipIcon,
      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400"
    },
    {
      title: "Web & Enterprise Applications",
      description: "Developing robust full-stack platforms using Laravel, FastAPI, React 19, Vite, Vue.js, Angular, and Rails with secure JWT/RBAC architectures.",
      icon: GlobeAltIcon,
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400"
    },
    {
      title: "Desktop & System Software",
      description: "Crafting native Windows and cross-platform desktop utilities with C#/.NET/WPF/MVVM, Tauri, Electron, and PySide6 for IT, diagnostics, and scientific computing.",
      icon: ComputerDesktopIcon,
      color: "from-teal-500/20 to-emerald-500/20 border-teal-500/30 text-teal-400"
    },
    {
      title: "Mobile Solutions (Flutter & Dart)",
      description: "Building responsive, cross-platform mobile experiences with Flutter and Dart, tailored for reliable performance across diverse network environments.",
      icon: SparklesIcon,
      color: "from-blue-500/20 to-sky-500/20 border-blue-500/30 text-blue-400"
    },
    {
      title: "Industrial & Business Software",
      description: "Designing specialized platforms for mining operations, transport management, educational ERPs, and automated workflows.",
      icon: BuildingOffice2Icon,
      color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400"
    },
    {
      title: "African Technology Solutions",
      description: "Focused on solving concrete, high-friction operational challenges tailored for African infrastructures, businesses, and local ecosystems.",
      icon: WrenchScrewdriverIcon,
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400"
    }
  ];

  return (
    <section 
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto w-full relative z-[20]"
    >
      {/* Section Tag */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-purple-950/20 backdrop-blur-md rounded-full inline-flex items-center gap-2 mb-6"
      >
        <SparklesIcon className="text-[#b49bff] h-4 w-4" />
        <span className="Welcome-text text-xs md:text-sm font-semibold tracking-wider uppercase">
          ABOUT ME & MY APPROACH
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={slideInFromLeft(0.3)}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6"
      >
        Engineering Systems That{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
          Solve Real Problems
        </span>
      </motion.h2>

      {/* Core Statement Box */}
      <motion.div
        variants={slideInFromLeft(0.4)}
        className="w-full max-w-4xl p-6 sm:p-8 rounded-2xl border border-purple-500/30 bg-[#030014]/80 backdrop-blur-xl shadow-2xl shadow-purple-900/20 mb-14"
      >
        <div className="flex flex-col gap-4 text-gray-300 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-white">
            {PERSONAL_INFO.bioParagraphs[0]}
          </p>
          <p className="text-gray-400">
            {PERSONAL_INFO.bioParagraphs[1]}
          </p>
          <p className="text-gray-400">
            {PERSONAL_INFO.bioParagraphs[2]}
          </p>
        </div>

        {/* Core Mindset Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-purple-900/30">
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-mono">Problem-First Architecture</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-5 h-5 text-purple-400 shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-mono">Local AI & Agentic Tooling</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-5 h-5 text-teal-400 shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-mono">Concrete Practical Solutions</span>
          </div>
        </div>
      </motion.div>

      {/* Engineering Pillars Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              variants={slideInFromLeft(0.2 + index * 0.1)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-6 rounded-xl border bg-gradient-to-br ${pillar.color} backdrop-blur-md flex flex-col justify-between transition-all shadow-lg hover:shadow-xl hover:border-purple-400/50`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#030014]/70 border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

