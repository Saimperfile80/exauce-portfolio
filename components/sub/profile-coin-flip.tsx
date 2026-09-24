"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SparklesIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

interface ProfileCoinFlipProps {
  size?: number;
  className?: string;
}

export const ProfileCoinFlip = ({ size = 260, className = "" }: ProfileCoinFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Gentle auto-flip periodic reminder when idle
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setIsFlipped((prev) => !prev);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none group cursor-pointer ${className}`}
      onClick={() => setIsFlipped((prev) => !prev)}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsFlipped((prev) => !prev);
      }}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label="Interactive 3D Profile Avatar: Click or hover to flip side"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
    >
      {/* Outer Orbital Glowing Energy Rings */}
      <div className="absolute inset-[-12px] rounded-full bg-gradient-to-tr from-purple-600/40 via-cyan-500/30 to-purple-600/40 blur-xl animate-pulse -z-10" />
      
      <div className="absolute inset-[-6px] rounded-full border border-purple-500/40 animate-spin-slow pointer-events-none" />
      <div className="absolute inset-[-10px] rounded-full border border-dashed border-cyan-400/30 animate-spin pointer-events-none [animation-duration:20s]" />

      {/* 3D Coin Perspective Container */}
      <div
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          perspective: "1200px",
        }}
      >
        {/* 3D Rotating Flipper */}
        <div
          className="w-full h-full relative transition-transform duration-700 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ================= RECTO (FRONT FACE) ================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-2xl shadow-purple-600/40 overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="w-full h-full rounded-full bg-[#030014] relative overflow-hidden flex items-center justify-center">
              <Image
                src="/profile/profile-front.jpeg"
                alt="Kasongo Badinga Exaucé Moise (Front)"
                width={size}
                height={size}
                priority
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />

              {/* Glossy Overlay Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

              {/* Snapchat Coin Badge Overlay */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                <div className="px-3 py-0.5 rounded-full bg-[#030014]/80 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono font-bold text-white shadow-lg flex items-center gap-1">
                  <SparklesIcon className="w-3 h-3 text-cyan-400 animate-spin-slow" />
                  <span>Exaucé Kass</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= VERSO (BACK FACE) ================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-emerald-400 shadow-2xl shadow-cyan-600/40 overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="w-full h-full rounded-full bg-[#030014] relative overflow-hidden flex items-center justify-center">
              <Image
                src="/profile/profile-back.jpeg"
                alt="Kasongo Badinga Exaucé Moise (Back)"
                width={size}
                height={size}
                priority
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />

              {/* Glossy Overlay Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />

              {/* Snapchat Coin Badge Overlay */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                <div className="px-3 py-0.5 rounded-full bg-[#030014]/80 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono font-bold text-cyan-300 shadow-lg flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>BuildinCode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flip Prompt Subtitle */}
      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-gray-400 bg-purple-950/40 px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-md transition-all group-hover:text-cyan-300 group-hover:border-cyan-400/50">
        <ArrowPathIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
        <span>Snapchat Coin 3D (Click to Flip)</span>
      </div>
    </div>
  );
};

