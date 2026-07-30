import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// User site (username.github.io) is served from domain root.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
