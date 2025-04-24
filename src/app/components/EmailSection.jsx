"use client";
import React from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const EmailSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8">Contact</h2>
          
          <h3 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6">Let&apos;s Connect</h3>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out and I&apos;ll get back to you as soon as possible.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-2 text-gray-300 mb-6 sm:mb-8">
            <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 mb-2 sm:mb-0" />
            <span className="text-base sm:text-lg break-all">grajpurohittt@gmail.com</span>
          </div>
          
          <div className="flex justify-center items-center space-x-4 sm:space-x-6">
            <Link
              href="https://github.com/gauravpurohit28"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 p-2 sm:p-3 rounded-md transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/gaurav-purohit-8a3bb6235/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 p-2 sm:p-3 rounded-md transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/gauravpurohit28"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 p-2 sm:p-3 rounded-md transition-all duration-300 transform hover:scale-110"
              aria-label="X (Twitter)"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="mailto:grajpurohittt@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 p-2 sm:p-3 rounded-md transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
