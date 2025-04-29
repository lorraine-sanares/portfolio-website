"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Experience: React.FC = () => {
  const experienceData = [
    {
      title: "Nov. 2024 - Dec. 2024",
      content: (
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-blue-500/10 transition duration-300 ease-in-out p-8">
          <h3 className="text-2xl font-semibold text-white mb-2">AI & Data Intern At Deloitte</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4 shadow-[0_0_16px_4px_rgba(59,130,246,0.3)]"></div>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Designed and implemented an event-driven data pipeline on AWS implementing EventBridge, Lambda, Airflow, and S3, automating data ingestion, orchestration, and storage.</li>
            <li>Implemented key pipeline components using Python, PySpark, Airflow, and AWS, managing event-triggered and scheduled processing, orchestrating tasks via Airflow DAGs, configuring security settings, and storing processed outputs in S3 for downstream use.</li>
            <li>Coordinated with team members and internal stakeholders to refine data processing strategies, improving workflow efficiency.</li>
            <li>Liaised with senior team members and external stakeholders, presenting insights through PowerPoint reports on Microsoft Teams, ensuring alignment on project objectives.</li>
            <li>Developed a client-facing pack utilizing Microsoft PowerPoint and Excel, integrating stakeholder feedback and expediting key project deliverables.</li>
            <li>Documented and refined data ingestion processes using Microsoft Word, ensuring clear procedural guidelines for the team.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jun. 2022 - Present",
      content: (
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/10 transition duration-300 ease-in-out p-8">
          <h3 className="text-2xl font-semibold text-white mb-2">Private Piano Teacher</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-4 shadow-[0_0_16px_4px_rgba(147,51,234,0.3)]"></div>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Taught 40 piano lessons annually to a primary school-aged student, advancing music theory and technique.</li>
            <li>Developed weekly lesson plans aligned with AMEB classical coursework and adapted teaching methods to maintain high engagement and motivation.</li>
            <li>Prepared student for recitals and AMEB exams, whilst maintaining regular communication with parent to manage expectations and outcomes.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Feb. 2021 - Present",
      content: (
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-blue-500/10 transition duration-300 ease-in-out p-8">
          <h3 className="text-2xl font-semibold text-white mb-2">Teaching Assistant At Kumon</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4 shadow-[0_0_16px_4px_rgba(59,130,246,0.3)]"></div>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Entered, organised, and maintained student performance data in Excel, utilising formulas and functions to track progress, generate reports, and identify learning trends to support individualised learning plans.</li>
            <li>Tutored students in math and reading, providing constructive feedback to enhance academic performance.</li>
            <li>Managed administrative tasks and reception duties, ensuring smooth business operations.</li>
            <li>Responded to parent inquiries regarding student homework, providing clarifications and progress updates.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Mar. 2022 - Oct. 2022",
      content: (
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/10 transition duration-300 ease-in-out p-8">
          <h3 className="text-2xl font-semibold text-white mb-2">Private Maths Tutor</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-4 shadow-[0_0_16px_4px_rgba(147,51,234,0.3)]"></div>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Provided personalised math tutoring to a Year 7 student, enhancing their understanding and engagement with math concepts through customized lesson plans.</li>
            <li>Motivated the student by using creative and engaging teaching methods, fostering a positive attitude toward math.</li>
            <li>Monitored the student&apos;s progress in collaboration with their math teacher, successfully improving their grades by at least 2% in each school assessment.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full text-white">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 relative inline-block">
            Work Experience
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full shadow-[0_0_16px_4px_rgba(59,130,246,0.3)]"></div>
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and achievements.
          </p>
        </div>
        <Timeline data={experienceData} />
      </div>
    </section>
  );
};

export default Experience;
