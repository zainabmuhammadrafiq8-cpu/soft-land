/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: "#6d5ef2",
          light: "#9b8bff",
          dark: "#4f3fd1",
          soft: "#f4f2ff",
        },
        mint: "#22c3a6",
        heading: "#1e1b4b",
        body: "#2a2a3c",
        surface: "#ffffff",
        "dark-bg": "#14122e",
        "dark-surface": "#241d5c",
        "light-bg": "#f6f5fb",
        gold: "#f5b301",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #9b8bff 0%, #6d5ef2 50%, #4f3fd1 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #2a2166 0%, #14122e 60%, #0b0a1f 100%)",
        "mint-gradient":
          "linear-gradient(135deg, #5eead4 0%, #22c3a6 100%)",
        "grid-pattern":
          "radial-gradient(circle at 1px 1px, rgba(109,94,242,0.12) 1px, transparent 0)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Sora", "sans-serif"],
        nav: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0px 18px 50px -12px rgba(30, 27, 75, 0.15)",
        phone: "0 25px 60px -12px rgba(11, 10, 31, 0.6)",
        card: "0px 10px 30px -12px rgba(30, 27, 75, 0.15)",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.85" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 1.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-soft": "pulse-soft 7s ease-in-out infinite",
        "fade-in": "fade-in 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
