import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { PERSONAL_INFO } from "@/constants/portfolio";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030014]/90 border-t border-purple-900/30 text-gray-300 backdrop-blur-xl relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col gap-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-xs font-mono text-purple-400">
                ({PERSONAL_INFO.digitalIdentity})
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {PERSONAL_INFO.positioning}
            </p>
            <p className="text-xs font-mono text-cyan-400 mt-2">
              &quot;{PERSONAL_INFO.slogan}&quot;
            </p>
          </div>

          {/* Navigation Links Columns */}
          {FOOTER_DATA.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.data.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="text-xs text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                    >
                      {item.icon && <item.icon className="w-3.5 h-3.5" />}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} ({PERSONAL_INFO.digitalIdentity}). All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with precision for real-world impact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
