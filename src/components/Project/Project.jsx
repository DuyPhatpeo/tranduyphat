import { ExternalLink, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import dinostore from "@assets/dinostore.jpg";
import portfolio from "@assets/portfolio.jpg";
import shopfstyle from "@assets/shopfstyle.jpg";
import dinomovie from "@assets/dinomovie.png";
import dinobot from "@assets/dinobotweb.png";

import ProjectFilter from "./ProjectFilter";

export default function Project() {
  const projects = [
    {
      name: "Dino Movie",
      desc: "Ứng dụng xem phim trực tuyến...",
      tech: ["ReactJS", "TailwindCSS"],
      link: "https://github.com/DuyPhatpeo/simple-movies",
      demo: "https://dinomovie.vercel.app/",
      image: dinomovie,
      category: "Movie",
    },
    {
      name: "Portfolio Website",
      desc: "Website portfolio cá nhân...",
      tech: ["ReactJS", "TailwindCSS"],
      link: "https://github.com/DuyPhatpeo/tranduyphat",
      demo: "https://tranduyphat.vercel.app/",
      image: portfolio,
      category: "Portfolio",
    },
    {
      name: "Dino Bot",
      desc: "Discord bot thông minh...",
      tech: ["NodeJS", "Discord.js"],
      link: "https://github.com/DuyPhatpeo/DinoBotDiscord",
      demo: "https://dinobotvn.vercel.app/",
      image: dinobot,
      category: "Discord Bot",
    },
    {
      name: "Dino Store",
      desc: "ReactJS e-commerce hiện đại...",
      tech: ["ReactJS", "TailwindCSS"],
      link: "https://github.com/DuyPhatpeo/DinoStore",
      demo: "https://dinostorevn.vercel.app/",
      image: dinostore,
      category: "E-commerce",
    },
    {
      name: "ShopFSTYLE",
      desc: "Website thương mại điện tử...",
      tech: ["PHP", "Bootstrap", "MySQL"],
      link: "https://github.com/DuyPhatpeo/ShopFSTYLE",
      image: shopfstyle,
      category: "E-commerce",
    },
    {
      name: "D2P",
      desc: "Hệ thống đặt vé xem phim...",
      tech: ["PHP", "MySQL"],
      link: "https://github.com/nguyenduydan/Website_BanVeXemPhim",
      image: "",
      category: "Entertainment",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Dự Án Tiêu Biểu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Khám phá những dự án tôi đã tạo ra với đam mê và sự sáng tạo
          </p>
        </div>

        {/* Filter */}
        <ProjectFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "https://via.placeholder.com/400x200"}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full shadow">
                  {project.category}
                </span>

                {/* Icon Buttons */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full hover:scale-110 transition shadow-md"
                      title="Xem Demo"
                    >
                      <Monitor className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-full hover:scale-110 transition shadow-md"
                    title="Xem Code"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs font-medium hover:bg-cyan-100 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
