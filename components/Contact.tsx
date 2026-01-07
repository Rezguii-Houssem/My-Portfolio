"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { ShimmerButton } from "./ui/shimmer-button";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get In Touch</h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        I'm currently open to new opportunities in Cloud Architecture and Engineering.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                        <a href="mailto:rezgui.houssem@outlook.com">
                            <ShimmerButton className="shadow-2xl">
                                <span className="flex items-center gap-2 text-sm font-medium text-white">
                                    <Mail size={20} />
                                    Email Me
                                </span>
                            </ShimmerButton>
                        </a>
                        <a href="https://www.linkedin.com/in/houssem-rezgui-5a565232b" target="_blank" rel="noopener noreferrer">
                            <ShimmerButton background="rgba(15, 23, 42, 1)" className="shadow-2xl">
                                <span className="flex items-center gap-2 text-sm font-medium text-white">
                                    <Linkedin size={20} />
                                    LinkedIn
                                </span>
                            </ShimmerButton>
                        </a>
                        <a href="https://github.com/Rezguii-Houssem" target="_blank" rel="noopener noreferrer">
                            <ShimmerButton background="rgba(15, 23, 42, 1)" className="shadow-2xl">
                                <span className="flex items-center gap-2 text-sm font-medium text-white">
                                    <Github size={20} />
                                    GitHub
                                </span>
                            </ShimmerButton>
                        </a>
                    </div>

                    <footer className="text-slate-500 text-sm border-t border-slate-800 pt-8 mt-12">
                        <p>© {new Date().getFullYear()} Rezgui Houssem. All rights reserved.</p>
                        <p className="mt-2">Built with Next.js 16, Tailwind CSS & Framer Motion</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}
