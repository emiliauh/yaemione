import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function HomePage() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <FAQ />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  );
}
