'use client'
import { motion } from 'framer-motion'
import React from 'react'

const experiences = [
  {
    type: 'Experience',
    title: 'Independent Developer — Freelance & Personal Projects',
    organization: 'Self-Employed',
    period: 'August 2024 – Present',
    description: 'Building real-world full-stack and backend systems with a focus on security, scalability, and performance. Developed multiple production-ready applications including social platforms, encryption systems, and SaaS-style products. Worked on API design, authentication (JWT), database architecture, and cloud-based deployments. Focused on writing clean, maintainable code and solving practical use-case problems.'
  },
  {
    type: 'Training',
    title: 'Cyber Security Essentials',
    organization: 'Lovely Professional University',
    period: 'June – July 2025',
    description: 'Hands-on training in system security, network analysis, threat detection, and ethical cybersecurity practices. Worked with industry tools: Nmap, Wireshark, Burp Suite for reconnaissance and traffic analysis. Gained practical understanding of authentication, encryption, and incident response. Performed vulnerability scanning, malware investigation, and secure system configuration.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 bg-[#0a0a0a] px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
            Experience & Training
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {experiences.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_15px_rgba(0,212,255,0.5)] -left-[9px] top-1" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <span className="text-accent-purple font-mono text-sm tracking-wider">{item.period}</span>
                <span className="hidden md:inline text-white/20">—</span>
                <span className="text-white/60 text-sm tracking-widest uppercase">{item.type}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1 flex items-center gap-3">
                 {item.type === 'Experience' ? '💼' : item.type === 'Education' ? '🎓' : '🛡️'} {item.title}
              </h3>
              <div className="text-lg text-white/50 mb-4">{item.organization}</div>
              
              <p className="text-white/70 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-16 text-center md:text-left"
        >
           <a href="https://drive.google.com/file/d/1nbldLP8Q6PP9st3dyIGcF1Tftsr85L5F/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex btn-glow px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-accent-cyan transition-colors duration-300 gap-2">
              Download Certificate →
            </a>
        </motion.div>

      </div>
    </section>
  )
}
