"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaEye,
  FaCode,
  FaRocket,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import PlaceholderImage from "./PlaceholderImage";

const AdvancedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      name: "PawMart",
      subtitle: "Pet Adoption Platform",
      image: null,
      placeholderText: "PawMart Pet Adoption",
      placeholderColor: "#3B82F6",
      shortDescription:
        "A comprehensive pet adoption platform with multi-role authentication, admin dashboard, and seamless user experience.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "JWT",
      ],
      liveLink: "https://pawmart-client-2025.netlify.app",
      githubLink: "https://github.com/mdfardous98/pawmart-client",
      category: "Full Stack",
      featured: true,
      stats: { stars: 15, forks: 8, commits: 127 },
    },
    {
      id: 2,
      name: "Digital Life Lessons",
      subtitle: "Modern Blog Platform",
      image: null,
      placeholderText: "Digital Life Lessons",
      placeholderColor: "#10B981",
      shortDescription:
        "A feature-rich blog platform with user authentication, CRUD operations, and interactive commenting system.",
      technologies: [
        "MERN Stack",
        "REST APIs",
        "JWT Auth",
        "Responsive Design",
      ],
      liveLink: "https://digital-life-lessons-626ff.web.app",
      githubLink: "https://github.com/mdfardous98/digital-life-lessons-client",
      category: "Full Stack",
      featured: true,
      stats: { stars: 12, forks: 5, commits: 89 },
    },
    {
      id: 3,
      name: "Care XYZ",
      subtitle: "Healthcare Platform",
      image: null,
      placeholderText: "Care XYZ Healthcare",
      placeholderColor: "#8B5CF6",
      shortDescription:
        "A specialized healthcare platform focusing on winter pet care with appointment booking system.",
      technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript ES6+"],
      liveLink: "https://care-xyz-five.vercel.app",
      githubLink: "https://github.com/mdfardous98/care-xyz",
      category: "Frontend",
      featured: false,
      stats: { stars: 8, forks: 3, commits: 64 },
    },
    {
      id: 4,
      name: "EcoShop",
      subtitle: "E-commerce Platform",
      image: null,
      placeholderText: "EcoShop E-commerce",
      placeholderColor: "#F59E0B",
      shortDescription:
        "A modern e-commerce platform with shopping cart, payment integration, and inventory management.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "TypeScript"],
      liveLink: "https://ecoshop-demo.vercel.app",
      githubLink: "https://github.com/mdfardous98/ecoshop",
      category: "Full Stack",
      featured: true,
      stats: { stars: 20, forks: 12, commits: 156 },
    },
    {
      id: 5,
      name: "TaskFlow",
      subtitle: "Project Management Tool",
      image: null,
      placeholderText: "TaskFlow Management",
      placeholderColor: "#EF4444",
      shortDescription:
        "A collaborative project management tool with real-time updates, team collaboration, and task tracking.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Redux"],
      liveLink: "https://taskflow-app.netlify.app",
      githubLink: "https://github.com/mdfardous98/taskflow",
      category: "Full Stack",
      featured: false,
      stats: { stars: 18, forks: 9, commits: 203 },
    },
    {
      id: 6,
      name: "WeatherWise",
      subtitle: "Weather Forecast App",
      image: null,
      placeholderText: "WeatherWise App",
      placeholderColor: "#06B6D4",
      shortDescription:
        "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["React Native", "OpenWeather API", "Expo", "AsyncStorage"],
      liveLink: "https://weatherwise-demo.expo.dev",
      githubLink: "https://github.com/mdfardous98/weatherwise",
      category: "Mobile",
      featured: false,
      stats: { stars: 14, forks: 6, commits: 98 },
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 100, opacity: 0 },
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

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -200, 0],
            y: [0, 200, 0],
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <span className="text-6xl">🚀</span>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 neon-text">
            {t("projects.title")}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <motion.div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group card-hover">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <PlaceholderImage
                      width={600}
                      height={320}
                      text={project.placeholderText}
                      bgColor={project.placeholderColor}
                      className="w-full h-80 transition-transform duration-500 group-hover:scale-110"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Floating Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20,
                    }}
                    className="absolute top-4 right-4 flex gap-3"
                  >
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="glass p-3 rounded-full text-white hover:text-green-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="glass p-3 rounded-full text-white hover:text-gray-300 transition-colors"
                    >
                      <FaGithub size={16} />
                    </motion.a>
                  </motion.div>

                  {/* Project Stats */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      x: hoveredProject === project.id ? 0 : -20,
                    }}
                    className="absolute bottom-4 left-4 flex gap-4"
                  >
                    <div className="glass px-3 py-1 rounded-full flex items-center gap-2">
                      <FaStar className="text-yellow-400" size={12} />
                      <span className="text-white text-sm">
                        {project.stats.stars}
                      </span>
                    </div>
                    <div className="glass px-3 py-1 rounded-full flex items-center gap-2">
                      <FaCode className="text-blue-400" size={12} />
                      <span className="text-white text-sm">
                        {project.stats.commits}
                      </span>
                    </div>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 left-4"
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <FaStar size={12} />
                        Featured
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Category Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </motion.div>

                {/* Project Title */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">
                    {project.name}
                  </h3>
                  <p className="text-xl text-blue-300 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="glass px-4 py-2 rounded-full text-sm font-medium text-white border border-white border-opacity-20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    >
                      <FaEye size={16} />
                      {t("projects.viewDetails")}
                    </Link>
                  </motion.div>

                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass text-white py-3 px-6 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <FaRocket size={16} />
                    {t("projects.liveDemo")}
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-6 mt-16"
          >
            <motion.button
              onClick={prevPage}
              disabled={currentPage === 1}
              whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentPage === 1
                  ? theme === "dark"
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : theme === "dark"
                  ? "glass text-white hover:bg-white hover:bg-opacity-20"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg"
              }`}
            >
              <FaChevronLeft size={14} />
              {t("projects.previous")}
            </motion.button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <motion.button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : theme === "dark"
                        ? "glass text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-20"
                        : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-md"
                    }`}
                  >
                    {page}
                  </motion.button>
                )
              )}
            </div>

            <motion.button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentPage === totalPages
                  ? theme === "dark"
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : theme === "dark"
                  ? "glass text-white hover:bg-white hover:bg-opacity-20"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg"
              }`}
            >
              {t("projects.next")}
              <FaChevronRight size={14} />
            </motion.button>
          </motion.div>
        )}

        {/* Page Indicator */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t("projects.page")} {currentPage} {t("projects.of")} {totalPages}
            </p>
          </motion.div>
        )}

        {/* More Projects Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-6"
            >
              🚀
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-6 neon-text">
              More Amazing Projects Coming Soon!
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm continuously working on innovative projects that push the
              boundaries of web development. Currently developing{" "}
              <span className="text-blue-400 font-semibold">
                10+ additional projects
              </span>{" "}
              that will showcase various aspects of modern full-stack
              development.
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/mdfardous98"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white py-3 px-8 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg"
              >
                <FaGithub size={20} />
                Explore All Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedProjects;
