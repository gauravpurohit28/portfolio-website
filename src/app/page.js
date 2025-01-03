import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { DockDemo, FloatingDock, FloatingDockDemo } from "./components/DockDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <DockDemo/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <div className="container mt-24 mx-auto px-12 py-15">
        <AboutSection />
        <ProjectsSection />
        <br></br>
        <br></br>
        <br></br>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}