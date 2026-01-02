export default function Skills() {
  const SkillBar = ({ name, percent, color }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className={`font-semibold text-${color}-500`}>
          {percent}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full bg-${color}-500 transition-all duration-1000`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Skills & Technologies</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-600 mt-4">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Frontend */}
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mb-4">
            💻
          </div>
          <h3 className="text-xl font-bold mb-6">Frontend</h3>

          <SkillBar name="React" percent={90} color="blue" />
          <SkillBar name="JavaScript" percent={90} color="blue" />
          <SkillBar name="Tailwind CSS" percent={92} color="blue" />
          <SkillBar name="HTML" percent={99} color="blue" />
        </div>

        {/* Backend */}
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full mb-4">
            🗄️
          </div>
          <h3 className="text-xl font-bold mb-6">Backend</h3>

          <SkillBar name="Node.js" percent={87} color="blue" />
          <SkillBar name="Express.js" percent={80} color="blue" />
          <SkillBar name="MongoDB" percent={85} color="blue" />
          <SkillBar name="SQL" percent={82} color="blue" />
        </div>

        {/* Tools */}
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-full mb-4">
            🛠️
          </div>
          <h3 className="text-xl font-bold mb-6">Tools & Others</h3>

          <SkillBar name="GitHub" percent={95} color="purple" />
          <SkillBar name="Docker" percent={75} color="purple" />
          <SkillBar name="AWS" percent={80} color="purple" />
          <SkillBar name="AI Tools" percent={95} color="purple" />
        </div>
      </div>
    </div>
  );
}
