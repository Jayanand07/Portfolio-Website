import PageWrapper from '@/components/layout/PageWrapper'
import Experience from '@/components/sections/Experience'

export const metadata = {
  title: 'Experience | Jay Anand',
  description: 'Education, training, and professional experience of Jay Anand.',
}

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#0a0a0a] pt-24">
        <Experience />
      </main>
    </PageWrapper>
  )
}
