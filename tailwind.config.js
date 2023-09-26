/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom":
          "linear-gradient(90deg, #1c1566 0%, #047de7 50%,  #1c1566 100%)",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        fadeInBottom: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 2s ease-in-out",
        fadeInRight: "fadeInRight 1s ease-in",
        fadeInBottom: "fadeInBottom 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
