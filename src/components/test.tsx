import React from "react";

const Hero: React.FC = () => {
    return (
      <section       
      style={{
        backgroundImage: "url('/assets/disks.jpg')",
        backgroundSize: "210%",
        backgroundPosition: "45% 48%",
      }}
      className="relative w-full h-auto bg-norepeat text-white">
        
        {/* Hero Content */}
        <div className="container mx-auto flex flex-row items-center justify-start w-full h-screen px-6">  
            {/* Text Container */}
            <div className="container mx-auto flex flex-col items-start justify-start w-[550] h-auto px-6 -mt-40">  
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-left">
                    Hi, I&apos;m Lorraine
                </h1>
                {/* Subheading */}
                <p className="text-lg sm:text-xl text-white-400 mb-6 text-left">
                I&apos;m a Data Science student at the University of Melbourne with a 
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
            {/* <div className="container w-50"></div> */}

            {/* Photo container */}
            <div className="w-40 h-40 rounded-full bg-white backdrop-blur-md bg-opacity-85"></div>

            {/* <div className="flex flex-col items-center justify-center mb-8 -mt-40"> */}
                {/* <div className="w-40 h-40 rounded-full bg-white backdrop-blur-md bg-opacity-85"></div> */}
            {/* </div> */}
        </div>

        
        





      </section>
    );
  };
  
  export default Hero;