/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        azeret: ["Azeret Mono", "serif"],
        nunit: ["Nunito Sans", "serif"],
        inter: ["Inter", "serif"],
        spicy: ["Spicy Rice", "serif"],
      },
      colors: {
        textColor: "#06060a",
        darkModeColor: "#121212",
        darkModeColorTwo: "#1A1A1A",
        primary: "#3a31d8",
        codeBg: "#1e1e1e",
        accent: "#0600c2",
        transparentAccent: "rgba(6, 0, 194, 0.6)",
        bgColor: "#f4f5f5",
        secondary: "#020024",
        codePurple: "#C586C0",
        codeBlue: "#9CDCFE",
        codeOrange: "#CE9178",
        functionBlue: "#569CD6",
        constLemon: "#DCDCAA",
        componentGreen: "#4ECBB0",
      },
      boxShadow: {
        customisedShadow:
          "inset -10px 0px 15px rgba(0, 0, 0, 0.2), inset 10px 0px 15px rgba(0, 0, 0, 0.2); ",
      },
      backgroundColor: {
        customisedLinear:
          "linear-gradient(to right, rgb(0, 0, 0), transparent, rgb(0, 0, 0))",
      },

      keyframes: {
        slideIn: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
        slideOut: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
      },

      animation: {
        testimonies: "slideIn 15s linear infinite",
        testimoniesecond: "slideOut 15s linear infinite",
      },
    },
  },
  plugins: [],
};
