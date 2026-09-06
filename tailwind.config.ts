import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          50: "#F4F5F8",
          100: "#E5E7EE",
          200: "#C7CBD9",
          300: "#9AA1B8",
          400: "#6D758F",
          500: "#454C66",
          600: "#2F3448",
          700: "#1E2233",
          800: "#141828",
          900: "#0B1220",
        },
        canvas: "#F5F1E8",
        paper: "#FFFFFF",
        brand: {
          DEFAULT: "#F59E0B",
          50: "#FEF6E4",
          100: "#FDECC4",
          200: "#FCD98A",
          300: "#FAC24E",
          400: "#F7AE26",
          500: "#F59E0B",
          600: "#C97F07",
          700: "#9B6205",
          800: "#6E4504",
          900: "#402803",
        },
        muted: "#6B7280",
        line: "#E7E1D0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04), 0 8px 30px rgba(11,18,32,0.06)",
        cta: "0 6px 22px rgba(245,158,11,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
