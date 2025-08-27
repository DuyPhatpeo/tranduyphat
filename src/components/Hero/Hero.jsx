import { useEffect, useState } from "react";
import {
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Sparkles,
  ChevronDown,
  Zap,
  ArrowRight,
  Send,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import avatar from "@assets/avt2.jpg";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  const roles = ["Lập Trình Website", "Thiết Kế UI"];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedText, isDeleting, currentRole, typeSpeed]);

  return (
    <>
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
          <div className="text-center md:text-left mt-12 md:mt-0">
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
                // eslint-disable-next-line no-unused-vars
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
                  src={avatar}
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
    </>
  );
}
