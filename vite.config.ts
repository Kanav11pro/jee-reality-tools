import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '.replit.dev',
      '.id.repl.co',
      '.sisko.replit.dev',
      '.repl.co'
    ],
    strictPort: false,
  },
})
