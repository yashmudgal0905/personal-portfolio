import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">
          About Me
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Full-Stack Developer & Problem Solver
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            I am a motivated Full-Stack Developer with hands-on experience in
            building responsive, scalable, and user-focused web applications.
            I enjoy converting real-world problems into clean, efficient digital
            solutions using modern web technologies.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I have worked on multiple real-world projects including rental
            platforms, management systems, and portfolio websites, gaining
            strong experience in both frontend and backend development.
          </p>

          {/* Stats Card */}
          <div className="mt-6 bg-gray-100 rounded-xl p-6 inline-block">
            <p className="text-3xl font-bold text-blue-600">10+</p>
            <p className="text-gray-600">
              Real-World Projects Completed
            </p>
          </div>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Frontend Development</h4>
            <p className="text-gray-600 text-sm">
              Building responsive UI using React, Tailwind CSS, and JavaScript
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Backend & APIs</h4>
            <p className="text-gray-600 text-sm">
              RESTful APIs with Node.js, Express.js, and MongoDB
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Clean & Scalable Code</h4>
            <p className="text-gray-600 text-sm">
              Writing maintainable, reusable, and optimized code
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Team & Learning Mindset</h4>
            <p className="text-gray-600 text-sm">
              Strong collaboration skills with continuous learning attitude
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
