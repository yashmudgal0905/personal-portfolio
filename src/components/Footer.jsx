const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Yash Mudgal</h2>
          <p className="text-gray-400 mt-2">
            Full-Stack Developer passionate about creating amazing digital
            experiences.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>UI / UX Design</li>
            <li>Consulting</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10">
        © 2025 Yash Mudgal. Built with ❤️ using React & Tailwind
      </div>
    </footer>
  );
};

export default Footer;
