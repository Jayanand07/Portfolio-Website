'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

type Category = 'All' | 'Languages' | 'Frameworks' | 'Databases' | 'Cloud' | 'Security' | 'Tools'

interface Skill {
  name: string
  icon: string
  category: Category
}

const skills: Skill[] = [
  // Languages
  { name: 'Java', icon: 'devicon-java-plain colored', category: 'Languages' },
  { name: 'Python', icon: 'devicon-python-plain colored', category: 'Languages' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'Languages' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'Languages' },
  { name: 'C', icon: 'devicon-c-plain colored', category: 'Languages' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'Languages' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'Languages' },

  // Frameworks
  { name: 'React', icon: 'devicon-react-original colored', category: 'Frameworks' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain', category: 'Frameworks' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'Frameworks' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain colored', category: 'Frameworks' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored', category: 'Frameworks' },

  // Databases
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', category: 'Databases' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', category: 'Databases' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored', category: 'Databases' },

  // Cloud
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored', category: 'Cloud' },
  { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'Cloud' },
  { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored', category: 'Cloud' },

  // Security
  { name: 'Linux', icon: 'devicon-linux-plain', category: 'Security' },

  // Tools
  { name: 'Git', icon: 'devicon-git-plain colored', category: 'Tools' },
  { name: 'GitHub', icon: 'devicon-github-original', category: 'Tools' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', category: 'Tools' },
  { name: 'Figma', icon: 'devicon-figma-plain colored', category: 'Tools' },
  { name: 'Postman', icon: 'devicon-postman-plain colored', category: 'Tools' },
]

const categories: Category[] = ['All', 'Languages', 'Frameworks', 'Databases', 'Cloud', 'Security', 'Tools']

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 md:py-32 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent-cyan/5 blur-[120px] rounded-full mix-blend-screen opacity-60 translate-x-[-20%] translate-y-[-20%]" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent-purple/5 blur-[120px] rounded-full mix-blend-screen opacity-60 translate-x-[20%] translate-y-[20%]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-white/[0.03] text-accent-cyan rounded-full border border-accent-cyan/20">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            Technical Arsenal
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Skills & Tools</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Technologies honed through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                  : 'bg-white/[0.02] text-white/60 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="group relative glass-card border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 bg-white/[0.02] hover:border-accent-cyan/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 min-h-[140px]"
            >
              {/* Icon */}
              <i className={`${skill.icon} text-4xl md:text-[42px] transition-transform duration-300 group-hover:scale-110`} />

              {/* Name */}
              <span className="text-white font-semibold text-sm md:text-base leading-tight">
                {skill.name}
              </span>

              {/* Category Badge */}
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                {skill.category}
              </span>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
