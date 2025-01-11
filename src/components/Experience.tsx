import React from "react";

const Experience: React.FC = () => {
    return (
        <section       
        style={{
            backgroundImage: "url('/assets/stack.jpg')",
            backgroundSize: "150%",
            backgroundPosition: "130% 25%",
        }}
        className="relative w-full h-auto text-white">
            <div className="flex flex-col items-start justify-start w-full h-auto p-16">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                    Work Experience
                </h1>

                {/* Content Container */}
                <div className="flex flex-row items-start justif-start w-full h-auto mt-40">
                    
                    {/* Spacer */}    
                    <div className="container w-1/2"></div>

                    {/* y-axis line */}
                    <div className="flex flex-col items-center justify-center h-screen ">
                        {/* Square*/}
                        <div className="w-[50px] h-[50px] rounded-xl bg-white bg-opacity-80"></div>

                        {/* Line with dots */}
                        <div className="relative border-l border-white h-full">
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[20px] h-[20px] rounded-full bg-white"></div>
                            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[20px] h-[20px] rounded-full bg-white"></div>
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[20px] h-[20px] rounded-full bg-white"></div>
                        </div>
                    </div>

                    {/* Experience Cards Container */}
                    <div className="flex flex-col items-start justify-start w-auto h-screen p-16 gap-8">
                        {/* Deloitte Card */}
                        <div className="flex flex-col w-[600] h-[350] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            {/* Text */}
                            <div className="text-3xl font-bold text-black">AI & Data Intern At Deloitte</div>
                            <p className="text-lg sm:text-xl text-black mb-6 text-left">Nov. 2024 - Dec. 2024</p>
                        </div>

                        {/* Piano Card */}
                        <div className="flex flex-col w-[600] h-[350] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            {/* Text */}
                            <div className="text-3xl font-bold text-black">Private Piano Teacher</div>
                            <p className="text-lg sm:text-xl text-black mb-6 text-left">Nov. 2024 - Dec. 2024</p>
                        </div>
                        
                        {/* Kumon Card */}
                        <div className="flex flex-col w-[600] h-[350] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            {/* Text */}
                            <div className="text-3xl font-bold text-black">Teaching Assistant At Kumon</div>
                            <p className="text-lg sm:text-xl text-black mb-6 text-left">Nov. 2024 - Dec. 2024</p>
                        </div>


                    </div>

                </div>


            </div>

        </section>
    );
};
export default Experience;