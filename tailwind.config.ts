import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0346A5",
          blueDark: "#061B3A",
          yellow: "#F8D84E",
          gold: "#CDA24A",
          green: "#14905D",
          ink: "#08162F",
          surface: "#EEF2F6",
          mist: "#F7F8FA"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(8, 22, 47, 0.18)",
        card: "0 12px 34px rgba(8, 22, 47, 0.10)",
        premium: "0 18px 60px rgba(3, 70, 165, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
