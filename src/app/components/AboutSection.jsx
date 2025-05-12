"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { skill: "JavaScript" },
  { skill: "React.js" },
  { skill: "Node.js" },
  { skill: "Next.js" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "TensorFlow" },
  { skill: "MongoDB" },
  { skill: "SQL" },
  { skill: "Git" },
  { skill: "Docker" },
  { skill: "AWS" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
            <p className="text-gray-400 mb-4">
              I&apos;m a final-year Information Technology student passionate about building innovative software solutions. With a strong foundation in both frontend and backend technologies, I specialize in developing responsive web applications with modern frameworks like React and Next.js.
            </p>
            <p className="text-gray-400 mb-4">
              My experience extends to machine learning and AI, where I&apos;ve developed models for various classification and prediction tasks. I also have hands-on experience with DevOps practices, including creating CI/CD pipelines, containerization using Docker, and deploying scalable applications on cloud platforms like AWS.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-2">
                    <p className="text-white text-sm">{item.skill}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
