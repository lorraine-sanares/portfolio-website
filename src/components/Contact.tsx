import React from "react";
import { FaLinkedin, FaTwitter, FaMedium, FaGithub, FaYoutube, FaDiscord } from "react-icons/fa";
// npm install react-icons

const Contact: React.FC = () => {
    return (
        <section 
            style={{
                backgroundImage: "url('/assets/knot.png')",
                backgroundSize: "50%",
                backgroundPosition: "-30% 160%",
                backgroundRepeat: "no-repeat", 
                // backgroundAttachment: "local",
            }}
            className="w-full h-screen bg-[#030712] text-white py-16 px-6 flex flex-col items-center justify-center">
            
            {/* Section Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 text-center">
                Get in touch
            </h1>
            <p className="text-lg sm:text-md mb-8 text-center text-white w-full max-w-2xl ">
            What’s next? Feel free to reach out to me if you have a query or simply want 
            connect! 
            </p>
            

            
            {/* <div className="w-full max-w-2xl  bg-opacity-80 p-8 rounded-3xl backdrop-blur-md"> */}

                {/* Contact Form */}
                <form className="flex flex-col w-full max-w-2xl gap-6">
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
            {/* </div> */}

            {/* Social Media Section */}
            <div className="mt-10 text-center">
                <p className="text-lg text-gray-300">You may also find me on these platforms</p>
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-2xl hover:text-blue-500 transition duration-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="text-white text-2xl hover:text-blue-400 transition duration-300" />
                    </a>
                    <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                        <FaMedium className="text-white text-2xl hover:text-gray-400 transition duration-300" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-2xl hover:text-gray-300 transition duration-300" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-white text-2xl hover:text-red-500 transition duration-300" />
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Contact;
