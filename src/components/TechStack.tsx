"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TechStack: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsVisible(true);
        }
    }, []);
    
    return (
        <section className="relative w-full text-white overflow-hidden min-h-screen bg-[#060C14]">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
            
            {/* Glowing Orb Effect */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                                linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}></div>

            <div className="relative flex flex-col items-start justify-start w-full p-4 sm:p-8 md:p-28">
                {/* Heading */}
                <h1 className={`text-4xl sm:text-5xl md:text-7xl font-extrabold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Tech Stack
                </h1>

                <div className={`flex flex-col items-start justify-start w-full sm:w-2/3 h-auto mb-16 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                        On top of building my proficiency in programming languages for analytics 
                        (i.e Python and R), I also like to dabble in UX/UI design, web development, 
                        data engineering and cloud computing.
                    </p>
                </div>

                {/* Tech Stack Grid */}
                <div className="w-full mb-20">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-200">Technologies</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 w-full">
                        {['python', 'c', 'R_logo', 'html', 'css', 'javascript', 'typescript', 'tailwind', 'react', 'wordpress', 'aws', 'mysql', 'postgres', 'kafka', 'apachespark'].map((tech, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col aspect-square w-full max-w-[90px] sm:max-w-[100px] md:max-w-[120px] rounded-2xl bg-white/10 backdrop-blur-lg items-center justify-center group transition-all duration-300 hover:bg-white/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <Image 
                                    src={`/assets/${tech}.png`} 
                                    alt={tech}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="absolute top-0 left-0 rounded-3xl p-4 transition-transform duration-300 group-hover:scale-110" 
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Libraries Section */}
                <div className={`w-full transition-all duration-500 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-200">Libraries & Tools</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Scikit-Learn', category: 'Machine Learning' },
                            { name: 'Pandas', category: 'Data Analysis' },
                            { name: 'NumPy', category: 'Scientific Computing' }
                        ].map((lib, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-xl font-semibold mb-2">{lib.name}</h3>
                                <p className="text-gray-300">{lib.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;