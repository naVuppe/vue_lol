import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuesetupExtend from 'vite-plugin-vue-setup-extend';

// element-plus
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuesetupExtend(),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 10500,
  },
  // proxy代理
  devServer: {
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://dog.ceo/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  }
});
