"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "PawMart - Pet Adoption Platform",
      image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=PawMart",
      shortDescription:
        "A comprehensive pet adoption platform with multi-role authentication and admin dashboard.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
      liveLink: "https://pawmart-client-2025.netlify.app",
      githubLink: "https://github.com/mdfardous98/pawmart-client",
      category: "Full Stack",
    },
    {
      id: 2,
      name: "Digital Life Lessons - Blog Platform",
      image:
        "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Digital+Life+Lessons",
      shortDescription:
        "A modern blog platform with user authentication, CRUD operations, and interactive commenting system.",
      technologies: [
        "MERN Stack",
        "REST APIs",
        "JWT Authentication",
        "Responsive Design",
      ],
      liveLink: "https://digital-life-lessons-626ff.web.app",
      githubLink: "https://github.com/mdfardous98/digital-life-lessons-client",
      category: "Full Stack",
    },
    {
      id: 3,
      name: "Care XYZ - Healthcare Platform",
      image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Care+XYZ",
      shortDescription:
        "A healthcare management platform focusing on winter pet care with appointment booking system.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Responsive Design"],
      liveLink: "https://care-xyz-five.vercel.app",
      githubLink: "https://github.com/mdfardous98/care-xyz",
      category: "Frontend",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my best work in web development with modern technologies
            and user-centric design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <FaEye size={16} />
                    View Details
                  </Link>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-lg transition-colors"
                    title="GitHub Repository"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-gray-600 mb-6">
              I'm continuously working on new projects to expand my portfolio.
              Currently developing 10+ additional projects that will showcase
              various aspects of modern web development.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/mdfardous98"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white py-2 px-6 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <FaGithub />
                View All on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
