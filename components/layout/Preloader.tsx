'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const text = "JAY ANAND"

  useEffect(() => {
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
          {/* Animated Gradient Mesh Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
            }}
          />

          <div className="z-10 flex space-x-2">
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08 + 0.5,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                className="text-white text-5xl md:text-7xl font-display font-black tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
            className="z-10 mt-8 text-center"
          >
            <p className="text-accent-cyan text-sm md:text-base uppercase tracking-[0.3em] font-semibold">
              SECURITY ENGINEER • CLOUD ARCHITECT • BUILDER
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
