"use client"

import React from 'react';
import Image from 'next/image';


import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Section */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white sm:text-5xl lg:text-6xl mb-4 text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm </span>
            <br></br>
                <TypeAnimation
                    sequence={[
                    'Gaurav',
                    1000, 
                    'Web Developer',
                    1000,
                    'UI/UX Designer',
                    1000
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            />
          </h1>
          <br></br>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Blending creativity with technology, I specialize in building dynamic and impactful experiences using React, Next.js, and modern design principles, focused on delivering innovative and engaging digital solutions.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-5 place-self-center mt-4 lg:m-20">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[330px] lg:h-[330px] relative overflow-hidden flex items-center justify-center">
            <Image
              src="/images/gaurav.jpg"
              alt="hero image"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
