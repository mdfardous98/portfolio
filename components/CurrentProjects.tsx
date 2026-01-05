"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCode,
  FaRocket,
  FaClock,
  FaGithub,
  FaExternalLinkAlt,
  FaFire,
  FaLightbulb,
  FaCog,
  FaChartLine,
} from "react-icons/fa";
import Gaming3DCard from "./Gaming3DCard";
import GamingButton from "./GamingButton";

const CurrentProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const currentProjects = [
    {
      id: 1,
      name: "AI-Powered Portfolio Analytics",
      status: "In Development",
      progress: 75,
      description:
        "Building an intelligent analytics dashboard that tracks portfolio performance, visitor engagement, and provides AI-driven insights for optimization.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "AI/ML APIs",
        "Chart.js",
        "Prisma",
      ],
      startDate: "2024-12-01",
      expectedCompletion: "2025-02-15",
      features: [
        "Real-time visitor analytics",
        "AI-powered performance insights",
        "Interactive data visualizations",
        "Automated reporting system",
      ],
      challenges: [
        "Implementing real-time data processing",
        "Optimizing AI model integration",
        "Creating responsive chart components",
      ],
      githubUrl: "https://github.com/mdfardous98/portfolio-analytics",
      liveUrl: "#",
      priority: "High",
      category: "Full Stack",
    },
    {
      id: 2,
      name: "Smart Task Management System",
      status: "Planning",
      progress: 25,
      description:
        "Developing a collaborative task management platform with AI-powered task prioritization, team collaboration features, and advanced project tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "OpenAI API"],
      startDate: "2025-01-15",
      expectedCompletion: "2025-04-30",
      features: [
        "AI task prioritization",
        "Real-time collaboration",
        "Advanced project analytics",
        "Mobile-responsive design",
      ],
      challenges: [
        "Designing scalable architecture",
        "Implementing real-time features",
        "AI integration for task management",
      ],
      githubUrl: "https://github.com/mdfardous98/smart-task-manager",
      liveUrl: "#",
      priority: "Medium",
      category: "Full Stack",
    },
    {
      id: 3,
      name: "3D Interactive Portfolio",
      status: "Concept",
      progress: 10,
      description:
        "Creating an immersive 3D portfolio experience using Three.js with interactive elements, particle systems, and gaming-inspired UI components.",
      technologies: [
        "Three.js",
        "React Three Fiber",
        "GSAP",
        "WebGL",
        "Blender",
      ],
      startDate: "2025-02-01",
      expectedCompletion: "2025-05-15",
      features: [
        "3D interactive environments",
        "Particle effect systems",
        "VR/AR compatibility",
        "Gaming-style UI elements",
      ],
      challenges: [
        "Performance optimization for 3D",
        "Cross-browser compatibility",
        "Mobile device optimization",
      ],
      githubUrl: "https://github.com/mdfardous98/3d-portfolio",
      liveUrl: "#",
      priority: "Low",
      category: "Frontend",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "from-green-500 to-emerald-500";
      case "Planning":
        return "from-yellow-500 to-orange-500";
      case "Concept":
        return "from-blue-500 to-cyan-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-400";
      case "Medium":
        return "text-yellow-400";
      case "Low":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section
      id="current-projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
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
              <span className="text-6xl">⚡</span>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 neon-text">
            Current Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore what I'm currently building and the exciting projects in my
            development pipeline
          </p>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            {currentProjects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${
                    activeProject === index
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {project.name.split(" ")[0]}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active Project Display */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Project Info */}
          <div className="lg:col-span-2">
            <Gaming3DCard glowColor="purple" intensity={1.5}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentProjects[activeProject].name}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`
                      px-3 py-1 rounded-full text-sm font-semibold text-white
                      bg-gradient-to-r ${getStatusColor(
                        currentProjects[activeProject].status
                      )}
                    `}
                    >
                      {currentProjects[activeProject].status}
                    </span>
                    <span
                      className={`text-sm font-semibold ${getPriorityColor(
                        currentProjects[activeProject].priority
                      )}`}
                    >
                      {currentProjects[activeProject].priority} Priority
                    </span>
                    <span className="text-sm text-gray-400">
                      {currentProjects[activeProject].category}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <FaCog className="text-3xl text-cyan-400" />
                </motion.div>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {currentProjects[activeProject].description}
              </p>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Progress</span>
                  <span className="text-cyan-400 font-bold">
                    {currentProjects[activeProject].progress}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${currentProjects[activeProject].progress}%`,
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FaCode className="text-cyan-400" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProjects[activeProject].technologies.map(
                    (tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <GamingButton
                  href={currentProjects[activeProject].githubUrl}
                  variant="secondary"
                  size="md"
                  icon={<FaGithub />}
                >
                  View Code
                </GamingButton>
                {currentProjects[activeProject].liveUrl !== "#" && (
                  <GamingButton
                    href={currentProjects[activeProject].liveUrl}
                    variant="primary"
                    size="md"
                    icon={<FaExternalLinkAlt />}
                  >
                    Live Demo
                  </GamingButton>
                )}
              </div>
            </Gaming3DCard>
          </div>

          {/* Project Details Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <Gaming3DCard glowColor="green" intensity={1.2}>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <FaClock className="text-green-400" />
                Timeline
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Started:</span>
                  <span className="text-white">
                    {new Date(
                      currentProjects[activeProject].startDate
                    ).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Expected:</span>
                  <span className="text-white">
                    {new Date(
                      currentProjects[activeProject].expectedCompletion
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Gaming3DCard>

            {/* Features */}
            <Gaming3DCard glowColor="blue" intensity={1.2}>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <FaLightbulb className="text-blue-400" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {currentProjects[activeProject].features.map(
                  (feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      {feature}
                    </motion.li>
                  )
                )}
              </ul>
            </Gaming3DCard>

            {/* Challenges */}
            <Gaming3DCard glowColor="red" intensity={1.2}>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <FaFire className="text-red-400" />
                Challenges
              </h4>
              <ul className="space-y-2">
                {currentProjects[activeProject].challenges.map(
                  (challenge, index) => (
                    <motion.li
                      key={challenge}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-red-400 rounded-full" />
                      {challenge}
                    </motion.li>
                  )
                )}
              </ul>
            </Gaming3DCard>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Gaming3DCard glowColor="cyan" intensity={2} className="p-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🚀
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4 neon-text">
              Want to Collaborate?
            </h3>
            <p className="text-lg text-gray-300 mb-6 opacity-90 max-w-2xl mx-auto">
              I'm always open to discussing new project ideas, collaborations,
              or if you'd like to contribute to any of these ongoing projects!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GamingButton
                href="#contact"
                variant="primary"
                size="lg"
                icon={<FaRocket />}
                glitch={true}
              >
                Let's Collaborate
              </GamingButton>
              <GamingButton
                href="https://github.com/mdfardous98"
                variant="secondary"
                size="lg"
                icon={<FaGithub />}
              >
                View All Projects
              </GamingButton>
            </div>
          </Gaming3DCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentProjects;
