import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      next: path.resolve(__dirname, './src/compat/next'),
      'next/link': path.resolve(__dirname, './src/compat/next/link.tsx'),
      'next/image': path.resolve(__dirname, './src/compat/next/image.tsx'),
      'next/navigation': path.resolve(__dirname, './src/compat/next/navigation.ts'),
      'next/font/google': path.resolve(__dirname, './src/compat/next/font-google.ts'),
      'next/server': path.resolve(__dirname, './src/compat/next/server.ts'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
  build: {
    outDir: 'dist',
  },
});
