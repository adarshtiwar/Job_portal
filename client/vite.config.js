import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { qrcode } from 'vite-plugin-qrcode'

export default defineConfig({
  plugins: [tailwindcss(), react(),],
  server: {
    host: '0.0.0.0',
    port: 5173,
    // 👇 Important for React Router
    fs: {
      strict: false,
    },
  },
  // 👇 this enables SPA routing (redirects all paths to index.html)
  build: {
    rollupOptions: {},
  },
  preview: {
    port: 5173,
    host: '0.0.0.0',
  }
})
