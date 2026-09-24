"use client";

import { motion } from "framer-motion";
import { 
  ArrowTopRightOnSquareIcon, 
  CheckCircleIcon, 
  CodeBracketIcon, 
  SparklesIcon,
  TagIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ProjectItem } from "@/constants/portfolio";

export const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const statusColors: Record<string, string> = {
    "Recently Deployed": "border-emerald-500/60 bg-emerald-950/50 text-emerald-300 shadow-md shadow-emerald-500/20",
    "In Active Development": "border-cyan-500/50 bg-cyan-950/40 text-cyan-300",
    "Prototype": "border-purple-500/50 bg-purple-950/40 text-purple-300",
    "Architecture & Research": "border-amber-500/50 bg-amber-950/40 text-amber-300",
    "Completed": "border-teal-500/50 bg-teal-950/40 text-teal-300",
    "Exploring": "border-blue-500/50 bg-blue-950/40 text-blue-300",
  };

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-purple-500/20 bg-[#030014]/90 backdrop-blur-2xl shadow-xl shadow-purple-950/30 hover:border-cyan-400/50 hover:shadow-cyan-500/10 transition-all p-6 sm:p-8 group"
    >
      {/* Top Banner: Category & Status */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="text-xs font-mono font-semibold text-purple-400 flex items-center gap-1.5">
            <TagIcon className="w-3.5 h-3.5 text-cyan-400" />
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.highlightBadge && (
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-purple-500/40 bg-purple-900/30 text-purple-200">
                {project.highlightBadge}
              </span>
            )}
            <span
              className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                statusColors[project.status] || "border-gray-500/40 bg-gray-900/40 text-gray-300"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-extrabold text-white mb-1 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        {project.subtitle && (
          <h4 className="text-xs font-medium text-gray-400 font-mono mb-4">
            {project.subtitle}
          </h4>
        )}

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Problem Solved Callout */}
        <div className="p-4 rounded-xl border border-purple-900/40 bg-purple-950/20 mb-5">
          <p className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
            Problem Addressed:
          </p>
          <p className="text-xs text-gray-300 leading-relaxed">
            {project.problemSolved}
          </p>
        </div>

        {/* Key Features list */}
        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2 flex items-center gap-1.5">
            <SparklesIcon className="w-3.5 h-3.5 text-purple-400" />
            Core Functionality & Concepts:
          </p>
          <ul className="space-y-1.5">
            {project.keyFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                <CheckCircleIcon className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack & Actions */}
      <div className="pt-5 border-t border-purple-900/30">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-purple-500/30 bg-purple-950/30 text-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons (respecting truthful links rule) */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-md shadow-emerald-600/30 transition-all"
              >
                <GlobeAltIcon className="w-4 h-4 text-white" />
                <span>LIVE DEMO</span>
              </Link>
            )}

            {project.github ? (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 text-gray-300 hover:text-white font-medium p-1"
              >
                <CodeBracketIcon className="w-4 h-4" />
                <span>Source</span>
              </Link>
            ) : (
              !project.demo && (
                <span className="text-gray-500 text-[11px] font-mono flex items-center gap-1">
                  <CodeBracketIcon className="w-3.5 h-3.5" /> [Repository Private / In Progress]
                </span>
              )
            )}
          </div>

          <Link
            href="#contact"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold group/btn"
          >
            <span>Inquire / Discuss</span>
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
