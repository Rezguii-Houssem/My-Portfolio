"use client";

import React, { useRef, useEffect } from "react";

interface StarfieldProps {
    isWarping: boolean;
}

export default function Starfield({ isWarping }: StarfieldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isWarpingRef = useRef(isWarping);

    useEffect(() => {
        isWarpingRef.current = isWarping;
    }, [isWarping]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // CONFIG
        const starCount = 800;
        const stars: { x: number; y: number; z: number; oZ: number }[] = [];
        let width = window.innerWidth;
        let height = window.innerHeight;
        let cx = width / 2;
        let cy = height / 2;

        // Init Stars
        // Coordinates range from -width to +width roughly, centering at 0
        // Z ranges from 0 to 1000 (roughly)
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: (Math.random() - 0.5) * width * 2,
                y: (Math.random() - 0.5) * height * 2,
                z: Math.random() * 1000,
                oZ: Math.random() * 1000 // original Z for resetting
            });
        }

        let speed = 0.5;
        let animationFrameId: number;

        const animate = () => {
            // Clear background
            // Standard clear
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            // Update Speed
            const targetSpeed = isWarpingRef.current ? 50 : 0.5;
            speed += (targetSpeed - speed) * 0.05;

            // Draw Stars
            // Sort by Z? Not strictly necessary for simple dots, but good for depth order if overlapping.
            // For performance, skip sort.

            const warpFactor = isWarpingRef.current ? (speed / 10) : 0;

            ctx.fillStyle = "white";

            for (let i = 0; i < starCount; i++) {
                const star = stars[i];

                // Move Star
                star.z -= speed;

                // Reset if behind camera
                if (star.z <= 1) {
                    star.z = 1000;
                    star.x = (Math.random() - 0.5) * width * 2;
                    star.y = (Math.random() - 0.5) * height * 2;
                    star.oZ = 1000;
                }

                // Project
                const perspective = 300 / (star.z);
                const x = cx + star.x * perspective;
                const y = cy + star.y * perspective;

                // Size
                const size = (1 - star.z / 1000) * 3;

                // Opacity based on Z
                const opacity = 1 - star.z / 1000;

                if (x >= 0 && x <= width && y >= 0 && y <= height) {
                    if (isWarpingRef.current && speed > 2) {
                        // Draw Streak
                        // Use previous position or just project backwards based on speed
                        const prevPerspective = 300 / (star.z + speed * 2); // stretch factor
                        const prevX = cx + star.x * prevPerspective;
                        const prevY = cy + star.y * prevPerspective;

                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = size;
                        ctx.moveTo(prevX, prevY);
                        ctx.lineTo(x, y);
                        ctx.stroke();
                    } else {
                        // Draw Dot
                        ctx.beginPath();
                        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            cx = width / 2;
            cy = height / 2;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // trigger initial size

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-black" />;
}
