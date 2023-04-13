// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

module.exports = config;

module.exports = {
  transform: { "^.+.tsx?$": "ts-jest" },
  testEnvironment: "nodejs",
  testRegex: "(/tests/.*|(.|/)(test|spec)).tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "module.scss$": "identity-obj-proxy",
  },
  setupFiles: ["/source/test/testconfig.d.ts", "/source/test/setupJest.ts"],
  setupTestFrameworkScriptFile: "/source/test/testconfig.ts",
  globals: {
    NODE_PATH: "source/",
  },
  moduleDirectories: ["node_modules", "source/"],
  automock: false,
};
