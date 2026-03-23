'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { sendEmail } from '@/lib/emailService'

const socialLinks = [
  { label: "📧 jay.anand23@lpu.in", url: "mailto:jay.anand23@lpu.in" },
  { label: "🐙 github.com/Jayanand07", url: "https://github.com/Jayanand07" },
  { label: "💼 linkedin.com/in/jay-anand10", url: "https://www.linkedin.com/in/jay-anand10" },
  { label: "📱 +91 82920 97151", url: "tel:+918292097151" }
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    
    setStatus('loading')
    try {
      await sendEmail(formRef.current)
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative min-h-[100svh] flex flex-col justify-center items-center py-24 px-6 overflow-hidden bg-[#0a0a0a]">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Header & Info */}
        <div className="flex flex-col justify-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] tracking-tight">
              Let's Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
                Something Secure
              </span>
            </h2>
            <p className="text-xl text-white/50 font-light max-w-md">
              Open to internships, full-time roles, and collaborations. Drop me a message.
            </p>

            <div className="pt-8 flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent-cyan transition-colors font-mono tracking-wide text-sm flex items-center gap-2 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card border border-white/10 p-8 md:p-10 rounded-[24px] relative"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="user_name" className="text-sm font-mono text-white/50 tracking-widest uppercase">Name</label>
              <input 
                type="text" 
                id="user_name"
                name="user_name" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all font-sans"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="user_email" className="text-sm font-mono text-white/50 tracking-widest uppercase">Email</label>
              <input 
                type="email" 
                id="user_email"
                name="user_email" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all font-sans"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-mono text-white/50 tracking-widest uppercase">Message</label>
              <textarea 
                id="message"
                name="message" 
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all resize-none font-sans"
                placeholder="How can we collaborate?"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-white/90 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Form Status Overlays */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-md rounded-[24px] flex flex-col items-center justify-center p-8 text-center z-20 border border-green-500/30"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400 text-3xl">✓</div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent</h3>
                <p className="text-white/60">Connection established successfully. I'll get back to you shortly.</p>
              </motion.div>
            )}
            
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-md rounded-[24px] flex flex-col items-center justify-center p-8 text-center z-20 border border-red-500/30"
              >
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6 text-red-400 text-3xl">✕</div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Transmission Failed</h3>
                <p className="text-white/60">There was an issue sending your message. Please try again or email directly.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
      
      {/* Footer minimal */}
      <div className="w-full mx-auto mt-32 border-t border-white/10 pt-12 pb-8 flex flex-col items-center justify-center text-center">
        <p className="text-white/50 text-sm font-medium">© 2026 Jay Anand. Built with Next.js, Framer Motion & Security-First Mindset.</p>
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/Jayanand07" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jay-anand10" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:jay.anand23@lpu.in" className="text-white/30 hover:text-white transition-colors">Email</a>
        </div>
      </div>

    </section>
  )
}
