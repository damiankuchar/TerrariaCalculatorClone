/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        description: "#ffffff4d",
        link: "#ffff0066",
        happy: "#32cd32",
        neutral: "#eab308",
        angry: "#ef4444",
        loves: "#337237",
        likes: "#5d7237",
        dislikes: "#726037",
        hates: "#723537",
        town: {
          DEFAULT: "#3f5995",
          select: {
            DEFAULT: "#3b428b",
            border: "#1d23428c",
          },
          border: "#4968b3",
          button: "#3f599599"
        }
      }
    },
  },
  plugins: [],
}

