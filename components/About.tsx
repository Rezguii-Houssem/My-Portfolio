"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 px-4 bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        About Me
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <p className="mb-6">
                            I am a <strong>Junior Cloud Architect</strong> with a unique background. My professional journey began in business management, where I spent 10 years honing my leadership and customer service skills. This experience taught me the importance of aligning technical solutions with real-world business goals.
                        </p>
                        <p className="mb-6">
                            Transitioning into technology, I found my passion in Cloud Computing. I have spent the last year diving deep into <strong>AWS</strong>, mastering the art of designing scalable, secure, and cost-effective architectures.
                        </p>
                        <p>
                            My goal is simple: to bridge the gap between complex technical infrastructure and strategic business needs, ensuring that every cloud solution I build delivers tangible value.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
