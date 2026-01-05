"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Gaming3DCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

const Gaming3DCard = ({
  children,
  className = "",
  glowColor = "cyan",
  intensity = 1,
}: Gaming3DCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * intensity);
    y.set(yPct * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowColors = {
    cyan: "shadow-cyan-500/50",
    purple: "shadow-purple-500/50",
    pink: "shadow-pink-500/50",
    green: "shadow-green-500/50",
    red: "shadow-red-500/50",
    blue: "shadow-blue-500/50",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.05,
      }}
      className={`
        relative group cursor-pointer
        bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90
        backdrop-blur-xl border border-white/20 rounded-2xl
        transition-all duration-300 ease-out
        hover:shadow-2xl ${glowColors[glowColor as keyof typeof glowColors]}
        ${className}
      `}
    >
      {/* Holographic Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent, ${
            glowColor === "cyan"
              ? "#06b6d4"
              : glowColor === "purple"
              ? "#8b5cf6"
              : glowColor === "pink"
              ? "#ec4899"
              : glowColor === "green"
              ? "#10b981"
              : glowColor === "red"
              ? "#ef4444"
              : "#3b82f6"
          }20, transparent)`,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Scan Lines */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <div
        className="relative z-10 p-6"
        style={{
          transform: "translateZ(50px)",
        }}
      >
        {children}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Gaming3DCard;
