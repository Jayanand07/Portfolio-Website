"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Cyber Security Awareness Portal",
    duration: "June – July 2025",
    summary: "Educating users about cyber threats and safe online practices",
    description: [
      "Developed a cybersecurity awareness portal to educate users about common cyber threats and safe online practices",
      "Implemented threat information browsing, awareness modules, and an admin panel for content management",
      "Optimized platform performance with faster load times and responsive UI",
      "Improved usability and engagement through intuitive design",
    ],
    image: "/cybersecurity-banner.png",
    tags: ["TypeScript", "Tailwind CSS", "Vite", "Firebase", "Firestore"],
    githubUrl: "https://github.com/Jayanand07",
  },
  {
    id: 2,
    title: "Agro Help – AI Agriculture Platform",
    duration: "January – March 2025",
    summary: "Full-stack AI-powered platform for crop guidance and pest alerts",
    description: [
      "Built AI-powered agriculture platform providing crop guidance, pest alerts, and fertilizer recommendations using Google Gemini AI",
      "Designed scalable modular architecture with secure JWT and Firebase authentication",
      "Implemented agriculture marketplace featuring mandi prices, machinery services, and crop trading",
      "Developed responsive UI with real-time weather and market insights",
    ],
    image: "/agrohelp-banner.png",
    tags: ["TypeScript", "Node.js", "React", "MongoDB", "Firebase", "Vercel"],
    githubUrl: "https://github.com/Jayanand07",
  },
  {
    id: 3,
    title: "Portfolio Website",
    duration: "March – April 2025",
    summary: "Modern personal portfolio showcasing projects and skills",
    description: [
      "Designed and developed a modern personal portfolio to showcase projects, skills, and certifications",
      "Improved performance through image optimization and efficient component structuring",
      "Deployed with CI/CD integration using GitHub and Vercel",
    ],
    image: "/Screenshot 2025-05-14 194625.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "https://github.com/Jayanand07",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Real-world applications demonstrating my expertise in building secure, scalable solutions.
          </motion.p>
        </motion.div>

        {/* Asymmetric Layout */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group"
            >
              <Card className={`overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}>
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 !== 0 ? 'md:direction-rtl' : ''}`}>
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video md:aspect-auto md:h-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"
                    />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{project.duration}</span>
                    </div>

                    <CardTitle className="text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="text-base font-medium text-foreground/80 mb-4">
                      {project.summary}
                    </CardDescription>

                    <ul className="space-y-2 mb-6">
                      {project.description.slice(0, 4).map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          asChild
                          className="group/btn hover:scale-105 transition-transform duration-200"
                        >
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="group/btn hover:scale-105 transition-transform duration-200 border-primary/20 hover:border-primary/40"
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
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-primary/20 hover:border-primary/40"
          >
            <Link
              href="https://github.com/Jayanand07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span>See More on GitHub</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
