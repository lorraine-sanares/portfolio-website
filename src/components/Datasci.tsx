import React from "react";
import Image from 'next/image';

const Datasci: React.FC = () => {
    return (
        <div className="flex flex-col items-start justify-center w-full h-auto p-28 gap-10">
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                Why Data Science?
            </h1>

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
