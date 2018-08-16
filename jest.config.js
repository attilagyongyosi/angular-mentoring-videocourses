module.exports = {
    preset: "jest-preset-angular",
    setupTestFrameworkScriptFile: "<rootDir>/src/test.ts",
    moduleFileExtensions: [ "ts", "js", "html" ],
    moduleDirectories: [ "node_modules", "src" ],
    globals: {
        "ts-jest": {
            "tsConfigFile": "tsconfig.json"
        },
        "__TRANSFORM_HTML__": true
    },
    testMatch: [
        "**/__tests__/**/*.spec.+(ts|js)?(x)",
        "**/+(*.)+(spec|test).+(ts|js)?(x)"
    ],
    coverageDirectory: "./generated/jest-coverage",
    coverageReporters: [ "html" ]
}
