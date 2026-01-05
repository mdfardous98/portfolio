"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaTrophy,
  FaCode,
  FaMedal,
  FaFire,
  FaChartLine,
  FaCalendarAlt,
  FaClock,
  FaStar,
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
} from "react-icons/fa";
import Gaming3DCard from "./Gaming3DCard";
import GamingButton from "./GamingButton";

const ProblemSolving = () => {
  const [activeCategory, setActiveCategory] = useState("overview");

  // This will be populated with real data later
  const achievements = {
    overview: {
      totalProblems: 0,
      contestsParticipated: 0,
      hackathonsWon: 0,
      currentStreak: 0,
      bestRank: "Coming Soon",
      totalPoints: 0,
    },
    platforms: [
      {
        name: "LeetCode",
        username: "mdfardous",
        profileUrl: "#",
        stats: {
          solved: 0,
          easy: 0,
          medium: 0,
          hard: 0,
          rank: "Coming Soon",
          streak: 0,
        },
        isActive: false,
      },
      {
        name: "HackerRank",
        username: "mdfardous",
        profileUrl: "#",
        stats: {
          solved: 0,
          stars: 0,
          badges: 0,
          rank: "Coming Soon",
          points: 0,
        },
        isActive: false,
      },
      {
        name: "CodeChef",
        username: "mdfardous",
        profileUrl: "#",
        stats: {
          solved: 0,
          rating: 0,
          stars: 0,
          rank: "Coming Soon",
          contests: 0,
        },
        isActive: false,
      },
      {
        name: "Codeforces",
        username: "mdfardous",
        profileUrl: "#",
        stats: {
          solved: 0,
          rating: 0,
          maxRating: 0,
          rank: "Coming Soon",
          contests: 0,
        },
        isActive: false,
      },
    ],
    hackathons: [
      {
        name: "Future Hackathon",
        date: "2025-03-15",
        position: "TBD",
        project: "AI-Powered Solution",
        description:
          "Planning to participate in upcoming hackathons to showcase problem-solving skills and innovative thinking.",
        technologies: ["React", "Node.js", "AI/ML"],
        status: "upcoming",
        teamSize: 4,
        prize: "TBD",
      },
    ],
    recentSolutions: [
      {
        title: "Getting Started",
        platform: "LeetCode",
        difficulty: "Easy",
        date: "Coming Soon",
        language: "JavaScript",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        description: "Starting my competitive programming journey soon!",
        tags: ["Array", "Two Pointers"],
      },
    ],
  };

  const categories = [
    { id: "overview", label: "Overview", icon: FaChartLine },
    { id: "platforms", label: "Platforms", icon: FaCode },
    { id: "hackathons", label: "Hackathons", icon: FaTrophy },
    { id: "solutions", label: "Solutions", icon: FaFire },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "text-green-400";
      case "medium":
        return "text-yellow-400";
      case "hard":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "won":
        return "from-yellow-500 to-orange-500";
      case "participated":
        return "from-blue-500 to-cyan-500";
      case "upcoming":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section
      id="problem-solving"
      className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
              <span className="text-6xl">🧠</span>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 neon-text">
            Problem Solving
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Track my competitive programming journey, hackathon achievements,
            and algorithmic problem-solving skills
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <category.icon size={16} />
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Based on Active Category */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeCategory === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <Gaming3DCard glowColor="green" intensity={1.2}>
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaCode className="text-4xl text-green-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievements.overview.totalProblems}
                  </h3>
                  <p className="text-gray-300">Problems Solved</p>
                </div>
              </Gaming3DCard>

              <Gaming3DCard glowColor="blue" intensity={1.2}>
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaTrophy className="text-4xl text-blue-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievements.overview.hackathonsWon}
                  </h3>
                  <p className="text-gray-300">Hackathons Won</p>
                </div>
              </Gaming3DCard>

              <Gaming3DCard glowColor="purple" intensity={1.2}>
                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FaFire className="text-4xl text-purple-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievements.overview.currentStreak}
                  </h3>
                  <p className="text-gray-300">Current Streak</p>
                </div>
              </Gaming3DCard>

              {/* Coming Soon Message */}
              <div className="md:col-span-2 lg:col-span-3">
                <Gaming3DCard
                  glowColor="cyan"
                  intensity={1.5}
                  className="text-center p-8"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    🚀
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4 neon-text">
                    Journey Starting Soon!
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    I'm preparing to dive deep into competitive programming and
                    hackathons. This section will be updated with real
                    achievements, contest results, and problem-solving
                    statistics.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-gray-400">
                    <FaLock className="text-2xl" />
                    <span>Content will be unlocked as I progress</span>
                  </div>
                </Gaming3DCard>
              </div>
            </div>
          )}

          {activeCategory === "platforms" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.platforms.map((platform, index) => (
                <Gaming3DCard
                  key={platform.name}
                  glowColor="blue"
                  intensity={1.2}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {platform.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      {platform.isActive ? (
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      ) : (
                        <div className="w-3 h-3 bg-gray-500 rounded-full" />
                      )}
                      <span className="text-sm text-gray-400">
                        {platform.isActive ? "Active" : "Coming Soon"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Username:</span>
                      <span className="text-white">@{platform.username}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Problems Solved:</span>
                      <span className="text-cyan-400 font-bold">
                        {platform.stats.solved || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Current Rank:</span>
                      <span className="text-white">{platform.stats.rank}</span>
                    </div>
                  </div>

                  <GamingButton
                    href={platform.profileUrl}
                    variant="secondary"
                    size="sm"
                    icon={<FaExternalLinkAlt />}
                    className="w-full"
                  >
                    View Profile
                  </GamingButton>
                </Gaming3DCard>
              ))}
            </div>
          )}

          {activeCategory === "hackathons" && (
            <div className="space-y-6">
              {achievements.hackathons.map((hackathon, index) => (
                <Gaming3DCard
                  key={hackathon.name}
                  glowColor="yellow"
                  intensity={1.2}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {hackathon.name}
                      </h3>
                      <div className="flex items-center gap-4 mb-2">
                        <span
                          className={`
                          px-3 py-1 rounded-full text-sm font-semibold text-white
                          bg-gradient-to-r ${getStatusColor(hackathon.status)}
                        `}
                        >
                          {hackathon.status.charAt(0).toUpperCase() +
                            hackathon.status.slice(1)}
                        </span>
                        <span className="text-gray-400 flex items-center gap-1">
                          <FaCalendarAlt size={12} />
                          {new Date(hackathon.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <FaTrophy className="text-3xl text-yellow-400" />
                    </motion.div>
                  </div>

                  <p className="text-gray-300 mb-4">{hackathon.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-white font-bold">
                        {hackathon.position}
                      </div>
                      <div className="text-gray-400 text-sm">Position</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">
                        {hackathon.teamSize}
                      </div>
                      <div className="text-gray-400 text-sm">Team Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">
                        {hackathon.prize}
                      </div>
                      <div className="text-gray-400 text-sm">Prize</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">
                        {hackathon.project}
                      </div>
                      <div className="text-gray-400 text-sm">Project</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Gaming3DCard>
              ))}
            </div>
          )}

          {activeCategory === "solutions" && (
            <div className="space-y-6">
              {achievements.recentSolutions.map((solution, index) => (
                <Gaming3DCard
                  key={solution.title}
                  glowColor="green"
                  intensity={1.2}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {solution.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-gray-400">
                          {solution.platform}
                        </span>
                        <span
                          className={`font-semibold ${getDifficultyColor(
                            solution.difficulty
                          )}`}
                        >
                          {solution.difficulty}
                        </span>
                        <span className="text-gray-400">
                          {solution.language}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaCode className="text-2xl text-green-400" />
                    </motion.div>
                  </div>

                  <p className="text-gray-300 mb-4">{solution.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-gray-400">Time Complexity:</span>
                      <span className="text-cyan-400 ml-2 font-mono">
                        {solution.timeComplexity}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Space Complexity:</span>
                      <span className="text-cyan-400 ml-2 font-mono">
                        {solution.spaceComplexity}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-6xl mb-4"
            >
              🎯
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4 neon-text">
              Follow My Journey
            </h3>
            <p className="text-lg text-gray-300 mb-6 opacity-90 max-w-2xl mx-auto">
              Stay tuned as I embark on this competitive programming adventure.
              I'll be updating this section with real achievements, contest
              results, and problem-solving insights!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GamingButton
                href="https://github.com/mdfardous98"
                variant="primary"
                size="lg"
                icon={<FaGithub />}
                glitch={true}
              >
                Follow on GitHub
              </GamingButton>
              <GamingButton
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<FaStar />}
              >
                Get Notified
              </GamingButton>
            </div>
          </Gaming3DCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolving;
