import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  configureWebpack: {
    performance: {
      maxAssetSize: 500000, // Adjust to a higher limit if needed (e.g., 1 MB)
    },
  },
})
