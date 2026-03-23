'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Reduced parallax
  const yImage = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative min-h-[100svh] py-24 md:py-32 px-6 flex items-center bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Image / Card (Toned down effects, still premium) */}
        <motion.div style={{ y: yImage }} className="relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none order-2 lg:order-1 glass-card p-2 rounded-2xl">
           <div className="w-full h-full rounded-xl overflow-hidden bg-[#141414] relative filter grayscale hover:grayscale-0 transition-all duration-700">
             <img 
               src="/images/about/portrait-2.jpg" 
               alt="Jay Anand" 
               className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
               onError={(e) => {
                 e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop"; 
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
           </div>
        </motion.div>

        {/* Right Side: Content (Fade in once) */}
        <div className="order-1 lg:order-2 space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tight">
              Who I Am
            </h2>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-[18px] md:text-[22px] font-light text-white/80 leading-[1.6]"
          >
            <p>From Zero Trust architectures to cloud-native platforms, I architect solutions that scale infinitely while staying secure.</p>
            <p>Currently studying Computer Science with a focus on Cybersecurity & Cloud Engineering at Lovely Professional University.</p>
            <p>I don't just write code — I build defenses. Every system I create is designed with a security-first mindset, optimized for performance, and ready for production.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/10"
          >
            {[
              { label: 'CLOUD PLATFORMS', value: '3+' },
              { label: 'PROJECTS SHIPPED', value: '10+' },
              { label: 'SECURITY FIRST', value: '100%' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col space-y-2">
                <div className="text-accent-cyan font-display font-bold text-4xl md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.5 }}
             className="pt-6 space-y-3"
          >
             <p className="flex items-center gap-3 text-white/80 font-medium">
                <span className="text-xl">🎓</span> B.Tech CSE (Cybersecurity & Cloud) • 2023-2027
             </p>
             <p className="flex items-center gap-3 text-white/80 font-medium">
                <span className="text-xl">🎯</span> Open to internships, full-time roles, collaborations
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-6 flex flex-col sm:flex-row gap-4"
          >
            <a href="https://drive.google.com/file/d/1nbldLP8Q6PP9st3dyIGcF1Tftsr85L5F/view" target="_blank" rel="noopener noreferrer" className="btn-glow px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-accent-cyan transition-colors duration-300 text-center">
              Download Resume 
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors duration-300 text-center">
              Get In Touch 
            </a>
          </motion.div>
        
        </div>
      </div>
    </section>
  )
}
