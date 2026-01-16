"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingVisual from "@/components/FloatingVisual";
import TerminalTyping from "@/components/TerminalTyping";
import NetworkLines from "@/components/NetworkLines";
import SystemStatus from "@/components/SystemStatus";

// Custom SVG icons for highlights
const CircuitNodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="4" className="fill-cyan-500/20" />
    <circle cx="12" cy="12" r="2" className="fill-cyan-400" />
    <line x1="12" y1="2" x2="12" y2="8" />
    <line x1="12" y1="16" x2="12" y2="22" />
    <line x1="2" y1="12" x2="8" y2="12" />
    <line x1="16" y1="12" x2="22" y2="12" />
  </svg>
);

const ShieldCircuitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L4 6v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V6l-8-4z" className="fill-cyan-500/10" />
    <circle cx="12" cy="11" r="2" className="fill-cyan-400" />
    <line x1="12" y1="6" x2="12" y2="9" />
    <line x1="12" y1="13" x2="12" y2="16" />
  </svg>
);

const CloudCircuitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 10a4 4 0 00-4-4 4.9 4.9 0 00-1.8.4A5 5 0 007 10a4 4 0 000 8h11a3 3 0 000-6z" className="fill-cyan-500/10" />
    <circle cx="10" cy="12" r="1" className="fill-cyan-400" />
    <circle cx="14" cy="12" r="1" className="fill-cyan-400" />
  </svg>
);

const CodeBracketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
    <polyline points="8 6 2 12 8 18" />
    <polyline points="16 6 22 12 16 18" />
    <line x1="12" y1="4" x2="12" y2="20" strokeDasharray="2 3" />
  </svg>
);

const highlights = [
  { icon: ShieldCircuitIcon, text: "Cybersecurity-focused full-stack engineer" },
  { icon: CloudCircuitIcon, text: "Cloud & infrastructure driven development" },
  { icon: CircuitNodeIcon, text: "Secure systems, APIs, and web platforms" },
  { icon: CodeBracketIcon, text: "Hands-on project experience, not theory" },
];

const socials = [
  { href: "https://github.com/Jayanand07", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/jay-anand10", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:anand.jay426344@gmail.com", icon: Mail, label: "Email" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

// Abstract Identity Orb Component - replaces portrait
const AbstractIdentityOrb = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Outer glow ring */}
    <motion.div
      className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Main gradient orb */}
    <motion.div
      className="relative w-40 h-40 lg:w-56 lg:h-56 rounded-full"
      style={{
        background: `
          radial-gradient(ellipse 80% 80% at 30% 30%, 
            rgba(6, 182, 212, 0.25) 0%, 
            rgba(8, 145, 178, 0.15) 40%, 
            rgba(6, 78, 99, 0.1) 70%,
            transparent 100%
          )
        `,
        boxShadow: `
          0 0 60px rgba(6, 182, 212, 0.15),
          0 0 120px rgba(6, 182, 212, 0.08),
          inset 0 0 60px rgba(6, 182, 212, 0.05)
        `,
      }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Inner highlight */}
      <div
        className="absolute top-4 left-6 w-16 h-16 lg:w-20 lg:h-20 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Abstract geometric lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="orbLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
        </defs>
        {/* Orbit rings */}
        <ellipse cx="100" cy="100" rx="70" ry="25" fill="none" stroke="url(#orbLineGradient)" strokeWidth="0.5" transform="rotate(-20 100 100)" opacity="0.5" />
        <ellipse cx="100" cy="100" rx="50" ry="18" fill="none" stroke="url(#orbLineGradient)" strokeWidth="0.5" transform="rotate(15 100 100)" opacity="0.3" />
      </svg>
    </motion.div>

    {/* Small accent dots */}
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-cyan-400/60"
      style={{ top: "30%", right: "25%" }}
      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
    />
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/40"
      style={{ bottom: "35%", left: "30%" }}
      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
    />
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium animated background with mouse tracking */}
      <AnimatedBackground />

      {/* Network tracer lines - right side only */}
      <div className="absolute inset-0 z-[1] hidden lg:block pointer-events-none">
        <div className="container h-full relative">
          <div className="absolute left-[50%] top-0 w-[50%] h-full opacity-50">
            <NetworkLines />
          </div>
        </div>
      </div>

      {/* Floating Visual Nodes - right side */}
      <div className="absolute inset-0 z-[2] hidden lg:block pointer-events-none">
        <div className="container h-full relative">
          <div className="absolute right-0 top-0 w-[45%] h-full">
            <FloatingVisual />
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="container relative z-10 pt-28 lg:pt-32 pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Hero Text Content (CLEAN, NO OVERLAP) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Main heading - PREMIUM POSTER STYLE */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6"
            >
              <span className="hero-name">JAY ANAND</span>
            </motion.h1>

            {/* Role title - SECONDARY (lighter weight, spaced) */}
            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl font-light text-white/80 mb-6"
              style={{ letterSpacing: '0.02em' }}
            >
              Software Engineer <span className="text-cyan-400/50">|</span> Cloud <span className="text-cyan-400/35">·</span> Security <span className="text-cyan-400/35">·</span> Web
            </motion.h2>

            {/* Value proposition - TERTIARY */}
            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-zinc-400 mb-10 max-w-md leading-relaxed"
            >
              Building secure, scalable, and cloud-native systems with a security-first mindset.
            </motion.p>

            {/* Bullet highlights - supporting content */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2.5 text-zinc-500 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.015] flex items-center justify-center border border-white/[0.04] opacity-60 group-hover:opacity-80 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-all duration-300">
                    <item.icon />
                  </div>
                  <span className="text-xs text-zinc-500">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.2)",
                    "0 0 35px rgba(6, 182, 212, 0.35)",
                    "0 0 20px rgba(6, 182, 212, 0.2)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-lg"
              >
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href="/projects">
                    <span className="relative z-10 flex items-center gap-2">
                      View Projects
                      <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="group border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.03] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link
                  href="https://drive.google.com/file/d/1nbldLP8Q6PP9st3dyIGcF1Tftsr85L5F/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                asChild
                className="group hover:bg-white/[0.03] hover:text-cyan-400 transition-all duration-300"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>

              {/* Social Links - Same line as Get in Touch */}
              {socials.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full border border-white/[0.06] hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                  >
                    <Link
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Abstract Identity Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center h-[400px]"
          >
            <AbstractIdentityOrb />
          </motion.div>
        </div>
      </div>


      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full border border-white/[0.06] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
          >
            <Link href="/#about">
              <ArrowDown className="h-5 w-5 text-cyan-400" />
              <span className="sr-only">Scroll down</span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Live Status Component */}
      <SystemStatus />
    </section>
  );
}
