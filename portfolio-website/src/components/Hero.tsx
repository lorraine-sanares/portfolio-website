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
        <div className="container mx-auto flex flex-row items-center justify-center min-h-screen px-6 text-center">  
            {/* Text Container */}
            <div className="container mx-auto flex flex-col items-start justify-center min-h-screen px-6 text-center -mt-40">  
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
            <div className="container w-50"></div>

            {/* Photo container */}
            <div className="flex flex-col items-center justify-center mb-8 -mt-40">
                <div className="w-40 h-40 rounded-full bg-white backdrop-blur-md bg-opacity-85"></div>
            </div>
        </div>

        {/* About Content */}
        <div className="flex flex-col items-center justify-center mb-8 -mt-40 p-16">
            {/* About Card */}
            <div className="flex flex-col w-full h-[600] rounded-3xl bg-white p-16 text-start bg-opacity-80 backdrop-blur-md">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-black">
                    About
                </h1>

                {/* Content Container */}
                <div className="flex flex-row items-center justify-center">
                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-black mb-6 text-left">
                    Hi, I’m Lorraine Sanares. I’m a Student, Writer and Content
                    Creator based in Melbourne, Australia.

                    As third-year Bachelor of Science student majoring in Data 
                    Science at the University of Melbourne, I specialize in 
                    extracting powerful and impacful insights from data; 
                    implementing advanced techniques in Python, SQL and 
                    Machine Learning. I use a wide range of visualisation tools 
                    to create beautiful and user-friendly visualisations.
                    </p>

                    {/* Divider */}

                    

                </div>



            </div>
        </div>





      </section>
    );
  };
  
  export default Hero;