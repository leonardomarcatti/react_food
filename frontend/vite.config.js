import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] })
   ],
   server: {
      host: true,
      port: 3000,
      proxy: {
         "/meals": {
            target: "http://backend:3001",
            changeOrigin: true,
            secure: false
         },
         "/orders": {
            target: "http://backend:3001",
            changeOrigin: true,
            secure: false
         }
      }
   }
})