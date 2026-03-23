'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxImageProps {
  src: string;
  alt: string;
}

export default function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Slower parallax effect as requested
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <div ref={ref} className="overflow-hidden h-full w-full relative pt-[66.66%]">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
      />
    </div>
  )
}
