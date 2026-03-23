'use client'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import Image from 'next/image'

export interface ProjectData {
  title: string
  description: string
  techStack: string[]
  image: string
  githubUrl: string
}

export default function ProjectCard({ project, index }: { project: ProjectData, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-accent-cyan/50 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent z-10" />
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Glow behind image on hover */}
        <div className="absolute inset-0 bg-accent-cyan/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-20" />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30 -mt-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-purple transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow line-clamp-6 group-hover:line-clamp-none transition-all duration-500">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[11px] font-medium text-white/80 group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>
        
        <div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white text-sm font-semibold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <Github className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
            View Source
          </a>
        </div>
      </div>
    </motion.div>
  )
}
