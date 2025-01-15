/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8d42b9',
          dark: '#6eb942',
        },
        secondary: {
          DEFAULT: '#6eb942',
          dark: '#8d42b9',
        },
      }
    },
    fontFamily: {
      doodly: ['doodly_dialect'],
      "empty-w": ['empty_windows'],
      "fipps-r": ['fipps_regular'],
      "jetbrains-m": ['jetbrains_mono'],
      kiwisoda: ['kiwisoda'],
      "outward-b": ['outward_bound'],
      "retro-future": ['retro_future'],
      "tomorrow-n": ['tomorrow_night'],
      whacky: ['whacky_joe'],
    }
  },
  plugins: [],
}

