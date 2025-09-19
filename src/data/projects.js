import dinostore from "@assets/dinostore.jpg";
import portfolio from "@assets/portfolio.jpg";
import shopfstyle from "@assets/shopfstyle.jpg";
import dinomovie from "@assets/dinomovie.png";
import dinobot from "@assets/dinobotweb.png";

export const projects = [
  {
    name: "Dino Blogging",
    desc: "Nền tảng blog cá nhân với quản lý bài viết, danh mục, và người dùng.",
    tech: ["ReactJS", "Styled-Components", "Firebase"],
    link: "https://github.com/DuyPhatpeo/dino-blogging",
    demo: "https://dinoblogging.vercel.app/",
    image: "",
    category: "Blog",
  },
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
