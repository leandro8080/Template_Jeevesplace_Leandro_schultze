import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.js"],
        languageOptions: { sourceType: "commonjs", globals: globals.browser },
        rules: {
            semi: ["error", "always"],
            camelcase: ["error", { properties: "always" }],
            "max-len": ["error", { code: 80, tabWidth: 4 }],
            indent: ["error", 4, { SwitchCase: 1 }], // Do it for case in switches
            quotes: ["error", "double", { avoidEscape: true }], // Use Gravis for things like \ or ${}
            "brace-style": ["error", "1tbs", { allowSingleLine: true }], // One True Brace Style
        },
    },
];
