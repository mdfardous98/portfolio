"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaCode,
  FaRocket,
  FaCog,
  FaLightbulb,
  FaDatabase,
  FaMobile,
} from "react-icons/fa";

const Floating3DElements = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  const elements = [
    { icon: FaCode, color: "text-cyan-400", delay: 0 },
    { icon: FaRocket, color: "text-purple-400", delay: 0.5 },
    { icon: FaCog, color: "text-yellow-400", delay: 1 },
    { icon: FaLightbulb, color: "text-green-400", delay: 1.5 },
    { icon: FaDatabase, color: "text-red-400", delay: 2 },
    { icon: FaMobile, color: "text-blue-400", delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color}`}
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            opacity: 0,
            scale: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [0, 1, 0.8, 1, 0],
            rotateX: [0, 360, 180, 360, 0],
            rotateY: [0, 180, 360, 180, 0],
            rotateZ: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative"
            whileHover={{
              scale: 1.5,
              rotateY: 180,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* 3D Shadow */}
            <div className="absolute inset-0 transform translate-x-1 translate-y-1 opacity-30">
              <element.icon size={24} />
            </div>

            {/* Main Icon */}
            <div className="relative z-10 p-3 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10">
              <element.icon size={24} />
            </div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-lg blur-md opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundColor: element.color.includes("cyan")
                  ? "#06b6d4"
                  : element.color.includes("purple")
                  ? "#8b5cf6"
                  : element.color.includes("yellow")
                  ? "#eab308"
                  : element.color.includes("green")
                  ? "#10b981"
                  : element.color.includes("red")
                  ? "#ef4444"
                  : "#3b82f6",
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            opacity: [0, 0.3, 0],
            rotate: [0, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          <div
            className={`w-8 h-8 border-2 ${
              i % 4 === 0
                ? "border-cyan-500 rotate-45"
                : i % 4 === 1
                ? "border-purple-500 rounded-full"
                : i % 4 === 2
                ? "border-yellow-500"
                : "border-green-500 rounded-full"
            } backdrop-blur-sm`}
            style={{
              background:
                i % 2 === 0 ? "rgba(255,255,255,0.05)" : "transparent",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Floating3DElements;
