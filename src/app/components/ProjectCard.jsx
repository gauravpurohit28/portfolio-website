"use client";
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStack = [] }) => {
  const [imageError, setImageError] = useState(false);

  // Create a themed fallback for the MoonBot project
  const renderFallbackContent = () => {
    if (title === "MoonBot") {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-purple-900/40">
          <div className="text-center p-6">
            <CurrencyDollarIcon className="h-12 w-12 text-blue-400 mx-auto mb-3" />
            <p className="text-blue-300 font-medium">MoonBot</p>
            <p className="text-gray-400 text-xs mt-2">Crypto Trading Bot</p>
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center p-4">
          <CodeBracketIcon className="h-10 w-10 text-gray-500 mx-auto mb-2" />
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="bg-[#121212] border border-[#1E1E1E] rounded-lg overflow-hidden flex flex-col h-full group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 md:h-56 bg-[#1E1E1E] overflow-hidden">
        {!imageError ? (
          <>
            {/* Semi-transparent overlay that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
            
            <Image
              src={imgUrl}
              alt={title}
              fill
              className="object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 transform group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
              priority
            />
            
            {/* Quick action buttons that appear on hover */}
            <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <CodeBracketIcon className="h-5 w-5 text-white" />
              </Link>
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <EyeIcon className="h-5 w-5 text-white" />
              </Link>
            </div>
          </>
        ) : (
          renderFallbackContent()
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-[#1E1E1E] text-gray-300 rounded inline-block"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-auto">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <CodeBracketIcon className="h-4 w-4" />
            <span>Code</span>
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <EyeIcon className="h-4 w-4" />
            <span>Preview</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;