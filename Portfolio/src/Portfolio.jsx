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
      desc: "Website thương mại điện tử hiện đại với giao diện responsive, quản lý sản phẩm thông minh và hệ thống thanh toán an toàn.",
      tech: ["HTML", "PHP", "MySQL", "JavaScript"],
      link: "https://github.com/DuyPhatpeo/ShopFSTYLE",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "E-commerce",
    },
    {
      name: "Đặt Vé Xem Phim",
      desc: "Hệ thống đặt vé xem phim trực tuyến với tính năng chọn ghế trực quan, thanh toán online và quản lý lịch chiếu.",
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
      link: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Portfolio",
    },
  ];

  const skills = [
    {
      name: "HTML & CSS",
      tag: "Frontend",
      icon: <Code2 className="w-5 h-5 text-orange-400" />,
    },
    {
      name: "JavaScript",
      tag: "Frontend",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
    },
    {
      name: "React JS",
      tag: "Frontend",
      icon: <Rocket className="w-5 h-5 text-blue-400" />,
    },
    {
      name: "TailwindCSS",
      tag: "UI/UX",
      icon: <Star className="w-5 h-5 text-teal-400" />,
    },
    {
      name: "PHP",
      tag: "Backend",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
    },
    {
      name: "C# (.NET)",
      tag: "Backend",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Dino Péo
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="relative text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10">
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="block text-white/80 hover:text-white transition-colors"
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-6">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-medium tracking-wider uppercase">
                Xin chào! Tôi là
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                Trần Duy Phát
              </span>
            </h1>

            <div className="h-16 mb-8">
              <div className="text-xl md:text-2xl font-medium text-white/80 flex items-center justify-center md:justify-start gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="min-w-0 flex items-center">
                  <span className="font-mono">{displayedText}</span>
                  <span className="ml-1 animate-pulse text-cyan-400 font-bold">
                    |
                  </span>
                </span>
              </div>
            </div>

            <p className="text-lg text-white/70 mb-8 max-w-lg mx-auto md:mx-0">
              Tôi tạo ra những trải nghiệm web đẹp mắt và tương tác cao, biến ý
              tưởng thành hiện thực với công nghệ hiện đại.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a
                href="#projects"
                className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 justify-center"
              >
                Xem Dự Án
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white/20 rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-2 justify-center"
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
                  color: "hover:text-blue-500",
                },
                {
                  icon: Youtube,
                  href: "https://www.youtube.com/@dinopeo2810",
                  color: "hover:text-red-500",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ph%C3%A1t-tr%E1%BA%A7n-2741542b2/",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Github,
                  href: "https://github.com/DuyPhatpeo",
                  color: "hover:text-gray-300",
                },
              ].map(({ icon: Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${color}`}
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
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm">
                <img
                  src="/avt2.jpg"
                  alt="Trần Duy Phát"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/40" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Giới Thiệu
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Khám phá câu chuyện và hành trình phát triển của tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <img
                src="/avt2.jpg"
                alt="About Me"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold">Trần Duy Phát (Dino Péo)</h3>
              </div>

              <p className="text-white/80 text-lg leading-relaxed">
                Là một developer , tôi chuyên tạo ra những trải nghiệm web hiện
                đại và tối ưu. Luôn học hỏi công nghệ mới và thích thú với những
                thách thức trong lập trình.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: "Sinh ngày", value: "28/10/2003" },
                  { icon: MapPin, label: "Đến từ", value: "Nha Trang" },
                  { icon: Gamepad2, label: "Sở thích", value: "Gaming, Phim" },
                  { icon: Coffee, label: "Yêu thích", value: "Coffee & Code" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm"
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-white/60 text-sm">{label}</p>
                      <p className="text-white font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                {[
                  { icon: Trophy, label: "5+ Dự Án", color: "text-yellow-400" },
                  {
                    icon: Target,
                    label: "100% Hài Lòng",
                    color: "text-green-400",
                  },
                  { icon: Heart, label: "Đam Mê", color: "text-red-400" },
                ].map(({ icon: Icon, label, color }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm"
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span className="text-white/80 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Dự Án Tiêu Biểu
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Khám phá những dự án tôi đã tạo ra với đam mê và sự sáng tạo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-400 text-sm font-medium">
                      {project.category}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-white/5 rounded-full text-white/80 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Kỹ Năng Chuyên Môn
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Những công nghệ và kỹ năng tôi thành thạo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="px-3 py-0.5 text-sm rounded-lg bg-cyan-500/20 text-cyan-400 font-medium">
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Học Vấn</h2>
            </div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Đại học Nha Trang - Ngành Công Nghệ Thông Tin
            </p>
            <div className="mt-4 text-indigo-400 font-medium">2021 - 2025</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
              Liên Hệ
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
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
                color: "text-red-400",
              },
              {
                icon: Phone,
                label: "Điện Thoại",
                value: "0866 482 834",
                href: "tel:0866482834",
                color: "text-green-400",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/DuyPhatpeo",
                href: "https://github.com/DuyPhatpeo",
                color: "text-gray-300",
              },
            ].map(({ icon: Icon, label, value, href, color }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="text-center">
                  <Icon
                    className={`w-8 h-8 ${color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {label}
                  </h3>
                  <p className="text-white/70 group-hover:text-white transition-colors duration-300">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Trần Duy Phát. Được tạo với{" "}
            <Heart className="inline w-4 h-4 text-red-400 mx-1" /> và
            <Coffee className="inline w-4 h-4 text-amber-400 mx-1" />
          </p>
          <p className="text-white/40 text-sm mt-2">
            Đam mê công nghệ • Không ngừng học hỏi • Tạo ra giá trị
          </p>
        </div>
      </footer>
    </div>
  );
}
