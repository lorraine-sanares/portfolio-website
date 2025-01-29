import React from 'react';
import Image from 'next/image';

const TechStack: React.FC = () => {
    return (
        <section
        style={{
            backgroundImage: "url('/assets/balance.png')",
            backgroundSize: "60%",
            backgroundPosition: "100% 60%",
            backgroundRepeat: "no-repeat", 
            backgroundAttachment: "local", 
        }}
        className="relative w-full min-h-[150vh] text-white">

            <div className="flex flex-col items-start justify-start w-full min-h-[150vh] p-28">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                        Tech Stack
                </h1>

                <div className="flex flex-col items-start justify-start w-1/2 h-auto">
                    <p>
                    On top of building my proficiency in programming languages for analytics 
                    (i.e Python and R), I also like to dabble in UX/UI design, web development, 
                    data engineering and cloud computing. <br />

                    <br /> More details of my tech skills can be viewed on my LinkedIn and GitHub!
                    </p>
                </div>
                
                <div className="h-20"></div>

                {/* Language Squares */}
                <div className="flex flex-col items-start justify-start w-full h-auto">
                    
                    {/* Squares Row 1 */}
                    <div className="flex flex-row items-start justify-between w-3/5 h-auto gap-10">
                        {/* Python */}
                        <div className="relative flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/python.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* C */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/c.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* R */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/R_logo.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* HTML */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/html.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* CSS */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/css.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                    </div>
                    <div className="h-20"></div>

                    {/* Squares Row 2 */}
                    <div className="flex flex-row items-start justify-between w-3/5 h-auto gap-10">
                        {/* JavaScript */}
                        <div className="relative flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/javascript.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* TypeScript */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/typescript.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* Tailwind */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/tailwind.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* HTML */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/react.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* CSS */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/wordpress.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3 scale-150"/>
                        </div>
                    </div>
                    <div className="h-20"></div>

                    {/* Squares Row 3 */}
                    <div className="flex flex-row items-start justify-between w-3/5 h-auto gap-10">
                        {/* AWS */}
                        <div className="relative flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/aws.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* MySql */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/mysql.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* Postgres */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/postgres.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* Kafka */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/kafka.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                        {/* Apache Spark */}
                        <div className="flex flex-col w-[100] h-[100] rounded-2xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md">
                            <Image src="/assets/apachespark.png" alt="Overlay" fill style={{ objectFit: "contain" }} className="absolute top-0 left-0 rounded-3xl p-3"/>
                        </div>
                    </div>                    
                </div>

                <div className="h-20">

                </div>

                {/* Libraries Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                    Libraries
                </h1>

                <div className="flex flex-col items-start justify-start w-1/2 h-full">
                    <p>
                        Tensor Flow
                    </p>
                    <div className="h-80"></div> {/* Spacer */}
                </div>
            </div> 
        </section>
    );

};

export default TechStack;