/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      
        primary: "#006DF9",
        "primary-soft-1": "#E5EEF9",
        "primary-soft-2": "#006DF914",
        "gray-bg-1": "#F0F0F0",
        "gray-bg-2": "#E3E3E3",
        "gray-bg-3": "#F1F1F1",
        "gray-bg-4": "#ECECEC",
        "gray-text-1": "#333333",
        "gray-text-2": "#5A5A5A",
        "gray-text-3": "#898989",
        "gray-text-4":"#C0C0C0",
        "gray-text-5":"#A1A1A1",
        "gray-text-6": "#6C6C6D",
        "gray-input-border": "#1012131F",
        "card-border-1": "#A7A7A7",
        "black-1": "#101213",
        "blue-sidebar": "#08174F",
        "gray-text-dark": "#AEC2CC",
        error: "#E85656"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

