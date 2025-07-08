import Contact from "@/components/contact";
import Footer from "@/components/footer";

export const metadata = {
  title: "Contact | Jay Anand",
  description:
    "Get in touch with me for collaboration opportunities, projects, or any inquiries about my work.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
