import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
    base   : process.env.VITE_BASE_PATH ||"/single-page-website",
  }
})
