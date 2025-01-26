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
        }}
        className="relative w-full h-screen text-white">
            <div className="flex flex-col items-start justify-start w-full h-auto p-28">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                        More Cool Stuff
                </h1>

            </div>
        </section>
    );
};
export default More;
