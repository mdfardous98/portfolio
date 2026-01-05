"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useCallback } from "react";
import { FaWifi, FaBatteryFull, FaSignal, FaCog } from "react-icons/fa";

const GamingHUD = () => {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());
  const [fps, setFps] = useState(60);
  const [ping, setPing] = useState(12);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
      // Simulate FPS fluctuation
      setFps(Math.floor(Math.random() * 10) + 55);
      // Simulate ping fluctuation
      setPing(Math.floor(Math.random() * 20) + 8);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = useMemo(() => {
    return time.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }, [time]);

  // Prevent hydration mismatch by showing placeholder until mounted
  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50 pointer-events-none">
        <div className="bg-black/80 backdrop-blur-md border border-cyan-500/50 rounded-lg p-3 font-mono text-xs">
          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center gap-1 text-green-400">
              <FaWifi size={10} />
              <span>ONLINE</span>
            </div>
            <div className="flex items-center gap-1 text-cyan-400">
              <FaSignal size={10} />
              <span>--ms</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <span>FPS: --</span>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-2" />
          <div className="flex items-center justify-between">
            <div className="text-white">--:--:--</div>
            <div className="text-cyan-400">
              <FaCog size={10} />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-400 text-xs">ENERGY</span>
              <span className="text-white text-xs">100%</span>
            </div>
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-cyan-500 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-4 right-4 z-50 pointer-events-none"
    >
      {/* Main HUD Container */}
      <div className="bg-black/80 backdrop-blur-md border border-cyan-500/50 rounded-lg p-3 font-mono text-xs">
        {/* Top Row - System Status */}
        <div className="flex items-center gap-4 mb-2">
          <motion.div
            className="flex items-center gap-1 text-green-400"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaWifi size={10} />
            <span>ONLINE</span>
          </motion.div>

          <div className="flex items-center gap-1 text-cyan-400">
            <FaSignal size={10} />
            <span>{ping}ms</span>
          </div>

          <div className="flex items-center gap-1 text-yellow-400">
            <span>FPS: {fps}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-2" />

        {/* Bottom Row - Time and Status */}
        <div className="flex items-center justify-between">
          <div className="text-white">{formattedTime}</div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-cyan-400"
          >
            <FaCog size={10} />
          </motion.div>
        </div>

        {/* Health/Energy Bar */}
        <div className="mt-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-green-400 text-xs">ENERGY</span>
            <span className="text-white text-xs">100%</span>
          </div>
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Radar/Scanner Effect */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 border-2 border-cyan-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

export default GamingHUD;
