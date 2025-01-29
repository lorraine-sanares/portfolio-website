import React from "react";
import Image from 'next/image';

const Doing: React.FC = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full h-auto p-28">  
            
            
            
            {/* Heading */}
            <h2 className="text-6xl sm:text-4xl font-extrabold mb-4 text-white">
                    WHAT I VALUE
            </h2>
            <div className="container h-10"></div>
            {/* Cards Container */} 
            <div className="flex flex-row items-start justify-center w-full gap-10">
                {/* Study Card */}
                <div className="relative flex flex-col w-1/3 h-auto rounded-3xl bg-white p-10 bg-opacity-80 backdrop-blur-md overflow-hidden gap-4">
                    {/* Title at the Top Right */}
                    <div className="absolute top-6 right-6 text-4xl sm:text-2xl pb-6 font-bold text-black text-right">
                        CONTINUOUS<br /> LEARNING
                    </div>

                    <div className="container"></div>

                    {/* Image in the Center */}
                    <div className="flex justify-center items-center flex-grow">
                        <Image 
                            src="/assets/book.png" 
                            alt="Overlay" 
                            width={500} 
                            height={100} 
                            style={{ objectFit: "contain" }} 
                            className="rounded-lg"
                        />
                    </div>

                    {/* Text Paragraph Below the Image */}
                    <p className="text-lg sm:text-xl text-black mb-4 text-left">
                        In my spare time, I love to code
                    </p>
                </div>

                {/* Coding Card */}
                <div className="relative flex flex-col w-1/3 h-auto rounded-3xl bg-white p-10 bg-opacity-80 backdrop-blur-md overflow-hidden gap-4">
                    {/* Title at the Top Right */}
                    <div className="absolute top-6 right-6 text-4xl sm:text-2xl pb-6 font-bold text-black text-right">
                        CREATIVE<br /> IDEATION
                    </div>

                    <div className="container"></div>

                    {/* Image in the Center */}
                    <div className="flex justify-center items-center flex-grow">
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
                    <p className="text-lg sm:text-xl text-black mb-4 text-left">
                        In my spare time, I love to code
                    </p>
                </div>

                
                {/* Writing Card */}
                <div className="relative flex flex-col w-1/3 h-auto rounded-3xl bg-white p-10 bg-opacity-80 backdrop-blur-md overflow-hidden gap-4">
                    {/* Title at the Top Right */}
                    <div className="absolute top-6 right-6 text-4xl sm:text-2xl pb-6 font-bold text-black text-right">
                        WRITING<br /> TO LEARN
                    </div>

                    <div className="container"></div>

                    {/* Image in the Center */}
                    <div className="flex justify-center items-center flex-grow">
                        <Image 
                            src="/assets/pen.png" 
                            alt="Overlay" 
                            width={200} 
                            height={100} 
                            style={{ objectFit: "contain" }} 
                            className="rounded-lg"
                        />
                    </div>

                    {/* Text Paragraph Below the Image */}
                    <p className="text-lg sm:text-xl text-black mb-4 text-left">
                        In my spare time, I love to code
                    </p>
                </div>               
            </div>

        </div>
    );
};
export default Doing;