import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        active
          ? "text-white bg-gradient-to-r from-purple-500 to-pink-500"
          : "text-gray-400 hover:text-white hover:bg-gray-800"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default TabButton;