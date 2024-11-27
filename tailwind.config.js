/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
        "max-height&opacity": "max-height, opacity",
        "max-height&padding": "max-height, padding",
        "gap&scale": "transform, gap",
      },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        garamond: ["Cormorant Garamond", "serif"],
        montserrat: ["Montserrat", "serif"],
        rufina: ["Rufina", "serif"],
        albert: ["Albert Sans", "sans-serif"],
      },
      colors: {
        bg_red: "#FF0000",
        text_red: "#FF0000",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
        fadeInDown: "fadeInDown 1s ease-out",
      },
      backgroundImage: {
        bg_login: "url('./src/component/Auth/assets/login.png')",
        bg_about: "url('./src/component/AboutUs/assets/banner.png')",
        bg_dashboard: "url('./src/component/Dashboard/assets/bg-stack.png')",

        bg_contact: "url('./src/component/ContactUs/assets/Photo.png')",
        bg_forget_pass: "url('./src/component/Auth/assets/forget.png')",
        "gold-gradient":
          "linear-gradient(90deg, #FFD700, #FFC700, #FFB800, #FFA500)",
      },
    },
  },
  plugins: [],
};
