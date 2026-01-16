"use client";

import { motion } from "framer-motion";
import { Shield, Cloud, Server } from "lucide-react";

const nodes = [
    {
        id: "security",
        icon: Shield,
        label: "Security",
        sublabel: "Zero Trust",
        position: { top: "8%", right: "15%" },
        delay: 0.3,
        floatDuration: 7,
        floatRange: 12,
    },
    {
        id: "cloud",
        icon: Cloud,
        label: "Cloud",
        sublabel: "Multi-Cloud",
        position: { top: "42%", right: "5%" },
        delay: 0.5,
        floatDuration: 8,
        floatRange: 15,
    },
    {
        id: "systems",
        icon: Server,
        label: "Systems",
        sublabel: "Infrastructure",
        position: { top: "72%", right: "18%" },
        delay: 0.7,
        floatDuration: 6,
        floatRange: 10,
    },
];

export default function FloatingVisual() {
    return (
        <div className="relative w-full h-[550px] md:h-[650px]">
            {/* Central convergence glow - reduced intensity */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[220px] h-[220px] -translate-x-1/2 -translate-y-1/2"
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [0.9, 1.05, 0.9],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    background: "radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, transparent 65%)",
                }}
            />

            {/* Connection lines SVG */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ overflow: "visible" }}
            >
                <defs>
                    <linearGradient id="nodeLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                        <stop offset="50%" stopColor="rgba(34, 211, 238, 0.6)" />
                        <stop offset="100%" stopColor="rgba(6, 182, 212, 0.4)" />
                    </linearGradient>

                    <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Triangle connection lines between nodes */}
                {/* Security to Cloud */}
                <motion.line
                    x1="78%"
                    y1="18%"
                    x2="85%"
                    y2="52%"
                    stroke="url(#nodeLineGradient)"
                    strokeWidth="1"
                    filter="url(#lineGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                />

                {/* Cloud to Systems */}
                <motion.line
                    x1="85%"
                    y1="52%"
                    x2="75%"
                    y2="82%"
                    stroke="url(#nodeLineGradient)"
                    strokeWidth="1"
                    filter="url(#lineGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, delay: 1.8 }}
                />

                {/* Systems to Security */}
                <motion.line
                    x1="75%"
                    y1="82%"
                    x2="78%"
                    y2="18%"
                    stroke="url(#nodeLineGradient)"
                    strokeWidth="1"
                    filter="url(#lineGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, delay: 2.1 }}
                />

                {/* Center convergence point */}
                <motion.circle
                    cx="79%"
                    cy="50%"
                    r="4"
                    fill="rgba(34, 211, 238, 0.5)"
                    filter="url(#lineGlow)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2.5,
                    }}
                />
            </svg>

            {/* Floating Node Cards */}
            {nodes.map(({ id, icon: Icon, label, sublabel, position, delay, floatDuration, floatRange }) => (
                <motion.div
                    key={id}
                    className="absolute"
                    style={position}
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        y: [-floatRange / 2, floatRange / 2, -floatRange / 2],
                        scale: 1,
                    }}
                    transition={{
                        opacity: { duration: 0.6, delay },
                        scale: { duration: 0.6, delay },
                        y: {
                            duration: floatDuration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: delay + 0.6,
                        },
                    }}
                >
                    <div className="group relative">
                        {/* Outer glow ring */}
                        <motion.div
                            className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
                            }}
                        />

                        {/* Card container - scaled down */}
                        <div className="relative backdrop-blur-xl bg-white/[0.015] border border-white/[0.06] rounded-xl p-4 min-w-[125px] hover:border-cyan-500/30 hover:bg-white/[0.03] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] scale-[0.94]">
                            {/* Inner highlight */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
                                style={{
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
                                }}
                            />

                            {/* Icon with orbital ring */}
                            <div className="relative mb-3">
                                <motion.div
                                    className="absolute -inset-2 rounded-full border border-cyan-500/10"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    {/* Orbiting dot */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                                </motion.div>

                                <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/8 to-blue-500/8 flex items-center justify-center border border-cyan-500/15 group-hover:border-cyan-400/30 transition-colors duration-300">
                                    <Icon className="w-5 h-5 text-cyan-400/80 group-hover:text-cyan-300 transition-colors duration-300" />
                                </div>
                            </div>

                            {/* Label - slightly reduced */}
                            <h4 className="text-white/90 font-medium text-sm mb-0.5">{label}</h4>
                            <p className="text-zinc-500/80 text-[10px] font-medium tracking-wide uppercase">{sublabel}</p>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Ambient particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
                    style={{
                        top: `${20 + i * 15}%`,
                        right: `${10 + i * 8}%`,
                    }}
                    animate={{
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.8, 1.2, 0.8],
                        y: [-5, 5, -5],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                />
            ))}
        </div>
    );
}
