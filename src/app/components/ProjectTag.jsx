"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonClasses = isSelected
    ? "bg-white text-black"
    : "bg-transparent text-white hover:bg-white/10";

  return (
    <motion.button
      className={`${buttonClasses} px-4 py-2 rounded-md text-sm font-medium transition-all duration-300`}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;