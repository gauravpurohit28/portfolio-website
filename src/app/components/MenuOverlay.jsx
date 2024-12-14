import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links = [], onClose }) => {
  return (
    <div className="fixed inset-0 z-20 bg-[#121212] bg-opacity-95 flex flex-col items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-2xl"
        aria-label="Close menu"
      >
        ✕
      </button>

      {/* Navigation Links */}
      <ul className="space-y-6">
        {links.map((link, index) => (
          <li key={index} className="text-white text-xl">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
