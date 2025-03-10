import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <div className="space-y-24">
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}