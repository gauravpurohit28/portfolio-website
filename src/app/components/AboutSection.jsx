"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { skill: "JavaScript", level: 90 },
  { skill: "React.js", level: 85 },
  { skill: "Node.js", level: 80 },
  { skill: "Next.js", level: 85 },
  { skill: "TypeScript", level: 75 },
  { skill: "Python", level: 80 },
  { skill: "TensorFlow", level: 70 },
  { skill: "MongoDB", level: 75 },
  { skill: "SQL", level: 80 },
  { skill: "Git", level: 85 },
  { skill: "Docker", level: 70 },
  { skill: "AWS", level: 65 },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
            <p className="text-gray-400 mb-4">
              I&apos;m a final-year Computer Science student passionate about building innovative software solutions. With a strong foundation in both frontend and backend technologies, I specialize in developing responsive web applications with modern frameworks like React and Next.js.
            </p>
            <p className="text-gray-400 mb-4">
              My experience extends to machine learning and AI, where I&apos;ve developed models for various classification and prediction tasks. I&apos;m constantly exploring new technologies to stay at the forefront of the rapidly evolving tech landscape.
            </p>
            <p className="text-gray-400">
              I&apos;m currently seeking full-time opportunities in software development where I can apply my technical skills and contribute to meaningful projects.
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
                    <div className="w-full bg-[#1E1E1E] h-2 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-white rounded-full"
                      ></motion.div>
                    </div>
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
