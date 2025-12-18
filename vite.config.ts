import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Enable React fast refresh and TSX support.
export default defineConfig({
  plugins: [react()],
})
