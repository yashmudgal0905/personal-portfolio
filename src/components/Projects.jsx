import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Car,
  ShoppingCart,
  Star,
  Mail,
  Bot,
  Globe,
  Gamepad2,
  Plane,
  X,
} from "lucide-react";

/* tech color rotation */
const techColors = [
  "bg-blue-100 text-blue-600",
  "bg-green-100 text-green-600",
  "bg-purple-100 text-purple-600",
  "bg-pink-100 text-pink-600",
  "bg-orange-100 text-orange-600",
  "bg-indigo-100 text-indigo-600",
  "bg-teal-100 text-teal-600",
];

const projectsData = [
  {
    title: "Rental Home / Real Estate Platform",
    desc: "Developed a full-stack rental platform allowing users to browse properties, apply search filters, and manage listings. Implemented authentication, user dashboards, and responsive UI to enhance usability and scalability.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    category: "MERN",
    icon: Home,
    color: "bg-blue-500",
  },
  {
    title: "Store Rating Platform",
    desc: "Built a role-based web application where users can rate stores and provide feedback. Admins manage users and stores while owners track ratings using secure JWT authentication.",
    tech: ["React", "Node.js", "Express", "MySQL", "JWT"],
    category: "MERN",
    icon: Star,
    color: "bg-yellow-500",
  },
  {
    title: "AI Chat Bot",
    desc: "Created an AI-powered chatbot capable of understanding user queries and generating intelligent responses. Integrated APIs to deliver real-time conversational assistance.",
    tech: ["JavaScript", "REST API", "AI Tools"],
    category: "Frontend",
    icon: Bot,
    color: "bg-purple-500",
  },
  {
    title: "Online Food Delivery System",
    desc: "Designed a full-stack food ordering system with menu browsing, cart management, and order processing. Included admin panel functionality for managing food items and orders.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    category: "FullStack",
    icon: ShoppingCart,
    color: "bg-orange-500",
  },
  {
    title: "Cab & Tour Booking System",
    desc: "Developed a cab and tour booking website allowing users to explore travel packages and submit booking requests. Focused on responsive design and smooth user interaction.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    icon: Car,
    color: "bg-green-500",
  },
  {
    title: "E-Post Office System",
    desc: "Implemented a digital post office platform showcasing postal schemes, account types, and an interest calculator. Designed to simulate real-world postal services online.",
    tech: ["HTML", "CSS", "JavaScript", "MongoDB"],
    category: "FullStack",
    icon: Mail,
    color: "bg-indigo-500",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Designed and developed a modern personal portfolio website to showcase projects, skills, and experience. Included smooth animations and responsive layout for all devices.",
    tech: ["React", "Tailwind CSS"],
    category: "Frontend",
    icon: Globe,
    color: "bg-sky-500",
  },
  {
    title: "Rock Paper Scissors Game",
    desc: "Created an interactive browser-based game using JavaScript logic. Implemented real-time result display, score tracking, and user-friendly gameplay.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    icon: Gamepad2,
    color: "bg-teal-500",
  },
  {
    title: "Tour & Travel Website",
    desc: "Developed a travel website displaying tour packages, destination details, and booking forms. Focused on clean UI design and responsive layout.",
    tech: ["HTML", "CSS", "Bootstrap"],
    category: "Frontend",
    icon: Plane,
    color: "bg-pink-500",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-14 flex-wrap">
        {["All", "MERN", "FullStack", "Frontend"].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-5 py-2 rounded-full border transition ${
              filter === c
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              whileHover={{ y: -12, scale: 1.03 }}
              className="bg-white rounded-xl shadow hover:shadow-xl cursor-pointer"
              onClick={() => setActive(p)}
            >
              <div
                className={`h-36 ${p.color} flex items-center justify-center rounded-t-xl`}
              >
                <Icon size={42} className="text-white" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

                {/* 4-line description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                  {p.desc}
                </p>

                {/* Tech stack with different colors */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span
                      key={t}
                      className={`px-3 py-1 text-xs rounded-full ${
                        techColors[i % techColors.length]
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white max-w-lg w-full rounded-xl p-6 relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3"
              >
                <X />
              </button>

              <h3 className="text-2xl font-bold mb-3">{active.title}</h3>
              <p className="text-gray-600 mb-5">{active.desc}</p>

              <div className="flex flex-wrap gap-2">
                {active.tech.map((t, i) => (
                  <span
                    key={t}
                    className={`px-3 py-1 text-xs rounded-full ${
                      techColors[i % techColors.length]
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
