import { ExternalLink } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      name: "ShopFSTYLE",
      desc: "Website thương mại điện tử hiện đại với giao diện responsive, quản lý sản phẩm thông minh và đặt hàng sản phẩm.",
      tech: ["HTML", "PHP", "MySQL", "JavaScript"],
      link: "https://github.com/DuyPhatpeo/ShopFSTYLE",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "E-commerce",
    },
    {
      name: "Đặt Vé Xem Phim",
      desc: "Hệ thống đặt vé xem phim trực tuyến với tính năng chọn ghế trực quan và quản lý lịch chiếu.",
      tech: ["HTML", "JavaScript", "PHP", "CSS"],
      link: "https://github.com/nguyenduydan/Website_BanVeXemPhim",
      image:
        "https://images.unsplash.com/photo-1489599904064-e3b0ff8a1e6b?w=400&h=250&fit=crop",
      category: "Entertainment",
    },
    {
      name: "Portfolio Website",
      desc: "Website portfolio cá nhân với thiết kế hiện đại, tối ưu SEO và trải nghiệm người dùng mượt mà.",
      tech: ["React", "TailwindCSS", "JavaScript"],
      link: "https://github.com/DuyPhatpeo/tranduyphat",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Portfolio",
    },
    {
      name: "Dino Store",
      desc: "Dino Store — ReactJS e-commerce hiện đại, chuẩn responsive mọi màn hình, quản lý sản phẩm sắc bén, trải nghiệm đặt hàng siêu mượt.",
      tech: ["ReactJS", "Tailwind CSS"],
      link: "https://github.com/DuyPhatpeo/DinoStore",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "E-commerce",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Dự Án Tiêu Biểu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Khám phá những dự án tôi đã tạo ra với đam mê và sự sáng tạo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition-transform duration-500 hover:scale-105"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/10 to-blue-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-600 text-sm font-medium">
                      {project.category}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs font-medium hover:bg-cyan-100 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
