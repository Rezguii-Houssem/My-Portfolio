"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
import { ShimmerButton } from "./ui/shimmer-button";

const projects = [
    {
        title: "Scalable 3-Tier Architecture",
        description: "Designed and deployed a highly available 3-tier web application architecture on AWS using EC2, RDS, and ELB.",
        tags: ["AWS", "EC2", "RDS", "VPC"],
        link: "#",
        github: "https://github.com/Rezguii-Houssem",
        image: "/projects/3tier_architecture.png"
    },
    {
        title: "Serverless Image Processing",
        description: "Built an event-driven image processing pipeline using AWS Lambda, S3, and DynamoDB for metadata storage.",
        tags: ["AWS Lambda", "S3", "DynamoDB", "Python"],
        link: "#",
        github: "https://github.com/Rezguii-Houssem",
        image: "/projects/serverless_processing.png"
    },
    {
        title: "Static Portfolio Website",
        description: "Hosted a static version of this portfolio using S3 website hosting and accelerated with CloudFront CDN.",
        tags: ["S3", "CloudFront", "Route53", "HTTPS"],
        link: "#",
        github: "https://github.com/Rezguii-Houssem",
        image: "/projects/static_portfolio.png"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-slate-700 hover:border-purple-500/50 group"
                        >
                            <div className="relative h-48 w-full bg-slate-700">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-700/50 text-blue-300 text-xs rounded-full border border-slate-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <ShimmerButton background="rgba(15, 23, 42, 1)" className="shadow-2xl !px-6">
                                            <span className="flex items-center justify-center gap-2 text-xs font-medium text-white">
                                                <Github size={16} /> Code
                                            </span>
                                        </ShimmerButton>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
