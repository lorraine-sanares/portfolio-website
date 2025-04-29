import React from "react";
import { FaLinkedin, FaMedium, FaGithub, } from "react-icons/fa";
// npm install react-icons

const Contact: React.FC = () => {
    return (
        <section 
            style={{
                backgroundImage: "url('/assets/knot.png')",
                backgroundSize: "50%",
                backgroundPosition: "-30% 160%",
                backgroundRepeat: "no-repeat", 
            }}
            className="w-full h-auto bg-[#030712] text-white py-8 sm:py-16 px-4 sm:px-6 flex flex-col items-center justify-center">
            
            {/* Section Title */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-8 text-center">
                Get in touch
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-center text-white w-full max-w-2xl">
                What&apos;s next? If you have a question or are interested in collaborating, 
                I&apos;d love to connect! Let&apos;s work together to make industry education more accessible and impactful.
            </p>

            {/* Contact Form */}
            <form className="flex flex-col w-full max-w-2xl gap-4 sm:gap-6">
                {/* Two-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <input 
                        type="text" 
                        placeholder="Name*" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Phone Input */}
                    <input 
                        type="text" 
                        placeholder="Phone" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Two-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Input */}
                    <input 
                        type="email" 
                        placeholder="Email*" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Subject Input */}
                    <input 
                        type="text" 
                        placeholder="Subject*" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Message Textarea */}
                <textarea 
                    placeholder="Your message*" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                />

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all"
                >
                    Send a message
                </button>
            </form>

            {/* Social Media Section */}
            <div className="mt-8 sm:mt-10 text-center">
                <p className="text-sm sm:text-lg text-gray-300">You may also find me on these platforms</p>
                <div className="flex justify-center gap-4 sm:gap-6 mt-4">
                    <a href="www.linkedin.com/in/lorraine-sanares" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-xl sm:text-2xl hover:text-blue-500 transition duration-300" />
                    </a>
                    <a href="https://medium.com/@lorrainesanares" target="_blank" rel="noopener noreferrer">
                        <FaMedium className="text-white text-xl sm:text-2xl hover:text-gray-400 transition duration-300" />
                    </a>
                    <a href="https://github.com/Lorraine-Sanares" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-xl sm:text-2xl hover:text-gray-300 transition duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
