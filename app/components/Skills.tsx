const skills = {
  frontend: ["Javascript", "React.js", "Bootstrap"],
  backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {/* {skills.map(s => (
          <span key={s} className="px-4 py-2 bg-gray-100 rounded-lg border text-sm">
            {s}
          </span>
        ))} */}
      </div>
    </section>
  );
}
