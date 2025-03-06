"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
        isSelected
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg shadow-purple-500/25"
          : "bg-[#1A1A1A] text-gray-400 border-gray-800 hover:text-white hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
      }`}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      <span className="relative z-10 flex items-center gap-2">
        {name === "All" && "🎯"}
        {name === "Web" && "🌐"}
        {name === "AI/ML" && "🤖"}
        {name}
      </span>
    </motion.button>
  );
};

export default ProjectTag;