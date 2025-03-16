import React from "react";
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
// import Link from "next/link";

const More: React.FC = () => {
    return (
        <section className="relative w-full min-h-[150vh] text-white">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full">
                <Image 
                    src="/assets/semicircles.png" 
                    alt="Background" 
                    layout="fill" 
                    objectFit="contain" 
                    objectPosition="200% 200%"
                    
                />
            </div>
            
            <div className="relative flex flex-col items-start justify-center w-full h-auto p-28 gap-10">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                    More Cool Stuff
                </h1>

                {/* Spacer */}
                <div className="container"></div>

                {/* Cards Container */} 
                <div className="flex flex-row items-start justify-center w-full gap-10">
                    {/* Marathon card */}
                    <div className="flex flex-col w-1/3 h-[400px] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                        {/* Text */}
                        <div className="text-4xl sm:text-2xl font-bold text-black">My Marathon Training</div>
                        <p className="text-lg sm:text-md text-black mb-6 text-left">Helloo</p>
                    
                        <a
                            href="/marathon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-lg font-medium text-black underline hover:text-blue-600 transition duration-300"
                            >
                            Learn more<ArrowRight className="w-5 h-5" />
                        </a>

                    </div>

                    {/* Coding Card */}
                    <div className="flex flex-col w-1/3 h-[400px] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                        {/* Text */}
                        <div className="text-4xl sm:text-2xl font-bold text-black">Women in Tech</div>
                        <p className="text-lg sm:text-md text-black mb-6 text-left">
                            I love learning and teaching. My role as Education
                            Director for WIT Unimelb allows me to combine the two passions - 
                            creating impactful learning experiences for students whilst learning
                            from industry professionals.<br />
                            <br />
                            Check out some of the workshops I run!
                        </p>
                    </div>
                    
                    {/* Resources Card */}
                    <div className="flex flex-col w-1/3 h-[400px] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                        {/* Text */}
                        <div className="text-4xl sm:text-2xl font-bold text-black">Resources</div>            
                        <p className="text-lg sm:text-xl text-black mb-6 text-left">
                            
                        </p>
                    </div>                
                </div>
            </div>
        </section>
    );
};
export default More;
