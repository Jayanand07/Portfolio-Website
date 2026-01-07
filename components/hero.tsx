"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Download, Shield, Cloud, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen py-20 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[10%] text-primary/20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield className="h-16 w-16 md:h-24 md:w-24" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-[15%] text-primary/15"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Cloud className="h-20 w-20 md:h-28 md:w-28" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-[20%] text-primary/10"
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Code className="h-14 w-14 md:h-20 md:w-20" />
        </motion.div>
      </div>

      <div className="container relative flex flex-col items-center text-center min-h-[80vh] justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Jay Anand
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-foreground font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-primary">Cybersecurity</span> & <span className="text-primary">Cloud</span>-Focused{" "}
            <br className="hidden sm:block" />
            Computer Science Engineer
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Building secure, scalable, and performance-driven web applications with strong foundations in systems, cloud, and cybersecurity.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:shadow-xl"
            >
              <Link href="/projects">
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  View My Projects
                </span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              <Link href="/contact">
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  Get In Touch
                </span>
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link
                href="https://drive.google.com/file/d/1nbldLP8Q6PP9st3dyIGcF1Tftsr85L5F/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 mr-2" />
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  Download CV
                </span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              {
                href: "https://github.com/Jayanand07",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/jay-anand10",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://x.com/jayanand42634?s=21",
                icon: Twitter,
                label: "Twitter",
              },
              {
                href: "mailto:anand.jay426344@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:scale-110 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full"
                >
                  <Link
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:scale-110 transition-transform duration-300 rounded-full border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
          >
            <Link href="/#about">
              <ArrowDown className="h-5 w-5 text-primary" />
              <span className="sr-only">Scroll down</span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
