import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTerminal,
  FaLayerGroup,
  FaGraduationCap,
  FaBriefcase
} from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

export * from "./portfolio";

export const SKILL_DATA = [
  { skill_name: "Python", image: "js.png", width: 70, height: 70 },
  { skill_name: "TypeScript", image: "ts.png", width: 70, height: 70 },
  { skill_name: "React", image: "react.png", width: 70, height: 70 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 70, height: 70 },
  { skill_name: "Tauri", image: "tauri.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "HTML", image: "html.png", width: 70, height: 70 },
  { skill_name: "CSS", image: "css.png", width: 70, height: 70 },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Saimperfile80",
    placeholder: "https://github.com/Saimperfile80",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com",
    placeholder: "[YOUR LINKEDIN]",
  },
  {
    name: "Email",
    icon: RxEnvelopeClosed,
    link: "mailto:kassexauce@gmail.com",
    placeholder: "kassexauce@gmail.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Navigation",
    data: [
      { name: "About Me", icon: null, link: "#about-me" },
      { name: "How I Build (5 Phases)", icon: null, link: "#philosophy" },
      { name: "Tech Stack & 3D Visualizer", icon: null, link: "#skills" },
      { name: "Building with AI", icon: null, link: "#ai-architecture" },
    ],
  },
  {
    title: "Projects & Track Record",
    data: [
      { name: "243MLM Academy (Live)", icon: null, link: "#projects" },
      { name: "Featured Projects", icon: null, link: "#projects" },
      { name: "Education (UNIKOL)", icon: FaGraduationCap, link: "#background" },
      { name: "Experience", icon: FaBriefcase, link: "#background" },
    ],
  },
  {
    title: "Connect & Source",
    data: [
      { name: "GitHub @Saimperfile80", icon: FaGithub, link: "https://github.com/Saimperfile80" },
      { name: "LinkedIn Profile", icon: FaLinkedin, link: "https://linkedin.com" },
      { name: "Email Me", icon: FaEnvelope, link: "mailto:kassexauce@gmail.com" },
    ],
  },
] as const;

export const LINKS = {
  github: "https://github.com/Saimperfile80",
  linkedin: "https://linkedin.com",
  email: "mailto:kassexauce@gmail.com",
  sourceCode: "https://github.com/Saimperfile80",
};
