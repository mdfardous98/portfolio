"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaHeart, FaGamepad } from "react-icons/fa";

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
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Journey & Passion
            </h3>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                I am a Mathematics graduate who is learning web development and
                changing my career into the IT sector. I chose this field
                because I enjoy working with technology and solving problems.
              </p>

              <p>
                I focus on frontend development using HTML, CSS, JavaScript, and
                React to build simple and user-friendly websites. My background
                in mathematics helps me think logically and work carefully.
              </p>

              <p>
                I am very motivated to learn, practice every day, and improve my
                skills by building real projects. I want to grow as a frontend
                developer and do quality work for any organization I join.
              </p>

              <p>
                Outside of programming, I enjoy exploring new technologies,
                reading about web development trends, and occasionally playing
                strategic games that challenge my problem-solving skills.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <FaGraduationCap className="text-4xl text-primary mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Academic Background
              </h4>
              <p className="text-gray-600">
                Mathematics graduate with strong analytical and logical thinking
                skills
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <FaCode className="text-4xl text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Development Focus
              </h4>
              <p className="text-gray-600">
                MERN stack development with emphasis on clean, responsive UI/UX
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <FaHeart className="text-4xl text-red-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                What I Love
              </h4>
              <p className="text-gray-600">
                Problem-solving, learning new technologies, and building
                user-friendly applications
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <FaGamepad className="text-4xl text-purple-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Interests
              </h4>
              <p className="text-gray-600">
                Strategic games, tech trends, and continuous learning through
                practice
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            My Key Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Problem-Solving Mindset
              </h4>
              <p className="text-gray-600 text-sm">
                Break complex problems into smaller parts and work step by step
                to find solutions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Learner</h4>
              <p className="text-gray-600 text-sm">
                Quick to adapt to new technologies and implement solutions
                efficiently
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Logical Thinking
              </h4>
              <p className="text-gray-600 text-sm">
                Mathematical background enables structured approach to
                development challenges
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
