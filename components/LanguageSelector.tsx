"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
    { code: "bn" as Language, name: "বাংলা", flag: "🇧🇩" },
    { code: "hi" as Language, name: "हिन्दी", flag: "🇮🇳" },
    { code: "es" as Language, name: "Español", flag: "🇪🇸" },
    { code: "pt" as Language, name: "Português", flag: "🇵🇹" },
    { code: "la" as Language, name: "Latina", flag: "🏛️" },
    { code: "de" as Language, name: "Deutsch", flag: "🇩🇪" },
    { code: "ar" as Language, name: "العربية", flag: "🇸🇦" },
    { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
    { code: "it" as Language, name: "Italiano", flag: "🇮🇹" },
    { code: "ja" as Language, name: "日本語", flag: "🇯🇵" },
    { code: "ko" as Language, name: "한국어", flag: "🇰🇷" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 p-3 rounded-full glass transition-all duration-300 group"
        aria-label="Select language"
      >
        <FaGlobe className="text-lg text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-sm font-medium hidden sm:block">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <span className="text-sm font-medium sm:hidden">
          {currentLanguage?.flag}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown className="text-xs opacity-70" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full right-0 mt-2 w-48 glass-dark backdrop-blur-xl rounded-2xl shadow-2xl border border-white border-opacity-10 z-50 overflow-hidden"
            >
              <div className="p-2">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                      language === lang.code
                        ? "bg-blue-500 bg-opacity-20 text-blue-300"
                        : "hover:bg-white hover:bg-opacity-10 text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                    {language === lang.code && (
                      <motion.div
                        layoutId="activeLanguage"
                        className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Decorative gradient border */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 pointer-events-none"
                style={{
                  padding: "1px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
