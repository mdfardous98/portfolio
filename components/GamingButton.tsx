"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GamingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  glitch?: boolean;
}

const GamingButton = ({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  glitch = false,
}: GamingButtonProps) => {
  const variants = {
    primary: "from-cyan-500 to-blue-600 shadow-cyan-500/50",
    secondary: "from-purple-500 to-pink-600 shadow-purple-500/50",
    danger: "from-red-500 to-orange-600 shadow-red-500/50",
    success: "from-green-500 to-emerald-600 shadow-green-500/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const ButtonComponent = href ? motion.a : motion.button;
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  return (
    <ButtonComponent
      {...props}
      className={`
        relative group cursor-pointer inline-flex items-center gap-2 font-bold text-white
        bg-gradient-to-r ${variants[variant]} ${sizes[size]}
        rounded-lg border-2 border-white/20 backdrop-blur-sm
        transform-gpu transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-2xl active:scale-95
        ${className}
      `}
      whileHover={{
        rotateX: -5,
        rotateY: 5,
        z: 50,
      }}
      whileTap={{
        rotateX: 0,
        rotateY: 0,
        scale: 0.95,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* 3D Base Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 rounded-lg transform translate-y-1 translate-x-1 -z-10" />

      {/* Glitch Effect */}
      {glitch && (
        <>
          <motion.div
            className="absolute inset-0 bg-red-500 opacity-20 rounded-lg"
            animate={{
              x: [-2, 2, -1, 1, 0],
              opacity: [0, 0.3, 0, 0.2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-cyan-500 opacity-20 rounded-lg"
            animate={{
              x: [2, -2, 1, -1, 0],
              opacity: [0, 0.3, 0, 0.2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 2,
              delay: 0.1,
            }}
          />
        </>
      )}

      {/* Scan Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

      {/* Holographic Border */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(6, 182, 212, 0.5), rgba(147, 51, 234, 0.5), rgba(236, 72, 153, 0.5))",
            "linear-gradient(90deg, rgba(147, 51, 234, 0.5), rgba(236, 72, 153, 0.5), rgba(6, 182, 212, 0.5))",
            "linear-gradient(135deg, rgba(236, 72, 153, 0.5), rgba(6, 182, 212, 0.5), rgba(147, 51, 234, 0.5))",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && (
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            {icon}
          </motion.span>
        )}
        {children}
      </span>

      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-60"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 50 - 25],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </ButtonComponent>
  );
};

export default GamingButton;
