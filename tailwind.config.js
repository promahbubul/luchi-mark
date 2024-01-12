/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      
        primary: "#006DF9",
        "primary-soft-1": "#E5EEF9",
        "primary-soft-2": "#006DF914",
        "gray-bg-1": "#F0F0F0",
        "gray-bg-2": "#E3E3E3",
        "gray-text-1": "#333333",
        "gray-text-2": "#5A5A5A",
        "gray-input-border": "#1012131F",
        "black-1": "#101213",
        error: "#E85656"
      }
    },
  },
  plugins: [],
}

