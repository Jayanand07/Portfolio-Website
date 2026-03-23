import PageWrapper from '@/components/layout/PageWrapper'
import Certifications from '@/components/sections/Certifications'

export const metadata = {
  title: 'Certifications | Jay Anand',
  description: 'Verified courses and certifications in web development, cybersecurity, and software engineering.',
}

export default function CertificationsPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#0a0a0a] pt-24">
        <Certifications />
      </main>
    </PageWrapper>
  )
}
