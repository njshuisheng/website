import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/xkgw/qt': {
        target: 'https://xkcs.jssecco.com',
        secure: true,
        changeOrigin: true,
      }
    }
  }
})
