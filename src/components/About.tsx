// Doesn't work, image gets cut off
// make photo cicle size dynamic

import React from "react";

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-8 -mt-40 p-16">
        
            {/* About Card */}
            <div className="flex flex-col w-full h-[600] rounded-3xl bg-white p-16 text-start bg-opacity-80 backdrop-blur-md">

                {/* Content Container */}
                <div className="flex flex-row h-full items-left justify-center">

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-black">
                        About
                    </h1>
                    {/* Divider */}
                    {/* <div className="border-l border-black h-full mx-4"></div> */}

                    {/* About Summary */}
                    <p className="text-lg sm:text-xl text-black mb-6 text-left">
                    Hi, I&apos;m Lorraine Sanares. I&apos;m a Student and aspiring 
                    Data Scientist based in Melbourne, Australia. <br />
                    <br />
                    As third-year Bachelor of Science student majoring in Data 
                    Science at the University of Melbourne, I specialize in 
                    extracting powerful and impacful insights from data; 
                    implementing advanced techniques in Python, SQL and 
                    Machine Learning. I use a wide range of visualisation tools 
                    to create beautiful and user-friendly visualisations. My mission 
                    is to empower others by leading dynamic, hands-on workshops that 
                    bridge the gap between theory and industry skills, equipping others 
                    with the knowledge and confidence to excel in their career in tech. 
                    </p>                    

                    {/* More text
                    <p className="text-lg sm:text-xl text-black mb-6 text-left">
                    Hi, I’m Lorraine Sanares. I’m a Student, Writer and Content
                    Creator based in Melbourne, Australia.
                    </p> */}
                </div>
            </div>
        </div>
    );
};
export default About; 

