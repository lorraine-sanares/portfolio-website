import React from "react";

const Hero: React.FC = () => {
    return (
      <section       
      style={{
        backgroundImage: "url('/assets/disks.jpg')",
        backgroundSize: "180%",
        backgroundPosition: "50% 36%",
      }}
      className="relative w-full h-screen text-white">
        
        {/* Hero Content */}
        <div className="container mx-auto flex flex-row items-center justify-center h-full px-6 text-center">  
            {/* Text Container */}
            <div className="container mx-auto flex flex-col items-start justify-center h-full px-6 text-center -mt-40">  
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
                    Hi, I'm Lorraine
                </h1>
                {/* Subheading */}
                <p className="text-lg sm:text-xl text-white-400 mb-6 text-left">
                I'm a Data Science student at the University of Melbourne with a 
                focus on performing data analysis, machine learning and creating 
                advanced visualisations.
                </p>
        
                {/* Call-to-Action Button */}
                <a
                    href="#about"
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300"
                >
                    Learn More About Me
                </a>
            </div>
            
            {/* Spacer */}
            <div className="container w-70"></div>

            {/* Photo container */}
            <div className="flex flex-col items-center justify-center mb-8 -mt-40">
                <div className="w-40 h-40 rounded-full bg-white bg-opacity-65"></div>
            </div>
        </div>



      </section>
    );
  };
  
  export default Hero;