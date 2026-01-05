"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

const AdvancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? theme === "dark"
            ? "glass-dark backdrop-blur-xl shadow-2xl"
            : "bg-white/90 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Link href="#home" className="flex items-center space-x-3">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className={`p-3 rounded-full shadow-lg ${
                  scrolled
                    ? theme === "dark"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gradient-to-r from-white/20 to-white/30 backdrop-blur-sm"
                }`}
              >
                <FaCode className="text-xl text-white drop-shadow-lg" />
              </motion.div>
              <motion.div
                className="flex flex-col"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className={`text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg ${
                    scrolled
                      ? theme === "dark"
                        ? "neon-text-strong"
                        : "text-shadow-lg"
                      : "text-white neon-text-strong"
                  }`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  {t("hero.name")}
                </motion.span>
                <motion.div
                  className={`h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full ${
                    scrolled ? "opacity-80" : "opacity-60"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.href.slice(1)
                      ? scrolled
                        ? theme === "dark"
                          ? "text-blue-400 bg-blue-500 bg-opacity-20"
                          : "text-blue-600 bg-blue-100"
                        : "text-yellow-300 bg-white bg-opacity-20"
                      : scrolled
                      ? theme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      : "text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 rounded-full opacity-20 ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-blue-500 to-purple-500"
                          : "bg-gradient-to-r from-blue-400 to-purple-400"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle and Language Selector */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSelector />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-full glass ${
                scrolled
                  ? theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                  : "text-white"
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <div
                className={`px-2 pt-2 pb-6 space-y-2 rounded-2xl mt-4 backdrop-blur-xl ${
                  theme === "dark" ? "glass-dark" : "bg-white/90 shadow-lg"
                }`}
              >
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={mobileItemVariants}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        activeSection === item.href.slice(1)
                          ? theme === "dark"
                            ? "text-blue-400 bg-blue-500 bg-opacity-20"
                            : "text-blue-600 bg-blue-100"
                          : theme === "dark"
                          ? "text-white hover:text-blue-400 hover:bg-white hover:bg-opacity-10"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Social Links */}
                <motion.div
                  variants={mobileItemVariants}
                  className={`flex justify-center space-x-4 pt-4 border-t ${
                    theme === "dark"
                      ? "border-white border-opacity-20"
                      : "border-gray-200"
                  }`}
                >
                  {[
                    { href: "https://github.com/mdfardous98", icon: "🔗" },
                    {
                      href: "https://www.linkedin.com/in/mdfardous",
                      icon: "💼",
                    },
                    {
                      href: "https://www.facebook.com/tajwar.fardousx",
                      icon: "📘",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated Border */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-px ${
          theme === "dark"
            ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            : "bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        }`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.nav>
  );
};

export default AdvancedNavbar;
