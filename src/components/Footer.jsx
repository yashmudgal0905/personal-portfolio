import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const sections = ["about", "education", "skills", "projects", "contact"];

const Footer = () => {
  const [active, setActive] = useState("about");

  // Detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black dark:bg-gray-950 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Yash Mudgal
          </h2>

          {/* Hire Badge */}
          <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400 border border-green-400">
            Available for Hire
          </span>

          <p className="text-gray-400 mt-3 leading-relaxed">
            Full-Stack Developer specializing in React & MERN stack,
            focused on building scalable and user-centric web apps.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://github.com/harshitsharmaa0905"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-mudgal-b587502a9"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white text-gray-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {sections.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`transition capitalize ${
                    active === item
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-400 hover:text-cyan-300"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-semibold mb-4">What I Do</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Frontend Development (React)</li>
            <li>Full-Stack Development (MERN)</li>
            <li>REST API Integration</li>
            <li>Responsive UI Design</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Yash Mudgal · Built with React & Tailwind
      </div>
    </motion.footer>
  );
};

export default Footer;
