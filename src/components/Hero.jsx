import { motion, useMotionValue, useTransform } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const bgY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  function handleMouseMove(e) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen pt-24 relative overflow-hidden flex items-center"
    >
      {/* Moving Gradient */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
        
        {/* PHOTO */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex justify-center"
        >
          <img
            src={profile}
            className="w-64 h-64 rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <div>
          <p className="text-lg">Hello, I'm</p>
          <h1 className="text-5xl font-bold mt-2">
            Yash <span className="text-cyan-200">Mudgal</span>
          </h1>
          <h2 className="text-2xl mt-3">Full-Stack Developer</h2>
          <p className="mt-4 max-w-md">
            Passionate about building modern, beautiful and scalable web applications.
          </p>

          <div className="mt-6 flex gap-4">
            <a className="bg-cyan-500 px-6 py-3 rounded-lg" href="#">
              Download Resume
            </a>
            <a className="border px-6 py-3 rounded-lg" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
