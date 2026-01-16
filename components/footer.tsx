"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const socials = [
  { href: "https://github.com/Jayanand07", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/jay-anand10", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:anand.jay426344@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Quote */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-lg md:text-2xl font-medium text-foreground/80 italic">
              "Security is not optional — it's foundational."
            </blockquote>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Name and role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Jay Anand
            </Link>
            <p className="text-muted-foreground mt-2">
              Cybersecurity & Cloud Engineer
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socials.map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
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

          {/* Copyright */}
          <motion.div
            className="pt-8 border-t border-border/30 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jay Anand. Built with Next.js & Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
