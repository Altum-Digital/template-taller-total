/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand)",
          dark: "var(--brand-dark)",
          light: "var(--brand-light)",
        },
        accent: "var(--accent)",
        surface: "var(--surface)",
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        marquee:   "marquee 35s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
