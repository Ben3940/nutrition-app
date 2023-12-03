import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: './graphql/dist',
    target: 'es2020',
    emptyOutDir: true,

    // rollupOptions: {
    //   input: './graphql/src/server.ts',
    // },
  },
  plugins: [react()],
});
