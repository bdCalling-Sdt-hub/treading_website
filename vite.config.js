import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: "localhost",
    // host: "103.161.9.133",
    port: '3006'
  }
})
