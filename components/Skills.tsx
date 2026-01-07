"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Cloud", items: ["AWS (Amazon Web Services)", "Cloud Architecture", "Serverless"] },
    { category: "Development", items: ["Python", "Bash/Shell Scripting", "Linux Administration"] },
    { category: "DevOps & Tools", items: ["Git", "CI/CD Concepts", "Docker (Basics)"] },
    { category: "Soft Skills", items: ["Leadership (10 yrs)", "Strategic Planning", "Customer Service"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
                >
                    Competencies & Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="flex items-center text-slate-300">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
