"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHeart,
  FaArrowUp,
  FaRocket,
  FaCode,
  FaLightbulb,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCoffee,
  FaTerminal,
  FaGamepad,
} from "react-icons/fa";
import Link from "next/link";
import Gaming3DCard from "./Gaming3DCard";
import GamingButton from "./GamingButton";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/mdfardous98",
      label: "GitHub",
      color: "from-gray-700 to-gray-900",
      stats: "50+ Repos",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mdfardous",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-800",
      stats: "500+ Connections",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/tajwar.fardousx",
      label: "Facebook",
      color: "from-blue-500 to-blue-700",
      stats: "Personal Updates",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home", icon: FaRocket },
    { name: "About", href: "#about", icon: FaLightbulb },
    { name: "Skills", href: "#skills", icon: FaCode },
    { name: "Projects", href: "#projects", icon: FaTerminal },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  const techStack = [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Express.js",
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", icon: FaRocket },
    { label: "Technologies Mastered", value: "20+", icon: FaCode },
    { label: "Coffee Consumed", value: "∞", icon: FaCoffee },
    { label: "Lines of Code", value: "10K+", icon: FaTerminal },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 border-b border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Gaming3DCard key={stat.label} glowColor="cyan" intensity={1.2}>
                <div className="text-center p-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="mb-3"
                  >
                    <stat.icon className="text-3xl text-cyan-400 mx-auto" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-2xl font-bold text-white mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </Gaming3DCard>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Gaming3DCard glowColor="purple" intensity={1.5} className="p-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-4"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <FaGamepad className="text-3xl text-purple-400" />
                </motion.div>
                <h3 className="text-3xl font-bold neon-text">MD Fardous</h3>
              </motion.div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                A passionate web developer specializing in MERN stack
                development. I create modern, responsive, and user-friendly web
                applications that solve real-world problems with cutting-edge
                technology.
              </p>

              {/* Live Status */}
              <div className="flex items-center gap-3 mb-6 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 font-semibold">
                  Available for work
                </span>
                <span className="text-gray-400 text-sm ml-auto">
                  {mounted ? currentTime.toLocaleTimeString() : "--:--:--"}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white text-xs rounded-full border border-white/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.2,
                      rotateY: 10,
                      z: 20,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      relative p-4 rounded-xl transition-all duration-300 group
                      bg-gradient-to-br ${social.color} opacity-90 hover:opacity-100
                    `}
                    style={{ transformStyle: "preserve-3d" }}
                    aria-label={social.label}
                  >
                    <motion.div
                      animate={{ rotateZ: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="group-hover:animate-none"
                    >
                      <social.icon size={24} />
                    </motion.div>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label} - {social.stats}
                    </div>
                  </motion.a>
                ))}
              </div>
            </Gaming3DCard>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Gaming3DCard
              glowColor="green"
              intensity={1.2}
              className="p-6 h-full"
            >
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FaRocket className="text-green-400" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/10 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="group-hover:text-green-400"
                      >
                        <link.icon size={16} />
                      </motion.div>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </Gaming3DCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Gaming3DCard
              glowColor="blue"
              intensity={1.2}
              className="p-6 h-full"
            >
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3 text-gray-300 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <FaEnvelope className="text-red-400" />
                  <span className="text-sm">mdjfardous@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-gray-300 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <FaPhone className="text-green-400" />
                  <span className="text-sm">+8801688645882</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-gray-300 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <FaMapMarkerAlt className="text-yellow-400" />
                  <span className="text-sm">Dhaka, Bangladesh 🇧🇩</span>
                </motion.div>
              </div>

              {/* Quick Contact Button */}
              <div className="mt-6">
                <GamingButton
                  href="#contact"
                  variant="primary"
                  size="sm"
                  icon={<FaRocket />}
                  className="w-full"
                >
                  Let's Connect
                </GamingButton>
              </div>
            </Gaming3DCard>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <Gaming3DCard glowColor="cyan" intensity={1.8} className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0"
              >
                <span>© {currentYear} MD Fardous. Crafted with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                <span>and lots of</span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaCoffee className="text-yellow-500" />
                </motion.div>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{
                  scale: 1.2,
                  rotateY: 180,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 p-4 rounded-full transition-all duration-300 group shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
                aria-label="Back to top"
              >
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaArrowUp className="text-white" />
                </motion.div>
              </motion.button>
            </div>

            {/* Tech Credits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-6 pt-6 border-t border-white/10"
            >
              <p className="text-sm text-gray-400 mb-2">
                Built with Next.js 14, TypeScript, Tailwind CSS, and Framer
                Motion
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀 Always learning, always building
                </motion.span>
                <span>•</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  💡 Open to opportunities and collaborations
                </motion.span>
              </div>
            </motion.div>
          </Gaming3DCard>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
