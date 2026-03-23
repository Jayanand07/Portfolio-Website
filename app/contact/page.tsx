import PageWrapper from '@/components/layout/PageWrapper'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'Contact | Jay Anand',
  description: 'Get in touch with Jay Anand for internships, collaborations, or full-time roles.',
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#0a0a0a] pt-24">
        <Contact />
      </main>
    </PageWrapper>
  )
}
