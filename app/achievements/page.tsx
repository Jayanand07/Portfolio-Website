import PageWrapper from '@/components/layout/PageWrapper'
import Achievements from '@/components/sections/Achievements'

export const metadata = {
  title: 'Awards & Achievements | Jay Anand',
  description: 'Hackathon qualifications, community leadership, and competitive programming milestones.',
}

export default function AchievementsPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#0a0a0a] pt-24">
        <Achievements />
      </main>
    </PageWrapper>
  )
}
