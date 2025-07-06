import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Github,
  GraduationCap,
  Code2,
  Rocket,
  User,
  Facebook,
  Youtube,
  Linkedin,
  Sparkles,
  Star,
  Globe,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Heart,
  Zap,
  Trophy,
  Target,
  Coffee,
  Camera,
  Gamepad2,
  MapPin,
  Calendar,
  ArrowRight,
  Download,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
export default function ModernPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  const roles = ["Lập Trình Website", "Thiết Kế UI"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentText = roles[currentRole];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        setTypeSpeed(75);
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole, typeSpeed]);

  const navItems = [
    { label: "Trang Chủ", href: "#home" },
    { label: "Giới Thiệu", href: "#about" },
    { label: "Dự Án", href: "#projects" },
    { label: "Kỹ Năng", href: "#skills" },
    { label: "Liên Hệ", href: "#contact" },
  ];

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
  ];

  const skills = [
    {
      name: "HTML & CSS",
      tag: "Frontend",
      icon: <i className="devicon-html5-plain colored text-3xl"></i>,
    },
    {
      name: "JavaScript",
      tag: "Frontend",
      icon: <i className="devicon-javascript-plain colored text-3xl"></i>,
    },
    {
      name: "React JS",
      tag: "Frontend",
      icon: <i className="devicon-react-original colored text-3xl"></i>,
    },
    {
      name: "TailwindCSS",
      tag: "UI/UX",
      icon: <i className="devicon-tailwindcss-original colored text-3xl"></i>,
    },
    {
      name: "Bootstrap",
      tag: "UI/UX",
      icon: <i className="devicon-bootstrap-plain colored text-3xl"></i>,
    },
    {
      name: "PHP",
      tag: "Backend",
      icon: <i className="devicon-php-plain colored text-3xl"></i>,
    },
    {
      name: "C# (.NET)",
      tag: "Backend",
      icon: <i className="devicon-csharp-plain colored text-3xl"></i>,
    },
    {
      name: "Git & GitHub",
      tag: "Others",
      icon: <i className="devicon-git-plain colored text-3xl"></i>,
    },
    {
      name: "MySQL",
      tag: "Backend",
      icon: <i className="devicon-mysql-plain colored text-3xl"></i>,
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Dino Péo
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="relative text-gray-700 hover:text-black transition-colors duration-300 group font-medium"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md">
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="block text-gray-700 hover:text-black transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-6">
              <Sparkles className="w-6 h-6 text-cyan-500 animate-pulse" />
              <span className="text-cyan-500 font-medium tracking-wider uppercase">
                Xin chào! Tôi là
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Trần Duy Phát
              </span>
            </h1>

            <div className="h-16 mb-8">
              <div className="text-xl md:text-2xl font-medium text-gray-700 flex items-center justify-center md:justify-start gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span className="min-w-0 flex items-center">
                  <span className="font-mono">{displayedText}</span>
                  <span className="ml-1 animate-pulse text-cyan-500 font-bold">
                    |
                  </span>
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Tôi tạo ra những trải nghiệm web đẹp mắt và tương tác cao, biến ý
              tưởng thành hiện thực với công nghệ hiện đại.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a
                href="#projects"
                className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center gap-2 justify-center"
              >
                Xem Dự Án
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-300 rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 flex items-center gap-2 justify-center text-gray-700"
              >
                <Send className="w-4 h-4" />
                Liên Hệ
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/DinoPeo2810",
                  color: "hover:text-blue-600",
                },
                {
                  icon: Youtube,
                  href: "https://www.youtube.com/@dinopeo2810",
                  color: "hover:text-red-500",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ph%C3%A1t-tr%E1%BA%A7n-2741542b2/",
                  color: "hover:text-blue-500",
                },
                {
                  icon: Github,
                  href: "https://github.com/DuyPhatpeo",
                  color: "hover:text-black",
                },
              ].map(({ icon: Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white shadow border border-gray-200 transition-all duration-300 hover:scale-110 text-black ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <img
                  src="/avt2.jpg"
                  alt="Trần Duy Phát"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce shadow-md">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400 hover:text-cyan-500 transition-colors duration-300" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden"
      >
        {/* Background Shape Nhẹ Nhàng */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-48 h-48 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-ping top-1/3 left-1/4"></div>
          <div className="absolute w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse bottom-0 right-1/3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent animate-fade-in leading-tight">
              Giới Thiệu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Khám phá câu chuyện và hành trình phát triển của tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar Có Glow Khi Hover */}
            <div className="relative flex justify-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition duration-500"></div>
              <img
                src="/avt2.jpg"
                alt="About Me"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Thông Tin */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-cyan-500" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Trần Duy Phát (Dino Péo)
                </h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                Là một developer, tôi chuyên tạo ra những trải nghiệm web hiện
                đại và tối ưu. Luôn học hỏi công nghệ mới và thích thú với những
                thách thức trong lập trình.
              </p>

              {/* Thông Tin Cá Nhân */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: "Sinh ngày", value: "28/10/2003" },
                  { icon: MapPin, label: "Đến từ", value: "Nha Trang" },
                  { icon: Gamepad2, label: "Sở thích", value: "Gaming, Phim" },
                  { icon: Coffee, label: "Yêu thích", value: "Coffee & Code" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-sm hover:scale-105 hover:bg-white transition-transform duration-300"
                  >
                    <Icon className="w-5 h-5 text-cyan-500" />
                    <div>
                      <p className="text-gray-500 text-sm">{label}</p>
                      <p className="text-gray-800 font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Thành Tích */}
              <div className="flex flex-wrap gap-4 pt-6">
                {[
                  { icon: Trophy, label: "5+ Dự Án", color: "text-yellow-500" },
                  {
                    icon: Target,
                    label: "100% Hài Lòng",
                    color: "text-green-500",
                  },
                  { icon: Heart, label: "Đam Mê", color: "text-red-500" },
                ].map(({ icon: Icon, label, color }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm hover:scale-105 hover:bg-white transition-transform duration-300"
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span className="text-gray-700 font-medium">{label}</span>
                  </div>
                ))}
              </div>

              {/* Câu Quote Cá Tính */}
              <p className="italic text-gray-500 text-center pt-4">
                "Không ngừng sáng tạo - Không ngại thử thách"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-b from-white to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight">
              Kỹ Năng Chuyên Môn
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Những công nghệ và kỹ năng tôi thành thạo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="px-3 py-0.5 text-sm rounded-lg bg-cyan-100 text-cyan-600 font-medium">
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-indigo-500" />
              <h2 className="text-2xl font-bold text-gray-800">Học Vấn</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Đại học Nha Trang - Ngành Công Nghệ Thông Tin
            </p>
            <div className="mt-4 text-indigo-500 font-medium">2021 - 2025</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
              Liên Hệ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hãy kết nối và trao đổi về những dự án thú vị
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "phattranduy00@gmail.com",
                href: "mailto:phattranduy00@gmail.com",
                color: "text-red-500",
              },
              {
                icon: Phone,
                label: "Điện Thoại",
                value: "0866 482 834",
                href: "tel:0866482834",
                color: "text-green-500",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/DuyPhatpeo",
                href: "https://github.com/DuyPhatpeo",
                color: "text-gray-700",
              },
            ].map(({ icon: Icon, label, value, href, color }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition-all duration-500 hover:scale-105"
              >
                <div className="text-center">
                  <Icon
                    className={`w-8 h-8 ${color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {label}
                  </h3>
                  <p className="text-gray-600 group-hover:text-cyan-500 transition-colors duration-300">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2025 Trần Duy Phát. Được tạo với{" "}
            <Heart className="inline w-4 h-4 text-red-500 mx-1" /> và
            <Coffee className="inline w-4 h-4 text-amber-500 mx-1" />
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Đam mê công nghệ • Không ngừng học hỏi • Tạo ra giá trị
          </p>
        </div>
      </footer>
    </div>
  );
}
