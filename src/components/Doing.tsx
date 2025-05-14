"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { FaLinkedin, FaTwitter, FaMedium, FaGithub, FaYoutube, FaDiscord } from "react-icons/fa";

interface DriveCardProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  delay?: number;
}

const GlowingLine: React.FC = () => (
  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 shadow-[0_0_16px_4px_rgba(59,130,246,0.3)]"></div>
);

const DriveCard: React.FC<DriveCardProps> = ({ title, image, imageAlt, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-blue-500/10 transition duration-300 ease-in-out h-full flex flex-col items-center"
  >
    <div className="flex justify-center items-center mb-6">
      <Image 
        src={image} 
        alt={imageAlt} 
        width={image.includes('king.png') ? 70 : image.includes('book.png') ? 150 : 120} 
        height={image.includes('king.png') ? 70 : image.includes('book.png') ? 150 : 120} 
        style={{ 
          objectFit: "contain",
          transform: image.includes('king.png') ? 'rotate(25deg)' : 'none'
        }} 
        className="rounded-lg" 
      />
    </div>
    <h3 className="font-semibold text-2xl mb-2 text-white text-center">{title}</h3>
    <GlowingLine />
    <p className="text-zinc-300 text-center text-base mb-2">{description}</p>
  </motion.div>
);

const Doing: React.FC = () => {
    return (
    <section className="bg-[#060C14] py-24 md:py-36 px-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent"></div>
      <div className="absolute -right-20 top-1/3 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute -left-20 bottom-1/3 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl"></div>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
                    My Ethos
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 px-2 max-w-5xl mx-auto">
          <DriveCard
            title="MISSION"
            image="/assets/book.png"
            imageAlt="Book"
            description="I dedicate my time to continuous learning and upskilling—exploring frameworks and technologies beyond coursework. I want to deepen my expertise and apply knowledge in real-world contexts—whether through hands-on projects, certifications, or self-driven exploration."
            delay={0.1}
          />
          <DriveCard
            title="VISION"
            image="/assets/king.png"
            imageAlt="King"
            description="Pursuing a future where I have agency to express my authentic self in my work; finding that perfect blend between what I love, what I'm good at, what the world needs, and what I can be paid for - my ikigai."
            delay={0.2}
          />
          <DriveCard
            title="PURPOSE"
            image="/assets/pen.png"
            imageAlt="Pen"
            description="Shared knowledge is the foundation of growth, innovation, and collective success - I've had a long-time passion for teaching, therefore I try my best to pass on what I learn through writing, workshops, or everyday conversation. I aim to foster curiosity and inspire others to push their own boundaries, as I do mine."
            delay={0.3}
          />
        </div>
      </div>
    </section>
    );
};

export default Doing;