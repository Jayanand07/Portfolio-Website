"use client";

import { useEffect, useState } from "react";

const statusItems = [
    { label: "Sys", value: "Online", color: "emerald" },
    { label: "Sec", value: "Active", color: "cyan" },
];

export default function SystemStatus() {
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-4 left-4 z-30 hidden lg:block">
            <div className="flex items-center gap-3 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/[0.05] rounded-full">
                {statusItems.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center gap-1.5 font-mono text-[9px]"
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span
                                className={`relative inline-flex rounded-full h-1.5 w-1.5 ${item.color === "emerald"
                                        ? "bg-emerald-500/70"
                                        : "bg-cyan-500/70"
                                    }`}
                            />
                        </span>
                        <span className="text-zinc-600">{item.label}:</span>
                        <span
                            className={
                                item.color === "emerald"
                                    ? "text-emerald-500/70"
                                    : "text-cyan-500/70"
                            }
                        >
                            {item.value}
                        </span>
                    </div>
                ))}

                <div className="w-px h-3 bg-white/5" />

                <div className="font-mono text-[9px] text-zinc-600">
                    {currentTime}
                </div>
            </div>
        </div>
    );
}
