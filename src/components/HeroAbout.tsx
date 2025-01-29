import React from "react";

// NEED TO FIND A WAY TO REMOVE CONSTANT WIDTHS AND HEIGHTS

const Hero: React.FC = () => {
    return (
      <section       
      style={{
        backgroundImage: "url('/assets/disks.jpg')",
        backgroundSize: "210%",
        backgroundPosition: "45% 48%",
      }}
      className="relative w-full min-h-[150vh] bg-norepeat text-white">
        
        {/* Hero Content */}
        <div className="flex flex-row items-center justify-start w-full h-screen p-20">  
            {/* Text Container */}
            <div className="flex flex-col items-start justify-start w-1/2 h-auto px-14 -mt-40">  
                {/* Heading */}
                <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 text-left">
                    Hi there! I&apos;m Lorraine 👋
                </h2>
                {/* Subheading */}
                <p className="text-s sm:text-s text-white-400 mb-6 text-left">
                Let&apos;s cut to the chase; I like to make cool sh*t. I&apos;ve 
                always been someone who feels restless when idle and don&apos;t 
                have my hands on a project. As a person of many interests; it is 
                my mission acquire skills, to find the perfect blend of it all 
                (my ikigai) and share my learnings along the way.  
                </p>
        
                {/* Location */}
                <p>So, are you intriged? Let&apos;s get started then!</p>

                {/* Social Icons */}


            </div>
            {/* Spacer */}
            <div className="container w-1/6"></div>

            {/* Photo container */}
            <div className="w-[350] h-[350] rounded-full bg-white backdrop-blur-md bg-opacity-75 -mt-60"></div>

        </div>

        {/* About Content */}
        <div className="flex flex-col items-center justify-center mb-8 -mt-40 p-28">
            {/* About Card */}
            <div className="flex flex-col w-full h-[600] rounded-3xl bg-white p-16 text-start bg-opacity-80 backdrop-blur-md">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-black">
                    About
                </h1>

                {/* Content Container */}
                <div className="flex flex-row w-1/2 h-full items-center justify-start">
                    {/* About Summary */}
                    <p className="text-lg sm:text-m text-black mb-6 text-left">
                    Hi, I’m Lorraine Sanares. I’m a Student and aspiring 
                    Data Scientist based in Melbourne, Australia. <br />
                    <br />
                    As third-year Bachelor of Science student majoring in Data 
                    Science at the University of Melbourne, I specialize in 
                    extracting powerful and impacful insights from data; 
                    implementing advanced techniques in Python, SQL and 
                    Machine Learning. I use a wide range of visualisation tools 
                    to create beautiful and user-friendly visualisations. 
                    </p>

                    {/* Divider */}
                    <div className="border-l border-black h-full mx-4 -mt-10"></div>

                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default Hero;