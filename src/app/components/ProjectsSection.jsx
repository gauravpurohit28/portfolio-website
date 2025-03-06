"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Breast Cancer Diagnosis",
    description: "Developed a machine learning model to predict the likelihood of breast cancer based on patient data.",
    image: "/images/breast.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://colab.research.google.com/drive/1EsRZVwOCfcevIeMiNvXRVkDrjYPjWyKq#scrollTo=Y2YDRxObfUFO",
    previewUrl: "https://gauravbreastcp.glitch.me",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    id: 2,
    title: "Lumen",
    description: "Implemented a memory-driven AI assistant with Gemini 1.5 Pro, utilizing NLP and speech recognition to answer queries.",
    image: "/images/lumen.jpg",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "https://github.com/gauravpurohit28/Lumen-latest",
    previewUrl: "https://lumen-frontend.vercel.app",
    techStack: ["Next.js", "React", "Gemini API", "TailwindCSS", "Node.js", "Express"]
  },
  {
    id: 3,
    title: "Pulmones",
    description: "An AI driven lung disease prediction website which we made during our hackathon.",
    image: "/images/image.png",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "https://github.com/gauravpurohit28/Pulmones",
    previewUrl: "https://pulmones-client.vercel.app",
    techStack: ["React", "TensorFlow.js", "Node.js", "Express", "MongoDB", "TailwindCSS"]
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
    <section id="projects" className="py-20 bg-[#0A0A0A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col items-center gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in AI/ML and web development.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
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
              name="AI/ML"
              isSelected={tag === "AI/ML"}
            />
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="w-full"
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
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;