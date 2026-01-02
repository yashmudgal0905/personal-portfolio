import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* HEADING (Option 1 – Purple underline) */}
      <div className="mb-16 text-center relative">
        <h2 className="text-4xl font-bold text-white relative inline-block">
          Education
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-purple-500 rounded"></span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* MCA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-bold mb-1">
            Master in Computer Application
          </h3>
          <p className="text-gray-600 mb-4">
            SRM Institute of Science and Technology
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Currently pursuing Master of Computer Applications with a
            focus on full-stack web development and software engineering
            fundamentals.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Cloud Computing</li>
            <li>MERN Stack</li>
            <li>Java</li>
            <li>Android Application Development</li>
            <li>CGPA: 8</li>
          </ul>
        </motion.div>

        {/* BCA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-bold mb-1">
            Bachelor in Computer Application
          </h3>
          <p className="text-gray-600 mb-4">
            INMANTEC (CCSU)
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Completed Bachelor of Computer Applications with a strong
            foundation in programming, databases, and web technologies.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Software Engineering</li>
            <li>DBMS</li>
            <li>Web Development</li>
            <li>Data Structures</li>
            <li>CGPA: 7.3</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
