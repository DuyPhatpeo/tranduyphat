import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function ModernPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["Lập Trình Website", "Thiết Kế UI"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timer = setTimeout(
      () => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentText.substring(0, prev.length - 1)
            : currentText.substring(0, prev.length + 1)
        );
        if (!isDeleting && displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayedText === "") {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 75 : 150
    );
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole]);

  const navItems = [
    { label: "Trang Chủ", href: "#home" },
    { label: "Giới Thiệu", href: "#about" },
    { label: "Dự Án", href: "#projects" },
    { label: "Kỹ Năng", href: "#skills" },
    { label: "Liên Hệ", href: "#contact" },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar scrollY={scrollY} navItems={navItems} />
      <Hero displayedText={displayedText} />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
