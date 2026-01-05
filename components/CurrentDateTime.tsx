"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo, useCallback } from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

const CurrentDateTime = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const formatDate = useCallback((date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, []);

  const formatTime = useCallback((date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }, []);

  const getTimeOfDay = useMemo(() => {
    const hour = currentTime.getHours();
    if (hour < 12) return "🌅 Good Morning";
    if (hour < 17) return "☀️ Good Afternoon";
    if (hour < 21) return "🌆 Good Evening";
    return "🌙 Good Night";
  }, [currentTime]);

  const formattedDate = useMemo(
    () => formatDate(currentTime),
    [currentTime, formatDate]
  );
  const formattedTime = useMemo(
    () => formatTime(currentTime),
    [currentTime, formatTime]
  );

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
        <div className="text-center">
          <div className="text-sm text-blue-100 mb-1">Loading...</div>
          <div className="text-white font-semibold text-lg">--:--:--</div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.8, type: "spring", stiffness: 100 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      {/* Main Container */}
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -5,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="glass backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 relative overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl"
          animate={{
            background: isHovered
              ? "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))"
              : "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Reduced Floating Particles for Performance */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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

        {/* Content */}
        <div className="relative z-10">
          {/* Header with Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <motion.span
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg"
            >
              🕐
            </motion.span>
            <span className="text-sm text-blue-100 font-medium">
              {getTimeOfDay}
            </span>
          </motion.div>

          {/* Date Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex items-center gap-3 mb-3"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="p-2 bg-white bg-opacity-20 rounded-lg"
            >
              <FaCalendarAlt className="text-blue-300" size={16} />
            </motion.div>
            <div>
              <div className="text-xs text-blue-200 opacity-80">
                Today's Date
              </div>
              <motion.div
                key={formattedDate}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white font-semibold text-lg leading-tight"
              >
                {formattedDate}
              </motion.div>
            </div>
          </motion.div>

          {/* Time Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              animate={{ rotate: isHovered ? [0, 5, -5, 0] : 0 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-white bg-opacity-20 rounded-lg"
            >
              <FaClock className="text-yellow-300" size={16} />
            </motion.div>
            <div>
              <div className="text-xs text-yellow-200 opacity-80">
                Current Time
              </div>
              <motion.div
                key={formattedTime}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-yellow-300 font-mono text-2xl font-bold tracking-wider"
              >
                {formattedTime}
              </motion.div>
            </div>
          </motion.div>

          {/* Pulse Indicator */}
          <motion.div
            className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Live Indicator Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            className="absolute bottom-2 right-3 text-xs text-green-300 font-medium"
          >
            LIVE
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered
              ? "inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(59, 130, 246, 0.3)"
              : "inset 0 0 10px rgba(255, 255, 255, 0.05)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Tooltip on Hover */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -10 : 10,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap pointer-events-none"
      >
        Your local time zone
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black border-opacity-80"></div>
      </motion.div>
    </motion.div>
  );
};

export default CurrentDateTime;
