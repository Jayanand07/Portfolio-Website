'use client'
import { motion } from 'framer-motion'
import CertificateCard from './CertificateCard'
import type { CertificateData } from './CertificateCard'

const certificationsData: CertificateData[] = [
  {
    title: "Responsive Web Design",
    platform: "freeCodeCamp",
    description: "Completed a comprehensive web design certification covering HTML, CSS, Flexbox, Grid, and responsive layouts. Built multiple real-world projects and passed all automated test suites.",
    link: "https://www.freecodecamp.org/certification/fccd89e1b6a-1316-4fc3-bbe2-5461ed94546e/responsive-web-design"
  },
  {
    title: "Foundations of Cybersecurity",
    platform: "Google - Coursera",
    description: "Learned core cybersecurity concepts including threats, risk management, security principles, and real-world attack scenarios. Built a strong foundation for security-focused engineering.",
    link: "https://coursera.org/share/b249f4142e29e0ba6097afdb3ca58ba0"
  },
  {
    title: "Object Oriented Programming in Java",
    platform: "IBM - Coursera",
    description: "Mastered Java fundamentals, object-oriented programming concepts, and developed logical problem-solving skills using Java classes and data structures.",
    link: "https://coursera.org/share/cb94b2210ca365fe8db623ec08bc867d"
  },
  {
    title: "Java App Development: Fundamentals & OOP",
    platform: "SkillUp - Coursera",
    description: "Covered Java fundamentals, advanced object-oriented programming, and file handling techniques. Built practical applications demonstrating clean architecture.",
    link: "https://coursera.org/share/96d2938363575400c93639c01f0969c4"
  },
  {
    title: "Cloud Computing",
    platform: "NPTEL",
    description: "Learned comprehensive cloud architectures, virtualization protocols, resource management, and deployment strategies for scalable cloud environments.",
    link: "https://drive.google.com/file/d/13XNo4-CJDL3_sTtnhLoetgHo8KVt2swr/view?usp=sharing"
  },
  {
    title: "Spring Boot & Microservices",
    platform: "Self-Paced / Ongoing",
    description: "Currently learning Spring Boot and microservices architecture, focusing on building scalable backend systems, secure REST APIs, and database integrations.",
    link: "#"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 relative bg-[#050505] min-h-screen overflow-hidden border-t border-white/5">
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent-purple/5 blur-[120px] rounded-full mix-blend-screen opacity-60 translate-x-[20%] translate-y-[-20%]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent-cyan/5 blur-[120px] rounded-full mix-blend-screen opacity-60 translate-x-[-20%] translate-y-[20%]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-white/[0.03] text-accent-purple rounded-full border border-accent-purple/20">
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
            Continuous Learning
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Certifications</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Verified courses and certifications in web development, cybersecurity, and software engineering.
          </p>
        </motion.div>

        {/* CSS Grid Layout: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {certificationsData.map((cert, idx) => (
            <CertificateCard key={idx} cert={cert} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
