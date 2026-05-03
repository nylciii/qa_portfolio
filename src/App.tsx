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
import backendInternCert from "./assets/BackendIntern_Cert.png";
import stm from "./assets/STM.png";
import stm2 from "./assets/STM2.png";
import expenseTracker from "./assets/Expense_Tracker.png";
import expenseList from "./assets/Expense_List.png";
import gaussMenu from "./assets/gaussseidelmenu.png";
import gauss3x3 from "./assets/gaussseidel3x3.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = ["Home", "Skills", "Experience", "Projects", "Certificates", "Contact"];

const devTech = [
  "React", "Node.js", "JavaScript", "TypeScript",
  "Tailwind", "Python", "PHP", "Laravel", "C++", "MySQL",
];

const qaTools = [
  "Postman", "Selenium", "Cypress", "Katalon Studio", "JIRA",
];

const certificates = [
  { title: "Software Processes and Agile Practices", image: agileCourse },
  { title: "Introduction to Software Testing", image: softwareTest },
  { title: "The Complete AI Agents & AI Automation Course (2025) - n8n", image: automation },
  { title: "Legacy Responsive Web Design V8", image: webDesign },
  { title: "React JS Fundamentals", image: reactJs },
  { title: "Linux Level 1", image: linux },
  { title: "Red Hat Certified System Administrator (RHCSA)", image: redhat },
  { title: "The Complete 2026 Software Testing Bootcamp", image: qaAutomation },
  { title: "Backend Engineering Internship – Focus Bear", image: backendInternCert },
];

const projects = [
  {
    title: "Septic Tank Monitoring System",
    type: "Thesis",
    tags: ["IoT", "Arduino", "Firebase", "ESP32", "LoRa", "GSM", "Unit Testing", "System Testing"],
    bullets: [
      "Developed an IoT system using Arduino, Ultrasonic Sensor, ESP32, LoRa, GSM, and Firebase.",
      "Designed and executed unit, integration, and system test cases.",
      "Verified data transmission and real-time updates from device to web application.",
      "Validated system accuracy and SMS alert functionality.",
    ],
    images: [stm, stm2],
  },
  {
    title: "Expense Tracker",
    type: "Personal",
    tags: ["React", "CRUD", "Functionality Testing", "Static Testing"],
    bullets: [
      "Built a simple responsive expense tracker with CRUD functionality.",
      "Created and executed test cases for income/expense logic, including edge cases.",
      "Identified and debugged UI and functional issues, improving overall usability and reliability.",
    ],
    images: [expenseTracker, expenseList],
  },
  {
    title: "Circuit Solver Using Gauss-Seidel Method",
    type: "Academic",
    tags: ["Java", "Numerical Methods", "Test Cases", "Validation"],
    bullets: [
      "Executed test cases to validate circuit solutions produced by the Gauss-Seidel method.",
      "Verified accuracy of computed results against expected/manual calculations and known test inputs.",
      "Identified numerical issues and improved reliability of the solver.",
    ],
    images: [gaussMenu, gauss3x3],
  },
];

const experiences = [
  {
    role: "Automation Developer",
    company: "Focus Bear",
    period: "Oct 2025 – Mar 2026",
    bullets: [
      "Started as a backend intern and grew into automation work, developing and maintaining backend services using NestJS.",
      "Investigated and resolved Stripe-related issues, implementing background jobs to handle asynchronous payment processing.",
      "Built automation workflows using Zoho Flow and Google Apps Script to reduce manual operations and improve system consistency.",
    ],
  },
  {
    role: "Software Developer Intern & AI Analyst",
    company: "Innodata Knowledge Services Inc.",
    period: "Feb 2025 – Jun 2025 · Nov 2025 – Feb 2026",
    bullets: [
      "Built features and internal tools using Laravel, CodeIgniter 4, and Python, including multithreaded apps for large data processing.",
      "Implemented secure file handling with MD5 verification and automated document generation with preserved formatting.",
      "Returned as AI Analyst (Contract) — designed and refined prompts to evaluate AI model responses for accuracy, relevance, and safety.",
      "Labeled and curated datasets for AI training, and performed structured validation of AI outputs to support reliable model behavior.",
    ],
  },
  {
    role: "Bachelor of Science in Computer Engineering",
    company: "University of San Carlos – Talamban Campus",
    period: "2021 – 2025",
    bullets: [
      "Graduated with a degree in Computer Engineering.",
      "Thesis: Septic Tank Monitoring System — an IoT-based solution for real-time tank level monitoring.",
      "Officer, Collegiate Engineering Council (CEC).",
    ],
    isEducation: true,
  },
];

// ── Cursor (desktop only) ─────────────────────────────────────────────────────
function CursorEffect() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999]"
      style={{ transform: `translate(${pos.x - 6}px, ${pos.y - 4}px)` }}
    >
      <svg width="18" height="22" viewBox="0 0 20 24" fill="none">
        <path
          d="M2 2L18 10L10 12L7 20L2 2Z"
          fill="rgba(67,56,202,0.12)"
          stroke="rgba(67,56,202,0.85)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ── Mobile Nav ────────────────────────────────────────────────────────────────
function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 flex flex-col py-4 md:hidden shadow-lg"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="px-8 py-3 text-slate-600 font-medium hover:text-indigo-600 hover:bg-indigo-50 transition"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [activeImg, setActiveImg] = useState(0);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col md:flex-row border-t border-slate-200 pt-6 pb-8 gap-6 hover:border-indigo-300 transition-colors duration-300"
    >
      {/* Index number */}
      <div className="flex-shrink-0 w-10 md:w-12">
        <span
          className="text-4xl md:text-5xl font-black leading-none select-none transition-colors duration-300"
          style={{
            color: hovered ? "rgb(67,56,202)" : "rgb(226,232,240)",
            fontFamily: "'Georgia', serif",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="mb-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-1 block">
            {project.type}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight group-hover:text-indigo-700 transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <ul className="space-y-1.5 mb-4">
          {project.bullets.map((b) => (
            <li key={b} className="text-slate-500 text-sm leading-relaxed flex gap-2">
              <span className="text-indigo-400 flex-shrink-0 mt-0.5 font-bold">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image panel */}
      <div className="flex-shrink-0 w-full md:w-64 flex flex-col gap-2">
        <div className="relative w-full h-40 md:h-36 rounded-xl overflow-hidden bg-slate-100 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImg}
              src={project.images[activeImg]}
              alt={`${project.title} screenshot ${activeImg + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>
        </div>
        <div className="flex gap-2">
          {project.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              className={`flex-1 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                idx === activeImg
                  ? "border-indigo-500 shadow-sm shadow-indigo-200"
                  : "border-slate-200 opacity-60 hover:opacity-90 hover:border-indigo-300"
              }`}
            >
              <img src={img} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Animated underline */}
      <div
        className="absolute bottom-0 left-10 md:left-12 h-[1.5px] bg-indigo-500 transition-all duration-500 ease-out"
        style={{ width: hovered ? "calc(100% - 2.5rem)" : "0%" }}
      />
    </motion.div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <div
      className="min-h-screen scroll-smooth text-slate-700 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${bg})`, cursor: isTouch ? "auto" : "none" }}
    >
      <div className="fixed inset-0 bg-white/60 -z-0 pointer-events-none" />
      <CursorEffect />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full rounded-2xl shadow-2xl" />
              <div className="mt-4 text-center text-slate-300 text-sm tracking-wide">{selectedCert.title}</div>
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-500 transition text-lg font-bold"
              >×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 md:py-5 bg-white/70 backdrop-blur-md border-b border-slate-200/80">
        <h1 className="font-black text-xl md:text-2xl tracking-tight text-slate-800" style={{ fontFamily: "'Georgia', serif" }}>
          Scherz<span className="text-indigo-600">Code</span>
        </h1>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-slate-500 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 relative group transition duration-200">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <div className="relative md:hidden">
          <MobileNav />
        </div>
      </nav>

      {/* HOME */}
      <section
        id="home"
        className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-28 md:pt-36 pb-16 md:pb-24 gap-8 min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 md:w-8 h-[2px] bg-indigo-600" />
            <p className="text-xs font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-indigo-600">
              Hi, I'm Donyl Amorganda
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-1 text-slate-900 tracking-tight">
            QA
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-5 tracking-tight text-indigo-600">
            ANALYST
          </h1>
          <div className="w-full h-[1px] bg-slate-200 mb-5" />
          <p className="text-slate-500 mb-4 text-sm md:text-base leading-relaxed">
            Computer Engineering graduate from the University of San Carlos – Talamban Campus.
            I believe that as AI and emerging technologies accelerate software development,
            the need for people who ensure quality and reliability only grows more critical.
            I'm drawn to that responsibility — understanding systems deeply, thinking through
            what could go wrong, and making sure what gets shipped actually works.
          </p>
          <p className="text-slate-400 mb-7 text-xs md:text-sm leading-relaxed border-l-2 border-indigo-400 pl-4">
            Through academic projects, self-driven certifications, and continuous learning,
            I'm building my foundation in QA and automation — embracing the shift toward
            AI-assisted workflows and modern tooling.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="bg-slate-900 text-white px-5 md:px-7 py-2.5 md:py-3 rounded-xl font-bold tracking-wide text-sm hover:bg-indigo-600 active:scale-95 transition-all duration-200 shadow-md"
            >
              VIEW PROJECTS
            </a>
            <a
              href="https://github.com/nylciii"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-300 text-slate-600 px-5 md:px-7 py-2.5 md:py-3 rounded-xl font-bold tracking-wide text-sm hover:border-indigo-500 hover:text-indigo-600 transition duration-200"
            >
              GITHUB
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex-shrink-0 w-[140px] h-[140px] md:w-[200px] md:h-[200px] mx-auto md:mx-0"
        >
          <div className="absolute -inset-1.5 rounded-full border-2 border-indigo-500" />
          <div className="absolute -inset-3 rounded-full border border-indigo-200" />
          <img
            src={heroImg}
            alt="Donyl"
            className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
          />
        </motion.div>
      </section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="relative z-10 px-6 md:px-20 py-16 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-500 mb-2">What I work with</p>
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 md:mb-10" style={{ fontFamily: "'Georgia', serif" }}>
          Technologies & Tools
        </h2>
        <div className="mb-8 md:mb-10">
          <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-semibold">Development</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {devTech.map((tech) => (
              <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 border border-slate-200 rounded-lg bg-white/80 hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50 transition duration-200 text-slate-600 font-medium text-xs md:text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-semibold">QA & Automation</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {qaTools.map((tool) => (
              <span key={tool} className="px-3 md:px-4 py-1.5 md:py-2 border border-indigo-200 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition duration-200 font-medium text-xs md:text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        className="relative z-10 px-6 md:px-20 py-16 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-500 mb-2">Where I've been</p>
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 md:mb-10" style={{ fontFamily: "'Georgia', serif" }}>
          Experience & Education
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-300 via-indigo-100 to-transparent" />
          <div className="space-y-5 pl-10 md:pl-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${exp.company}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`absolute -left-[1.85rem] md:-left-[2.15rem] top-3 w-3 h-3 rounded-full border-2 ${exp.isEducation ? "border-violet-400 bg-violet-100" : "border-indigo-500 bg-indigo-100"}`} />
                <div className={`bg-white/80 border rounded-2xl p-4 md:p-6 backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(67,56,202,0.1)] transition-all duration-300 ${exp.isEducation ? "border-violet-200 hover:border-violet-300" : "border-slate-200 hover:border-indigo-300"}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug">{exp.role}</h3>
                      <p className={`text-xs md:text-sm font-semibold mt-0.5 ${exp.isEducation ? "text-violet-500" : "text-indigo-500"}`}>{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-400 whitespace-nowrap border border-slate-200 px-2.5 py-1 rounded-full bg-slate-50 self-start">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-slate-500 text-xs md:text-sm leading-relaxed flex gap-2">
                        <span className={`flex-shrink-0 font-bold ${exp.isEducation ? "text-violet-400" : "text-indigo-400"}`}>—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="relative z-10 px-6 md:px-20 py-16 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-500 mb-2">Sample Projects</p>
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 md:mb-12" style={{ fontFamily: "'Georgia', serif" }}>
          Projects
        </h2>
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATES */}
      <motion.section
        id="certificates"
        className="relative z-10 px-6 md:px-20 py-16 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-500 mb-2">Credentials</p>
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 md:mb-10" style={{ fontFamily: "'Georgia', serif" }}>
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCert(cert)}
              className="group bg-white/80 border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-300 hover:shadow-[0_4px_24px_rgba(67,56,202,0.1)] hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
              <div className="w-full h-40 md:h-48 bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 md:p-4 flex items-center justify-between gap-2">
                <h3 className="text-xs md:text-sm font-medium text-slate-600 group-hover:text-indigo-700 transition leading-snug">
                  {cert.title}
                </h3>
                <span className="text-slate-300 group-hover:text-indigo-500 transition text-base flex-shrink-0">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="relative z-10 px-6 md:px-20 py-20 md:py-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-500 mb-2">Get in touch</p>
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 md:mb-8" style={{ fontFamily: "'Georgia', serif" }}>
          Let's Connect
        </h2>
        <p className="text-slate-400 mb-1 text-xs tracking-widest uppercase">Minglanilla, Cebu, Philippines</p>
        <p className="text-slate-500 mb-1 text-sm">📞 09564517432</p>
        <p className="text-slate-500 mb-8 text-sm">✉️ dcamorganda@gmail.com</p>
        <div className="flex justify-center gap-6 md:gap-8 text-sm font-medium flex-wrap">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/donylamorganda/" },
            { label: "GitHub", href: "https://github.com/nylciii" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-600 transition duration-200 border-b border-transparent hover:border-indigo-400 pb-0.5"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="mt-12 md:mt-16 text-slate-300 text-xs tracking-widest">
          © 2026 ScHerzCode · Built with React & Tailwind
        </p>
      </motion.section>
    </div>
  );
}

export default App;