"use client";
import React from "react";
import { motion as m } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] py-8 border-t border-white/10">
      <div
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            © 2024 Gaurav Purohit. All rights reserved.
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            Made with ❤️ by Gaurav
          </m.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;