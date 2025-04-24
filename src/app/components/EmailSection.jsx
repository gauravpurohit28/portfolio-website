"use client";
import React, { useState } from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    // You can add actual email submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Contact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-white mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out and I'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <EnvelopeIcon className="h-5 w-5" />
                <span>grajpurohittt@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <Link
                  href="https://github.com/gauravpurohit28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-md transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gaurav-purohit-8a3bb6235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-md transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="mailto:grajpurohittt@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-md transition-all duration-300"
                >
                  <EnvelopeIcon className="h-5 w-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="text-sm text-gray-400">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#121212] border border-[#1E1E1E] rounded-md text-white mt-1 focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#121212] border border-[#1E1E1E] rounded-md text-white mt-1 focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Just saying hello"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-[#121212] border border-[#1E1E1E] rounded-md text-white mt-1 focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 self-start mt-2"
              >
                Send Message
              </button>
              {emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
