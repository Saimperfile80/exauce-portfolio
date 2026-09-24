"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  EnvelopeIcon, 
  SparklesIcon, 
  ClipboardDocumentCheckIcon, 
  ClipboardIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import { PERSONAL_INFO } from "@/constants/portfolio";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section 
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto w-full relative z-[20]"
    >
      {/* Badge */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-4 border border-[#7042f88b] bg-purple-950/20 backdrop-blur-md rounded-full inline-flex items-center gap-2 mb-6"
      >
        <SparklesIcon className="text-[#b49bff] h-4 w-4" />
        <span className="Welcome-text text-xs md:text-sm font-semibold tracking-wider uppercase">
          INITIATE CONTACT
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        variants={slideInFromLeft(0.3)}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
      >
        LET&apos;S BUILD{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
          SOMETHING
        </span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.4)}
        className="text-gray-300 text-center max-w-2xl text-base sm:text-lg mb-12 leading-relaxed"
      >
        Have an idea, a problem to solve, or a product to build? Let&apos;s turn it into software.
      </motion.p>

      {/* Main Contact Container */}
      <motion.div
        variants={slideInFromTop}
        className="w-full max-w-3xl p-8 sm:p-12 rounded-3xl border border-purple-500/30 bg-[#030014]/90 backdrop-blur-2xl shadow-2xl shadow-purple-900/30 flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/30">
          <EnvelopeIcon className="w-8 h-8" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Get in Touch
        </h3>
        
        <p className="text-sm text-gray-400 max-w-lg mb-8 leading-relaxed">
          Whether you want to discuss a full-stack project, explore local AI integrations, or collaborate on digital solutions, feel free to reach out.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full mb-8">
          <Link
            href={`mailto:${PERSONAL_INFO.contact.email}`}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2"
          >
            <PaperAirplaneIcon className="w-4 h-4" />
            <span>Email Me Directly</span>
          </Link>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-purple-200 border border-purple-500/40 bg-purple-950/30 hover:bg-purple-900/40 transition-all flex items-center gap-2"
          >
            {copied ? (
              <>
                <ClipboardDocumentCheckIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300">Email Copied!</span>
              </>
            ) : (
              <>
                <ClipboardIcon className="w-4 h-4 text-purple-400" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

        {/* Social Profile Links */}
        <div className="flex items-center gap-6 pt-6 border-t border-purple-900/30 w-full justify-center text-sm font-medium">
          <Link
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub Profile</span>
          </Link>

          <span className="text-gray-700">•</span>

          <Link
            href={PERSONAL_INFO.contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn Profile</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

