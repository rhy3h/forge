import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      reportsDirectory: 'coverage',
    },
    projects: [
      {
        test: {
          name: 'electron',
          environment: 'node',
          setupFiles: ['./test/electron/vitest.electron.setup.ts'],
          include: ['test/electron/**/*.test.ts'],
          alias: {
            '@': '/src',
          },
        },
      },
    ],
  },
});
