"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "mdjfardous@gmail.com",
      href: "mailto:mdjfardous@gmail.com",
      color: "text-red-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+8801688645882",
      href: "tel:+8801688645882",
      color: "text-green-500",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+8801688645882",
      href: "https://wa.me/8801688645882",
      color: "text-green-600",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      color: "text-blue-500",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/mdfardous98",
      color: "bg-gray-900 hover:bg-gray-800",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mdfardous",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      href: "https://www.facebook.com/tajwar.fardousx",
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div
                    className={`p-3 rounded-full bg-white shadow-md ${contact.color}`}
                  >
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      {contact.label}
                    </p>
                    {contact.href === "#" ? (
                      <p className="text-gray-900 font-semibold">
                        {contact.value}
                      </p>
                    ) : (
                      <a
                        href={contact.href}
                        className="text-gray-900 font-semibold hover:text-primary transition-colors"
                        target={
                          contact.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {contact.value}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-full text-white transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send Me a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-secondary text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    "Contact form functionality will be implemented with backend integration!"
                  );
                }}
              >
                Send Message
              </motion.button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> You can also reach me directly via email
                or WhatsApp for faster communication!
              </p>
            </div>
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
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your ideas and turn them into reality with modern
              web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mdjfardous@gmail.com"
                className="bg-white text-primary hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Email Me Now
              </a>
              <a
                href="https://wa.me/8801688645882"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
