"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const training = [
  {
    id: 1,
    title: "Cyber Security Essentials",
    institution: "Lovely Professional University",
    period: "June – July 2025",
    description: [
      "Hands-on training in system security, network analysis, threat detection, and ethical cybersecurity practices",
      "Worked with Nmap, Wireshark, and Burp Suite for reconnaissance and traffic analysis",
      "Gained understanding of authentication, encryption, and incident response",
      "Performed vulnerability scanning and secure system configuration",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Training & Experience
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Hands-on training and learning experiences that shaped my expertise.
          </motion.p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {training.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.01, y: -3 }}
              className="group"
            >
              <Card className="border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-2">
                    <div className="flex flex-col md:flex-row md:justify-between gap-2">
                      <span className="font-medium text-foreground/80">{item.institution}</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.description.map((point, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/70 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{point}</span>
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
  )
}
