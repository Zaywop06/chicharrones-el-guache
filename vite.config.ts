import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubPagesBase = '/chicharrones-el-guache/';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? githubPagesBase : '/',
  plugins: [react()],
}));
