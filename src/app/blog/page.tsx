import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Pandemic Simulation with ThreeJS",
    category: "DEVELOPMENT",
    date: "February 01, 2021",
    description: "My research project for CSE 487 at SUNY Korea",
    image: "/assets/dashboard.png",
    link: "#",
  },
  {
    id: 2,
    title: "Data visualization on a globe, inspired by Github's homepage",
    category: "DEVELOPMENT",
    date: "February 01, 2021",
    description: "Interactive globe showing real-time data points",
    image: "/assets/kmeans.png",
    link: "#",
  },
  {
    id: 3,
    title: "My favorite albums that I discovered in 2020",
    category: "PERSONAL",
    date: "January 11, 2021",
    description: "A collection of my most played albums in 2020",
    image: "/assets/travellex.png",
    link: "#",
  },
];

export default function BlogPage() {
  return (
    
    <main className="min-h-screen p-16">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-10 py-16">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">
            Lorraine Sanares | Personal Blog
          </h1>
          <p className="text-gray-600">
            Welcome to my personal blog. Here I share my stories and ideas with the world.
            I am very passionate about programming and design. Currently, I am a Computer Science
            student at Stony Brook University.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Get in touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/assets/profile.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full border-4 border-indigo-600"
          />
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="px-10 py-16">
        <h2 className="text-3xl font-bold">Blog Posts ↓</h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={post.link} className="group">
              <div className="bg-[#1a1a1a] shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-indigo-600 font-semibold">{post.category} · {post.date}</p>
                  <h3 className="text-lg font-bold mt-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
