import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import MenuOverlay from "./components/MenuOverlay";

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import { DockDemo, FloatingDock, FloatingDockDemo } from "./components/DockDemo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <DockDemo/>
      
      <div className="container mx-auto px-12 py-4">
        
        <HeroSection/>
        <AboutSection />
        <ProjectsSection />
      </div>
    
    </main>
  );
}
