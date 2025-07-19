import Header from "@components/Header/Header";
import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Project from "@components/Project/Project";
import Skill from "@components/Skill/Skill";
import Education from "@components/Education/Education";
import Contact from "@components/Contact/Contact";
import Footer from "@components/Footer/Footer";

export default function Portfolio() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Project />
      <Skill />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
