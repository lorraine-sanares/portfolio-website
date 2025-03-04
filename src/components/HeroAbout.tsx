import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <section       
            style={{
                backgroundImage: "url('/assets/disks.jpg')",
                backgroundSize: "210%",
                backgroundPosition: "45% 48%",
            }}
            className="relative w-full min-h-[150vh] bg-norepeat text-white"
        >
            {/* Hero Content */}
            <div className="flex flex-row items-center justify-start w-full h-screen p-20">  
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start w-1/2 h-auto px-14 -mt-40">  
                    {/* Heading */}
                    <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 text-left">
                        Hi there!👋
                    </h2>
                    {/* Subheading */}
                    <p className="text-sm sm:text-lg text-gray-400 mb-6 text-left">
                        I&apos;m Lorraine Sanares. I&apos;m a data science student, educator, 
                        and someone who likes to build cool projects. Curious about my work? <br />
                        <br /> Let&apos;s get started! 
                    </p>
                </div>

                {/* Spacer */}
                <div className="container w-1/6"></div>

                {/* Photo container */}
                <div className="relative w-[350px] h-[350px] rounded-full bg-white backdrop-blur-md overflow-hidden bg-opacity-75 -mt-60">
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
                <div className="flex flex-row w-full h-[800px] rounded-3xl bg-white p-16 text-start bg-opacity-80 backdrop-blur-md">
                    
                    {/* Image Container */}
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
                    <div className="border-l border-black h-full mx-12"></div>

                    {/* Content Container */}
                    <div className="flex flex-col justify-start items-start w-full h-full">
                        {/* Heading */}
                        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-black">
                            About
                        </h1>

                        {/* About Summary */}
                        <p className="text-sm sm:text-base text-black mb-6 text-left">
                            It all began with a simple dashboard.<br />
                            <br />
                            In 2022, as a Year 12 student, I built a Tableau dashboard 
                            visualising COVID border restrictions. It was just a school 
                            project, but something clicked. I was drawn to the process 
                            of transforming raw data into compelling visual stories. 
                            That project sparked my curiosity in data.<br />
                            <br />

                            For the past two years, I&apos;ve been studying data science at 
                            The University of Melbourne, learning how to extract insights 
                            from complex datasets and communicate them in ways that drive
                            impact. Now, as a third-year student, I&apos;ve realised that I 
                            love the dynamic nature of problem-solving—combining technical 
                            expertise with storytelling to support the bigger picture 
                            through data.<br />
                            <br />

                            But learning data science hasn&apos;t been smooth sailing. Like many STEM 
                            students, I struggled to bridge the gap between theory and 
                            practice—spending hours on formula proofs and debugging 
                            algorithms, unsure of the practical applications to real-world 
                            challenges.<br />
                            <br />

                            However, through hands-on projects and an internship, my pathway 
                            became clear: to become an adaptable data scientist who is 
                            equally skilled in computer science, mathematics, and business 
                            expertise. <br />
                            <br />
                            
                            A unicorn.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
