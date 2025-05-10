// Doesn't work, image gets cut off
// make photo cicle size dynamic

import React from "react";
import Image from "next/image";
import LampDemo from "@/components/lamp-demo";

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-8 mt-20 p-4 sm:p-28 relative z-10">
            {/* Lamp Demo */}
            <LampDemo />
            {/* About Card */}
            <div className="flex flex-col sm:flex-row w-full h-auto sm:h-[800px] rounded-3xl bg-white p-4 sm:p-16 text-start bg-opacity-80 backdrop-blur-md">
                
                {/* Image Container */}
                <div className="relative w-full h-[300px] sm:h-full overflow-hidden rounded-3xl">
                    <Image 
                        src="/assets/sideprofile.jpg" 
                        alt="profile" 
                        fill 
                        style={{ objectFit: "cover" }} 
                        className="absolute top-0 left-0"
                    />
                </div> 

                {/* Divider */}
                <div className="border-t sm:border-l border-black w-full sm:w-0 h-0 sm:h-full my-4 sm:my-0 mx-0 sm:mx-12"></div>

                {/* Content Container */}
                <div className="flex flex-col justify-start items-start w-full h-full">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-black">
                        About
                    </h1>

                    {/* About Summary */}
                    <p className="text-sm sm:text-base text-black mb-6 text-left">
                        It all began with a simple dashboard.<br />
                        <br />
                        In 2022, as a Year 12 student, I built a Tableau dashboard 
                        visualising COVID border restrictions. It was just a school 
                        project, but something clicked. I was drawn to the process 
                        of transforming raw data into compelling visual stories. 
                        That project sparked my curiosity in data.<br />
                        <br />

                        For the past two years, I&apos;ve been studying data science at 
                        The University of Melbourne, learning how to extract insights 
                        from complex datasets and communicate them in ways that drive
                        impact. Now, as a third-year student, I&apos;ve realised that I 
                        love the dynamic nature of problem-solving—combining technical 
                        expertise with storytelling to support the bigger picture 
                        through data.<br />
                        <br />

                        But learning data science hasn&apos;t been smooth sailing. Like many STEM 
                        students, I struggled to bridge the gap between theory and 
                        practice—spending hours on formula proofs and debugging 
                        algorithms, unsure of the practical applications to real-world 
                        challenges.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About; 

