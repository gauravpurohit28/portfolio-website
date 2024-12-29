"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-0 py-12 text-center text-white"
    >
      <h5 className="text-2xl font-bold mb-4">Let's Connect</h5>
      <p className="text-[#ADB7BE] max-w-3xl mx-auto mb-6">
        I'm currently looking for new opportunities. My inbox is always open! Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <Link href="https://github.com/gauravpurohit28" aria-label="Github">
          <Image
            src={GithubIcon}
            alt="Github Icon"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/gauravpurohit28/"
          aria-label="LinkedIn"
        >
          <Image
            src={LinkedinIcon}
            alt="Linkedin Icon"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
