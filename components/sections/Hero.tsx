'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20 pb-16 px-6"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Radial Dark Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-purple/5 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-accent-cyan/10 blur-[150px] rounded-full mix-blend-screen opacity-60" />
        <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-accent-purple/10 blur-[150px] rounded-full mix-blend-screen opacity-60" />
        
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
      </div>

      <div className="max-w-[1200px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Mobile: Image on top, Desktop: Image on right -> Order classes */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          {/* Blur gradient circle behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-accent-cyan/30 to-accent-purple/30 rounded-full blur-[100px] opacity-60 pointer-events-none" />

          {/* Image Container */}
          <div className="relative flex items-center justify-center bg-transparent w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden glass-card shadow-[0_0_60px_rgba(6,182,212,0.15)] group transition-all duration-500 hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] border border-white/10 hover:border-accent-cyan/40">
            <Image 
              src="/new-profile-pic.jpg" 
              alt="Jay Anand" 
              fill
              priority
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 480px"
            />
            {/* Soft inner glow overlay for glass look */}
            <div className="absolute inset-0 box-border border border-white/10 rounded-full pointer-events-none" />
          </div>
        </motion.div>

        {/* Text Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 relative"
        >
          {/* Ambient text glow */}
          <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-accent-cyan/20 blur-[100px] rounded-full mix-blend-screen opacity-60 pointer-events-none -z-10" />

          <div className="flex flex-col items-center lg:items-start gap-4 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.1]">
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple pb-2">
                Jay Anand
              </span>
            </h1>
            <p className="text-accent-cyan font-mono text-sm md:text-base tracking-[0.2em] font-semibold uppercase">
              Backend • Cybersecurity • Cloud
            </p>
          </div>

          <div className="space-y-4 text-white/60 text-lg md:text-[20px] font-light leading-relaxed max-w-xl mx-auto lg:mx-0 z-10">
            <p>
              I specialize in building secure backend systems and scalable full-stack applications, with a strong focus on cybersecurity principles and cloud-native architecture.
            </p>
            <p>
              Currently a Computer Science student focused on Cybersecurity & Cloud Engineering.
            </p>
            <p className="font-medium text-white/90 glass-card inline-block px-4 py-2 border border-white/5 rounded-lg lg:-ml-4 mt-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
              I build production-ready systems with a security-first mindset.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto z-10">
            <Link 
              href="/projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-accent-cyan transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1 flex justify-center items-center gap-2 group"
            >
              Explore Work <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex justify-center items-center gap-2 group"
            >
              Get In Touch <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
