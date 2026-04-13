import heroImg from "./assets/hero.png";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#0f172a]/85"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-10 md:px-20 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
          
          {/* LOGO */}
          <h1 className="text-cyan-400 font-bold text-2xl tracking-widest">
            Scherz<span className="text-white">Code</span>
          </h1>

          {/* NAV LINKS */}
          <ul className="hidden md:flex gap-8 text-gray-300 text-sm">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-28 md:py-36 gap-12">

          {/* LEFT SIDE */}
          <div className="max-w-lg">
            <h4 className="text-cyan-400 font-semibold mb-3 tracking-widest text-sm">
              HI THERE,
            </h4>

            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4 tracking-tight drop-shadow-lg">
              Junior QA <br />
              <span className="text-cyan-400">Automation Engineer</span>
            </h1>

            <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
              I build automated tests using Playwright and Selenium, focusing on improving
              software quality through real-world projects.
            </p>

            <div className="flex gap-4">
              <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-medium hover:scale-105 shadow-lg shadow-cyan-400/30 transition">
                View Projects
              </button>

              <button className="border border-gray-400 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition">
                GitHub
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="hero"
              className="w-[180px] md:w-[260px] rounded-full border-4 border-cyan-400/30 shadow-2xl shadow-cyan-400/20 hover:scale-105 transition"
            />
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;