import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 載入環境變數VITE_開頭的
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    // 辨識本地端或是 GitHub Pages 上的路徑
    base: env.VITE_APP_Path || '/',
    plugins: [react()],
    // HTTPS 需搭配 mkcert localhost
    server: {
      port: 3000,
      https: {
        key: fs.readFileSync('./localhost-key.pem'),
        cert: fs.readFileSync('./localhost.pem')
      }
    }
  }
})
