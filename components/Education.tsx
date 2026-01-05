"use client";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaMedal,
  FaBook,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";
import Gaming3DCard from "./Gaming3DCard";
import GamingButton from "./GamingButton";

const Education = () => {
  const activities = [
    {
      title: "Computer Lab Assistant",
      description: "Assisted with mathematical software usage (MATLAB, etc.)",
      icon: "💻",
      category: "Technical",
      impact: "High",
    },
    {
      title: "Academic Seminar Participant",
      description:
        "Regular attendee at department seminars and academic discussions",
      icon: "🎓",
      category: "Academic",
      impact: "Medium",
    },
    {
      title: "Peer Study Group Coordinator",
      description:
        "Organized group study sessions for complex mathematical topics",
      icon: "👥",
      category: "Leadership",
      impact: "High",
    },
    {
      title: "Mathematical Concept Tutorials",
      description: "Explained complex topics to junior students and peers",
      icon: "📚",
      category: "Teaching",
      impact: "High",
    },
    {
      title: "Resource Sharing Initiative",
      description: "Helped classmates access study materials and resources",
      icon: "🤝",
      category: "Community",
      impact: "Medium",
    },
    {
      title: "Self-Study Mathematics Group",
      description: "Regular collaborative problem-solving with peers",
      icon: "🧮",
      category: "Collaboration",
      impact: "Medium",
    },
  ];

  const skills = [
    {
      name: "Logical Reasoning",
      level: 95,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Problem Solving",
      level: 90,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Analytical Thinking",
      level: 88,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Pattern Recognition",
      level: 85,
      color: "from-yellow-500 to-orange-500",
    },
    { name: "Critical Analysis", level: 87, color: "from-red-500 to-pink-500" },
    {
      name: "Mathematical Modeling",
      level: 82,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Abstract Thinking",
      level: 89,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Systematic Approach",
      level: 92,
      color: "from-emerald-500 to-green-500",
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-green-400";
      case "Medium":
        return "text-yellow-400";
      case "Low":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden"
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
              <span className="text-6xl">🎓</span>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 neon-text">
            Educational Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My academic foundation that shaped my analytical thinking and
            problem-solving approach
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Gaming3DCard
              glowColor="blue"
              intensity={1.8}
              className="p-8 md:p-12"
            >
              {/* University Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <motion.div
                  whileHover={{
                    rotateY: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-lg"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <FaGraduationCap className="text-5xl text-white" />
                </motion.div>

                <div className="text-center md:text-left flex-1">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    Bachelor of Science (Honours) in Mathematics
                  </motion.h3>
                  <motion.h4
                    className="text-xl text-blue-300 font-semibold mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    University of Dhaka
                  </motion.h4>
                  <p className="text-lg text-gray-300 mb-4">
                    Govt. Shahid Suhrawardy College (Affiliated Seven College)
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
                    <motion.div
                      className="flex items-center justify-center md:justify-start gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaCalendarAlt className="text-blue-400" />
                      <span>Dec 2016 - Nov 2020</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center justify-center md:justify-start gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaMapMarkerAlt className="text-blue-400" />
                      <span>Dhaka, Bangladesh 🇧🇩</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Academic Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaBrain className="text-purple-400" />
                  Academic Foundation
                </h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  My mathematics education provided a rigorous foundation in
                  logical reasoning, problem-solving, and analytical
                  thinking—skills that directly translate to software
                  development and algorithmic design. The program emphasized
                  critical thinking, pattern recognition, and systematic
                  approach to complex problems.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30"
                >
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-blue-300 text-sm">Years</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="text-center p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/30"
                >
                  <div className="text-2xl font-bold text-white">BSc</div>
                  <div className="text-green-300 text-sm">Honours</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30"
                >
                  <div className="text-2xl font-bold text-white">Math</div>
                  <div className="text-purple-300 text-sm">Major</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="text-center p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-400/30"
                >
                  <div className="text-2xl font-bold text-white">DU</div>
                  <div className="text-yellow-300 text-sm">University</div>
                </motion.div>
              </div>
            </Gaming3DCard>
          </motion.div>

          {/* Activities and Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Activities */}
            <Gaming3DCard glowColor="green" intensity={1.5}>
              <h4 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <FaUsers className="text-green-400" />
                </motion.div>
                Activities & Contributions
              </h4>

              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      rotateY: 5,
                      z: 10,
                    }}
                    className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex items-start gap-3">
                      <motion.span
                        className="text-2xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        {activity.icon}
                      </motion.span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-semibold text-white">
                            {activity.title}
                          </h5>
                          <span
                            className={`text-xs font-semibold ${getImpactColor(
                              activity.impact
                            )}`}
                          >
                            {activity.impact}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">
                          {activity.description}
                        </p>
                        <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                          {activity.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Gaming3DCard>

            {/* Skills */}
            <Gaming3DCard glowColor="purple" intensity={1.5}>
              <h4 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FaChartLine className="text-purple-400" />
                </motion.div>
                Skills Developed
              </h4>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Gaming3DCard>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Gaming3DCard glowColor="cyan" intensity={2} className="p-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🧠
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4 neon-text">
                Mathematical Mind Meets Code
              </h3>
              <p className="text-lg text-gray-300 mb-6 opacity-90 max-w-2xl mx-auto">
                My mathematical background provides the analytical foundation
                for tackling complex programming challenges and building
                efficient, logical solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GamingButton
                  href="#projects"
                  variant="primary"
                  size="lg"
                  icon={<FaBook />}
                  glitch={true}
                >
                  See My Projects
                </GamingButton>
                <GamingButton
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  icon={<FaMedal />}
                >
                  Let's Connect
                </GamingButton>
              </div>
            </Gaming3DCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
