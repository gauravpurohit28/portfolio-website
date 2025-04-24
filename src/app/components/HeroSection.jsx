"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-3/5"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Gaurav Purohit
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  2000,
                  "Full Stack Engineer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
              A passionate software developer specializing in building modern web applications with React, Next.js, and other cutting-edge technologies. Currently seeking opportunities in the IT industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/GauravPurohit-CV.pdf" 
                target="_blank"
                className="px-6 py-2.5 bg-white text-black font-medium rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                Download Resume
              </Link>
              <Link 
                href="#projects" 
                className="px-6 py-2.5 border border-white/20 text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Hexagon shape with gradient border */}
              <div className="w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] relative">
                <div className="absolute w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-xl transform rotate-45 overflow-hidden border border-white/10"></div>
                <div className="absolute w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-xl transform -rotate-45 overflow-hidden border border-white/10"></div>
                
                {/* Outer glow on hover */}
                <div className="absolute inset-1 rounded-lg overflow-hidden bg-[#121212] filter group-hover:blur-[2px] transition-all duration-300"></div>
                
                {/* Image container with grayscale effect */}
                <div className="absolute inset-2 rounded-lg overflow-hidden">
                  <Image
                    src="/images/gaurav.jpg"
                    alt="Gaurav Purohit"
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 220px, (max-width: 1024px) 240px, 280px"
                    priority
                  />
                </div>
                
                {/* Subtle shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 rounded-lg"></div>
              </div>
              
              {/* Background geometric element */}
              <div className="absolute -bottom-4 -right-4 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] border border-white/5 rounded-lg transform rotate-12 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
