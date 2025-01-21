import React from 'react';
import Image from 'next/image';

const TechStack: React.FC = () => {
    return (
        <section
        style={{
            backgroundImage: "url('/assets/balance.png')",
            backgroundSize: "70%",
            backgroundPosition: "100% 25%",
            backgroundRepeat: "no-repeat", 
        }}
        className="relative w-full h-screen text-white">

            <div className="flex flex-col items-start justify-start w-full h-auto p-16">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                        Tech Stack
                </h1>

                f
                <div className="flex flex-col items-start justify-start w-1/2 h-auto">
                    <p>
                    On top of building my proficiency in programming languages for analytics 
                    (i.e Python and R), I also like to dabble in UX/UI design, web development, 
                    data engineering and cloud computing. <br />

                    <br /> More details of my tech skills can be viewed on my LinkedIn and GitHub!
                    </p>
                </div>
                
                <div className="h-20"></div>

                {/* Language Squares */}
                <div className="flex flex-col items-start justify-start w-1/2 h-auto">
                    
                    {/* Squares Row 1 */}
                    <div className="flex flex-row items-start justify-start w-full h-auto gap-10">
                        {/* Python */}
                        <div className="relative flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/python.png" alt="Overlay" className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl p-3"/>
                        </div>
                        {/* C */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/c.png" alt="Overlay" className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl p-3"/>
                        </div>
                        {/* R */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/R_logo.png" alt="Overlay" className="absolute top-0 left-0 object-cover rounded-3xl p-3"/>
                        </div>
                        {/* HTML */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/html.png" alt="Overlay" className="absolute top-0 left-0 object-cover rounded-3xl p-3"/>
                        </div>
                        {/* CSS */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/css.png" alt="Overlay" className="absolute top-0 left-0 object-cover rounded-3xl p-3"/>
                        </div>
                    </div>
                    <div className="h-20"></div>

                    {/* Row 2 */}
                    <div className="flex flex-row items-start justify-start w-full h-auto gap-10">
                        {/* Tech Squares */}
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                    </div>
                    <div className="h-20"></div>

                    {/* Row 3 */}
                    <div className="flex flex-row items-start justify-start w-full h-auto gap-10">
                        {/* Tech Squares */}
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                        <div className="flex flex-col w-[100] h-[100] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"></div>
                    </div>                    


                </div>

            </div> 
        </section>
    );

};

export default TechStack;