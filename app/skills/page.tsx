import PageWrapper from '@/components/layout/PageWrapper'
import Skills from '@/components/sections/Skills'

export const metadata = {
  title: 'Skills | Jay Anand',
  description: 'Technical skills and tools — Java, Spring Boot, React, AWS, Cybersecurity, and more.',
}

export default function SkillsPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#0a0a0a] pt-24">
        <Skills />
      </main>
    </PageWrapper>
  )
}
