import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath = process.env.VITE_PUBLIC_PATH || '/';

export default defineConfig({
  base: basePath,
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
});