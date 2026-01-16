"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    // Transform mouse position to gradient positions
    const gradientX = useTransform(smoothMouseX, [0, 1], ["30%", "70%"]);
    const gradientY = useTransform(smoothMouseY, [0, 1], ["30%", "70%"]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                mouseX.set(x);
                mouseY.set(y);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
            {/* Base dark gradient */}
            <div className="absolute inset-0 bg-[#030303]" />

            {/* Mouse-reactive mesh gradient layer */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at var(--mouse-x, 50%) var(--mouse-y, 30%), 
              rgba(6, 182, 212, 0.08) 0%, 
              transparent 50%),
            radial-gradient(ellipse 60% 80% at 70% 60%, 
              rgba(59, 130, 246, 0.05) 0%, 
              transparent 50%),
            radial-gradient(ellipse 50% 50% at 30% 70%, 
              rgba(139, 92, 246, 0.04) 0%, 
              transparent 50%)
          `,
                }}
            />

            {/* Animated mesh gradient - slow ambient movement */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    background: `
            linear-gradient(135deg, 
              rgba(6, 182, 212, 0.06) 0%, 
              transparent 40%, 
              rgba(59, 130, 246, 0.04) 60%,
              transparent 100%)
          `,
                    backgroundSize: "200% 200%",
                }}
            />

            {/* Primary radial glow - top right (cyan) */}
            <motion.div
                className="absolute -top-40 -right-40 w-[900px] h-[900px]"
                animate={{
                    opacity: [0.12, 0.2, 0.12],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.25) 0%, transparent 55%)",
                }}
            />

            {/* Secondary radial glow - bottom left (blue/purple) */}
            <motion.div
                className="absolute -bottom-20 -left-20 w-[700px] h-[700px]"
                animate={{
                    opacity: [0.08, 0.15, 0.08],
                    scale: [1, 1.12, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
                style={{
                    background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 55%)",
                }}
            />

            {/* Tertiary glow - center accent */}
            <motion.div
                className="absolute top-1/2 left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2"
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                style={{
                    background: "radial-gradient(circle at center, rgba(34, 211, 238, 0.12) 0%, transparent 60%)",
                }}
            />

            {/* Animated circuit grid pattern */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    opacity: [0.02, 0.05, 0.02],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                    maskImage: "radial-gradient(ellipse 70% 60% at 60% 40%, black 0%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 60% 40%, black 0%, transparent 70%)",
                }}
            />

            {/* Secondary finer grid - circuit board effect */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: "20px 20px",
                    maskImage: "radial-gradient(ellipse 50% 50% at 70% 50%, black 0%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 70% 50%, black 0%, transparent 70%)",
                }}
            />

            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                }}
            />

            {/* Subtle vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.5) 100%)",
                }}
            />

            {/* Top edge fade for navbar blend */}
            <div
                className="absolute top-0 left-0 right-0 h-32"
                style={{
                    background: "linear-gradient(to bottom, rgba(3, 3, 3, 0.5) 0%, transparent 100%)",
                }}
            />
        </div>
    );
}
