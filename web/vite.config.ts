import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/exercise/',
  plugins: [react()],
  server: {
    port: 5174,
  },
});
