/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // Use dark mode classes by default
  theme: {
    extend: {
      colors: {
        background: "#0F172A", // Example dark background color
        text: "#FFFFFF", // Example text color for dark mode
      },
    },
  },
  plugins: [],
};
