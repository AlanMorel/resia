module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/app/$1"
    }
};
