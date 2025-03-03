"use client";
import React, { useRef, useEffect, useState } from "react";

const Experience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];
    const [lineHeight, setLineHeight] = useState(0);
    const [circlePositions, setCirclePositions] = useState<number[]>([]);

    useEffect(() => {
        if (containerRef.current) {
            const containerTop = containerRef.current.getBoundingClientRect().top;
            const firstCardTop = cardRefs[0].current?.getBoundingClientRect().top || 0;
            const lastCardBottom = cardRefs[cardRefs.length - 1].current?.getBoundingClientRect().bottom || 0;

            // Dynamically calculate the line height
            const calculatedHeight = lastCardBottom - firstCardTop;
            setLineHeight(calculatedHeight);

            // Align circle positions to cards
            const positions = cardRefs.map(ref => {
                const cardTop = ref.current?.getBoundingClientRect().top || 0;
                return cardTop - containerTop;
            });

            setCirclePositions(positions);
        }
    }, []);

    return (
        <section className="relative w-full h-auto text-white">
            <div className="flex flex-row items-start justify-center w-full h-auto">
                
                {/* Left Column - Heading & Image */}
                <div className="relative flex flex-col items-start justify-start w-1/3 h-screen pt-10 pl-20 sticky top-0">
                    <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 text-white z-10">
                        Work Experience
                    </h1>

                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: "url('/assets/stack.png')",
                            backgroundSize: "100%",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>

                {/* Right Column - Timeline & Experience Cards */}
                <div className="flex flex-col items-center justify-start w-2/3 h-auto pt-28">
                    
                    <div className="relative flex flex-row items-start justify-center w-full h-auto" ref={containerRef}>
                        
                        {/* Vertical Timeline */}
                        <div className="relative flex flex-col items-center" style={{ height: `${lineHeight}px` }}>
                            {/* Square (Starting Point) */}
                            <div className="w-[40px] h-[40px] rounded-xl bg-white bg-opacity-80"></div>

                            {/* Vertical Line (Dynamic Height) */}
                            <div className="border-l border-white" style={{ height: `${lineHeight}px` }}></div>

                            {/* Timeline Circles */}
                            {circlePositions.map((position, index) => (
                                <div
                                    key={index}
                                    className="absolute w-[15px] h-[15px] rounded-full bg-white"
                                    style={{ top: `${position}px` }}
                                ></div>
                            ))}
                        </div>

                        {/* Experience Cards */}
                        <div className="flex flex-col items-start justify-start w-auto h-auto p-8 gap-10">
                            {[
                                {
                                    title: "AI & Data Intern At Deloitte",
                                    date: "Nov. 2024 - Dec. 2024",
                                    description: (
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Designed and implemented an event-driven data pipeline on AWS implementing EventBridge, Lambda, Airflow, and S3, automating data ingestion, orchestration, and storage.</li>
                                            <li>Implemented key pipeline components using Python, PySpark, Airflow, and AWS, managing event-triggered and scheduled processing, orchestrating tasks via Airflow DAGs, configuring security settings, and storing processed outputs in S3 for downstream use.</li>
                                            <li>Coordinated with team members and internal stakeholders to refine data processing strategies, improving workflow efficiency.</li>
                                            <li>Liaised with senior team members and external stakeholders, presenting insights through PowerPoint reports on Microsoft Teams, ensuring alignment on project objectives.</li>
                                            <li>Developed a client-facing pack utilizing Microsoft PowerPoint and Excel, integrating stakeholder feedback and expediting key project deliverables.</li>
                                            <li>Documented and refined data ingestion processes using Microsoft Word, ensuring clear procedural guidelines for the team.</li>
                                        </ul>
                                    ),
                                },
                                {
                                    title: "Private Piano Teacher",
                                    date: "Jun. 2022 - Present",
                                    description: (
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Taught 40 piano lessons annually to a primary school-aged student, advancing music theory and technique.</li>
                                            <li>Developed weekly lesson plans aligned with AMEB classical coursework and adapted teaching methods to maintain high engagement and motivation.</li>
                                            <li>Prepared student for recitals and AMEB exams, whilst maintaining regular communication with parent to manage expectations and outcomes.</li>
                                        </ul>
                                    ),
                                },
                                {
                                    title: "Teaching Assistant At Kumon",
                                    date: "Feb. 2021 - Present",
                                    description: (
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Entered, organised, and maintained student performance data in Excel, utilising formulas and functions to track progress, generate reports, and identify learning trends to support individualised learning plans.</li>
                                            <li>Tutored students in math and reading, providing constructive feedback to enhance academic performance.</li>
                                            <li>Managed administrative tasks and reception duties, ensuring smooth business operations.</li>
                                            <li>Responded to parent inquiries regarding student homework, providing clarifications and progress updates.</li>
                                        </ul>
                                    ),
                                },
                                {
                                    title: "Private Maths Tutor",
                                    date: "Mar. 2022 - Oct. 2022",
                                    description: (
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Provided personalized math tutoring to a Year 7 student, enhancing their understanding and engagement with math concepts through customized lesson plans.</li>
                                            <li>Motivated the student by using creative and engaging teaching methods, fostering a positive attitude toward math.</li>
                                            <li>Monitored the student's progress in collaboration with their math teacher, successfully improving their grades by at least 2% in each school assessment.</li>
                                        </ul>
                                    ),
                                },
                            ].map((job, index) => (
                                <div
                                    key={index}
                                    ref={cardRefs[index]}
                                    className="flex flex-col w-[700px] h-auto rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md shadow-lg"
                                >
                                    <div className="text-3xl font-bold text-black">{job.title}</div>
                                    <p className="text-lg sm:text-xl text-black mb-6 text-left">{job.date}</p>
                                    <p className="text-lg sm:text-m text-black mb-6 text-left">{job.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};








// const Experience: React.FC = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
//     const [circlePositions, setCirclePositions] = useState<number[]>([]);

//     useEffect(() => {
//         if (containerRef.current) {
//             const containerTop = containerRef.current.getBoundingClientRect().top;
//             const positions = cardRefs.map(ref => {
//                 const cardTop = ref.current?.getBoundingClientRect().top || 0;
//                 return cardTop - containerTop;
//             });
//             setCirclePositions(positions);
//         }
//     }, []);

//     return (
//         <section className="relative w-full h-auto text-white overflow-hidden">
            
//             <div></div>
//             {/* Background Image Container */}
            // <div className="absolute inset-0 w-full h-full" style={{
            //     backgroundImage: "url('/assets/stack.png')",
            //     backgroundSize: "150%",
            //     backgroundPosition: "130% 25%",
            //     backgroundRepeat: "no-repeat",
            //     backgroundAttachment: "fixed"
            // }}></div>
            
//             <div className="flex flex-col items-start justify-start w-full h-auto pl-28">
//                 {/* Heading */}
//                 <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white  pt-16">
//                     Work Experience
//                 </h1>

//                 {/* Scrollable Content */}
//                 <div className="flex flex-row items-start w-full h-auto mt-40 relative" ref={containerRef}>
//                     <div className="container w-1/2"></div>
//                     <div className="relative flex flex-col items-center h-screen w-[50px]">
//                         <div className="w-[50px] h-[50px] rounded-xl bg-white bg-opacity-80"></div>
//                         <div className="relative border-l border-white h-full"></div>
//                         {circlePositions.map((position, index) => (
//                             <div
//                                 key={index}
//                                 className="absolute w-[20px] h-[20px] rounded-full bg-white"
//                                 style={{ top: `${position + 20}px` }}
//                             ></div>
//                         ))}
//                     </div>
                    
//                     {/* Experience Cards */}
//                     <div className="flex flex-col items-start justify-start w-auto h-auto p-16 gap-8">
//                         {[
//                             { title: "AI & Data Intern At Deloitte", date: "Nov. 2024 - Dec. 2024" },
//                             { title: "Private Piano Teacher", date: "Nov. 2024 - Dec. 2024" },
//                             { title: "Teaching Assistant At Kumon", date: "Nov. 2024 - Dec. 2024" },
//                             { title: "Private Maths Tutor", date: "Mar. 2022 - Oct. 2022" }
//                         ].map((job, index) => (
//                             <div
//                                 key={index}
//                                 ref={cardRefs[index]}
//                                 className="flex flex-col w-[600px] h-[350px] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"
//                             >
//                                 <div className="text-3xl font-bold text-black">{job.title}</div>
//                                 <p className="text-lg sm:text-xl text-black mb-6 text-left">{job.date}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };



// const Experience: React.FC = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
//     const [circlePositions, setCirclePositions] = useState<number[]>([]);

//     useEffect(() => {
//         if (containerRef.current) {
//             const containerTop = containerRef.current.getBoundingClientRect().top;
//             const positions = cardRefs.map(ref => {
//                 const cardTop = ref.current?.getBoundingClientRect().top || 0;
//                 return cardTop - containerTop;
//             });
//             setCirclePositions(positions);
//         }
//     }, []);

//     return (
//         <section className="relative w-full h-auto text-white overflow-hidden flex flex-col">
//             {/* Background Image Container */}
//             <div className="absolute inset-0 w-full h-full flex flex-col" style={{
//                 backgroundImage: "url('/assets/stack.png')",
//                 backgroundSize: "150%",
//                 backgroundPosition: "130% 25%",
//                 backgroundRepeat: "no-repeat",
//                 // backgroundAttachment: "fixed"
//             }}></div>
            
//             {/* Sticky Heading Container */}
//             <div className="sticky top-0 left-0 right-0 z-50 py-4 px-28 w-full flex flex-col">
//                 <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
//                     Work Experience
//                 </h1>
//             </div>

//             {/* Scrollable Content Container */}
//             <div className="relative flex flex-col items-start justify-start w-full h-auto pl-28 mt-16 overflow-y-auto">
//                 <div className="flex flex-row items-start w-full h-auto mt-40 relative" ref={containerRef}>
//                     <div className="container w-1/2"></div>
//                     <div className="relative flex flex-col items-center h-screen w-[50px]">
//                         <div className="w-[50px] h-[50px] rounded-xl bg-white bg-opacity-80"></div>
//                         <div className="relative border-l border-white h-full"></div>
//                         {circlePositions.map((position, index) => (
//                             <div
//                                 key={index}
//                                 className="absolute w-[20px] h-[20px] rounded-full bg-white"
//                                 style={{ top: `${position + 20}px` }}
//                             ></div>
//                         ))}
//                     </div>
                    
//                     {/* Experience Cards */}
//                     <div className="flex flex-col items-start justify-start w-auto h-auto p-16 gap-8">
//                         {[
//                             { title: "AI & Data Intern At Deloitte", date: "Nov. 2024 - Dec. 2024" },
//                             { title: "Private Piano Teacher", date: "Nov. 2024 - Dec. 2024" },
//                             { title: "Teaching Assistant At Kumon", date: "Nov. 2024 - Dec. 2024" },
//                             { title: "Private Maths Tutor", date: "Mar. 2022 - Oct. 2022" }
//                         ].map((job, index) => (
//                             <div
//                                 key={index}
//                                 ref={cardRefs[index]}
//                                 className="flex flex-col w-[600px] h-[350px] rounded-3xl bg-white p-10 text-start bg-opacity-80 backdrop-blur-md"
//                             >
//                                 <div className="text-3xl font-bold text-black">{job.title}</div>
//                                 <p className="text-lg sm:text-xl text-black mb-6 text-left">{job.date}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };




export default Experience;
