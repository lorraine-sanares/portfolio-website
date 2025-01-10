import React from "react";

const Experience: React.FC = () => {
    return (
        <section       
        style={{
            backgroundImage: "url('/assets/stack.jpg')",
            backgroundSize: "150%",
            backgroundPosition: "130% 25%",
        }}
        className="relative w-full h-auto bg-norepeat text-white">
            <div className="flex flex-col items-start justify-start w-full h-screen p-16">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                    Work Experience
                </h1>

                {/* Content Container */}
                <div className="flex flex-row items-start justify-center w-full h-auto">
                    
                {/* y-axis line */}
                <div className="flex flex-col items-center justify-start">
                    {/* Circle at the top */}
                    <div className="w-[50px] h-[50px] rounded-xl bg-white bg-opacity-80"></div>
                    {/* Vertical line */}
                    <div className="border-l border-white h-full -mt-4"></div>
                </div>


                </div>


            </div>

        </section>
    );
};
export default Experience;