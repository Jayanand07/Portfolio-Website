'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export interface ProjectData {
  title: string;
  tagline: string;
  description: string;
  solution: string;
  metrics: { value: string; label: string; explanation?: string }[];
  techStack: { frontend?: string; backend?: string; infrastructure?: string };
  links: { live?: string; code?: string };
  image: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
  currentIndex: number;
  totalProjects: number;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function Modal({ isOpen, onClose, project, currentIndex, totalProjects, onNext, onPrev }: ModalProps) {
  
  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-[40px]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.6 }}
            className="relative w-full max-w-[1200px] max-h-full overflow-y-auto glass-card gradient-border rounded-[32px] p-8 md:p-16 flex flex-col"
          >
            {/* Header / Nav */}
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <div className="text-white/60 font-mono text-sm tracking-widest">
                [{currentIndex + 1}/{totalProjects}]
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 relative border border-white/10">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Body */}
            <div className="w-full max-w-4xl mx-auto space-y-16">
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold">{project.title}</h2>
                <p className="text-xl md:text-2xl text-accent-cyan font-light">{project.tagline}</p>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-sm tracking-widest text-white/50 uppercase font-semibold">The Problem</h3>
                  <p className="text-lg text-white/80 leading-relaxed font-light">{project.description}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm tracking-widest text-white/50 uppercase font-semibold">The Solution</h3>
                  <p className="text-lg text-white/80 leading-relaxed font-light">{project.solution}</p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-sm tracking-widest text-white/50 uppercase font-semibold">The Impact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-2xl glow-hover">
                      <div className="text-3xl font-bold font-display text-accent-cyan mb-2">{metric.value}</div>
                      <div className="text-sm text-white/70 font-medium">{metric.label}</div>
                      {metric.explanation && <div className="text-xs text-white/40 mt-2">{metric.explanation}</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-sm tracking-widest text-white/50 uppercase font-semibold">Tech Stack Breakdown</h3>
                <div className="flex flex-col space-y-4 text-white/80">
                  {project.techStack.frontend && <div><span className="font-semibold text-white">Frontend:</span> {project.techStack.frontend}</div>}
                  {project.techStack.backend && <div><span className="font-semibold text-white">Backend:</span> {project.techStack.backend}</div>}
                  {project.techStack.infrastructure && <div><span className="font-semibold text-white">Infrastructure:</span> {project.techStack.infrastructure}</div>}
                </div>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Footer Actions */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12">
                <div className="flex gap-4">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-accent-cyan transition-colors duration-300">
                      View Live Site →
                    </a>
                  )}
                  {project.links.code && (
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full glass-card text-white hover:text-accent-cyan transition-colors duration-300">
                      View Source Code
                    </a>
                  )}
                </div>

                <div className="flex gap-6">
                  {onPrev && (
                    <button onClick={onPrev} className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                      ← Previous 
                    </button>
                  )}
                  {onNext && (
                    <button onClick={onNext} className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                      Next →
                    </button>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
