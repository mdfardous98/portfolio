"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
  FaDiscord,
  FaSkype,
  FaPaperPlane,
  FaRocket,
} from "react-icons/fa";
import Gaming3DCard from "./Gaming3DCard";
import GamingButton from "./GamingButton";

const Contact = () => {
  const [selectedContact, setSelectedContact] = useState("email");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactMethod: "email",
    subject: "",
    message: "",
  });

  const contactMethods = [
    {
      id: "email",
      icon: FaEnvelope,
      label: "Email",
      value: "mdjfardous@gmail.com",
      href: "mailto:mdjfardous@gmail.com",
      color: "from-red-500 to-pink-500",
      description: "Professional inquiries & collaborations",
    },
    {
      id: "phone",
      icon: FaPhone,
      label: "Phone",
      value: "+8801688645882",
      href: "tel:+8801688645882",
      color: "from-green-500 to-emerald-500",
      description: "Direct calls for urgent matters",
    },
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+8801688645882",
      href: "https://wa.me/8801688645882",
      color: "from-green-600 to-green-400",
      description: "Quick messages & file sharing",
    },
    {
      id: "telegram",
      icon: FaTelegram,
      label: "Telegram",
      value: "@mdfardous",
      href: "https://t.me/mdfardous",
      color: "from-blue-500 to-cyan-500",
      description: "Secure messaging & updates",
    },
  ];

  const socialPlatforms = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/mdfardous98",
      color: "from-gray-700 to-gray-900",
      count: "50+ Repos",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mdfardous",
      color: "from-blue-600 to-blue-800",
      count: "500+ Connections",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      href: "https://www.facebook.com/tajwar.fardousx",
      color: "from-blue-500 to-blue-700",
      count: "Personal Updates",
    },
    {
      icon: FaDiscord,
      label: "Discord",
      href: "#",
      color: "from-indigo-500 to-purple-600",
      count: "Coming Soon",
    },
    {
      icon: FaSkype,
      label: "Skype",
      href: "#",
      color: "from-cyan-500 to-blue-500",
      count: "Video Calls",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend or email service
    console.log("Form submitted:", formData);
    alert("Message sent! I'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
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
              <span className="text-6xl">📡</span>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 neon-text">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate? Choose your preferred communication method and
            let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Gaming3DCard glowColor="cyan" intensity={1.2}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaRocket className="text-cyan-400" />
                Contact Methods
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      z: 20,
                    }}
                    onClick={() => setSelectedContact(method.id)}
                    className={`
                      relative p-4 rounded-xl cursor-pointer transition-all duration-300
                      bg-gradient-to-br ${
                        method.color
                      } opacity-90 hover:opacity-100
                      ${
                        selectedContact === method.id
                          ? "ring-2 ring-white ring-opacity-50"
                          : ""
                      }
                    `}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        animate={{
                          rotateY: selectedContact === method.id ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <method.icon className="text-2xl text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {method.label}
                        </h4>
                        <p className="text-white/80 text-sm">{method.value}</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-xs">
                      {method.description}
                    </p>

                    {selectedContact === method.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FaMapMarkerAlt className="text-2xl text-red-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">Dhaka, Bangladesh 🇧🇩</p>
                  </div>
                </div>
              </motion.div>
            </Gaming3DCard>

            {/* Social Platforms */}
            <Gaming3DCard glowColor="purple" intensity={1.2}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">🌐</span>
                Social Platforms
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                      z: 30,
                    }}
                    className={`
                      relative p-4 rounded-xl transition-all duration-300
                      bg-gradient-to-br ${platform.color} opacity-90 hover:opacity-100
                      group cursor-pointer
                    `}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotateZ: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="group-hover:animate-none"
                      >
                        <platform.icon className="text-2xl text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {platform.label}
                        </h4>
                        <p className="text-white/70 text-sm">
                          {platform.count}
                        </p>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </Gaming3DCard>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Gaming3DCard glowColor="green" intensity={1.5}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaPaperPlane className="text-green-400" />
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="email" className="bg-gray-800">
                      Email
                    </option>
                    <option value="phone" className="bg-gray-800">
                      Phone Call
                    </option>
                    <option value="whatsapp" className="bg-gray-800">
                      WhatsApp
                    </option>
                    <option value="telegram" className="bg-gray-800">
                      Telegram
                    </option>
                  </select>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  ></textarea>
                </motion.div>

                <GamingButton
                  variant="success"
                  size="lg"
                  icon={<FaPaperPlane />}
                  glitch={true}
                  className="w-full"
                  onClick={() => handleSubmit(new Event("submit") as any)}
                >
                  Launch Message 🚀
                </GamingButton>
              </form>

              {/* Quick Contact Options */}
              <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <p className="text-sm text-gray-300 mb-3 text-center">
                  <strong>Need faster response?</strong> Try these instant
                  options:
                </p>
                <div className="flex gap-3 justify-center">
                  <GamingButton
                    href="mailto:mdjfardous@gmail.com"
                    variant="primary"
                    size="sm"
                    icon={<FaEnvelope />}
                  >
                    Email
                  </GamingButton>
                  <GamingButton
                    href="https://wa.me/8801688645882"
                    variant="success"
                    size="sm"
                    icon={<FaWhatsapp />}
                  >
                    WhatsApp
                  </GamingButton>
                  <GamingButton
                    href="tel:+8801688645882"
                    variant="secondary"
                    size="sm"
                    icon={<FaPhone />}
                  >
                    Call
                  </GamingButton>
                </div>
              </div>
            </Gaming3DCard>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Gaming3DCard glowColor="pink" intensity={1.8} className="p-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🤝
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-gray-300 mb-6 opacity-90 max-w-2xl mx-auto">
              Whether it's a simple website or a complex web application, I'm
              here to help bring your vision to life with cutting-edge
              technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GamingButton
                href="mailto:mdjfardous@gmail.com"
                variant="primary"
                size="lg"
                icon={<FaEnvelope />}
                glitch={true}
              >
                Start a Project
              </GamingButton>
              <GamingButton
                href="https://wa.me/8801688645882"
                variant="success"
                size="lg"
                icon={<FaWhatsapp />}
              >
                Quick Chat
              </GamingButton>
            </div>
          </Gaming3DCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
