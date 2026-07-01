import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { cpSync, existsSync, readFileSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'

const railwayBackendUrl = 'https://hostel-erp-backend-production.up.railway.app'
const erpStaticDir = fileURLToPath(new URL('./mmc-erp', import.meta.url))

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
}

const mmcErpStaticPlugin = () => ({
  name: 'mmc-erp-static',
  configureServer(server) {
    server.middlewares.use('/mmc-erp', (req, res, next) => {
      const requestPath = decodeURIComponent((req.url || '').split('?')[0]).replace(/^\/+/, '')
      const filePath = normalize(join(erpStaticDir, requestPath || 'student/login.html'))
      if (!filePath.startsWith(normalize(erpStaticDir)) || !existsSync(filePath) || !statSync(filePath).isFile()) {
        next()
        return
      }

      res.setHeader('Content-Type', mimeTypes[extname(filePath).toLowerCase()] || 'application/octet-stream')
      res.end(readFileSync(filePath))
    })
  },
  writeBundle(options) {
    const outputDir = options.dir || 'dist'
    if (existsSync(erpStaticDir)) {
      cpSync(erpStaticDir, join(outputDir, 'mmc-erp'), { recursive: true })
    }
  },
})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const erpProxyTarget =
    env.VITE_ERP_DEV_PROXY_TARGET ||
    env.VITE_ERP_API_BASE ||
    env.VITE_API_BASE ||
    env.VITE_API_BASE_URL ||
    railwayBackendUrl

  return {
    plugins: [react(), mmcErpStaticPlugin()],
    server: {
      port: 3000,
      host: '::',
      proxy: {
        '/api': {
          target: erpProxyTarget,
          changeOrigin: true,
        },
        '/uploads': {
          target: erpProxyTarget,
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      // Increase chunk size warning limit to avoid benign warnings for this bundle
      chunkSizeWarningLimit: 700,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return undefined
            if (id.includes('@tanstack') || id.includes('xlsx')) return 'erp-data'
            if (id.includes('framer-motion') || id.includes('lucide-react')) return 'erp-ui'
            if (id.includes('@radix-ui')) return 'radix-ui'
            return undefined
          },
        },
      },
    },
  }
})
