"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-[#1E1E1E] py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-medium mb-4 md:mb-0">
            Gaurav Purohit
          </div>
          
          <nav className="flex gap-6 mb-4 md:mb-0">
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;