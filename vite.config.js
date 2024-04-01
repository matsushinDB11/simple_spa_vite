import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  envDir: __dirname,
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}