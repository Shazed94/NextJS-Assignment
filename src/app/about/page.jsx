import AboutInfo from "@/components/AboutInfo";
import Action from "@/components/Action";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      {/* Navbar Section */}
      <Navbar />

      {/* About Info */}
      <AboutInfo />

      {/* Counter */}
      <Counter />

      {/* Team */}
      <Team />

      {/* Action */}
      <Action />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
