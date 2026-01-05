"use client";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in web development through intensive project-based
            learning and practical application
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-xl p-8 md:p-12 border border-blue-100"
          >
            {/* Experience Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="bg-primary bg-opacity-15 p-4 rounded-full">
                <FaBriefcase className="text-4xl text-primary" />
              </div>

              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Web Developer
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-4">
                  Project-Based Learning · Self-employed
                </h4>

                <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-4">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <FaCalendarAlt className="text-primary" />
                    <span>Apr 2024 - Present · 10 months</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>Dhaka, Bangladesh · Remote</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Transitioning from mathematics to web development through
                intensive project-based learning. Building production-ready
                applications that demonstrate full-stack capabilities and modern
                web development practices.
              </p>
            </motion.div>

            {/* Key Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <FaProjectDiagram className="text-primary" />
                Key Projects Developed
              </h4>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-2">PawMart</h5>
                  <p className="text-gray-600 mb-2">
                    Pet adoption platform with access control, admin dashboard,
                    and multi-role authentication
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Authentication"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Digital Life Lessons
                  </h5>
                  <p className="text-gray-600 mb-2">
                    Blog platform with user authentication, CRUD operations, and
                    commenting system
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["MERN Stack", "REST APIs", "User Management"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technologies Used */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <FaCode className="text-primary" />
                Technologies & Tools
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "MERN Stack",
                  "Next.js",
                  "Tailwind CSS",
                  "REST APIs",
                  "Git",
                  "Vercel",
                  "MongoDB",
                  "Express.js",
                  "React",
                  "Node.js",
                  "JavaScript",
                  "HTML5/CSS3",
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-center text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Key Responsibilities & Achievements
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Full-stack development from UI design to deployment",
                  "API development and database design",
                  "Third-party integrations and authentication systems",
                  "Implementing responsive, user-friendly interfaces",
                  "Version control and collaborative development practices",
                  "Performance optimization and code quality maintenance",
                  "Testing and debugging across different environments",
                  "Documentation and project management",
                ].map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{responsibility}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
