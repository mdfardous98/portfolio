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
import CurrentDateTime from "./CurrentDateTime";
import GamingButton from "./GamingButton";
import Gaming3DCard from "./Gaming3DCard";
import GamingHUD from "./GamingHUD";
import Floating3DElements from "./Floating3DElements";
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
      style={{ perspective: "1000px" }}
    >
      <ParticleBackground />
      <GamingHUD />
      <Floating3DElements />

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
              <GamingButton
                onClick={handleResumeDownload}
                variant="primary"
                size="lg"
                icon={<FaDownload />}
                glitch={true}
              >
                {t("hero.downloadResume")}
              </GamingButton>

              <GamingButton
                href="#projects"
                variant="secondary"
                size="lg"
                icon={<FaRocket />}
              >
                {t("hero.viewWork")}
              </GamingButton>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-6 mb-8">
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

            {/* Current Date & Time */}
            <motion.div variants={itemVariants}>
              <CurrentDateTime />
            </motion.div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end relative"
          >
            <Gaming3DCard glowColor="cyan" intensity={1.5}>
              <div className="relative">
                {/* Animated Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white border-opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
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
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    width: "110%",
                    height: "110%",
                    top: "-5%",
                    left: "-5%",
                  }}
                />

                {/* Enhanced Profile Image with Advanced 3D Effects */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden relative z-10"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={{
                    rotateY: 15,
                    rotateX: -5,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Multiple Border Layers for Depth */}
                  <div className="absolute inset-0 rounded-full border-8 border-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-2xl"></div>
                  <div className="absolute inset-2 rounded-full border-4 border-white/30 shadow-inner"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-cyan-300/50"></div>

                  {/* Image Container with Enhanced Effects */}
                  <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                    <Image
                      src="/profile-photo.jpg"
                      alt={t("hero.name")}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:rotate-2"
                    />

                    {/* Enhanced Holographic Overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(6, 182, 212, 0.2), transparent, rgba(147, 51, 234, 0.2))",
                          "linear-gradient(90deg, rgba(147, 51, 234, 0.2), transparent, rgba(6, 182, 212, 0.2))",
                          "linear-gradient(135deg, rgba(6, 182, 212, 0.2), transparent, rgba(147, 51, 234, 0.2))",
                          "linear-gradient(180deg, rgba(236, 72, 153, 0.2), transparent, rgba(59, 130, 246, 0.2))",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    {/* Scanning Line Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-8"
                      animate={{
                        y: [-32, 400, -32],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Corner Brackets */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>

                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Outer Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 50px rgba(6, 182, 212, 0.3)",
                        "0 0 80px rgba(147, 51, 234, 0.4)",
                        "0 0 50px rgba(6, 182, 212, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Enhanced Floating Tech Icons */}
                <motion.div
                  className="absolute -top-8 -right-8 glass p-4 rounded-lg border border-cyan-500/50"
                  animate={{
                    y: [-10, 10, -10],
                    rotateY: [0, 180, 360],
                    rotateX: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 180,
                  }}
                >
                  <span className="text-3xl">⚛️</span>
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 glass p-4 rounded-lg border border-purple-500/50"
                  animate={{
                    y: [10, -10, 10],
                    rotateY: [0, -180, -360],
                    rotateZ: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: -180,
                  }}
                >
                  <span className="text-3xl">🚀</span>
                  <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-12 glass p-3 rounded-lg border border-yellow-500/50"
                  animate={{
                    x: [-5, 5, -5],
                    rotateY: [0, 360],
                    rotateX: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{
                    scale: 1.3,
                    rotateZ: 45,
                  }}
                >
                  <FaCode className="text-2xl text-yellow-400" />
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-lg blur-md" />
                </motion.div>

                {/* Enhanced Glowing Orbs */}
                <motion.div
                  className="absolute top-10 left-10 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                    rotateZ: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 right-20 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 1, 0.5],
                    rotateZ: [0, -360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{
                    boxShadow: "0 0 15px rgba(236, 72, 153, 0.6)",
                  }}
                />
              </div>
            </Gaming3DCard>
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
