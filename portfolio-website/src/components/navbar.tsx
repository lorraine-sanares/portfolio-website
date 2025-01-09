"use client"; // Required if using Next.js App Router

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

    return (
        <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link legacyBehavior href="/">
            <a className="text-xl font-bold">MyWebsite</a>
            </Link>

            {/* Hamburger Icon (for mobile) */}
            <button
            className="sm:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? (
                <span>&#x2715; {/* Close Icon */}</span>
            ) : (
                <span>&#9776; {/* Hamburger Icon */}</span>
            )}
            </button>

            {/* Navigation Links */}
            <ul
            className={`${
                isOpen ? "block" : "hidden"
            } sm:flex sm:items-center sm:space-x-6 mt-4 sm:mt-0`}
            >
            <li>
                <Link legacyBehavior href="/">
                <a className="hover:text-blue-400">Home</a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior href="/about">
                <a className="hover:text-blue-400">About</a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior href="/projects">
                <a className="hover:text-blue-400">Projects</a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior href="/contact">
                <a className="hover:text-blue-400">Contact</a>
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    );
    };

    export default Navbar;