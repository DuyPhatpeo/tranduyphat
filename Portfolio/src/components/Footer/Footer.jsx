import { Heart, Coffee } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2025{" "}
            <a
              href="https://github.com/DuyPhatpeo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 font-medium transition-colors"
            >
              Trần Duy Phát
            </a>
            . Được tạo với{" "}
            <Heart className="inline w-4 h-4 text-red-500 mx-1" /> và{" "}
            <Coffee className="inline w-4 h-4 text-amber-500 mx-1" />
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Đam mê công nghệ • Không ngừng học hỏi • Tạo ra giá trị
          </p>
        </div>
      </footer>
    </>
  );
}
