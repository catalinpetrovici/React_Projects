import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('semantic-ui')) {
            return 'semantic';
          } else if (id.includes('react-dom')) {
            return 'react';
          } else if (id.includes('node_modules')) {
            const [, module] = /node_modules\/(@?[a-z0-9-]+?[a-z0-9-]+)/.exec(
              id
            );
            const path = join(
              process.cwd(),
              'node_modules',
              module,
              'package.json'
            );
            if (fs.existsSync(path)) {
              try {
                const packageJson = require(path);
                const version = packageJson.version;
                console.log(module, version);
                return `@vendor/${module}_${version}.js`;
              } catch (error) {}
            }
          }
        },
      },
    },
  },
});
