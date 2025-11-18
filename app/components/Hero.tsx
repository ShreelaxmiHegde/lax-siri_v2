export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Full-Stack Developer <br />
        building real products.
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        I specialize in MERN stack, solving real-world problems, contributing to open source,
        and building scalable web applications.
      </p>

      <div className="w-50 h-50 rounded-full overflow-hidden shadow-md">
        <img 
          src="/dev-img.png" 
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      <a
        href="#projects"
        className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-lg"
      >
        View My Work
      </a>
    </section>
  );
}
