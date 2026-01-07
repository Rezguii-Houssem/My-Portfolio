"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "./ui/shimmer-button";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50 animate-pulse" />


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-4xl"
            >
                <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-4">
                    Hello, I'm
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Rezgui Houssem
                    </span>
                </h1>
                <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-slate-200">
                    Cloud Architect
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Bridging the gap between complex technical solutions and business needs.
                    Specialized in AWS, Python, and Leadership.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <ShimmerButton
                        onClick={() => {
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="shadow-2xl"
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg flex items-center gap-2">
                            View Projects <ArrowRight size={20} />
                        </span>
                    </ShimmerButton>

                    <a href="#contact">
                        <ShimmerButton background="rgba(15, 23, 42, 1)" className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Contact Me
                            </span>
                        </ShimmerButton>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
