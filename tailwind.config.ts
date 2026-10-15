import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0e0f13",
          900: "#14151b",
          800: "#1b1d25",
          700: "#272a36",
          600: "#383c4c"
        },
        accent: {
          iris: "#9a9fe0",
          sage: "#8cbfa6",
          sky: "#86aecf"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "soft-iris": "0 8px 28px rgba(154, 159, 224, 0.16)",
        "soft-sage": "0 8px 28px rgba(140, 191, 166, 0.16)",
        "soft-sky": "0 8px 28px rgba(134, 174, 207, 0.16)"
      },
      keyframes: {
        phraseIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        ring: {
          from: { strokeDashoffset: "339.29" }
        },
        dialogIn: {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "scale(1)" }
        }
      },
      animation: {
        phrase: "phraseIn 0.5s ease-out both",
        ring: "ring 1.4s ease-out both",
        dialog: "dialogIn 0.2s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
