import Experience from "@/components/experience";
import Footer from "@/components/footer";

export const metadata = {
  title: "Experience | Jay Anand",
  description:
    "Discover my professional experience and learning journey in cybersecurity, cloud systems, and Linux administration.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <div className="pt-16">
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
