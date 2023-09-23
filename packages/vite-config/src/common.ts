import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import UnoCSS from 'unocss/vite'
import { presetTypography, presetUno } from 'unocss'
import AutoImport from 'unplugin-auto-import/vite'
import transformerDirectives from '@unocss/transformer-directives'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
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
    Vue(),
    VueJsx(),
    Pages({
      extensions: ['vue'],
      exclude: ['**/components/**/*', '**/modules/**/*']
    }),
    VueI18n({
      jitCompilation: true
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true,
        filepath: resolve(__dirname, '../../../.eslintrc-auto-import.json')
      }
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          componentPrefix: 'icon',
          customCollections: ['local']
        })
      ]
    }),
    Icons({
      scale: 1,
      compiler: 'vue3',
      customCollections: {
        local: FileSystemIconLoader('src/assets/icons', (svg) =>
          svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
        )
      }
    }),
    UnoCSS({
      content: {
        pipeline: {
          exclude: ['node_modules', 'dist', 'public', 'mock']
        }
      },
      presets: [presetUno(), presetTypography()],
      transformers: [transformerDirectives()]
    })
  ]
}

export default commonConfig
