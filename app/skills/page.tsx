import Skills from "@/components/skills";
import Footer from "@/components/footer";

export const metadata = {
  title: "Skills | Jay Anand",
  description:
    "Explore my technical skills and expertise in programming, cybersecurity, cloud computing, and system administration.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-16">
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
