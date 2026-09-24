"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-[70vh] sm:min-h-[85vh] w-full h-full z-[10] overflow-hidden my-12">
      {/* Top Headline */}
      <div className="absolute w-auto h-auto top-6 z-[5] px-4">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-4xl font-bold text-center text-gray-100"
        >
          Performance, Resilience{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            &
          </span>{" "}
          Data Privacy
        </motion.div>
      </div>

      {/* Center Animated Lock & Badge */}
      <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Security Lock Top"
            width={45}
            height={45}
            className="translate-y-4 transition-all duration-300 group-hover:translate-y-10"
          />
          <Image
            src="/lock-main.png"
            alt="Security Lock Body"
            width={65}
            height={65}
            className="z-10 drop-shadow-[0_0_20px_rgba(112,66,248,0.5)]"
          />
        </div>

        <div className="Welcome-box px-4 py-1.5 z-[20] border my-4 border-[#7042F88B] bg-purple-950/40 backdrop-blur-md opacity-[0.95] flex items-center gap-2">
          <ShieldCheckIcon className="w-4 h-4 text-cyan-400" />
          <h1 className="Welcome-text text-xs font-mono font-bold tracking-wider uppercase">
            LOCAL-FIRST & SECURE ARCHITECTURE
          </h1>
        </div>
      </div>

      {/* Bottom Subtitle */}
      <div className="absolute z-[20] bottom-6 px-4">
        <p className="text-sm sm:text-base font-medium text-center text-gray-300 max-w-xl">
          Designed for offline autonomy, privacy-first local AI processing, and enterprise-grade data integrity.
        </p>
      </div>

      {/* Background Video */}
      <div className="w-full flex items-start justify-center absolute opacity-40 -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="w-full h-auto object-cover max-h-[800px]"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
