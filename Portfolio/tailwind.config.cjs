/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Bật chế độ dark mode qua class 'dark'
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4", // Xanh ngọc
        secondary: "#3b82f6", // Xanh dương
      },
    },
  },
  plugins: [],
};
