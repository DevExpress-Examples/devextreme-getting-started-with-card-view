import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [React()],
});
