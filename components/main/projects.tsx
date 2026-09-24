"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesIcon, FolderIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { ProjectCard } from "@/components/sub/project-card";
import { FEATURED_PROJECTS, MORE_PROJECTS } from "@/constants/portfolio";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Projects = () => {
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", "AI & LOCAL AI", "DESKTOP & SYSTEMS", "WEB & PLATFORMS", "SCIENTIFIC & INDUSTRIAL"];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "AI & LOCAL AI") return p.category.includes("AI") || p.category.includes("Voice");
    if (filter === "DESKTOP & SYSTEMS") return p.category.includes("Desktop") || p.category.includes("System");
    if (filter === "WEB & PLATFORMS") return p.category.includes("Web") || p.category.includes("ERP");
    if (filter === "SCIENTIFIC & INDUSTRIAL") return p.category.includes("Mining") || p.category.includes("Scientific");
    return true;
  });

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto w-full relative z-[20]"
    >
      {/* Badge */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-purple-950/20 backdrop-blur-md rounded-full inline-flex items-center gap-2 mb-6"
      >
        <SparklesIcon className="text-[#b49bff] h-4 w-4" />
        <span className="Welcome-text text-xs md:text-sm font-semibold tracking-wider uppercase">
          SYSTEMS, APPS & PROTOTYPES
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        variants={slideInFromLeft(0.3)}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
      >
        FEATURED{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
          PROJECTS
        </span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.4)}
        className="text-gray-300 text-center max-w-3xl text-sm sm:text-base mb-10 leading-relaxed"
      >
        Real-world solutions, local AI experiments, enterprise platforms, and native desktop utilities built with clean architecture and operational reliability in mind.
      </motion.p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
              filter === cat
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                : "bg-purple-950/30 text-gray-400 hover:text-white border border-purple-900/40 hover:border-purple-600/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Projects Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {/* More Projects / Experimental prototypes */}
      <div className="w-full pt-12 border-t border-purple-900/30">
        <div className="flex items-center gap-3 mb-8">
          <FolderIcon className="w-6 h-6 text-cyan-400" />
          <h3 className="text-xl font-bold text-white">MORE PROJECTS & INFRASTRUCTURE</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MORE_PROJECTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-purple-500/20 bg-[#030014]/70 backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-purple-400">{item.category}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-purple-500/30 text-purple-300">
                    {item.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">{item.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-purple-900/20">
                {item.technologies.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/40 border border-purple-900/30 text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
