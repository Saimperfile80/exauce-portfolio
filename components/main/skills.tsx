"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CommandLineIcon, 
  GlobeAltIcon, 
  ServerStackIcon, 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon,
  CircleStackIcon, 
  CpuChipIcon, 
  WrenchIcon, 
  Square3Stack3DIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

import { SkillText } from "@/components/sub/skill-text";
import { Skills3DVisualizer } from "@/components/sub/skills-3d-visualizer";
import { TECH_CATEGORIES, SKILL_LEVELS } from "@/constants/portfolio";

const CATEGORY_ICONS: Record<string, typeof CommandLineIcon> = {
  languages: CommandLineIcon,
  frontend: GlobeAltIcon,
  backend: ServerStackIcon,
  desktop: ComputerDesktopIcon,
  mobile: DevicePhoneMobileIcon,
  databases: CircleStackIcon,
  ai: CpuChipIcon,
  tools: WrenchIcon,
  architecture: Square3Stack3DIcon,
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [levelFilter, setLevelFilter] = useState<string>("all");

  const filteredCategories = TECH_CATEGORIES.filter((cat) => {
    if (activeTab !== "all" && cat.id !== activeTab) return false;
    return true;
  }).map((cat) => {
    if (levelFilter === "all") return cat;
    return {
      ...cat,
      skills: cat.skills.filter((s) => s.level === levelFilter),
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-24 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto w-full z-[20]"
    >
      <SkillText />

      {/* 3D Interactive Skill Constellation */}
      <div className="w-full">
        <Skills3DVisualizer />
      </div>

      {/* Level Legend Banner */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {SKILL_LEVELS.map((lvl) => {
          const isSelected = levelFilter === lvl.name;
          return (
            <button
              key={lvl.name}
              type="button"
              onClick={() => setLevelFilter(isSelected ? "all" : lvl.name)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                isSelected 
                  ? "bg-purple-950/80 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]" 
                  : "bg-[#030014]/60 border-purple-900/30 hover:border-purple-500/40"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${lvl.badgeColor}`}>
                  {lvl.name}
                </span>
                {isSelected && <span className="text-[10px] text-cyan-400 font-mono">Active filter</span>}
              </div>
              <p className="text-[11px] text-gray-400 leading-tight">
                {lvl.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Category Tab Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeTab === "all"
              ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-500/30"
              : "bg-purple-950/30 text-gray-400 hover:text-white border border-purple-900/30"
          }`}
        >
          All Domains
        </button>
        {TECH_CATEGORIES.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.id] || SparklesIcon;
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-500/30"
                  : "bg-purple-950/20 text-gray-400 hover:text-white border border-purple-900/30 hover:border-purple-600/40"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Category Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || SparklesIcon;
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl border border-purple-500/20 bg-[#030014]/85 backdrop-blur-xl hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-950/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600/30 to-cyan-600/30 border border-purple-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pill Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const levelStyle =
                        skill.level === "CORE"
                          ? "border-purple-500/40 bg-purple-950/40 text-purple-200"
                          : skill.level === "WORKING KNOWLEDGE"
                          ? "border-cyan-500/40 bg-cyan-950/40 text-cyan-200"
                          : "border-amber-500/40 bg-amber-950/40 text-amber-200";

                      return (
                        <div
                          key={skill.name}
                          className={`group/skill relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all hover:scale-105 ${levelStyle}`}
                        >
                          <span>{skill.name}</span>
                          <span className="text-[9px] opacity-60 font-sans tracking-tight">
                            {skill.level === "CORE" ? "●" : skill.level === "WORKING KNOWLEDGE" ? "▲" : "○"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-6 pt-3 border-t border-purple-900/20 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>{category.skills.length} competencies listed</span>
                  <span className="text-purple-400/70">Verified & active</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Ambient background video */}
      <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none opacity-20">
        <video
          className="w-full h-full object-cover"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
