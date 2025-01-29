import React from "react";
import Image from 'next/image';

const Datasci: React.FC = () => {
    return (
        <div className="flex flex-col items-start justify-center w-full h-auto p-28 gap-10">
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                Why Data Science?
            </h1>

            <p className="text-lg sm:text-md text-black mb-6 text-left text-white">
                I’m sure you’ve heard the quote: “Jack of all trades master of none”. 
                But rarely do we hear the second half that goes “... though oftentimes 
                better than a master of one.” A data scientist is a jack of all trades; 
                which is the reason why I chose this career. I have always been a life-long 
                learner that loves up-skilling, and data sciences allows me to merge the things 
                a learn from different domains. There is a name we give to a data scientist who 
                is equally skilled in all three areas of software engineering, mathematics and 
                communication - We call them Unicorns. <br />
                <br />
                The past two years of university has been in the pursuit of becoming a unicorn, 
                though I understand that this is a difficult task. However, I am always up for a 
                good challenge. The presentation below will give a run down on the journey
                Generalists often drive innovation. <br />
                <br />
                If you’re interested in getting to know more about a career in data science; check out the presentation I made below:
            </p>


            {/* SlideShare Embed */}
            <div className="w-full flex justify-center mt-8">
            <iframe 
                src="https://www.slideshare.net/slideshow/embed_code/key/hRM8WIyvd1l8mG?startSlide=1"
                className="w-full max-w-4xl h-[80vh] border border-gray-300 rounded-lg"
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            </div>
        </div>
    );
};

export default Datasci;
