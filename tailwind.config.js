/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        description: "rgba(255, 255, 255, 0.3)",
        link: "rgba(255, 255, 0, 0.4)",
        happy: "limegreen",
        town: {
          DEFAULT: "#3f5995",
          select: {
            DEFAULT: "#3b428b",
            border: "#1d23428c",
          },
          border: "#4968b3",
          button: "rgba(63, 89, 149, 0.6)"
        }
      }
    },
  },
  plugins: [],
}

