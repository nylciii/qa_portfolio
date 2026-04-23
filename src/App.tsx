import heroImg from "./assets/hero.png";
import bg from "./assets/bg.jpg";
import agileCourse from "./assets/agileCourse.png";
import softwareTest from "./assets/softwareTest.png";
import automation from "./assets/Automation.png";
import webDesign from "./assets/webDesign.png";
import reactJs from "./assets/React_Js.png";
import linux from "./assets/Linux.png";
import redhat from "./assets/Redhat.png";
import qaAutomation from "./assets/QA_Automation.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = ["Home", "About", "Skills", "Experience", "Certificates", "Contact"];

const devTech = [
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Python",
  "PHP",
  "Laravel",
  "C++",
  "MySQL",
];

const qaTools = [
  "Postman",
  "Selenium",
  "Cypress",
  "Robot Framework",
  "Katalon Studio",
  "JIRA",
];

const certificates = [
  {
    title: "Software Processes and Agile Practices",
    image: agileCourse,
  },
  {
    title: "Introduction to Software Testing",
    image: softwareTest,
  },
  {
    title: "The Complete AI Agents & AI Automation Course (2025) - n8n",
    image: automation,
  },
  {
    title: "Legacy Responsive Web Design V8",
    image: webDesign,
  },
  {
    title: "React JS Fundamentals",
    image: reactJs,
  },
  {
    title: "Linux Level 1",
    image: linux,
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    image: redhat,
  },
  {
    title: "The Complete 2026 Software Testing Bootcamp",
    image: qaAutomation,
  },
];

function App() {
  const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null);

  return (
    <div
      className="min-h-screen scroll-smooth text-gray-800 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center text-white text-sm font-medium">
                {selectedCert.title}
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 w-9 h-9 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-500 hover:text-white transition text-lg font-bold"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-10 md:px-20 py-5 backdrop-blur-md bg-white/40 border-b border-gray-200">
        <h1 className="text-cyan-600 font-bold text-2xl tracking-widest">
          Scherz<span className="text-gray-800">Code</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-600 text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-600 relative group transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-32 pb-20 gap-12"
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <h4 className="text-cyan-600 text-sm mb-3 tracking-widest">
            HI THERE,
          </h4>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Junior QA <br />
            <span className="text-cyan-600">Automation Engineer</span>
          </h1>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            I build automated tests using Playwright and Selenium, focusing on improving
            software quality through real-world projects.
          </p>

          <div className="flex gap-4">
            <button className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:scale-105 hover:shadow-cyan-500/30 active:scale-95 transition-all duration-200">
              View Projects
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:border-cyan-500 hover:text-cyan-600 transition">
              GitHub
            </button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] flex items-center justify-center"
        >
          {/* glow BEHIND */}
          <div className="absolute w-full h-full rounded-full bg-cyan-400/10 blur-3xl -z-10"></div>

          <img
            src={heroImg}
            alt="hero"
            className="w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-lg"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="px-10 md:px-20 py-20 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-cyan-600">About Me</h2>

        <p className="text-gray-600 leading-relaxed">
          I am a Computer Engineering graduate from the University of San Carlos – Talamban Campus,
          currently pursuing a career as a Junior QA Automation Engineer. I have a background in
          backend and automation development, giving me a strong understanding of how systems work
          and how to design effective and maintainable test solutions.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="px-10 md:px-20 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-10 text-cyan-600">
          Technologies & Tools
        </h2>

        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4">Development</h3>

          <div className="flex flex-wrap gap-4 text-sm">
            {devTech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-gray-200 rounded-lg bg-white/60 backdrop-blur-sm hover:border-cyan-500 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">QA & Automation</h3>

          <div className="flex flex-wrap gap-4 text-sm">
            {qaTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 border border-cyan-200 rounded-lg bg-cyan-50 hover:bg-cyan-100 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        className="px-10 md:px-20 py-20 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-10 text-cyan-600">
          Experience
        </h2>

        <div className="space-y-10">
          <div className="bg-white/70 border border-gray-200 p-6 rounded-2xl backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">
              Backend Intern – Focus Bear
            </h3>
            <ul className="text-gray-600 list-disc ml-5 space-y-1">
              <li>Assisted in backend development and system improvements</li>
              <li>Worked with APIs and contributed to feature implementations</li>
              <li>Gained experience in debugging backend services</li>
            </ul>
          </div>

          <div className="bg-white/70 border border-gray-200 p-6 rounded-2xl backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">
              AI Analyst – Innodata
            </h3>
            <ul className="text-gray-600 list-disc ml-5 space-y-1">
              <li>Performed data analysis and annotation</li>
              <li>Ensured data quality for ML models</li>
              <li>Improved workflows with team collaboration</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* CERTIFICATES */}
      <motion.section
        id="certificates"
        className="px-10 md:px-20 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-10 text-cyan-600">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer bg-white/70 border border-gray-200 rounded-2xl overflow-hidden backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-full h-52 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition p-2"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="px-10 md:px-20 py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-cyan-600">
          Let's Connect
        </h2>

        <p className="text-gray-600 mb-6">
          Minglanilla, Cebu, Philippines
        </p>

        <div className="flex justify-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-cyan-600">Portfolio</a>
          <a href="#" className="hover:text-cyan-600">LinkedIn</a>
          <a href="#" className="hover:text-cyan-600">GitHub</a>
          <a href="#" className="hover:text-cyan-600">Email</a>
        </div>
      </motion.section>
    </div>
  );
}

export default App;