import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiInsomnia,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";
import { FaDatabase, FaHtml5, FaNetworkWired } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

export const technologies = [
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-green-500",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "text-red-500",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-zinc-200",
      },
      {
        name: "APIs REST",
        icon: TbApi,
        color: "text-cyan-400",
      },
      {
        name: "Zod",
        icon: FaNetworkWired,
        color: "text-indigo-400",
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        name: "React",
        icon: SiReact,
        color: "text-cyan-400",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },
      {
        name: "HTML",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
    ],
  },
  {
    category: "Banco de dados",
    items: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-400",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-sky-500",
      },
      {
        name: "SQL Server",
        icon: FaDatabase,
        color: "text-red-400",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "Prisma ORM",
        icon: SiPrisma,
        color: "text-zinc-100",
      },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-white",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "text-blue-400",
      },
      {
        name: "Insomnia",
        icon: SiInsomnia,
        color: "text-purple-500",
      },
      {
        name: "Azure DevOps",
        icon: FaCloud,
        color: "text-blue-500",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-white",
      },
    ],
  },
];
