import React from "react";
import Image from "next/image";
import { Github, BookOpen, ExternalLink } from "lucide-react";

// Define prop types for SocialIcons
interface SocialIconsProps {
  githubUrl?: string;
  docsUrl?: string;
  externalUrl?: string;
  size?: number;
  color?: string;
}

// Reusable SocialIcons Component
const SocialIcons: React.FC<SocialIconsProps> = ({ 
  githubUrl, 
  docsUrl, 
  externalUrl, 
  size = 24, 
  color = "text-black" 
}) => {
  return (
    <div className="flex space-x-4 pl-2">
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github className={`w-[${size}px] h-[${size}px] ${color} hover:text-gray-700`} />
        </a>
      )}
      {docsUrl && (
        <a href={docsUrl} target="_blank" rel="noopener noreferrer">
          <BookOpen className={`w-[${size}px] h-[${size}px] ${color} hover:text-gray-700`} />
        </a>
      )}
      {externalUrl && (
        <a href={externalUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className={`w-[${size}px] h-[${size}px] ${color} hover:text-gray-700`} />
        </a>
      )}
    </div>
  );
};

// Define prop types for ProjectCard
interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  githubUrl?: string;
  docsUrl?: string;
  externalUrl?: string;
}

// Project Card Component for reusability
const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imgSrc, 
  githubUrl, 
  docsUrl, 
  externalUrl 
}) => {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-auto md:h-[500px] rounded-3xl bg-white p-4 md:p-10 text-start shadow-lg">
      {/* Left: Text Content */}
      <div className="flex flex-col w-full md:w-1/2 items-start justify-center z-10 pr-0 md:pr-16">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 text-black">{title}</h1>
        <p className="text-sm md:text-base text-black mb-6">{description}</p>

        {/* Social Icons with Custom Links */}
        <SocialIcons 
          githubUrl={githubUrl} 
          docsUrl={docsUrl} 
          externalUrl={externalUrl} 
          size={24} 
          color="text-gray-800" 
        />
      </div>

      {/* Right: Image */}
      <div className="relative md:absolute top-0 right-0 w-full md:w-1/2 h-[300px] md:h-full overflow-hidden z-0 mt-4 md:mt-0">
        <Image src={imgSrc} alt={title} fill className="object-cover rounded-3xl md:rounded-r-3xl" />
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="relative w-full h-auto text-white">
      {/* Main Content Container */}
      <div className="flex flex-col items-start text-left w-full h-auto px-4 md:px-10 lg:px-28 py-10 gap-8">
       {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white">
          Projects
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base lg:text-lg text-white">
          This website you&apos;re on now is something I coded from scratch! 
          But here are other projects I&apos;ve done:
        </p>

        {/* Projects Grid */}
        <div className="flex flex-col items-start w-full gap-8 md:gap-16">
        
          {/* Project Cards */}
          <ProjectCard
            title="Running Dashboard"
            description="Involved analysing my health and running statistics to 
            optimise my training for the Nike 10km Run this October. Inspired by the Strava app, I 
            incorporated a linear regression model to predict my running performance on race day."
            imgSrc="/assets/dashboard.png"
            githubUrl="https://github.com/Lorraine-Sanares/running-dashboard"
          />
          <ProjectCard
            title="Bookstore Analysis"
            description="A data-driven analysis of sales trends, customer insights, and inventory management 
            in bookstores. A Unimelb coursework assignment, I collaborated with two other group members to 
            analyze data from an online bookstore. We applied unsupervised machine learning models to extract 
            insights from customer and book attributes, to aid the company on which new books to purchase for their store."
            imgSrc="/assets/kmeans3.png"
            githubUrl="https://github.com/Lorraine-Sanares/bookstore-analysis"
          />
          <ProjectCard
            title="Travel Dashboard"
            description="A travel insights dashboard to plan trips, track expenses, and explore destinations efficiently. 
            My very first data analysis project, completed during VCE Data Analytics in 2022, is where I first developed 
            a fascination with data and visualisation. The project involved analysing a country's attributes post-pandemic 
            to help travellers plan their holiday destinations."
            imgSrc="/assets/travellex.png"
            githubUrl="https://github.com/Lorraine-Sanares/travellex"
            externalUrl="https://public.tableau.com/app/profile/lorraine.sanares/viz/Travellex/Besttime"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
