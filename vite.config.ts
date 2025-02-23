import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

// https://vite.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    define: {
      __VUE_PROD_DEVTOOLS__: 'true'
    },
    plugins: [
      vue(),
      vueDevTools(),
      Components({
        resolvers: [PrimeVueResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      emptyOutDir: true,
      outDir: 'build',
      assetsDir: 'SiteAssets',
      minify: false,
      rollupOptions: {
        output: {
          hashCharacters: 'hex',
          entryFileNames: 'SiteAssets/js/' + process.env.VITE_APP_TITLE + '.js',
          chunkFileNames: 'SiteAssets/js/' + process.env.VITE_APP_TITLE + '.js',
          assetFileNames: (assetInfo) => {
            const n = '' + assetInfo.name
            const info = n.split('.')
            const ext = info[info.length - 1]
            if (/svg|ttf|woff|woff2|eot/i.test(ext)) {
              return `fonts/[name].${ext}`
            }
            if (/css/i.test(ext)) {
              return 'SiteAssets/css/' + process.env.VITE_APP_TITLE + '.css'
            }
            return ''
          }
        }
      }
    }
  })
}
