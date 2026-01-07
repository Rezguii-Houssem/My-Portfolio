"use client";

import { useState } from "react";
import { HoverButton } from "./hover-glow-button";
import Starfield from "./starfield";
import { motion, AnimatePresence } from "framer-motion";

export default function EntryScreen() {
    const [show, setShow] = useState(true);
    const [isWarping, setIsWarping] = useState(false);
    const [showFlash, setShowFlash] = useState(false);

    // Trigger Warp
    const handleEnter = () => {
        setIsWarping(true);

        // Play sound here if implemented

        // Flash Sequence
        setTimeout(() => {
            setShowFlash(true);
        }, 1200);

        // Unmount
        setTimeout(() => {
            setShow(false);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-50 overflow-hidden"
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                >
                    {/* Background Stars - Persistent */}
                    <Starfield isWarping={isWarping} />

                    {/* Flash Overlay */}
                    <AnimatePresence>
                        {showFlash && (
                            <motion.div
                                className="absolute inset-0 z-[60] bg-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: "circIn" }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Content Container */}
                    <motion.div
                        className="relative z-10 w-full h-full flex items-center justify-center bg-transparent"
                        animate={isWarping ? "warp" : "idle"}
                        variants={{
                            idle: { scale: 1, filter: "blur(0px)", x: 0, y: 0 },
                            warp: {
                                scale: [1, 1.2, 5],
                                filter: ["blur(0px)", "blur(2px)", "blur(20px)"],
                                x: [0, -2, 2, -5, 5, 0],
                                y: [0, 2, -2, 5, -5, 0],
                                opacity: [1, 1, 0],
                                transition: {
                                    duration: 1.5,
                                    times: [0, 0.5, 1],
                                    ease: "anticipate"
                                }
                            }
                        }}
                    >
                        <HoverButton
                            onClick={handleEnter}
                            glowColor="#00ffc3"
                            className="font-bold tracking-widest uppercase"
                        >
                            LAUNCH PORTAL
                        </HoverButton>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
