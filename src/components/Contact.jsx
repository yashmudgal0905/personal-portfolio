import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* TOP TEXT */}
      <p className="text-center text-gray-600 mb-16">
        I'm always open to discussing new opportunities, interesting projects,
        or just having a chat about technology.
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>

          <p className="text-gray-600 mb-10">
            Feel free to reach out if you have any questions, want to collaborate
            on a project, or just want to connect. I'll get back to you as soon as
            possible!
          </p>

          {/* EMAIL */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <FaEnvelope />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">yashmudgal0905@gmail.com</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">7310594790</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">Ghaziabad, Delhi, India</p>
            </div>
          </div>

          {/* SOCIALS */}
          <h3 className="font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/harshitsharmaa0905"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-900 text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/yash-mudgal-b587502a9"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-500 text-white hover:scale-110 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-pink-500 text-white hover:scale-110 transition"
            >
              <FaInstagram />
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
              className="w-full p-4 border rounded-lg"
            />
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full p-4 border rounded-lg"
            />
          </div>

          <input
            type="text"
            placeholder="How can I help you?"
            className="w-full p-4 border rounded-lg"
          />

          <textarea
            rows="5"
            placeholder="Tell me about your project or just say hello!"
            className="w-full p-4 border rounded-lg"
          ></textarea>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message ✈️
          </button>
        </motion.form>
      </div>
    </div>
  );
}
