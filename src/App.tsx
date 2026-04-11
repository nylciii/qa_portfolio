import heroImg from "./assets/hero.png";

function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-green-400 font-bold text-2xl">
          Donyl
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">About</li>
          <li className="hover:text-green-400 cursor-pointer">Skills</li>
          <li className="hover:text-green-400 cursor-pointer">Projects</li>
          <li className="hover:text-green-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">

        <div className="max-w-xl">
          <h4 className="text-green-400 mb-2">HI THERE,</h4>

          <h1 className="text-4xl font-bold mb-4">
            Junior QA Automation Engineer
          </h1>

          <p className="text-gray-400 mb-6">
            I build automated tests using Playwright and Selenium,
            focusing on improving software quality through real-world projects.
          </p>

          <button className="bg-green-400 text-black px-5 py-2 rounded">
            View Projects
          </button>
        </div>

        <img
          src={heroImg}
          className="w-[220px] rounded-full mt-10 md:mt-0"
        />

      </section>
    </div>
  );
}

export default App;