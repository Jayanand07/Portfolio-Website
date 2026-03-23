'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Projects', href: '/projects' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-white font-display font-bold text-xl md:text-2xl tracking-tight z-50 relative group"
        >
          JAY <span className="text-accent-cyan transition-colors duration-300 group-hover:text-accent-purple">ANAND</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative group ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-cyan transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            )
          })}
          <a
            href="https://drive.google.com/file/d/16csUQ4_gSbYuVv4CAe-NFC1gacR7GGe7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-[2px] bg-white rounded-full transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`w-full h-[2px] bg-white rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-[2px] bg-white rounded-full transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-display font-medium transition-colors ${
                      isActive ? 'text-accent-cyan' : 'text-white hover:text-accent-cyan'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <a
                href="https://drive.google.com/file/d/16csUQ4_gSbYuVv4CAe-NFC1gacR7GGe7/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-4 rounded-full bg-white text-black text-center text-lg font-bold"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
