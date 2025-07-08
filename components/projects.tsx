"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
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
    title: "Portfolio Website",
    description:
      "A personal site built with HTML & Tailwind CSS, deployed on Vercel to showcase my skills and journey.",
    image: "/Screenshot 2025-05-14 194625.png",
    tags: ["HTML", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "https://github.com/Jayanand07",
  },
  {
    id: 2,
    title: "Chatbot Input Processor",
    description:
      "A Java module that processes chatbot input using string operations and conditional logic.",
    image: "/AI-powered-chatbot.png",
    tags: ["Java", "String Operations", "Conditional Logic"],
    githubUrl: "https://github.com/Jayanand07",
  },
  {
    id: 3,
    title: "RSA + AES Hybrid Encryption System",
    description:
      "Encrypts both text and image files using RSA & AES encryption techniques. Frontend built with HTML/CSS, backend in Java.",
    image: "/encrypt.png",
    tags: ["Java", "HTML/CSS", "Encryption", "RSA", "AES"],
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
            My Projects
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
            Here are some of my projects that showcase my skills and experience.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-br from-card to-card/50">
                <div className="relative overflow-hidden aspect-video">
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="relative z-20">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.15 + tagIndex * 0.05,
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <div className="flex gap-4 w-full">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 group/btn hover:scale-105 transition-transform duration-200"
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 group/btn hover:scale-105 transition-transform duration-200 border-primary/20 hover:border-primary/40"
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
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
            asChild
            className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-primary/20 hover:border-primary/40"
          >
            <Link
              href="https://github.com/Jayanand07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                See More on GitHub
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
