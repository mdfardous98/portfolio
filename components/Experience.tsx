"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaProjectDiagram,
  FaRocket,
  FaLightbulb,
  FaCog,
  FaChartLine,
  FaUsers,
  FaAward,
  FaGraduationCap,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaMobile,
} from "react-icons/fa";
import Gaming3DCard from "./Gaming3DCard";
import GamingButton from "./GamingButton";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const experienceData = {
    overview: {
      title: "Web Developer & Problem Solver",
      company: "Self-Employed · Project-Based Learning",
      duration: "Apr 2024 - Present · 10+ months",
      location: "Dhaka, Bangladesh · Remote",
      type: "Full-time Learning & Development",
      description:
        "Transitioning from mathematics to web development through intensive project-based learning. Building production-ready applications that demonstrate full-stack capabilities and modern web development practices.",
    },
    projects: [
      {
        name: "PawMart - Pet Adoption Platform",
        role: "Full-Stack Developer",
        duration: "3 months",
        description:
          "Comprehensive pet adoption platform with multi-role authentication, admin dashboard, and seamless user experience.",
        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "Express.js",
          "JWT",
          "Tailwind CSS",
        ],
        achievements: [
          "Implemented secure multi-role authentication system",
          "Built responsive admin dashboard with data visualization",
          "Integrated real-time notifications and messaging",
          "Deployed on Netlify with 99.9% uptime",
        ],
        impact: "Streamlined pet adoption process for 100+ potential adopters",
        color: "from-green-500 to-emerald-500",
      },
      {
        name: "Digital Life Lessons - Blog Platform",
        role: "MERN Stack Developer",
        duration: "2 months",
        description:
          "Modern blog platform with user authentication, CRUD operations, and interactive commenting system.",
        technologies: [
          "MERN Stack",
          "REST APIs",
          "JWT Authentication",
          "Firebase",
        ],
        achievements: [
          "Developed RESTful API with comprehensive CRUD operations",
          "Implemented user authentication and authorization",
          "Built interactive commenting and rating system",
          "Optimized database queries for better performance",
        ],
        impact:
          "Enabled content creators to publish and manage articles efficiently",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Care XYZ - Healthcare Platform",
        role: "Frontend Developer",
        duration: "1.5 months",
        description:
          "Healthcare management platform focusing on winter pet care with appointment booking system.",
        technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript ES6+"],
        achievements: [
          "Created responsive healthcare interface",
          "Implemented appointment booking system",
          "Built patient management dashboard",
          "Integrated payment gateway for consultations",
        ],
        impact: "Improved healthcare accessibility for pet owners",
        color: "from-purple-500 to-pink-500",
      },
    ],
    skills: [
      {
        category: "Frontend",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "HTML5/CSS3",
        ],
        level: 90,
        icon: FaLaptopCode,
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
        level: 85,
        icon: FaServer,
      },
      {
        category: "Database",
        skills: ["MongoDB", "Mongoose", "Database Design"],
        level: 80,
        icon: FaDatabase,
      },
      {
        category: "Tools",
        skills: ["Git", "Vercel", "Netlify", "VS Code", "Postman"],
        level: 88,
        icon: FaCog,
      },
      {
        category: "Soft Skills",
        skills: [
          "Problem Solving",
          "Team Work",
          "Communication",
          "Time Management",
        ],
        level: 92,
        icon: FaUsers,
      },
    ],
    achievements: [
      {
        title: "15+ Projects Completed",
        description:
          "Built diverse web applications from concept to deployment",
        icon: FaRocket,
      },
      {
        title: "3 Major Platforms",
        description: "Developed comprehensive full-stack applications",
        icon: FaProjectDiagram,
      },
      {
        title: "Modern Tech Stack",
        description: "Mastered MERN stack and modern development tools",
        icon: FaCode,
      },
      {
        title: "100% Self-Taught",
        description:
          "Learned through online courses, documentation, and practice",
        icon: FaGraduationCap,
      },
    ],
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FaBriefcase },
    { id: "projects", label: "Projects", icon: FaProjectDiagram },
    { id: "skills", label: "Skills", icon: FaCode },
    { id: "achievements", label: "Achievements", icon: FaAward },
  ];
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <span className="text-6xl">💼</span>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 neon-text">
            Professional Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My transformation from mathematics to web development through
            intensive project-based learning and practical application
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <tab.icon size={16} />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Based on Active Tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === "overview" && (
            <div className="max-w-5xl mx-auto">
              <Gaming3DCard
                glowColor="purple"
                intensity={1.8}
                className="p-8 md:p-12"
              >
                {/* Experience Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                  <motion.div
                    whileHover={{
                      rotateY: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-2xl shadow-lg"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <FaBriefcase className="text-5xl text-white" />
                  </motion.div>

                  <div className="text-center md:text-left flex-1">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-white mb-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {experienceData.overview.title}
                    </motion.h3>
                    <motion.h4
                      className="text-xl text-purple-300 font-semibold mb-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      {experienceData.overview.company}
                    </motion.h4>

                    <div className="flex flex-col sm:flex-row gap-4 text-gray-300 mb-4">
                      <motion.div
                        className="flex items-center justify-center md:justify-start gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaCalendarAlt className="text-purple-400" />
                        <span>{experienceData.overview.duration}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-center md:justify-start gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaMapMarkerAlt className="text-purple-400" />
                        <span>{experienceData.overview.location}</span>
                      </motion.div>
                    </div>

                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full border border-purple-400/30">
                      <span className="text-purple-300 font-semibold">
                        {experienceData.overview.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-400" />
                    Professional Summary
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {experienceData.overview.description}
                  </p>
                </motion.div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {experienceData.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-400/30"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                        className="mb-2"
                      >
                        <achievement.icon className="text-3xl text-purple-400 mx-auto" />
                      </motion.div>
                      <div className="text-white font-bold text-sm mb-1">
                        {achievement.title}
                      </div>
                      <div className="text-gray-300 text-xs">
                        {achievement.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Gaming3DCard>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-8">
              {experienceData.projects.map((project, index) => (
                <Gaming3DCard
                  key={project.name}
                  glowColor="blue"
                  intensity={1.5}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-4 mb-4">
                          <span
                            className={`
                            px-3 py-1 rounded-full text-sm font-semibold text-white
                            bg-gradient-to-r ${project.color}
                          `}
                          >
                            {project.role}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {project.duration}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <FaProjectDiagram className="text-3xl text-blue-400" />
                      </motion.div>
                    </div>

                    <p className="text-gray-300 text-lg mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">
                        Key Achievements:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <FaChartLine className="text-green-400" />
                        Impact
                      </h4>
                      <p className="text-gray-300">{project.impact}</p>
                    </div>
                  </motion.div>
                </Gaming3DCard>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experienceData.skills.map((skillGroup, index) => (
                <Gaming3DCard
                  key={skillGroup.category}
                  glowColor="green"
                  intensity={1.2}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
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
                      >
                        <skillGroup.icon className="text-3xl text-green-400" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">
                        {skillGroup.category}
                      </h3>
                    </div>

                    {/* Skill Level */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Proficiency</span>
                        <span className="text-green-400 font-bold">
                          {skillGroup.level}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skillGroup.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-2">
                      {skillGroup.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center gap-2 p-2 bg-white/5 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-gray-300">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </Gaming3DCard>
              ))}
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experienceData.achievements.map((achievement, index) => (
                <Gaming3DCard
                  key={achievement.title}
                  glowColor="yellow"
                  intensity={1.5}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 text-center"
                  >
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
                      className="mb-6"
                    >
                      <achievement.icon className="text-5xl text-yellow-400 mx-auto" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                </Gaming3DCard>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Gaming3DCard glowColor="purple" intensity={2} className="p-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🚀
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready for New Challenges
            </h3>
            <p className="text-lg text-gray-300 mb-6 opacity-90 max-w-2xl mx-auto">
              My journey from mathematics to web development has equipped me
              with strong problem-solving skills and a passion for creating
              innovative solutions. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GamingButton
                href="#projects"
                variant="primary"
                size="lg"
                icon={<FaProjectDiagram />}
                glitch={true}
              >
                View My Work
              </GamingButton>
              <GamingButton
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<FaRocket />}
              >
                Let's Connect
              </GamingButton>
            </div>
          </Gaming3DCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
