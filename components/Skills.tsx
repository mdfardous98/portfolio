"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "HTML5", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Web Design", level: 88 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 75 },
        { name: "Firebase", level: 65 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "npm", level: 85 },
        { name: "Vercel", level: 75 },
        { name: "MERN Stack", level: 75 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Analytical Skills", level: 88 },
        { name: "Logical Reasoning", level: 92 },
        { name: "Team Coordination", level: 80 },
        { name: "Technical Communication", level: 75 },
        { name: "Collaborative Learning", level: 85 },
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and competencies in
            web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="skill-bar h-2">
                      <motion.div
                        className="skill-progress h-full"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: isVisible ? `${skill.level}%` : 0,
                        }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Technologies I Work With
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              { name: "React", icon: "⚛️" },
              { name: "JavaScript", icon: "🟨" },
              { name: "Node.js", icon: "🟢" },
              { name: "MongoDB", icon: "🍃" },
              { name: "HTML5", icon: "🔶" },
              { name: "CSS3", icon: "🔷" },
              { name: "Git", icon: "📚" },
              { name: "VS Code", icon: "💙" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white p-4 rounded-lg shadow-md text-center card-hover"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
