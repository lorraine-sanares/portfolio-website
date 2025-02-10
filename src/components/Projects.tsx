import React from "react";
import Image from "next/image";
import { Github, BookOpen, ExternalLink } from "lucide-react";

// Project Card Component for reusability
// Reusable SocialIcons Component
const SocialIcons = ({ size = 24, color = "text-black" }) => {
    return (
      <div className="flex space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className={`w-${size} h-${size} ${color} hover:text-gray-700`} />
        </a>
        <a href="/docs">
          <BookOpen className={`w-${size} h-${size} ${color} hover:text-gray-700`} />
        </a>
        <a href="/external" target="_blank" rel="noopener noreferrer">
          <ExternalLink className={`w-${size} h-${size} ${color} hover:text-gray-700`} />
        </a>
      </div>
    );
  };

const ProjectCard = ({ title, description, imgSrc }: { title: string; description: string; imgSrc: string }) => {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-[500] rounded-3xl bg-white p-6 md:p-10 text-start shadow-lg">
      {/* Left: Text Content */}
      <div className="flex flex-col w-full md:w-1/2 items-start justify-center z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">{title}</h1>
        <p className="text-sm md:text-base text-black mb-6">{description}</p>

        {/* Social Icons */}
        <SocialIcons size={6} color="text-gray-800" />
      </div>

      {/* Right: Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z-0">
        <Image 
            src="/assets/dashboard.png" 
            alt="Running Dashboard" 
            fill
            style={{ objectFit: "cover" }} 
            className="rounded-r-3xl"
        />
        </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/circle.png')",
        backgroundSize: "80%",
        backgroundPosition: "-150% 150%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "local",
      }}
      className="relative w-full h-auto text-white"
    >
      <div className="flex flex-col items-start justify-start w-full h-auto p-10 md:p-28 gap-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">Projects</h1>

        {/* Project Cards */}
        <ProjectCard
          title="Running Dashboard"
          description="Track your running metrics, analyze progress, and stay motivated with an interactive dashboard."
          imgSrc="/assets/dashboard.png"
        />
        <ProjectCard
          title="Bookstore Analysis"
          description="A data-driven analysis of sales trends, customer insights, and inventory management in bookstores."
          imgSrc="/assets/bookstore.png"
        />
        <ProjectCard
          title="Travel Dashboard"
          description="A travel insights dashboard to plan trips, track expenses, and explore destinations efficiently."
          imgSrc="/assets/travel.png"
        />
      </div>
    </section>
  );
};

export default Projects;
