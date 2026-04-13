import heroImg from "./assets/hero.png";
import bg from "./assets/bg.jpg";

const navItems = ["Home", "About", "Skills", "Experience", "Contact"];

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

function App() {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-10 md:px-20 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
          <h1 className="text-cyan-400 font-bold text-2xl tracking-widest">
            Scherz<span className="text-white">Code</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-gray-300 text-sm">
            {navItems.map((item) => (
              <li key={item} className="hover:text-cyan-400 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-28 md:py-36 gap-12">

          {/* LEFT */}
          <div className="max-w-lg">
            <h4 className="text-cyan-400 text-sm mb-3 tracking-widest">
              HI THERE,
            </h4>

            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
              Junior QA <br />
              <span className="text-cyan-400">Automation Engineer</span>
            </h1>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I build automated tests using Playwright and Selenium, focusing on improving
              software quality through real-world projects.
            </p>

            <div className="flex gap-4">
              <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-medium shadow-lg shadow-cyan-400/30 hover:scale-105 transition">
                View Projects
              </button>

              <button className="border border-gray-400 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition">
                GitHub
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE (FIXED LOOK) */}
          <div className="relative">
            {/* soft glow */}
            <div className="absolute inset-0 rounded-full blur-2xl bg-cyan-400/20"></div>

            <img
              src={heroImg}
              alt="hero"
              className="relative w-[200px] md:w-[260px] rounded-full 
              border-4 border-cyan-400/40 shadow-xl object-cover"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section className="px-10 md:px-20 py-20 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-400">About Me</h2>

          <p className="text-gray-300 leading-relaxed">
            I am a Computer Engineering graduate from the University of San Carlos – Talamban Campus,
            currently pursuing a career as a Junior QA Automation Engineer. I have a background in
            backend and automation development, giving me a strong understanding of how systems work
            and how to design effective and maintainable test solutions. I am continuously building
            my skills in automation testing, API testing, and modern testing frameworks.
          </p>
        </section>

        {/* SKILLS */}
        <section className="px-10 md:px-20 py-20">
          <h2 className="text-2xl font-semibold mb-10 text-cyan-400">
            Technologies & Tools
          </h2>

          {/* DEV */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-white">Development</h3>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              {devTech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:border-cyan-400 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* QA */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">QA & Automation</h3>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              {qaTools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 border border-cyan-400/20 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="px-10 md:px-20 py-20 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-10 text-cyan-400">
            Experience
          </h2>

          <div className="space-y-10">

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-cyan-400/30 transition">
              <h3 className="font-semibold text-lg mb-2">
                Backend Intern – Focus Bear
              </h3>
              <ul className="text-gray-300 list-disc ml-5 space-y-1">
                <li>Assisted in backend development and system improvements</li>
                <li>Worked with APIs and contributed to feature implementations</li>
                <li>Gained experience in debugging and maintaining backend services</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-cyan-400/30 transition">
              <h3 className="font-semibold text-lg mb-2">
                AI Analyst – Innodata
              </h3>
              <ul className="text-gray-300 list-disc ml-5 space-y-1">
                <li>Performed data analysis and annotation for AI systems</li>
                <li>Ensured data accuracy and quality for machine learning models</li>
                <li>Collaborated with teams to improve AI outputs and workflows</li>
              </ul>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section className="px-10 md:px-20 py-20 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
            Let's Connect
          </h2>

          <p className="text-gray-300 mb-6">
            Minglanilla, Cebu, Philippines
          </p>

          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-cyan-400 transition">Portfolio</a>
            <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="#" className="hover:text-cyan-400 transition">Email</a>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;