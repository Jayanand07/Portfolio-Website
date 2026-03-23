import PageWrapper from '@/components/layout/PageWrapper'
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#0a0a0a]">
        <Hero />
      </main>
    </PageWrapper>
  );
}
