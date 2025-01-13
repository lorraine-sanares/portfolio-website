"use client";

import React, { useRef, useEffect, useState } from "react";

const Experience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null); // Reference to the container
    const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
    const [circlePositions, setCirclePositions] = useState<number[]>([]);

    useEffect(() => {
        if (containerRef.current) {
            const containerTop = containerRef.current.getBoundingClientRect().top;
            console.log("Container Top:", containerTop); // Debugging the container's position

            const positions = cardRefs.map(ref => {
                const cardTop = ref.current?.getBoundingClientRect().top || 0;
                console.log("Card Top:", cardTop); // Debugging each card's position
                return cardTop - containerTop; // Calculate position relative to the container
            });

            console.log("Circle Positions:", positions); // Debugging the calculated circle positions
            setCirclePositions(positions);
        }
    }, []);

    return (
        <section
            style={{
                backgroundImage: "url('/assets/stack.png')",
                backgroundSize: "150%",
                backgroundPosition: "130% 25%",
            }}
            className="relative w-full h-auto text-white"
        >
            <div className="flex flex-col items-start justify-start w-full h-auto p-16">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                    Work Experience
                </h1>

                {/* Content Container */}
                <div className="flex flex-row items-start w-full h-auto mt-40" ref={containerRef}>
                    {/* Spacer */}
                    <div className="container w-1/2"></div>

                    {/* Vertical Line with Square and Circles */}
                    <div className="relative flex flex-col items-center h-screen w-[50px]">
                        {/* Square */}
                        <div className="w-[50px] h-[50px] rounded-xl bg-white bg-opacity-80"></div>

                        {/* Vertical Line */}
                        <div className="relative border-l border-white h-full"></div>

                        {/* Circles aligned with cards */}
                        {circlePositions.map((position, index) => (
                            <div
                                key={index}
                                className="absolute w-[20px] h-[20px] rounded-full bg-white"
                                style={{ top: `${position + 20}px` }}
                            ></div>
                        ))}
                    </div>

                    {/* Experience Cards */}
                    <div className="flex flex-col items-start justify-start w-auto h-screen p-16 gap-8">
                        <div
                            ref={cardRefs[0]}
                            className="flex flex-col w-[600px] h-[350px] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"
                        >
                            <div className="text-3xl font-bold text-black">AI & Data Intern At Deloitte</div>
                            <p className="text-lg sm:text-xl text-black mb-6 text-left">
                                Nov. 2024 - Dec. 2024
                            </p>
                        </div>

                        <div
                            ref={cardRefs[1]}
                            className="flex flex-col w-[600px] h-[350px] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"
                        >
                            <div className="text-3xl font-bold text-black">Private Piano Teacher</div>
                            <p className="text-lg sm:text-xl text-black mb-6 text-left">
                                Nov. 2024 - Dec. 2024
                            </p>
                        </div>

                        <div
                            ref={cardRefs[2]}
                            className="flex flex-col w-[600px] h-[350px] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"
                        >
                            <div className="text-3xl font-bold text-black">Teaching Assistant At Kumon</div>
                            <p className="text-lg sm:text-xl text-black mb-6 text-left">
                                Nov. 2024 - Dec. 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
