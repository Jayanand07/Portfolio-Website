"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, ArrowRight, Shield, Zap, Lock, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Cyber Security Awareness Portal",
    tagline: "Educating users about cyber threats and safe online practices",
    problem: "Many users lack awareness about cybersecurity threats, making them vulnerable to attacks.",
    solution: "Built an interactive education platform with threat browsing and security awareness modules.",
    duration: "June – July 2025",
    highlights: [
      "Interactive threat browsing with detailed attack explanations",
      "Admin panel for content management with secure authentication",
      "Performance optimized with fast load times and responsive UI",
    ],
    image: "/cybersecurity-banner.png",
    tags: ["TypeScript", "Tailwind CSS", "Vite", "Firebase"],
    accentColor: "red",
    githubUrl: "https://github.com/Jayanand07",
  },
  {
    id: 2,
    title: "Agro Help – AI Agriculture Platform",
    tagline: "Full-stack AI-powered platform for crop guidance and pest alerts",
    problem: "Farmers struggle to get timely, accurate advice on crop management and market prices.",
    solution: "Created an AI-driven platform using Google Gemini for real-time agricultural guidance.",
    duration: "January – March 2025",
    highlights: [
      "AI-powered crop guidance and pest alerts using Google Gemini",
      "Scalable modular architecture with JWT and Firebase auth",
      "Real-time marketplace with mandi prices and crop trading",
    ],
    image: "/agrohelp-banner.png",
    tags: ["TypeScript", "Node.js", "React", "MongoDB", "Firebase"],
    accentColor: "green",
    githubUrl: "https://github.com/Jayanand07",
  },
  {
    id: 3,
    title: "Portfolio Website",
    tagline: "Premium personal portfolio with modern design and animations",
    problem: "Need a standout portfolio that demonstrates engineering skills and design sensibility.",
    solution: "Designed and developed a FAANG-level portfolio with cyber-inspired aesthetics.",
    duration: "March – April 2025",
    highlights: [
      "Premium design with glassmorphism and Framer Motion animations",
      "Optimized performance through lazy loading and efficient components",
      "CI/CD integration with GitHub Actions and Vercel deployment",
    ],
    image: "/Screenshot 2025-05-14 194625.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    accentColor: "cyan",
    liveUrl: "#",
    githubUrl: "https://github.com/Jayanand07",
  },
];

const tagColors: Record<string, string> = {
  "TypeScript": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "JavaScript": "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  "React": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Next.js": "bg-white/10 text-white border-white/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  "Tailwind CSS": "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
  "Vite": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Firebase": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "MongoDB": "bg-green-600/10 text-green-400 border-green-600/20",
  "Vercel": "bg-white/10 text-white border-white/20",
};

const accentStyles: Record<string, { gradient: string; border: string; glow: string }> = {
  red: {
    gradient: "from-red-500/30 via-orange-500/20 to-transparent",
    border: "hover:border-red-500/50",
    glow: "group-hover:shadow-[0_0_60px_rgba(239,68,68,0.15)]",
  },
  green: {
    gradient: "from-green-500/30 via-emerald-500/20 to-transparent",
    border: "hover:border-green-500/50",
    glow: "group-hover:shadow-[0_0_60px_rgba(34,197,94,0.15)]",
  },
  cyan: {
    gradient: "from-cyan-500/30 via-blue-500/20 to-transparent",
    border: "hover:border-cyan-500/50",
    glow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.15)]",
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080c12] to-[#050505]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium bg-white/[0.03] text-cyan-400 rounded-full border border-cyan-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-4 h-4" />
            Real-World Impact
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Secure, scalable solutions built with modern technologies and security-first mindset
          </motion.p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const styles = accentStyles[project.accentColor];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <div className={`glass-card rounded-3xl overflow-hidden border border-white/[0.08] ${styles.border} ${styles.glow} transition-all duration-500`}>
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-[400px] ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                      {/* Security badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <motion.div
                          className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Shield className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-medium text-white">Secure Build</span>
                        </motion.div>
                      </div>

                      {/* Additional floating badges */}
                      <div className="absolute top-4 right-4 z-20">
                        <motion.div
                          className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                        >
                          <Cpu className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-medium text-white">Production Ready</span>
                        </motion.div>
                      </div>

                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      {/* Date */}
                      <div className="flex items-center gap-2 mb-4 text-zinc-500">
                        <Calendar className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm">{project.duration}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-lg text-zinc-300 mb-4">
                        {project.tagline}
                      </p>

                      {/* Problem/Solution */}
                      <div className="mb-6 p-4 bg-white/[0.02] rounded-xl border border-white/[0.05]">
                        <div className="flex items-start gap-2 mb-2">
                          <Lock className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-zinc-400"><span className="text-zinc-300 font-medium">Problem:</span> {project.problem}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-zinc-400"><span className="text-zinc-300 font-medium">Solution:</span> {project.solution}</p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-sm text-zinc-400"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`px-3 py-1.5 text-xs font-medium rounded-lg border backdrop-blur-sm ${tagColors[tag] || "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"} transition-all duration-200`}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                          <Button
                            asChild
                            className="group/btn bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            asChild
                            className="border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link
              href="https://github.com/Jayanand07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              See More on GitHub
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
