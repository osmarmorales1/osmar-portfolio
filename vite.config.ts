import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath } from 'node:url';
const aliases: Record<string,string> = {
  '/api/portfolio': '/agent/profile.json',
  '/api/portfolio/projects': '/agent/projects.json',
  '/api/portfolio/experience': '/agent/experience.json',
};
export default defineConfig({
  plugins: [react(), {
    name: 'public-profile-aliases',
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        const path = request.url?.split('?')[0]?.replace(/\/$/, '');
        if (path && aliases[path]) request.url = aliases[path];
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((request, _response, next) => {
        const path = request.url?.split('?')[0]?.replace(/\/$/, '');
        if (path && aliases[path]) request.url = aliases[path];
        next();
      });
    },
  }],
  resolve: { alias: { '@': fileURLToPath(new URL('.', import.meta.url)) } },
  css: { postcss: { plugins: [tailwindcss()] } },
});
