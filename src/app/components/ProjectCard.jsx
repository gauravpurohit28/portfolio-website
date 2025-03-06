"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStack = [] }) => {
  return (
    <motion.div
      className="relative group bg-[#181818] rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="h-52 md:h-64 relative"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex gap-3">
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <CodeBracketIcon className="h-5 w-5 text-white" />
              </Link>
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <EyeIcon className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-6 bg-[#181818]">
        <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-[#181818]"></div>
        <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;