import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <Navbar />

      {/* Contact Section */}
      <Contact />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
