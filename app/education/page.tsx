import Education from "@/components/education";
import Footer from "@/components/footer";

export const metadata = {
  title: "Education | Jay Anand",
  description:
    "Learn about my academic background and Computer Science Engineering degree at Lovely Professional University.",
};

export default function EducationPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-16">
        <Education />
      </div>
      <Footer />
    </main>
  );
}
