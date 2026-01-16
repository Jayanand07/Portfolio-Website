"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface TerminalTypingProps {
    onComplete?: () => void;
}

export default function TerminalTyping({ onComplete }: TerminalTypingProps) {
    const [displayedCommand, setDisplayedCommand] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    const command = "whoami";
    const prompt = "jay@portfolio:~$ ";

    useEffect(() => {
        // Cursor blink effect
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        // Type the command character by character
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
            if (currentIndex < command.length) {
                setDisplayedCommand(command.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typeInterval);
                // Show output after command is typed
                setTimeout(() => {
                    setShowOutput(true);
                    onComplete?.();
                }, 400);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, [onComplete]);

    return (
        <div className="font-mono space-y-1.5">
            {/* Command line */}
            <div className="flex items-center gap-0">
                <span className="text-emerald-400">{prompt}</span>
                <span className="text-zinc-300">{displayedCommand}</span>
                <motion.span
                    className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-0.5"
                    animate={{ opacity: cursorVisible ? 1 : 0 }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            {/* Output */}
            <AnimatePresence>
                {showOutput && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-1 pl-0"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-400"
                        >
                            <span className="text-cyan-400">→</span> name:{" "}
                            <span className="text-white font-semibold">Jay Anand</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-400"
                        >
                            <span className="text-cyan-400">→</span> role:{" "}
                            <span className="text-cyan-300">Cybersecurity & Cloud Engineer</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-zinc-400"
                        >
                            <span className="text-cyan-400">→</span> status:{" "}
                            <span className="text-emerald-400">available for opportunities</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
