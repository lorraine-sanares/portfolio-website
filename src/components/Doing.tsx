import React from "react";
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaMedium, FaGithub, FaYoutube, FaDiscord } from "react-icons/fa";

const Doing: React.FC = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full h-auto p-28">  
            
            
            
            {/* Heading */}
            <h2 className="text-6xl sm:text-4xl font-extrabold mb-4 text-white">
                    What drives me
            </h2>
            <div className="container h-10"></div>
            {/* Cards Container */} 
            <div className="flex flex-row items-start justify-center w-full gap-10">
                {/* Study Card */}
                <div className="relative flex flex-col w-1/3 h-[530] rounded-3xl bg-white 
                                p-6 bg-opacity-80 backdrop-blur-md overflow-hidden gap-4 
                                hover:bg-[#C0CAFF] transition-transform duration-300 hover:scale-105">
                    {/* Title at the Top Right */}
                    <div className="absolute top-6 right-6 text-4xl sm:text-2xl pb-6 font-bold text-black text-right">
                        MY MISSION<br />
                    </div>

                    <div className="container"></div>

                    {/* Image in the Center */}
                    <div className="flex justify-center items-center pt-1">
                        <Image 
                            src="/assets/book.png" 
                            alt="Overlay" 
                            width={300} 
                            height={100} 
                            style={{ objectFit: "contain" }} 
                            className="rounded-lg"
                        />
                    </div>

                    {/* Text Paragraph Below the Image */}
                    <p className="text-s sm:text-s text-black mb-4 text-left leading-tight">
                        I dedicate my time to continuous learning and upskilling—exploring 
                        frameworks and technologies beyond coursework. 
                        I want to want to deepen my expertise 
                        and apply knowledge in real-world contexts—whether through hands-on 
                        projects, certifications, or self-driven exploration.
                    </p>
                </div>

                {/* Coding Card */}
                <div className="relative flex flex-col w-1/3 h-[530] rounded-3xl bg-white p-6 bg-opacity-80 backdrop-blur-md overflow-hidden gap-4 hover:bg-[#C0CAFF] transition-transform duration-300 hover:scale-105">
                    {/* Title at the Top Right */}
                    <div className="absolute top-6 right-6 text-4xl sm:text-2xl pb-6 font-bold text-black text-right">
                        MY VISION<br />
                    </div>

                    <div className="container"></div>

                    {/* Image in the Center */}
                    <div className="flex justify-center items-center pt-14">
                        <Image 
                            src="/assets/king.png" 
                            alt="Overlay" 
                            width={100} 
                            height={100} 
                            style={{ objectFit: "contain" }} 
                            className="rounded-lg rotate-[25deg]"
                        />
                    </div>

                    {/* Text Paragraph Below the Image */}
                    <p className="text-s sm:text-s text-black pt-4 mb-4 text-left leading-tight">
                        Pursuing a future where I have agency to express my authentic self
                        in my work; finding that perfect blend between what I love, what I&apos;m
                        good at, what the world needs, and what I can be paid for - my ikigai. 
                    </p>

                </div>

                
                {/* Writing Card */}
                <div className="relative flex flex-col w-1/3 h-[530] rounded-3xl bg-white p-6 bg-opacity-80 backdrop-blur-md overflow-hidden gap-6 hover:bg-[#C0CAFF] transition-transform duration-300 hover:scale-105">
                    {/* Title at the Top Right */}
                    <div className="absolute top-6 right-6 text-4xl sm:text-2xl pb-6 font-bold text-black text-right">
                        MY PURPOSE<br />
                    </div>

                    <div className="container"></div>

                    {/* Image in the Center */}
                    <div className="flex justify-center items-center pt-14">
                        <Image 
                            src="/assets/pen.png" 
                            alt="Overlay" 
                            width={180} 
                            height={100} 
                            style={{ objectFit: "contain" }} 
                            className="rounded-lg"
                        />
                    </div>

                    {/* Text Paragraph Below the Image */}
                    <p className="text-s sm:text-s text-black pt-7 mb-4 text-left leading-tight">
                        Shared knowledge is the foundation of growth, innovation, and collective 
                        success - I've had a long-time passion for teaching, therefore I try my best
                        to pass on what I learn through writing, workshops, or everyday conversation. 
                        I aim to foster curiosity and inspire others to push their own boundaries, 
                        as I do mine.
                    </p>

                    {/* Button to Medium Profile */}
                    {/* <a 
                        href="https://medium.com/@yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-auto self-start bg-black text-white text-md font-semibold px-4 py-2 rounded-xl hover:bg-gray-800 transition-all duration-300"
                    >
                        Check Out My Writing
                    </a> */}
                </div>               
            </div>

            {/* Row of favicons */}
            {/* <div className="w-full mt-10 text-start">
                

                <div className="flex w-full justify-evenly gap-6 mt-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-[100px] hover:text-blue-500 transition duration-300" />
                    </a>

                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-[100px] hover:text-gray-300 transition duration-300" />
                    </a>
                    <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                        <FaMedium className="text-white text-[100px] hover:text-gray-400 transition duration-300" />
                    </a>

                </div>
            </div> */}

        </div>
    );
};
export default Doing;