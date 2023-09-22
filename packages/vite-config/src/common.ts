import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pages from 'vite-plugin-pages'
import type { UserConfig } from 'vite'

const commonConfig: UserConfig = {
  server: {
    host: true
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1024
  },
  plugins: [
    vue(),
    vueJsx(),
    pages({
      extensions: ['vue'],
      exclude: ['**/components/**/*', '**/modules/**/*']
    })
  ]
}

export default commonConfig
