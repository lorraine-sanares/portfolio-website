"use client";
import React from "react";
import Image from "next/image";
import { WavyBackground } from "./ui/wavy-background";

const Hero: React.FC = () => {
    return (
        <WavyBackground className="max-w-7xl mx-auto pb-20" style={{ height: "85vh" }}>
            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-20 relative z-10">  
                {/* Text Container */}
                <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto h-auto px-4 sm:px-14 mt-52">  
                    {/* Name Heading */}
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-14 text-center relative z-10 whitespace-nowrap w-full">
                        Lorraine Sanares
                    </h1>
                    {/* Subheading */}
                    <p className="text-sm sm:text-base md:text-lg text-white mb-6 text-center max-w-xl mx-auto">
                        Hi there! 👋 I like to make cool sh*t with code.
                    </p>

                    {/* Down Arrow */}
                    <div className="flex justify-center mt-8">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce text-gray-300">
                          <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </WavyBackground>
    );
};

export default Hero;
