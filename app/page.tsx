import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
