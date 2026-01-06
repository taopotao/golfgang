import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change 'golfgang-new' to your GitHub repo name
  base: '/golfgang/',
})
