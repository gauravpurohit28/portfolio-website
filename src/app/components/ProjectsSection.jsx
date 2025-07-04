"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const projectsData = [
  {
    id: 1,
    title: "Virtual Assistant",
    description: "A customizable AI-powered virtual assistant that can perform basic tasks, answer questions, and interact with users via voice commands. Users can personalize their assistant's name and image, and the assistant can perform web searches, play YouTube videos, tell the date/time, and more. Features include voice-activated AI assistant, customizable settings, authentication, task automation (Google/YouTube search, play videos, open calculator, show weather, etc.), and a personalized experience for each user.",
    image: "/images/virtual-assistant.png", // Placeholder image
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/gauravpurohit28/VirtualAssistant", // Placeholder URL
    previewUrl: "/", // Placeholder preview
    techStack: [
      "React (Vite)",
      "React Router",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express",
      "MongoDB (Mongoose)",
      "JWT Auth",
      "Cloudinary",
      "Gemini API",
      "Multer"
    ]
  },
  {
    id: 2,
    title: "MoonBot",
    description: "An automated cryptocurrency trading bot that uses technical analysis and market indicators to identify profitable trading opportunities.",
    image: "/images/moonbot.png",
    tag: ["All", "Web", "ML"],
    gitUrl: "https://github.com/gauravpurohit28/Moonbot",
    previewUrl: "/",
    techStack: ["ReactJS", "Python", "TensorFlow", "WebSockets", "FastAPI", "Firebase"]
  },
  {
    id: 3,
    title: "Lumen",
    description: "A next-generation AI chatbot utilizing the Gemini API for enhanced natural language processing and content generation.",
    image: "/images/lumen.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gauravpurohit28/Lumen-latest",
    previewUrl: "https://lumen-frontend.vercel.app",
    techStack: ["Next.js", "React", "Gemini API", "TailwindCSS", "Python"]
  },
  {
    id: 4,
    title: "Breast Cancer Diagnosis",
    description: "A machine learning model for early detection of breast cancer using histopathological image analysis.",
    image: "/images/breast.png",
    tag: ["All", "ML"],
    gitUrl: "https://colab.research.google.com/drive/1EsRZVwOCfcevIeMiNvXRVkDrjYPjWyKq#scrollTo=Y2YDRxObfUFO",
    previewUrl: "https://gauravbreastcp.glitch.me",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
  },
 
  {
    id: 5,
    title: "Pulmones",
    description: "A respiratory health monitoring application that analyzes breathing patterns and provides diagnostic insights.",
    image: "/images/image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gauravpurohit28/Pulmones",
    previewUrl: "https://pulmones-client.vercel.app",
    techStack: ["React", "TensorFlow.js", "Node.js", "TailwindCSS"]
  },
  {
    id: 6,
    title: "Employee Management System",
    description: "A pure React application for assigning tasks and managing employee task progress, featuring an intuitive UI for streamlined task management.",
    image: "/images/task.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gauravpurohit28/React-Projects/tree/main/ems",
    previewUrl: "/",
    techStack: ["React", "TailwindCSS"]
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMobile, setIsMobile] = useState(false);
  

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }; 
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  

  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };
  
  const handleDragEnd = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const dragEndX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    const delta = dragEndX - dragStartX;
    
    if (Math.abs(delta) > 50) { 
    
      if (delta > 0) {
       
        containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' });
      } else {
      
        containerRef.current.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' });
      }
    }
    
    setIsDragging(false);
  };
  
  const handleDragMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    
    if (e.type === 'mousemove') {
      e.preventDefault();
    }
    
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = x - dragStartX;
    
    // Apply a smaller multiplier for mobile to make swipes feel more responsive
    const multiplier = e.touches ? 0.8 : 0.5;
    
    // Scroll container as user drags
    containerRef.current.scrollLeft -= delta * multiplier;
    setDragStartX(x);
  };

  // Ensure proper touch event handling for mobile devices
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleTouchStart = (e) => handleDragStart(e);
    const handleTouchMove = (e) => handleDragMove(e);
    const handleTouchEnd = (e) => handleDragEnd(e);
    
    // Add passive: false to ensure touch events can be canceled when needed
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]); // Re-add listeners if dragging state changes
  
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold text-white mb-6 md:mb-0">Projects</h2>
          <div className="flex flex-wrap gap-2">
            <ProjectTag
              onClick={handleTagChange}
              name="All"
              isSelected={tag === "All"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Web"
              isSelected={tag === "Web"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="ML"
              isSelected={tag === "ML"}
            />
          </div>
        </div>
        
        <div 
          ref={ref}
          className="relative"
        >
          {/* Navigation buttons */}
          <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => containerRef.current?.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' })}
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => containerRef.current?.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' })}
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          
          {/* Project Grid/Carousel */}
          <div 
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide touch-pan-x"
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={() => setIsDragging(false)}
          >
            <div className={`grid grid-flow-col auto-cols-[100%] md:auto-cols-[33.3%] lg:auto-cols-[33.3%] gap-6 px-1 py-2`}>
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="snap-center px-2"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <motion.div
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="h-full"
                    whileHover={{ y: -5 }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imgUrl={project.image}
                      gitUrl={project.gitUrl}
                      previewUrl={project.previewUrl}
                      techStack={project.techStack}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(Math.ceil(filteredProjects.length / (isMobile ? 1 : 3)))].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (containerRef.current) {
                    const scrollAmount = i * containerRef.current.offsetWidth;
                    containerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                  }
                }}
                className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/60 transition-colors"
                aria-label={`View page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;