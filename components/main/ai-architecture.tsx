"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CpuChipIcon, 
  MicrophoneIcon, 
  BoltIcon, 
  WrenchScrewdriverIcon, 
  ArrowPathIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

import { AI_PIPELINE_STEPS } from "@/constants/portfolio";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const AIArchitecture = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const pillars = [
    {
      title: "Local-First Architecture",
      desc: "Deploying quantized models (e.g. Qwen) and local Whisper STT on workstation/edge hardware to ensure zero recurring API costs and complete data sovereignty.",
      tag: "Offline Capable"
    },
    {
      title: "Voice & Speech Pipeline",
      desc: "Fast voice-in to voice-out pipeline: Whisper audio transcription → semantic reasoning → streaming response synthesis (TTS) under sub-second target latencies.",
      tag: "Speech-to-Intent"
    },
    {
      title: "FastMCP & Tool Integration",
      desc: "Using the open Model Context Protocol to securely bridge LLMs with real OS tools, SQLite databases, network printers, and enterprise endpoints.",
      tag: "Agentic Tooling"
    },
    {
      title: "Intent & Context Routing",
      desc: "Structured prompt orchestration, slot filling, and deterministic fallback logic to build reliable business assistants without hallucinations.",
      tag: "Deterministic Logic"
    }
  ];

  return (
    <section 
      id="ai-architecture"
      className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto w-full relative z-[20]"
    >
      {/* Top Badge */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-purple-950/20 backdrop-blur-md rounded-full inline-flex items-center gap-2 mb-6"
      >
        <SparklesIcon className="text-[#b49bff] h-4 w-4" />
        <span className="Welcome-text text-xs md:text-sm font-semibold tracking-wider uppercase">
          AI & INTELLIGENT SYSTEMS
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        variants={slideInFromLeft(0.3)}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
      >
        BUILDING WITH{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
          ARTIFICIAL INTELLIGENCE
        </span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.4)}
        className="text-gray-300 text-center max-w-3xl text-sm sm:text-base mb-16 leading-relaxed"
      >
        Bridging high-level language models with deterministic operational systems. Focusing on private local AI, agentic tool orchestration (MCP), and real-world execution.
      </motion.p>

      {/* Interactive Visual AI Pipeline Flow */}
      <div className="w-full bg-[#030014]/90 border border-purple-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl shadow-purple-900/20 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-900/40">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <CpuChipIcon className="w-6 h-6 text-cyan-400" />
              <span>Voice-to-Action Local AI Pipeline</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Interactive architectural flow: Click any step to inspect technical requirements.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300">
            Local AI → Voice → Intent → Action
          </span>
        </div>

        {/* Steps Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {AI_PIPELINE_STEPS.map((step, idx) => {
            const isCurrent = selectedStep === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                  isCurrent
                    ? "bg-gradient-to-b from-purple-900/60 to-cyan-950/60 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.03]"
                    : "bg-[#07021e]/60 border-purple-900/30 hover:border-purple-500/40 hover:bg-purple-950/30"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-purple-400">
                    {step.step}
                  </span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {step.title}
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono">
                    {step.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive */}
        <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white shrink-0 shadow-lg">
              <BoltIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  STEP {AI_PIPELINE_STEPS[selectedStep].step}
                </span>
                <span className="text-gray-600">•</span>
                <h4 className="text-base font-bold text-white">
                  {AI_PIPELINE_STEPS[selectedStep].title} — {AI_PIPELINE_STEPS[selectedStep].subtitle}
                </h4>
              </div>
              <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
                {AI_PIPELINE_STEPS[selectedStep].desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              onClick={() => setSelectedStep((prev) => (prev > 0 ? prev - 1 : AI_PIPELINE_STEPS.length - 1))}
              className="px-3 py-1.5 rounded-lg border border-purple-500/30 text-xs text-gray-300 hover:text-white hover:bg-purple-900/40 transition"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => setSelectedStep((prev) => (prev < AI_PIPELINE_STEPS.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1.5 rounded-lg border border-cyan-500/40 text-xs text-cyan-300 hover:bg-cyan-900/40 transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* AI Engineering Pillars */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((item, i) => (
          <motion.div
            key={item.title}
            variants={slideInFromLeft(0.2 + i * 0.1)}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl border border-purple-500/20 bg-[#030014]/80 backdrop-blur-xl hover:border-cyan-400/40 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 inline-block mb-4">
                {item.tag}
              </span>
              <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

