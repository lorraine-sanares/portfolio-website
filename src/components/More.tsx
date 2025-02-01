import React from "react";
import Image from 'next/image';

const More: React.FC = () => {
    return (
        <section
        style={{
            backgroundImage: "url('/assets/semicircles.png')",
            backgroundSize: "90%",
            backgroundPosition: "300% 20%",
            backgroundRepeat: "no-repeat", 
            backgroundAttachment: "local", 
            overflow: "visible",
            backgroundOrigin: "border-box",
        }}
        className="relative w-full min-h-[150vh] text-white">
            <div className="flex flex-col items-start justify-start w-full h-auto p-28 gap-10">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                        More Cool Stuff
                </h1>

                {/* Spacer */}
                <div className="container"></div>

                {/* Cards Container */} 
                <div className="flex flex-row items-start justify-center w-full gap-10">
                    {/* Study Card */}
                    <div className="flex flex-col w-1/3 h-[400] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                        {/* Text */}
                        <div className="text-4xl sm:text-2xl font-bold text-black">My Marathon Training</div>
                        <p className="text-lg sm:text-md text-black mb-6 text-left">Helloo</p>
                    </div>

                    {/* Coding Card */}
                    <div className="flex flex-col w-1/3 h-[400] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                        {/* Text */}
                        <div className="text-4xl sm:text-2xl font-bold text-black">Women in Tech</div>
                        <p className="text-lg sm:text-md text-black mb-6 text-left">
                            I love teaching and learning. Hence, my role as an Education
                            Director for WIT Unimelb allows me to combine the two passions. <br />
                            <br />
                            Check out some of the workshops I run!
                        </p>
                    </div>
                    
                    {/* Resources Card */}
                    <div className="flex flex-col w-1/3 h-[400] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                        {/* Text */}
                        <div className="text-4xl sm:text-2xl font-bold text-black">Resources</div>            
                        <p className="text-lg sm:text-xl text-black mb-6 text-left">
                            Tech Education Workshop PowerPoint Decks
                            Notion Personal Project Management Hub
                            Writing guide to creating a successful newsletter 
                            
                        </p>
                    </div>                
                </div>



            </div>
        </section>
    );
};
export default More;
