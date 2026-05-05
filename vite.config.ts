import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On Vercel: base = '/' (custom domain, root path)
// On GitHub Pages: base = '/r4sus-clone/' (repo subdirectory)
const base = process.env.VERCEL ? '/' : '/r4sus-clone/'

export default defineConfig({
  plugins: [react()],
  base,
})
