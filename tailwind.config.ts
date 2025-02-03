import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryYellow : "#E8AE00",
        primaryBlue : "#0048FF",
        darkerBlue : "#11275D",
        darkestBlue : "#030738",
        dark0_15 : "rgba(0, 0, 0, 0.15)",
        darkBlue0_75 : "rgba(3, 7, 56, 0.75)",
        filterBlue : "rgba(17, 39, 93, 0.5)",
        filterDarkerBlue : "rgba(15, 40, 100, 0.75)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
