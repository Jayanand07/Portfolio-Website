import Certifications from "@/components/certifications";
import Footer from "@/components/footer";

export const metadata = {
  title: "Certifications | Jay Anand",
  description:
    "View my professional certifications and completed courses in cybersecurity, cloud computing, and web development.",
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-16">
        <Certifications />
      </div>
      <Footer />
    </main>
  );
}
