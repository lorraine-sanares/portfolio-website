import React from "react";
import Image from 'next/image';

const Datasci: React.FC = () => {
    return (
        <div className="flex flex-col items-start justify-center w-full h-auto p-28 gap-10">
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                Why Data Science?
            </h1>

            <div className="flex flex-row items-start justify-start w-full h-auto gap-12">
                {/* SlideShare Embed */}
                {/* <div className="w-1/2 flex justify-center">
                    {/* <iframe 
                        src="https://www.slideshare.net/slideshow/embed_code/key/hRM8WIyvd1l8mG?startSlide=1"
                        className="w-full max-w-4xl h-[80vh] border border-gray-300 rounded-lg"
                        frameBorder="0" 
                        allowFullScreen
                    ></iframe> */}
                    {/* <Image 
                        src="/assets/venn.png" 
                        alt="venn" 
                        fill 
                        style={{ objectFit: "cover" }} 
                        className="absolute top-0 left-0"
                    />
                </div> */}
                {/* <div className="flex flex-row items-start justify-start w-full h-auto gap-12"> */}
                
                {/* Image Container (Fixes Fill Issue) */}
                <div className="relative w-1/2 h-[400px]">
                    <Image 
                        src="/assets/venn.png" 
                        alt="venn"
                        style={{ objectFit: "contain" }}  
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>


                <p className="text-lg sm:text-md text-black mb-6 text-left text-white w-1/2">
                    I’m sure you’ve heard the quote: “Jack of all trades master of none”. 
                    But rarely do we hear the second half that goes “... though oftentimes 
                    better than a master of one.” A data scientist is a jack of all trades; 
                    which is the reason why I chose this career. <br />
                    <br />
                    I have always been a life-long 
                    learner that loves up-skilling, and data science allows me to merge the things 
                    a learn from different domains. There is a name we give to a data scientist who 
                    is equally skilled in all three areas of software engineering, mathematics and 
                    communication - We call them Unicorns. <br />
                    <br />
                    The past two years of university has been in the pursuit of becoming a unicorn, 
                    though I understand that this is a difficult task. However, I am always up for a 
                    good challenge.<br /> 
                    <br />
                    I believe generalists are the driving force behind 
                    innovation, bridging disciplines, fostering creativity, and driving 
                    meaningful change.<br />
                    <br />
                    
                </p>



            </div>

        </div>
    );
};

export default Datasci;
