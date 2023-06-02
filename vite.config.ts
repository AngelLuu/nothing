import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      // scss: {
      //   // additionalData: '@import "@/assets/sass/globalVar.scss";',
      // }
    }
  },
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()], }),
    Components({ resolvers: [ElementPlusResolver()], }),
  ],

})
