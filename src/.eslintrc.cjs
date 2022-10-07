/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        // "plugin:vue/vue3-essential",
        // "eslint:recommended",
        // "@vue/eslint-config-prettier",
        "plugin:vue/vue3-recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "vue/script-indent": ["error", 4],
        "vue/html-comment-indent": ["error", 4],
        "vue/html-indent": ["error", 4],
        "vue/multi-word-component-names": "off",
        "vue/html-closing-bracket-newline": [
            "error",
            {
                singleline: "never",
                multiline: "always",
            },
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: {
                    max: 10,
                },
                multiline: {
                    max: 10,
                },
            },
        ],
        "vue/singleline-html-element-content-newline": "off",
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "always",
                    normal: "never",
                    component: "never",
                },
            },
        ],
        "vue/mustache-interpolation-spacing": ["error", "always"],
        "vue/array-bracket-spacing": ["error", "always"],
        "vue/arrow-spacing": ["error", { before: true, after: true }],
        "vue/comma-spacing": ["error", { before: false, after: true }],
        "vue/keyword-spacing": ["error", { before: true, after: true }],
        "vue/no-use-v-if-with-v-for": ["error", "always"],
        "vue/no-multiple-template-root": "off",
    },
};
