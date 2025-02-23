import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    emptyOutDir: true,
    outDir: 'build',
    assetsDir: 'SiteAssets',
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: 'SiteAssets/js/helloworld-widget.js',
        chunkFileNames: 'SiteAssets/js/helloworld-widget.js',
        assetFileNames: (assetInfo) => {
          const n = '' + assetInfo.names
          const info = n.split('.')
          const ext = info[info.length - 1]
          if (/css/i.test(ext)) {
            return 'SiteAssets/css/helloworld-widget.css'
          }
          return ''
        },
      },
    },
  },
})
