import React from "react";
import Image from 'next/image';

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
                    Hi there!👋
                </h2>
                {/* Subheading */}
                <p className="text-s sm:text-lg text-white-400 mb-6 text-left">
                I&apos;m Lorraine. I'm a data science Student, Educator, Writer 
                and someone who likes to make cool sh*t. Curious about my work? <br />

                <br /> Let&apos;s get started! 
               

                </p>
                {/* Lets cut to the chase; I like to make cool sh*t. I&apos;ve 
                always been someone who feels restless when idle and don&apos;t 
                have my hands on a project. As a person of many interests; it is 
                my mission acquire skills, to find the perfect blend of it all 
                (my ikigai) and share my learnings along the way.  
                </p>
        
                {/* Location */}
                {/* <p>So, are you intriged? Let&apos;s get started then!</p> */}

                {/* Social Icons */}


            </div>
            {/* Spacer */}
            <div className="container w-1/6"></div>

            {/* Photo container */}
            <div className="w-[350] h-[350] rounded-full bg-white backdrop-blur-md overflow-hidden bg-opacity-75 -mt-60">
                <Image 
                            src="/assets/id.png" 
                            alt="profile" 
                            fill 
                            style={{ objectFit: "contain" }} 
                            className="absolute top-0 left-0"
                        />
            </div>

        </div>

        {/* About Content */}
        <div className="flex flex-col items-center justify-center mb-8 -mt-40 p-28">
            {/* About Card */}
            <div className="flex flex-row w-full h-[800] rounded-3xl bg-white p-16 text-start bg-opacity-80 backdrop-blur-md">

                <div className="relative w-full h-full overflow-hidden rounded-3xl">
                        <Image 
                            src="/assets/sideprofile.jpg" 
                            alt="profile" 
                            fill 
                            style={{ objectFit: "cover" }} 
                            className="absolute top-0 left-0"
                        />
                </div> 

                {/* Divider */}
                <div className="border-l border-black h-full mx-12 -mt-30"></div>
                

                {/* Content Container */}
                <div className="flex flex-col justify-start items-start w-full h-full">
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-black">
                        About
                    </h1>

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
                    to create beautiful and user-friendly visualisations. My mission 
                    is to empower others by leading dynamic, hands-on workshops that 
                    bridge the gap between theory and industry skills, equipping others 
                    with the knowledge and confidence to excel in their career in tech.  

                    What's my story? What challenges did I face and how did I
                    overcome them?
                    </p>

                </div>

           
            </div>
        </div>
      </section>
    );
  };
  
  export default Hero;