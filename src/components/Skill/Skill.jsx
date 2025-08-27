export default function Skill() {
  const skills = [
    {
      name: "HTML & CSS",
      tag: "Frontend",
      icon: <i className="devicon-html5-plain colored text-3xl"></i>,
    },
    {
      name: "JavaScript",
      tag: "Frontend",
      icon: <i className="devicon-javascript-plain colored text-3xl"></i>,
    },
    {
      name: "React JS",
      tag: "Frontend",
      icon: <i className="devicon-react-original colored text-3xl"></i>,
    },
    {
      name: "TailwindCSS",
      tag: "UI/UX",
      icon: <i className="devicon-tailwindcss-original colored text-3xl"></i>,
    },
    {
      name: "Bootstrap",
      tag: "UI/UX",
      icon: <i className="devicon-bootstrap-plain colored text-3xl"></i>,
    },
    {
      name: "PHP",
      tag: "Backend",
      icon: <i className="devicon-php-plain colored text-3xl"></i>,
    },
    {
      name: "C# (.NET)",
      tag: "Backend",
      icon: <i className="devicon-csharp-plain colored text-3xl"></i>,
    },
    {
      name: "Git & GitHub",
      tag: "Others",
      icon: <i className="devicon-git-plain colored text-3xl"></i>,
    },
    {
      name: "MySQL",
      tag: "Database",
      icon: <i className="devicon-mysql-plain colored text-3xl"></i>,
    },
  ];

  return (
    <>
      <section
        id="skills"
        className="py-20 bg-gradient-to-b from-white to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight">
              Kỹ Năng Chuyên Môn
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Những công nghệ và kỹ năng tôi thành thạo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="px-3 py-0.5 text-sm rounded-lg bg-cyan-100 text-cyan-600 font-medium">
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
