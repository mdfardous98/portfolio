"use client";
import { createContext, useContext, useState, useEffect } from "react";

export type Language =
  | "en"
  | "bn"
  | "hi"
  | "es"
  | "pt"
  | "la"
  | "de"
  | "ar"
  | "fr"
  | "it"
  | "ja"
  | "ko";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.welcome": "👋 Welcome to my portfolio",
    "hero.name": "MD Fardous",
    "hero.intro": "Hi, I'm",
    "hero.role.prefix": "I'm a",
    "hero.roles.webDeveloper": "Web Developer",
    "hero.roles.mernDeveloper": "MERN Stack Developer",
    "hero.roles.frontendSpecialist": "Frontend Specialist",
    "hero.roles.problemSolver": "Problem Solver",
    "hero.roles.mathGraduate": "Mathematics Graduate",
    "hero.description":
      "Mathematics graduate transitioning to web development. I craft responsive, user-friendly applications using the MERN stack and modern web technologies.",
    "hero.downloadResume": "Download Resume",
    "hero.viewWork": "View My Work",
    "hero.scrollDown": "Scroll Down",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "My Journey & Passion",
    "about.description1":
      "I am a Mathematics graduate who is learning web development and changing my career into the IT sector. I chose this field because I enjoy working with technology and solving problems.",
    "about.description2":
      "I focus on frontend development using HTML, CSS, JavaScript, and React to build simple and user-friendly websites. My background in mathematics helps me think logically and work carefully.",
    "about.description3":
      "I am very motivated to learn, practice every day, and improve my skills by building real projects. I want to grow as a frontend developer and do quality work for any organization I join.",
    "about.description4":
      "Outside of programming, I enjoy exploring new technologies, reading about web development trends, and occasionally playing strategic games that challenge my problem-solving skills.",
    "about.academic": "Academic Background",
    "about.academicDesc":
      "Mathematics graduate with strong analytical and logical thinking skills",
    "about.development": "Development Focus",
    "about.developmentDesc":
      "MERN stack development with emphasis on clean, responsive UI/UX",
    "about.love": "What I Love",
    "about.loveDesc":
      "Problem-solving, learning new technologies, and building user-friendly applications",
    "about.interests": "Interests",
    "about.interestsDesc":
      "Strategic games, tech trends, and continuous learning through practice",
    "about.strengths": "My Key Strengths",
    "about.problemSolving": "Problem-Solving Mindset",
    "about.problemSolvingDesc":
      "Break complex problems into smaller parts and work step by step to find solutions",
    "about.fastLearner": "Fast Learner",
    "about.fastLearnerDesc":
      "Quick to adapt to new technologies and implement solutions efficiently",
    "about.logicalThinking": "Logical Thinking",
    "about.logicalThinkingDesc":
      "Mathematical background enables structured approach to development challenges",

    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.subtitle":
      "A comprehensive showcase of my technical arsenal and professional competencies",
    "skills.frontend": "Frontend Technologies",
    "skills.backend": "Backend & Database",
    "skills.tools": "Tools & Workflow",
    "skills.soft": "Soft Skills",
    "skills.technologies": "Technologies I Master",
    "skills.philosophy": "My Development Philosophy",
    "skills.philosophyDesc":
      "I believe in writing clean, maintainable code that solves real-world problems. My mathematical background gives me a unique perspective on logical problem-solving, while my passion for modern web technologies drives me to create exceptional user experiences.",

    // Skills Items
    "skills.react": "React.js",
    "skills.javascript": "JavaScript (ES6+)",
    "skills.nextjs": "Next.js",
    "skills.typescript": "TypeScript",
    "skills.tailwind": "Tailwind CSS",
    "skills.responsive": "Responsive Design",
    "skills.nodejs": "Node.js",
    "skills.express": "Express.js",
    "skills.mongodb": "MongoDB",
    "skills.restapi": "REST APIs",
    "skills.firebase": "Firebase",
    "skills.git": "Git & GitHub",
    "skills.vscode": "VS Code",
    "skills.npm": "npm/yarn",
    "skills.vercel": "Vercel",
    "skills.mern": "MERN Stack",
    "skills.problemSolvingSkill": "Problem Solving",
    "skills.analytical": "Analytical Skills",
    "skills.logical": "Logical Reasoning",
    "skills.teamwork": "Team Coordination",
    "skills.communication": "Technical Communication",
    "skills.learning": "Collaborative Learning",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle":
      "Showcasing my finest work in web development with cutting-edge technologies and innovative solutions",
    "projects.viewDetails": "View Details",
    "projects.liveDemo": "Live Demo",
    "projects.moreProjects": "More Amazing Projects Coming Soon!",
    "projects.moreProjectsDesc":
      "I'm continuously working on innovative projects that push the boundaries of web development. Currently developing 10+ additional projects that will showcase various aspects of modern full-stack development.",
    "projects.exploreAll": "Explore All Projects",
    "projects.next": "Next",
    "projects.previous": "Previous",
    "projects.page": "Page",
    "projects.of": "of",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.",
    "contact.info": "Contact Information",
    "contact.connect": "Connect With Me",
    "contact.sendMessage": "Send Me a Message",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.note":
      "You can also reach me directly via email or WhatsApp for faster communication!",
    "contact.ready": "Ready to Start Your Project?",
    "contact.readyDesc":
      "Let's discuss your ideas and turn them into reality with modern web technologies.",
    "contact.emailNow": "Email Me Now",
    "contact.whatsapp": "WhatsApp Me",

    // Footer
    "footer.madeWith": "Made with",
    "footer.builtWith": "Built with Next.js, Tailwind CSS, and Framer Motion.",
    "footer.opportunities": "Open to opportunities and collaborations!",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
  },

  bn: {
    // Navigation
    "nav.home": "হোম",
    "nav.about": "সম্পর্কে",
    "nav.skills": "দক্ষতা",
    "nav.education": "শিক্ষা",
    "nav.experience": "অভিজ্ঞতা",
    "nav.projects": "প্রকল্প",
    "nav.contact": "যোগাযোগ",

    // Hero Section
    "hero.welcome": "👋 আমার পোর্টফোলিওতে স্বাগতম",
    "hero.name": "এমডি ফারদৌস",
    "hero.intro": "হ্যালো, আমি",
    "hero.role.prefix": "আমি একজন",
    "hero.roles.webDeveloper": "ওয়েব ডেভেলপার",
    "hero.roles.mernDeveloper": "MERN স্ট্যাক ডেভেলপার",
    "hero.roles.frontendSpecialist": "ফ্রন্টএন্ড বিশেষজ্ঞ",
    "hero.roles.problemSolver": "সমস্যা সমাধানকারী",
    "hero.roles.mathGraduate": "গণিত স্নাতক",
    "hero.description":
      "গণিত স্নাতক যিনি ওয়েব ডেভেলপমেন্টে ক্যারিয়ার পরিবর্তন করছেন। আমি MERN স্ট্যাক এবং আধুনিক ওয়েব প্রযুক্তি ব্যবহার করে প্রতিক্রিয়াশীল, ব্যবহারকারী-বান্ধব অ্যাপ্লিকেশন তৈরি করি।",
    "hero.downloadResume": "জীবনবৃত্তান্ত ডাউনলোড",
    "hero.viewWork": "আমার কাজ দেখুন",
    "hero.scrollDown": "নিচে স্ক্রল করুন",

    // About Section
    "about.title": "আমার সম্পর্কে",
    "about.subtitle": "আমার যাত্রা ও আবেগ",
    "about.description1":
      "আমি একজন গণিত স্নাতক যিনি ওয়েব ডেভেলপমেন্ট শিখছেন এবং আইটি সেক্টরে ক্যারিয়ার পরিবর্তন করছেন। আমি এই ক্ষেত্রটি বেছে নিয়েছি কারণ আমি প্রযুক্তি নিয়ে কাজ করতে এবং সমস্যা সমাধান করতে পছন্দ করি।",
    "about.description2":
      "আমি HTML, CSS, JavaScript, এবং React ব্যবহার করে সহজ এবং ব্যবহারকারী-বান্ধব ওয়েবসাইট তৈরি করার জন্য ফ্রন্টএন্ড ডেভেলপমেন্টে ফোকাস করি। গণিতে আমার পটভূমি আমাকে যৌক্তিকভাবে চিন্তা করতে এবং সাবধানে কাজ করতে সাহায্য করে।",
    "about.description3":
      "আমি শিখতে, প্রতিদিন অনুশীলন করতে এবং বাস্তব প্রকল্প তৈরি করে আমার দক্ষতা উন্নত করতে অত্যন্ত অনুপ্রাণিত। আমি একজন ফ্রন্টএন্ড ডেভেলপার হিসেবে বৃদ্ধি পেতে এবং যেকোনো সংস্থার জন্য মানসম্পন্ন কাজ করতে চাই।",
    "about.description4":
      "প্রোগ্রামিংয়ের বাইরে, আমি নতুন প্রযুক্তি অন্বেষণ করতে, ওয়েব ডেভেলপমেন্ট ট্রেন্ড সম্পর্কে পড়তে এবং মাঝে মাঝে কৌশলগত গেম খেলতে পছন্দ করি যা আমার সমস্যা সমাধানের দক্ষতাকে চ্যালেঞ্জ করে।",

    // Skills Section
    "skills.title": "দক্ষতা ও বিশেষজ্ঞতা",
    "skills.subtitle":
      "আমার প্রযুক্তিগত অস্ত্রাগার এবং পেশাদার দক্ষতার একটি বিস্তৃত প্রদর্শনী",
    "skills.frontend": "ফ্রন্টএন্ড প্রযুক্তি",
    "skills.backend": "ব্যাকএন্ড ও ডাটাবেস",
    "skills.tools": "টুলস ও ওয়ার্কফ্লো",
    "skills.soft": "সফট স্কিলস",
    "skills.technologies": "আমি যে প্রযুক্তিগুলো আয়ত্ত করেছি",
    "skills.philosophy": "আমার ডেভেলপমেন্ট দর্শন",
    "skills.philosophyDesc":
      "আমি পরিষ্কার, রক্ষণাবেক্ষণযোগ্য কোড লেখায় বিশ্বাস করি যা বাস্তব-বিশ্বের সমস্যা সমাধান করে। আমার গণিতের পটভূমি আমাকে যৌক্তিক সমস্যা সমাধানে একটি অনন্য দৃষ্টিভঙ্গি দেয়, যখন আধুনিক ওয়েব প্রযুক্তির প্রতি আমার আবেগ আমাকে ব্যতিক্রমী ব্যবহারকারীর অভিজ্ঞতা তৈরি করতে চালিত করে।",

    // Projects Section
    "projects.title": "বিশেষ প্রকল্পসমূহ",
    "projects.subtitle":
      "অত্যাধুনিক প্রযুক্তি এবং উদ্ভাবনী সমাধান সহ ওয়েব ডেভেলপমেন্টে আমার সেরা কাজের প্রদর্শনী",
    "projects.viewDetails": "বিস্তারিত দেখুন",
    "projects.liveDemo": "লাইভ ডেমো",
    "projects.moreProjects": "আরও অসাধারণ প্রকল্প শীঘ্রই আসছে!",
    "projects.exploreAll": "সব প্রকল্প দেখুন",
    "projects.next": "পরবর্তী",
    "projects.previous": "পূর্ববর্তী",
    "projects.page": "পৃষ্ঠা",
    "projects.of": "এর",

    // Contact Section
    "contact.title": "যোগাযোগ করুন",
    "contact.subtitle":
      "আপনার পরবর্তী প্রকল্প শুরু করতে প্রস্তুত? আসুন আলোচনা করি কিভাবে আমরা একসাথে কাজ করে আপনার ধারণাগুলো বাস্তবায়ন করতে পারি।",
    "contact.info": "যোগাযোগের তথ্য",
    "contact.connect": "আমার সাথে যুক্ত হন",
    "contact.sendMessage": "আমাকে একটি বার্তা পাঠান",
    "contact.send": "বার্তা পাঠান",
    "contact.emailNow": "এখনই ইমেইল করুন",
    "contact.whatsapp": "হোয়াটসঅ্যাপ করুন",
  },

  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.about": "के बारे में",
    "nav.skills": "कौशल",
    "nav.education": "शिक्षा",
    "nav.experience": "अनुभव",
    "nav.projects": "परियोजनाएं",
    "nav.contact": "संपर्क",

    // Hero Section
    "hero.welcome": "👋 मेरे पोर्टफोलियो में आपका स्वागत है",
    "hero.name": "एमडी फारदौस",
    "hero.intro": "नमस्ते, मैं हूं",
    "hero.role.prefix": "मैं एक हूं",
    "hero.roles.webDeveloper": "वेब डेवलपर",
    "hero.roles.mernDeveloper": "MERN स्टैक डेवलपर",
    "hero.roles.frontendSpecialist": "फ्रंटएंड विशेषज्ञ",
    "hero.roles.problemSolver": "समस्या समाधानकर्ता",
    "hero.roles.mathGraduate": "गणित स्नातक",
    "hero.description":
      "गणित स्नातक जो वेब डेवलपमेंट में करियर बदल रहा है। मैं MERN स्टैक और आधुनिक वेब तकनीकों का उपयोग करके उत्तरदायी, उपयोगकर्ता-अनुकूल एप्लिकेशन बनाता हूं।",
    "hero.downloadResume": "रिज्यूमे डाउनलोड करें",
    "hero.viewWork": "मेरा काम देखें",
    "hero.scrollDown": "नीचे स्क्रॉल करें",

    // Skills Section
    "skills.title": "कौशल और विशेषज्ञता",
    "skills.subtitle":
      "मेरी तकनीकी क्षमताओं और पेशेवर दक्षताओं का व्यापक प्रदर्शन",
    "skills.frontend": "फ्रंटएंड तकनीकें",
    "skills.backend": "बैकएंड और डेटाबेस",
    "skills.tools": "उपकरण और वर्कफ़्लो",
    "skills.soft": "सॉफ्ट स्किल्स",
    "skills.technologies": "जिन तकनीकों में मैं निपुण हूं",

    // Projects Section
    "projects.title": "विशेष परियोजनाएं",
    "projects.subtitle":
      "अत्याधुनिक तकनीकों और नवाचार समाधानों के साथ वेब डेवलपमेंट में मेरे बेहतरीन काम का प्रदर्शन",
    "projects.viewDetails": "विवरण देखें",
    "projects.liveDemo": "लाइव डेमो",
    "projects.next": "अगला",
    "projects.previous": "पिछला",
    "projects.page": "पृष्ठ",
    "projects.of": "का",

    // Contact Section
    "contact.title": "संपर्क में रहें",
    "contact.subtitle":
      "अपना अगला प्रोजेक्ट शुरू करने के लिए तैयार हैं? आइए चर्चा करते हैं कि हम कैसे मिलकर आपके विचारों को साकार कर सकते हैं।",
    "contact.send": "संदेश भेजें",
    "contact.emailNow": "अभी ईमेल करें",
    "contact.whatsapp": "व्हाट्सऐप करें",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.education": "Educación",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.welcome": "👋 Bienvenido a mi portafolio",
    "hero.name": "MD Fardous",
    "hero.intro": "Hola, soy",
    "hero.role.prefix": "Soy un",
    "hero.roles.webDeveloper": "Desarrollador Web",
    "hero.roles.mernDeveloper": "Desarrollador MERN Stack",
    "hero.roles.frontendSpecialist": "Especialista Frontend",
    "hero.roles.problemSolver": "Solucionador de Problemas",
    "hero.roles.mathGraduate": "Graduado en Matemáticas",
    "hero.description":
      "Graduado en Matemáticas en transición al desarrollo web. Creo aplicaciones responsivas y fáciles de usar utilizando el stack MERN y tecnologías web modernas.",
    "hero.downloadResume": "Descargar CV",
    "hero.viewWork": "Ver Mi Trabajo",
    "hero.scrollDown": "Desplázate Hacia Abajo",

    // Skills Section
    "skills.title": "Habilidades y Experiencia",
    "skills.subtitle":
      "Una muestra completa de mi arsenal técnico y competencias profesionales",
    "skills.frontend": "Tecnologías Frontend",
    "skills.backend": "Backend y Base de Datos",
    "skills.tools": "Herramientas y Flujo de Trabajo",
    "skills.soft": "Habilidades Blandas",
    "skills.technologies": "Tecnologías que Domino",

    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.subtitle":
      "Mostrando mi mejor trabajo en desarrollo web con tecnologías de vanguardia y soluciones innovadoras",
    "projects.viewDetails": "Ver Detalles",
    "projects.liveDemo": "Demo en Vivo",
    "projects.next": "Siguiente",
    "projects.previous": "Anterior",
    "projects.page": "Página",
    "projects.of": "de",

    // Contact Section
    "contact.title": "Ponte en Contacto",
    "contact.subtitle":
      "¿Listo para comenzar tu próximo proyecto? Hablemos sobre cómo podemos trabajar juntos para hacer realidad tus ideas.",
    "contact.send": "Enviar Mensaje",
    "contact.emailNow": "Envíame un Email",
    "contact.whatsapp": "WhatsApp",
  },

  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.education": "Educação",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero Section
    "hero.welcome": "👋 Bem-vindo ao meu portfólio",
    "hero.name": "MD Fardous",
    "hero.intro": "Olá, eu sou",
    "hero.role.prefix": "Eu sou um",
    "hero.roles.webDeveloper": "Desenvolvedor Web",
    "hero.roles.mernDeveloper": "Desenvolvedor MERN Stack",
    "hero.roles.frontendSpecialist": "Especialista Frontend",
    "hero.roles.problemSolver": "Solucionador de Problemas",
    "hero.roles.mathGraduate": "Graduado em Matemática",
    "hero.description":
      "Graduado em Matemática fazendo transição para desenvolvimento web. Crio aplicações responsivas e amigáveis ao usuário usando o stack MERN e tecnologias web modernas.",
    "hero.downloadResume": "Baixar Currículo",
    "hero.viewWork": "Ver Meu Trabalho",
    "hero.scrollDown": "Role Para Baixo",

    // Skills Section
    "skills.title": "Habilidades e Expertise",
    "skills.subtitle":
      "Uma demonstração abrangente do meu arsenal técnico e competências profissionais",
    "skills.frontend": "Tecnologias Frontend",
    "skills.backend": "Backend e Banco de Dados",
    "skills.tools": "Ferramentas e Fluxo de Trabalho",
    "skills.soft": "Habilidades Interpessoais",
    "skills.technologies": "Tecnologias que Domino",

    // Projects Section
    "projects.title": "Projetos em Destaque",
    "projects.subtitle":
      "Mostrando meu melhor trabalho em desenvolvimento web com tecnologias de ponta e soluções inovadoras",
    "projects.viewDetails": "Ver Detalhes",
    "projects.liveDemo": "Demo Ao Vivo",
    "projects.next": "Próximo",
    "projects.previous": "Anterior",
    "projects.page": "Página",
    "projects.of": "de",

    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.subtitle":
      "Pronto para começar seu próximo projeto? Vamos discutir como podemos trabalhar juntos para dar vida às suas ideias.",
    "contact.send": "Enviar Mensagem",
    "contact.emailNow": "Me Envie um Email",
    "contact.whatsapp": "WhatsApp",
  },

  la: {
    // Navigation
    "nav.home": "Domus",
    "nav.about": "De Me",
    "nav.skills": "Artes",
    "nav.education": "Educatio",
    "nav.experience": "Experientia",
    "nav.projects": "Opera",
    "nav.contact": "Contactus",

    // Hero Section
    "hero.welcome": "👋 Salve ad meum portfolio",
    "hero.name": "MD Fardous",
    "hero.intro": "Salve, ego sum",
    "hero.role.prefix": "Ego sum",
    "hero.roles.webDeveloper": "Developer Web",
    "hero.roles.mernDeveloper": "Developer MERN Stack",
    "hero.roles.frontendSpecialist": "Specialist Frontend",
    "hero.roles.problemSolver": "Solutor Problematum",
    "hero.roles.mathGraduate": "Graduatus Mathematicae",
    "hero.description":
      "Graduatus Mathematicae ad development web transiens. Creo applicationes responsivas et user-friendly utens MERN stack et technologias web modernas.",
    "hero.downloadResume": "Curriculum Vitae Descende",
    "hero.viewWork": "Vide Opus Meum",
    "hero.scrollDown": "Deorsum Volve",

    // Skills Section
    "skills.title": "Artes et Peritia",
    "skills.subtitle":
      "Demonstratio comprehensiva mei arsenalis technici et competentiarum professionalium",
    "skills.frontend": "Technologiae Frontend",
    "skills.backend": "Backend et Database",
    "skills.tools": "Instrumenta et Workflow",
    "skills.soft": "Artes Molles",
    "skills.technologies": "Technologiae quas Dominor",

    // Projects Section
    "projects.title": "Opera Praecipua",
    "projects.subtitle":
      "Demonstrans optimum opus meum in development web cum technologiis modernis et solutionibus innovativis",
    "projects.viewDetails": "Vide Particularia",
    "projects.liveDemo": "Demo Vivum",
    "projects.next": "Proximus",
    "projects.previous": "Prior",
    "projects.page": "Pagina",
    "projects.of": "ex",

    // Contact Section
    "contact.title": "Contactum Fac",
    "contact.subtitle":
      "Paratus es ad proximum projectum incipere? Colloquamur quomodo simul laborare possimus ad tuas ideas vitam dare.",
    "contact.send": "Nuntium Mitte",
    "contact.emailNow": "Email Nunc Mitte",
    "contact.whatsapp": "WhatsApp",
  },

  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.education": "Bildung",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.welcome": "👋 Willkommen zu meinem Portfolio",
    "hero.name": "MD Fardous",
    "hero.intro": "Hallo, ich bin",
    "hero.role.prefix": "Ich bin ein",
    "hero.roles.webDeveloper": "Web-Entwickler",
    "hero.roles.mernDeveloper": "MERN Stack Entwickler",
    "hero.roles.frontendSpecialist": "Frontend-Spezialist",
    "hero.roles.problemSolver": "Problemlöser",
    "hero.roles.mathGraduate": "Mathematik-Absolvent",
    "hero.description":
      "Mathematik-Absolvent im Übergang zur Webentwicklung. Ich erstelle responsive, benutzerfreundliche Anwendungen mit dem MERN-Stack und modernen Web-Technologien.",
    "hero.downloadResume": "Lebenslauf herunterladen",
    "hero.viewWork": "Meine Arbeit ansehen",
    "hero.scrollDown": "Nach unten scrollen",

    // Skills Section
    "skills.title": "Fähigkeiten & Expertise",
    "skills.subtitle":
      "Eine umfassende Darstellung meines technischen Arsenals und meiner beruflichen Kompetenzen",
    "skills.frontend": "Frontend-Technologien",
    "skills.backend": "Backend & Datenbank",
    "skills.tools": "Tools & Workflow",
    "skills.soft": "Soft Skills",
    "skills.technologies": "Technologien, die ich beherrsche",

    // Projects Section
    "projects.title": "Ausgewählte Projekte",
    "projects.subtitle":
      "Präsentation meiner besten Arbeit in der Webentwicklung mit modernsten Technologien",
    "projects.viewDetails": "Details anzeigen",
    "projects.liveDemo": "Live-Demo",
    "projects.next": "Weiter",
    "projects.previous": "Zurück",
    "projects.page": "Seite",
    "projects.of": "von",

    // Contact Section
    "contact.title": "Kontakt aufnehmen",
    "contact.send": "Nachricht senden",
    "contact.emailNow": "Jetzt E-Mail senden",
    "contact.whatsapp": "WhatsApp",
  },

  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.skills": "المهارات",
    "nav.education": "التعليم",
    "nav.experience": "الخبرة",
    "nav.projects": "المشاريع",
    "nav.contact": "التواصل",

    // Hero Section
    "hero.welcome": "👋 مرحباً بك في معرض أعمالي",
    "hero.name": "محمد فردوس",
    "hero.intro": "مرحباً، أنا",
    "hero.role.prefix": "أنا",
    "hero.roles.webDeveloper": "مطور ويب",
    "hero.roles.mernDeveloper": "مطور MERN Stack",
    "hero.roles.frontendSpecialist": "متخصص واجهات أمامية",
    "hero.roles.problemSolver": "حلال مشاكل",
    "hero.roles.mathGraduate": "خريج رياضيات",
    "hero.description":
      "خريج رياضيات ينتقل إلى تطوير الويب. أقوم بإنشاء تطبيقات متجاوبة وسهلة الاستخدام باستخدام MERN stack والتقنيات الحديثة.",
    "hero.downloadResume": "تحميل السيرة الذاتية",
    "hero.viewWork": "عرض أعمالي",
    "hero.scrollDown": "انتقل للأسفل",

    // Skills Section
    "skills.title": "المهارات والخبرات",
    "skills.subtitle": "عرض شامل لترسانتي التقنية وكفاءاتي المهنية",
    "skills.frontend": "تقنيات الواجهة الأمامية",
    "skills.backend": "الخادم وقاعدة البيانات",
    "skills.tools": "الأدوات وسير العمل",
    "skills.soft": "المهارات الناعمة",
    "skills.technologies": "التقنيات التي أتقنها",

    // Projects Section
    "projects.title": "المشاريع المميزة",
    "projects.subtitle":
      "عرض أفضل أعمالي في تطوير الويب بأحدث التقنيات والحلول المبتكرة",
    "projects.viewDetails": "عرض التفاصيل",
    "projects.liveDemo": "عرض مباشر",
    "projects.next": "التالي",
    "projects.previous": "السابق",
    "projects.page": "صفحة",
    "projects.of": "من",

    // Contact Section
    "contact.title": "تواصل معي",
    "contact.send": "إرسال رسالة",
    "contact.emailNow": "راسلني الآن",
    "contact.whatsapp": "واتساب",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.education": "Éducation",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero Section
    "hero.welcome": "👋 Bienvenue dans mon portfolio",
    "hero.name": "MD Fardous",
    "hero.intro": "Salut, je suis",
    "hero.role.prefix": "Je suis un",
    "hero.roles.webDeveloper": "Développeur Web",
    "hero.roles.mernDeveloper": "Développeur MERN Stack",
    "hero.roles.frontendSpecialist": "Spécialiste Frontend",
    "hero.roles.problemSolver": "Résolveur de Problèmes",
    "hero.roles.mathGraduate": "Diplômé en Mathématiques",
    "hero.description":
      "Diplômé en mathématiques en transition vers le développement web. Je crée des applications responsives et conviviales en utilisant la pile MERN et les technologies web modernes.",
    "hero.downloadResume": "Télécharger le CV",
    "hero.viewWork": "Voir Mon Travail",
    "hero.scrollDown": "Faire défiler vers le bas",

    // Skills Section
    "skills.title": "Compétences et Expertise",
    "skills.subtitle":
      "Une présentation complète de mon arsenal technique et de mes compétences professionnelles",
    "skills.frontend": "Technologies Frontend",
    "skills.backend": "Backend et Base de Données",
    "skills.tools": "Outils et Flux de Travail",
    "skills.soft": "Compétences Douces",
    "skills.technologies": "Technologies que je Maîtrise",

    // Projects Section
    "projects.title": "Projets en Vedette",
    "projects.subtitle":
      "Présentation de mon meilleur travail en développement web avec des technologies de pointe",
    "projects.viewDetails": "Voir les Détails",
    "projects.liveDemo": "Démo en Direct",
    "projects.next": "Suivant",
    "projects.previous": "Précédent",
    "projects.page": "Page",
    "projects.of": "de",

    // Contact Section
    "contact.title": "Entrer en Contact",
    "contact.send": "Envoyer le Message",
    "contact.emailNow": "M'envoyer un Email",
    "contact.whatsapp": "WhatsApp",
  },

  it: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "Chi Sono",
    "nav.skills": "Competenze",
    "nav.education": "Educazione",
    "nav.experience": "Esperienza",
    "nav.projects": "Progetti",
    "nav.contact": "Contatto",

    // Hero Section
    "hero.welcome": "👋 Benvenuto nel mio portfolio",
    "hero.name": "MD Fardous",
    "hero.intro": "Ciao, sono",
    "hero.role.prefix": "Sono un",
    "hero.roles.webDeveloper": "Sviluppatore Web",
    "hero.roles.mernDeveloper": "Sviluppatore MERN Stack",
    "hero.roles.frontendSpecialist": "Specialista Frontend",
    "hero.roles.problemSolver": "Risolutore di Problemi",
    "hero.roles.mathGraduate": "Laureato in Matematica",
    "hero.description":
      "Laureato in matematica in transizione verso lo sviluppo web. Creo applicazioni responsive e user-friendly utilizzando lo stack MERN e tecnologie web moderne.",
    "hero.downloadResume": "Scarica CV",
    "hero.viewWork": "Vedi il Mio Lavoro",
    "hero.scrollDown": "Scorri Verso il Basso",

    // Skills Section
    "skills.title": "Competenze ed Esperienza",
    "skills.subtitle":
      "Una presentazione completa del mio arsenale tecnico e delle competenze professionali",
    "skills.frontend": "Tecnologie Frontend",
    "skills.backend": "Backend e Database",
    "skills.tools": "Strumenti e Flusso di Lavoro",
    "skills.soft": "Competenze Trasversali",
    "skills.technologies": "Tecnologie che Padroneggio",

    // Projects Section
    "projects.title": "Progetti in Evidenza",
    "projects.subtitle":
      "Mostrando il mio miglior lavoro nello sviluppo web con tecnologie all'avanguardia",
    "projects.viewDetails": "Vedi Dettagli",
    "projects.liveDemo": "Demo Live",
    "projects.next": "Avanti",
    "projects.previous": "Indietro",
    "projects.page": "Pagina",
    "projects.of": "di",

    // Contact Section
    "contact.title": "Mettiti in Contatto",
    "contact.send": "Invia Messaggio",
    "contact.emailNow": "Inviami una Email",
    "contact.whatsapp": "WhatsApp",
  },

  ja: {
    // Navigation
    "nav.home": "ホーム",
    "nav.about": "私について",
    "nav.skills": "スキル",
    "nav.education": "教育",
    "nav.experience": "経験",
    "nav.projects": "プロジェクト",
    "nav.contact": "お問い合わせ",

    // Hero Section
    "hero.welcome": "👋 私のポートフォリオへようこそ",
    "hero.name": "MD ファルドゥス",
    "hero.intro": "こんにちは、私は",
    "hero.role.prefix": "私は",
    "hero.roles.webDeveloper": "ウェブ開発者",
    "hero.roles.mernDeveloper": "MERNスタック開発者",
    "hero.roles.frontendSpecialist": "フロントエンド専門家",
    "hero.roles.problemSolver": "問題解決者",
    "hero.roles.mathGraduate": "数学卒業生",
    "hero.description":
      "ウェブ開発に転向している数学卒業生。MERNスタックと最新のウェブ技術を使用して、レスポンシブでユーザーフレンドリーなアプリケーションを作成します。",
    "hero.downloadResume": "履歴書をダウンロード",
    "hero.viewWork": "私の作品を見る",
    "hero.scrollDown": "下にスクロール",

    // Skills Section
    "skills.title": "スキルと専門知識",
    "skills.subtitle": "私の技術的な武器庫と専門的な能力の包括的な紹介",
    "skills.frontend": "フロントエンド技術",
    "skills.backend": "バックエンドとデータベース",
    "skills.tools": "ツールとワークフロー",
    "skills.soft": "ソフトスキル",
    "skills.technologies": "習得している技術",

    // Projects Section
    "projects.title": "注目のプロジェクト",
    "projects.subtitle":
      "最先端技術と革新的ソリューションによるウェブ開発での最高の作品を紹介",
    "projects.viewDetails": "詳細を見る",
    "projects.liveDemo": "ライブデモ",
    "projects.next": "次へ",
    "projects.previous": "前へ",
    "projects.page": "ページ",
    "projects.of": "/",

    // Contact Section
    "contact.title": "お問い合わせ",
    "contact.send": "メッセージを送信",
    "contact.emailNow": "今すぐメール",
    "contact.whatsapp": "WhatsApp",
  },

  ko: {
    // Navigation
    "nav.home": "홈",
    "nav.about": "소개",
    "nav.skills": "기술",
    "nav.education": "교육",
    "nav.experience": "경험",
    "nav.projects": "프로젝트",
    "nav.contact": "연락처",

    // Hero Section
    "hero.welcome": "👋 제 포트폴리오에 오신 것을 환영합니다",
    "hero.name": "MD 파르두스",
    "hero.intro": "안녕하세요, 저는",
    "hero.role.prefix": "저는",
    "hero.roles.webDeveloper": "웹 개발자",
    "hero.roles.mernDeveloper": "MERN 스택 개발자",
    "hero.roles.frontendSpecialist": "프론트엔드 전문가",
    "hero.roles.problemSolver": "문제 해결사",
    "hero.roles.mathGraduate": "수학 졸업생",
    "hero.description":
      "웹 개발로 전환하고 있는 수학 졸업생입니다. MERN 스택과 최신 웹 기술을 사용하여 반응형이고 사용자 친화적인 애플리케이션을 만듭니다.",
    "hero.downloadResume": "이력서 다운로드",
    "hero.viewWork": "제 작업 보기",
    "hero.scrollDown": "아래로 스크롤",

    // Skills Section
    "skills.title": "기술 및 전문성",
    "skills.subtitle": "제 기술적 무기고와 전문적 역량의 포괄적인 소개",
    "skills.frontend": "프론트엔드 기술",
    "skills.backend": "백엔드 및 데이터베이스",
    "skills.tools": "도구 및 워크플로우",
    "skills.soft": "소프트 스킬",
    "skills.technologies": "제가 마스터한 기술들",

    // Projects Section
    "projects.title": "주요 프로젝트",
    "projects.subtitle":
      "최첨단 기술과 혁신적인 솔루션으로 웹 개발에서의 최고 작품을 선보입니다",
    "projects.viewDetails": "세부사항 보기",
    "projects.liveDemo": "라이브 데모",
    "projects.next": "다음",
    "projects.previous": "이전",
    "projects.page": "페이지",
    "projects.of": "/",

    // Contact Section
    "contact.title": "연락하기",
    "contact.send": "메시지 보내기",
    "contact.emailNow": "지금 이메일 보내기",
    "contact.whatsapp": "왓츠앱",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
