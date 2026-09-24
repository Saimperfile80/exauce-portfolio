"use client";

import { SparklesIcon, ArrowRightIcon, CpuChipIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { PERSONAL_INFO, HERO_DATA } from "@/constants/portfolio";
import { ProfileCoinFlip } from "@/components/sub/profile-coin-flip";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 pt-32 md:pt-40 pb-20 w-full max-w-7xl mx-auto z-[20] gap-12"
    >
      {/* Left Column: Core Identity & Messaging */}
      <div className="w-full lg:w-3/5 flex flex-col gap-6 justify-center text-start">
        {/* Top Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-purple-950/30 backdrop-blur-md rounded-full inline-flex items-center gap-2.5 max-w-max shadow-lg shadow-purple-500/10"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 animate-spin-slow" />
          <span className="Welcome-text text-xs md:text-sm font-semibold tracking-wider uppercase">
            {HERO_DATA.badge}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          variants={slideInFromLeft(0.4)}
          className="flex flex-col gap-2"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {HERO_DATA.headline}
          </h1>
          <p className="text-sm sm:text-base font-mono text-purple-300">
            {PERSONAL_INFO.name}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-xl lg:text-2xl font-bold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              SOFTWARE DEVELOPER
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              AI ENTHUSIAST
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400">
              PRODUCT BUILDER
            </span>
          </div>
        </motion.div>

        {/* Lead Descriptions */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="flex flex-col gap-3 max-w-2xl"
        >
          <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
            &ldquo;{HERO_DATA.description}&rdquo;
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {HERO_DATA.secondaryDescription}
          </p>
        </motion.div>

        {/* Philosophy Slogan callout */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="p-3.5 rounded-xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-sm flex items-center gap-3 text-xs sm:text-sm text-purple-200/90 font-mono"
        >
          <CommandLineIcon className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>&gt; {PERSONAL_INFO.secondarySlogan}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <Link
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/30 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>{HERO_DATA.cta.primary}</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="px-5 py-3 rounded-xl font-medium text-sm text-white border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/50 shadow-md shadow-purple-900/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <FaGithub className="w-4 h-4 text-white" />
            <span>View GitHub</span>
          </Link>

          <Link
            href="#ai-architecture"
            className="px-5 py-3 rounded-xl font-medium text-sm text-cyan-200 border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/40 hover:border-cyan-400/60 shadow-md shadow-cyan-900/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <CpuChipIcon className="w-4 h-4 text-cyan-400" />
            <span>Building with AI</span>
          </Link>

          <Link
            href="#contact"
            className="px-5 py-3 rounded-xl font-medium text-sm text-gray-300 border border-purple-500/30 bg-purple-950/20 hover:bg-purple-900/30 hover:text-white transition-all cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Quick Social & Repos Link */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex items-center gap-4 text-xs text-gray-400 pt-2"
        >
          <span className="font-mono text-gray-500 uppercase tracking-wider">GitHub:</span>
          <Link
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white flex items-center gap-1.5 transition text-cyan-300 font-mono"
          >
            <FaGithub className="w-4 h-4" /> @{PERSONAL_INFO.githubUsername}
          </Link>
          <span className="text-gray-700">•</span>
          <Link
            href={PERSONAL_INFO.contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-cyan-400 flex items-center gap-1.5 transition"
          >
            <FaLinkedin className="w-4 h-4" /> LinkedIn
          </Link>
          <span className="text-gray-700">•</span>
          <Link
            href={`mailto:${PERSONAL_INFO.contact.email}`}
            className="hover:text-purple-400 flex items-center gap-1.5 transition"
          >
            <FaEnvelope className="w-4 h-4" /> {PERSONAL_INFO.contact.email}
          </Link>
        </motion.div>
      </div>

      {/* Right Column: Snapchat 3D Coin Flip Profile Avatar & Futuristic Badges */}
      <motion.div
        variants={slideInFromRight(0.7)}
        className="w-full lg:w-2/5 flex justify-center items-center relative py-6"
      >
        <div className="relative w-full max-w-[420px] flex flex-col items-center justify-center">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-cyan-500/20 to-transparent blur-3xl -z-10" />

          {/* Snapchat 3D Double-Sided Coin Flip Avatar */}
          <ProfileCoinFlip size={280} />

          {/* Floating Feature Badges around avatar */}
          <div className="w-full flex items-center justify-between gap-4 mt-6">
            <div className="bg-[#030014]/90 border border-purple-500/40 rounded-xl p-2.5 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float">
              <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                <CpuChipIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-mono">Core Focus</p>
                <p className="text-xs font-bold text-white">Local AI & FastMCP</p>
              </div>
            </div>

            <div className="bg-[#030014]/90 border border-emerald-500/40 rounded-xl p-2.5 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-delayed">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <RocketLaunchIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-mono">Live Deployed</p>
                <p className="text-xs font-bold text-white">243MLM Academy</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
