import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  server: {
    open: './app/index.html',
  },
  build: {
    outDir: './app/dist',
    rollupOptions: {
      input: './app/index.html',
    },
    target: 'es2020',
    emptyOutDir: true,
  },
  plugins: [react()],
});
