/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: 'class',
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
        white: {
          DEFAULT: '#ffffff',
        },
        black: {
          DEFAULT: '#000000',
        },
        background: {
          DEFAULT: '#f0f0f0',
          dark: '#242424',
          header: {
            DEFAULT: '#f0f0f0',
            dark: '#1e1e1e',
          },
          hover: {
            DEFAULT: '#cccccc',
            dark: '#444444',
          }
        },
      }
    },
    fontFamily: {
      primary: ['ibm_plex_mono'],
      doodly: ['doodly_dialect'],
      "empty-w": ['empty_windows'],
      "fipps-r": ['fipps_regular'],
      "jetbrains-m": ['jetbrains_mono'],
      kiwisoda: ['kiwisoda'],
      "outward-b": ['outward_bound'],
      "retro-future": ['retro_future'],
      "tomorrow-n": ['tomorrow_night'],
      whacky: ['whacky_joe'],
      kodemono: ['kodemono'],
      doto: ['doto'],
      "ubuntu-mono": ['ubuntu_mono'],
      "ubuntu-sans-mono": ['ubuntu_sans_mono'],
      metalmania: ['metalmania'],
      ibmplex: ['ibm_plex_mono'],
    }
  },
  plugins: [],
}

