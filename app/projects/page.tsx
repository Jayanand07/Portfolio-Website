import PageWrapper from '@/components/layout/PageWrapper'
import Projects from '@/components/sections/Projects'

export const metadata = {
  title: 'Projects | Jay Anand',
  description: 'Production-ready projects in full-stack development, cybersecurity, and cloud engineering.',
}

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#0a0a0a] pt-24">
        <Projects />
      </main>
    </PageWrapper>
  )
}
