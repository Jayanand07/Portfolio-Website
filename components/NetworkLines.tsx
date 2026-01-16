"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DataPacket {
    id: number;
    pathIndex: number;
    progress: number;
}

export default function NetworkLines() {
    const [packets, setPackets] = useState<DataPacket[]>([]);

    // Define the tracer line paths (from left text area toward right nodes)
    const paths = [
        // Path to Security node (top)
        { id: 0, d: "M 0,200 Q 150,180 280,120", targetX: 280, targetY: 120 },
        // Path to Cloud node (middle)
        { id: 1, d: "M 0,280 Q 180,280 300,280", targetX: 300, targetY: 280 },
        // Path to Systems node (bottom)
        { id: 2, d: "M 0,360 Q 150,380 280,440", targetX: 280, targetY: 440 },
    ];

    useEffect(() => {
        // Create data packets that flow along the paths
        const createPacket = () => {
            const pathIndex = Math.floor(Math.random() * paths.length);
            const newPacket: DataPacket = {
                id: Date.now() + Math.random(),
                pathIndex,
                progress: 0,
            };
            setPackets((prev) => [...prev.slice(-8), newPacket]); // Keep max 8 packets
        };

        // Create initial packets with delay
        const initialDelays = [500, 1500, 2500];
        initialDelays.forEach((delay, index) => {
            setTimeout(() => {
                setPackets((prev) => [
                    ...prev,
                    { id: Date.now() + index, pathIndex: index, progress: 0 },
                ]);
            }, delay);
        });

        // Create new packets periodically
        const interval = setInterval(createPacket, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: "visible" }}
            viewBox="0 0 400 560"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                {/* Gradient for tracer lines */}
                <linearGradient id="tracerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(34,211,238,0.1)" />
                    <stop offset="50%" stopColor="rgba(34,211,238,0.4)" />
                    <stop offset="100%" stopColor="rgba(34,211,238,0.2)" />
                </linearGradient>

                {/* Glow filter for packets */}
                <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Animated dash pattern */}
                <pattern id="dashPattern" patternUnits="userSpaceOnUse" width="20" height="1">
                    <rect width="8" height="1" fill="rgba(34,211,238,0.3)" />
                </pattern>
            </defs>

            {/* Render tracer lines */}
            {paths.map((path, index) => (
                <g key={path.id}>
                    {/* Base line (very subtle) */}
                    <motion.path
                        d={path.d}
                        fill="none"
                        stroke="rgba(34,211,238,0.08)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: 1 + index * 0.3,
                            ease: "easeOut",
                        }}
                    />

                    {/* Animated tracer overlay */}
                    <motion.path
                        d={path.d}
                        fill="none"
                        stroke="url(#tracerGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="8 16"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: 1,
                            strokeDashoffset: [0, -48],
                        }}
                        transition={{
                            pathLength: { duration: 2, delay: 1.2 + index * 0.3 },
                            opacity: { duration: 0.5, delay: 1.2 + index * 0.3 },
                            strokeDashoffset: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                                delay: 2 + index * 0.3,
                            },
                        }}
                    />
                </g>
            ))}

            {/* Render data packets */}
            {packets.map((packet) => (
                <motion.g key={packet.id} filter="url(#packetGlow)">
                    <motion.circle
                        r="3"
                        fill="#22d3ee"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            offsetDistance: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.9, 1],
                        }}
                        style={{
                            offsetPath: `path("${paths[packet.pathIndex].d}")`,
                        }}
                    />
                    {/* Packet trail */}
                    <motion.circle
                        r="6"
                        fill="rgba(34,211,238,0.2)"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0.5, 0],
                            offsetDistance: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.9, 1],
                        }}
                        style={{
                            offsetPath: `path("${paths[packet.pathIndex].d}")`,
                        }}
                    />
                </motion.g>
            ))}
        </svg>
    );
}
