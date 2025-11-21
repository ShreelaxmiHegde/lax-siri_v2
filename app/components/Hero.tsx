export default function Hero() {
  return (
    <section id="about" className="section min-h-screen grid grid-cols-1 md:grid-cols-2 items-center">
      {/* animation */}
      <div className="absolute w-48 h-48 bg-[#0379fc] rounded-full blur-[90px] opacity-20 top-20 left-10"></div>

      {/* Left - Text */}
      <div className="space-y-6 order-2 md:order-1">
        <h1 className="text-4xl md:text-6xl text-center md:text-left font-bold leading-tight">
          Full-Stack Developer Building
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0379fc] to-[#22ffd7]">
            {" "}Scalable Web Apps
          </span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg text-center md:text-left">
          MERN · APIs · AI/ML Integration · Clean Architecture
        </p>

        <p className="text-gray-400 text-sm md:text-lg max-w-xl text-center md:text-left">
          I build end-to-end web applications with focus on performance, UI clarity, and real-world system design.
        </p>

        <div className="flex gap-4 pt-2 flex-wrap justify-center md:justify-start">
          <a
            href="#works"
            className="px-6 py-3 font-black rounded-lg bg-gradient-to-r from-[#0379fc] to-[#22ffd7] text-black hover:opacity-90 transition"
          >
            View Works
          </a>

          {/* <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
          >
            Resume
          </a> */}

          <div className="flex gap-4 items-center bg-neutral-900/40 backdrop-blur-md px-3 py-2 rounded-full border border-neutral-700 shadow-lg">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/shreelaxmi-hegde-832168358"
              className="media-btn text-[#0862b0]"
            >
              <i className="fa-brands fa-linkedin-in text-3xl"></i>
            </a>

            {/* GitHub */}
            <a href="https://github.com/ShreelaxmiHegde"
              className="media-btn text-white"
            >
              <i className="fa-brands fa-github text-3xl"></i>
            </a>

            {/* Email */}
            <a href="mailto:shreelaxmihegde9@gmail.com"
              className="media-btn text-[#35a4ea]"
            >
              <i className="fa-solid fa-envelope text-3xl"></i>
            </a>

            {/* Dev.to */}
            <a href="https://dev.to/shreelaxmihegde"
              className="media-btn text-white"
            >
              <i className="fa-brands fa-dev text-3xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right - Profile Photo */}
      <div className="flex justify-center order-1 md:order-2">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-[3px] bg-gradient-to-r from-[#0379fc] to-[#22ffd7]">
          <img
            src="/dev-img.png"
            alt="Profile"
            className="w-full h-full rounded-full object-cover bg-neutral-900"
          />
        </div>
      </div>
    </section>
  );
}
