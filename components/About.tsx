"use client";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaGamepad,
  FaRocket,
} from "react-icons/fa";
import Gaming3DCard from "./Gaming3DCard";
import GamingButton from "./GamingButton";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Gaming3DCard glowColor="blue" intensity={1.5} className="p-8">
              <motion.h3
                className="text-3xl font-semibold text-white mb-6 flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <FaRocket className="text-blue-400" />
                </motion.div>
                My Journey & Passion
              </motion.h3>

              <div className="space-y-6">
                {/* Journey Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                  <div className="space-y-6">
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div className="flex-1 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <h4 className="text-white font-semibold mb-2">
                          🎓 Mathematics Foundation
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Started with a strong mathematical background that
                          developed my logical thinking and problem-solving
                          abilities - essential skills for programming.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div className="flex-1 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <h4 className="text-white font-semibold mb-2">
                          💡 The Spark
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Discovered the world of web development and was
                          fascinated by the ability to create interactive,
                          user-friendly applications that solve real-world
                          problems.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div className="flex-1 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <h4 className="text-white font-semibold mb-2">
                          🚀 Deep Dive
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Immersed myself in learning modern web technologies,
                          focusing on the MERN stack and building practical
                          projects to solidify my understanding.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <div className="flex-1 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <h4 className="text-white font-semibold mb-2">
                          🎯 Current Focus
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Now building production-ready applications,
                          continuously learning new technologies, and seeking
                          opportunities to contribute to meaningful projects.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Passion Points */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/30"
                >
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ❤️
                    </motion.div>
                    What Drives Me
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: "🧩", text: "Solving complex problems" },
                      { icon: "🎨", text: "Creating beautiful UIs" },
                      { icon: "⚡", text: "Learning new technologies" },
                      { icon: "🤝", text: "Helping others through code" },
                    ].map((passion, index) => (
                      <motion.div
                        key={passion.text}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 p-2 bg-white/5 rounded-lg"
                      >
                        <span className="text-lg">{passion.icon}</span>
                        <span className="text-gray-300 text-sm">
                          {passion.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center pt-6"
                >
                  <GamingButton
                    href="#projects"
                    variant="primary"
                    size="md"
                    icon={<FaCode />}
                    glitch={true}
                  >
                    See My Work
                  </GamingButton>
                </motion.div>
              </div>
            </Gaming3DCard>
          </motion.div>

          {/* Right Content - 3D Gaming Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <Gaming3DCard glowColor="blue" intensity={0.8}>
              <motion.div
                whileHover={{ rotateY: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="mb-4"
                >
                  <FaGraduationCap className="text-4xl text-blue-400" />
                </motion.div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Academic Background
                </h4>
                <p className="text-gray-300">
                  Mathematics graduate with strong analytical and logical
                  thinking skills
                </p>
              </motion.div>
            </Gaming3DCard>

            <Gaming3DCard glowColor="green" intensity={0.8}>
              <motion.div
                whileHover={{ rotateY: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{
                    rotateZ: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-4"
                >
                  <FaCode className="text-4xl text-green-400" />
                </motion.div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Development Focus
                </h4>
                <p className="text-gray-300">
                  MERN stack development with emphasis on clean, responsive
                  UI/UX
                </p>
              </motion.div>
            </Gaming3DCard>

            <Gaming3DCard glowColor="red" intensity={0.8}>
              <motion.div
                whileHover={{ rotateX: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotateZ: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-4"
                >
                  <FaHeart className="text-4xl text-red-400" />
                </motion.div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  What I Love
                </h4>
                <p className="text-gray-300">
                  Problem-solving, learning new technologies, and building
                  user-friendly applications
                </p>
              </motion.div>
            </Gaming3DCard>

            <Gaming3DCard glowColor="purple" intensity={0.8}>
              <motion.div
                whileHover={{ rotateX: -10, rotateY: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{
                    rotateX: [0, 15, -15, 0],
                    rotateY: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-4"
                >
                  <FaGamepad className="text-4xl text-purple-400" />
                </motion.div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Interests
                </h4>
                <p className="text-gray-300">
                  Strategic games, tech trends, and continuous learning through
                  practice
                </p>
              </motion.div>
            </Gaming3DCard>
          </motion.div>
        </div>

        {/* Key Strengths - Enhanced Gaming Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Gaming3DCard glowColor="cyan" intensity={1.2} className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              My Key Strengths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="text-center"
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  z: 50,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  animate={{
                    rotateY: [0, 360],
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(6, 182, 212, 0.7)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <span className="text-2xl">🧠</span>
                </motion.div>
                <h4 className="font-semibold text-white mb-2">
                  Problem-Solving Mindset
                </h4>
                <p className="text-gray-300 text-sm">
                  Break complex problems into smaller parts and work step by
                  step to find solutions
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{
                  scale: 1.1,
                  rotateY: -10,
                  z: 50,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  animate={{
                    rotateX: [0, 360],
                    boxShadow: [
                      "0 0 20px rgba(34, 197, 94, 0.5)",
                      "0 0 30px rgba(16, 185, 129, 0.7)",
                      "0 0 20px rgba(34, 197, 94, 0.5)",
                    ],
                  }}
                  transition={{
                    rotateX: { duration: 3, repeat: Infinity, ease: "linear" },
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    },
                  }}
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
                <h4 className="font-semibold text-white mb-2">Fast Learner</h4>
                <p className="text-gray-300 text-sm">
                  Quick to adapt to new technologies and implement solutions
                  efficiently
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{
                  scale: 1.1,
                  rotateX: 10,
                  z: 50,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  animate={{
                    rotateZ: [0, 360],
                    boxShadow: [
                      "0 0 20px rgba(147, 51, 234, 0.5)",
                      "0 0 30px rgba(236, 72, 153, 0.7)",
                      "0 0 20px rgba(147, 51, 234, 0.5)",
                    ],
                  }}
                  transition={{
                    rotateZ: { duration: 5, repeat: Infinity, ease: "linear" },
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  <span className="text-2xl">🎯</span>
                </motion.div>
                <h4 className="font-semibold text-white mb-2">
                  Logical Thinking
                </h4>
                <p className="text-gray-300 text-sm">
                  Mathematical background enables structured approach to
                  development challenges
                </p>
              </motion.div>
            </div>
          </Gaming3DCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
