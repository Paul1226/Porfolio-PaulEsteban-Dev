/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
          990: "#011d1b",
          999: "#010e0d",
        },
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "textlinear-light": "linear-gradient(180deg, #134e4a, #14b8a6)",
        "textlinear-dark": "linear-gradient(180deg, #14b8a6, #ccfbf1)",
        bgperfil:
          "radial-gradient(circle, #7dd3fc 0%, #0d9488 30%, #134e4a 90%, #134e4a 100%)",
        "gradient-teal-light":
          "linear-gradient(90deg, #f0fdfa 5%, #51e4b8 10%,#21554e,#51e4b8 85%, #f0fdfa 100%)",
        "gradient-teal-dark":
          "linear-gradient(90deg, #0d9488  5%, #51e4b8 10%,#21554e,#51e4b8 85%, #0d9488  100%)",
      },
      animation: {
        "translate-box": "translate-box linear infinite",
      },
      keyframes: {
        "translate-box": {
          "100%": { transform: "translate(calc(-100% + 64px) -50%)" },
        },
      },
      gridTemplateColumns: {
        "1-3": "1fr 3fr",
      },
    },
  },
  plugins: [],
};
