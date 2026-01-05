"use client";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educational Background
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic foundation that shaped my analytical thinking and
            problem-solving approach
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8 md:p-12"
          >
            {/* University Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="bg-primary bg-opacity-10 p-4 rounded-full">
                <FaGraduationCap className="text-4xl text-primary" />
              </div>

              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Bachelor of Science (Honours) in Mathematics
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-4">
                  University of Dhaka
                </h4>
                <p className="text-lg text-gray-600 mb-4">
                  Govt. Shahid Suhrawardy College (Affiliated Seven College)
                </p>

                <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <FaCalendarAlt className="text-primary" />
                    <span>Dec 2016 - Nov 2020</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                My mathematics education provided a rigorous foundation in
                logical reasoning, problem-solving, and analytical
                thinking—skills that directly translate to software development
                and algorithmic design. The program emphasized critical
                thinking, pattern recognition, and systematic approach to
                complex problems.
              </p>
            </motion.div>

            {/* Activities and Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <FaUsers className="text-primary" />
                Activities & Contributions
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Computer Lab Assistant",
                    description:
                      "Assisted with mathematical software usage (MATLAB, etc.)",
                    icon: "💻",
                  },
                  {
                    title: "Academic Seminar Participant",
                    description:
                      "Regular attendee at department seminars and academic discussions",
                    icon: "🎓",
                  },
                  {
                    title: "Peer Study Group Coordinator",
                    description:
                      "Organized group study sessions for complex mathematical topics",
                    icon: "👥",
                  },
                  {
                    title: "Mathematical Concept Tutorials",
                    description:
                      "Explained complex topics to junior students and peers",
                    icon: "📚",
                  },
                  {
                    title: "Resource Sharing Initiative",
                    description:
                      "Helped classmates access study materials and resources",
                    icon: "🤝",
                  },
                  {
                    title: "Self-Study Mathematics Group",
                    description:
                      "Regular collaborative problem-solving with peers",
                    icon: "🧮",
                  },
                ].map((activity, index) => (
                  <motion.div
                    key={activity.title}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{activity.icon}</span>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">
                          {activity.title}
                        </h5>
                        <p className="text-gray-600 text-sm">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Skills Developed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Key Skills Developed Through Mathematics Education
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Logical Reasoning",
                  "Problem Solving",
                  "Analytical Thinking",
                  "Pattern Recognition",
                  "Critical Analysis",
                  "Mathematical Modeling",
                  "Abstract Thinking",
                  "Systematic Approach",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-full text-center text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
