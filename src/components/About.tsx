"use client";

// Doesn't work, image gets cut off
// make photo cicle size dynamic

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const About: React.FC = () => {
    return (
        <section id="about" className="relative py-20 bg-[#060C14]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">About</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </MotionDiv>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <MotionDiv
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="aspect-square relative overflow-hidden rounded-2xl shadow-xl">
                                <Image
                                    src="/assets/headshot.jpg"
                                    alt="profile"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                I'm a data science student at the University of Melbourne. Boring intro I know, so here's some
                                cool stuff I do:
                            </p>

                            <MotionArticle
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">💻</span>
                                    <h3 className="text-2xl font-bold text-zinc-100">I code</h3>
                                </div>
                                <p className="text-zinc-400 text-base pl-11 leading-relaxed">
                                    Building data pipelines, creating interactive dashboards, and developing machine learning models to solve real-world problems.
                                </p>
                            </MotionArticle>

                            <MotionArticle
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">✒️</span>
                                    <h3 className="text-2xl font-bold text-zinc-100">I write</h3>
                                </div>
                                <p className="text-zinc-400 text-base pl-11 leading-relaxed">
                                    Sharing my journey in data science through technical articles and personal stories on Medium.
                                </p>
                            </MotionArticle>

                            <MotionArticle
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">🎓</span>
                                    <h3 className="text-2xl font-bold text-zinc-100">I teach</h3>
                                </div>
                                <p className="text-zinc-400 text-base pl-11 leading-relaxed">
                                    Mentoring fellow students and creating educational content to make data science more accessible.
                                </p>
                            </MotionArticle>
                        </MotionDiv>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 

