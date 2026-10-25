import type { ImageMetadata } from "astro";
import atendoImage from "@/assets/images/atendo-image.webp";
import ainewsImage from "@/assets/images/ainews-image.webp";
import appointifyImage from "@/assets/images/appointify-image.webp";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  youtubeId?: string;
  projectUrl?: string;
  sourceUrl?: string;
};

export const projects = [
  {
    title: "AI News Intelligence Platform",
    description:
      "A knowledge-driven news platform that collects and analyzes articles from multiple sources, powered by retrieval-augmented generation to help users discover connections and explore news.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Next.js",
      "Ollama",
      "Docker",
    ],
    youtubeId: "psiYjUsigNg",
    sourceUrl: "https://github.com/atoshdotdev/ai-news-intelligence-platform",
    image: ainewsImage,
    imageAlt: "AI News Intelligence Platform interface",
  },
  {
    title: "Atendo",
    description:
      "A university attendance management platform that brings students and teaching staff together in one place. It supports attendance tracking, role-based access, and a centralized workflow for managing university attendance.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
    ],
    image: atendoImage,
    imageAlt: "Atendo attendance application interface",
    projectUrl: "https://atendo.fikt.uklo.edu.mk/",
  },
  {
    title: "Appointify",
    description:
      "An appointment scheduling platform that helps service providers manage availability and appointments while allowing customers to book suitable time slots through a streamlined online experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    image: appointifyImage,
    imageAlt: "Appointify appointment scheduling platform interface",
  },
] satisfies Project[];
