"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-7 place-self-center lg:place-self-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/gaurav.jpg"
              alt="Gaurav Purohit"
              className="object-cover rounded-full transform hover:scale-110 transition-transform duration-500"
              fill
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
