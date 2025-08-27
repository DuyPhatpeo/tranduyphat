import {
  User,
  Heart,
  Trophy,
  Target,
  Coffee,
  Gamepad2,
  MapPin,
  Calendar,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import avatar from "@assets/avt2.jpg";

export default function ModernPortfolio() {
  return (
    <>
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
                src={avatar}
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
                  // eslint-disable-next-line no-unused-vars
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
                  // eslint-disable-next-line no-unused-vars
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
    </>
  );
}
