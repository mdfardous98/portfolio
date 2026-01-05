"use client";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Your resume file in the public folder
    link.download = "MD_Fardous_Resume.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="text-yellow-300">MD Fardous</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100"
            >
              Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed"
            >
              Mathematics graduate transitioning to web development. I build
              responsive, user-friendly applications using the MERN stack and
              modern web technologies.
            </motion.p>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-8"
            >
              <button
                onClick={handleResumeDownload}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                <FaDownload />
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-4"
            >
              <a
                href="https://github.com/mdfardous98"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mdfardous"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/tajwar.fardousx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl"
              >
                <Image
                  src="/profile-photo.jpg"
                  alt="MD Fardous"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg"
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-blue-400 text-white p-3 rounded-full shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
