"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-4 text-gray-300"
      >
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          React
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Express
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          JavaScript
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Node.js
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Python
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Firebase
        </li>
      </motion.ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-gray-300"
      >
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Rajasthan Technical University
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          National Institute of Electronics and Information Technology (NIELIT)
        </li>
      </motion.ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-gray-300"
      >
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Indian National Academy of Engineering (INAE) IITJ Hackathon
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Salesforce AI Associate
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          NIELIT Certificate for AI and ML training
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          JP Morgan Chase - Software Engineering Job Simulation
        </li>
      </motion.ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              alt="About Me"
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvNHk0cmVvdDV2OTJpdHI1MWE4M3FkaG0zaDFybzYxZ3d0cXF3cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f3KwliaH4MLtli8z7D/giphy.gif"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a Front-end web developer with expertise in JavaScript, React,
              Redux, Node.js, Express, HTML, CSS, and Git. I am also skilled in
              Python and building machine learning models. With a strong passion
              for technology, I love exploring innovative solutions and pushing
              boundaries in web and AI-driven applications.
            </p>
            <div className="flex flex-row gap-4">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>
            <div className="mt-4">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
