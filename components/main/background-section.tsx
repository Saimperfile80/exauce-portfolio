"use client";

import { motion } from "framer-motion";
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  SparklesIcon, 
  MapPinIcon,
  CalendarIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/constants/portfolio";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const BackgroundSection = () => {
  return (
    <section 
      id="background"
      className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto w-full relative z-[20]"
    >
      {/* Badge */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-purple-950/20 backdrop-blur-md rounded-full inline-flex items-center gap-2 mb-6"
      >
        <SparklesIcon className="text-[#b49bff] h-4 w-4" />
        <span className="Welcome-text text-xs md:text-sm font-semibold tracking-wider uppercase">
          BACKGROUND & QUALIFICATIONS
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        variants={slideInFromLeft(0.3)}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
      >
        EDUCATION &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
          EXPERIENCE
        </span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.4)}
        className="text-gray-300 text-center max-w-2xl text-sm sm:text-base mb-16 leading-relaxed"
      >
        Academic foundations in software engineering and practical systems development.
      </motion.p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Education Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-3 border-b border-purple-900/40">
            <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <AcademicCapIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Education</h3>
              <p className="text-xs text-gray-400 font-mono">Academic Qualifications</p>
            </div>
          </div>

          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={index}
              variants={slideInFromLeft(0.3 + index * 0.1)}
              className="p-6 rounded-2xl border border-purple-500/30 bg-[#030014]/80 backdrop-blur-xl shadow-xl hover:border-cyan-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {edu.degree}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-purple-500/40 bg-purple-900/30 text-purple-200">
                    {edu.status}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{edu.institution}</h4>

                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPinIcon className="w-3.5 h-3.5 text-purple-400" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-3 border-b border-purple-900/40">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <BriefcaseIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Experience & Practice</h3>
              <p className="text-xs text-gray-400 font-mono">Engineering Track Record</p>
            </div>
          </div>

          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={index}
              variants={slideInFromRight(0.3 + index * 0.1)}
              className="p-6 rounded-2xl border border-purple-500/30 bg-[#030014]/80 backdrop-blur-xl shadow-xl hover:border-cyan-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white">{exp.role}</h4>
                  <span className="text-xs font-mono text-cyan-300 flex items-center gap-1">
                    <CalendarIcon className="w-3.5 h-3.5" /> {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-4">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                  {exp.summary}
                </p>

                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckCircleIcon className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

