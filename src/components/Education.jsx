import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* HEADING */}
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
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-gray-600 mb-1">
            SRM Institute of Science and Technology
          </p>
          <p className="text-sm text-gray-500 mb-4">
            2024 – 2026
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Currently pursuing MCA with specialization in Full-Stack Web
            Development and Software Engineering, focusing on building scalable
            and real-world applications.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>MERN Stack Development</li>
            <li>Cloud Computing & DevOps Basics</li>
            <li>Java & Object-Oriented Programming</li>
            <li>Android Application Development</li>
            <li><span className="font-semibold">CGPA:</span> 8.0</li>
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
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-gray-600 mb-1">
            INMANTEC College, CCS University
          </p>
          <p className="text-sm text-gray-500 mb-4">
            2021 – 2024
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Completed BCA with a strong foundation in programming, databases,
            and web technologies, along with hands-on academic projects.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Data Structures & Algorithms</li>
            <li>Database Management Systems (DBMS)</li>
            <li>Web Development (HTML, CSS, JavaScript)</li>
            <li>Software Engineering Principles</li>
            <li><span className="font-semibold">CGPA:</span> 7.3</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
