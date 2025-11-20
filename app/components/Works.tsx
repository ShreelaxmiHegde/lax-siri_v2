const projects = [
  {
    title: "Accommate",
    description: "A Full-Stack accommodation platform for students to find and book stays near their campus.",
    imgUrl: "project1.png",
    tech: ["MERN", "Render", "Cloudinary", "Passport.js", "MVC Framework"],
    demo: "https://accommate.onrender.com/Accommate",
    repo: "https://github.com/ShreelaxmiHegde/Accommate"
  }
];

export default function Projects() {
  return (
    <section id="works" className="section" >
      <span className="section-name">Works</span>

      <div className="mt-8">
        {projects.map(p => (
          <div key={p.title} className="card grid md:grid-cols-2 gap-3 w-[90%] md:w-auto">
            <img src={p.imgUrl} alt="accommate-dashboard" className="rounded-xl" />
            <div className="flex flex-col justify-between">
              <h3 className="text-2xl font-bold mt-3 text-[#039bfc]">
                {p.title}
                <span className="project-badge">● E-Commerce</span>
              </h3>
              <p className="mt-2 text-gray-300">{p.description}</p>
              <p className="mt-2 text-gray-400 text-sm">
                ▸ User Authentication and Authorization
                <br />
                ▸ CRUD operations on Listings
                <br />
                ▸ Ratings and Reviews...
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {p.tech?.map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={p.demo}
                  target="_blank"
                  className="project-btn"
                >
                  Visit website
                  <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  className="project-btn"
                >
                  Github Repo
                  <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
