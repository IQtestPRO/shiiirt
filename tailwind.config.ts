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
          blue: "#1A3A7A",
          blueDark: "#0E2557",
          yellow: "#F5D041",
          yellowSoft: "#FCE89A",
          gold: "#A88332",
          goldSoft: "#D9B96A",
          green: "#34D399",
          ink: "#0B0907",
          inkSoft: "#14110C",
          inkCard: "#1A170F",
          paper: "#F7F2E8",
          cream: "#F2EADA",
          sand: "#E8DFCB",
          mist: "#FBF8F1"
        }
      },
      fontFamily: {
        display: ["Bricolage Grotesque", "Onest", "system-ui", "sans-serif"],
        sans: ["Onest", "Manrope", "system-ui", "sans-serif"],
        poppins: ["Poppins", "Onest", "system-ui", "sans-serif"]
      },
      boxShadow: {
        hair: "0 1px 0 0 rgba(247, 242, 232, 0.06)",
        soft: "0 30px 60px -22px rgba(0, 0, 0, 0.6)",
        card: "0 18px 40px -22px rgba(0, 0, 0, 0.7)",
        premium: "0 24px 50px -22px rgba(245, 208, 65, 0.25)",
        glow: "0 0 0 1px rgba(247, 242, 232, 0.08), 0 24px 50px -22px rgba(245, 208, 65, 0.25)"
      },
      borderRadius: {
        xs: "6px",
        "2xs": "4px"
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        inOut: "cubic-bezier(0.77, 0, 0.175, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)"
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        riseIn: "riseIn 600ms cubic-bezier(0.23, 1, 0.32, 1) both",
        marquee: "marquee 42s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
