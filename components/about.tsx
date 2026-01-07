"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
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
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-md mx-auto group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl border border-primary/10 group-hover:shadow-primary/20 transition-all duration-300">
              <Image
                src="/IMG_5816.JPG"
                alt="Jay Anand"
                width={400}
                height={400}
                className="w-full h-full object-cover object-center scale-110 group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Who I Am
            </motion.h3>

            <motion.div className="space-y-4">
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                I'm a Computer Science Engineering student with a strong focus on cybersecurity, cloud computing, and full-stack web development.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                I have hands-on experience building secure, scalable applications, working with Linux environments, cloud platforms, authentication systems, and modern web technologies.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.85 }}
              >
                My interests include system security, cloud infrastructure, and solving real-world problems through clean, efficient code.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                I am actively seeking opportunities to apply my skills, grow professionally, and contribute to impactful technology solutions.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button
                asChild
                className="group hover:scale-105 transition-transform duration-200"
              >
                <Link href="/contact">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Get In Touch
                  </span>
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="group hover:scale-105 transition-transform duration-200"
              >
                <Link
                  href="https://drive.google.com/file/d/1nbldLP8Q6PP9st3dyIGcF1Tftsr85L5F/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Download Resume
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
