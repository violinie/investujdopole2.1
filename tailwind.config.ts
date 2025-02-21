import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "primary-blue": "var(--primary-blue)",
        "primary-blue-light": "var(--primary-blue-light)",
        "primary-green-light": "var(--primary-green-light)",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
