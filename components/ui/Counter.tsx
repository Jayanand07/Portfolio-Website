'use client'
import { motion, useMotionValue, useTransform, animate, MotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    const rounded = count.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      })
      return () => {
        rounded()
        controls.stop()
      }
    }
    return () => rounded()
  }, [inView, count, value])

  return (
    <motion.span ref={ref}>
      {displayValue}
      {suffix}
    </motion.span>
  )
}
