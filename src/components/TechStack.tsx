"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const TechStack: React.FC = () => {
    const [imageHeight, setImageHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {  // Ensures it's running client-side
            const img = new window.Image();
            img.src = '/assets/balance.png';
            img.onload = () => setImageHeight(img.height);
        }
    }, []);
    
    return (
        <section className="relative w-full text-white overflow-hidden" style={{ height: `${imageHeight}px` }}>
            {/* Background Image Container */}
            <div className="absolute top-[-250px] left-0 w-full bg-no-repeat bg-cover bg-right" 
                style={{ backgroundImage: "url('/assets/balance.png')", backgroundSize: "contain", backgroundPosition: "right", height: `${imageHeight}px` }}>
            </div>

            <div className="relative flex flex-col items-start justify-start w-full p-4 sm:p-8 md:p-28">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-white">
                    Tech Stack
                </h1>

                <div className="flex flex-col items-start justify-start w-full sm:w-1/2 h-auto">
                    <p className="text-sm sm:text-base">
                        On top of building my proficiency in programming languages for analytics 
                        (i.e Python and R), I also like to dabble in UX/UI design, web development, 
                        data engineering and cloud computing. <br />
                        <br /> 
                    </p>
                </div>
                
                <div className="h-10 sm:h-20"></div>

                {/* Language Squares */}
                <div className="flex flex-col items-start justify-start w-full h-auto">
                    {/* Unified Grid for All Techs */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-10 w-full">
                        {['python', 'c', 'R_logo', 'html', 'css', 'javascript', 'typescript', 'tailwind', 'react', 'wordpress', 'aws', 'mysql', 'postgres', 'kafka', 'apachespark'].map((tech, index) => (
                            <div key={index} className="relative flex flex-col aspect-square w-full max-w-[70px] sm:max-w-[80px] md:max-w-[90px] rounded-2xl bg-white bg-opacity-80 backdrop-blur-md items-center justify-center">
                                <Image 
                                    src={`/assets/${tech}.png`} 
                                    alt={tech}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="absolute top-0 left-0 rounded-3xl p-3" 
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-20"></div>

                {/* Libraries Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                    Libraries
                </h1>

                <div className="flex flex-col items-start justify-start w-1/2 h-full">
                    <ul className="list-disc list-inside">
                        <li>Scikit-Learn</li>
                        <li>Pandas</li>
                        <li>NumPy</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TechStack;