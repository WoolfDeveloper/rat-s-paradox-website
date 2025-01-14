import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import type { UserConfig } from 'vite'

// https://vite.dev/config/
// Al pasar al dominio ratsparadox.com se debe cambiar el basename
export default defineConfig({
  plugins: [react()],
  base: '/rat-s-paradox-website/',
  css: {
    postcss: {
      plugins: [
        tailwindcss() as any,
        autoprefixer() as any,
      ],
    },
  },
} as UserConfig)