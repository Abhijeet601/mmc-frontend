import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const railwayBackendUrl = 'https://mmc-backend-production-1fa6.up.railway.app'

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
    plugins: [react()],
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
