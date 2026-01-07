"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Shield, Users, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    id: 1,
    title: "Languages",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["Java", "Python", "JavaScript", "C++"],
  },
  {
    id: 2,
    title: "Frameworks",
    icon: <Layout className="h-8 w-8 text-primary" />,
    skills: ["React", "Next.js", "Spring Boot", "FastAPI"],
  },
  {
    id: 3,
    title: "Tools & Platforms",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Vercel",
      "Figma",
      "Power BI",
    ],
  },
  {
    id: 4,
    title: "Cloud",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    skills: ["AWS", "Microsoft Azure", "Oracle Cloud"],
  },
  {
    id: 5,
    title: "Cybersecurity",
    icon: <Shield className="h-8 w-8 text-primary" />,
    skills: [
      "Network Security",
      "System Security",
      "OWASP",
      "Vulnerability Assessment",
      "Penetration Testing",
      "SIEM",
      "Encryption",
    ],
  },
  {
    id: 6,
    title: "CS Fundamentals",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
    ],
  },
  {
    id: 7,
    title: "Soft Skills",
    icon: <Users className="h-8 w-8 text-primary" />,
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Adaptability",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background"
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
            My Skills
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
            Technologies and skills I've developed through projects, training, and continuous learning.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <motion.div
                    className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        className="flex items-center group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/70 mr-3 group-hover/skill:scale-125 transition-transform duration-200"></div>
                        <span className="text-sm group-hover/skill:text-primary transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
