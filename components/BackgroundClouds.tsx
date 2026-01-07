"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Database, CloudRain, CloudLightning } from "lucide-react";
import { useEffect, useState } from "react";

const icons = [Cloud, Server, Database, CloudRain, CloudLightning];

interface CloudProps {
    icon: any;
    initialX: number;
    initialY: number;
    duration: number;
    delay: number;
    scale: number;
}

export default function BackgroundClouds() {
    const [clouds, setClouds] = useState<CloudProps[]>([]);

    useEffect(() => {
        // Generate random cloud positions on client side only to avoid hydration mismatch
        const newClouds = Array.from({ length: 15 }).map(() => ({
            icon: icons[Math.floor(Math.random() * icons.length)],
            initialX: Math.random() * 100, // percentage
            initialY: Math.random() * 100, // percentage
            duration: 20 + Math.random() * 40, // 20-60s duration
            delay: Math.random() * 10,
            scale: 0.5 + Math.random() * 1, // 0.5 - 1.5 scale
        }));
        setClouds(newClouds);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {clouds.map((cloud, i) => {
                const Icon = cloud.icon;
                return (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            opacity: [0, 0.15, 0],
                            scale: cloud.scale
                        }} // Floating effect
                        transition={{
                            duration: cloud.duration,
                            repeat: Infinity,
                            delay: cloud.delay,
                            ease: "easeInOut",
                        }}
                        className="absolute text-slate-600/20"
                        style={{
                            left: `${cloud.initialX}%`,
                            top: `${cloud.initialY}%`,
                        }}
                    >
                        <Icon size={64} />
                    </motion.div>
                );
            })}
        </div>
    );
}
