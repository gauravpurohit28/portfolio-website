"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";

const EmailSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#0A0A0A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg mb-12 leading-relaxed"
        >
          I&apos;m currently looking for new opportunities. My inbox is always open! 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          <Link
            href="https://github.com/gauravpurohit28"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <Image
                src={GithubIcon}
                alt="Github"
                width={24}
                height={24}
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/gauravpurohit28/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                width={24}
                height={24}
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </Link>
          <Link
            href="mailto:grajpurohittt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <EnvelopeIcon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
