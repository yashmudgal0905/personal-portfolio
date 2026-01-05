import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        I'm open to new opportunities, freelance work, internships, or full-time
        roles. Feel free to reach out if you'd like to collaborate or discuss
        exciting projects.
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

          <p className="text-gray-600 mb-10">
            Have a project in mind or looking for a passionate developer?
            I’d love to hear from you and will respond as quickly as possible.
          </p>

          {/* EMAIL */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <FaEnvelope />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:yashmudgal0905@gmail.com"
                className="text-gray-600 hover:text-blue-600"
              >
                yashmudgal0905@gmail.com
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">Ghaziabad, India</p>
            </div>
          </div>

          {/* SOCIAL */}
          <h3 className="font-semibold mb-4">Professional Profiles</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/harshitsharmaa0905"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-900 text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/yash-mudgal-b587502a9"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Write your message here..."
            required
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message ✈️
          </button>
        </motion.form>
      </div>
    </div>
  );
}
