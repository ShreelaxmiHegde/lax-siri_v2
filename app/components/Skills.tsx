const skills = {
  Core: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
  FamiliarWith: ["TypeScript", "Next.js", "TailwindCSS" ,"Bootstrap", "Material-UI"],
  Tools: ["Git & Github", "Hoppscotch", "Render", "Vercel", "Cloudinary", "Docker"]
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <span className="section-name">Skills & Expertise</span>

      <div className="flex flex-wrap gap-4 mt-8">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="card w-xs max-w-md">
            {category === "Core" ? (
              <div>
                <span className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0379fc] to-[#22ffd7]">
                  <i className="fa-solid fa-code me-2"></i>
                  {category}
                </span>
                <p className="text-gray-400 text-sm md:text-base my-3">
                  Technologies I use daily for development.
                </p>
              </div>
            ) : category === "FamiliarWith" ? (
              <div>
                <span className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0379fc] to-[#22ffd7]">
                  <i className="fa-solid fa-arrow-up-right-dots me-2"></i>
                  Familiar With
                </span>
                <p className="text-gray-400 text-sm md:text-base my-3">
                  Technologies I also worked with.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0379fc] to-[#22ffd7]">
                  <i className="fa-solid fa-screwdriver-wrench me-2"></i>
                  {category}
                </span>
                <p className="text-gray-400 text-sm md:text-base my-3">
                  Tools I use to get things done.
                </p>
              </div>
            )}
            <div className="flex flex-wrap gap-3 mt-2">
              {list.map((skill) => (
                <span key={skill} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
