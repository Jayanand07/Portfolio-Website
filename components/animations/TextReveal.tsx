'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function TextReveal({ children, className = '' }: { children: string, className?: string }) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!textRef.current) return
    const lines = textRef.current.querySelectorAll('.reveal-line')
    
    gsap.fromTo(lines, 
      {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)',
      },
      {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      }
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [children])

  return (
    <div ref={textRef} className={className}>
      {children.split('\n').map((line, i) => (
        <div key={i} className="reveal-line overflow-hidden whitespace-pre-wrap leading-relaxed py-1">
          {line.trim() === '' ? '\u00A0' : line}
        </div>
      ))}
    </div>
  )
}
