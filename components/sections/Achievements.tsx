'use client'
import { motion } from 'framer-motion'

interface Achievement {
  title: string
  label: string
  description: React.ReactNode | string
  tags: string[]
}

const achievements: Achievement[] = [
  {
    title: 'Core Member — AWS Students Club LPU',
    label: 'AUG 2023 – PRESENT',
    description: 'Technical Team Core Member at AWS Students Club LPU. Conducted workshops and hands-on sessions on AWS services like EC2, S3, IAM, and Lambda. Supported cloud-based project deployments and guided students on best practices. Worked on cloud security and cost-efficient architectures. Collaborated with team members to organize technical events and grow the developer community.',
    tags: ['AWS', 'Cloud Security'],
  },
  {
    title: 'Google "The Big Code" Hackathon — Round 3 Qualifier',
    label: '2026',
    description: 'Advanced to Round 3 in Google\'s "The Big Code" Hackathon, competing against top student developers. Demonstrated strong problem-solving skills, teamwork, and real-world project building under competitive conditions.',
    tags: ['Hackathon', 'Problem Solving'],
  },
  {
    title: 'Cybersecurity Platform Ranking — TryHackMe',
    label: 'JULY 2025',
    description: (
      <>
        Achieved a <span className="font-bold text-accent-cyan">Top 500</span> monthly ranking on TryHackMe, demonstrating consistent performance in cybersecurity challenges, including penetration testing, Linux, networking, and web security. Ranked within the <span className="font-bold text-accent-purple">Top 10,000</span> users in India overall, reflecting strong hands-on skills and continuous learning in real-world security scenarios.
      </>
    ),
    tags: ['Cybersecurity', 'TryHackMe', 'CTF'],
  },
  {
    title: '100+ DSA Problems Solved — LeetCode',
    label: 'ONGOING',
    description: 'Solved 100+ algorithmic problems on LeetCode focusing on data structures, dynamic programming, graph algorithms, and optimization techniques. Continuously improving problem-solving and coding efficiency.',
    tags: ['DSA', 'Algorithms'],
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-accent-purple/5 blur-[120px] rounded-full mix-blend-screen opacity-50 translate-x-[20%] translate-y-[-20%]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-white/[0.03] text-accent-purple rounded-full border border-accent-purple/20">
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
            Recognition
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight mb-4">
            Awards & Achievements
          </h2>
          <p className="text-white/50 text-lg font-light max-w-xl">
            Milestones from hackathons, community leadership, and continuous problem-solving.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-0">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col md:flex-row gap-4 md:gap-12 py-10 border-b border-white/5 last:border-b-0 hover:bg-white/[0.01] transition-colors duration-300 pl-8 md:pl-0"
              >
                {/* Dot on timeline */}
                <div className="absolute left-0 md:left-[140px] top-12 w-3 h-3 rounded-full bg-[#0a0a0a] border-2 border-white/30 -translate-x-[6px] group-hover:border-accent-cyan group-hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all duration-300 z-10" />

                {/* Left: Label */}
                <div className="md:w-[120px] flex-shrink-0 md:text-right">
                  <span className="text-accent-purple font-mono text-xs tracking-widest uppercase">
                    {item.label}
                  </span>
                </div>

                {/* Right: Content */}
                <div className="flex-1 md:pl-12">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-purple transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/[0.04] text-white/50 border border-white/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
