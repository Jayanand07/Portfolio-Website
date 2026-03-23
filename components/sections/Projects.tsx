'use client'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import type { ProjectData } from './ProjectCard'

const projectsData: ProjectData[] = [
  {
    title: "SocialHub (Social-Connect)",
    description: "A full-stack enterprise-grade social media platform designed for scalability and real-time interaction. It solves the problem of building secure and performant social systems by implementing JWT-based authentication, role-based access, and WebSocket-powered real-time chat. The system supports posts, comments, likes, follows, and media uploads with Supabase storage. Advanced production features like distributed rate limiting, circuit breaker patterns, and API telemetry ensure high reliability. Integrated Prometheus monitoring and structured logging provide deep observability. Built with a microservice-ready mindset for handling large-scale traffic.",
    techStack: ["Spring Boot 3", "Java 17", "PostgreSQL", "React 18", "Tailwind CSS", "WebSockets", "JWT", "Resilience4j", "Prometheus"],
    image: "/projects/socialhub.png",
    githubUrl: "https://github.com/Jayanand07/Social-Connect"
  },
  {
    title: "AgroHelp (Agri Marketplace SaaS)",
    description: "A full-stack agriculture marketplace platform built to connect farmers, buyers, and sellers in a unified ecosystem. It solves the real-world problem of fragmented agricultural trading by enabling crop selling, machinery listings, and seed/fertilizer marketplaces. The platform includes a unique demo-first architecture ensuring the app works even without backend APIs. It features a unified cart system, AI-powered farming assistant, and mandi price tracking. Designed as a startup-ready SaaS product with scalability and fault tolerance in mind. Supports guest users and demo-safe transactions for seamless showcasing.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase Admin", "Gemini API"],
    image: "/projects/agrohelp.png",
    githubUrl: "https://github.com/Jayanand07/AgroHelp"
  },
  {
    title: "School Management ERP",
    description: "A production-ready multi-tenant school management system built for modern educational institutions. It solves complex school operations by integrating admissions, attendance, exams, payroll, and communication into a single platform. The system includes web, mobile, and REST API interfaces with role-based access and secure JWT authentication. Advanced features like AI-generated insights, analytics dashboards, and automated reporting enhance decision-making. Designed with enterprise-grade security including rate limiting, audit logging, and tenant isolation. Built to support multiple schools with scalable SaaS architecture.",
    techStack: ["Spring Boot", "Java 21", "PostgreSQL", "Redis", "React", "Docker", "NGINX"],
    image: "/projects/schoolerp.png",
    githubUrl: "https://github.com/Jayanand07/School-Management"
  },
  {
    title: "SecureVault (RSA + AES)",
    description: "A secure web application implementing hybrid encryption using AES-256 and RSA-2048 to ensure both performance and security. It addresses the challenge of secure data transmission by combining symmetric and asymmetric encryption techniques. The system includes digital signatures for integrity verification and a vault for storing encrypted data. Supports text, file, and image encryption with a modern UI. Designed with strong cryptographic practices like ephemeral keys and authenticated encryption. Production-ready deployment supported on Render and Vercel.",
    techStack: ["Python", "Flask", "React", "Tailwind CSS", "PyCryptodome", "SQLite"],
    image: "/projects/securevault.png",
    githubUrl: "https://github.com/Jayanand07/rsa-aes-encryption"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-[#050505] min-h-screen overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-accent-cyan/10 blur-[130px] rounded-full mix-blend-screen opacity-50 translate-x-[-50%] translate-y-[-50%]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-accent-purple/10 blur-[130px] rounded-full mix-blend-screen opacity-50 translate-x-[50%] translate-y-[50%]" />
        
        {/* Subtle grid pattern overlay */}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-white/[0.03] text-accent-cyan rounded-full border border-accent-cyan/20">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            Featured Work
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight mb-8">
            Featured <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Projects</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Scalable, secure, and production-ready applications engineered with modern technologies and an enterprise-level architecture pattern.
          </p>
        </motion.div>

        {/* CSS Grid with responsive columns: 1 on mobile, 2 on lg, 3 on xl, 4 on 2xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
