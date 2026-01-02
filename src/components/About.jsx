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
            Passionate Developer & Problem Solver
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            I'm a passionate full-stack developer with a strong foundation in
            building responsive and user-friendly web applications. I enjoy
            transforming ideas into real-world digital solutions using clean
            code and modern technologies.
          </p>

          <p className="text-gray-600 leading-relaxed">
            As a recent graduate, I’ve completed several hands-on projects and
            internships that strengthened my skills in both frontend and backend
            development.
          </p>

          {/* Stats Card */}
          <div className="mt-6 bg-gray-100 rounded-xl p-6 inline-block">
            <p className="text-3xl font-bold text-blue-600">10+</p>
            <p className="text-gray-600">
              Projects Completed
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
            <h4 className="font-semibold mb-2">API Integration</h4>
            <p className="text-gray-600 text-sm">
              Connecting frontend with backend systems smoothly
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Clean Code</h4>
            <p className="text-gray-600 text-sm">
              Writing maintainable and scalable code
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Responsive Design</h4>
            <p className="text-gray-600 text-sm">
              Mobile-first approach to web development
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Team Player</h4>
            <p className="text-gray-600 text-sm">
              Collaborative development and mentoring
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
