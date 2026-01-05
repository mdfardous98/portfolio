"use client";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaMobile,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const AdvancedSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: t("skills.frontend"),
      icon: <FaCode className="text-3xl" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: t("skills.react"),
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: t("skills.javascript"),
          icon: <SiJavascript />,
          color: "#F7DF1E",
        },
        {
          name: t("skills.nextjs"),
          icon: <SiNextdotjs />,
          color: "#000000",
        },
        {
          name: t("skills.typescript"),
          icon: <SiTypescript />,
          color: "#3178C6",
        },
        {
          name: t("skills.tailwind"),
          icon: <SiTailwindcss />,
          color: "#06B6D4",
        },
        {
          name: t("skills.responsive"),
          icon: <FaMobile />,
          color: "#FF6B6B",
        },
      ],
    },
    {
      title: t("skills.backend"),
      icon: <FaDatabase className="text-3xl" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          name: t("skills.nodejs"),
          icon: <FaNodeJs />,
          color: "#339933",
        },
        {
          name: t("skills.express"),
          icon: <SiExpress />,
          color: "#000000",
        },
        {
          name: t("skills.mongodb"),
          icon: <SiMongodb />,
          color: "#47A248",
        },
        {
          name: t("skills.restapi"),
          icon: <FaCode />,
          color: "#FF6B35",
        },
        {
          name: t("skills.firebase"),
          icon: <FaDatabase />,
          color: "#FFCA28",
        },
      ],
    },
    {
      title: t("skills.tools"),
      icon: <FaGitAlt className="text-3xl" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: t("skills.git"),
          icon: <FaGitAlt />,
          color: "#F05032",
        },
        {
          name: t("skills.vscode"),
          icon: <FaCode />,
          color: "#007ACC",
        },
        {
          name: t("skills.npm"),
          icon: <FaNodeJs />,
          color: "#CB3837",
        },
        {
          name: t("skills.vercel"),
          icon: <FaCode />,
          color: "#000000",
        },
        {
          name: t("skills.mern"),
          icon: <FaReact />,
          color: "#61DAFB",
        },
      ],
    },
    {
      title: t("skills.soft"),
      icon: <FaCode className="text-3xl" />,
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: t("skills.problemSolvingSkill"),
          icon: <FaCode />,
          color: "#FF6B6B",
        },
        {
          name: t("skills.analytical"),
          icon: <FaCode />,
          color: "#4ECDC4",
        },
        {
          name: t("skills.logical"),
          icon: <FaCode />,
          color: "#45B7D1",
        },
        {
          name: t("skills.teamwork"),
          icon: <FaCode />,
          color: "#96CEB4",
        },
        {
          name: t("skills.communication"),
          icon: <FaCode />,
          color: "#FFEAA7",
        },
        {
          name: t("skills.learning"),
          icon: <FaCode />,
          color: "#DDA0DD",
        },
      ],
    },
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const skillVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="skills"
      className={`py-20 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 left-0 w-full h-full ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"
              : "bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20"
          } animate-pulse`}
        ></div>
        <motion.div
          className={`absolute top-20 left-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-300"
          }`}
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
          className={`absolute bottom-20 right-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-300"
          }`}
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🚀</span>
          </motion.div>

          <h2
            className={`text-4xl md:text-6xl font-black mb-6 ${
              theme === "dark" ? "text-white neon-text" : "text-gray-900"
            }`}
          >
            {t("skills.title")}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 5,
              }}
              className={`p-8 rounded-3xl shadow-2xl transition-all duration-500 group card-hover ${
                theme === "dark"
                  ? "glass hover:shadow-purple-500/25"
                  : "bg-white/80 backdrop-blur-sm hover:shadow-xl"
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                >
                  {category.icon}
                </motion.div>
                <h3
                  className={`text-2xl font-bold transition-all duration-300 ${
                    theme === "dark"
                      ? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400"
                      : "text-gray-900 group-hover:text-blue-600"
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="group/skill"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-xl"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span
                        className={`font-medium transition-colors ${
                          theme === "dark"
                            ? "text-gray-200 group-hover/skill:text-white"
                            : "text-gray-700 group-hover/skill:text-gray-900"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3
            className={`text-3xl font-bold mb-12 text-center ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("skills.technologies")}
          </h3>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {[
              { name: "React", icon: <FaReact />, color: "#61DAFB" },
              { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
              { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
              { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
              {
                name: "Next.js",
                icon: <SiNextdotjs />,
                color: theme === "dark" ? "#FFFFFF" : "#000000",
              },
              { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
              { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
              { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  y: -10,
                  rotateY: 15,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center group cursor-pointer card-hover ${
                  theme === "dark"
                    ? "glass"
                    : "bg-white/80 backdrop-blur-sm shadow-lg"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="text-4xl mb-3 mx-auto"
                  style={{ color: tech.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {tech.icon}
                </motion.div>
                <p
                  className={`text-sm font-medium transition-colors ${
                    theme === "dark"
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-gray-900"
                  }`}
                >
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div
            className={`p-8 rounded-3xl max-w-4xl mx-auto ${
              theme === "dark"
                ? "glass"
                : "bg-white/80 backdrop-blur-sm shadow-xl"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              🎯 {t("skills.philosophy")}
            </h3>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("skills.philosophyDesc")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedSkills;
