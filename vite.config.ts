// NEW vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/', // Default base for dev
  }

  if (command === 'build') {
    // Apply base for production build only
    config.base = '/stp_general/'
  }

  return config
})