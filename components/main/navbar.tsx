'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { SparklesIcon } from "@heroicons/react/24/solid";

import { PERSONAL_INFO, NAV_LINKS, SOCIALS } from "@/constants/portfolio";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      aria-label="Main Navigation"
      className="w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/40 bg-[#03001438] backdrop-blur-xl z-50 px-4 md:px-10 border-b border-[#7042f820]"
    >
      <div className="w-full h-full flex items-center justify-between m-auto max-w-7xl">
        {/* Brand / Logo */}
        <Link
          href="#about-me"
          className="flex items-center gap-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1"
          aria-label="Go to About Me section"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition">
            <div className="w-full h-full bg-[#030014] rounded-xl flex items-center justify-center">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-lg">
                EK
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm md:text-base text-gray-200 tracking-wide group-hover:text-purple-300 transition">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="text-[11px] text-purple-400 font-mono tracking-wider">
              {PERSONAL_INFO.digitalIdentity}
            </span>
          </div>
        </Link>

        {/* Web Navigation */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex items-center gap-6 border border-[rgba(112,66,248,0.3)] bg-[rgba(3,0,20,0.6)] backdrop-blur-md px-6 py-2 rounded-full text-gray-300 text-xs tracking-wider uppercase font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-cyan-400 transition-colors focus:outline-none focus:text-cyan-400"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA & Social Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-cyan-500 shadow-md shadow-purple-500/20 transition-all cursor-pointer"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>Let&apos;s Build</span>
          </Link>

          <div className="flex items-center gap-3 border-l border-gray-800 pl-4">
            <Link
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white transition cursor-pointer p-1"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-cyan-400 transition cursor-pointer p-1"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="lg:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg bg-purple-950/40 border border-purple-800/40"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#030014f5] backdrop-blur-2xl border-b border-purple-900/40 p-6 flex flex-col gap-4 text-gray-200 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="py-2 px-4 rounded-lg hover:bg-purple-950/50 hover:text-cyan-400 transition text-sm font-medium border-l-2 border-transparent hover:border-cyan-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/30"
            >
              Contact / Let&apos;s Build
            </Link>
          </div>

          <div className="flex justify-center gap-6 pt-2">
            <Link
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-cyan-400"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              aria-label="Send Email"
              className="text-gray-400 hover:text-purple-400"
            >
              <FaEnvelope className="h-6 w-6" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};