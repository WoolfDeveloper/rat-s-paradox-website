import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Al pasar al dominio ratsparadox.com se debe cambiar el basename
export default defineConfig({
  plugins: [react()],
  base: '/rat-s-paradox-website/',
})
