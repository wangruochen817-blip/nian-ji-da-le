/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"Noto Sans SC"', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'serif'],
        zcool: ['"ZCOOL KuaiLe"', 'cursive'],
        mashan: ['"Ma Shan Zheng"', 'cursive'],
      },
      backgroundImage: {
        'pattern-dots': 'radial-gradient(currentColor 2px, transparent 2px)',
        'pattern-grid': 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
};
