import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis'
  },
  resolve: {
    alias: {
      // Polyfill modules that use Node globals:
      process: 'process/browser',
      buffer: 'buffer'
    }
  },
  optimizeDeps: {
  
      include: ['@reown/appkit-react'],
    esbuildOptions: {
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  }
});
