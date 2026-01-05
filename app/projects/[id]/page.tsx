"use client";

export const dynamicParams = true;
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCog,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import PlaceholderImage from "../../../components/PlaceholderImage";

const ProjectDetail = () => {
  const params = useParams();
  const projectId = params.id;

  const projectsData = {
    "1": {
      name: "PawMart - Pet Adoption Platform",
      image: null,
      placeholderText: "PawMart Pet Adoption",
      placeholderColor: "#3B82F6",
      mainTech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT Authentication",
      ],
      description: `PawMart is a comprehensive pet adoption platform designed to connect pet lovers with adorable animals looking for their forever homes. The platform features a modern, responsive design with robust functionality including user authentication, admin dashboard, and multi-role access control.

      The application allows users to browse available pets, view detailed information, and initiate adoption processes. Administrators can manage pet listings, user accounts, and oversee the entire adoption workflow through a dedicated dashboard.`,

      liveLink: "https://pawmart-client-2025.netlify.app",
      githubLink: "https://github.com/mdfardous98/pawmart-client",

      challenges: [
        "Implementing secure multi-role authentication system with different access levels",
        "Designing an intuitive admin dashboard for managing complex pet adoption workflows",
        "Creating responsive design that works seamlessly across all device sizes",
        "Handling real-time data updates for pet availability status",
        "Optimizing image loading and performance for pet gallery features",
      ],

      improvements: [
        "Add real-time chat functionality between adopters and pet owners",
        "Implement advanced search and filtering options with location-based results",
        "Integrate payment gateway for adoption fees and donations",
        "Add email notification system for adoption status updates",
        "Implement pet care tips and resources section",
        "Add mobile app version using React Native",
      ],

      features: [
        "User registration and authentication system",
        "Pet browsing with detailed information pages",
        "Admin dashboard for pet and user management",
        "Responsive design for all devices",
        "Secure data handling and validation",
        "Role-based access control",
      ],
    },

    "2": {
      name: "Digital Life Lessons - Blog Platform",
      image: null,
      placeholderText: "Digital Life Lessons Blog",
      placeholderColor: "#10B981",
      mainTech: [
        "MERN Stack",
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "REST APIs",
      ],
      description: `Digital Life Lessons is a modern blog platform that provides users with a seamless experience for reading, writing, and sharing meaningful content. The platform features a clean, minimalist design focused on readability and user engagement.

      Users can create accounts, publish articles, engage with content through comments, and manage their personal blog profiles. The platform includes full CRUD operations, user authentication, and a responsive design that ensures optimal viewing across all devices.`,

      liveLink: "https://digital-life-lessons-626ff.web.app",
      githubLink: "https://github.com/mdfardous98/digital-life-lessons-client",

      challenges: [
        "Building a robust content management system with rich text editing capabilities",
        "Implementing secure user authentication and session management",
        "Creating an efficient commenting system with nested replies",
        "Designing a scalable database schema for blog posts and user interactions",
        "Optimizing SEO for better content discoverability",
      ],

      improvements: [
        "Add rich text editor with markdown support",
        "Implement social media sharing functionality",
        "Add user following/follower system",
        "Create categories and tagging system for better content organization",
        "Implement search functionality across all blog posts",
        "Add email subscription for new post notifications",
      ],

      features: [
        "User authentication and profile management",
        "Create, read, update, and delete blog posts",
        "Interactive commenting system",
        "Responsive design for optimal mobile experience",
        "User dashboard for managing personal content",
        "Clean and modern UI/UX design",
      ],
    },

    "3": {
      name: "Care XYZ - Healthcare Platform",
      image: null,
      placeholderText: "Care XYZ Healthcare",
      placeholderColor: "#8B5CF6",
      mainTech: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "JavaScript ES6+",
        "Responsive Design",
      ],
      description: `Care XYZ is a specialized healthcare platform focusing on winter pet care services. The application provides comprehensive information about pet health during winter months and includes an appointment booking system for veterinary consultations.

      The platform features a modern, accessible design with detailed care guides, service information, and easy-to-use booking functionality. It's built with a focus on user experience and provides valuable resources for pet owners during challenging weather conditions.`,

      liveLink: "https://care-xyz-five.vercel.app",
      githubLink: "https://github.com/mdfardous98/care-xyz",

      challenges: [
        "Creating an intuitive appointment booking system with calendar integration",
        "Designing accessible healthcare information architecture",
        "Implementing responsive design for healthcare professionals and pet owners",
        "Ensuring fast loading times for critical healthcare information",
        "Building trust through professional design and clear information presentation",
      ],

      improvements: [
        "Add telemedicine consultation features",
        "Implement appointment reminder system via email/SMS",
        "Create pet health tracking and record management",
        "Add multi-language support for broader accessibility",
        "Integrate with veterinary clinic management systems",
        "Add emergency contact and first-aid guidance features",
      ],

      features: [
        "Comprehensive winter pet care information",
        "Appointment booking system",
        "Service information and pricing",
        "Responsive design for all devices",
        "Fast loading and optimized performance",
        "Professional healthcare-focused UI",
      ],
    },
  };

  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.name}
          </h1>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <FaGithub />
              View Code
            </a>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            ) : (
              <PlaceholderImage
                width={800}
                height={384}
                text={project.placeholderText}
                bgColor={project.placeholderColor}
                className="w-full h-full"
              />
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg text-gray-700">
                {project.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Challenges Faced
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg"
                  >
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Future Improvements */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Future Improvements
              </h2>
              <div className="space-y-4">
                {project.improvements.map((improvement, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg"
                  >
                    <p className="text-gray-700">{improvement}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaCog className="text-primary" />
                Technology Stack
              </h3>
              <div className="space-y-2">
                {project.mainTech.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                >
                  <FaExternalLinkAlt className="inline mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                >
                  <FaGithub className="inline mr-2" />
                  Source Code
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
