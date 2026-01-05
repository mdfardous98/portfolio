"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCertificate,
  FaAward,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaDatabase,
  FaCloud,
  FaStar,
  FaDownload,
  FaEye,
  FaLock,
} from "react-icons/fa";
import Gaming3DCard from "./Gaming3DCard";
import GamingButton from "./GamingButton";

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Complete Web Development Course",
      provider: "Programming Hero",
      category: "web-development",
      date: "2024-12-15",
      status: "completed",
      credentialId: "PH-WD-2024-001",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      description:
        "Comprehensive full-stack web development course covering modern technologies and best practices.",
      certificateUrl: "#",
      verificationUrl: "#",
      image: "/certificates/programming-hero-web-dev.jpg",
      rating: 5,
      hours: 120,
      projects: 8,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      title: "React - The Complete Guide",
      provider: "Udemy",
      category: "frontend",
      date: "2024-11-20",
      status: "completed",
      credentialId: "UC-REACT-2024-002",
      skills: ["React", "Redux", "Context API", "Hooks", "TypeScript"],
      description:
        "Deep dive into React ecosystem with modern patterns and advanced concepts.",
      certificateUrl: "#",
      verificationUrl: "#",
      image: "/certificates/udemy-react.jpg",
      rating: 5,
      hours: 40,
      projects: 5,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Node.js & Express.js Masterclass",
      provider: "Udemy",
      category: "backend",
      date: "2024-10-10",
      status: "completed",
      credentialId: "UC-NODE-2024-003",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Authentication",
      ],
      description:
        "Complete backend development with Node.js, Express, and database integration.",
      certificateUrl: "#",
      verificationUrl: "#",
      image: "/certificates/udemy-nodejs.jpg",
      rating: 5,
      hours: 35,
      projects: 4,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "JavaScript Algorithms and Data Structures",
      provider: "freeCodeCamp",
      category: "programming",
      date: "2024-09-15",
      status: "completed",
      credentialId: "FCC-JS-2024-004",
      skills: [
        "JavaScript",
        "Algorithms",
        "Data Structures",
        "Problem Solving",
      ],
      description:
        "Comprehensive course on JavaScript fundamentals and computer science concepts.",
      certificateUrl: "#",
      verificationUrl: "#",
      image: "/certificates/freecodecamp-js.jpg",
      rating: 5,
      hours: 300,
      projects: 20,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 5,
      title: "Advanced CSS and Sass",
      provider: "Udemy",
      category: "frontend",
      date: "2024-08-05",
      status: "completed",
      credentialId: "UC-CSS-2024-005",
      skills: [
        "CSS3",
        "Sass",
        "Flexbox",
        "Grid",
        "Animations",
        "Responsive Design",
      ],
      description:
        "Master modern CSS techniques and advanced styling concepts.",
      certificateUrl: "#",
      verificationUrl: "#",
      image: "/certificates/udemy-css.jpg",
      rating: 4,
      hours: 28,
      projects: 3,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 6,
      title: "MongoDB Complete Developer Guide",
      provider: "Udemy",
      category: "database",
      date: "2024-07-20",
      status: "in-progress",
      credentialId: "UC-MONGO-2024-006",
      skills: ["MongoDB", "Mongoose", "Database Design", "Aggregation"],
      description:
        "Complete guide to MongoDB database development and optimization.",
      certificateUrl: "#",
      verificationUrl: "#",
      image: "/certificates/udemy-mongodb.jpg",
      rating: 4,
      hours: 25,
      projects: 2,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const categories = [
    { id: "all", label: "All Certificates", icon: FaCertificate },
    { id: "web-development", label: "Web Development", icon: FaCode },
    { id: "frontend", label: "Frontend", icon: FaReact },
    { id: "backend", label: "Backend", icon: FaNodeJs },
    { id: "programming", label: "Programming", icon: FaJs },
    { id: "database", label: "Database", icon: FaDatabase },
  ];

  const filteredCertificates =
    activeCategory === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "in-progress":
        return "text-yellow-400";
      case "planned":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "in-progress":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "planned":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  const getTechIcon = (skill: string) => {
    const icons: { [key: string]: any } = {
      React: FaReact,
      "Node.js": FaNodeJs,
      JavaScript: FaJs,
      Python: FaPython,
      MongoDB: FaDatabase,
      CSS: FaCode,
      HTML: FaCode,
    };
    return icons[skill] || FaCode;
  };

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
              <span className="text-6xl">🏆</span>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 neon-text">
            Certificates & Achievements
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My continuous learning journey through courses, certifications, and
            skill development programs
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <category.icon size={16} />
                <span className="hidden sm:inline">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCertificates.map((cert, index) => (
            <Gaming3DCard key={cert.id} glowColor="green" intensity={1.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <FaCertificate className="text-2xl text-yellow-400" />
                      </motion.div>
                      <span
                        className={`
                        px-2 py-1 rounded-full text-xs font-semibold text-white
                        ${getStatusBadge(cert.status)}
                      `}
                      >
                        {cert.status.charAt(0).toUpperCase() +
                          cert.status.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-300 font-semibold text-sm mb-2">
                      {cert.provider}
                    </p>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <FaCalendarAlt className="text-green-400" />
                    <span>{new Date(cert.date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">⏱️</span>
                      <span className="text-white">{cert.hours}h</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">📁</span>
                      <span className="text-white">
                        {cert.projects} projects
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(cert.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2 text-sm">
                    Skills Learned:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 4).map((skill) => {
                      const IconComponent = getTechIcon(skill);
                      return (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                        >
                          <IconComponent size={12} />
                          <span>{skill}</span>
                        </motion.div>
                      );
                    })}
                    {cert.skills.length > 4 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs">
                        +{cert.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {cert.status === "completed" ? (
                    <>
                      <GamingButton
                        href={cert.certificateUrl}
                        variant="primary"
                        size="sm"
                        icon={<FaEye />}
                        className="flex-1"
                      >
                        View
                      </GamingButton>
                      <GamingButton
                        href={cert.certificateUrl}
                        variant="secondary"
                        size="sm"
                        icon={<FaDownload />}
                        className="flex-1"
                      >
                        Download
                      </GamingButton>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-500/20 rounded-lg text-gray-400 text-sm">
                      <FaLock size={12} />
                      <span>In Progress</span>
                    </div>
                  )}
                </div>

                {/* Credential ID */}
                {cert.status === "completed" && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-xs text-gray-400">
                      Credential ID:{" "}
                      <span className="text-cyan-400 font-mono">
                        {cert.credentialId}
                      </span>
                    </p>
                  </div>
                )}
              </motion.div>
            </Gaming3DCard>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Gaming3DCard glowColor="purple" intensity={2} className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="space-y-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaCertificate className="text-4xl text-yellow-400 mx-auto" />
                </motion.div>
                <div className="text-2xl font-bold text-white">
                  {certificates.filter((c) => c.status === "completed").length}
                </div>
                <div className="text-gray-300 text-sm">Completed</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="space-y-2"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <FaGraduationCap className="text-4xl text-blue-400 mx-auto" />
                </motion.div>
                <div className="text-2xl font-bold text-white">
                  {certificates.reduce((total, cert) => total + cert.hours, 0)}+
                </div>
                <div className="text-gray-300 text-sm">Learning Hours</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="space-y-2"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaCode className="text-4xl text-green-400 mx-auto" />
                </motion.div>
                <div className="text-2xl font-bold text-white">
                  {certificates.reduce(
                    (total, cert) => total + cert.projects,
                    0
                  )}
                  +
                </div>
                <div className="text-gray-300 text-sm">Projects Built</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="space-y-2"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaAward className="text-4xl text-purple-400 mx-auto" />
                </motion.div>
                <div className="text-2xl font-bold text-white">
                  {
                    certificates.filter((c) => c.status === "in-progress")
                      .length
                  }
                </div>
                <div className="text-gray-300 text-sm">In Progress</div>
              </motion.div>
            </div>
          </Gaming3DCard>
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
              📚
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4 neon-text">
              Never Stop Learning
            </h3>
            <p className="text-lg text-gray-300 mb-6 opacity-90 max-w-2xl mx-auto">
              Continuous learning is the key to staying relevant in the
              ever-evolving tech industry. I'm always exploring new technologies
              and expanding my skill set.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GamingButton
                href="#contact"
                variant="primary"
                size="lg"
                icon={<FaGraduationCap />}
                glitch={true}
              >
                Let's Learn Together
              </GamingButton>
              <GamingButton
                href="#projects"
                variant="secondary"
                size="lg"
                icon={<FaCode />}
              >
                See My Projects
              </GamingButton>
            </div>
          </Gaming3DCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
