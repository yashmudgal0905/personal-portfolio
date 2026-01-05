import { motion, useMotionValue, useTransform } from "framer-motion";
import profile from "../assets/profile.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgX = useTransform(mouseX, [0, size.width], [-30, 30]);
  const bgY = useTransform(mouseY, [0, size.height], [-30, 30]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen pt-24 relative overflow-hidden flex items-center"
    >
      {/* Animated Gradient */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 opacity-90"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">

        {/* IMAGE */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Yash Mudgal"
            className="w-64 h-64 rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <div>
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-green-500/20 text-green-200 border border-green-300 text-sm">
            Available for Hire
          </span>

          <p className="text-lg">Hello, I’m</p>

          <h1 className="text-5xl font-bold mt-2">
            Yash <span className="text-cyan-200">Mudgal</span>
          </h1>

          <h2 className="text-2xl mt-3 text-cyan-100">
            Full-Stack Developer (React & MERN)
          </h2>

          <p className="mt-4 max-w-md text-gray-200">
            I build modern, scalable and high-performance web applications
            with clean UI and strong backend systems.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex gap-4 flex-wrap">
            {/* DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold transition shadow-lg"
            >
              Download Resume
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="border border-white/50 hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
