import React from "react";
import Image from "next/image";
import { Github, BookOpen, ExternalLink } from "lucide-react";

// Project Card Component for reusability
// Reusable SocialIcons Component
const SocialIcons = ({ size = 24, color = "text-black" }) => {
    return (
      <div className="flex space-x-4 pl-2">
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
      <div className="flex flex-col w-full md:w-1/2 items-start justify-center z-10 pr-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">{title}</h1>
        <p className="text-sm md:text-base text-black mb-6">{description}</p>

        {/* Social Icons */}
        <SocialIcons size={6} color="text-gray-800" />
      </div>

      {/* Right: Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z-0">
            <Image src={imgSrc} alt={title} fill className="object-cover rounded-r-3xl" />
        </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="relative w-full h-auto text-white">
      {/* Main Content Container */}
      <div className="flex flex-col items-start text-left w-full h-auto px-10 md:px-28 py-10 gap-8">
       {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Projects
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-lg text-white">
          This website you're on now is something I coded from scratch! 
          But here are other projects I've done:
        </p>

        {/* Projects Grid */}
        <div className="flex flex-col items-start w-full gap-16">
        
          {/* Project Cards */}
          <ProjectCard
            title="Running Dashboard"
            description="My most recent project involved analyzing my health and running statistics to 
            optimize my training for the Nike 10km Run this October. Inspired by the Strava app, I 
            incorporated a linear regression model to predict my running performance on race day.. hellow "
            imgSrc="/assets/dashboard.png"
          />
          <ProjectCard
            title="Bookstore Analysis"
            description="A data-driven analysis of sales trends, customer insights, and inventory management 
            in bookstores. A Unimelb coursework assignment, I collaborated with two other group members to 
            analyze data from an online bookstore. We applied unsupervised machine learning models to extract 
            insights from customer and book attributes, to aid the company on which new books to purchase for their store."
            imgSrc="/assets/kmeans3.png"
          />
          <ProjectCard
            title="Travel Dashboard"
            description="A travel insights dashboard to plan trips, track expenses, and explore destinations efficiently. 
            My very first data analysis project, completed during VCE Data Analytics in 2022, is where I first developed 
            a fascination with data and visualisation. The project involved analysing a country's attributes post-pandemic 
            to help travellers plan their holiday destinations."
            imgSrc="/assets/travellex.png"
          />

        </div>
      </div>
    </section>
  );
};

export default Projects;

