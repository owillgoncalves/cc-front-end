const path = require("path");

const fromRoot = (d) => path.join(__dirname, d);

module.exports = {
  projects: [
    {
      displayName: "SERVER",
      setupFilesAfterEnv: [fromRoot('jest.setup.ts')],
      moduleDirectories: ["node_modules", fromRoot("tests")],
      moduleNameMapper: {
        "~/(.*)": fromRoot("app/$1"),
        "tests/(.*)": fromRoot("tests/$1"),
      },
      transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest",
      },
      globals: {
        "ts-jest": {
          isolatedModules: true,
        },
      },
      testEnvironment: "node",
      // *.spec files are for server unit tests
      testMatch: ['**/*.spec.{js,jsx,ts,tsx}'],
    },
    {
      displayName: "UI",
      moduleNameMapper: {
        // Handle absolute imports in Remix
        '~/(.*)': fromRoot('app/$1'),
        "tests/(.*)": fromRoot("tests/$1"),
      },
      setupFilesAfterEnv: [fromRoot('jest.setup.js')],
      testPathIgnorePatterns: [
        fromRoot('node_modules/'),
        fromRoot('.cache/'),
        fromRoot('build/'),
      ],
      testEnvironment: 'jsdom',
      // *.test files are for client unit tests
      testMatch: ['**/*.test.{js,jsx,ts,tsx}'],
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
        '^.+\\.(css|scss|sass|less)$': 'jest-preview/transforms/css',
        '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
          'jest-preview/transforms/file',
      },
      transformIgnorePatterns: [
        'node_modules/(?!(@remix-run|@remix-run/.*))',
      ],
    }
  ],
};
