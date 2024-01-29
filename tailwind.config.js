/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      backgroundColor: {
        "radial-gradient": "radial-gradient(red, greeen, blue)",
      },
      colors: {
        primary: "#006DF9",
        secondary: "#F1F1F1",
        info: "#006DF914",
        warning: "#AD8227",
        black: "#2F2F2F",
        blue: "#08174F",
        error: "#E85656",
        "dark-gray": "#A1A1A1",
        "primary-light": "#E5EEF9",
        "warning-light": "#F8EDD0",
        "success-light": "#CBF0E3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

// black soft
