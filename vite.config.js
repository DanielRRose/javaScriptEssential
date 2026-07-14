import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base to your repository name for GitHub Pages project site
  base: '/javaScriptEssential/',
  plugins: [react()],
})
