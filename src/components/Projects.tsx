import React from "react";
import Image from "next/image";
import { Github, BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/utils/cn";

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
  color = "text-white" 
}) => {
  return (
    <div className="flex space-x-4">
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <Github className={`w-[${size}px] h-[${size}px] ${color} hover:text-gray-700`} />
        </a>
      )}
      {docsUrl && (
        <a href={docsUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <BookOpen className={`w-[${size}px] h-[${size}px] ${color} hover:text-gray-700`} />
        </a>
      )}
      {externalUrl && (
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
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
  className?: string;
}

// Project Card Component for reusability
const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imgSrc, 
  githubUrl, 
  docsUrl, 
  externalUrl,
  className = ""
}) => {
  return (
    <div className={cn(
      "relative group overflow-hidden rounded-3xl bg-[#1a1a1a]/50 backdrop-blur-sm p-6 hover:bg-[#1a1a1a]/70 transition-all duration-300",
      className
    )}>
      <div className="relative h-full flex flex-col">
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
          <Image 
            src={imgSrc} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-300 mb-4 flex-grow">{description}</p>
        <SocialIcons 
          githubUrl={githubUrl} 
          docsUrl={docsUrl} 
          externalUrl={externalUrl} 
          size={20} 
          color="text-white" 
        />
      </div>
    </div>
  );
};

// Aceternity Bento Grid Components
const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  span = 1,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  span?: number;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl group/bento hover:shadow-xl transition duration-300 ease-in-out shadow-input dark:shadow-none p-8 relative bg-[#1a1a1a]/50 backdrop-blur-xl border border-white/10 hover:shadow-blue-500/10 flex flex-col h-full",
        span === 2 ? "md:col-span-2" : "",
        className
      )}
    >
      <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
        {header}
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4 shadow-[0_0_16px_4px_rgba(59,130,246,0.3)]"></div>
        <p className="text-zinc-300 text-base mb-6 flex-grow">{description}</p>
        <div className="mt-auto">
          {icon}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#060C14] py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 relative inline-block">
            Projects
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full shadow-[0_0_16px_4px_rgba(59,130,246,0.3)]"></div>
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            This website you&apos;re on now is something I coded from scratch! 
            But here are other projects I&apos;ve done:
          </p>
        </div>

        {/* Aceternity Bento Grid Layout */}
        <BentoGrid>
          <BentoGridItem
            span={2}
            header={
              <Image 
                src="/assets/dashboard.png" 
                alt="Running Dashboard" 
                fill 
                className="object-cover" 
              />
            }
            title="Running Dashboard"
            description="Involved analysing my health and running statistics to optimise my training for the Nike 10km Run this October. Inspired by the Strava app, I incorporated a linear regression model to predict my running performance on race day."
            icon={
              <SocialIcons 
                githubUrl="https://github.com/Lorraine-Sanares/running-dashboard"
                size={20}
                color="text-white"
              />
            }
          />
          
          <BentoGridItem
            header={
              <Image 
                src="/assets/kmeans3.png" 
                alt="Bookstore Analysis" 
                fill 
                className="object-cover" 
              />
            }
            title="Bookstore Analysis"
            description="A data-driven analysis of sales trends, customer insights, and inventory management in bookstores. Applied unsupervised machine learning models to extract insights from customer and book attributes."
            icon={
              <SocialIcons 
                githubUrl="https://github.com/Lorraine-Sanares/bookstore-analysis"
                size={20}
                color="text-white"
              />
            }
          />
          
          <BentoGridItem
            header={
              <Image 
                src="/assets/travellex.png" 
                alt="Travel Dashboard" 
                fill 
                className="object-cover" 
              />
            }
            title="Travel Dashboard"
            description="A travel insights dashboard to plan trips, track expenses, and explore destinations efficiently. My very first data analysis project, completed during VCE Data Analytics in 2022."
            icon={
              <SocialIcons 
                githubUrl="https://github.com/Lorraine-Sanares/travellex"
                externalUrl="https://public.tableau.com/app/profile/lorraine.sanares/viz/Travellex/Besttime"
                size={20}
                color="text-white"
              />
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects;