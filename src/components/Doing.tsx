import React from "react";

const Doing: React.FC = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full h-auto p-16">  
            {/* Heading */}
            <h2 className="text-4xl sm:text-4xl font-extrabold mb-4 text-white">
                    What I'm Doing
            </h2>
            <div className="container h-10"></div>
            {/* Cards Container */} 
            <div className="flex flex-row items-start justify-center w-full gap-10">
                {/* Study Card */}
                <div className="flex flex-col w-1/3 h-[350] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                    {/* Heading */}
                    <div className="text-4xl sm:text-4xl font-bold text-black">Studying</div>
                    {/* Body Text */}
                    <p className="text-lg sm:text-xl text-black mb-6 text-left">Helloo</p>
                </div>

                {/* Coding Card */}
                <div className="flex flex-col w-1/3 h-[350] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                    {/* Heading */}
                    <div className="text-4xl sm:text-4xl font-bold text-black">Coding</div>
                    {/* Body Text */}
                    <p className="text-lg sm:text-xl text-black mb-6 text-left">Helloo</p>
                </div>
                
                {/* Writing Card */}
                <div className="flex flex-col w-1/3 h-[350] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                    {/* Heading */}
                    <div className="text-4xl sm:text-4xl font-bold text-black">Writing</div>
                    {/* Body Text */}
                    <p className="text-lg sm:text-xl text-black mb-6 text-left">Helloo</p>
                </div>                
            </div>

        </div>
    );
};
export default Doing;