
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neoBlack: "#0A0A0A",
        neoWhite: "#FAFAF5",
        neoYellow: "#FFE500",
        neoBlue: "#3B82F6",
        neoBlueLight: "#DBEAFE",
        neoRed: "#EF4444",
        neoRedLight: "#FEE2E2",
        neoGreen: "#22C55E",
        neoGreenLight: "#DCFCE7",
        neoPurple: "#8B5CF6",
        neoPurpleLight: "#EDE9FE",
        neoOrange: "#F97316",
        neoOrangeLight: "#FFEDD5",
      },
      boxShadow: {
        'brutal-sm': '4px 4px 0px #0A0A0A',
        'brutal-md': '6px 6px 0px #0A0A0A',
        'brutal-lg': '8px 8px 0px #0A0A0A',
        'brutal-xl': '12px 12px 0px #0A0A0A',
      },
      fontFamily: {
        main: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
