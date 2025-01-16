import React from 'react';

const TechStack: React.FC = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full h-auto p-16">
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                    Tech Stack
            </h1>

            {/* Description Text */}
            <div className="flex flex-col items-start justify-start w-1/2 h-auto">
                <p>
                On top of building my proficiency in programming languages for analytics 
                (i.e Python and R), I also like to dabble in UX/UI design, web development, 
                data engineering and cloud computing. <br />

                <br /> More details of my tech skills can be viewed on my LinkedIn and GitHub!
                </p>
            </div>


        </div> 
    );

};

export default TechStack;