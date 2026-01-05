"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";
import TypingEffect from "./TypingEffect";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const AdvancedHero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { t } = useLanguage();
  const { theme } = useTheme();

  const titles = [
    t("hero.roles.webDeveloper"),
    t("hero.roles.mernDeveloper"),
    t("hero.roles.frontendSpecialist"),
    t("hero.roles.problemSolver"),
    t("hero.roles.mathGraduate"),
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "MD_Fardous_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center hero-gradient relative overflow-hidden"
    >
      <ParticleBackground />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
        <motion.div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-white">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 glass"
              >
                {t("hero.welcome")}
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl font-black mb-6 leading-tight"
            >
              {t("hero.intro")}{" "}
              <span className="neon-text text-yellow-300">
                {t("hero.name")}
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-4xl font-bold mb-8 h-16 flex items-center"
            >
              <span className="text-blue-200">{t("hero.role.prefix")} </span>
              <TypingEffect
                texts={titles}
                className="text-white ml-2 neon-text"
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl"
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 neon-border"
              >
                <FaDownload className="text-xl" />
                {t("hero.downloadResume")}
              </motion.button>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <FaRocket className="text-xl" />
                {t("hero.viewWork")}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-6">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/mdfardous98",
                  color: "hover:text-gray-300",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/mdfardous",
                  color: "hover:text-blue-400",
                },
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/tajwar.fardousx",
                  color: "hover:text-blue-500",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`glass p-4 rounded-full transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-white border-opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  width: "120%",
                  height: "120%",
                  top: "-10%",
                  left: "-10%",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400 border-opacity-30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                  width: "110%",
                  height: "110%",
                  top: "-5%",
                  left: "-5%",
                }}
              />

              {/* Main Profile Image */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10"
              >
                <Image
                  src="/profile-photo.jpg"
                  alt={t("hero.name")}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent opacity-30"></div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-8 -right-8 glass p-4 rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-3xl">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 glass p-4 rounded-full"
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-3xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 glass p-3 rounded-full"
                animate={{
                  x: [-5, 5, -5],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <FaCode className="text-2xl text-blue-400" />
              </motion.div>

              {/* Glowing Orbs */}
              <motion.div
                className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white"
          >
            <span className="text-sm mb-2 opacity-80">
              {t("hero.scrollDown")}
            </span>
            <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedHero;
