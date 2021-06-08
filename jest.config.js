module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: [
    "<rootDir>/(src/**/*.spec.(ts|tsx|js))",
    "**/tests/unit/**/*.spec.[jt]s?(x)",
    "**/__tests__/*.[jt]s?(x)",
  ],
  collectCoverage: true,
  coverageDirectory: "tests/coverage",
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        outputPath: "tests/report/test_report.html",
      },
    ],
  ],
  moduleNameMapper: {
    "\\.(csv|txt)$": "<rootDir>/src/__mocks__/raw-loader/index.ts",
  },
};
