import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
const {
  resolve
} = require('path')
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '/@/': resolve(__dirname, 'src')
    }
  },
  server: {
    // host: "127.0.0.1",
    // port: "3000",
    open: '/signin',
    //   proxy: {
    //     '/n_node': {
    //       target: 'http://192.168.20.130:8910',
    //       changeOrigin: true,
    //       // rewrite: (path) => path.replace(/^\/api/, '')
    //     },
    //     '/d_sysop': {
    //       target: 'http://192.168.20.130:41111',
    //       changeOrigin: true,
    //       // rewrite: (path) => path.replace(/^\/api/, '')
    //     },
    //     '/ws': {
    //       target: 'http://192.168.20.130:49101',
    //       changeOrigin: true,
    //       // rewrite: (path) => path.replace(/^\/api/, '')
    //     },
    //   }
    // }
    // build: {
    //   outDir: "",
    //   assetsDir: "",
  }
})