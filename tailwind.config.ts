import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        "primary-blue": "var(--primary-blue)",
        "primary-blue-light": "var(--primary-blue-light)",
        "primary-green-light": "var(--primary-green-light)",
        "muted-foreground": "var(--muted-foreground)",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
