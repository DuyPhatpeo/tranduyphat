import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-400 text-white">
        <div className="flex-1 text-center md:text-left md:px-20">
          <p className="text-lg font-semibold uppercase mb-3 tracking-widest flex items-center justify-center md:justify-start gap-2">
            <Sparkles className="w-5 h-5" /> Welcome
          </p>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-xl">
            Mình là <span className="text-yellow-300">Trần Duy Phát</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium min-h-12 mb-8">
            <Typewriter
              words={["Lập Trình Website", "Thiết Kế UI/UX", "Game Developer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/DinoPeo2810"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Facebook className="w-8 h-8 text-blue-500" />
            </a>
            <a
              href="https://www.youtube.com/@dinopeo2810"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Youtube className="w-8 h-8 text-red-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/ph%C3%A1t-tr%E1%BA%A7n-2741542b2/"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Linkedin className="w-8 h-8 text-sky-600" />
            </a>
            <a
              href="https://github.com/DuyPhatpeo"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <Github className="w-8 h-8 text-white" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src="/avt2.jpg"
            alt="Avatar"
            className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white"
          />
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/anh.jpg"
            alt="Avatar"
            className="w-full max-w-sm rounded-3xl shadow mx-auto"
          />
          <div>
            <h3 className="text-4xl font-bold mb-4 flex items-center gap-2 text-indigo-500">
              <User /> Giới Thiệu
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Mình là <strong>Trần Duy Phát</strong> (Dino Péo), đam mê lập
              trình giao diện hiện đại, tối ưu trải nghiệm. Thành thạo ReactJS,
              TailwindCSS, yêu thích công nghệ mới.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>🎂 Sinh ngày: 28/10/2003</li>
              <li>📍 Đến từ: Nha Trang</li>
              <li>🎯 Sở thích: Game, Phim, Cầu Lông</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="px-6 py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition">
            <Rocket className="w-10 h-10 text-indigo-500 mx-auto mb-2" />
            <h4 className="text-3xl font-bold">5+</h4>
            <p className="text-gray-600">Dự Án Đã Hoàn Thành</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition">
            <Globe className="w-10 h-10 text-teal-500 mx-auto mb-2" />
            <h4 className="text-3xl font-bold">100%</h4>
            <p className="text-gray-600">Khách Hàng Hài Lòng</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 flex items-center gap-2 text-indigo-500">
            <Rocket /> Dự Án Tiêu Biểu
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "ShopFSTYLE",
                desc: "Website bán hàng thời trang với tính năng quản lý sản phẩm, đơn hàng, đăng nhập, responsive.",
                tech: "HTML, PHP, MySQL",
                link: "https://github.com/DuyPhatpeo/ShopFSTYLE",
              },
              {
                name: "Đặt Vé Xem Phim",
                desc: "Website đặt vé xem phim, xem lịch chiếu, chọn ghế, thanh toán online.",
                tech: "HTML, JS, PHP",
                link: "https://github.com/nguyenduydan/Website_BanVeXemPhim",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="p-5 bg-white border rounded-lg shadow hover:scale-105 transition"
              >
                <h4 className="text-xl font-semibold mb-2 text-indigo-500">
                  {project.name}
                </h4>
                <p className="text-gray-700 mb-2">{project.desc}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Công nghệ: {project.tech}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600"
                >
                  Xem GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 flex items-center gap-2 text-teal-500">
            <Code2 /> Kỹ Năng
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "HTML, CSS, JavaScript",
              "TailwindCSS, Bootstrap",
              "ReactJS",
              "C# (Winform, ASP.NET)",
              "PHP",
            ].map((skill, i) => (
              <div
                key={i}
                className="p-5 bg-white border rounded-lg shadow hover:scale-[1.02] transition"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill}</span>
                  <span className="text-gray-500">
                    {[90, 85, 80, 75, 75][i]}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-teal-500 rounded-full"
                    style={{ width: `${[90, 85, 80, 75, 75][i]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 py-20 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 flex items-center gap-2 text-indigo-500">
            <GraduationCap /> Học Vấn
          </h3>
          <p className="text-gray-700 text-lg">
            Đại học Nha Trang - Công Nghệ Thông Tin
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-6 flex items-center gap-2 text-pink-500">
            <Mail /> Liên Hệ
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-pink-500" />
              <a
                href="mailto:phattranduy00@gmail.com"
                className="hover:underline"
              >
                phattranduy00@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-teal-500" /> 0866 482 834
            </li>
            <li className="flex items-center gap-3">
              <Github className="text-black" />
              <a
                href="https://github.com/DuyPhatpeo"
                target="_blank"
                className="hover:underline"
              >
                github.com/DuyPhatpeo
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm border-t bg-white">
        © 2025 Trần Duy Phát. Đam mê công nghệ - Không ngừng học hỏi.
      </footer>
    </div>
  );
}
