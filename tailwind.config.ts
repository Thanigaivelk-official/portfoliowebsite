import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        surface: "#0F172A",
        surfaceHover: "#1E293B",
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          light: "#818CF8",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
          light: "#A78BFA",
        },
        accent: {
          DEFAULT: "#06B6D4",
          hover: "#0891B2",
          light: "#67E8F9",
        },
        muted: "#94A3B8",
        borderSubtle: "rgba(255, 255, 255, 0.12)",
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          card: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.12)",
          active: "rgba(255, 255, 255, 0.16)",
          border: "rgba(255, 255, 255, 0.12)",
          borderHover: "rgba(255, 255, 255, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      boxShadow: {
        "neon-primary": "0 0 25px -5px rgba(79, 70, 229, 0.5)",
        "neon-secondary": "0 0 25px -5px rgba(124, 58, 237, 0.5)",
        "neon-accent": "0 0 25px -5px rgba(6, 182, 212, 0.5)",
        "glass-sm": "0 4px 30px rgba(0, 0, 0, 0.2)",
        "glass-lg": "0 10px 40px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "aurora": "aurora 20s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        aurora: {
          "0%": { transform: "translate(-10%, -10%) scale(1)" },
          "50%": { transform: "translate(10%, 10%) scale(1.15)" },
          "100%": { transform: "translate(-5%, 5%) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
