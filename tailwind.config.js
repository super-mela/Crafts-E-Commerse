/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#344e41",
          secondary: "#dad7cd",
          accent: "#F97316",
          warning: "#EF4444",
          "base-text": "#374151",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
