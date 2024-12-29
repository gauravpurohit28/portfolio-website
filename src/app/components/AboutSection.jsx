"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Rajasthan Technical University</li>
        <li>National Institute of Electronics and Information Technology (NIELIT)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Indian National Academy of Engineering (INAE) IITJ Hackathon.</li>
        <li>NIELIT Certificate for AI and ML training.</li>
        <li>JP Morgan Chase - Software Engineering Job Simulation.</li>
      </ul>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-9 px-8  xl:gap-16 sm:py-16 xl:px-16">
      <img align="right" alt="GIF" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvNHk0cmVvdDV2OTJpdHI1MWE4M3FkaG0zaDFybzYxZ3d0cXF3cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f3KwliaH4MLtli8z7D/giphy.gif" width="400px"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
              I am a full-stack web developer with expertise in JavaScript, React, Redux, Node.js, Express, HTML, CSS, and Git. I am also skilled in Python and building machine learning models. With a strong passion for technology, I love exploring innovative solutions and pushing boundaries in web and AI-driven applications.
              I thrive on creating interactive and user-focused experiences, combining technical expertise with creativity to deliver impactful projects. Constantly learning and evolving, I enjoy staying up-to-date with emerging trends and collaborating with like-minded individuals to build the future of technology.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;