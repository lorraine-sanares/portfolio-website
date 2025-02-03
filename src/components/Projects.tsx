import React from "react";
import Image from 'next/image';

// NEED TO FIND A WAY TO REMOVE CONSTANT WIDTHS AND HEIGHTS

const Projects: React.FC = () => {
    return (
        <section
        style={{
            backgroundImage: "url('/assets/circle.png')",
            backgroundSize: "80%",
            backgroundPosition: "-150% 150%",
            backgroundRepeat: "no-repeat", 
            backgroundAttachment: "local", 
        }}
        className="relative w-full h-auto text-white">
            <div className="flex flex-col items-start justify-start w-full h-auto p-28 gap-16">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                    Projects
                </h1>
                
                {/* Running dashboard card */}
                <div className="relative flex flex-row w-full h-[500px] rounded-3xl bg-white p-10 text-start">
                    {/* Left: Text Content */}
                    <div className="flex flex-col w-1/2 h-auto items-start justify-center">
                        <h1 className="text-4xl sm:text-4xl font-extrabold mb-4 text-black">Running Dashboard</h1>
                        <p className="text-4xl sm:text-sm text-black">
                            Hellow jsut testingafaiosdjfasoifjsadifjasioaisdjf
                            asfosidfjsiaoasfkdjasofisajdfoiadsjfiasjdfoaisdjfosadif
                            afodisahjfoisdjfoisjfoisdajfosaidjf
                        </p>

                        {/* Right: Image */}
                        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z-0">
                            <Image 
                                src="/assets/dashboard.png" 
                                alt="Running Dashboard" 
                                fill
                                style={{ objectFit: "cover" }} 
                                className="rounded-r-3xl"
                            />
                        </div>
                    </div>

                </div>

                {/* Bookstore Analysis */}
                <div className="flex flex-row w-full h-[500px] rounded-3xl bg-white p-10 text-start backdrop-blur-md">
                    {/* Left: Text Content */}
                    <div className="flex flex-col w-1/2 h-auto items-start justify-center">
                        <h1 className="text-4xl sm:text-4xl font-extrabold mb-4 text-black">Bookstore Analysis</h1>
                        <p className="text-4xl sm:text-sm text-black">
                            Hellow jsut testingafaiosdjfasoifjsadifjasioaisdjf
                            asfosidfjsiaoasfkdjasofisajdfoiadsjfiasjdfoaisdjfosadif
                            afodisahjfoisdjfoisjfoisdajfosaidjf
                        </p>

                        {/* Right: Image */}
                        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z-0">
                            <Image 
                                src="/assets/dashboard.png" 
                                alt="Running Dashboard" 
                                fill
                                style={{ objectFit: "cover" }} 
                                className="rounded-r-3xl"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Travel Dashboard */}
                <div className="flex flex-row w-full h-[500px] rounded-3xl bg-white p-10 text-start backdrop-blur-md">
                    {/* Left: Text Content */}
                    <div className="flex flex-col w-1/2 h-auto items-start justify-center">
                        <h1 className="text-4xl sm:text-4xl font-extrabold mb-4 text-black">Travel Dashboard</h1>
                        <p className="text-4xl sm:text-sm text-black">
                            Hellow jsut testingafaiosdjfasoifjsadifjasioaisdjf
                            asfosidfjsiaoasfkdjasofisajdfoiadsjfiasjdfoaisdjfosadif
                            afodisahjfoisdjfoisjfoisdajfosaidjf
                        </p>

                        {/* Right: Image */}
                        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z-0">
                            <Image 
                                src="/assets/dashboard.png" 
                                alt="Running Dashboard" 
                                fill
                                style={{ objectFit: "cover" }} 
                                className="rounded-r-3xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="container"></div>

            </div>
        </section>
    );
};

export default Projects;

