import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "0",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1760px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-background-pill":
          "linear-gradient(105.93deg, rgba(150, 52, 136, 0.2) -146.13%, rgba(252, 111, 50, 0.2) -26.46%, rgba(255, 74, 89, 0.2) 95.62%)",
        "gradient-white-text":
          "linear-gradient(106.2deg, #FFD6F9 -12.33%, #FFCBB4 50.28%, #FFBEC3 114.17%);",
      },
      colors: {
        "gradient-pink": "#963488",
        "gradient-orange": "#FC6F32",
        "gradient-purple": "#FF4A59",
      },
    },
  },
  plugins: [],
};
export default config;
