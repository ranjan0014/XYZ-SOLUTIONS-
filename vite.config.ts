import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Use the env var if present, otherwise use the key provided by the user
  const apiKey = env.API_KEY || "AIzaSyBfBv1AcTl7BCwKD6Ifs2BMGmRnE1wfxDo";

  return {
    plugins: [react()],
    define: {
      // This replaces 'process.env.API_KEY' in your code with the actual string value
      'process.env.API_KEY': JSON.stringify(apiKey),
    }
  };
});