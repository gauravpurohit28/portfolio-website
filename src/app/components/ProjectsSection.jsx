"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Breast Cancer Diagnosis",
    description: "●	Developed a machine learning model to predict the likelihood of breast cancer  based on patient data.",
    image: "/images/breast.png",
    tag: ["All"],
    gitUrl: "https://colab.research.google.com/drive/1EsRZVwOCfcevIeMiNvXRVkDrjYPjWyKq#scrollTo=Y2YDRxObfUFO",
    previewUrl: "https://gauravbreastcp.glitch.me",
  },
  {
    id: 2,
    title: "Lumen",
    description: "Implemented a memory-driven AI assistant with Gemini 1.5 Pro, utilizing NLP and speech recognition to answer queries.",
    image: "/images/lumen.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/gauravpurohit28/Lumen-latest",
    previewUrl: "https://lumen-frontend.vercel.app",
  },
  {
    id: 3,
    title: "Pulmones",
    description: "An AI driven lung disease prediction website which we made during our hackathon.",
    image: "/images/image.png",
    tag: ["All"],
    gitUrl: "https://github.com/gauravpurohit28/Pulmones",
    previewUrl: "https://pulmones-client.vercel.app",
  },
//   {
//     id: 4,
//     title: "Food Ordering Application",
//     description: "Project 4 description",
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 5,
//     title: "React Firebase Template",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "Full-stack Roadmap",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;