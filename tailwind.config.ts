import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // Habilita o modo escuro com a classe "dark"
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: "#ffffff",
        darkBackground: "#0a0a0a",
        lightForeground: "#171717",
        darkForeground: "#ededed",
      },
    },
  },
  plugins: [],
} satisfies Config;
