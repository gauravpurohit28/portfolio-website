"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-16 flex items-center justify-center min-h-[calc(100vh-32px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-5 flex justify-center w-full order-1 lg:order-2"
          >
            <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px]">
              <div className="rounded-full bg-[#181818] w-full h-full relative overflow-hidden">
                <Image
                  src="/images/gaurav.jpg"
                  alt="Gaurav Purohit"
                  className="object-cover transform hover:scale-110 transition-transform duration-500"
                  fill
                  sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <div className="col-span-7 flex flex-col items-center lg:items-start order-2 lg:order-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left w-full"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Hello, I&apos;m
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Gaurav",
                    1000,
                    "Web Developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  className="text-white"
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#ADB7BE] text-base sm:text-lg mt-6 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Blending creativity with technology, I specialize in building dynamic and impactful experiences using React, Next.js, and modern design principles, focused on delivering innovative and engaging digital solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center lg:justify-start"
              >
                <button
                  onClick={() => window.open("/GauravPurohit-CV.pdf", "_blank")}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Download Resume
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
