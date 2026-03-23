'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export interface CertificateData {
  title: string
  platform: string
  description: string
  link: string
}

export default function CertificateCard({ cert, index }: { cert: CertificateData, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col h-full glass-card border border-white/10 rounded-2xl overflow-hidden hover:border-accent-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-1 bg-white/[0.02] p-6 md:p-8"
    >
      {/* Content Container */}
      <div className="flex flex-col mb-4 relative z-20">
        <span className="text-accent-cyan text-xs font-bold uppercase tracking-widest mb-3">
          {cert.platform}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-purple transition-all duration-300">
          {cert.title}
        </h3>
      </div>

      <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow relative z-20">
        {cert.description}
      </p>

      {/* Buttons */}
      <div className="mt-auto relative z-20">
        {cert.link !== '#' ? (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-white/5 hover:bg-accent-cyan/20 border border-white/10 hover:border-accent-cyan/50 rounded-xl text-white text-sm font-semibold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
          >
            View
            <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
          </a>
        ) : (
          <button
            disabled
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-white/5 border border-white/10 rounded-xl text-white/40 text-sm font-semibold cursor-not-allowed"
          >
            Certificate Pending
          </button>
        )}
      </div>

      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
    </motion.div>
  )
}
