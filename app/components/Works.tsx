const projects = [
  {
    title: "Accommate",
    description: "Full-stack An accommodation platform for students to find and book stays near their campus.",
    demo: "https://accommate.onrender.com/Accommate",
    repo: "https://github.com/ShreelaxmiHegde/Accommate",
    tech: ["MERN", "Render", "Cloudinary"]
  },
  {
    title: "Sandhi Splitter",
    description: "AI-powered Sanskrit Sandhi splitting tool with backend API.",
    demo: "https://accommate.onrender.com/Accommate",
    repo: "https://github.com/ShreelaxmiHegde/Accommate"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Works</h2>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.description}</p>
            <div>
              {p.tech?.map(t => (
                <span>{t}</span>
              ))}
            </div>
            <button
              // href={p.demo}
              // target="_blank"
              className="mt-4  text-blue-600 text-sm"
            >
              Visit website
            </button>
            <button
              // href={p.repo}
              // target="_blank"
              className="mt-4 text-blue-600 text-sm"
            >
              Github Repo
            </button>
          </div> 
        ))}
      </div>
    </section>
  );
}
