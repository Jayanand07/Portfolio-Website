import Projects from "@/components/projects";
import Footer from "@/components/footer";

export const metadata = {
  title: "Projects | Jay Anand",
  description:
    "View my portfolio of projects including encryption systems, chatbots, and web development work.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
