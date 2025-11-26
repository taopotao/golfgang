import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If your repo name is different, change '/golfgang/' to '/your-repo-name/'
  base: '/golfgang/'
})
