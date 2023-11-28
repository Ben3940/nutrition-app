import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    outDir: '../public',
    rollupOptions: {
      external: './src/main.tsx',
    },
    target: 'es2020',
    emptyOutDir: true,
  },
  plugins: [react()],
});
