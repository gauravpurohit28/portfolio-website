"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Breast Cancer Diagnosis",
    description: "A machine learning model for early detection of breast cancer using histopathological image analysis.",
    image: "/images/breast.png",
    tag: ["All", "ML"],
    gitUrl: "https://colab.research.google.com/drive/1EsRZVwOCfcevIeMiNvXRVkDrjYPjWyKq#scrollTo=Y2YDRxObfUFO",
    previewUrl: "https://gauravbreastcp.glitch.me",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    id: 2,
    title: "Lumen",
    description: "A next-generation AI chatbot utilizing the Gemini API for enhanced natural language processing and content generation.",
    image: "/images/lumen.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gauravpurohit28/Lumen-latest",
    previewUrl: "https://lumen-frontend.vercel.app",
    techStack: ["Next.js", "React", "Gemini API", "TailwindCSS", "Node.js", "Express"]
  },
  {
    id: 3,
    title: "Pulmones",
    description: "A respiratory health monitoring application that analyzes breathing patterns and provides diagnostic insights.",
    image: "/images/image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gauravpurohit28/Pulmones",
    previewUrl: "https://pulmones-client.vercel.app",
    techStack: ["React", "TensorFlow.js", "Node.js", "Express", "MongoDB", "TailwindCSS"]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
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

        <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                techStack={project.techStack}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;