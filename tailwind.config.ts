import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#9333EA",
        accent: "#14B8A6",
        background: "#20293f",
        foreground: "#111827",
        muted: "#9CA3AF",
        warning: "#FACC15",
        error: "#EF4444",
        success: "#10B981",
        orange: "#FF5100",
        softOrange: "#ffdccc",
        white: "#fff",
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
