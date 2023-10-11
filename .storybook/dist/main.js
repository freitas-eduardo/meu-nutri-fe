"use strict";
exports.__esModule = true;
var config = {
    "stories": [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
        "../components/**/*.stories.@(js|jsx|ts|tsx)" // Load stories from components directory
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y" // Additional addon for accessibility
    ],
    "framework": {
        "name": "@storybook/nextjs",
        "options": {}
    },
    "docs": {
        "autodocs": true // Generate docs automatically for each story
    }
};
exports["default"] = config;
