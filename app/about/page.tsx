import PageWrapper from '@/components/layout/PageWrapper'
import Hero from '@/components/sections/Hero'

export const metadata = {
  title: 'About | Jay Anand',
  description: 'Learn about Jay Anand — Cybersecurity & Cloud Engineer building secure, scalable systems.',
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#0a0a0a]">
        <Hero />
      </main>
    </PageWrapper>
  )
}
