"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, GraduationCap, Shield, Cloud, Code, Briefcase, TrendingUp, Puzzle } from "lucide-react";

const aboutPoints = [
  { icon: GraduationCap, text: "Computer Science Engineering student (Cybersecurity & Cloud focus)" },
  { icon: Shield, text: "Strong foundation in system security, networking, and Linux" },
  { icon: Cloud, text: "Experience with AWS, Azure, and Oracle Cloud" },
  { icon: Puzzle, text: "Passionate about solving real-world problems through secure code" },
  { icon: TrendingUp, text: "Focused on scalable, performance-driven architectures" },
  { icon: Briefcase, text: "Actively open to internships, roles, and collaborations" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Who I Am
            </span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo with glow effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            {/* Glow effect behind image - reduced opacity */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-3xl blur-2xl opacity-50" />

            {/* Glass border container */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/50 via-primary/20 to-accent/50">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-card">
                <Image
                  src="/IMG_5816.JPG"
                  alt="Jay Anand"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-center"
                  priority
                />
                {/* Cool overlay gradient + vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-cyan-900/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)',
                  }}
                />
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/50 rounded-lg"
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* About points */}
            <div className="space-y-4">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground pt-2 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Education badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass-card rounded-xl p-5 inline-block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Computer Science Engineering</h4>
                  <p className="text-sm text-muted-foreground">2023 – 2027</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Button
                asChild
                className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="group border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
              >
                <Link
                  href="https://drive.google.com/file/d/1nbldLP8Q6PP9st3dyIGcF1Tftsr85L5F/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
